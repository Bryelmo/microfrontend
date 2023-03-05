import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';

import { ConfirmDialogButtonComponent } from './components/_buttons/confirm-dialog-button/confirm-dialog-button.component';
import { MenuButtonComponent } from './components/_buttons/menu-button/menu-button.component';


@NgModule({
	declarations: [
    	ConfirmDialogButtonComponent,
    	MenuButtonComponent
	],
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		PrimengModule
	],
	exports: [
		ConfirmDialogButtonComponent,
		MenuButtonComponent
	],
	schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class EWCModule { }
