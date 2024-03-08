import * as model from './model.js';
import recipeView from './view/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);
    // console.log(id);
    if(!id) return;
    recipeView.renderSpinner();

    //1.loading recipe
    await model.loadRecipe(id);

    //2. rendering recipe
    recipeView.render(model.state.recipe);  
  }catch(err){
    recipeView.renderError();
  }
};

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
};
init();

// window.addEventListener('scroll', function(){
//   const innerHeaders = document.querySelectorAll('.nav');
//   const outterDiv = document.querySelector('body');
//   const divPosition = outterDiv.getBoundingClientRect();
//   for(let innerHeader of innerHeaders){
//     elementHeight = innerHeader.offsetHeight;
//     console.log(elementHeight); 
//     const newHs = document.querySelectorAll('.nav__list');
//     for(let newH of newHs){
//       if(this.window.scrollY > divPosition.top && window.scrollY >= 145){
//         newH.style.marginTop = `${elementHeight}px`;
//       }else{
//         newH.style.marginTop = ``;
//       }
//     }
//   }
// });