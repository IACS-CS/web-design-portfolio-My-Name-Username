console.log("main.js loaded successfully!");

// Flash effect for About Me link
const aboutMeLink = document.querySelector(".abtme");
if (aboutMeLink) {
  aboutMeLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent immediate navigation
    const flash = document.getElementById("flash");
    flash.style.opacity = "1"; // Show yellow flash
    setTimeout(() => {
      flash.style.opacity = "0"; // Hide flash
      const aboutMeSection = document.getElementById("about-me");
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000); // 2 seconds
  });
}

// Moon hover effect with 5-second delay for countdown, then 5-second countdown to image change, permanent after change
const moon = document.querySelector(".Crest-Moon");
let timeoutId;
let intervalId;
let hasChanged = false;
if (moon) {
  moon.addEventListener("mouseenter", () => {
    if (!hasChanged) {
      moon.style.animation = "spin 1s linear infinite"; // Start spinning immediately if not changed
    }
    if (!hasChanged) {
      timeoutId = setTimeout(() => {
        // Start countdown after 5 seconds
        let count = 5;
        const countdownEl = document.createElement("div");
        countdownEl.id = "countdown";
        countdownEl.style.position = "fixed";
        countdownEl.style.top = "85px";
        countdownEl.style.right = "375px";
        countdownEl.style.color = "white";
        countdownEl.style.fontSize = "24px";
        countdownEl.style.zIndex = "10000";
        countdownEl.style.transform = "translate(-50%, -50%)";
        countdownEl.style.textAlign = "center";
        document.body.appendChild(countdownEl);
        countdownEl.textContent = count;
        intervalId = setInterval(() => {
          count--;
          if (count > 0) {
            countdownEl.textContent = count;
          } else {
            clearInterval(intervalId);
            countdownEl.remove();
            moon.style.backgroundImage = "url('../Blood.png')"; // Change image after countdown
            hasChanged = true;
            // Add class to turn all box-shadows red
            document.body.classList.add("red-shadows");
          }
        }, 1000);
      }, 5000); // 5 seconds delay before countdown starts
    }
  });
  moon.addEventListener("mouseleave", () => {
    if (!hasChanged) {
      moon.style.animation = "none";
      moon.style.backgroundImage =
        "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg')";
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
        const countdownEl = document.getElementById("countdown");
        if (countdownEl) countdownEl.remove();
      }
    }
  });
}

/* This code was generated with help from Github Copilot
in response to the prompt "make it a ten second delay for it to change" - 12/16/25 */

/* This code was generated with help from Github Copilot
in response to the prompt "Make its so that when the moon spins for 10 seconds, it fades into this image permanently, until the refresh the page" - 12/16/25 */

/* This code was generated with help from Github Copilot
in response to the prompt "Can you make it so that after 5 seconds, their is a coutdown until the moon turns into the Blood.png, make sure it only appears after 2 seconds then dissapears after the moon changes. Agai n make it a count down from when it happens please." - 12/17/25 */
