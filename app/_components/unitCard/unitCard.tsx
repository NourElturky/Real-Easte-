"use client";
import React, { useState } from "react";
import { Unit } from "../_types/CardTypes";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  BathroomIcon,
  BadroomIcon,
  AreaIcon,
  LocationIcon,
  FavoriteIcon,
} from "../svgs";

interface UnitCardProps {
  unit: Unit;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-[447px] h-[453px]">
      {/* Image Container */}
      <div className="relative">
        <Image
          src={unit.image}
          alt={unit.title}
          width={340}
          height={192}
          className="w-full h-[311px] object-cover rounded-lg"
        />

        {/* Status Badge */}
        <div className="absolute top-5 left-5 flex gap-2.5">
          {unit.delivery === "Featured" && (
            <span className="bg-[#E7C873] text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
          {(unit.status === "For Sale" || unit.status === "For Rent") && (
            <span className="bg-[#1F4B43] text-white text-xs px-2 py-1 rounded-full">
              {unit.status}
            </span>
          )}
        </div>

        {/* Heart Icon */}
        <div className="absolute top-5 right-5 cursor-pointer">
          <FavoriteIcon
            fill={isFavorited ? "red" : "white"}
            onClick={toggleFavorite}
          />
        </div>
      </div>

      {/* Unit Details */}
      <div className="p-4">
        <h2 className="text-base font-semibold mb-1">{unit.title}</h2>
        <div className="flex gap-2">
          <LocationIcon />
          <p className="text-sm mb-4">{unit.address}</p>
        </div>
        <Separator />
        <div className="flex justify-between items-center text-sm mt-4">
          <div className=" flex gap-3">
            <div className="flex gap-2 pl-2">
              <BadroomIcon />
              <p>{unit.bedrooms}</p>
            </div>
            <div className="flex gap-2 pl-2 border-l border-gray-200">
              <BathroomIcon />
              <p>{unit.bathrooms}</p>
            </div>
            <div className="flex gap-2 pl-2 border-l border-gray-200">
              <AreaIcon />
              <p>{unit.size}</p>
            </div>
          </div>

          <div className="text-[#EB664E] font-semibold">{unit.price}</div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
