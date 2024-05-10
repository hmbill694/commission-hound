import React from 'react';
import { Button } from '~/components/ui/button';

export type PropertyCardProps = {
  id: string
  imageSrc: string;
  address: string;
  description: string;
};

function PropertyCard({
  address,
  description,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-bold">{address}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center justify-end mt-4 gap-3">
          <Button
            variant="outline"
            className="border-red-500 text-red-500"
          >
            Remove Property
          </Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-500"
          >
            Mark as sold
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
