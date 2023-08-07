
let loadingHidden = document.querySelector('.loading-hidden');
let singleCard = document.querySelectorAll(".single-card");
let nome = document.querySelector('#nome');
let modalHidden = document.querySelector('.modal-hidden');
//let cards = document.querySelectorAll('.cards');

  

//singleCard.addEventListener( "click", function(){
    //loadingHidden.classList.remove('loading-hidden');
//});

singleCard.forEach(function(elem) {

    elem.addEventListener("click",function(){
        console.log(elem.dataset.card);
       loadingHidden.classList.remove('loading-hidden');
        nome.innerHTML =`${elem.dataset.card}`;
        setTimeout(setModal, 3000);


    })
});

function setModal(){
   modalHidden.classList.remove('modal-hidden');
   loadingHidden.classList.add('loading-hidden');

}