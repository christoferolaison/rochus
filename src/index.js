function splitStyleProps({
  display,
  flex,
  alignItems,
  backgroundColor,
  color,
  ...props,
}) {
  return {
    sx: {
      display,
      flex,
      alignItems,
      backgroundColor,
      color,
    },
    props,
  }
};

export default splitStyleProps;
