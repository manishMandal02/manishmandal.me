const planeVariants = {
  initial: {
    x: -1800,
    y: -600,
    rotateX: 30,
    rotateZ: 20,
  },
  animate: {
    y: 2,
    x: 1,
    // x: [-1500, -1000, -500, -100, 1],
    // y: [-500, -100, 0, 50, 100, 2],
    rotateX: 10,
    rotateZ: 0,
    rotateY: -5,
    transition: {
      delay: 0.2,
      duration: 1,
      type: 'spring',
      ease: 'linear',
      stiffness: 20,
      rotateZ: {
        duration: 2,
      },
      rotateX: {
        duration: 2,
      },
      rotateY: {
        duration: 2,
      },
    },
  },
  whileInView: {
    y: [2, -15, 2],
    x: [1, -10, 1],
    rotateX: [10, -20, 10],
    skew: [0, -3, 0],
    rotateZ: [0, 0],
    rotateY: [-5, -5],
    transition: {
      stiffness: 140,
      repeat: Infinity,
      duration: 3,
      type: 'ease',
    },
  },
};

/*
    rotateZ: -4,

*/

const introNameVariant = {
  initial: {
    x: -700,
    // opacity: 0,
  },
  animate: {
    x: 0,
    // opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 120,
      delay: 1.2,
    },
  },
};
const introNameLineVariant = {
  initial: {
    x: -450,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      delay: 2,
    },
  },
};
const introTitleVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1,
      type: 'spring',
      stiffness: 120,
    },
  },
};

const subTitleVariant = {
  initial: {
    x: -800,
  },
  animate: (i: number) => ({
    x: 0,
    transition: {
      type: 'spring',
      duration: 1,
      delay: i * 0.3,
      stiffness: 100,
    },
  }),
};

const emailContainerVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3.8,
      duration: 0.8,
      type: 'easeIn',
    },
  },
};

const scrollDownContainerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'easeIn',
      delay: 5.5,
    },
  },
  exit: {
    opacity: 0,
    duration: 0.3,
    type: 'easeOut',
  },
};
const scrollDownVariant = {
  onHover: {
    y: 6,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 150,
    },
  },
};

const techStackContainerVariant = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 45,
      ease: 'linear',
    },
  },
};

const inViewAOSAnimations = 'fade-right';

export {
  planeVariants,
  scrollDownContainerVariant,
  scrollDownVariant,
  introNameVariant,
  introNameLineVariant,
  introTitleVariant,
  subTitleVariant,
  emailContainerVariant,
  techStackContainerVariant,
  inViewAOSAnimations,
};
