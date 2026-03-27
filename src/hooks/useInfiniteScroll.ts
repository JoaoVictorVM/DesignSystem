import { useRef, useEffect, useCallback } from "react";

interface UseInfiniteScrollOptions {
  speed: number; // px/s
}

export function useInfiniteScroll({ speed }: UseInfiniteScrollOptions) {
  const trackRef = useRef<HTMLDivElement>(null);

  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const speedFactorRef = useRef(1);
  const targetFactorRef = useRef(1);

  const animate = useCallback(
    (timestamp: number) => {
      if (!trackRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = timestamp;

      const target = targetFactorRef.current;
      const current = speedFactorRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0005) {
        const decay = target === 0 ? 0.001 : 0.006;
        speedFactorRef.current = current + diff * (1 - Math.pow(decay, dt));
      } else {
        speedFactorRef.current = target;
      }

      posRef.current += speed * speedFactorRef.current * dt;

      const halfHeight = trackRef.current.scrollHeight / 2;
      if (halfHeight > 0 && posRef.current >= halfHeight) {
        posRef.current -= halfHeight;
      }

      trackRef.current.style.transform = `translateY(-${posRef.current}px)`;

      rafRef.current = requestAnimationFrame(animate);
    },
    [speed],
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [animate]);

  const pause = useCallback(() => {
    targetFactorRef.current = 0;
  }, []);

  const resume = useCallback(() => {
    targetFactorRef.current = 1;
  }, []);

  return { trackRef, pause, resume };
}
