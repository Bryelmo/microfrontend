import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/components/home/home.component';

import { EWCModule } from 'ewc';
import { FeatureModule } from './feature/feature.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FeatureModule,
		EWCModule
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
