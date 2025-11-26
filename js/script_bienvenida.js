document.addEventListener('DOMContentLoaded', () => {
  // --- Script de bienvenida existente ---
  const modal = document.getElementById('welcomeModal');
  const form = document.getElementById('welcomeForm');
  const nameSpan = document.querySelectorAll('.usuarioActual');
  const stored = localStorage.getItem('usuarioNombre');
  if (stored) {
    nameSpan.forEach(s => s.textContent = stored);
    modal.style.display = 'none';
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const completo = `${nombre} ${apellido}`;
    localStorage.setItem('usuarioNombre', completo);
    nameSpan.forEach(s => s.textContent = completo);
    modal.style.display = 'none';
  });

  // --- Script de música modificado para preguntar siempre ---
  const musicModal = document.getElementById('musicModal');
  const musicYes = document.getElementById('musicYes');
  const musicNo = document.getElementById('musicNo');
  const music = document.getElementById('bgMusic');

  // Mostrar modal siempre que se carga la página
  musicModal.style.display = 'flex';

  // Si el usuario acepta
  musicYes.addEventListener('click', () => {
    musicModal.style.display = 'none';
    music.play();
  });

  // Si el usuario rechaza
  musicNo.addEventListener('click', () => {
    musicModal.style.display = 'none';
    music.pause();
  });
});
