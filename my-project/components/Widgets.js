import { SearchIcon } from "@heroicons/react/solid"
import { DotsHorizontalIcon } from "@heroicons/react/outline"
import Contact from "./Contact";

const contacts = [
    {src: "https://links.papareact.com/f0p", name: "Jeff Bezos"}

]

function Widgets() {
    return (
    <div className="hidden lg:flex flex-col w-60 p-2 m-5">
        <div className="flex justify-between items-center text-gray-500 mb-5">
            <h2 className="text-medium">Favorite Authors</h2>
            <div className="flex space-x-2">
                <SearchIcon className="h-6"/>
                <DotsHorizontalIcon className="h-6"/>
            </div>
        </div>

        {contacts.map((contact) => (
            <Contact key={contact.src} src={contact.src} name={contact.name}/>

        ))}
    </div>
    );
}

export default Widgets