import { createContext, PropsWithChildren, useState } from 'react';
import { NavigationCategories } from '@/interfaces/interfaces';

export interface IAppContext {
	focusedCategory: NavigationCategories,
	setFocusedCategory?: (newFocusedCategory: NavigationCategories) => void;
}

export const AppContext = createContext<IAppContext>({ focusedCategory: NavigationCategories.About });

export const AppContextProvider = ({ children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [focusedCategory, setFocusedCategory] = useState<NavigationCategories>(NavigationCategories.About	);

	return <AppContext.Provider value={{ focusedCategory, setFocusedCategory }}>
		{children}
	</AppContext.Provider>;
};