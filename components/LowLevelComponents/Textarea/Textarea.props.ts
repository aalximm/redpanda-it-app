import { FieldError } from 'react-hook-form';
import { TextAreaProps } from 'react-html-props';

export interface TextareaProps extends TextAreaProps{
	error?: FieldError
}