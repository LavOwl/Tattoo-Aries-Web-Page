import { useTattoos } from '../hooks/tattooListHook';
import Card from './Card';
import { type ITattoo } from '../types/ITattoo';
import { categories } from '../constants/tattooCategories';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';

function GalleryPreview({ type }: { type: string} ){

    const {
            data: tattoos = [],
            isLoading,
            isError,
            error,
        } = useTattoos(type);

    return (
        <>
            <div>
                <h2 className="text-white text-xl w-full text-center">⊹₊⟡⋆ {categories.get(type)} ⋆⟡₊⊹</h2>
                <button></button>
                <ul className="flex h-52 w-full relative border border-white scrollbar-hide overflow-x-auto gap-2 items-center overflow-y-hidden touch-pan-x select-none">
                    {isLoading && <Loading/>}
                    {false && <span className="flex scale-y-200 m-auto"><span className="p-4 rounded-xs relative border-2 border-t-red-700 rotate-315 border-r-red-700 after:content-[''] after:absolute after:w-[144%] after:h-[1.5px] after:bg-red-700 after:left-[-20.5%] after:bottom-1/2 after:translate-[0,_-50%] after:rotate-45 before:h-1/2 before:w-[2px] before:absolute before:top-0 before:left-1/2 before:bg-red-700 before:rotate-45"></span></span>}
                    {!isLoading && !isError && tattoos.length === 0 && <p className="text-white w-[90%] m-auto py-20 rounded-xl block bg-white/10 text-center">No publiqué nada aún -`♡´-</p>}
                    {tattoos.map((tattoo: ITattoo, index: number) => (
                        <li key={index}><Card data={tattoo}/></li>
                    ))}
                     {!isLoading && !isError && !(tattoos.length === 0) &&
                        <div className="absolute has-hover:bg-[linear-gradient(to_right,_transparent_0%,_rgba(255,255,255,0.25)_100%)] transition-all right-0 top-0 h-full w-1/12 bg-[linear-gradient(to_right,_transparent_0%,_rgba(255,255,255,0.20)_100%)]">
                        <Link to={"/gallery/" + type} className="h-full scale-y-[230%] px-8 block w-fit top-0 cursor-pointer right-0 absolute ">
                            <span className="absolute top-1/2 right-5 p-3 translate-y-[-50%] border-r-1 border-t-1 border-white rotate-45"></span>
                        </Link>
                        </div>
                    }
                </ul>
                <button></button>
            </div>
        </>
    );
}

export default GalleryPreview;