document.addEventListener('DOMContentLoaded', () => {
  // Seleciona itens da galeria (seu HTML atual)
  const thumbs = document.querySelectorAll('.project-grid .project-item img');
  if (!thumbs.length) {
    console.warn('[AB Lightbox] Nenhuma imagem encontrada em .project-grid .project-item img');
  }

  // Seleciona elementos do lightbox
  const lb = document.getElementById('ab-lightbox');
  const lbImg = document.getElementById('ab-img');
  const lbCaption = document.getElementById('ab-caption');
  const lbClose = lb ? lb.querySelector('.ab-close') : null;

  if (!lb || !lbImg || !lbClose) {
    console.error('[AB Lightbox] Estrutura do lightbox ausente. Confira o HTML do #ab-lightbox.');
    return;
  }

  function openLB(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    if (lbCaption) lbCaption.textContent = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLB() {
    lb.classList.remove('is-open');
    lbImg.src = '';
    if (lbCaption) lbCaption.textContent = '';
    document.body.style.overflow = '';
  }

  // Clique nos thumbs
  thumbs.forEach((img) => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      // currentSrc resolve <img srcset> se houver
      openLB(img.currentSrc || img.src, img.alt);
    });
  });

  // Fechar: X, backdrop, ESC
  lbClose.addEventListener('click', (e) => { e.preventDefault(); closeLB(); });
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });

  console.log('[AB Lightbox] pronto ✅');
});