// anime.timeline({loop: true})
//   .add({
//     targets: '.ml15 .word',
//     scale: [14,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 800,
//     delay: (el, i) => 800 * i
//   }).add({
//     targets: '.ml15',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


  window.addEventListener('load', function() {
            // Hide the loading animation
            var loadingAnimation = document.querySelector('.sk-chase');
            loadingAnimation.style.display = 'none';
        });

        function closeMenu() {
          // Get the checkbox element
          var checkbox = document.querySelector('.toggler');
          
          // Check if the checkbox is currently checked
          if (checkbox.checked) {
            // Toggle the checkbox status to uncheck it (closing the menu)
            checkbox.checked = false;
          }
        }

        function animateWords() {
          const words = ["Java", "Backend", "Developer"];
          let currentWord = 0;
          const wordElement = document.getElementById("word");
        
          function changeWord() {
            wordElement.textContent = words[currentWord];
            currentWord = (currentWord + 1) % words.length;
          }
        
          setInterval(changeWord, 1000);
        }

        const h1 = document.querySelector("span.animate-charcter");
        
          
        
       
        const animeTitle = (element) => {
          
          const arrayText = element.innerHTML.split("");
          element.innerHTML = "";
          arrayText.forEach((letter, indice) => {
            setTimeout(() => (element.innerHTML += letter), 135 * indice);
          });
          element.classList.add("animate__shakeY");
        };
        animeTitle(h1);
        
      
        consoleText(['Java Backend Developer.'], 'text',['tomato','rebeccapurple','lightblue']);

        function consoleText(words, id, colors) {
          if (colors === undefined) colors = ['#fff'];
          var visible = true;
          var con = document.getElementById('console');
          var letterCount = 1;
          var x = 1;
          var waiting = false;
          var target = document.getElementById(id)
          target.setAttribute('style', 'color:' + colors[0])
          window.setInterval(function() {
        
            if (letterCount === 0 && waiting === false) {
              waiting = true;
              target.innerHTML = words[0].substring(0, letterCount)
              window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
              }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
              waiting = true;
              window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
              }, 1000)
            } else if (waiting === false) {
              target.innerHTML = words[0].substring(0, letterCount)
              letterCount += x;
            }
          }, 120)
          window.setInterval(function() {
            if (visible === true) {
              con.className = 'word hidden'
              visible = false;
        
            } else {
              con.className = 'word'
        
              visible = true;
            }
          }, 400)
        }


// background Animation

