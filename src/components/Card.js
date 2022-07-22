import "../styles/Card.css";

const Card = ({ episode }) => {
    function pushEpisode() {
        let episodes = JSON.parse(localStorage.getItem("episodes"));
        if (!episodes) {
            episodes = [];
        }
        if (!episodes.includes(episode)) {
            episodes.push(episode);
        }
        console.log("push ", episodes);
        localStorage.setItem("episodes", JSON.stringify(episodes));
    }
    return (
        <div className="flex">
            <div className="card" id={episode}>
                <div className="card-header"></div>
                <div className="card-body">
                    <h3>{episode.name}</h3>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                    <p>
                        <i>{episode.url}</i>
                    </p>
                </div>
                <button onClick={() => pushEpisode()}>Ajouter aux favoris</button>
            </div>
        </div>
    );
};

export default Card;

// Card.propTypes = {
//     episode: PropTypes.instanceOf(Episode),
// };
