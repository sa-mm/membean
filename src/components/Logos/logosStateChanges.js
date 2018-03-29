export const imagesStateChange = (prevState, props) => {
  const { images } = props;
  let { imagesCount } = prevState;
  const newImages = images.map(({ svg }) => {
    imagesCount++;
    const hex =
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8);
    return { svg, hex, id: imagesCount };
  });

  return {
    images: newImages,
    imagesCount
  };
};

export const clickStateChange = id => prevState => {
  const { toggled } = prevState;
  if (toggled.id === id) {
    return {
      toggled: {
        id,
        displayHex: !prevState.toggled.displayHex
      }
    };
  } else {
    return {
      toggled: {
        id,
        displayHex: true
      }
    };
  }
};
