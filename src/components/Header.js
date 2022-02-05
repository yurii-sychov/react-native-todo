import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
	return (
		<View style={styles.main}>
			<Text style={styles.text}>Список дел</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		height: 70,
		backgroundColor: '#3949ab',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	text: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
