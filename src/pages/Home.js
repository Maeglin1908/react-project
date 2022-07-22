import { useEffects, useState } from "react";
import { getEpisodes } from "../services/RickService";
import Card from "./../components/Card";
const Home = function () {
    const [episodes, setEpisodes] = useState([]);

    useEffects(() => {
        getEpisodes.then((res) => setEpisodes(res)).catch(() => alert("API Cassé"));
    }, []);

    return (
        <>
            <h1>Home</h1>

            <div className="episodes"></div>
            {episodes.map((e) => (
                <Card episode={e} />
            ))}
        </>
    );
};

export default Home;
