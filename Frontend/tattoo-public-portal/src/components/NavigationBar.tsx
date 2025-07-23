import AnchorElement from "./buttons/AnchorElement";
import BurgerButton from "./buttons/BurgerButton";

function NavigationBar(){
    return (
        <>  
            <nav className="absolute z-10 has-checked:left-0 left-[-16rem] top-0 transition-all flex flex-col bg-[var(--primary-color)] w-64 h-full pt-16">
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