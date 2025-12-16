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
    }, 1000); // 2 seconds
  });
}

/* This code was generated with help from Github Copilot
in response to the prompt "make the like About Me!! Have the whole screen flash yellow then go back to normal, an take you to the about me. Make sure it takes 2 seconds and doesn't breack anything." - 12/16/25 */
