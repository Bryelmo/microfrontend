import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	stories: [
		'../src/lib/components/**/*.mdx',
		'../src/lib/components//**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-scss"
	],
	framework: {
		"name": "@storybook/angular",
		"options": {}
	},
	docs: {
		"autodocs": "tag"
	}
};

export default config;