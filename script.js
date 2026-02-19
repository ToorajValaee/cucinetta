// Smooth scroll for in-page links
document.addEventListener('click', function(e){
  const el = e.target.closest('a');
  if(!el) return;
  const href = el.getAttribute('href');
  if(href && href.startsWith('#')){
    e.preventDefault();
    const target = document.querySelector(href);
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }
});

// Optional: close mobile actions when navigating
document.querySelectorAll('.action-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // default anchors handle tel: and map links; nothing else required
  });
});
