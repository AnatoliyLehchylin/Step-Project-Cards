// export const Token = '06023f62-fbd5-4078-82c3-a4a185b5149e';

export const boardMessage = document.querySelector('.board-message');//стартовое сообщение

export const buttonEntry = document.querySelector('.login-btn'); //кнопка Вход

export const passwordForm = document.querySelector('.password-form'); //форма ввода почты и пароля
export const inputsEmailPassword = passwordForm.querySelectorAll('input');//поля ввода почты и пароля
export const buttonEntrySubmit = document.querySelector('.submit-btn');//кнопка подтверждения почты и пароля
buttonEntrySubmit.disabled = true;
export const error = document.querySelector('.error');//если неправильно введена почта или пароль

export const buttonCreateVisit = document.querySelector('.create-visit-btn');//кнопка создать визит

export const visitForm = document.querySelector('.visit-form');//форма выбора врача
export const doctor = document.querySelector('.doctor');//список докторов

export const visitFormInfo = document.querySelector('.visit-form-info');//форма информации о визите
export const visitInfoValue = visitFormInfo.querySelectorAll('input');//значения информации о визите

export const buttonCreate = document.querySelector('.create-button');//отправить форму информации о визите
export const buttonClose = document.querySelector('.close');//закрыть форму информации о визите

export const cards = document.querySelector('.cards');//поле отрисовки карточек
