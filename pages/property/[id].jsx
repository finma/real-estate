import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import Image from "next/image";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <div className="w-full my-10">
      {photos && <ImageScrollbar data={photos} />}
      <div className="w-full p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-green-400 mr-3">
              {isVerified && <GoVerified />}
            </span>
            <h3 className="font-medium text-lg">
              AED {price}
              {rentFrequency && `/${rentFrequency}`}
            </h3>
          </div>
          <div>
            <Image
              src={agency?.logo?.url}
              alt="avatar"
              width={50}
              height={50}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
          </div>
        </div>
        <div className="flex p-1 justify-between w-[250px] text-blue-400 items-center">
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
      </div>
      <main className="pt-2">
        <h2 className="text-lg mb-2 font-bold">{title}</h2>
        <p className="font-normal text-gray-600">{description}</p>
      </main>
      <div className="flex flex-wrap uppercase justify-between">
        <div className="flex justify-between w-[400px] border-b border-gray-100 p-3">
          <p>Type</p>
          <p className="font-bold">{type}</p>
        </div>
        <div className="flex justify-between w-[400px] border-b border-gray-100 p-3">
          <p>Perpose</p>
          <p className="font-bold">{purpose}</p>
        </div>
        {furnishingStatus && (
          <div className="flex justify-between w-[400px] border-b border-gray-100 p-3">
            <p>Furnishing Status</p>
            <p className="font-bold">{furnishingStatus}</p>
          </div>
        )}
      </div>
      <div className="w-full">
        {amenities.length && (
          <h2 className="text-2xl font-medium mt-5">Facilites:</h2>
        )}
        <div className="flex flex-wrap">
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <span
                key={amenity.text}
                className="font-medium text-blue-400 text-lg p-2 bg-gray-200 m-1 rounded-md"
              >
                {amenity.text}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetails;
