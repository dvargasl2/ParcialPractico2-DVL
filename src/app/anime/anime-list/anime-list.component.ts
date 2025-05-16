import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes: Array<Anime> = [];
  selected: boolean = false;
  selectedBAnime!: Anime;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  getAverageRating(): number {
    if (this.animes.length === 0) {
      return 0;
    }
    const sum = this.animes.reduce((total, anime) => total + Number(anime.Rating), 0);
    return Math.round((sum / this.animes.length) * 10) / 10;
  }
}