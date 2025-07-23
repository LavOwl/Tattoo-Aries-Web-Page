import { Link } from "react-router-dom";

function AnchorElement({url, text}: {url:string[], text:string[]}){
    return (
        <>
            <div className="relative w-full text-center text-white">
                <nav className="h-16 w-full group relative has-hover:overflow-visible transition-all duration-300 overflow-hidden">
                    <label className="h-16 flex items-center justify-center w-full cursor-pointer">{text[0]} <span className="border-r-1 border-t-1 p-1 rotate-45 group-hover:rotate-135 absolute right-6 transition-transform"></span></label>

                    <div className="absolute left-0 top-16 w-full m-auto flex flex-col">
                        {url.map((destination, index: number) => (
                            <Link key={index} className="flex items-center justify-center h-16 w-full bg-white/10 backdrop-blur-xl" to={destination}>
                                {text[index + 1]}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default AnchorElement;