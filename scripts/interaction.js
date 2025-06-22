// Interaction module
let raycaster, mouse;
let selectedPart = null;
let hoveredPart = null;

// Initialize interaction system
function initInteraction() {
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Add event listeners
    canvas.addEventListener('click', onMouseClick);
    canvas.addEventListener('mousemove', onMouseMove);
    
    console.log('Interaction system initialized');
}

// Handle mouse click events
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(productParts, true);
    
    if (intersects.length > 0) {
        const clickedPart = intersects[0].object;
        
        // Visual feedback - scale effect
        animatePartClick(clickedPart);
        
        // Show part information
        showPartInfo(clickedPart);
        
        // Store selected part
        selectedPart = clickedPart;
        
        console.log('Clicked on:', clickedPart.userData.name);
    } else {
        // Hide info panel if clicking on empty space
        hidePartInfo();
        selectedPart = null;
    }
}

// Handle mouse move for hover effects
function onMouseMove(event) {
    // Calculate mouse position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the picking ray
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(productParts, true);
    
    if (intersects.length > 0) {
        const newHoveredPart = intersects[0].object;
        
        // Only update if hovering over a different part
        if (hoveredPart !== newHoveredPart) {
            // Remove hover effect from previous part
            if (hoveredPart) {
                removeHoverEffect(hoveredPart);
            }
            
            // Add hover effect to new part
            addHoverEffect(newHoveredPart);
            hoveredPart = newHoveredPart;
        }
    } else {
        // Remove hover effect if not hovering over any part
        if (hoveredPart) {
            removeHoverEffect(hoveredPart);
            hoveredPart = null;
        }
    }
}

// Add hover effect to a part
function addHoverEffect(part) {
    // Scale up slightly
    part.scale.multiplyScalar(1.05);
    
    // Add outline effect by changing material color
    const originalColor = part.material.color.getHex();
    part.material.color.setHex(0x00ff00);
    part.userData.originalColor = originalColor;
}

// Remove hover effect from a part
function removeHoverEffect(part) {
    // Scale back to original
    part.scale.multiplyScalar(1 / 1.05);
    
    // Restore original color
    if (part.userData.originalColor) {
        part.material.color.setHex(part.userData.originalColor);
    }
}

// Animate part click effect
function animatePartClick(part) {
    // Store original scale
    const originalScale = part.scale.clone();
    
    // Scale up quickly
    part.scale.multiplyScalar(1.2);
    
    // Scale back down after a short delay
    setTimeout(() => {
        part.scale.copy(originalScale);
    }, 150);
}

// Show part information panel
function showPartInfo(part) {
    const infoPanel = document.getElementById('info-panel');
    const partName = document.getElementById('part-name');
    const partDescription = document.getElementById('part-description');
    
    partName.textContent = part.userData.name;
    partDescription.textContent = part.userData.description;
    
    infoPanel.classList.remove('hidden');
}

// Hide part information panel
function hidePartInfo() {
    const infoPanel = document.getElementById('info-panel');
    infoPanel.classList.add('hidden');
}

// Export functions
window.initInteraction = initInteraction;
window.showPartInfo = showPartInfo;
window.hidePartInfo = hidePartInfo; 