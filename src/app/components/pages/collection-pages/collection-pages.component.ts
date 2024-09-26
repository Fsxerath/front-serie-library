import { Component, OnInit } from '@angular/core';
import { GetCollectionResponse } from 'src/app/data/services/series/dtos/response/get.collection.interface';
import { SeriesDataService } from 'src/app/data/services/series/services/series.provider.service';
import { SeriesService } from 'src/app/data/services/series/services/series.service';

@Component({
  selector: 'app-collection-pages',
  templateUrl: './collection-pages.component.html',
  styleUrls: ['./collection-pages.component.scss']
})
export class CollectionPagesComponent implements OnInit {
  constructor (private dataSeries: SeriesDataService  ,private seriesService: SeriesService) {}
  ngOnInit(): void {
    this.seriesService.getCollection().subscribe((series) => {
      this.dataSeries.setParentData(series);
    });
  }
}
