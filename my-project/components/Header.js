import Image from "next/image";
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

function Header() {
    return (
        <div>

            <h1 className="text-6xl">MOC News</h1>

            { /* Header Left */ }
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40} 
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">

                    <SearchIcon className="h-6 text-grey-600" />

                    <input 
                        className="flex m1-2 items-center bg-transparent outline-none
                        placeholder-gray-500" 
                        type="text" 
                        placeholder="Search News" />

                </div>


            </div>


            { /* Header Center */ }


            { /* Header Right */ }


        </div>
    );
}

export default Header;

