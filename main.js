const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
    let value = navbarLinks.classList.contains('navbar__collapse')
    if(value){
navbarLinks.classList.remove('navbar__collapse')
    }else{
        navbarLinks.classList.add('navbar__collapse');
    }
})
function myFunction(){
    alert('service is selected');
}
