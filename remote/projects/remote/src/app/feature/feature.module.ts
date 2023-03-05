import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EWCModule } from 'ewc';

import { FeatureRoutingModule } from './feature-routing.module';

import { ConfirmationService } from 'primeng/api';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FeatureRoutingModule,
		EWCModule
	],
	exports: [],
	providers: [ConfirmationService]
})
export class FeatureModule { }
