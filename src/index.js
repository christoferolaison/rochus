function splitStyleProps({
  alignContent,
  alignItems,
  alignSelf,
  alignmentBaseline,
  all,
  animation,
  animationDelay,
  animationDirection,
  animationDuration,
  animationFillMode,
  animationIterationCount,
  animationName,
  animationPlayState,
  animationTimingFunction,
  backfaceVisibility,
  background,
  backgroundAttachment,
  backgroundBlendMode,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,
  backgroundRepeatX,
  backgroundRepeatY,
  backgroundSize,
  baselineShift,
  blockSize,
  border,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderCollapse,
  borderColor,
  borderImage,
  borderImageOutset,
  borderImageRepeat,
  borderImageSlice,
  borderImageSource,
  borderImageWidth,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderSpacing,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  bottom,
  boxShadow,
  boxSizing,
  breakAfter,
  breakBefore,
  breakInside,
  bufferedRendering,
  captionSide,
  caretColor,
  clear,
  clip,
  clipPath,
  clipRule,
  color,
  colorInterpolation,
  colorInterpolationFilters,
  colorRendering,
  columnCount,
  columnFill,
  columnGap,
  columnRule,
  columnRuleColor,
  columnRuleStyle,
  columnRuleWidth,
  columnSpan,
  columnWidth,
  columns,
  contain,
  content,
  counterIncrement,
  counterReset,
  cursor,
  cx,
  cy,
  d,
  direction,
  display,
  dominantBaseline,
  emptyCells,
  fill,
  fillOpacity,
  fillRule,
  filter,
  flex,
  flexBasis,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  float,
  floodColor,
  floodOpacity,
  font,
  fontDisplay,
  fontFamily,
  fontFeatureSettings,
  fontKerning,
  fontSize,
  fontStretch,
  fontStyle,
  fontVariant,
  fontVariantCaps,
  fontVariantLigatures,
  fontVariantNumeric,
  fontWeight,
  grid,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridGap,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplate,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  hyphens,
  imageRendering,
  inlineSize,
  isolation,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lightingColor,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marker,
  markerEnd,
  markerMid,
  markerStart,
  mask,
  maskType,
  maxBlockSize,
  maxHeight,
  maxInlineSize,
  maxWidth,
  maxZoom,
  minBlockSize,
  minHeight,
  minInlineSize,
  minWidth,
  minZoom,
  mixBlendMode,
  objectFit,
  objectPosition,
  offset,
  offsetDistance,
  offsetPath,
  offsetRotate,
  opacity,
  order,
  orientation,
  orphans,
  outline,
  outlineColor,
  outlineOffset,
  outlineStyle,
  outlineWidth,
  overflow,
  overflowAnchor,
  overflowWrap,
  overflowX,
  overflowY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  page,
  pageBreakAfter,
  pageBreakBefore,
  pageBreakInside,
  paintOrder,
  perspective,
  perspectiveOrigin,
  placeContent,
  placeItems,
  placeSelf,
  pointerEvents,
  position,
  quotes,
  r,
  resize,
  right,
  rx,
  ry,
  shapeImageThreshold,
  shapeMargin,
  shapeOutside,
  shapeRendering,
  size,
  speak,
  src,
  stopColor,
  stopOpacity,
  stroke,
  strokeDasharray,
  strokeDashoffset,
  strokeLinecap,
  strokeLinejoin,
  strokeMiterlimit,
  strokeOpacity,
  strokeWidth,
  tabSize,
  tableLayout,
  textAlign,
  textAlignLast,
  textAnchor,
  textCombineUpright,
  textDecoration,
  textDecorationColor,
  textDecorationLine,
  textDecorationSkip,
  textDecorationStyle,
  textIndent,
  textOrientation,
  textOverflow,
  textRendering,
  textShadow,
  textSizeAdjust,
  textTransform,
  textUnderlinePosition,
  top,
  touchAction,
  transform,
  transformOrigin,
  transformStyle,
  transition,
  transitionDelay,
  transitionDuration,
  transitionProperty,
  transitionTimingFunction,
  unicodeBidi,
  unicodeRange,
  userSelect,
  userZoom,
  vectorEffect,
  verticalAlign,
  visibility,
  webkitAppRegion,
  webkitAppearance,
  webkitBackgroundClip,
  webkitBackgroundOrigin,
  webkitBorderAfter,
  webkitBorderAfterColor,
  webkitBorderAfterStyle,
  webkitBorderAfterWidth,
  webkitBorderBefore,
  webkitBorderBeforeColor,
  webkitBorderBeforeStyle,
  webkitBorderBeforeWidth,
  webkitBorderEnd,
  webkitBorderEndColor,
  webkitBorderEndStyle,
  webkitBorderEndWidth,
  webkitBorderHorizontalSpacing,
  webkitBorderImage,
  webkitBorderStart,
  webkitBorderStartColor,
  webkitBorderStartStyle,
  webkitBorderStartWidth,
  webkitBorderVerticalSpacing,
  webkitBoxAlign,
  webkitBoxDecorationBreak,
  webkitBoxDirection,
  webkitBoxFlex,
  webkitBoxFlexGroup,
  webkitBoxLines,
  webkitBoxOrdinalGroup,
  webkitBoxOrient,
  webkitBoxPack,
  webkitBoxReflect,
  webkitColumnBreakAfter,
  webkitColumnBreakBefore,
  webkitColumnBreakInside,
  webkitFontSizeDelta,
  webkitFontSmoothing,
  webkitHighlight,
  webkitHyphenateCharacter,
  webkitLineBreak,
  webkitLineClamp,
  webkitLocale,
  webkitLogicalHeight,
  webkitLogicalWidth,
  webkitMarginAfter,
  webkitMarginAfterCollapse,
  webkitMarginBefore,
  webkitMarginBeforeCollapse,
  webkitMarginBottomCollapse,
  webkitMarginCollapse,
  webkitMarginEnd,
  webkitMarginStart,
  webkitMarginTopCollapse,
  webkitMask,
  webkitMaskBoxImage,
  webkitMaskBoxImageOutset,
  webkitMaskBoxImageRepeat,
  webkitMaskBoxImageSlice,
  webkitMaskBoxImageSource,
  webkitMaskBoxImageWidth,
  webkitMaskClip,
  webkitMaskComposite,
  webkitMaskImage,
  webkitMaskOrigin,
  webkitMaskPosition,
  webkitMaskPositionX,
  webkitMaskPositionY,
  webkitMaskRepeat,
  webkitMaskRepeatX,
  webkitMaskRepeatY,
  webkitMaskSize,
  webkitMaxLogicalHeight,
  webkitMaxLogicalWidth,
  webkitMinLogicalHeight,
  webkitMinLogicalWidth,
  webkitPaddingAfter,
  webkitPaddingBefore,
  webkitPaddingEnd,
  webkitPaddingStart,
  webkitPerspectiveOriginX,
  webkitPerspectiveOriginY,
  webkitPrintColorAdjust,
  webkitRtlOrdering,
  webkitRubyPosition,
  webkitTapHighlightColor,
  webkitTextCombine,
  webkitTextDecorationsInEffect,
  webkitTextEmphasis,
  webkitTextEmphasisColor,
  webkitTextEmphasisPosition,
  webkitTextEmphasisStyle,
  webkitTextFillColor,
  webkitTextOrientation,
  webkitTextSecurity,
  webkitTextStroke,
  webkitTextStrokeColor,
  webkitTextStrokeWidth,
  webkitTransformOriginX,
  webkitTransformOriginY,
  webkitTransformOriginZ,
  webkitUserDrag,
  webkitUserModify,
  webkitWritingMode,
  whiteSpace,
  widows,
  width,
  willChange,
  wordBreak,
  wordSpacing,
  wordWrap,
  writingMode,
  x,
  y,
  zIndex,
  zoom,
  ...props
}) {
  return {
    sx: {
      alignContent,
      alignItems,
      alignSelf,
      alignmentBaseline,
      all,
      animation,
      animationDelay,
      animationDirection,
      animationDuration,
      animationFillMode,
      animationIterationCount,
      animationName,
      animationPlayState,
      animationTimingFunction,
      backfaceVisibility,
      background,
      backgroundAttachment,
      backgroundBlendMode,
      backgroundClip,
      backgroundColor,
      backgroundImage,
      backgroundOrigin,
      backgroundPosition,
      backgroundPositionX,
      backgroundPositionY,
      backgroundRepeat,
      backgroundRepeatX,
      backgroundRepeatY,
      backgroundSize,
      baselineShift,
      blockSize,
      border,
      borderBottom,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomStyle,
      borderBottomWidth,
      borderCollapse,
      borderColor,
      borderImage,
      borderImageOutset,
      borderImageRepeat,
      borderImageSlice,
      borderImageSource,
      borderImageWidth,
      borderLeft,
      borderLeftColor,
      borderLeftStyle,
      borderLeftWidth,
      borderRadius,
      borderRight,
      borderRightColor,
      borderRightStyle,
      borderRightWidth,
      borderSpacing,
      borderStyle,
      borderTop,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderTopStyle,
      borderTopWidth,
      borderWidth,
      bottom,
      boxShadow,
      boxSizing,
      breakAfter,
      breakBefore,
      breakInside,
      bufferedRendering,
      captionSide,
      caretColor,
      clear,
      clip,
      clipPath,
      clipRule,
      color,
      colorInterpolation,
      colorInterpolationFilters,
      colorRendering,
      columnCount,
      columnFill,
      columnGap,
      columnRule,
      columnRuleColor,
      columnRuleStyle,
      columnRuleWidth,
      columnSpan,
      columnWidth,
      columns,
      contain,
      content,
      counterIncrement,
      counterReset,
      cursor,
      cx,
      cy,
      d,
      direction,
      display,
      dominantBaseline,
      emptyCells,
      fill,
      fillOpacity,
      fillRule,
      filter,
      flex,
      flexBasis,
      flexDirection,
      flexFlow,
      flexGrow,
      flexShrink,
      flexWrap,
      float,
      floodColor,
      floodOpacity,
      font,
      fontDisplay,
      fontFamily,
      fontFeatureSettings,
      fontKerning,
      fontSize,
      fontStretch,
      fontStyle,
      fontVariant,
      fontVariantCaps,
      fontVariantLigatures,
      fontVariantNumeric,
      fontWeight,
      grid,
      gridArea,
      gridAutoColumns,
      gridAutoFlow,
      gridAutoRows,
      gridColumn,
      gridColumnEnd,
      gridColumnGap,
      gridColumnStart,
      gridGap,
      gridRow,
      gridRowEnd,
      gridRowGap,
      gridRowStart,
      gridTemplate,
      gridTemplateAreas,
      gridTemplateColumns,
      gridTemplateRows,
      height,
      hyphens,
      imageRendering,
      inlineSize,
      isolation,
      justifyContent,
      justifyItems,
      justifySelf,
      left,
      letterSpacing,
      lightingColor,
      lineHeight,
      listStyle,
      listStyleImage,
      listStylePosition,
      listStyleType,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marker,
      markerEnd,
      markerMid,
      markerStart,
      mask,
      maskType,
      maxBlockSize,
      maxHeight,
      maxInlineSize,
      maxWidth,
      maxZoom,
      minBlockSize,
      minHeight,
      minInlineSize,
      minWidth,
      minZoom,
      mixBlendMode,
      objectFit,
      objectPosition,
      offset,
      offsetDistance,
      offsetPath,
      offsetRotate,
      opacity,
      order,
      orientation,
      orphans,
      outline,
      outlineColor,
      outlineOffset,
      outlineStyle,
      outlineWidth,
      overflow,
      overflowAnchor,
      overflowWrap,
      overflowX,
      overflowY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      page,
      pageBreakAfter,
      pageBreakBefore,
      pageBreakInside,
      paintOrder,
      perspective,
      perspectiveOrigin,
      placeContent,
      placeItems,
      placeSelf,
      pointerEvents,
      position,
      quotes,
      r,
      resize,
      right,
      rx,
      ry,
      shapeImageThreshold,
      shapeMargin,
      shapeOutside,
      shapeRendering,
      size,
      speak,
      src,
      stopColor,
      stopOpacity,
      stroke,
      strokeDasharray,
      strokeDashoffset,
      strokeLinecap,
      strokeLinejoin,
      strokeMiterlimit,
      strokeOpacity,
      strokeWidth,
      tabSize,
      tableLayout,
      textAlign,
      textAlignLast,
      textAnchor,
      textCombineUpright,
      textDecoration,
      textDecorationColor,
      textDecorationLine,
      textDecorationSkip,
      textDecorationStyle,
      textIndent,
      textOrientation,
      textOverflow,
      textRendering,
      textShadow,
      textSizeAdjust,
      textTransform,
      textUnderlinePosition,
      top,
      touchAction,
      transform,
      transformOrigin,
      transformStyle,
      transition,
      transitionDelay,
      transitionDuration,
      transitionProperty,
      transitionTimingFunction,
      unicodeBidi,
      unicodeRange,
      userSelect,
      userZoom,
      vectorEffect,
      verticalAlign,
      visibility,
      webkitAppRegion,
      webkitAppearance,
      webkitBackgroundClip,
      webkitBackgroundOrigin,
      webkitBorderAfter,
      webkitBorderAfterColor,
      webkitBorderAfterStyle,
      webkitBorderAfterWidth,
      webkitBorderBefore,
      webkitBorderBeforeColor,
      webkitBorderBeforeStyle,
      webkitBorderBeforeWidth,
      webkitBorderEnd,
      webkitBorderEndColor,
      webkitBorderEndStyle,
      webkitBorderEndWidth,
      webkitBorderHorizontalSpacing,
      webkitBorderImage,
      webkitBorderStart,
      webkitBorderStartColor,
      webkitBorderStartStyle,
      webkitBorderStartWidth,
      webkitBorderVerticalSpacing,
      webkitBoxAlign,
      webkitBoxDecorationBreak,
      webkitBoxDirection,
      webkitBoxFlex,
      webkitBoxFlexGroup,
      webkitBoxLines,
      webkitBoxOrdinalGroup,
      webkitBoxOrient,
      webkitBoxPack,
      webkitBoxReflect,
      webkitColumnBreakAfter,
      webkitColumnBreakBefore,
      webkitColumnBreakInside,
      webkitFontSizeDelta,
      webkitFontSmoothing,
      webkitHighlight,
      webkitHyphenateCharacter,
      webkitLineBreak,
      webkitLineClamp,
      webkitLocale,
      webkitLogicalHeight,
      webkitLogicalWidth,
      webkitMarginAfter,
      webkitMarginAfterCollapse,
      webkitMarginBefore,
      webkitMarginBeforeCollapse,
      webkitMarginBottomCollapse,
      webkitMarginCollapse,
      webkitMarginEnd,
      webkitMarginStart,
      webkitMarginTopCollapse,
      webkitMask,
      webkitMaskBoxImage,
      webkitMaskBoxImageOutset,
      webkitMaskBoxImageRepeat,
      webkitMaskBoxImageSlice,
      webkitMaskBoxImageSource,
      webkitMaskBoxImageWidth,
      webkitMaskClip,
      webkitMaskComposite,
      webkitMaskImage,
      webkitMaskOrigin,
      webkitMaskPosition,
      webkitMaskPositionX,
      webkitMaskPositionY,
      webkitMaskRepeat,
      webkitMaskRepeatX,
      webkitMaskRepeatY,
      webkitMaskSize,
      webkitMaxLogicalHeight,
      webkitMaxLogicalWidth,
      webkitMinLogicalHeight,
      webkitMinLogicalWidth,
      webkitPaddingAfter,
      webkitPaddingBefore,
      webkitPaddingEnd,
      webkitPaddingStart,
      webkitPerspectiveOriginX,
      webkitPerspectiveOriginY,
      webkitPrintColorAdjust,
      webkitRtlOrdering,
      webkitRubyPosition,
      webkitTapHighlightColor,
      webkitTextCombine,
      webkitTextDecorationsInEffect,
      webkitTextEmphasis,
      webkitTextEmphasisColor,
      webkitTextEmphasisPosition,
      webkitTextEmphasisStyle,
      webkitTextFillColor,
      webkitTextOrientation,
      webkitTextSecurity,
      webkitTextStroke,
      webkitTextStrokeColor,
      webkitTextStrokeWidth,
      webkitTransformOriginX,
      webkitTransformOriginY,
      webkitTransformOriginZ,
      webkitUserDrag,
      webkitUserModify,
      webkitWritingMode,
      whiteSpace,
      widows,
      width,
      willChange,
      wordBreak,
      wordSpacing,
      wordWrap,
      writingMode,
      x,
      y,
      zIndex,
      zoom,
    },
    props,
  }
};

export default splitStyleProps
