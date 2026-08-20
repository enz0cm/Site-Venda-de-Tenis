// pegar o elemento fazer o clone e passar para a constante
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);

// colocar a constante dentro do container logos
document.querySelector('.logos').appendChild(cloneSlide);
