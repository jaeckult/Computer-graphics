// Lighting module
let ambientLight, directionalLight, spotLight;

// Add lighting to the scene
function addLighting() {
    // Ambient light for general illumination
    ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    // Main directional light for shadows and highlights
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    
    // Configure shadow properties
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    
    scene.add(directionalLight);
    
    // Additional spot light for dramatic effect
    spotLight = new THREE.SpotLight(0xffffff, 0.6);
    spotLight.position.set(-5, 8, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    
    // Configure spot light shadows
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 0.5;
    spotLight.shadow.camera.far = 50;
    
    scene.add(spotLight);
    
    // Add a subtle fill light from the opposite side
    const fillLight = new THREE.DirectionalLight(0x87CEEB, 0.3);
    fillLight.position.set(-3, 5, -3);
    scene.add(fillLight);
    
    console.log('Lighting added successfully');
}

// Update lighting based on camera position (optional enhancement)
function updateLighting() {
    if (directionalLight && camera) {
        // Make directional light follow camera slightly for better illumination
        const cameraPosition = camera.position.clone();
        directionalLight.position.copy(cameraPosition);
        directionalLight.position.y += 5;
        directionalLight.lookAt(0, 0, 0);
    }
}

// Export functions
window.addLighting = addLighting;
window.updateLighting = updateLighting; 