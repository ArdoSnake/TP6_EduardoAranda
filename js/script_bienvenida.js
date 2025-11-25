
document.addEventListener('DOMContentLoaded',()=>{
  const modal=document.getElementById('welcomeModal');
  const form=document.getElementById('welcomeForm');
  const nameSpan=document.querySelectorAll('.usuarioActual');
  const stored=localStorage.getItem('usuarioNombre');
  if(stored){nameSpan.forEach(s=>s.textContent=stored);modal.style.display='none';}
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const nombre=document.getElementById('nombre').value.trim();
    const apellido=document.getElementById('apellido').value.trim();
    const completo=`${nombre} ${apellido}`;
    localStorage.setItem('usuarioNombre',completo);
    nameSpan.forEach(s=>s.textContent=completo);
    modal.style.display='none';
  });
});
