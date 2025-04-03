const imageFilenames = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

const bannerImages = document.getElementById("banner-images");

// Loop through image filenames to create and append images
imageFilenames.forEach(filename => {
    const img = document.createElement("img");
    img.classList.add("banner-image");
    img.src = `images/${filename}`;

    // Create an image element to resize it before appending
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const imgElement = new Image();
    imgElement.src = `images/${filename}`;
    imgElement.onload = () => {
        // Resize the image to fit within the desired width and height (500x500)
        const maxWidth = 500;  // Set max width for each image in the grid
        const maxHeight = 500; // Set max height for each image in the grid
        let width = imgElement.width;
        let height = imgElement.height;

        if (width > maxWidth || height > maxHeight) {
            const scale = Math.min(maxWidth / width, maxHeight / height);
            width *= scale;
            height *= scale;
        }

        // Set the canvas size
        canvas.width = width;
        canvas.height = height;

        // Draw the resized image on the canvas
        context.drawImage(imgElement, 0, 0, width, height);

        // Set the resized image as the source for the image element
        img.src = canvas.toDataURL("image/jpeg");
    };

    // Append the image to the banner container
    bannerImages.appendChild(img);
});

// Banner slide functionality
let currentIndex = 0;
const banners = document.querySelectorAll('.banner-image');
const nextSlideBtn = document.querySelector('.next-slide-btn');
const prevSlideBtn = document.querySelector('.prev-slide-btn');

function showNextBanner() {
    // Remove 'active' class from the current banner
    banners[currentIndex].classList.remove('active');

    // Move to the next banner
    currentIndex = (currentIndex + 1) % banners.length;

    // Add 'active' class to the next banner
    banners[currentIndex].classList.add('active');
}

function showPreviousBanner() {
    // Remove 'active' class from the current banner
    banners[currentIndex].classList.remove('active');

    // Move to the previous banner (wrap around using modulus)
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;

    // Add 'active' class to the previous banner
    banners[currentIndex].classList.add('active');
}

// Set the initial banner to be visible
banners[currentIndex].classList.add('active');

// Event listener for the next slide button
nextSlideBtn.addEventListener('click', showNextBanner);

// Event listener for the previous slide button
prevSlideBtn.addEventListener('click', showPreviousBanner);

// Automatically change the banner every 7 seconds (7000ms)
setInterval(showNextBanner, 7000);