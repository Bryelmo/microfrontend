import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			loadRemoteModule({
				type: 'module',
				remoteEntry: 'http://localhost:5000/remote_remoteEntry.js',
				exposedModule: './FeatureModule'
			}).then(m => m.FeatureModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
