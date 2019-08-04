import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { withRouter, RouteComponentProps } from 'react-router';

import Touchable from '../components/Touchable';

function BottomTab({ history, location }: RouteComponentProps) {
	function navigateTo(path: string) {
		history.push(path)
	}
	function activeTab(path) {
		return location.pathname === path ? styles.tabItemActive : null
	}
	return (
		<View style={styles.tabContainer}>
			<Touchable style={[styles.tabItem, activeTab('/')]} onPress={navigateTo.bind(null, '/')}>
				<Text style={styles.tabItemText}>Home</Text>
			</Touchable>
			<Touchable style={[styles.tabItem, activeTab('/about')]} onPress={navigateTo.bind(null, '/about')}>
				<Text style={styles.tabItemText}>About</Text>
			</Touchable>
		</View>
	)
}

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		position: 'absolute',
		backgroundColor: '#2196f3',
		height: 70,
		bottom: 0,
		left: 0,
		right: 0
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabItemActive: {
		backgroundColor: '#0000001f'
	},
	tabItemText: {
		color: '#ffffff'
	}
})

export default withRouter(BottomTab)