import { Box, VStack } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import TextBox from './TextBox';

export default function Phone() {
	const [phonecallers, setPhonecallers] = useState();
	const [shifts, setShifts] = useState();
	const [hoursPerShift, setHoursPerShift] = useState();
	const [doorsPerHour, setDoorsPerHour] = useState();
	const [weeksCalling, setWeeksCalling] = useState();

	const [estimatedAttempts, setEstimatedAttempts] = useState();
	const [estimatedContacts, setEstimatedContacts] = useState();

	const [isSelected, setIsSelected] = useState(7);

	useEffect(() => {
		const result = Math.floor(phonecallers * shifts * hoursPerShift * doorsPerHour * weeksCalling);

		setEstimatedAttempts(result);
		setEstimatedContacts(Math.floor(result * 0.08));
	}, [phonecallers, shifts, hoursPerShift, doorsPerHour, weeksCalling]);

	return (
		<KeyboardAwareScrollView>
			<Box width="100%" height="100%">
				<VStack space="md" alignItems="center">
					<TextBox
						id={1}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						label="Phonebankers"
						value={phonecallers}
						onChangeText={setPhonecallers}
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
						label="Weeks spent calling"
						value={weeksCalling}
						onChangeText={setWeeksCalling}
					/>
					<TextBox id={6} isSelected={isSelected} setIsSelected={setIsSelected} label="Estimated Attempts" value={estimatedAttempts} />
					<TextBox id={7} isSelected={isSelected} setIsSelected={setIsSelected} label="Estimated Contacts" value={estimatedContacts} />
				</VStack>
			</Box>
		</KeyboardAwareScrollView>
	);
}
