import {cards} from "./variables.js";
import {fetchOneCardGET} from "./Fetch/fetchOneCardGET.js";
import {PaintChangeCard} from "./paintChangeCard.js";

cards.addEventListener('click', async e => {

    if (e.target.classList.contains('edit-btn') || e.target.classList.contains('edit-close-btn')) {

        if (!e.target.closest('.card-info').firstChild.firstChild) {

            e.target.classList.toggle('edit-btn');
            e.target.classList.toggle('edit-close-btn');

            let infoChangeCard = await fetchOneCardGET(e.target.closest('.card').dataset.id);

           await PaintChangeCard(infoChangeCard, e.target.closest('.card-info').firstChild, e.target, e.target.closest('.card'));

        } else {

            e.target.classList.toggle('edit-btn');
            e.target.classList.toggle('edit-close-btn');

            e.target.closest('.card-info').firstChild.firstChild.remove();

        }
    }
})