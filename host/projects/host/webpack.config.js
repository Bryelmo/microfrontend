const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
	output: {
		uniqueName: "host",
		publicPath: "auto"
	},
	optimization: {
		runtimeChunk: false
	},   
	resolve: {
		alias: {
		...sharedMappings.getAliases(),
		}
	},
	experiments: {
		outputModule: true
	},
	// headers: {
	// 	"Access-Control-Allow-Origin": "http://localhost:52024"
	// },
	plugins: [
		new ModuleFederationPlugin({
			library: { type: "module" },

			// For remotes (please adjust)
			// name: "host",
			// filename: "remoteEntry.js",
			// exposes: {
			//     './Component': './projects/host/src/app/app.component.ts',
			// },        
			
			// For hosts (please adjust)
			remotes: {
				"remote": "http://localhost:5000/remote_remoteEntry.js"
			},

			shared: share({
			"@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
			"@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
			"@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
			"@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
			"@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
			"@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
			"@shared-state": { singleton: true, import: 'src/app/state/permissions/shared/index.ts' },

			...sharedMappings.getDescriptors()
			})
			
		}),
		sharedMappings.getPlugin()
	],
};
