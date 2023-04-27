const  teamMembers = [
    {
        "id" : 1,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Katie Mowat",
        "image" : "/images/profile_picture/Katie_Mowat.JPG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 3,
        "name" : "Cheetown Liew",
        "image" : "/images/profile_picture/Donesky Picture.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 4,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 5,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 6,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
    {
        "id" : 2,
        "name" : "Dr.Pila",
        "image" : "/images/profile_picture/sp.PNG",
        "areaOfExpertise" : "bio",
        "fact" : "kite",
        "story" : "placeholder",
    },
];
document.addEventListener("DOMContentLoaded", function(){
    const modal = document.getElementById("modal") 
})


function renderTeamMembers() {
    const container = document.querySelector(".container");
    const row1 = document.createElement("div");
    row1.classList.add("row");
  
    teamMembers.forEach((teamMember, index) => {
      const col = document.createElement("div");
      col.classList.add("col", "s6", "m4", "l3");
  
      const card = document.createElement("div");
      card.classList.add("card");
      card.addEventListener("click", () => openModal(index + 1));
  
      const cardImage = document.createElement("div");
      cardImage.classList.add("card-image", "waves-effect", "waves-block", "waves-light");
  
      const image = document.createElement("img");
      image.src = teamMember.image;
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      const cardTitle = document.createElement("span");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = teamMember.name;

      const areaOfExpertise = document.createElement("p");
    areaOfExpertise.textContent = teamMember.areaOfExpertise;

    cardImage.appendChild(image);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(areaOfExpertise);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    col.appendChild(card);
    row1.appendChild(col);
  });

  container.appendChild(row1);

  function openModal(id) {
    // Create a new modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Create a new modal content element
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image-modal", "waves-effect", "waves-block", "waves-light");
    const image = document.createElement("img");
    image.src = teamMembers[id-1].image;
    // Create a new modal title element
    const modalName = document.createElement("h4");
    modalName.textContent = teamMembers[id-1].name;

    // Create a new modal description element
    const modal_fact = document.createElement("p");
    modal_fact.textContent = teamMembers[id-1].fact;

    // Append the title and description elements to the modal content element
    cardImage.appendChild(image)
    modalContent.appendChild(cardImage)
    modalContent.appendChild(modalName);
    modalContent.appendChild(modal_fact);

    // Append the modal content element to the modal element
    modal.appendChild(modalContent);

    // Add the modal to the page
    document.body.appendChild(modal);

    // Open the modal
    const modalInstance = M.Modal.init(modal);
    modalInstance.open();
  }
}

renderTeamMembers()