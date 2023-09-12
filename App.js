import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Door from './components/Doors';
import Phone from './components/Phones';

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<GluestackUIProvider config={config.theme}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Doorknocking" component={Door} />
					<Tab.Screen name="Phone Calls" component={Phone} />
				</Tab.Navigator>
			</NavigationContainer>
		</GluestackUIProvider>
	);
}
