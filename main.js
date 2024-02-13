import { warriorPlayer, magePlayer, namn, namn2 } from "./modules/players.js";

document.getElementById("fireball").addEventListener("click", () => {
    magePlayer.fireball();
});

document.getElementById("staffhit").addEventListener("click", () => {
    magePlayer.staffHit();
});

document.getElementById("avoid").addEventListener("click", () => {
    magePlayer.avoid();
});

document.getElementById("swordslash").addEventListener("click", () => {
    warriorPlayer.swordSlash();
});

document.getElementById("shieldbash").addEventListener("click", () => {
    warriorPlayer.shieldBash();
});

document.getElementById("shield").addEventListener("click", () => {
    warriorPlayer.shield();
});

const music = document.body.querySelector("audio");

function startMusic() {
    setTimeout(() => {
        music.play();
    }, 1000);
}

namn.addEventListener("click", startMusic);
namn2.addEventListener("click", startMusic);

document.addEventListener('keydown', (event) => {
    if (!avoid.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "a") {
            magePlayer.avoid();
        }
    }

    if (!fireball.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "s") {
            magePlayer.fireball();
        }
    }

    if (!staffhit.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "d") {
            magePlayer.staffHit();
        }
    }

    if (!shield.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "4") {
            warriorPlayer.shield();
        }
    }

    if (!swordslash.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "5") {
            warriorPlayer.swordSlash();
        }
    }

    if (!shieldbash.disabled && knappen.disabled && knappen2.disabled) {
        if (event.key === "6") {
            warriorPlayer.shieldBash();
        }
    }

    if (knappen.disabled && knappen2.disabled) {
        if (event.key === "h") {
            alert('Tangenter:\nMage: Avoid = "a", Fireball = "s", Staffhit = "d"\nWarrior: Shield = "4", Swordslash = "5", Shieldbash = "6"\nLjud på/av = "ctrl + m", Hjälp = "h"');
        }
    }
});
