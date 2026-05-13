function goTo(screenId) {
  // Esconde todas as telas
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  // Mostra a tela desejada
  document.getElementById(screenId).classList.add('active');
  // Rola para o topo
  window.scrollTo(0, 0);
}

function confirmOcc(btn) {
  // Lógica simples de contador que você já tinha
  let count = parseInt(btn.textContent.replace('✓ ', '')) || 0;
  count++;
  btn.textContent = '✓ ' + count;
  btn.style.color = '#2E8B57';
  btn.style.background = '#E8F5EE';
  showToast('Ocorrência confirmada! +3 pts');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function toggleAccessible() {
  document.body.classList.toggle('accessible');
}

function toggleContrast() {
  const currentFilter = document.body.style.filter;
  document.body.style.filter = currentFilter ? '' : 'contrast(1.25)';
}
