//Поиск работает только по одному заполненному фильтру
//Поиск по срочности работает только если поля фильтров по "цели визита" и "доктору" пустые
//Поиск по "цели визита" работает только если поле фильтра по "доктору" пустое
//Поиск по "доктору" работает в любых комбинациях

import {
    filterButton,
    filterValue,
    urgencyFilterList
} from "./variables.js";
import {ShowFilterCard, ResetFilter} from "./showFilterCard.js";

let filterName;//наименование фильтра
let filterUsed = '';//значение фильтра

urgencyFilterList.addEventListener('click', e => {

    filterName = "urgency";
    filterUsed = e.target.value;

});


filterButton.addEventListener('click', e => {

    e.preventDefault();

    if (filterButton.classList.contains('reset-button')) {
        ResetFilter();
        filterButton.classList.remove('reset-button');
        filterButton.innerText = 'Фільтрувати';

        filterValue.forEach(elem => {
            elem.value = '';
        });
        filterName = '';
        filterUsed = '';
    } else {
        filterValue.forEach(elem => {
            if (!!elem.value) {
                filterName = elem.name;
                filterUsed = elem.value
            }
        })

        if (filterUsed !== '') {
            ShowFilterCard(filterName, filterUsed);
            filterButton.classList.add('reset-button');
            filterButton.innerText = 'Скидання';
        }
    }
})