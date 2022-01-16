import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <div className="p-2 border-b border-gray-100 flex justify-between">
    <div className="text-3xl text-blue-400 font-bold">
      <Link href="/" paddingLeft="2">
        Real Estate
      </Link>
    </div>
    <div className="z-100">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <div className="bg-white border rounded-lg w-52 z-100 ">
            <Link href="/" passHref>
              <a className="px-4 py-2 w-full flex items-center space-x-2 hover:bg-gray-200">
                <FcHome /> <span>Home</span>
              </a>
            </Link>
            <Link href="/search" passHref>
              <a className="px-4 py-2 w-full flex items-center space-x-2 hover:bg-gray-200">
                <BsSearch /> <span>Search</span>
              </a>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <a className="px-4 py-2 w-full flex items-center space-x-2 hover:bg-gray-200">
                <FcAbout /> <span>Buy Property</span>
              </a>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <a className="px-4 py-2 w-full flex items-center space-x-2 hover:bg-gray-200">
                <FiKey /> <span>Rent Property</span>
              </a>
            </Link>
          </div>
        </MenuList>
      </Menu>
    </div>
  </div>
);

export default Navbar;
