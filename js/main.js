// Obtenemos todas las tarjetas
const card1 = document.querySelectorAll(".cardfondo1");
const card2 = document.querySelectorAll(".cardfondo2");

// Obtenemos las tablas
const table1 = document.querySelector(".table1");
const table2 = document.querySelector(".table2");

// Recorremos las tarjetas para añadir un evento click a cada una
card1.forEach((card) => {
  card.addEventListener("click", () => {
     {
      // Cambiamos la clase de la tarjeta seleccionada
      card.classList.remove("cardfondo1");
      card.classList.add("selected-card");
      card2.forEach((card) => {
        card.classList.remove("cardfondo2");
        card.classList.add("cardfondo1");
      });

      // Ocultamos la tabla actual
      table1.classList.remove("show");
      table1.classList.add("hide");

      // Mostramos la segunda tabla
      table2.classList.remove("hide");
      table2.classList.add("show");
    } 
  });
});

// Recorremos las tarjetas para añadir un evento click a cada una
card2.forEach((card) => {
  card.addEventListener("click", () => {
    {
      // Cambiamos la clase de la tarjeta seleccionada
      card.classList.remove("cardfondo1");
      card.classList.add("cardfondo2");
      card1.forEach((card) => {
        card.classList.remove("cardfondo2");
        card.classList.add("cardfondo1");
      });

      // Ocultamos la tabla actual
      table1.classList.remove("hide");
      table1.classList.add("show");

      // Mostramos la primera tabla
      table2.classList.add("hide");
      table2.classList.remove("show");
     
    } 
  });
});
