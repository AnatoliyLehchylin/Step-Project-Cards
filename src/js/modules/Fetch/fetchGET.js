// import {Token} from "../variables.js";

export async function fetchAllCardsGET() {
    const queryGET = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
        },
    });

    const queryJSON = await queryGET.json();

    return queryJSON;

}