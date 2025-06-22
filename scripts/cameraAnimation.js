// Camera animation module
let autoRotationEnabled = true;
let rotationSpeed = 0.5; // radians per second
let startTime = Date.now();

// Initialize camera animation
function initCameraAnimation() {
    // Set initial camera position for good viewing angle
    camera.position.set(8, 5, 8);
    camera.lookAt(0, 0, 0);
    
    // Update controls target
    controls.target.set(0, 0, 0);
    controls.update();
    
    console.log('Camera animation initialized');
}

// Update camera animation
function updateCameraAnimation() {
    if (!autoRotationEnabled) return;
    
    // Calculate time elapsed
    const currentTime = Date.now();
    const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
    
    // Calculate rotation angle
    const angle = rotationSpeed * elapsed;
    
    // Calculate new camera position using polar coordinates
    const radius = 8;
    const height = 5;
    
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    camera.position.y = height;
    
    // Always look at the center
    camera.lookAt(0, 0, 0);
    
    // Update controls to match camera position
    controls.update();
}

// Toggle auto rotation
function toggleAutoRotation() {
    autoRotationEnabled = !autoRotationEnabled;
    
    const button = document.getElementById('toggle-rotation');
    if (autoRotationEnabled) {
        button.textContent = 'Pause Auto-Rotation';
        startTime = Date.now() - (Date.now() - startTime); // Resume from current position
    } else {
        button.textContent = 'Resume Auto-Rotation';
    }
    
    console.log('Auto rotation:', autoRotationEnabled ? 'enabled' : 'disabled');
}

// Reset camera to initial position
function resetCamera() {
    // Reset camera position
    camera.position.set(8, 5, 8);
    camera.lookAt(0, 0, 0);
    
    // Reset controls
    controls.reset();
    
    // Reset animation time
    startTime = Date.now();
    
    console.log('Camera reset to initial position');
}

// Handle user interaction to pause auto-rotation
function handleUserInteraction() {
    if (autoRotationEnabled) {
        // Pause auto-rotation when user interacts
        autoRotationEnabled = false;
        const button = document.getElementById('toggle-rotation');
        button.textContent = 'Resume Auto-Rotation';
    }
}

// Set up event listeners for user interaction
function setupCameraControls() {
    // Listen for user interaction with controls
    controls.addEventListener('start', handleUserInteraction);
    
    // Set up button event listeners
    const toggleButton = document.getElementById('toggle-rotation');
    const resetButton = document.getElementById('reset-camera');
    
    toggleButton.addEventListener('click', toggleAutoRotation);
    resetButton.addEventListener('click', resetCamera);
    
    console.log('Camera controls set up');
}

// Get auto rotation status
function isAutoRotationEnabled() {
    return autoRotationEnabled;
}

// Export functions
window.initCameraAnimation = initCameraAnimation;
window.updateCameraAnimation = updateCameraAnimation;
window.toggleAutoRotation = toggleAutoRotation;
window.resetCamera = resetCamera;
window.setupCameraControls = setupCameraControls;
window.isAutoRotationEnabled = isAutoRotationEnabled; 