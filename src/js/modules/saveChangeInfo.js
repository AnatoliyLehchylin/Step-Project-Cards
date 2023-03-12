import {fetchPUT} from "./Fetch/fetchPUT.js";
import {cards} from "./variables.js";
import {ShowAllCards} from "./showAllCards.js";


export async function SaveChangeInfo (objChange){

    await fetchPUT(objChange);

   const oldCards = cards.querySelectorAll('.card');

   oldCards.forEach(card => {
       card.remove();
   });

   await ShowAllCards();

}

