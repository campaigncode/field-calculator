import { Box } from '@gluestack-ui/themed';
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

	useEffect(() => {
		const result = Math.floor(doorknockers * shifts * hoursPerShift * doorsPerHour * weeksKnocking * (5 / 3));

		setEstimatedAttempts(result);
		setEstimatedContacts(Math.floor(result * 0.15));
	}, [doorknockers, shifts, hoursPerShift, doorsPerHour, weeksKnocking]);

	return (
		<KeyboardAwareScrollView>
			<Box width="100%" height="100%" alignItems="center">
				<TextBox label="Doorknockers" value={doorknockers} onChangeText={setDoorknockers} />
				<TextBox label="Shifts" value={shifts} onChangeText={setShifts} />
				<TextBox label="Hours in a shift" value={hoursPerShift} onChangeText={setHoursPerShift} />
				<TextBox label="Calls per hour" value={doorsPerHour} onChangeText={setDoorsPerHour} />
				<TextBox label="Weeks spent knocking" value={weeksKnocking} onChangeText={setWeeksKnocking} />
				<TextBox label="Estimated Attempts" value={estimatedAttempts} isReadOnly={true} />
				<TextBox label="Estimated Contacts" value={estimatedContacts} isReadOnly={true} />
			</Box>
		</KeyboardAwareScrollView>
	);
}
