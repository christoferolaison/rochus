function splitStyleProps({
  display,
  flex,
  alignItems,
  backgroundColor,
  ...props,
}) {
  return {
    sx: {
      display,
      flex,
      alignItems,
      backgroundColor,
    },
    props,
  }
};

export default splitStyleProps;
