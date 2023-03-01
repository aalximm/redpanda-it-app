/* eslint-disable react/display-name */
import { ContactUsComponentProps } from './ContactUsComponent.props';
import styles from './ContactUsComponent.module.css';
import cn from 'classnames';
import { Button, Card, H, Input, P, Textarea } from '@/components/LowLevelComponents';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { IContactUsForm } from './ContactUsComponent.interface';
import axios from 'axios';

export const ContactUsComponent = ({ category, className, ...props }: ContactUsComponentProps): JSX.Element => {
	const { formState, register, watch, handleSubmit, reset, setValue } = useForm<IContactUsForm>({defaultValues: {name: "", email: "", message: ""}})

	const [watchName, watchEmail] = watch(['name', 'email']);

	//TODO Сделать обработку ожидания ответа от бэка(типа кружок загрузки)
	const onSubmit: SubmitHandler<IContactUsForm> = async (data) => {
		console.log(process.env.NEXT_PUBLIC_HOST);
		if (process.env.NEXT_PUBLIC_HOST) {
			//TODO Убрать хардкод uri
			const res = await axios.post(process.env.NEXT_PUBLIC_HOST + '/api/contact-us/notify', {
				name: data.name,
				email: data.email,
				message: data.message
			});
			console.log(res.status);
			if (res.status = 201) {
				reset();
				//TODO изменить сообщение об отправке, сделать валидацию формы
				setValue('message', 'Your message has been sent successfully, our team will contact you shortly');
			}
		}
	}

	return (
		<Card className={cn(className, styles.wrapper)} category={category} {...props}>
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