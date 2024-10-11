tailwind.config = {
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5",
        charcoal: "#1A1A1A",
        orange: "#FF8C42",
        gray: "#C4C4C4",
      },
    },
  },
};

const coffeeCounter = document.getElementById("coffee-counter");

function incrementCoffeeCounter() {
  coffeeCounter.innerText = parseInt(coffeeCounter.innerText) + 1;
}
setInterval(incrementCoffeeCounter, 43200000);
