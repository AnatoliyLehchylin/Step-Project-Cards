export async function fetchLOGIN(email, password) {
    const login = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:`${email}`, password:`${password}` })
    })
    const loginText = login.text();
    return loginText;
}