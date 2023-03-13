
export function PaintModifiedCard(obj, card) {

    card.firstChild.remove();

    const cardInfo = document.createElement('div');
    card.append(cardInfo);
    cardInfo.classList.add('card-info');

    const changeInfo = document.createElement('div');
    cardInfo.append(changeInfo);
    changeInfo.classList.add('change-info');

    const nameH2 = document.createElement('h2');
    cardInfo.append(nameH2);
    nameH2.innerText = obj.name;

    const doctorName = document.createElement('div');
    cardInfo.append(doctorName);
    doctorName.innerText = obj.doctor;

    const moreInfo = document.createElement('div');
    cardInfo.append(moreInfo);

    const showMoreButton = document.createElement('button');
    moreInfo.append(showMoreButton);
    showMoreButton.classList.add('show-more-btn');
    // showMoreButton.innerText = 'Показати більше';

    const editButton = document.createElement('button');
    moreInfo.append(editButton);
    editButton.classList.add('edit-btn');
    // editButton.innerText = 'Редагувати';

    const deleteIcon = document.createElement('div');
    cardInfo.append(deleteIcon);
    deleteIcon.classList.add('icon');

    const spanDelete = document.createElement('span');
    deleteIcon.append(spanDelete);
    spanDelete.classList.add('delete-icon');

//    отрисовка дополнительной информации

    const extraInfo = document.createElement('div');
    doctorName.after(extraInfo);
    extraInfo.classList.add('extra-info');

    for (const prop in obj) {
        if (prop !== 'id' && prop !== 'doctor' && prop !== 'name') {
            const property = document.createElement('p');
            extraInfo.append(property);
            property.classList.add('extra-property');
            property.innerText = `${prop}:  ${obj[prop]}`
        }
    }
}