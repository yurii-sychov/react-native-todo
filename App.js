import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, FlatList } from 'react-native';

import Header from './src/components/Header';
import ListItem from './src/components/ListItem';
import Form from './src/components/Form';

export default function App() {
	const [listOfItems, setListOfItems] = useState([
		{ text: 'Купить молоко', key: '1' },
		{ text: 'Помыть машину', key: '2' },
		{ text: 'Купить картошку', key: '3' },
		{ text: 'Стать милонером', key: '4' },
	]);

	const addHandler = (text) => {
		setListOfItems((list) => {
			return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list];
		});
	};

	const deleteHandler = (key) => {
		setListOfItems((list) => {
			return list.filter((listOfItems) => listOfItems.key != key);
		});
	};
	return (
		<View style={styles.conteiner}>
			<StatusBar backgroundColor="#808080" />
			<Header />
			<View style={styles.content}>
				<Form addHandler={addHandler} />
				<FlatList data={listOfItems} renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
	},
	content: {
		marginHorizontal: 20,
		marginVertical: 10,
	},
});
