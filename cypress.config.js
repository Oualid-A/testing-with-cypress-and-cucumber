const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',

	e2e: {
		setupNodeEvents(on, config) {
			const options = browserify.defaultOptions;

			options.browserifyOptions.plugin.unshift(['tsify']);
			// For the cucumber preprocessor
			on('file:preprocessor', cucumber())
			require('cypress-mochawesome-reporter/plugin')(on)
			return config
		},
		specPattern: [
			'cypress/integration/**/*.feature',
			'cypress/tests/**/*.spec.js',
		],
		baseUrl: 'https://reqres.in/api/',
		pageLoadTimeout: 10000,
		screenshotOnRunFailure: true,
		reporterOptions: {
			reportDir: 'cypress/reports',
			charts: true,
			reportPageTitle: 'My Test Suite',
			embeddedScreenshots: true,
			inlineAssets: true,
		},
	},
	video: false,
	defaultCommandTimeout: 5000,
	viewportHeight: 900,
	viewportWidth: 1900,
})
