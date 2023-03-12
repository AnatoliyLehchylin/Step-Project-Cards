// import {Token} from "../variables.js";

export async function fetchPOST(obj) {
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
}

//
// export async function fetchDentistPOST(obj) {
//    const queryPOST = await fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${Token}`
//         },
//         body: JSON.stringify({
//             purpose: obj.purpose,
//             description: obj.description,
//             urgency: obj.urgency,
//             name: obj.name,
//             data: obj.data,
//             doctor: obj.doctor
//         })
//     });
//
//    const queryJSON = await queryPOST.json();
//
//    return queryJSON.id;
// }
//
// export async function fetchTherapistPOST(obj) {
//     const queryPOST = await fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${Token}`
//         },
//         body: JSON.stringify({
//             purpose: obj.purpose,
//             description: obj.description,
//             urgency: obj.urgency,
//             name: obj.name,
//             age: obj.age,
//             doctor: obj.doctor
//         })
//     });
//
//     const queryJSON = await queryPOST.json();
//
//     return queryJSON.id;
// }
//
// export async function fetchCardiologistPOST(obj) {
//     const queryPOST = await fetch("https://ajax.test-danit.com/api/v2/cards", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${Token}`
//         },
//         body: JSON.stringify({
//             purpose: obj.purpose,
//             description: obj.description,
//             urgency: obj.urgency,
//             name: obj.name,
//             pressure: obj.pressure,
//             index: obj.index,
//             disease: obj.disease,
//             age: obj.age,
//             doctor: obj.doctor
//         })
//     });
//
//     const queryJSON = await queryPOST.json();
//
//     return queryJSON.id;
// }
