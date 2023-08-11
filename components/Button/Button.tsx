import React, { PropsWithChildren, FunctionComponent } from "react";

type ButtonProps = {
  disabled: boolean;
} & PropsWithChildren;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  disabled,
}) => {
  return (
    <>
      <button
        disabled
        type="button"
        className={`bg-blue-600 hover:bg-blue-700  text-white py-2 px-4 rounded text-write bg-primary hover:bg-dark active:bg-dark active:ring-secondary focus:outline-none focus:ring focus:ring-secondary ${
          disabled ? "disabled:opacity-25" : ""
        }
   `}
      >
        {children}
      </button>
    </>
  );
};
