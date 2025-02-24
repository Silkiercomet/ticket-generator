const imageInput = document.getElementById('avatar');
const imageThumbnail = document.getElementById('formImage');

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imageThumbnail.src = e.target.result;
    }

    reader.readAsDataURL(file);
  } else {
    imageThumbnail.src = "./assets/images/icon-upload.svg"; // Restablece la miniatura si no se selecciona ninguna imagen
  }
});

// form submit
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const github = document.getElementById('github').value;
  const avatar = imageInput.files[0];
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
document.querySelector('#nameUser').textContent = data.fullname;
document.querySelector('#emailUser').textContent = data.github;

console.log(avatar)

  header.classList.add('hidden');
  form.classList.add('hidden');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    const ticketImage = document.getElementById('tickectImage');
    console.log(ticketImage)
    const reader = new FileReader();
    reader.onload = (e) => {
      ticketImage.src = e.target.result;
    }
    reader.readAsDataURL(avatar);
  setTimeout(() => {
    scrollToTop();
    form.classList.add('none');
    ticket.classList.remove('none');
    h1.textContent = `Congrats, ${data.fullname}! Your ticket is ready.`; //Change h1 text
  subheading.textContent = `We've emailed your ticket to ${data.email} and will send updates in the run up to the event.`; //Change subheading text
    header.classList.remove('hidden');
    ticket.classList.remove('hidden');

  }, 1000);


});