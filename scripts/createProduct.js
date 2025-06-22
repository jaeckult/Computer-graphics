// Product creation module
let productGroup;
let productParts = [];

// Chair part definitions
const chairParts = {
    seat: {
        name: "Chair Seat",
        description: "The main seating surface made of comfortable padding",
        geometry: new THREE.BoxGeometry(2, 0.3, 2),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x8B4513,
            roughness: 0.8,
            metalness: 0.1
        }),
        position: [0, 0, 0],
        scale: [1, 1, 1]
    },
    backrest: {
        name: "Chair Backrest",
        description: "Supportive backrest for comfortable seating",
        geometry: new THREE.BoxGeometry(2, 2, 0.2),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x654321,
            roughness: 0.7,
            metalness: 0.1
        }),
        position: [0, 1.15, -0.9],
        scale: [1, 1, 1]
    },
    leg1: {
        name: "Front Left Leg",
        description: "Front left chair leg providing stability",
        geometry: new THREE.CylinderGeometry(0.1, 0.1, 1.5),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x2F4F4F,
            roughness: 0.3,
            metalness: 0.8
        }),
        position: [-0.8, -0.75, 0.8],
        scale: [1, 1, 1]
    },
    leg2: {
        name: "Front Right Leg",
        description: "Front right chair leg providing stability",
        geometry: new THREE.CylinderGeometry(0.1, 0.1, 1.5),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x2F4F4F,
            roughness: 0.3,
            metalness: 0.8
        }),
        position: [0.8, -0.75, 0.8],
        scale: [1, 1, 1]
    },
    leg3: {
        name: "Back Left Leg",
        description: "Back left chair leg providing stability",
        geometry: new THREE.CylinderGeometry(0.1, 0.1, 1.5),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x2F4F4F,
            roughness: 0.3,
            metalness: 0.8
        }),
        position: [-0.8, -0.75, -0.8],
        scale: [1, 1, 1]
    },
    leg4: {
        name: "Back Right Leg",
        description: "Back right chair leg providing stability",
        geometry: new THREE.CylinderGeometry(0.1, 0.1, 1.5),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x2F4F4F,
            roughness: 0.3,
            metalness: 0.8
        }),
        position: [0.8, -0.75, -0.8],
        scale: [1, 1, 1]
    },
    armrest1: {
        name: "Left Armrest",
        description: "Left armrest for comfortable arm support",
        geometry: new THREE.BoxGeometry(0.2, 0.8, 1.8),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x8B4513,
            roughness: 0.8,
            metalness: 0.1
        }),
        position: [-1.1, 0.4, 0],
        scale: [1, 1, 1]
    },
    armrest2: {
        name: "Right Armrest",
        description: "Right armrest for comfortable arm support",
        geometry: new THREE.BoxGeometry(0.2, 0.8, 1.8),
        material: new THREE.MeshStandardMaterial({ 
            color: 0x8B4513,
            roughness: 0.8,
            metalness: 0.1
        }),
        position: [1.1, 0.4, 0],
        scale: [1, 1, 1]
    }
};

// Create the product (chair)
function createProduct() {
    productGroup = new THREE.Group();
    
    // Create each part of the chair
    Object.keys(chairParts).forEach(partKey => {
        const partData = chairParts[partKey];
        const mesh = new THREE.Mesh(partData.geometry, partData.material);
        
        // Set position and scale
        mesh.position.set(...partData.position);
        mesh.scale.set(...partData.scale);
        
        // Enable shadows
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // Store part information
        mesh.userData = {
            name: partData.name,
            description: partData.description,
            partKey: partKey
        };
        
        // Add to product group and parts array
        productGroup.add(mesh);
        productParts.push(mesh);
    });
    
    // Center the product at origin
    productGroup.position.set(0, 0, 0);
    
    // Add product to scene
    scene.add(productGroup);
    
    console.log('Product created successfully');
    return productGroup;
}

// Get product parts for interaction
function getProductParts() {
    return productParts;
}

// Export functions
window.createProduct = createProduct;
window.getProductParts = getProductParts;
window.productGroup = productGroup; 