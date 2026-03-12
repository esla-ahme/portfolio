import { useEffect, useRef } from "react";
import type LocomotiveScroll from "locomotive-scroll";

/**
 * Initializes Locomotive Scroll on mount and destroys it on unmount.
 * Uses window scroll (the default for Locomotive Scroll v5 / Lenis).
 *
 * @returns A ref holding the LocomotiveScroll instance, available after mount.
 */
export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    let instance: LocomotiveScroll;

    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      instance = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          smoothWheel: true,
        },
      });
      scrollRef.current = instance;
    });

    return () => {
      instance?.destroy();
      scrollRef.current = null;
    };
  }, []);

  return scrollRef;
}
