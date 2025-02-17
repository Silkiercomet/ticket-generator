document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => data[key] = value);
  // Save data (implementation not shown, adapt as needed)
  // ... your data saving logic here ...

  const header = document.querySelector('header');
  const form = document.querySelector('form');
  const h1 = document.querySelector('h1');
  const subheading = document.querySelector('.subheading');
  const ticket = document.querySelector('.tickect');


  header.classList.add('hidden');
  form.classList.add('hidden');

  setTimeout(() => {
    h1.textContent = '¡Gracias por tu solicitud!'; //Change h1 text
    subheading.textContent = 'Tu información ha sido recibida.'; //Change subheading text
  }, 300);
  header.classList.remove('hidden');
 



  ticket.classList.remove('hidden');

});