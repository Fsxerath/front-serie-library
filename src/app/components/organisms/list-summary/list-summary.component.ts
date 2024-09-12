import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BUTTON_COLORS, TITLES, TYPE_BUTTONS } from 'src/app/data/constants/constants';
import { Summary } from 'src/app/data/interfaces/summary.interface';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent implements OnInit {
  summaries: Summary;
  title = TITLES.SUMMARY;
  add_color = BUTTON_COLORS.ADD_SAVE;
  back_color = BUTTON_COLORS.PRIMARY;
  delete_color = BUTTON_COLORS.DELETE;
  constructor(private route: ActivatedRoute) {
    this.summaries = {
      chapter: 'chapter 15',
      date: '12-05-2024',
      summary: `"Rebuild World" es una serie de novelas ligeras japonesas ambientada en un futuro postapocalíptico donde la humanidad vive entre los restos de civilizaciones avanzadas. El protagonista, Akira, es un joven que aspira a convertirse en un "hunter", un cazador de reliquias tecnológicas dejadas por las civilizaciones anteriores. Estos "hunters" exploran las peligrosas ruinas en busca de tecnología antigua que pueda ayudar a la supervivencia de la humanidad.
      Durante sus aventuras, Akira se encuentra con Alpha, una misteriosa mujer holográfica que actúa como su guía y mentora. Con su ayuda, Akira mejora sus habilidades y enfrenta a otros cazadores, monstruos, y las amenazas del mundo devastado. A lo largo de la serie, se exploran temas como la supervivencia, la tecnología avanzada, y los misterios del mundo antiguo.
      La serie es conocida por su mezcla de acción, ciencia ficción y elementos de supervivencia, junto con un desarrollo profundo de personajes y un mundo intrigante.`,
    };
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
