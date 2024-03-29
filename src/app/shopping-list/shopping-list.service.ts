import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    IngredientsChanged= new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

getIngredients(){
    return this.ingredients.slice();
}
addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
addIngredients(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //     this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);  //some kind of operator to convert array of elements to list of elements
    this.IngredientsChanged.emit(this.ingredients.slice());
}
}