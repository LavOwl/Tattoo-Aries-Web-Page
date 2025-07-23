import { useTattoos } from '../hooks/tattooListHook';
import Card from './Card';
import { type ITattoo } from '../types/ITattoo';
import { categories } from '../constants/tattooCategories';

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
                <ul className="flex h-52 w-full border border-white gap-2 items-center">
                    {isLoading && <p className="text-white w-[90%] m-auto py-20 rounded-xl block bg-white/10 text-center">Cargando...</p>}
                    {isError && <p className="text-white w-[90%] m-auto py-20 rounded-xl block bg-white/10 text-center">Error: { error instanceof Error ? error.message : String(error) }</p>}
                    {tattoos.length === 0 && <p className="text-white w-[90%] m-auto py-20 rounded-xl block bg-white/10 text-center">No publiqué nada aún -`♡´-</p>}
                    {tattoos.map((tattoo: ITattoo, index: number) => (
                        <li key={index}><Card data={tattoo}/></li>
                    ))}
                </ul>
                <button></button>
            </div>
        </>
    );
}

export default GalleryPreview;