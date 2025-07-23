import { useParams } from 'react-router-dom';
import { useTattoo } from '../hooks/singleTattooHook';


function TattooView(){

    const { id } = useParams();

    const {
        data: tattoo = null,
        isLoading,
        isError,
        error,
    } = useTattoo(id);
    console.log(tattoo);
    return (
        <>
            {isLoading && <p className="text-white">Cargando...</p>}
            {isError && <p className="text-red-500">Error: {error.message}</p>}
            {!isLoading && !isError && !tattoo && <p className="text-white">No se encontró el tatuaje.</p>}
            <main className="flex items-center justify-center rounded-xl bg-white/10 gap-5">
                <img src={"http://localhost:8080/api/images/tattoo/" + id} className="w-1/4 h-auto rounded-lg mb-4" />
                <div className='flex flex-col items-center justify-center w-1/4'>
                    <h1 className="text-3xl text-white mb-4">{tattoo?.title}</h1>
                    <p className="text-white mb-4">{tattoo?.description}</p>
                </div>
            </main>
        </>
    );
}

export default TattooView;