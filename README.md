# Interactive 3D Product Viewer

An interactive 3D product viewer built with Three.js that allows users to explore a chair model created entirely from basic geometries. The application features automatic camera rotation, mouse interaction, and part highlighting.

## Features

### 🎯 Core Functionality
- **3D Scene Setup**: Complete Three.js scene with perspective camera and WebGL renderer
- **Product Creation**: Chair model built from basic geometries (boxes, cylinders)
- **Responsive Design**: Adapts to different screen sizes and window resizing
- **Realistic Lighting**: Ambient, directional, and spot lighting with shadows

### 🖱️ Interaction Features
- **Mouse Controls**: OrbitControls for camera manipulation (zoom, pan, rotate)
- **Raycasting**: Click detection on individual chair parts
- **Hover Effects**: Visual feedback when hovering over parts
- **Part Information**: Information panel showing part names and descriptions
- **Click Animation**: Scale effects when clicking on parts

### 🎬 Animation Features
- **Automatic Rotation**: Camera smoothly orbits around the product
- **User Override**: Manual controls pause auto-rotation
- **Smooth Transitions**: Damped controls for fluid interaction
- **Performance Optimized**: Efficient animation loop with visibility handling

### 🎨 Visual Design
- **Modern UI**: Clean, glassmorphism-inspired interface
- **Material Properties**: Realistic materials with proper roughness and metalness
- **Shadow Mapping**: High-quality shadows for depth perception
- **Color Feedback**: Dynamic color changes for interaction states

## Project Structure

```
Computer-Graphics-assignment/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Styling and responsive design
├── scripts/
│   ├── initScene.js       # Scene initialization and setup
│   ├── createProduct.js   # Product (chair) creation
│   ├── addLighting.js     # Lighting configuration
│   ├── interaction.js     # Mouse interaction and raycasting
│   ├── cameraAnimation.js # Camera animation and controls
│   └── main.js           # Main application logic
└── README.md             # Project documentation
```

## Setup Instructions

### Prerequisites
- Modern web browser with WebGL support
- Local web server (for development)

### Installation
1. Clone or download the project files
2. Open a terminal in the project directory
3. Start a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
4. Open your browser and navigate to `http://localhost:8000`

### Direct File Opening
You can also open `index.html` directly in your browser, but some features may be limited due to CORS policies.

## Usage Guide

### Basic Controls
- **Mouse Drag**: Rotate camera around the product
- **Mouse Wheel**: Zoom in/out
- **Right Mouse Drag**: Pan the view
- **Click on Parts**: Select and view part information

### Interface Elements
- **Info Panel**: Appears when clicking on chair parts
- **Pause/Resume Button**: Toggle automatic camera rotation
- **Reset Camera Button**: Return to initial viewing position

### Product Parts
The chair consists of 8 interactive parts:
1. **Chair Seat** - Main seating surface
2. **Chair Backrest** - Supportive backrest
3. **Front Left Leg** - Front left stability leg
4. **Front Right Leg** - Front right stability leg
5. **Back Left Leg** - Back left stability leg
6. **Back Right Leg** - Back right stability leg
7. **Left Armrest** - Left arm support
8. **Right Armrest** - Right arm support

## Technical Implementation

### Three.js Components
- **Scene**: Main container for all 3D objects
- **PerspectiveCamera**: Realistic perspective projection
- **WebGLRenderer**: Hardware-accelerated rendering
- **OrbitControls**: Mouse-based camera controls
- **Raycaster**: Mouse interaction detection

### Materials and Lighting
- **MeshStandardMaterial**: Physically-based rendering materials
- **Ambient Light**: Base illumination
- **Directional Light**: Main light source with shadows
- **Spot Light**: Dramatic accent lighting
- **Fill Light**: Subtle secondary illumination

### Animation System
- **requestAnimationFrame**: Smooth 60fps rendering
- **Polar Coordinates**: Smooth circular camera motion
- **Time-based Animation**: Consistent rotation speed
- **User Interaction Handling**: Pause/resume functionality

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Performance Notes

- Optimized for 60fps rendering
- Efficient shadow mapping
- Responsive design for mobile devices
- Memory management for long-running sessions

## Future Enhancements

- Texture mapping for more realistic materials
- Multiple product models
- Advanced lighting effects
- Mobile touch controls
- Export functionality
- VR/AR support

## License

This project is created for educational purposes as part of a Computer Graphics assignment.

## Credits

Built with:
- [Three.js](https://threejs.org/) - 3D graphics library
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) - Camera controls
- Modern CSS features for UI design 