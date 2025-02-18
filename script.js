document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const github = document.getElementById('github').value;
  const avatar = document.getElementById('avatar').files[0];
  const data = {
    fullname,
    email,
    github,
    avatar
  };

  const header = document.querySelector('header');
  const form = document.querySelector('form');
  const h1 = document.querySelector('h1');
  const subheading = document.querySelector('.subheader');
  const ticket = document.querySelector('.tickect');


  header.classList.add('hidden');
  form.classList.add('hidden');


  setTimeout(() => {
    h1.textContent = `Congrats, ${data.fullname}! Your ticket is ready.`; //Change h1 text
  subheading.textContent = `We've emailed your ticket to ${data.email} and will send updates in the run up to the event.`; //Change subheading text
    header.classList.remove('hidden');
    ticket.classList.remove('hidden');

  }, 1000);


});