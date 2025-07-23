import GalleryPreview from "../components/GalleryPreview";
function Home(){

    return (
        <>
        <div className="flex flex-col h-fit">
            <GalleryPreview type="1"/>
            <GalleryPreview type="2"/>
            <GalleryPreview type="3"/>
            <GalleryPreview type="4"/>
        </div>
        </>
    );
}

export default Home;