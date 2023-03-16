import {fetchPUT} from "./Fetch/fetchPUT.js";
import {PaintModifiedCard} from "./paintModifiedCard.js";
import {Loader} from "./loader.js";


export async function SaveChangeInfo (objChange, card){

    await Loader(card.querySelector('.doctor-name'), 'SAVE INFO...');

    const modifiedCard = await fetchPUT(objChange);

    setTimeout(await PaintModifiedCard, 2000, modifiedCard, card);

}

