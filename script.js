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

        card.onclick = () => {
            localStorage.setItem("selectedPet", JSON.stringify(pet));
            window.location.href = "pet-details.html";
        };

        container.appendChild(card);
    });
});
