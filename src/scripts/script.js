// const toggleDrawerButton = document.getElementById('toggleDrawer');
// const navigationDrawer = document.getElementById('navDrawer');

// toggleDrawerButton.addEventListener('click', () => {
//   navigationDrawer.classList.toggle('active');
//   toggleDrawerButton.querySelectorAll('div').forEach(div => {
//     div.classList.toggle('open');
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
  fetch("./data/DATA.json") 
    .then(response => response.json())
    .then(data => {
      const restaurantsList = document.getElementById("restaurantsList");
      data.restaurants.forEach(restaurant => {
        const restaurantCard = `
        
          <div class="restaurant-card">
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
            <h2>${restaurant.name}</h2>
            <p><strong>Kota:</strong> ${restaurant.city}</p>
            <p><strong>Rating:</strong> ${restaurant.rating}</p>
            <p>${restaurant.description}</p>
          </div>
        `;
        restaurantsList.innerHTML += restaurantCard;
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});
