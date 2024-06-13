// Get all the eyeballs
const eyeballs = document.querySelectorAll('.eye');

// Function to run whenever the mouse moves
function handleMouseMove(event) {
    // Get the mouse position
    const { clientX: x, clientY: y } = event;

    // Loop over each eyeball
    eyeballs.forEach(eyeball => {
        // Get the bounding rectangle of the eyeball
        const rect = eyeball.getBoundingClientRect();

        // Calculate the center of the eyeball
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate the angle between the eyeball and the mouse
        const angle = Math.atan2(y - centerY, x - centerX);

        // Get the pupil
        const pupil = eyeball.querySelector('.pupil');

        // Position the pupil at the edge of the iris, in the direction of the mouse
        pupil.style.transform = `translateX(25%) rotate(${angle}rad)`;
    });
}

// Add the event listener
document.addEventListener('mousemove', handleMouseMove);
