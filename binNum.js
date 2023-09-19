function generateRandomBinary() {
    let num = '';
    for (let i = 0; i < 9; i++) {
      num += Math.floor(Math.random() * 2);
    }
    return num;
  }

  function updateBin() {
    const binaryNumberElement = document.getElementById('bin');
    binaryNumberElement.textContent = generateRandomBinary();
  }

  setInterval(updateBin, 100);