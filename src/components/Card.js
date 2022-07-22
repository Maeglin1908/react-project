import '../styles/Card.css';
import PropTypes, {instanceOf} from 'prop-types';
import {Episode} from "../models/Episode";

const Card = ({episode}) => {

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