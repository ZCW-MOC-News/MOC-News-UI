import { PlusCircleIcon } from "@heroicons/react/solid";

const PlusCircleIconButton = ({onPress}) => {
    return (
        <button className="icon" type ="button" onClick={onPress}>
            {/* <PlusCircleIcon /> */}
        </button>
    );
};

const App = () => {
    const handleEvent = () => {
        alert("I was clicked");
    };
    // return <PlusCircleIconButton onPress={handleEvent} />;
};

export default App;