
import { ChangeEvent } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  className?: string;
  name: Path<T>;
  label?: string;
  control: Control<T>;
  type?: string;
  icon?: string;
  variant?: "standard" | "outlined" | "filled";
  required?: boolean;
  rules?: object;
  id?: string;
  message?: string;
  maxLength?: number;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void
}