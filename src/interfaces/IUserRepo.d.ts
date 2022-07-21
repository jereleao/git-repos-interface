export interface IUserRepo {
  url: string;
  created_at: string;
  updated_at: string;
  description: string;
  name: string;
  releases_url: string;
  disabled: boolean;
  privateRepo: boolean;
}
