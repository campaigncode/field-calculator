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

	const [isSelected, setIsSelected] = useState(6);
	const [estimateGroupFocusID, setEstimateGroupFocusID] = useState(1);

	const contactMultiplier = 0.15;

	// Calculate doorknockers
	useEffect(() => {
		if (isSelected == 1) {
			setDoorknockers(Math.ceil(estimatedAttempts / (shifts * hoursPerShift * doorsPerHour * weeksKnocking)));
		}
	}, [estimatedAttempts, shifts, hoursPerShift, doorsPerHour, weeksKnocking, isSelected]);

	// Calculate shifts
	useEffect(() => {
		if (isSelected == 2) {
			setShifts(Math.ceil(estimatedAttempts / (doorknockers * hoursPerShift * doorsPerHour * weeksKnocking)));
		}
	}, [estimatedAttempts, doorknockers, hoursPerShift, doorsPerHour, weeksKnocking, isSelected]);

	// Calculate hoursPerShift
	useEffect(() => {
		if (isSelected == 3) {
			setHoursPerShift(Math.ceil(estimatedAttempts / (doorknockers * shifts * doorsPerHour * weeksKnocking)));
		}
	}, [estimatedAttempts, doorknockers, shifts, doorsPerHour, weeksKnocking, isSelected]);

	// Calculate doorsPerHour
	useEffect(() => {
		if (isSelected == 4) {
			setDoorsPerHour(Math.ceil(estimatedAttempts / (doorknockers * shifts * hoursPerShift * weeksKnocking)));
		}
	}, [estimatedAttempts, doorknockers, shifts, hoursPerShift, weeksKnocking, isSelected]);

	// Calculate weeksKnocking
	useEffect(() => {
		if (isSelected == 5) {
			setWeeksKnocking(Math.ceil(estimatedAttempts / (doorknockers * shifts * hoursPerShift * doorsPerHour)));
		}
	}, [estimatedAttempts, doorknockers, shifts, hoursPerShift, doorsPerHour, isSelected]);

	useEffect(() => {
		if (isSelected == 6) {
			const result = Math.floor(doorknockers * shifts * hoursPerShift * doorsPerHour * weeksKnocking * (5 / 3));

			setEstimatedAttempts(result);
			setEstimatedContacts(Math.floor(result * contactMultiplier));
		}
	}, [doorknockers, shifts, hoursPerShift, doorsPerHour, weeksKnocking, isSelected]);

	// Keep estimates in sync
	useEffect(() => {
		if (estimateGroupFocusID == 1) {
			setEstimatedContacts(Math.floor(estimatedAttempts * contactMultiplier));
		}
	}, [estimatedAttempts]);

	useEffect(() => {
		if (estimateGroupFocusID == 2) {
			setEstimatedAttempts(Math.floor(estimatedContacts / contactMultiplier));
		}
	}, [estimatedContacts]);

	return (
		<KeyboardAwareScrollView>
			<VStack space="md" mt={'$10'} mb={'$10'} alignItems="center">
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
				<Box width="80%" sx={{ borderColor: '$primary500', borderWidth: 2, borderRadius: 5, padding: 15 }}>
					<VStack space="md">
						<TextBox
							id={6}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
							label="Estimated Attempts"
							value={estimatedAttempts}
							onChangeText={setEstimatedAttempts}
							fullWidth={true}
							estimateGroupFocusID={1}
							setEstimateGroupFocusID={setEstimateGroupFocusID}
						/>
						<TextBox
							id={6}
							isSelected={isSelected}
							setIsSelected={setIsSelected}
							label="Estimated Contacts"
							value={estimatedContacts}
							onChangeText={setEstimatedContacts}
							fullWidth={true}
							estimateGroupFocusID={2}
							setEstimateGroupFocusID={setEstimateGroupFocusID}
						/>
					</VStack>
				</Box>
			</VStack>
		</KeyboardAwareScrollView>
	);
}
