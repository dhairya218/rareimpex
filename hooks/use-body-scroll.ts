import { useEffect, useRef } from 'react';

export function useBodyScroll(isOpen: boolean) {
  const scrollPosition = useRef(0);
  const originalStyles = useRef<{
    overflow: string;
    position: string;
    top: string;
    width: string;
    touchAction: string;
  }>({
    overflow: '',
    position: '',
    top: '',
    width: '',
    touchAction: ''
  });

  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      scrollPosition.current = window.scrollY;
      
      // Store original styles to restore them later
      originalStyles.current = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        touchAction: document.body.style.touchAction
      };
      
      // Disable body scroll using multiple approaches for better compatibility
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
      
      // Add a class to body for additional CSS control if needed
      document.body.classList.add('modal-open');
    } else {
      // Re-enable body scroll by restoring original styles
      document.body.style.overflow = originalStyles.current.overflow;
      document.body.style.position = originalStyles.current.position;
      document.body.style.top = originalStyles.current.top;
      document.body.style.width = originalStyles.current.width;
      document.body.style.touchAction = originalStyles.current.touchAction;
      
      // Remove the modal class
      document.body.classList.remove('modal-open');
      
      // Restore scroll position with a small delay to ensure styles are applied
      setTimeout(() => {
        if (scrollPosition.current > 0) {
          window.scrollTo(0, scrollPosition.current);
        }
      }, 10);
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      if (!isOpen) {
        // Restore all original styles
        document.body.style.overflow = originalStyles.current.overflow;
        document.body.style.position = originalStyles.current.position;
        document.body.style.top = originalStyles.current.top;
        document.body.style.width = originalStyles.current.width;
        document.body.style.touchAction = originalStyles.current.touchAction;
        
        // Remove modal class
        document.body.classList.remove('modal-open');
        
        // Final fallback to ensure scroll works
        setTimeout(() => {
          if (scrollPosition.current > 0) {
            window.scrollTo(0, scrollPosition.current);
          }
        }, 20);
      }
    };
  }, [isOpen]);
}
