import {fetchPUT} from "./Fetch/fetchPUT.js";
import {PaintModifiedCard} from "./paintModifiedCard.js";


export async function SaveChangeInfo (objChange, card){

    const modifiedCard = await fetchPUT(objChange);

    await PaintModifiedCard(modifiedCard, card);

}

