import { Button, H, Input, P } from "@/components/LowLevelComponents";
import { Card } from "@/components/LowLevelComponents";
import { about, clients, services } from "@/constants/text.constants";
import { withLayout } from "@/layout/Layout";
import { ContactUsComponent, ServicesComponent } from '@/components/HighLevelComponents';
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/app.context";
import { NavigationCategories } from "@/interfaces/interfaces";


function Home() {
	return (
		<>
			<Card category={NavigationCategories.About}>
				<H tag='h1'>About</H>
				<P>{about}</P>
			</Card>
			<ServicesComponent category={NavigationCategories.Services}/>
			<Card category={NavigationCategories.Clients}>
				<H tag='h1'>Clients</H>
				<P>{clients}</P>
			</Card>
			<ContactUsComponent category={NavigationCategories.ContactUs}/>
		</>
	)
}

export default withLayout(Home);
