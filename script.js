// ================= LOAD PETS =================
document.addEventListener("DOMContentLoaded", function () {

fetch("pets.json")
.then(res => res.json())
.then(data => {

const container = document.getElementById("pets-container");

// safety check
if (!container) return;

data.forEach(pet => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${pet.image}">
<div class="card-content">
<h3>${pet.name}</h3>
<p>${pet.breed}</p>
<p>${pet.age || ""}</p>
</div>
`;

// click event
card.onclick = function () {
goToDetails(card, pet);
};

container.appendChild(card);

});

})
.catch(err => {
console.error("Error loading pets:", err);
});

});


// ================= NAVIGATION + ANIMATION =================
function goToDetails(card, pet){

// store selected pet
localStorage.setItem("selectedPet", JSON.stringify(pet));

// clone card for animation
let clone = card.cloneNode(true);
let rect = card.getBoundingClientRect();

clone.style.position = "fixed";
clone.style.top = rect.top + "px";
clone.style.left = rect.left + "px";
clone.style.width = rect.width + "px";
clone.style.zIndex = "9999";
clone.style.transition = "all 0.4s ease";
clone.style.borderRadius = "18px";

document.body.appendChild(clone);

// hide original
card.style.opacity = "0";

// animate to center
setTimeout(() => {
clone.style.top = "50%";
clone.style.left = "50%";
clone.style.transform = "translate(-50%, -50%) scale(1.1)";
}, 10);

// fade page
document.body.style.transition = "0.3s";
document.body.style.opacity = "0.85";

// navigate
setTimeout(() => {
window.location.href = "pet-details.html";
}, 350);

}
