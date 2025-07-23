import { Link } from "react-router-dom";

function AnchorElement({url, text}: {url:string, text:string}){
    return (
        <>
            <Link to={url} className="w-full h-16 text-[var(--text-color)] flex items-center justify-center border-gray-500 border-b first:border-t">{text}</Link>
        </>
    );
}

export default AnchorElement;