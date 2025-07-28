import { HashLink } from "react-router-hash-link";

function AnchorElement({url, text}: {url:string, text:string}){
    return (
        <>
            <HashLink smooth to={url} className="w-full h-16 text-[var(--text-color)] flex items-center justify-center hover:bg-white/20 border-white border-r first:border-l">{text}</HashLink>
        </>
    );
}

export default AnchorElement;