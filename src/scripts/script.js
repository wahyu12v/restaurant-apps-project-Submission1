const toggleDrawerButton = document.getElementById('toggleDrawer');
const navigationDrawer = document.getElementById('navDrawer');

toggleDrawerButton.addEventListener('click', () => {
  navigationDrawer.classList.toggle('active');
  toggleDrawerButton.querySelectorAll('div').forEach(div => {
    div.classList.toggle('open');
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navigationDrawer.classList.remove('active');
    toggleDrawerButton.querySelectorAll('div').forEach(div => {
      div.classList.remove('open');
    });
  }
});