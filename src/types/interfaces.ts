export interface HealthcareProvider {
    id: string;
    name: string;
    city: string;
    street: string;
    postalCode: string;
    phone: string;
}
export interface NewsArticle {
    id: number;
    headLine: string;
    link: string;
  }
  
  export interface NewsInfoData {
    record: NewsArticle[];
  }
