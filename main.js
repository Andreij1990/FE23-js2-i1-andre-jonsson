import { warriorPlayer, magePlayer } from './modules/players.js';

document.getElementById('fireball').addEventListener('click', () => {
    magePlayer.fireball();
  });
  
  document.getElementById('staffhit').addEventListener('click', () => {
    magePlayer.staffHit();
  });
  
  document.getElementById('avoid').addEventListener('click', () => {
    magePlayer.avoid();
  });
  
  document.getElementById('swordslash').addEventListener('click', () => {
    warriorPlayer.swordSlash();
  });
  
  document.getElementById('shieldbash').addEventListener('click', () => {
    warriorPlayer.shieldBash();
  });
  
  document.getElementById('shield').addEventListener('click', () => {
    warriorPlayer.shield();
  });
  
  document.addEventListener('DOMContentLoaded', function (error) {

    const promise = document.querySelector('audio').play();
  
    if (promise !== undefined) {
        promise.catch(error => {
            console.log ("Auto-play failed")
        }).then(() => {
            console.log ("Auto-play started")
        });
    }
  });
  
  