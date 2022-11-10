import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.tastingtable.com/img/gallery/rosemary-granola-bars-recipe/image-import.jpg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://www.tastingtable.com/img/gallery/rosemary-granola-bars-recipe/image-import.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
