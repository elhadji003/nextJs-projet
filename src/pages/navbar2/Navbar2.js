import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import ProfileAdmin from "@/app/assets/img-2.jpg"
import Image from "next/image";

export default function Navbar2() {
 
      return (
        <div className="Navbar">
            <nav className="border-bottom">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-14 w-full items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <span className="relative max-[1280px]:left-10 text-dark rounded-md px-3 py-2 text-sm font-bold">Dashboard</span>
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="search">
                            <input type="text" className="border border-sky-200 outline-none rounded-full p-1" placeholder="🔎 rechercher"/>
                        </div>
                        <div className="search">
                            <Link href="/notification" className="pointer-events-auto text-black">
                                <FontAwesomeIcon icon={faBell} />
                            </Link>
                        </div>
                        <div className="search">
                            <div className="shrink-0">
                                <Image className="h-10 w-10 object-cover rounded-full" src={ProfileAdmin} alt='Profile Admin'/>
                            </div>
                        </div>
                        <div className="logOut">
                            <Link href="/" className="pointer-events-auto text-black">
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            <header className='border-bottom'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-14 w-full items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <div className="relative max-[1280px]:left-10 text-xl px-3">
                                <span className="">Hôtels</span>
                                <span className="text-xl text-gray-400 font-bold"> 8</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex gap-3 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="buttonAdd">
                            <Link href="/creerHotel" className="border border-sky-200 outline-none rounded-full p-2 relative max-[1280px]:right-12">
                                <span className="p-1"><FontAwesomeIcon icon={faPlus} color="black"/></span>
                                <span className="p-1 text-black">Creer un nouveau hotel</span>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
