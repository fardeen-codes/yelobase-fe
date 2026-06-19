export type TestimonialCategory =
  | "Zoho Services"
  | "AI Agent"
  | "Automation"
  | "Custom Development";

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;           // ISO — latest = featured dark card
  category: TestimonialCategory;
  featured?: boolean;     // optional override
}