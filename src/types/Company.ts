export interface Company {
  name: string;
  tagline: string;
  description: string;

  website: string;
  linkedin: string;

  logo: string;

  location: {
    address: string;
    city: string;
    state: string;
    country: string;

    googleMapsUrl: string;
    embedUrl: string;
  };
}