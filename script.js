  function updateCurrentDate() {
    var dateElement = document.getElementById('currentDate');
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pt-BR', options);

    dateElement.innerHTML = formattedDate;
}
updateCurrentDate();

const navbarToggle = document.querySelector('.mobile-menu');
const navbarMenu = document.querySelector('.menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
});