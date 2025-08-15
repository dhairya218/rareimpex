// Utility functions for managing body scroll

let scrollPosition = 0;
let isScrollLocked = false;

export function lockScroll() {
  if (isScrollLocked) return;
  
  scrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
  document.body.classList.add('modal-open');
  isScrollLocked = true;
}

export function unlockScroll() {
  if (!isScrollLocked) return;
  
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.classList.remove('modal-open');
  
  // Restore scroll position
  setTimeout(() => {
    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  }, 10);
  
  isScrollLocked = false;
}

export function forceUnlockScroll() {
  // Force unlock scroll in case of any issues
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.classList.remove('modal-open');
  isScrollLocked = false;
}

// Add event listener for escape key to force unlock scroll
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isScrollLocked) {
      forceUnlockScroll();
    }
  });
  
  // Also handle page unload to ensure scroll is restored
  window.addEventListener('beforeunload', () => {
    if (isScrollLocked) {
      forceUnlockScroll();
    }
  });
}
