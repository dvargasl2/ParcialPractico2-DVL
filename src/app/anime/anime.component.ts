import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Array<Anime> = [];

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  calculateTotalSeasons(anime: Anime): number {
    return anime.seasons.reduce((total, season: any) => total + season.episodes, 0);
  }

  calculateAverageRating(anime: Anime): number {
    const totalRatings = anime.seasons.reduce((sum, season: any) => sum + season.rating, 0);
    return Number((totalRatings / anime.seasons.length).toFixed(1));
  }

  ngOnInit() {
    this.getAnimes();
  }
}
