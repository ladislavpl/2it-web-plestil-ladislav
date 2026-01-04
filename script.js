// AOS Initialization
AOS.init();

// Changing Verstappen portrait on click
const img = document.getElementById("verstappen-portrait");

img.addEventListener("click", () => {
    if (img.src.includes("verstappen1.webp")) {
        img.src = "./img/verstappen2.webp";
    } else {
        img.src = "./img/verstappen1.webp";
    }
});

console.log("Simply Lovely")