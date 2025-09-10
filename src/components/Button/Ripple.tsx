import { MouseEvent } from "react";

export const handleRipple = (
  e: MouseEvent<HTMLButtonElement>,
  button: HTMLButtonElement,
  disabled: boolean
) => {
  if (disabled) return;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.nativeEvent.offsetX - radius}px`;
  circle.style.top = `${e.nativeEvent.offsetY - radius}px`;
  circle.className = "ripple";

  button.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
};
