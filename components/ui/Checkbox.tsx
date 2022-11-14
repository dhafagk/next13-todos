import { CheckboxProps } from "../../types/checkbox.type";

export const Checkbox = (props: CheckboxProps): JSX.Element => (
  <input
    type="checkbox"
    id={props.label}
    checked={props.isChecked}
    onChange={props.handleChange}
    className="checkbox"
  />
);
