export const useDeviceType =() =>  {
 let isMobile;
 let isTablet;
 let isDesktop;
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia("(max-width: 834px)").matches
    isTablet = window.matchMedia('(min-width: 835px) and (max-width: 1440px)').matches
    isDesktop = window.matchMedia('(min-width: 1441px)').matches
  }

  return { isMobile, isTablet, isDesktop };
}
