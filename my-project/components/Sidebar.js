// import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";

import {
    ChipIcon,
    FilmIcon,
    OfficeBuildingIcon,
    BeakerIcon,
    SpeakerphoneIcon,
    EyeIcon,
    GlobeAltIcon,
} from "@heroicons/react/outline";



function Sidebar() {
    // const [session, loading] = useSession();

    return (
        <div className="p-22 mt-5 max-w-[600px] xl:min-w-[300px]">
            {/* <SidebarRow src={session.user.image} title={session.user.name} /> */}
            <SidebarRow Icon={GlobeAltIcon} title="General" />
            <SidebarRow Icon={OfficeBuildingIcon} title="Business" />
            <SidebarRow Icon={FilmIcon} title="Entertainment" />
            <SidebarRow Icon={EyeIcon} title="Health" />
            <SidebarRow Icon={SpeakerphoneIcon} title="Sports" />
            <SidebarRow Icon={ChipIcon} title="Technology" />

        </div>
    );
}


export default Sidebar