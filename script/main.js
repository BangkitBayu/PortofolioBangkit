
//typing text animation
const textArray = ["Student", "Web Designer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 250;
const eraseSpeed = 80;
const delayBetweenText = 1500;

const typingTextAnimation = document.getElementById('text');
const blinkCursorAnimation = document.getElementsByClassName("blink")[0];

function typeText() {
    if (charIndex < textArray[index].length) {
        typingTextAnimation.textContent += textArray[index].charAt(charIndex);
        charIndex++
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenText);
    };
};

function eraseText() {
    if (charIndex > 0) {
        typingTextAnimation.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed)
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    };
};

document.addEventListener('DOMContentLoaded', () => {
    if (textArray.length) setTimeout(typeText, delayBetweenText);
});

