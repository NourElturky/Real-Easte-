export interface Unit {
    id: number;
    title: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: string;
    image: string;
    status: 'For Sale' | 'For Rent' ;
    delivery?:"Featured"
  }
  