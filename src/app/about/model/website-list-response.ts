import { Webinfo } from './webinfo';

export interface WebsiteListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Webinfo[];
}

