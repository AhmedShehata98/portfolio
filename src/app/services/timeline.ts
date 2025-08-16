import { WorkExperience } from "@/types/timeline";
import { supabase } from "../utils/supabase";

export const fetchTimeline = async (): Promise<WorkExperience[]> => {
  try {
    const { data, error } = await supabase
      .from("timeline")
      .select("*")
      .order("employment_start_date", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching timeline:", error);
    throw error;
  }
};
