export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  activities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  comment: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}