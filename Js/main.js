// coloque este bloco no final do <body> OU carregue com <script defer src="...">
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.project-ab');
  if (!section) {
    console.warn('[AB Lightbox] .project-ab não encontrada.');
    return;
  }

  const lb = section.querySelector('#ab-lightbox');
  const lbImg = section.querySelector('#ab-img');
  const lbCaption = section.querySelector('#ab-caption'); // importante: id
  const lbClose = section.querySelector('.ab-close');

  // Validação básica
  if (!lb || !lbImg || !lbClose) {
    console.warn('[AB Lightbox] Elementos do lightbox não encontrados. Confirme o HTML dentro de .project-ab:', {
      lightbox: !!lb, img: !!lbImg, close: !!lbClose, caption: !!lbCaption
    });
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

  // DELEGAÇÃO: clique em qualquer img dentro da grade
  section.addEventListener('click', (e) => {
    const img = e.target.closest('.project-grid .project-item img');
    if (!img) return;
    e.preventDefault();
    openLB(img.currentSrc || img.src, img.alt);
  });

  // Fechar pelo X
  lbClose.addEventListener('click', (e) => { e.preventDefault(); closeLB(); });

  // Fechar clicando no backdrop (fora da imagem)
  lb.addEventListener('click', (e) => {
    // se clicou exatamente no backdrop (não na imagem nem no botão)
    if (e.target === lb) closeLB();
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLB();
  });

  console.log('[AB Lightbox] pronto ✅');
});