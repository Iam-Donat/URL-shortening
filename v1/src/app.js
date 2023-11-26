console.log('connected');

//get HTML Elements
const form = document.querySelector('form');
const input = document.querySelector('.links');
const submitBtn = document.querySelector('.links__btn');
const shortenedLink = document.querySelector('.shorten__link');
const warning = document.querySelector('.warn');

// adding an Event Handler to the Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let longUrl = '';

  if (input.value === '') {
    warning.classList.remove('hidden');
    input.classList.add('warning');
  } else {
    longUrl = input.value;
  }

  shortenUrlAPI(longUrl);
});

// shorten URL API fetch
async function shortenUrlAPI(longUrl) {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);

    const data = await response.json();

    //appending data result on the HTML
    shortenedLink.innerHTML = `
    <h4>${input.value}</h4>
    <p>${data.result.short_link}</p>
    <button class="copy btn">Copy</button>
    `;

    //creating copy functionality
    const copyBtn = document.querySelector('.copy');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
      copyBtn.textContent = 'Copied!';
      copyBtn.style.cssText += 'color:#fff;background-color:#3b3054';
      input.value = '';
    });


  } catch (error) {
    console.log(error);

  }
}