import React from "react";

// List of valid CSS units
const cssUnit = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true,
};

// Helper to parse length and unit
const parseLengthAndUnit = (size) => {
  if (typeof size === "number") {
    return { value: size, unit: "px" };
  }
  const valueString = (size.match(/^[0-9.]*/) || "").toString();
  const value = valueString.includes(".") ? parseFloat(valueString) : parseInt(valueString, 10);
  const unit = (size.match(/[^0-9]*$/) || "").toString();

  if (cssUnit[unit]) {
    return { value, unit };
  }

  console.warn(`Invalid CSS value: ${size}. Defaulting to ${value}px.`);
  return { value, unit: "px" };
};

// Helper to create animations
const createAnimation = (loaderName, frames, suffix) => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;
  if (typeof window === "undefined" || !window.document) return animationName;

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;
  const keyFrames = `@keyframes ${animationName} { ${frames} }`;

  if (styleSheet) styleSheet.insertRule(keyFrames, 0);
  return animationName;
};

// Define animations
const distance = [1, 3, 5];
const propagate = [
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
     50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
     75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-0"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
     50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
     75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-1"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
     75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-2"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
     75% {transform: translateX(${distance[0]}rem) scale(0.75)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-3"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
     50% {transform: translateX(${distance[1]}rem) scale(0.6)}
     75% {transform: translateX(${distance[1]}rem) scale(0.6)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-4"
  ),
  createAnimation(
    "PropagateLoader",
    `25% {transform: translateX(${distance[0]}rem) scale(0.75)}
     50% {transform: translateX(${distance[1]}rem) scale(0.6)}
     75% {transform: translateX(${distance[2]}rem) scale(0.5)}
     95% {transform: translateX(0rem) scale(1)}`,
    "propogate-5"
  ),
];

// Loader component
const Loader = ({
  loading = true,
  color = "#000000",
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  ...additionalProps
}) => {
  const { value, unit } = parseLengthAndUnit(size);

  const wrapper = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "inherit",
    ...cssOverride,
  };

  const style = (i) => ({
    position: "absolute",
    fontSize: `${value / 3}${unit}`,
    width: `${value}${unit}`,
    height: `${value}${unit}`,
    background: color,
    borderRadius: "50%",
    animation: `${propagate[i]} ${1.5 / speedMultiplier}s infinite`,
    animationFillMode: "forwards",
  });

  if (!loading) return null;

  return (
    <span style={wrapper} {...additionalProps}>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} style={style(i)} />
      ))}
    </span>
  );
};

export default Loader;
