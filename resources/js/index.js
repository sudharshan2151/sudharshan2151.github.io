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
        
        
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting
              ? entry.target.classList.add("show")
              : entry.target.classList.remove("show");
          });
        });
        
        const hiddenElements = document.querySelectorAll("section.hidden");
        
        hiddenElements.forEach((el) => observer.observe(el));
            