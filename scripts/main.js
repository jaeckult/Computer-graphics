// Main application file
let animationId;

// Initialize the application
function init() {
    console.log('Initializing 3D Product Viewer...');
    
    // Initialize scene
    initScene();
    
    // Create product
    createProduct();
    
    // Add lighting
    addLighting();
    
    // Initialize interaction system
    initInteraction();
    
    // Initialize camera animation
    initCameraAnimation();
    
    // Setup camera controls
    setupCameraControls();
    
    // Start animation loop
    startAnimation();
    
    console.log('3D Product Viewer initialized successfully!');
}

// Enhanced animation loop
function startAnimation() {
    function animate() {
        animationId = requestAnimationFrame(animate);
        
        // Update camera animation
        updateCameraAnimation();
        
        // Update lighting (optional)
        updateLighting();
        
        // Update controls
        controls.update();
        
        // Render scene
        renderer.render(scene, camera);
    }
    
    animate();
}

// Stop animation loop
function stopAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
}

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAnimation();
    } else {
        startAnimation();
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    stopAnimation();
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export main functions
window.init = init;
window.startAnimation = startAnimation;
window.stopAnimation = stopAnimation; 