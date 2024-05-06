export const DURATION_SHORT = 0.3;

export const NAVIGATION_ANIMATIONS = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0,
      delay: DURATION_SHORT,
    },
  },
};
