import { Box, VStack } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextBox from './TextBox';

export default function Door() {
	const [doorknockers, setDoorknockers] = useState();
	const [shifts, setShifts] = useState();
	const [hoursPerShift, setHoursPerShift] = useState();
	const [doorsPerHour, setDoorsPerHour] = useState();
	const [weeksKnocking, setWeeksKnocking] = useState();

	const [estimatedAttempts, setEstimatedAttempts] = useState();
	const [estimatedContacts, setEstimatedContacts] = useState();

	const [isSelected, setIsSelected] = useState(7);

	useEffect(() => {
		const result = Math.floor(doorknockers * shifts * hoursPerShift * doorsPerHour * weeksKnocking * (5 / 3));

		setEstimatedAttempts(result);
		setEstimatedContacts(Math.floor(result * 0.15));
	}, [doorknockers, shifts, hoursPerShift, doorsPerHour, weeksKnocking]);

	return (
		<KeyboardAwareScrollView>
			<Box width="100%" height="100%">
				<VStack space="md" alignItems="center">
					<TextBox
						id={1}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						label="Doorknockers"
						value={doorknockers}
						onChangeText={setDoorknockers}
					/>
					<TextBox id={2} isSelected={isSelected} setIsSelected={setIsSelected} label="Shifts" value={shifts} onChangeText={setShifts} />
					<TextBox
						id={3}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						label="Hours in a shift"
						value={hoursPerShift}
						onChangeText={setHoursPerShift}
					/>
					<TextBox
						id={4}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						label="Calls per hour"
						value={doorsPerHour}
						onChangeText={setDoorsPerHour}
					/>
					<TextBox
						id={5}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						label="Weeks spent knocking"
						value={weeksKnocking}
						onChangeText={setWeeksKnocking}
					/>
					<TextBox id={6} isSelected={isSelected} setIsSelected={setIsSelected} label="Estimated Attempts" value={estimatedAttempts} />
					<TextBox id={7} isSelected={isSelected} setIsSelected={setIsSelected} label="Estimated Contacts" value={estimatedContacts} />
				</VStack>
			</Box>
		</KeyboardAwareScrollView>
	);
}
