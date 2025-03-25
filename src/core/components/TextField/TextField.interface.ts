
export interface TextFileProps {
  id?: string;
  label?: string;
  type?: "text" | "password" | "email";
  variant?: "outlined" | "filled" | "standard";
  icon?: string; 
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  required?: boolean; 
}
