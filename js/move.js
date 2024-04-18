      // Houd de huidige bewegingsrichting van elke speler bij
      let player1Direction = 0;
      let player2Direction = 0;

      // Haal de gekozen fighters op uit de local storage
      const player1FighterColor = localStorage.getItem('player1SelectedFighter');
      const player2FighterColor = localStorage.getItem('player2SelectedFighter');

      // Als er gekozen fighters zijn, laat ze zien op het scherm
      if (player1FighterColor && player2FighterColor) {
          const player1 = document.getElementById('player1');
          const player2 = document.getElementById('player2');

          player1.style.backgroundColor = player1FighterColor;
          player1.textContent = 'Player 1';

          player2.style.backgroundColor = player2FighterColor;
          player2.textContent = 'Player 2';

          // Event listeners voor toetsaanslagen om spelers te laten bewegen
          document.addEventListener('keydown', function(event) {
              // Speler 1 beweegt naar links
              if (event.key === 'a') {
                  player1Direction = -1; // Zet de bewegingsrichting van speler 1 naar links
              }
            
              if (event.key === 'd') {
                  player1Direction = 1; 
              }
            
              if (event.key === 'ArrowLeft') {
                  player2Direction = -1; 
              }
        
              if (event.key === 'ArrowRight') {
                  player2Direction = 1; 
              }
          });

          // Event listeners om beweging te stoppen wanneer toetsen worden losgelaten
          document.addEventListener('keyup', function(event) {
              // Speler 1 stopt met bewegen (a-toets of d-toets)
              if (event.key === 'a' || event.key === 'd') {
                  player1Direction = 0; // Stop de beweging van speler 1
              }
              // Speler 2 stopt met bewegen (pijltje naar links of pijltje naar rechts)
              if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                  player2Direction = 0; // Stop de beweging van speler 2
              }
          });

          // Functie om de speler vloeiend te laten bewegen
          function movePlayer() {
              // Bepaal de nieuwe positie van speler 1
              const player1 = document.getElementById('player1');
              let player1Left = parseFloat(player1.style.left) || 0;
              player1Left += player1Direction * 3; // Pas de beweging toe (3px per keer)
              player1.style.left = player1Left + 'px';

              // Bepaal de nieuwe positie van speler 2
              const player2 = document.getElementById('player2');
              let player2Left = parseFloat(player2.style.left) || 0;
              player2Left += player2Direction * 3; // Pas de beweging toe (3px per keer)
              player2.style.left = player2Left + 'px';

              // Roep de functie opnieuw aan voor vloeiende beweging
              requestAnimationFrame(movePlayer);
          }

          // Start de beweging van de spelers
          movePlayer();
      } else {
          // Als er geen gekozen fighters zijn, keer terug naar de kies-fighter pagina
          window.location.href = 'chooseFighter.html';
      }