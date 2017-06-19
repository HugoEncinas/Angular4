import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://sefamerve.cubecdn.net/image/data/0_Blog/et-yeme-adab%C4%B1-et%20yemekleri-%20islamda%20et-sefamerve.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://sefamerve.cubecdn.net/image/data/0_Blog/et-yeme-adab%C4%B1-et%20yemekleri-%20islamda%20et-sefamerve.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
