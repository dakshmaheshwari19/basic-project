import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Chole Bhature',
         'A super tasty north indian breakfast',
          'https://upload.wikimedia.org/wikipedia/commons/9/91/Chole_Bhature_At_Local_Street.jpg',
          [
            new Ingredient('Chhole',1),
            new Ingredient('Bhature',2)
          ]),
        new Recipe('jalebi',
         'A popular dessert all over India',
          'https://upload.wikimedia.org/wikipedia/commons/a/a3/Jalebi_-_Served_in_a_Plate.JPG',
          [
            new Ingredient('Maida',1),
            new Ingredient('sugar syrup',1)
          ])
      ];
    
      getRecipes(){
        return this.recipes.slice();
      }
}