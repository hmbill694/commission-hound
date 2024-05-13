import React from 'react';
import { Button } from '~/components/ui/button';
import deleteProperty from '~/server/actions/deleteProperty';

export type PropertyCardProps = {
  id: string
  address: string;
  description: string;
};

function PropertyCard({
  id,
  address,
  description,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-bold">{address}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <form action={deleteProperty} className="flex items-center justify-end mt-4 gap-3">
          <input hidden value={id} name='id' readOnly />
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-200"
          >
            Remove Property
          </Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-200"
          >
            Mark as sold
          </Button>
        </form>
      </div>
    </div>
  );
}

export default PropertyCard;
