import axios from "axios";

const Home = function () {
    const [episodes, setEpisodes] = useState([]);

    useEffects(() => {
        axios.get(url_episodes).then((res) => setEpisodes(res));
    }, []);
    return (
        <>
            <h1>Home</h1>

            {episodes.map((e) => (
                <Card episode={e} />
            ))}
        </>
    );
};

export default Home;
