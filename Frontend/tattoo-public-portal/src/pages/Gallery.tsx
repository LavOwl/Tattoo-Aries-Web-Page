import { useTattoos } from '../hooks/tattooListHook';
import { useParams } from 'react-router-dom';
import { type ITattoo } from '../types/ITattoo';
import Card from '../components/Card';

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
            <h1 className="text-3xl text-white mb-4">Galería de tatuajes</h1>
            <ul className="flex h-fit w-full p-8 rounded-xl bg-gray-900 border border-white gap-2 items-center justify-center flex-wrap">
                {tattoos.length === 0 && <p className="text-white w-full block text-center">No publiqué nada aún &lt;3</p>}
                {tattoos.map((tattoo: ITattoo, index: number) => (
                    <li key={index}><Card data={tattoo}/></li>
                ))}
            </ul>
        </>
    );
}

export default Gallery;