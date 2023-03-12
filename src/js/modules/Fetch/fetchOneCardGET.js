
export async function fetchOneCardGET(id) {
    const queryGET = await fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
        },
    });

    const queryJSON = await queryGET.json();

    return queryJSON;

}