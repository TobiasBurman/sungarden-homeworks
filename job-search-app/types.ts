export interface Employer {
    name: string;
    workplace?: string;
  }
  
export interface WorkplaceAddress {
    municipality: string;
    region?: string;
    country?: string;
  }
  
export interface Job {
    headline: string;
    employer: Employer;
    workplace_address: WorkplaceAddress;
    publication_date: string;
    id: string;
  }
  
export interface SearchResponse {
    hits: Job[];
    total: {
      value: number;
    };
  }
  
export interface SearchParams {
    profession?: string;
    city?: string;
  }