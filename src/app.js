console.log('connected');

//get HTML Elements
const form = document.querySelector('form');
const input = document.querySelector('.links');
const submitBtn = document.querySelector('.links__btn');
const shortenedLink = document.querySelector('.shorten__link');

// adding an Event Handler to the Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const longUrl = input.value;

  shortenUrlAPI(longUrl);
});

// shorten URL API fetch
async function shortenUrlAPI(longUrl) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);

    const data = await response.json();

    shortenedLink.innerHTML = `
    <h4>${input.value}</h4>
    <p>${data.result.short_link}</p>
    <button class="copy btn">Copy</button>
    `;

  } catch (error) {

  }
}