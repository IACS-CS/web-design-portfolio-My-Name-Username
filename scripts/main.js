console.log("main.js loaded successfully!");

// Flash effect for About Me link
const aboutMeLink = document.querySelector('.abtme');
if (aboutMeLink) {
  aboutMeLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent immediate navigation
    const flash = document.getElementById('flash');
    flash.style.opacity = '1'; // Show yellow flash
    setTimeout(() => {
      flash.style.opacity = '0'; // Hide flash
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); // 2 seconds
  });
}

// Moon hover effect with 10-second delay for image change, permanent after change
const moon = document.querySelector('.Crest-Moon');
let timeoutId;
let hasChanged = false;
if (moon) {
  moon.addEventListener('mouseenter', () => {
    if (!hasChanged) {
      moon.style.animation = 'spin 1s linear infinite'; // Start spinning immediately if not changed
    }
    if (!hasChanged) {
      timeoutId = setTimeout(() => {
        moon.style.backgroundImage = "url('../S.png')"; // Change image after 10 seconds
        hasChanged = true;
        // Change all box-shadows to red
        document.querySelectorAll('*').forEach(el => {
          const shadow = getComputedStyle(el).boxShadow;
          if (shadow && shadow !== 'none') {
            el.style.boxShadow = shadow.replace(/rgba?\([^)]+\)/g, 'red').replace(/#[0-9a-fA-F]{3,6}/g, 'red').replace(/hsl\([^)]+\)/g, 'red');
          }
        });
      }, 10000);
    }
  });
  moon.addEventListener('mouseleave', () => {
    if (!hasChanged) {
      moon.style.animation = 'none';
      moon.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg')";
      clearTimeout(timeoutId);
    }
  });
}

/* This code was generated with help from Github Copilot
in response to the prompt "make it a ten second delay for it to change" - 12/16/25 */

/* This code was generated with help from Github Copilot
in response to the prompt "Make its so that when the moon spins for 10 seconds, it fades into this image permanently, until the refresh the page" - 12/16/25 */
