import React from 'react';

export type PropertyCardProps = {
  imageSrc: string;
  address: string;
  description: string;
};

function PropertyCard({
  imageSrc,
  address,
  description,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        alt="Property Image"
        className="w-full h-48 object-cover"
        src={imageSrc}
        style={{
          aspectRatio: '400/250',
          objectFit: 'cover',
        }}
        width={400}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{address}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <button
            className="text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 px-4 py-2 rounded"
          >
            Remove Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
