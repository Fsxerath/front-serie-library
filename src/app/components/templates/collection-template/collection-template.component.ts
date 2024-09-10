import { Component, OnInit } from '@angular/core';
import { GetSeriesResponse } from 'src/app/data/services/series/dtos/response/get.series.interface';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-collection-template',
  templateUrl: './collection-template.component.html',
  styleUrls: ['./collection-template.component.scss'],
})
export class CollectionTemplateComponent implements OnInit{
  data : GetSeriesResponse[] = [];
  private series = this.data;
  constructor(private seriesService: SeriesService) {
  }
  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.data = series;
    });
  }

  searchSeries(event: KeyboardEvent) {
    /*   const input = event.target as HTMLInputElement;
  this.series = this.data.filter(series => series.series_title.toLowerCase().includes(input.value.toLowerCase()));
  if(input.value === ''){
    this.series = this.data;
  } */
  }
  redirect() {
    console.log('redirect');
  }
}
