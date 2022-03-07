export interface Images {
  png: string;
  webp: string;
}

export interface Destination {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: Images;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: Images;
  description: string;
}
