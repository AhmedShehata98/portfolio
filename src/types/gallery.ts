export type Project = {
  category_id: number;
  created_at: string; // ISO 8601 date string
  description: string;
  id: number;
  live_demo_url: string;
  repo_url: string;
  tech_stack: string; // comma-separated string
  thumbnail: string; // URL to image
  title: string;
};
