fetch('./pets.json')
.then(response => response.json())
.then(data => {
    let container = document.getElementById("pets-container");

    data.forEach(pet => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${pet.image}" width="100%">
            <h3>${pet.name}</h3>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age}</p>
        `;

        container.appendChild(card);
    });
})
.catch(error => console.error("Error loading JSON:", error));
