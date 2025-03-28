import { ChangeEvent, ClipboardEvent } from "react";

export interface OtpInputProps {
  className?:string
  id?: string
  value?:string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onPaste?: (e: ClipboardEvent) => void
} 