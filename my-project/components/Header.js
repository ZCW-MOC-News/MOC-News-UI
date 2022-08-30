import Image from "next/image";
import AppleNewsLogo from "./AppleNewsLogo.svg"
import Signin from "../pages/Signin"
import Dropdown from "./Dropdown.js"


import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";


function Header() {
      const handleClick = () => {
        console.log('hello ninjas')
    }

    return (
        <div className ="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

        {/* <h1 className="text-xl whitespace-nowrap font-semibold pr-3">MOC News</h1> */}

            { /* Header Left */ }
            <div className="flex items-center">
                <Image 
                    src={AppleNewsLogo}
                    width={40}
                    height={40} 
                    layout="fixed"
                />

                

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
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                    

            </div>
        </div>
        
            { /* Header Right */ }
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Picture for User */}

                <p className="whitespace-nowrap font-semibold pr-3">Linda Li</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <Dropdown/>
                {/* <button onClick={handleClick}> <ChevronDownIcon className="icon" /> </button> */}
                        
            


            </div>       
        </div>

        
        
    );
}

export default Header;

