import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() chosenTheRecipe=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('test recipe 1','this is a test1','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('test recipe 2','this is a test2','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor(){

  }
  ngOnInit(){
  }

  recipeWasChosen(recipe: Recipe){
this.chosenTheRecipe.emit(recipe);
  }

}
