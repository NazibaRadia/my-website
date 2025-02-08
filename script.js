// Show the first GIF when the page loads
window.onload = function() {
    let gifContainer = document.getElementById("gifContainer");

    // Add the first GIF at the start
    gifContainer.innerHTML = `<img id="beforeGif" src="before-yes.gif" class="gif">`;

    // Play music on load (if allowed)
    let music = document.getElementById("loveSong");
    music.play().catch(error => console.log("Autoplay blocked, user must interact first."));
};

// When "Yes" is clicked, change everything
function yesClick() {
    let container = document.querySelector('.container'); // Select the main container

    // Replace everything inside the container
    container.innerHTML = `
        <h1>💕 Yay! You’re stuck with me forever now! 💖</h1>
        <p class="message">Hope you’re happy, because there's no backing out now! 🥰</p>
        <div id="gifContainer">
            <img src="after-yes-1.gif" class="gif">
            <img src="after-yes-2.gif" class="gif">
        </div>
    `;

    // Play the song
    let music = document.getElementById("loveSong");
    music.play();

    // Confetti effect
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

function moveButton() {
    const button = document.querySelector('.no');
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
}

