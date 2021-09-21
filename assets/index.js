const judul = document.getElementById('judul');
judul.innerHTML='AntiCovid';

const introduce = document.getElementById('introduce');
introduce.innerHTML='Welcome to AntiCovid Application for information about covid';

const aboutP = document.querySelector('.about p');
aboutP.innerHTML='Anti Covid adalah sebuah platform untuk mendapatkan informasi mengenai covid-19 dan juga bebebarapa layanan yang kami sediakan';

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('By hafidh');
pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        alert('Ini adalah halaman layanan AntiCovid');
    });
});

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', functionb);

function functionb() {
    alert("This feature is not finished yet");
}
    
  
