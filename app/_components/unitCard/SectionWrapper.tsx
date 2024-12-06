"use client";
import React, { useState } from "react";
import { Unit } from "../_types/CardTypes";
import UnitGrid from "./unitGrid";
import { LeftArrowIcon, RightArrowIcon } from "../svgs";

interface SectionProps {
  title: string;
  units: Unit[];
  gridColumns?: string;
  itemsPerPage: number;
}

const Section: React.FC<SectionProps> = ({
  title,
  units,
  gridColumns,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(units.length / itemsPerPage);

  const currentUnits = units.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mb-10">
      <UnitGrid title={title} units={currentUnits} gridColumns={gridColumns} />

      <div className="flex justify-center gap-6 mt-4 ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 bg-gray-200  rounded-full disabled:opacity-50"
        >
          <LeftArrowIcon />
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 bg-gray-200  rounded-full disabled:opacity-50"
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Section;
