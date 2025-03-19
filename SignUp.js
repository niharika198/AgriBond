// Get elements
const signupBtn = document.getElementById("signupBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

// Open the modal
signupBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    document.querySelector(".modal").classList.add("active");
});

// Close the modal
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.querySelector(".modal").classList.remove("active");
});

// Close modal when clicking outside it
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.classList.remove("active");
        document.querySelector(".modal").classList.remove("active");
    }
});
document.getElementById("farmerBtn").addEventListener("click", function() {
    document.getElementsById("profile-container").classList.add("hidden");  // Hide profiles
    document.getElementById("farmerForm").style.display = "flex"; // Show form
});

// Close button - Brings back profiles
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementsById("profile-container").classList.remove("hidden"); // Show profiles
    document.getElementById("farmerForm").style.display = "none";  // Hide form
});
