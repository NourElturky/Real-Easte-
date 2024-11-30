import React from 'react';
import { Unit } from '../_types/CardTypes';
import UnitCard from './unitCard';

interface UnitGridProps {
  units: Unit[];
}

const UnitGrid: React.FC<UnitGridProps> = ({ units }) => {
  return (
    <div>
      <p className="text-center mb-4 text-[32px] sm:text-[40px]">Discover Our Best Deals</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
};


export default UnitGrid;
