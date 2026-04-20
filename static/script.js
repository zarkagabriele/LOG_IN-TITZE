async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Scrivi username e password!");
        return;
    }

    const res = await fetch(`/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);

    const dati = await res.json();

    document.getElementById('risultato').innerText = dati.messaggio;
}