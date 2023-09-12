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

	const [isSelected, setIsSelected] = useState(6);
	const [estimateGroupFocusID, setEstimateGroupFocusID] = useState(1);

	const contactMultiplier = 0.08;

	// Calculate phonecallers
	useEffect(() => {
		if (isSelected == 1) {
			setPhonecallers(Math.ceil(estimatedAttempts / (shifts * hoursPerShift * doorsPerHour * weeksCalling)));
		}
	}, [estimatedAttempts, shifts, hoursPerShift, doorsPerHour, weeksCalling, isSelected]);

	// Calculate shifts
	useEffect(() => {
		if (isSelected == 2) {
			setShifts(Math.ceil(estimatedAttempts / (phonecallers * hoursPerShift * doorsPerHour * weeksCalling)));
		}
	}, [estimatedAttempts, phonecallers, hoursPerShift, doorsPerHour, weeksCalling, isSelected]);

	// Calculate hoursPerShift
	useEffect(() => {
		if (isSelected == 3) {
			setHoursPerShift(Math.ceil(estimatedAttempts / (phonecallers * shifts * doorsPerHour * weeksCalling)));
		}
	}, [estimatedAttempts, phonecallers, shifts, doorsPerHour, weeksCalling, isSelected]);

	// Calculate doorsPerHour
	useEffect(() => {
		if (isSelected == 4) {
			setDoorsPerHour(Math.ceil(estimatedAttempts / (phonecallers * shifts * hoursPerShift * weeksCalling)));
		}
	}, [estimatedAttempts, phonecallers, shifts, hoursPerShift, weeksCalling, isSelected]);

	// Calculate weeksCalling
	useEffect(() => {
		if (isSelected == 5) {
			setWeeksCalling(Math.ceil(estimatedAttempts / (phonecallers * shifts * hoursPerShift * doorsPerHour)));
		}
	}, [estimatedAttempts, phonecallers, shifts, hoursPerShift, doorsPerHour, isSelected]);

	// Calculate estimates
	useEffect(() => {
		if (isSelected == 6) {
			const result = Math.floor(phonecallers * shifts * hoursPerShift * doorsPerHour * weeksCalling);

			setEstimatedAttempts(result);
			setEstimatedContacts(Math.floor(result * contactMultiplier));
		}
	}, [phonecallers, shifts, hoursPerShift, doorsPerHour, weeksCalling, isSelected]);

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
			</Box>
		</KeyboardAwareScrollView>
	);
}
