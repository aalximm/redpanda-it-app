/* eslint-disable react/display-name */
import { ContactUsComponentProps } from './ContactUsComponent.props';
import styles from './ContactUsComponent.module.css';
import cn from 'classnames';
import { Button, Card, H, Input, P, Textarea } from '@/components/LowLevelComponents';
import { useForm, useWatch } from 'react-hook-form';
import { IContactUsForm } from './ContactUsComponent.interface';

export const ContactUsComponent = ({ className, ...props }: ContactUsComponentProps): JSX.Element => {
	const { formState, register, watch } = useForm<IContactUsForm>({})

	const [watchName, watchEmail, watchMessage] = watch(['name', 'email', 'message']);

	return (
		<Card className={cn(className, styles.wrapper)}>
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
				<Button className={styles.button}>Submit</Button>
			</div>
		</Card>
	);
}; 