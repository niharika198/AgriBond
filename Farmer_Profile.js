// Farmer data (you can replace this with data from your backend)
const farmers = [
    {
        id: 1,
        name: "Rajesh Kumar",
        image: "https://picsum.photos/id/1012/300/300",
        landSize: "10 acres",
        location: "Indore,Madhya Pradesh, India",
        crops: ["Wheat", "Corn"],
        investmentNeeded: "5000/-"
    },
    {
        id: 2,
        name: "Amit Sharma",
        image: "https://picsum.photos/id/1025/300/300",
        landSize: "15 acres",
        location: "Punjab, India",
        crops: ["Rice", "Sugarcane"],
        investmentNeeded: "8000/-"
    },
    {
        id: 3,
        name: "Mukesh Singh",
        image: "https://picsum.photos/id/1027/300/300",
        landSize: "8 acres",
        location: "Binaguri, West Bengal, India",
        crops: ["Olives", "Grapes"],
        investmentNeeded: "6000/-"
    },
    {
        id: 4,
        name: "Ramya Srinivasan",
        image: "https://picsum.photos/id/1074/300/300",
        landSize: "12 acres",
        location: "Coimbatore, Tamil Nadu, India",
        crops: ["Rice", "Tea"],
        investmentNeeded: "7500/-"
    },
    {
        id: 5,
        name: "Ahmed Hassan",
        image: "https://picsum.photos/id/1062/300/300",
        landSize: "20 acres",
        location: "Punjab, India",
        crops: ["Cotton", "Wheat"],
        investmentNeeded: "9000/-"
    },
    {
        id: 6,
        name: "ramu kaka",
        image: "https://picsum.photos/id/1066/300/300",
        landSize: "14 acres",
        location: "Nashik, Maharashtra, India",
        crops: ["Corn", "Soybeans"],
        investmentNeeded: "6500/-"
    }
];

// Function to create a farmer card
function createFarmerCard(farmer) {
    return `
        <div class="profile-card">
            <div class="profile-content">
                <img src="${farmer.image}" alt="${farmer.name}" class="profile-image">
                <h2 class="profile-name">${farmer.name}</h2>
                <div class="profile-details">
                    <div class="detail-row">
                        <span class="detail-label">Land Size:</span>
                        <span class="detail-value">${farmer.landSize}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${farmer.location}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Crops:</span>
                        <span class="detail-value">${farmer.crops.join(", ")}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Investment Needed:</span>
                        <span class="detail-value">${farmer.investmentNeeded}</span>
                    </div>
                </div>
                <button class="view-profile-btn" onclick="viewProfile(${farmer.id})">View Profile</button>
            </div>
        </div>
    `;
}

// Function to render all farmers
function renderFarmers(farmersToRender) {
    const profilesContainer = document.getElementById("profiles-container");
    profilesContainer.innerHTML = "";
    
    farmersToRender.forEach(farmer => {
        profilesContainer.innerHTML += createFarmerCard(farmer);
    });
}

// Function to filter farmers
function filterFarmers() {
    const searchTerm = document.querySelector(".search-input").value.toLowerCase();
    const locationFilter = document.getElementById("location-filter").value;
    const cropFilter = document.getElementById("crop-filter").value;
    const investmentFilter = document.getElementById("investment-filter").value;
    
    let filteredFarmers = farmers.filter(farmer => {
        // Search filter
        const matchesSearch = farmer.name.toLowerCase().includes(searchTerm) || 
                            farmer.location.toLowerCase().includes(searchTerm) ||
                            farmer.crops.some(crop => crop.toLowerCase().includes(searchTerm));
        
        // Location filter
        const matchesLocation = !locationFilter || farmer.location.includes(locationFilter);
        
        // Crop filter
        const matchesCrop = !cropFilter || farmer.crops.includes(cropFilter);
        
        // Investment filter
        let matchesInvestment = true;
        if (investmentFilter === "low") {
            matchesInvestment = parseInt(farmer.investmentNeeded.replace(/\D/g, '')) < 5000;
        } else if (investmentFilter === "medium") {
            const amount = parseInt(farmer.investmentNeeded.replace(/\D/g, ''));
            matchesInvestment = amount >= 5000 && amount <= 7000;
        } else if (investmentFilter === "high") {
            matchesInvestment = parseInt(farmer.investmentNeeded.replace(/\D/g, '')) > 7000;
        }
        
        return matchesSearch && matchesLocation && matchesCrop && matchesInvestment;
    });
    
    renderFarmers(filteredFarmers);
}

// Function to view a farmer's full profile
function viewProfile(farmerId) {
    alert(`View full profile for farmer with ID: ${farmerId}`);
    // In a real application, this would navigate to the farmer's detailed profile page
    // window.location.href = `/farmer-profile.html?id=${farmerId}`;
}

// Add event listeners
document.querySelector(".search-input").addEventListener("input", filterFarmers);
document.getElementById("location-filter").addEventListener("change", filterFarmers);
document.getElementById("crop-filter").addEventListener("change", filterFarmers);
document.getElementById("investment-filter").addEventListener("change", filterFarmers);

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    renderFarmers(farmers);
});