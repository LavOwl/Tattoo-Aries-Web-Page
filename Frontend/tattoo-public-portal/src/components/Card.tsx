import { type CSSProperties } from "react";
import { type ITattoo } from '../types/ITattoo';
import { Link } from "react-router-dom";

function Card({ data }: { data: ITattoo}){
    var height = '13rem';
    return (
        <>
            <Link to={"/tattoo/" + data.id} style={{ '--card-height': height } as CSSProperties} className="group block flex-shrink-0 relative aspect-[3/4] h-[calc(var(--card-height)-1px)]  backdrop-blur-sm border border-white hover:cursor-pointer overflow-hidden">
                <img alt="tattoo" src={"http://localhost:8080/api/images/tattoo/" + data.id}  className="w-full h-full object-contain"/>
                <div className="absolute bottom-0 left-4 h-fit w-[calc(100%-1rem)] block text-left transition-all duration-1000 group-hover:bottom-full">
                    <h3 className="text-white break-words translate-y-0 pb-4 transition-all duration-1000 [inline-size: calc(var(--card-height) - 2rem)] transform group-hover:translate-y-[calc(100%+1.3rem)] m-0 p-0 mt-4 text-[1.1rem] font-light tracking-wider leading-[1.3]">{data.title}</h3>
                    <p className="absolute top-full left-0 bg-[linear-gradient(to_bottom,_black_0%,_rgba(0,0,0,0.15)_100%)] [-webkit-background-clip:text] text-transparent h-[calc(var(--card-height)-100%)] transition-all duration-1000 group-hover:top-[200%]">{data.description}</p>
                </div>
            </Link>
        </>
    );
}

export default Card