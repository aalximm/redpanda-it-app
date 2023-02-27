import { Button, H, Input, P } from "@/components/LowLevelComponents";
import { Card } from "@/components/LowLevelComponents";
import { about, clients, services } from "@/constants/text.constants";
import { withLayout } from "@/layout/Layout";
import { ContactUsComponent, ServicesComponent } from '@/components/HighLevelComponents';


function Home() {
	return (
		<>
			<Card >
				<H tag='h1'>About</H>
				<P>{about}</P>
			</Card>
			<ServicesComponent />
			<Card>
				<H tag='h1'>Clients</H>
				<P>{clients}</P>
			</Card>
			<ContactUsComponent />
		</>
	)
}

export default withLayout(Home);
