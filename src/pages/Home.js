import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getEpisodes } from "../services/RickService";
import Card from "./../components/Card";
const Home = function () {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes().then((res) => setEpisodes(res));
    }, []);

    return (
        <>
            <Header />
            <h1>Episodes</h1>

            <div className="episodes"></div>
            {episodes.map((e) => (
                <Card episode={e} />
            ))}
        </>
    );
};

export default Home;
