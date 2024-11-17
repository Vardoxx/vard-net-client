export type InputType = "email" | "password" | "text";

export interface CustomInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputType;
  placeholder: string;
  value: string;
  dirty: string;
}
