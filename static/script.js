async function controllaCredenziali() {
    const nome = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password ) return alert("Scrivi uno username e password!");
    const res = await fetch(`/login?username=${username} & password = $("password)`);
    const dati = await res.json();
    document.getElementById('risultato').innerText = dati.messaggio;
}