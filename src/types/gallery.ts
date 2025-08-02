export type Project = {
  category_id: {
    id: number;
    name: string;
  }[];
  created_at?: string;
  description: string;
  id: number;
  live_demo_url: string;
  repo_url: string;
  tech_stack: string;
  thumbnail: string;
  title: string;
};
