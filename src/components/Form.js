import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native';

export default function Form({ addHandler }) {
	const [text, setValue] = useState('');

	const onChange = (text) => {
		setValue(text);
	};

	const pressHandler = () => {
		if (text.trim()) {
			addHandler(text);
			setValue('');
		} else {
			Alert.alert('Необходимо ввести задачу!');
		}
	};

	return (
		<View>
			<TextInput style={styles.input} onChangeText={onChange} value={text} placeholder="Впишите задачу..." />
			<Button color="#f00" title="Добавить задачу" onPress={pressHandler} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 2,
		borderColor: '#f00',
		borderStyle: 'solid',
		marginVertical: 10,
		paddingVertical: 5,
	},
});
