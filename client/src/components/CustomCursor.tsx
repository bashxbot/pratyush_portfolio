import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(10);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clickRipples, setClickRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const magnetic = target.closest(".magnetic") as HTMLElement;

      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 150) {
          const strength = (150 - distance) / 150;
          const moveX = (distanceX / distance) * strength * 8;
          const moveY = (distanceY / distance) * strength * 8;
          magnetic.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          magnetic.style.transform = "";
        }
      }

      const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
      setCursorSize(isClickable ? 30 : 10);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      const id = Date.now();
      setClickRipples(prev => [...prev, { id, x: mousePosition.x, y: mousePosition.y }]);
      setTimeout(() => {
        setClickRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 800);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const id = Date.now();
      setClickRipples(prev => [...prev, { id, x: touch.clientX, y: touch.clientY }]);
      setTimeout(() => {
        setClickRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 800);
    };

    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [mousePosition, isMobile]);

  if (isMobile) {
    return (
      <>
        {clickRipples.map(ripple => (
          <div
            key={ripple.id}
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="neon-ripple" />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: cursorSize,
          height: cursorSize,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-80 shadow-glow-lg" />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: cursorSize * 3,
          height: cursorSize * 3,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-white opacity-30" />
      </div>
      {clickRipples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="neon-ripple" />
        </div>
      ))}
    </>
  );
}