import { Button, H, Input, P } from "@/components/LowLevelComponents";
import { Card } from "@/components/LowLevelComponents";
import { about, advices, services } from "@/constants/text.constants";
import { withLayout } from "@/layout/Layout";
import { AdvicesComponent, ContactUsComponent, ServicesComponent } from '@/components/HighLevelComponents';
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
			<AdvicesComponent category={NavigationCategories.Advices}/>
			<ContactUsComponent category={NavigationCategories.ContactUs}/>
		</>
	)
}

export default withLayout(Home);
