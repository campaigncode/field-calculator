import { Box } from '@gluestack-ui/themed';
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

	useEffect(() => {
		const result = Math.floor(phonecallers * shifts * hoursPerShift * doorsPerHour * weeksCalling);

		setEstimatedAttempts(result);
		setEstimatedContacts(Math.floor(result * 0.08));
	}, [phonecallers, shifts, hoursPerShift, doorsPerHour, weeksCalling]);

	return (
		<KeyboardAwareScrollView>
			<Box width="100%" height="100%" alignItems="center">
				<TextBox label="Phonebankers" value={phonecallers} onChangeText={setPhonecallers} />
				<TextBox label="Shifts" value={shifts} onChangeText={setShifts} />
				<TextBox label="Hours in a shift" value={hoursPerShift} onChangeText={setHoursPerShift} />
				<TextBox label="Calls per hour" value={doorsPerHour} onChangeText={setDoorsPerHour} />
				<TextBox label="Weeks spent calling" value={weeksCalling} onChangeText={setWeeksCalling} />
				<TextBox label="Estimated Attempts" value={estimatedAttempts} isReadOnly={true} />
				<TextBox label="Estimated Contacts" value={estimatedContacts} isReadOnly={true} />
			</Box>
		</KeyboardAwareScrollView>
	);
}
