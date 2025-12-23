import * as React from "react"

const MOBILE_BREAKPOINT = 768

// Cache for initial value to avoid forced reflow on first render
let cachedIsMobile: boolean | null = null;

const getInitialMobileState = (): boolean => {
  if (typeof window === 'undefined') return false;
  if (cachedIsMobile !== null) return cachedIsMobile;
  
  // Use matchMedia which doesn't trigger reflow
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  cachedIsMobile = mql.matches;
  return cachedIsMobile;
};

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => getInitialMobileState())

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = (e: MediaQueryListEvent) => {
      cachedIsMobile = e.matches;
      setIsMobile(e.matches);
    }
    
    // Update immediately using matchMedia (no reflow)
    if (mql.matches !== isMobile) {
      cachedIsMobile = mql.matches;
      setIsMobile(mql.matches);
    }
    
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return isMobile
}
