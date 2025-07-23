import type { CSSProperties } from "react";

function BurgerButton(){

    return (
        <label style={{'--burger-line-height': '8%'} as CSSProperties} className="flex flex-col justify-between aspect-square h-full shrink-0 rounded-full cursor-pointer bg-transparent hover:bg-white/10 active:scale-110 active:duration-300 p-2" htmlFor="burger">
            <input className='peer' id="burger" type="checkbox" hidden/>
            <span className='w-full h-[var(--burger-line-height)] bg-[var(--contrast-color)] rounded-xl transition-all origin-top-left peer-checked:rotate-45 peer-checked:ml-[2.236%] peer-checked:w-[calc(141.4%_-_var(--burger-line-height))]'></span>
            <span className='w-full h-[var(--burger-line-height)] bg-[var(--contrast-color)] rounded-xl transition-all peer-checked:ml-full peer-checked:opacity-0'></span>
            <span className='w-full h-[var(--burger-line-height)] bg-[var(--contrast-color)] rounded-xl transition-all origin-bottom-left peer-checked:rotate-[-45deg] peer-checked:ml-[2.236%] peer-checked:w-[calc(141.4%_-_var(--burger-line-height))]'></span>
        </label>
        
    );
}

export default BurgerButton;