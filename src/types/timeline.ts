export type WorkExperience = {
  id: number;
  company_name: string;
  location: string;
  job_title: string;
  description: string;
  tech_stack: string; // comma-separated list
  employment_start_date: string; // ISO 8601 date
  employment_end_date: string; // ISO 8601 date
  is_present: boolean;
  created_at: string; // ISO 8601 date
};
