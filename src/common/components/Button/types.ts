export type ButtonStyles = "Basic" | "BasicWhite";

export interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  theme: ButtonStyles;
  big?: boolean;
  small?: boolean;
  hover?: boolean;
}
