async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const dati = await res.json();

    document.getElementById('risultato').innerText = dati.messaggio;
}