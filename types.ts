export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  raised: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
