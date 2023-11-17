// Create pets

const petNameBox = document.querySelector("#petContainer");
const pets = ["Steve", "Julieta", "Kerri", "Darius", "Louis", "Mariana", "Kolby", "Kelton", "Abigail", "Daisy", "Kathrine", "Anjali", "Dezmond", "Kari", "Shyann", "Amirah", "Lesli", "Cruz", "Shelby", "Aman", "Ricky", "Citlali", "Paloma", "Maxim", "Eva", "Camryn", "Christa", "Candy", "Noel", "Kenya", "Jefferson", "Seth", "Jalen", "Kaytlyn", "Brennen", "Branson", "Nadia", "Regan", "Jeniffer", "Amy", "Faith", "Jaren", "Richard", "Michael", "Ambria", "Analise", "Colten", "Lola", "Shakira", "Kiersten", "Kiah", "Maureen", "Nehemiah", "Will", "Francisca", "Ellen", "Natalee", "Alexandra", "Parker", "Ivonne", "Eric", "Phoenix", "Jarret", "Daveon", "Andrew", "Dimitri", "Madison", "Anjelica", "Baylee", "Amaris", "Angel", "Madalyn", "Mitchel", "Mckenna", "Sonia", "Averi", "Duncan", "Kadin", "Freddie", "Eddie", "Emilio", "Deanna", "Bridget", "Karsyn", "Jade", "Janie", "Ean", "Liliana", "Aracely", "Michele", "Rosemary", "Lacy", "Dayton", "Annabella", "Julianne", "Dylan", "Tayler", "Jacob", "Keisha", "Keira"];

const emojiPack = document.querySelector("#emoji")
const emojiPets = ["🐘", "🐃", "🦇", "🐕", "🦏", "🦜", "🦃", "🐛", "🐠", "🐳", "🐴", "🐲", "🦉", "🦖", "🦊", "🐋", "🦄", "🐧", "🦤", "🐊", "🦈", "🐔", "🦭", "🐭", "🦥", "🐓", "🐜", "🐹", "🪱", "🐨", "🐱", "🦗", "🦟", "🦢", "🐕‍🦺", "🦒", "🦨", "🐌", "🦁", "🪲", "🐉", "🦔", "🦝", "🐣", "🐞", "🐼", "🐰", "🐙", "🦆", "🦧", "🐺", "🐆", "🐥", "🦣", "🐈‍", "🦎", "🐂", "🦚", "🐑", "🐅", "🐵", "🐁", "🦓", "🐐", "🕊️", "🦌", "🕷️", "🦏", "🦙", "🐀", "🦩", "🐯", "🐎", "🐇", "🐪", "🐟", "🐄", "🦡", "🐫", "🐮", "🐿️", "🦕", "🐷", "🐒", "🐍", "🐦", "🦋", "🦂", "🐗", "🐩", "🦅", "🪳", "🦫", "🦮", "🐶", "🦛", "🐖", "🦍", "🦬", "🐢",];

const petCardContainer = document.querySelector("#petCard");
const name = document.querySelector("#petName");
const meter = document.querySelector("#meterContainer");
const feedMe = document.querySelector("#hungerBox");
const hungry = document.querySelector("#hungerMeter");
const loveMe = document.querySelector("#loveBox");
const love = document.querySelector("#loveMeter");
const feedButton = document.querySelector("#feed");

// Generates random pet name
let randomIndex = Math.floor(Math.random() * pets.length);
let randomPetName = pets[randomIndex];
name.textContent = randomPetName;

// Generate random emoji
let randomEmojiIndex = Math.floor(Math.random() * emojiPets.length);
let randomPetEmoji = emojiPets[randomEmojiIndex];
emojiPack.textContent = randomPetEmoji;


  
/* Cursor turns to heart when clicking emoji to love the pet, from 100%, it gradually decreases, when it reaches 0 the pet dies */


// New Pet appears after 30 seconds as long as alive

// feed me button feeds the pet when clicked, hunger starts from 0, gradually increases bar and when reaches 100% then pet dies

// each pet has a random death note displayed, background color turns red, text is white, emoji background turns black

// pet will still die after # minutes 