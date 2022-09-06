import Image from "next/image";
import AppleNewsLogo from "./AppleNewsLogo.svg"
import Dropdown from "./Dropdown.js"
import WriteArticle from "./WriteArticleIcon.js"
// import Popup from "./Popup.js"
import React, {useState, useEffect} from "react";

import {
    PlusCircleIcon,
    FolderIcon,
    ChevronDownIcon,
    HomeIcon,
    CogIcon,
    HeartIcon,
} from "@heroicons/react/solid";

import {
    FireIcon,
    BookmarkIcon,
    SearchIcon,
    InformationCircleIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";

function Header() {

    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    useEffect(() => setUserId(typeof window !== 'undefined' ? localStorage.getItem('id') : null), [])
    useEffect(() => setUsername(typeof window !== 'undefined' ? localStorage.getItem('username') : null), [])

    return (
        <div className ="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

        {/*,m <h1 className="text-xl whitespace-nowrap font-semibold pr-3">MOC News</h1> */}

            { /* Header Left */ }
            <div className="flex items-center"> 
            <a href="/"><Image 
                    src={AppleNewsLogo}
                    width={40}
                    height={40} 
                    layout="fixed"
                /></a>



                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">

                    <SearchIcon className="h-6 text-grey-600" />

                    <input 
                        className="hidden md:inline-flex ml-2 items-center bg-transparent 
                        outline-none
                        placeholder-gray-500 flex-shrink" 
                        type="text" 
                        placeholder="Search News" />

                </div>


            </div>


            { /* Header Center */ }

            <div className ="flex justify-center flex-grow">

                <div className='flex space-x-10 md:space-x-2'>
                    {/* <HeaderIcon active Icon={HomeIcon} /> */}
                    <a href="/"><HeaderIcon active Icon={HomeIcon} /></a>
                    <HeaderIcon Icon={FireIcon} />
                    <HeaderIcon Icon={BookmarkIcon} />
                    {userId != null && <a href="/liked"><HeaderIcon Icon={HeartIcon} /></a>}
                    {userId == null && <HeaderIcon Icon={HeartIcon} />}
                    <HeaderIcon Icon={InformationCircleIcon} />

            </div>
        </div>
        
            { /* Header Right */ }
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Picture for User */}
                <Image
                    className="rounded-full cursor-pointer"
                    src={AppleNewsLogo}
                    width="40"
                    height="40"
                    layout="fixed"
                />
                {userId != null && <p className="whitespace-nowrap font-semibold pr-3">{username}</p>}
                {userId == null && <p className="whitespace-nowrap font-semibold pr-3">Guest</p>}
                {/* <PlusCircleIcon className="icon" /> */}
                {/* <Popup /> */}
                <WriteArticle />
                <Dropdown />
                
                


            </div>
        </div>
    );
}

export default Header;

