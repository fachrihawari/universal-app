/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, '../shared')
  ],
	resolver: {
		extraNodeModules: {
			react: path.resolve(__dirname, 'node_modules/react'),
			'react-native': path.resolve(__dirname, 'node_modules/react-native'),
			'@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
			'@react-navigation/native': path.resolve(__dirname, 'node_modules/@react-navigation/native'),
			'react-navigation': path.resolve(__dirname, 'node_modules/react-navigation'),
			'react-native-gesture-handler': path.resolve(__dirname, 'node_modules/react-native-gesture-handler'),
		},
	}
};
