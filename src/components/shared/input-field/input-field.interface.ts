import { ChangeEvent } from 'react';
import { InputFieldTypes } from './input-field.enum';

export interface InputFieldProps {
  type: InputFieldTypes;
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: string | null;
  className?: string;
  disabled?: boolean;
  isRequired?: boolean;
  onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
