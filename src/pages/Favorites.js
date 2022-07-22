import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Favorites = function () {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        let eps = JSON.parse(localStorage.getItem("episodes"));
        if (eps == null) {
            eps = [];
        }
        setEpisodes(eps);
    }, []);

    return (
        <>
            <Header />
            <h1>Favorites</h1>

            {episodes.map((e) => (
                <Card episode={e} />
            ))}
        </>
    );
};

export default Favorites;
