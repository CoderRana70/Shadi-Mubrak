const heart = document.getElementById('heart');
const couplePhoto = document.getElementById('couplePhoto');
const friendLeft = document.getElementById('friendLeft');
const friendRight = document.getElementById('friendRight');
const instruction = document.getElementById('instruction');
const flowers = document.getElementById('flowers');

heart.addEventListener('click', () => {
  // Play background music
  document.getElementById('bgMusic').play();

  // Hide instruction text and zoom the heart
  instruction.style.display = "none";
  heart.style.transition = "transform 2s, opacity 2s";
  heart.style.transform = "scale(20)";
  heart.style.opacity = "0";
  document.body.style.backgroundColor = "red";

  setTimeout(() => {
    showAnimatedText();
  }, 1000);

  setTimeout(() => {
    // Make photos drop in
    couplePhoto.style.transform = "translateY(0)";
    couplePhoto.style.opacity = "1";
    friendLeft.style.transform = "translateY(0)";
    friendLeft.style.opacity = "1";
    friendRight.style.transform = "translateY(0)";
    friendRight.style.opacity = "1";
  }, 2000);

  // Flower sprinkle effect
  setInterval(createFlower, 300);
});

// Function to create flowers randomly on the page
function createFlower() {
  const flower = document.createElement('span');
  flower.classList.add('flower');
  flower.innerText = "🌸"; // Flower emoji
  flower.style.position = "absolute";
  flower.style.left = Math.random() * 100 + "%";
  flower.style.top = Math.random() * 100 + "%";
  flowers.appendChild(flower);
  setTimeout(() => {
    flower.remove();
  }, 2000);
}

// Animating "Happy Married Life" letter by letter
function showAnimatedText() {
  const text = "Happy Married Life";
  let index = 0;
  const animatedText = text.split(" ").map((word, idx) => {
    const span = document.createElement("span");
    span.style.position = "absolute";
    span.style.opacity = "0";
    span.style.transition = "opacity 2s";
    document.body.appendChild(span);
    return { span, word, idx };
  });

  animatedText.forEach(({ span, word }, idx) => {
    span.innerText = word;
    setTimeout(() => {
      span.style.opacity = "1";
    }, 100 * idx);
  });
}
