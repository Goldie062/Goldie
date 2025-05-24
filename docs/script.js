
// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 導航欄滾動效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});
