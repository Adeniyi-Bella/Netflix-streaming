import Image from "next/image";

//icons from heroicons.com
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//for routing to account page
import Link from 'next/link'
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";


function Header() {
    //check if user has scrolled down
    const [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()

    //fires when user scrolls
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
        //listen for scroll event and fire handleScroll function
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            //remove event listener when component unmounts
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      {/* left section */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      {/* right section */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
          <img
          onClick={logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
