import { useProfile } from "../hooks/profileHook";

function AboutMe() {
    const { data, isLoading, isError, error } = useProfile();
    return (
        <>
            <div className="flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-lg mb-16">
                <h2 id="aboutme" className="text-white text-2xl mb-4">About Me</h2>
                <img src={data?.image} className="rounded-full object-cover w-44 mx-auto block aspect-square shrink-0"/>
                <p className="text-gray-300 text-sm my-4">{data?.fullname} • {data?.pronouns} • {data?.age}</p>
                <p className="text-white text-center max-w-md">
                    {data?.description || "No description available."}
                </p>
            </div>
        </>
    )
}

export default AboutMe;