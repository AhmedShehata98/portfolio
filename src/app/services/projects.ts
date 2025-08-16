import type { ProjectCategories } from "@/types/projects";
import type { Project } from "@/types/gallery";
import { supabase } from "../utils/supabase";

export const fetchProjectCategory = async (): Promise<ProjectCategories[]> => {
  try {
    const { data, error } = await supabase.from("project_category").select("*");
    if (error) {
      throw error;
    }
    return data as ProjectCategories[];
  } catch (error) {
    console.log("Error while fetching projects category: ", error);
    throw error;
  }
};

export const fetchProjects = async (
  projectCategoryId: number
): Promise<Project[]> => {
  try {
    const projectsQuery = supabase
      .from("projects")
      .select(
        `
          id,
          thumbnail,
          title,
          description,
          tech_stack,
          live_demo_url,
          repo_url,
          created_at,
          category_id (
            id,
            name
          )
        `
      )
      .order("created_at", { ascending: false });

    if (projectCategoryId && projectCategoryId !== 3) {
      projectsQuery.eq("category_id", projectCategoryId);
    }

    const { data, error } = await projectsQuery;

    if (error) {
      throw error;
    }
    if (!data) {
      throw new Error("projects not found");
    }
    return data as Project[];
  } catch (error) {
    console.log("error while fetch projects: ", error);
    throw error;
  }
};
