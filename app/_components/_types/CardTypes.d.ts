export interface Unit {
    id: number;
    location: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    price: string;
    image: string;
    status: 'For Sale' | 'For Rent' ;
    delivery?:"Featured"
  }
  