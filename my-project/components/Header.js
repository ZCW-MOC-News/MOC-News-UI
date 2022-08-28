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

            <h1>Header</h1>

            { /* Header Left */ }
            <div>
                <Image src="https://links.papareact.com/5me" alt="logo"
                width={40}
                height={40} 
                layout="fixed"
                />
                <div>

                    <input type="text" placeholder='Search News Articles' />

                </div>


            </div>


            { /* Header Center */ }


            { /* Header Right */ }


        </div>
    );
}

export default Header;

