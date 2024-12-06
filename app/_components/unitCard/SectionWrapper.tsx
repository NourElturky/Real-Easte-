import { Unit } from "../_types/CardTypes";
import UnitGrid from "./unitGrid";

interface SectionProps {
    title: string; 
    units: Unit[]; 
    gridColumns?: string; 
  }
  
  export const Section: React.FC<SectionProps> = ({ title, units, gridColumns }) => {
    return (
      <div className="mb-12">
        <UnitGrid
          units={units}
          title={title}
          gridColumns={gridColumns || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}
        />
      </div>
    );
  };
  