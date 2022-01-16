import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

// import DefaultImage from "../assets/images/house.jpg";

const DefaultImage =
  "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="flex p-5 w-[420px] pt-0 justify-start flex-col cursor-pointer">
      <div>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
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
        <p className="text-normal">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </p>
      </div>
    </div>
  </Link>
);

export default Property;
