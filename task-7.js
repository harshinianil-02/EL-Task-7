const userList = document.getElementById("userList");
const errorMessage = document.getElementById("errorMessage");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUserData() {
  userList.innerHTML = ""; 
  errorMessage.textContent = ""; 

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";

      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
      `;

      userList.appendChild(userCard);
    });

  } catch (error) {
    errorMessage.textContent = `Error fetching data: ${error.message}`;
  }
}

reloadBtn.addEventListener("click", fetchUserData);

fetchUserData();