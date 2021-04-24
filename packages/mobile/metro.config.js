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
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, '../..')
  ],
	resolver: {
		extraNodeModules: {
			'react-native': path.resolve(__dirname, 'node_modules/react-native')
		},
	}
};
