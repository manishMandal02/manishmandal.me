const planeVariants = {
  initial: {
    x: -1400,
    y: -500,
    rotateX: 30,
    rotateZ: 20,
  },
  animate: {
    y: 2,
    x: 1,
    rotateX: 10,
    rotateZ: -1,
    transition: {
      delay: 1,
      duration: 2,
      type: 'spring',
      stiffness: 20,
      rotateZ: {
        duration: 2,
      },
      rotateX: {
        duration: 2,
      },
    },
  },
  whileInView: {
    y: [2, -8, 2],
    x: [1, -8, 1],
    rotateX: [10, -25, 10],
    rotateZ: [-1, 1, -1],
    transition: {
      stiffness: 150,
      repeat: Infinity,
      duration: 2.4,
      type: 'spring',
    },
  },
};

const introNameVariant = {
  initial: {
    x: -700,
    // opacity: 0,
  },
  animate: {
    x: 0,
    // opacity: 1,
    transition: {
      //   duration: 0.1,
      type: 'spring',
      stiffness: 120,
      delay: 1.6,
    },
  },
};
const introNameLineVariant = {
  initial: {
    x: -400,
  },
  animate: {
    x: 0,
    transition: {
      //   duration: 1,
      type: 'spring',
      stiffness: 100,
      // delay: 0.5,
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
      delay: 0.5,
      duration: 0.8,
      type: 'easeIn',
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
      delay: i * 0.4,
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
      delay: 6,
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
      delay: 8,
    },
  },
};
const scrollDownVariant = {
  // initial: {
  //   // y: -200,
  //   opacity: 0,
  // },
  // animate: {
  //   y: 0,
  //   opacity: 1,
  //   transition: {
  //     duration: 0.7,
  //     type: 'spring',
  //     stiffness: 130,
  //   },
  // },
  onHover: {
    y: 6,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 150,
    },
  },
};

export {
  planeVariants,
  scrollDownContainerVariant,
  scrollDownVariant,
  introNameVariant,
  introNameLineVariant,
  introTitleVariant,
  subTitleVariant,
  emailContainerVariant,
};
