🎨 DOM Manipulation Project
An interactive web project developed with modern JavaScript, featuring various DOM manipulation capabilities.
📋 Table of Contents

Features
Installation
Usage
Functions
Keyboard Shortcuts
Technologies

✨ Features
1. 🖼️ Image Gallery

Main image changes when hovering over thumbnails
Smooth transition effect

2. 🌙 Dark Theme

One-click dark/light theme switching
Dynamic button text updates
CSS class-based theme system

3. 🎨 Grayscale Effect

Mouse hover effect on all images
Automatic black-and-white conversion

4. ⌨️ Theme Switching with Keyboard

1 key: Theme 1
2 key: Theme 2
3 key: Theme 3
Esc key: Reset theme

5. 📝 Smart Form System

Automatic uppercase conversion
Button activation with 5+ character validation
Success message after form submission
Automatic form reset

🚀 Installation
1. Clone the Project
bashgit clone https://github.com/username/dom-project.git
cd dom-project
2. File Structure
dom-project/
│
├── index.html          # Main HTML file
├── index.js            # JavaScript file
├── style.css           # CSS file (optional)
└── README.md           # This file
3. Open in Browser
bash# Simply open index.html in your browser
# or use a live server
💻 Usage
Usage in HTML
html<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Main image -->
    <img id="main-image" src="image.jpg" alt="Main Image">
    
    <!-- Thumbnail navigation -->
    <div class="main-navigation">
        <img src="thumb1.jpg" alt="Thumbnail 1">
        <img src="thumb2.jpg" alt="Thumbnail 2">
        <img src="thumb3.jpg" alt="Thumbnail 3">
        <img src="thumb4.jpg" alt="Thumbnail 4">
    </div>
    
    <!-- Description area (dark mode button will be added here) -->
    <div class="description"></div>
    
    <!-- Form -->
    <form>
        <input type="text" name="full_name" placeholder="Your Name">
        <button type="submit" disabled>Save</button>
    </form>
    <p id="submitResult"></p>
    
    <!-- JavaScript -->
    <script src="index.js"></script>
</body>
</html>
CSS Classes
css/* Dark theme */
.dark {
    background-color: #1a1a1a;
    color: #ffffff;
}

/* Grayscale effect */
.grayscale {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

/* Theme styles */
.theme1 { /* Theme 1 styles */ }
.theme2 { /* Theme 2 styles */ }
.theme3 { /* Theme 3 styles */ }
🔧 Functions
initImageGallery()
Initializes the image gallery and adds event listeners to thumbnails.
initDarkTheme()
Creates the dark theme button and adds toggle functionality.
initGrayscaleEffect()
Adds grayscale hover effect to all images.
initKeyboardThemes()
Activates theme switching with keyboard.
initFormHandling()
Manages form input validation and submit operations.
init()
Main function that starts all features. Runs automatically when the page loads.
⌨️ Keyboard Shortcuts
KeyAction1Activate Theme 12Activate Theme 23Activate Theme 3EscReset theme
🛠️ Technologies

Vanilla JavaScript - Pure JS without frameworks
DOM API - querySelector, addEventListener, classList
Event Handling - mouseenter, mouseleave, input, submit, keydown
ES6+ - Modern JavaScript features

📝 Requirements
HTML Elements
The following IDs and classes are required for the project to work:

#main-image - Main image
.main-navigation img - Thumbnail images
.description - Container for dark mode button
input[name="full_name"] - Form input field
button[type="submit"] - Form submit button
#submitResult - Result message paragraph

🐛 Debugging
You will see these messages in the console (F12):
🚀 DOM Project starting...
✓ Image gallery initialized
✓ Dark theme button added
✓ Grayscale effect added to 8 images
✓ Keyboard theme control active (1, 2, 3, Esc keys)
✓ Form operations initialized
✅ All functions started!
If an element is not found:
⚠ Form elements not found
🤝 Contributing

Fork the project
Create a feature branch (git checkout -b feature/newFeature)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/newFeature)
Create a Pull Request
👤 Developer
##Görkem Berke Tutkun##

GitHub: @ug0rkemberke
