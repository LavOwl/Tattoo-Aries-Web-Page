import { useTattoos } from '../hooks/tattooListHook';
import { useParams } from 'react-router-dom';
import { type ITattoo } from '../types/ITattoo';
import Card from '../components/Card';
import { categories } from '../constants/tattooCategories';

function Gallery() {
    const { type } = useParams();

    const {
        data: tattoos = [],
        isLoading,
        isError,
        error,
    } = useTattoos(type);
    return (
        <>
            <h1 className="text-3xl text-white mb-4">{type && categories.get(type)}</h1>
            <ul className="h-fit w-full p-8 rounded-xl bg-white/10 select-none border border-white grid justify-center grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-8">
                    {!isLoading && !isError && tattoos.length === 0 && <p className="text-white w-full block text-center">No publiqué nada aún -`♡´-</p>}
                    {tattoos.map((tattoo: ITattoo, index: number) => (
                        <li key={index}><Card data={tattoo}/></li>
                    ))}
            </ul>
        </>
    );
}

export default Gallery;