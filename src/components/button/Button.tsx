import React, { Component, ComponentProps } from 'react'

type TVariant = "primary" | "secondary" | "danger" | "varning" | "success";

type TButton = ComponentProps<"button"> & {
  variant: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  console.log(checkVariant(variant));
  return (
    <button {...rest} style={{ ...style, ...checkVariant(variant) }}>
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#444", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "varning") {
    return { backgroundColor: "yellow", color: "dark" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}