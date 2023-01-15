import { IButtonProps } from "../Button/types";

type Omitted = "theme";

export interface IFlatButton extends Omit<IButtonProps, Omitted> {
  icon?: any;
}
