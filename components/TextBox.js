import { Box, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';

export default function TextBox({ label, value, onChangeText = () => {}, isReadOnly = false }) {
	return (
		<Box width="80%" mb="$3">
			<FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={isReadOnly} isRequired={false}>
				<FormControlLabel mb="$1">
					<FormControlLabelText>{label}</FormControlLabelText>
				</FormControlLabel>
				<Input>
					<InputField value={`${!value ? '' : value}`} onChangeText={onChangeText} keyboardType="numeric" type="text" />
				</Input>
			</FormControl>
		</Box>
	);
}
