import { GluestackUIProvider } from '@gluestack-ui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import Door from './components/Doors';
import Phone from './components/Phones';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
	const Tab = createBottomTabNavigator();

	return (
		<GluestackUIProvider config={config}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Doorknocking"
						options={{
							tabBarIcon: ({ color, size }) => <FontAwesome5 name="door-open" color={color} size={size} />
						}}
						component={Door}
					/>
					<Tab.Screen
						name="Phone Calls"
						options={{
							tabBarIcon: ({ color, size }) => <FontAwesome5 name="phone" color={color} size={size} />
						}}
						component={Phone}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</GluestackUIProvider>
	);
}
