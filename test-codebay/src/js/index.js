document.addEventListener("DOMContentLoaded", () => {
  const setupModal = document.getElementById("setupModal");
  const accessModal = document.getElementById("accessModal");
  const closeSetupModalButton = setupModal.querySelector(".modal__closed");
  const closeAccessModalButton = accessModal.querySelector(".modal__closed");
  const lcdScreen = document.querySelector(".lcd-screen");
  const lcdScreenNumbers = document.querySelector(".lcd-screen__numbers");
  const buttons = document.querySelectorAll(".button");
  const alertBox = document.getElementById("alertBox");
  const alertText = alertBox.querySelector(".alert__text");
  const toggleVisibilityButton = document.querySelector(
    ".lcd-screen__toggle-visibility"
  );
  const eyeIcon = toggleVisibilityButton.querySelector("img");

  let isPinVisible = true;
  let pin = "";
  let storedPin = localStorage.getItem("pin");
  let attempts = 3;

  function updateLcdScreen() {
    if (isPinVisible && pin.length > 0) {
      lcdScreenNumbers.textContent = pin;
      eyeIcon.src = "./assets/icons/eye-open.svg";
    } else {
      lcdScreenNumbers.textContent = "*".repeat(pin.length);
      eyeIcon.src = "./assets/icons/eye-closed.svg";
    }
  }

  function toggleEyeIconVisibility(visible) {
    toggleVisibilityButton.style.display = visible ? "flex" : "none";
  }

  toggleVisibilityButton.addEventListener("click", () => {
    isPinVisible = !isPinVisible;
    updateLcdScreen();
  });

  if (!storedPin) {
    setupModal.style.display = "flex";
    accessModal.style.display = "none";
  } else {
    accessModal.style.display = "flex";
    setupModal.style.display = "none";
  }

  closeSetupModalButton.addEventListener("click", () => {
    setupModal.style.display = "none";
  });

  closeAccessModalButton.addEventListener("click", () => {
    accessModal.style.display = "none";
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "C") {
        pin = "";
        lcdScreenNumbers.textContent = "";
        lcdScreen.style.backgroundColor = "#E5F3F2";
        updateLcdScreen();
        toggleEyeIconVisibility(false);
      } else if (value === "OK") {
        if (!storedPin) {
          if (pin.length === 6) {
            localStorage.setItem("pin", pin);
            storedPin = pin;
            lcdScreenNumbers.textContent = "SAVED";
            pin = "";
            setTimeout(() => {
              lcdScreenNumbers.textContent = "";
              setupModal.style.display = "none";
              accessModal.style.display = "flex";
            }, 2000);
          } else {
            lcdScreenNumbers.textContent = "WRONG";
            lcdScreen.style.backgroundColor = "#FFE4E4";
            setTimeout(() => {
              lcdScreenNumbers.textContent = "";
              lcdScreen.style.backgroundColor = "#E5F3F2";
            }, 2000);
          }
        } else {
          if (pin === storedPin) {
            window.location.href = "https://www.codebay-innovation.com/";
          } else {
            attempts--;
            if (attempts > 0) {
              alertText.textContent = `¡El PIN no es correcto, te quedan ${attempts} intentos!`;
              alertBox.style.display = "flex";
              setTimeout(() => {
                alertBox.style.display = "none";
              }, 2000);
              lcdScreenNumbers.textContent = "";
              updateLcdScreen();
            } else {
              window.location.href = "https://policia.es/";
            }
            pin = "";
          }
        }
      } else if (/^\d$/.test(value)) {
        if (pin.length < 6) {
          pin += value;
          lcdScreenNumbers.textContent = pin;
          updateLcdScreen();
          toggleEyeIconVisibility(true);
        }
      } else {
        lcdScreenNumbers.textContent = "NOT A NUMBER";
        setTimeout(() => {
          lcdScreenNumbers.textContent = "";
        }, 2000);
        toggleEyeIconVisibility(false);
      }
    });
  });
});
