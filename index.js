const petQuotes = document.querySelector('#deathQuotes');
const quotes = [
  "In the end, it's not the years in your life that count, but the life in your years.",
  "Don't cry because it's over, smile because it happened.",
  'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
  'The song is ended, but the melody lingers on.',
  'What we have once enjoyed, we can never lose. All that we love deeply becomes a part of us.',
  'To live in hearts we leave behind is not to die.',
  "The goal isn't to live forever, but to create something that will.",
  'As a well-spent day brings happy sleep, so a life well used brings happy death.',
  'Life is a candle that flickers in the wind, but the glow it leaves behind illuminates our memories.',
  'In the symphony of existence, their melody will resonate in our hearts long after the final note.',
  'The book of their life may be closed, but its pages will forever echo with the laughter and love they shared.',
  'As the stars silently watch over us, so too does the memory of a life that once graced our world.',
  'In the garden of memories, they planted seeds of joy that continue to bloom in our hearts.',
  "They danced through life's storms, leaving footprints of courage and grace in the sands of time.",
  'Though the curtain has fallen on their earthly performance, the encore of their spirit echoes in our souls.',
  'In the vast tapestry of existence, their thread may have been cut, but the beauty of their weaving remains.',
  'As the sun sets on this chapter, their legacy rises like the dawn, casting a perpetual light on our lives.',
  'Like a gentle breeze, their kindness touched all who crossed their path, leaving an indelible imprint.',
  'The journey of their life may be complete, but the footprints they left behind guide us through the sands of grief.',
  'In the mosaic of memories, each shard tells a story of a life well-lived and a spirit well-loved.',
  'They were a beacon of warmth in the cold sea of existence, and though the lighthouse is dim, its glow remains.',
  'In the theater of life, they played many roles, and each performance was a masterpiece etched in time.',
  'As the river of time flows, their essence becomes a waterfall of memories cascading through our hearts.',
  'The constellation of their life may be distant, but its brilliance continues to shine in the vastness of our memories.',
  'Their life was a masterpiece painted on the canvas of time, and the gallery of our hearts displays it with pride.',
  'In the book of remembrance, their chapter is not closed but rather bookmarked in the annals of our love.',
  'The echo of their laughter is a timeless melody that reverberates through the corridors of our grief.',
  'Like a rare gem, their presence illuminated our lives, and though they are gone, the sparkle remains.',
  'The script of their life was written in the ink of love, and its pages turn in the winds of our memories.',
  'In the garden of goodbye, we plant flowers of gratitude for the beauty their life brought into our world.',
  'They were a shooting star in the night sky of our existence, leaving a trail of wishes in their wake.',
  'The pages of their life may have ended, but the story they authored lives on in the hearts of those who knew them.',
  'As the leaves fall in autumn, so too does the curtain of life close, but the beauty lingers in the golden memories.',
  'In the vast ocean of time, their ripples of kindness continue to lap against the shores of our hearts.',
  'The melody of their life may have reached its final note, but the song lives on in the hearts of those who listened.',
  'They were a compass in the wilderness of life, and though they are gone, their guidance remains within us.',
  'As the butterfly emerges from the cocoon, so too does their spirit ascend to new heights beyond our sight.',
  'Their life was a journey, and though the road has ended, the milestones of their impact remain.',
  'In the gallery of memories, their portrait hangs, a masterpiece painted with the brushes of love and laughter.',
  'The tapestry of their life may be woven in threads of sorrow, but its richness is a testament to a life well-lived.',
  'They were a lighthouse in the storm, and though the beacon is dim, its light still guides us through the darkness.',
  'In the garden of time, they were a rare bloom, and though the petals have fallen, their fragrance lingers.',
  'As the phoenix rises from the ashes, so too does the memory of their indomitable spirit soar in our hearts.',
  'Their life was a poem written in the ink of experience, and each stanza is a verse of the story they shared with us.',
  'In the cosmic dance of existence, they waltzed through life, leaving behind a rhythm that resonates within us.',
  'The constellation of their life may be dimmed, but its constellation still maps the sky of our memories.',
  'Like a comet streaking across the heavens, their life was a brilliant display that leaves a trail of awe in its wake.',
  'In the book of our hearts, their chapter is not the end but rather a timeless narrative we revisit with love.',
  'They were a sunrise in the morning of our lives, and though the night has come, the warmth of their light remains.',
  'As the final curtain falls, their encore is the legacy of love they leave behind, a standing ovation in our hearts.',
];

