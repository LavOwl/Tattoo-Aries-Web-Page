import GalleryPreview from "../components/GalleryPreview";
import AboutMe from "../components/AboutMe";

function Home(){

    return (
        <>
        <div id="start" className="absolute top-0"></div>
        <div className="flex flex-col h-fit">
            <GalleryPreview type="1"/>
            <GalleryPreview type="2"/>
            <GalleryPreview type="3"/>
            <GalleryPreview type="4"/>
            <AboutMe/>
        </div>
        </>
    );
}

export default Home;