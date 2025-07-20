import { supabase } from "@/app/utils/supabase";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";
  const category = searchParams.get("category") || "all";

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .range((Number(page) - 1) * Number(limit), Number(page) * Number(limit) - 1)
    .order("created_at", { ascending: false })
    .limit(Number(limit));

  if (category !== "all") {
    supabase.eq("category_id", category === "all" ? undefined : category);
  }

  if (error) {
    return new Response(error.message, { status: 400 });
  }

  if (!data || data.length === 0) {
    return new Response("No projects found", { status: 404 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
