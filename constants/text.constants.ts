export const about = 'Pandas International Team is a software development company that sells its services to clients all over the world. We specialize in custom software development, and have experience working with large Russian banks.';

export const services: Service[] = [
	{
		name:'Custom Development',
		description: 'We offer custom software development services, tailored to meet the specific needs of your business.'
	},
	{
		name: 'Mobile App Development',
		description: 'We can help you create custom mobile apps for iOS and Android, with a focus on user experience and performance.'
	},
	{
		name: 'Web Development',
		description: 'We offer full-stack web development services, from design to deployment, to help you build your online presence.'
	},
	{
		name: 'Cloud Computing',
		description: 'We can help you take advantage of the benefits of cloud computing, with expert advice and implementation services.'
	}
];

export interface Service {
	name: string;
	description: string;
}

export const clients = 'We have worked with a number of large Russian banks, as well as many other clients from all over the world. Our goal is to provide high-quality software development services to all of our clients, no matter their size or industry.';
