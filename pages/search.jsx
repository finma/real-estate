import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";

import Property from "../components/Property";
import SearchFilters from "../components/SearchFilters";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full">
      <button
        onClick={() => setSearchFilters(!searchFilters)}
        className="w-full h-16 bg-gray-300 flex items-center justify-center space-x-5 font-medium text-xl text-black"
      >
        <span>Search Property By Filters</span> <BsFilter />
      </button>
      {searchFilters && <SearchFilters />}
      <h1 className="text-xl font-medium">Properties {router.query.purpose}</h1>
      <div className="flex flex-wrap my-12">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className="text-center">
          <h1 className="text-xl font-medium">Property not found</h1>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
