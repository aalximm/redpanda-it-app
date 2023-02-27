import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { InputProps as IProps } from 'react-html-props';

export interface InputProps extends IProps{
	error?: FieldError;
}