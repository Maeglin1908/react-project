import '../styles/Card.css';
import PropTypes, {instanceOf} from 'prop-types';
import {Episode} from "../models/Episode";

const Card = () => {

    const episode = { 
        name: "Mangé chez toto",
        air_date: "December 2, 2013",
        episode: "S01E01",
        url: "https://rickandmortyapi.com/api/character/2"
    }

    return (
        <div className="card" id={episode}>
            <div className='card-header'>
                <button>Ajouter aux favoris</button>
            </div>
            <div className="card-body">
                <h3>{episode.name}</h3>
                <p>{episode.air_date}</p>
                <p>{episode.episode}</p>
                <p><i>{episode.url}</i></p>
            </div>
        </div>
    )
}

export default Card;

Card.propTypes = {
    episode: PropTypes.instanceOf(Episode)
}