import {
    boardMessage,
    filters
} from "./variables.js";
import {fetchAllCardsGET} from "./Fetch/fetchGET.js";
import {PaintCard} from "./paintCard.js";
import {Loader} from "./loader.js";


export async function ShowAllCards() {

    await Loader(filters, 'DOWNLOAD CARDS...');

    const all = await fetchAllCardsGET();

    (all.length > 0) && boardMessage.classList.add('board-message-none');

    all.forEach(elem => {

        setTimeout(PaintCard, 400, elem);

    })

}