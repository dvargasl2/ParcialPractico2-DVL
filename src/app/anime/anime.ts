export class Anime {
  id: number;
  name: string;
  description: string;
  Rating: string;
  total_episodes: number;
  categorie: string;
  studio: string;
  img: string;
  seasons: [];

  constructor(
    id: number,
    name: string,
    description: string,
    Rating: string,
    total_episodes: number,
    categorie: string,
    studio: string,
    img: string,
    seasons: [],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rating = Rating,
    this.total_episodes = total_episodes;
    this.categorie= categorie,
    this.studio= studio,
    this.img = img;
    this.seasons = seasons
  }
 }
