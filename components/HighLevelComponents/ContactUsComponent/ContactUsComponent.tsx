/* eslint-disable react/display-name */
import { ContactUsComponentProps } from './ContactUsComponent.props';
import styles from './ContactUsComponent.module.css';
import cn from 'classnames';
import { Button, Card, H, Input, P, Textarea } from '@/components/LowLevelComponents';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { IContactUsForm } from './ContactUsComponent.interface';

export const ContactUsComponent = ({ category, className, ...props }: ContactUsComponentProps): JSX.Element => {
	const { formState, register, watch, handleSubmit } = useForm<IContactUsForm>({defaultValues: {name: "", email: "", message: ""}})

	const [watchName, watchEmail] = watch(['name', 'email']);

	const onSubmit: SubmitHandler<IContactUsForm> = (data): void => {
		console.log(data.message);
	}

	return (
		<Card className={cn(className, styles.wrapper)} category={category}>
			<H tag='h1'>Contact Us</H>
			<div className={styles.content}>
				<Input className={styles.name} {...register('name')}
					placeholder='Your name' title='Name'
					isFilled={watchName != ""}
				/>
				<Input className={styles.contact} {...register('email')}
					placeholder='Your email/tg/WApp' title='Email'
					isFilled={watchEmail != ""}
				/>
				<Textarea className={styles.textarea} {...register('message')} placeholder='Write your message here'/>
				<Button className={styles.button} onClick={handleSubmit(onSubmit)}>Submit</Button>
			</div>
		</Card>
	);
}; 