const petNameBox = document.querySelector("#petContainer");
const pets = ["Steve", "Julieta", "Kerri", "Darius", "Louis", "Mariana", "Kolby", "Kelton", "Abigail", "Daisy", "Kathrine", "Anjali", "Dezmond", "Kari", "Shyann", "Amirah", "Lesli", "Cruz", "Shelby", "Aman", "Ricky", "Citlali", "Paloma", "Maxim", "Eva", "Camryn", "Christa", "Candy", "Noel", "Kenya", "Jefferson", "Seth", "Jalen", "Kaytlyn", "Brennen", "Branson", "Nadia", "Regan", "Jeniffer", "Amy", "Faith", "Jaren", "Richard", "Michael", "Ambria", "Analise", "Colten", "Lola", "Shakira", "Kiersten", "Kiah", "Maureen", "Nehemiah", "Will", "Francisca", "Ellen", "Natalee", "Alexandra", "Parker", "Ivonne", "Eric", "Phoenix", "Jarret", "Daveon", "Andrew", "Dimitri", "Madison", "Anjelica", "Baylee", "Amaris", "Angel", "Madalyn", "Mitchel", "Mckenna", "Sonia", "Averi", "Duncan", "Kadin", "Freddie", "Eddie", "Emilio", "Deanna", "Bridget", "Karsyn", "Jade", "Janie", "Ean", "Liliana", "Aracely", "Michele", "Rosemary", "Lacy", "Dayton", "Annabella", "Julianne", "Dylan", "Tayler", "Jacob", "Keisha", "Keira"];

const emojiPack = document.querySelector("#emoji")
const emojiPets = ["🐘", "🐃", "🦇", "🐕", "🦏", "🦜", "🦃", "🐛", "🐠", "🐳", "🐴", "🐲", "🦉", "🦖", "🦊", "🐋", "🦄", "🐧", "🦤", "🐊", "🦈", "🐔", "🦭", "🐭", "🦥", "🐓", "🐜", "🐹", "🪱", "🐨", "🐱", "🦗", "🦟", "🦢", "🐕‍🦺", "🦒", "🦨", "🐌", "🦁", "🪲", "🐉", "🦔", "🦝", "🐣", "🐞", "🐼", "🐰", "🐙", "🦆", "🦧", "🐺", "🐆", "🐥", "🦣", "🐈‍", "🦎", "🐂", "🦚", "🐑", "🐅", "🐵", "🐁", "🦓", "🐐", "🕊️", "🦌", "🕷️", "🦏", "🦙", "🐀", "🦩", "🐯", "🐎", "🐇", "🐪", "🐟", "🐄", "🦡", "🐫", "🐮", "🐿️", "🦕", "🐷", "🐒", "🐍", "🐦", "🦋", "🦂", "🐗", "🐩", "🦅", "🪳", "🦫", "🦮", "🐶", "🦛", "🐖", "🦍", "🦬", "🐢",];

const petCardContainer = document.querySelector('#petCard');
const name = document.querySelector('#petName');
const meter = document.querySelector('#meterContainer');
const feedMe = document.querySelector('#hungerBox');

const loveMe = document.querySelector('#loveBox');
const love = document.querySelector('#loveMeter');
const feedButton = document.querySelector('#feed');
const petDead = document.querySelector(".petDied");
const emojiDied = document.querySelector(".deadEmoji");

// Generates random pet name
let randomIndex = Math.floor(Math.random() * pets.length);
let randomPetName = pets[randomIndex];
name.textContent = randomPetName;

// Generate random emoji
let randomEmojiIndex = Math.floor(Math.random() * emojiPets.length);
let randomPetEmoji = emojiPets[randomEmojiIndex];
emojiPack.textContent = randomPetEmoji;

// Increase hunger gradually
const hungry = document.querySelector('#hungerMeter');

hungerMeter.max = 100;
hungerMeter.value = 0;

/*let hungerIncrease = setInterval(function () {
       let currentHunger = Number(hungry.value);
       if (currentHunger < 100) {
         hungry.value = currentHunger + 1;
       } else {
         clearInterval(hungerIncrease);
       }
     }, 1000); */
// Function to update the value
function updateMeterValue() {
       if(hungerMeter.value < hungerMeter.max) {
           hungerMeter.value += 1;
       } else {
           clearInterval(interval);
       }
   }
   
   // Call the function to update the value every second
   let interval = setInterval(updateMeterValue, 1000);

     
     // Decrease love meter gradually
     let loveDecrease = setInterval(function () {
       let currentLove = Number(love.value);
       if (currentLove > 0) {
         love.value = currentLove - 1;
       } else {
         clearInterval(loveDecrease);
         // Pet dies when love meter reaches 0%
         petDies();
       }
     }, 1000);
     
     // Pet dies function
     function petDies() {
       // Display a random quote
       petQuotes.textContent = getRandomQuote();
       
       // Change the petCard to show the petDied div
       petCardContainer.classList.add("petDied");
     }
     
     // Pet dies
     function getRandomQuote() {
       let randomIndex = Math.floor(Math.random() * quotes.length);
       return quotes[randomIndex];
     }

/* Cursor turns to heart when clicking emoji to love the pet, from 100%, it gradually decreases, when it reaches 0 the pet dies */

// New Pet appears after 30 seconds as long as alive

// feed me button feeds the pet when clicked, hunger starts from 0, gradually increases bar and when reaches 100% then pet dies

// each pet has a random death note displayed, background color turns red, text is white, emoji background turns black

// pet will still die after # minutes
