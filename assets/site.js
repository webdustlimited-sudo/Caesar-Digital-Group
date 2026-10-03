
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu && nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }});
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));
} else { reveals.forEach(el=>el.classList.add('visible')); }
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
