import { warriorPlayer, magePlayer, namn, namn2 } from './modules/players.js';

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
  
  const music = document.body.querySelector('audio');

  function startMusic (){
    setTimeout(() => {
      music.play();
    }, 1000);
  }

namn.addEventListener('click', startMusic);
namn2.addEventListener('click', startMusic);
  