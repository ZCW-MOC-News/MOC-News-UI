import StoryCard from "./StoryCard";

const stories = [
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",

    },
    {
        name:"Bill Gates",
        src: "https://links.papareact.com/4u4",
    },
    {
        name:"Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
    },
    

];

function Stories() {
    return<div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard 
            key={story.src}
            name={story.name} 
            src={story.src} 
            />
        ))}

    </div>;
}

export default Stories;