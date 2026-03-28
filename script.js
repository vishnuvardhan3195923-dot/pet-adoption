fetch('pets.json')
.then(res => res.json())
.then(data => {
const container = document.getElementById("pets-container");

data.forEach(pet => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${pet.image}">
<div class="card-content">
<h3>${pet.name}</h3>
<p>${pet.breed}</p>
<p>${pet.age}</p>
</div>
`;

card.onclick = function() {
goToDetails(card, pet); // ✅ FIXED
};

container.appendChild(card);
});
});

function goToDetails(card, pet){

localStorage.setItem("selectedPet", JSON.stringify(pet));

let clone = card.cloneNode(true);
let rect = card.getBoundingClientRect();

clone.style.position = "fixed";
clone.style.top = rect.top + "px";
clone.style.left = rect.left + "px";
clone.style.width = rect.width + "px";
clone.style.zIndex = "9999";
clone.style.transition = "all 0.5s ease";

document.body.appendChild(clone);

card.style.opacity = "0";

setTimeout(()=>{
clone.style.top = "50%";
clone.style.left = "50%";
clone.style.transform = "translate(-50%, -50%) scale(1.2)";
},10);

document.body.style.transition = "0.4s";
document.body.style.opacity = "0.7";

setTimeout(()=>{
window.location.href = "pet-details.html";
},450);

}
