// pages/index.tsx
import React from 'react';
import { Unit } from './_components/_types/CardTypes';
import UnitGrid from './_components/unitCard/unitGrid';

const cardUnits: Unit[] = [
  {
    id: 1,
    title: 'Skyper Pool Apartment',
    address: '1020 Bloomingdale Ave',
    bedrooms: 4,
    bathrooms: 2,
    size: 450,
    price: '$280,000',
    image: '/images/img1.png',
    status: 'For Sale',
  },
  {
    id: 2,
    title: 'North Dillard Street',
    address: '4330 Bell Shoals Rd',
    bedrooms: 4,
    bathrooms: 2,
    size: 400,
    price: '$250/month',
    image: '/images/img2.png',
    status: 'For Rent',
    delivery: 'Featured',
  },
  {
    id: 3,
    title: 'Eaton Garth Penthouse',
    address: '7722 18th Ave, Brooklyn',
    bedrooms: 4,
    bathrooms: 2,
    size: 450,
    price: '$180,000',
    image: '/images/img3.png',
    status: 'For Sale',
  },
  {
    id: 4,
    title: 'Skyper Pool Apartment',
    address: '1020 Bloomingdale Ave',
    bedrooms: 4,
    bathrooms: 2,
    size: 450,
    price: '$280,000',
    image: '/images/img1.png',
    status: 'For Sale',
  },
  {
    id: 5,
    title: 'North Dillard Street',
    address: '4330 Bell Shoals Rd',
    bedrooms: 4,
    bathrooms: 2,
    size: 400,
    price: '$250/month',
    image: '/images/img2.png',
    status: 'For Rent',
  },
  {
    id: 6,
    title: 'Eaton Garth Penthouse',
    address: '7722 18th Ave, Brooklyn',
    bedrooms: 4,
    bathrooms: 2,
    size: 450,
    price: '$180,000',
    image: '/images/img3.png',
    status: 'For Sale',
    delivery: 'Featured',
  },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <UnitGrid units={cardUnits} />
    </div>
  );
};

export default Home;
