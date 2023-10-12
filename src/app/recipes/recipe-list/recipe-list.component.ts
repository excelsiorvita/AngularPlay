import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] =[
    new Recipe('First recipe','The description associated with it','https://www.cookipedia.co.uk/wiki/images/7/7d/Aperitif_cheese_balls_recipe.jpg'),
    new Recipe('Spaghetti Carbonara', 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.', 'https://www.example.com/spaghetti-carbonara.jpg'),
    new Recipe('Chicken Alfredo', 'Creamy pasta with tender chicken and parmesan cheese.', 'https://www.example.com/chicken-alfredo.jpg'),
    new Recipe('Vegetable Stir-Fry', 'Healthy stir-fried vegetables with soy sauce and tofu.', 'https://www.example.com/vegetable-stir-fry.jpg'),
    new Recipe('Beef Tacos', 'Tasty tacos with seasoned ground beef, lettuce, and salsa.', 'https://www.example.com/beef-tacos.jpg'),
    new Recipe('Mushroom Risotto', 'Creamy risotto with mushrooms, white wine, and parmesan.', 'https://www.example.com/mushroom-risotto.jpg'),
    new Recipe('Grilled Salmon', 'Grilled salmon fillet with lemon and dill seasoning.', 'https://www.example.com/grilled-salmon.jpg'),
    new Recipe('Caesar Salad', 'Classic Caesar salad with romaine lettuce and Caesar dressing.', 'https://www.example.com/caesar-salad.jpg'),
    new Recipe('Chocolate Brownie', 'Decadent chocolate brownies with a gooey center.', 'https://www.example.com/chocolate-brownie.jpg'),
    new Recipe('Margherita Pizza', 'Traditional Italian pizza with tomato, mozzarella, and basil.', 'https://www.example.com/margherita-pizza.jpg'),
    new Recipe('Chicken Curry', 'Spicy and flavorful chicken curry with rice.', 'https://www.example.com/chicken-curry.jpg')
  ];

  constructor(){}
  ngOnInit() {
      
  }
}
