document.addEventListener("DOMContentLoaded", loadCharacters);

async function addCharacter() {
    const name = document.getElementById("charName").value;

    const snapshot = await db.collection("characters")
        .where("name", "==", name)
        .get();

    if (!snapshot.empty) {
        alert("Character already claimed!");
        return;
    }

    await db.collection("characters").add({
        name: name,
        user: auth.currentUser.email,
        timestamp: Date.now()
    });

    alert("Character claimed!");
}

function loadCharacters() {
    const list = document.getElementById("characterList");
    list.innerHTML = "";

    let characters = JSON.parse(localStorage.getItem("mainCharacters")) || [];

    characters.forEach(char => {
        const div = document.createElement("div");
        div.className = "character-card";
        div.innerHTML = `
      <h3>${char.name}</h3>
      <p>From: ${char.origin}</p>
    `;
        list.appendChild(div);
    });
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

async function loadRanking() {
    const snapshot = await db.collection("characters").get();
    let users = {};

    snapshot.forEach(doc => {
        const user = doc.data().user;
        users[user] = (users[user] || 0) + 1;
    });

    console.log(users);
}
