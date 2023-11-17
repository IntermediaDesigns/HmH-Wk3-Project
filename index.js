/* 
    You can see a picture of a pet and their level of hunger.
    You are able to "feed" your pet and its hunger goes down.
    Every second the hunger of your pet increases.
    If a pet reaches a certain hunger, it dies.
    Every 30 seconds, if all pets are currently alive, a new pet is generated
    "Love" meter added and pet can die if not "loved" enough.
    Styled with CSS.
*/

/* Cursor turns to heart when clicking emoji to love the pet, from 100%, it gradually decreases, when it reaches 0 the pet dies */

// New Pet appears after 30 seconds as long as alive

// feed me button feeds the pet when clicked, hunger starts from 0, gradually increases bar and when reaches 100% then pet dies

// each pet has a random death note displayed, background color turns red, text is white, emoji background turns black

// pet will still die after # minutes 

// Create pets

const petBox = document.querySelector("#petContainer");
const pets = [
  {
    id: 1,
    name: "Winston",
    hunger: 0,
    love: "100%",
    emoji: "🦓",
  },
  {
    id: 2,
    name: "It",
    hunger: 0,
    love: "100%",
    emoji: "🤡",
  },
  {
    id: 3,
    name: "Godzilla",
    hunger: 0,
    love: "100%",
    emoji: "🦎",
  },
];



function render() {
  petBox.replaceChildren();

  for (let pet of pets) {
    const div = document.createElement("div");
    div.className = "petCard";

    const name = document.createElement("p");
    name.textContent = pet.name;
    div.appendChild(name);

    const emoji = document.createElement("p");
    emoji.textContent = pet.emoji;
    div.appendChild(emoji);

    const hunger = document.createElement("p");
    hunger.textContent = "Hunger: " + pet.hunger;
    div.appendChild(hunger);

    const love = document.createElement("p");
    love.textContent = "Love: " + pet.love;
    div.appendChild(love);

    const button = document.createElement("button");
    button.textContent = "Feed me 🍞";

    button.addEventListener("click", function(){
      pet.hunger = pet.hunger + 1;

      render();
    });
    div.appendChild(button);
    petBox.appendChild(div);
  }
}
