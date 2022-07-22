import { useEffects, useState } from "react";
import React from "react";
import { getEpisodes } from "../services/RickService";
import Card from "./../components/Card";
import Header from "../components/Header";
const Home = function () {
    const [episodes, setEpisodes] = useState([]);

    useEffects(() => {
        getEpisodes.then((res) => setEpisodes(res)).catch(() => alert("API Cassé"));
    }, []);

    return (
        <>
        <Header/>
            <h1>Home</h1>

            <div className="episodes"></div>
            {episodes.map((e) => (
                <Card episode={e} />
            ))}
        </>
    );
};

export default Home;
