import { Box, Checkbox, CheckboxIndicator, CheckboxIcon, CheckIcon, Input, InputField, VStack, HStack, Text } from '@gluestack-ui/themed';
import { useState } from 'react';

export default function TextBox({ id, label, value, onChangeText = () => {}, isSelected, setIsSelected }) {
	return (
		<Box width="80%">
			<VStack space="sm">
				<HStack space="sm" alignItems="center">
					<Checkbox aria-label="checkbox" defaultIsChecked={false} isChecked={isSelected == id} size="md" onChange={() => setIsSelected(id)}>
						<CheckboxIndicator>
							<CheckboxIcon as={CheckIcon} strokeWidth={1} />
						</CheckboxIndicator>
					</Checkbox>
					<Text>{label}</Text>
				</HStack>

				<Input isReadOnly={isSelected == id}>
					<InputField value={`${!value ? '' : value}`} onChangeText={onChangeText} keyboardType="numeric" type="text" />
				</Input>
			</VStack>
		</Box>
	);
}
