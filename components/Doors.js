import { Box, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export default function Door() {
	const [doorknockers, setDoorknockers] = useState(0);
	const [shifts, setShifts] = useState(0);
	const [hoursPerShift, setHoursPerShift] = useState(0);
	const [doorsPerHour, setDoorsPerHour] = useState(0);
	const [weeksKnocking, setWeeksKnocking] = useState(0);

	const [estimatedAttempts, setEstimatedAttempts] = useState(0);
	const [estimatedContacts, setEstimatedContacts] = useState(0);

	useEffect(() => {
		const result = Math.floor(doorknockers * shifts * hoursPerShift * doorsPerHour * weeksKnocking * (5 / 3));

		setEstimatedAttempts(`${result}`);
		setEstimatedContacts(`${Math.floor(result * 0.15)}`);
	}, [doorknockers, shifts, hoursPerShift, doorsPerHour, weeksKnocking]);

	return (
		<KeyboardAwareScrollView>
			<Box width="100%" height="100%" alignItems="center">
				<Box width="80%" mb="$3" mt="$6">
					<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Doorknockers</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={doorknockers} onChangeText={setDoorknockers} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%" mb="$3">
					<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Shifts</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={shifts} onChangeText={setShifts} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%" mb="$3">
					<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Hours in a shift</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={hoursPerShift} onChangeText={setHoursPerShift} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%" mb="$3">
					<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Doors per hour</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={doorsPerHour} onChangeText={setDoorsPerHour} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%" mb="$6">
					<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Weeks spent knocking</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={weeksKnocking} onChangeText={setWeeksKnocking} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%" mb="$3">
					<FormControl size="md" isDisabled={true} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Estimated attempts</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={estimatedAttempts} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>

				<Box width="80%">
					<FormControl size="md" isDisabled={true} isInvalid={false} isReadOnly={false} isRequired={false}>
						<FormControlLabel mb="$1">
							<FormControlLabelText>Estimated contacts</FormControlLabelText>
						</FormControlLabel>
						<Input>
							<InputField value={estimatedContacts} keyboardType="numeric" type="text" />
						</Input>
					</FormControl>
				</Box>
			</Box>
		</KeyboardAwareScrollView>
	);
}
