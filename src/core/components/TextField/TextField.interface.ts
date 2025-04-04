import { Control, FieldValues, Path } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: "text" | "password" | "email" | "number";
  icon?: string;
  variant?: "outlined" | "filled" | "standard";
  required?: boolean;
  rules?: object;
  id?: string;
  disabled?: boolean;
}