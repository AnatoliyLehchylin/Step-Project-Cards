import {fetchAllCardsGET} from "./Fetch/fetchGET.js";
import {PaintCard} from "./paintCard.js";
import {boardMessage} from "./variables.js";

export async function ShowAllCards() {

    const all = await fetchAllCardsGET();

    (all.length > 0) && boardMessage.classList.add('board-message-none');

    all.forEach(elem => {

        PaintCard(elem);

    })

}