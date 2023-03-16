// import {Token} from "../variables.js";

export async function fetchPOST(obj) {

    try {
        const queryPOST = await fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            body: JSON.stringify(obj)
        });

        const queryJSON = await queryPOST.json();

        return queryJSON.id;

    } catch (error) {
        console.error('Виникла проблема з Вашим fetch-запросом: ' + error);
    }

}
