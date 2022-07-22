class Episode {
    name;
    air_date;
    episode;
    url;
    fav;

    constructor(name, air_date, episode,url, fav = false){
        this.name = name;
        this.air_date = air_date;
        this.episode = episode;
        this.url = url;
        this.fav = fav;
    }

}
