import AnchorElement from "./buttons/AnchorElement";
import { Link } from "react-router-dom";
import BurgerButton from "./buttons/BurgerButton";
import DropDownLink from "./buttons/DropDownLink";
import { categories } from "../constants/tattooCategories";

function NavigationBar(){
    return (
        <>  
            <nav className="fixed z-10 left-0 top-0 w-full h-16 bg-white/10 backdrop-blur-xl flex items-center justify-between px-4">
                <Link to="/" className="text-white text-xl font-bold">Aries Tattoos</Link>
                <div className="hidden md:flex w-1/2">
                    <AnchorElement url="/" text={"Inicio"}/>
                    <AnchorElement url="" text={"Sobre mí"}/>
                    <DropDownLink url={Array.from(categories.keys()).map((key) => "/gallery/" + key)} text={["Fotos", ...Array.from(categories.values())]}/>
                </div>
            </nav>
            <div className="mb-24"></div>

            <nav className="hidden absolute z-10 has-checked:left-0 left-[-16rem] top-0 transition-all flex-col bg-[var(--primary-color)] w-64 h-full pt-16">
                <AnchorElement url="/" text={"Inicio"}/>
                <AnchorElement url="" text={"Sobre mí"}/>
                <AnchorElement url="/gallery" text={"Tatuajes"}/>
                <div className='fixed top-4 left-4 w-8 h-8 z-10'>
                    <BurgerButton/>
                </div>
            </nav>
            
        </>
    );
}

export default NavigationBar;