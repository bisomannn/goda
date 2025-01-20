let totalScores = [0, 0];
let isSubtractMode = false;

// Update scores
function updateScore(player, value) {
    totalScores[player] += isSubtractMode ? -value : value;
    document.getElementById(`player${player + 1}-score`).textContent = totalScores[player];
}

// Toggle mode
function toggleMode() {
    isSubtractMode = !isSubtractMode;
    const modeIndicator = document.getElementById("mode-indicator");
    modeIndicator.textContent = isSubtractMode ? "وضع النزول مفعل" : "وضع الاكل مفعل ودى";
    modeIndicator.style.color = isSubtractMode ? "red" : "green";
}

// Initialize buttons
function initButtons() {
    const player1Buttons = document.querySelectorAll("#player1-buttons .number-button");
    const player2Buttons = document.querySelectorAll("#player2-buttons .number-button");

    player1Buttons.forEach(button => {
        button.addEventListener("click", () => {
            updateScore(0, parseInt(button.getAttribute("data-value")));
        });
    });

    player2Buttons.forEach(button => {
        button.addEventListener("click", () => {
            updateScore(1, parseInt(button.getAttribute("data-value")));
        });
    });
}

// Start the game
function startGame() {
    totalScores = [0, 0];
    document.getElementById("player1-score").textContent = "0";
    document.getElementById("player2-score").textContent = "0";
    isSubtractMode = false;
    document.getElementById("mode-indicator").textContent = "Add Mode ON";
    document.getElementById("mode-indicator").style.color = "green";
}

// Event listeners
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("toggle").addEventListener("click", toggleMode);

// Initialize
initButtons();
// لاعب 1: تغيير الاسم
document.getElementById('edit-player1-name').addEventListener('click', function () {
  const nameField = document.getElementById('player1-name');
  const inputField = document.getElementById('player1-name-input');

  if (inputField.style.display === 'none') {
      // عرض الحقل وتعبئته بالاسم الحالي
      inputField.style.display = 'block';
      inputField.value = nameField.textContent;
  } else {
      // تحديث الاسم وإخفاء الحقل
      nameField.textContent = inputField.value || 'Player 1';
      inputField.style.display = 'none';
  }
});

// لاعب 2: تغيير الاسم
document.getElementById('edit-player2-name').addEventListener('click', function () {
  const nameField = document.getElementById('player2-name');
  const inputField = document.getElementById('player2-name-input');

  if (inputField.style.display === 'none') {
      // عرض الحقل وتعبئته بالاسم الحالي
      inputField.style.display = 'block';
      inputField.value = nameField.textContent;
  } else {
      // تحديث الاسم وإخفاء الحقل
      nameField.textContent = inputField.value || 'Player 2';
      inputField.style.display = 'none';
  }
});
