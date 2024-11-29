// pages/index.tsx
import React from 'react';
import { Unit } from './_components/_types/CardTypes';
import UnitGrid from './_components/unitCard/unitGrid';
import { PropertyCard } from './_components/_types/PropertyCard';
import PropertyGrid from './_components/propertyCard/PropertyGrid';

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

const properties: PropertyCard[] = [
  {
    id: 1,
    title: "New York",
    count: 8,
    image: '/images/c1.png',
    link: "/properties/new-york",
  },
  {
    id: 2,
    title: "Chicago",
    count: 2,
    image: '/images/c2.png',
    link: "/properties/chicago",
  },
  {
    id: 3,
    title: "Los Angeles",
    count: 1,
    image: '/images/c3.png',
    link: "/properties/los-angeles",
  },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <PropertyGrid properties={properties} />

      <div className="mt-12">
        <UnitGrid units={cardUnits} />
      </div>
    </div>
  );
};

export default Home;
