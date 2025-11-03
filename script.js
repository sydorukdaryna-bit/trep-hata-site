/* Simple mobile menu toggle */
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navLinks');
  if(btn){
    btn.addEventListener('click', ()=> {
      nav.classList.toggle('open');
    })
  }
});
