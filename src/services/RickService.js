import axios from "axios";

const url_episodes = "https://rickandmortyapi.com/api/episode";
const url_characters = "https://rickandmortyapi.com/api/character";
export function getEpisodes() {
    return axios.get(url_episodes).then((res) => res.results);
}
