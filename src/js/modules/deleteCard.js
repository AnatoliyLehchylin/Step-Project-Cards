import {
    boardMessage,
    cards
} from "./variables.js";
import {fetchDELETE} from "./Fetch/fetchDELETE.js";
import {Loader} from "./loader.js";


cards.addEventListener('click', async e => {

    if (e.target.parentElement.classList.contains('icon') || e.target.classList.contains('delete-icon')) {

        await Loader(e.target.closest('.card-info').querySelector('.doctor-name'), 'DELETE CARD...');

        // let status = await fetchDELETE(e.target.parentElement.parentElement.parentElement.dataset.id);
        let status = await fetchDELETE(e.target.closest('.card').dataset.id);

        // status === 200 && e.target.parentElement.parentElement.parentElement.remove();
        status === 200 && setTimeout(await removeCard, 2000, e.target.closest('.card'));

    }

    const checkCard = document.querySelector('.card');
    !checkCard && boardMessage.classList.remove('board-message-none');

})


function removeCard(card) {
    card.remove()
}