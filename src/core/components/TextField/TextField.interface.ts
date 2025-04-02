import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  type?: string;
  icon?: string;
  variant?: "outlined" | "standard" | "filled";
  required?: boolean;
  rules?: RegisterOptions;
  id?: string;
  disabled?: boolean;
}