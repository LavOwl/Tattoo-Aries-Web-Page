import AnchorElement from "./buttons/AnchorElement";
import { HashLink } from "react-router-hash-link";
import BurgerButton from "./buttons/BurgerButton";
import DropDownLink from "./buttons/DropDownLink";
import { categories } from "../constants/tattooCategories";

function NavigationBar(){
    return (
        <>  
            <nav className="fixed z-10 left-0 top-0 w-full h-16 flex items-center justify-between px-4">
            <div className="absolute left-0 top-0 w-full h-full z-[-1] bg-white/10 backdrop-blur-xl"></div>
                <HashLink smooth to="/#start" className="text-white text-3xl font-['Whisper']">Aries Tattoos</HashLink>
                <div className="hidden md:flex w-1/2">
                    <AnchorElement url="/#start" text={"Inicio"}/>
                    <AnchorElement url="/#aboutme" text={"Sobre mí"}/>
                    <DropDownLink url={Array.from(categories.keys()).map((key) => "/gallery/" + key)} text={["Fotos", ...Array.from(categories.values())]}/>
                </div>
            </nav>
            <div className="mb-24"></div>

            <nav className="hidden absolute z-10 has-checked:left-0 left-[-16rem] top-0 transition-all flex-col bg-[var(--primary-color)] w-64 h-full pt-16">
                <AnchorElement url="/" text={"Inicio"}/>
                <AnchorElement url="/#AboutMe" text={"Sobre mí"}/>
                <AnchorElement url="/gallery" text={"Tatuajes"}/>
                <div className='fixed top-4 left-4 w-8 h-8 z-10'>
                    <BurgerButton/>
                </div>
            </nav>
            
        </>
    );
}

export default NavigationBar;