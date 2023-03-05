import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { buttonsActionTypes } from '../actions';
import { actionEventType } from '../../type';

@Component({
	selector: 'ewc-confirm-dialog-button',
	templateUrl: './confirm-dialog-button.component.html',
	styleUrls: ['./confirm-dialog-button.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [ConfirmationService]
})
export class ConfirmDialogButtonComponent implements OnInit {

	@HostBinding('class') @Input() wrapperClassNames: string = ''
	@Input() classNames:string = '';
	@Input() label: string = '';
	@Input() icon: string = '';
	@Input() dialogTitle:string = '';
	@Input() dialogIcon: string = 'pi-exclamation-triangle';
	@Input() dialogMessage: string = '';
	@Output() action: EventEmitter<actionEventType> = new EventEmitter<actionEventType>();

	actionTypes = buttonsActionTypes;

	constructor(
		private dialog: ConfirmationService
	) {}

	ngOnInit(): void {}
	
	/**
	 *  @description I trigger the opening of the Dialog box
	 *  @return {VoidFunction}
	 */
	openDialog = ():void => {
		this.dialog.confirm({
			message: this.dialogMessage,
			accept: () => { this.handleActions(this.actionTypes.ACCEPT, {}) },
			reject: () => { this.handleActions(this.actionTypes.REJECT, {}) }
		});
	}

	/**
	 *  @description I mount the Map type action event and I emit it into the parent component
	 *  @param {string | undefined} type
	 *  @param {Any} event
	 *  @return {VoidFunction}
	 */
	handleActions = (type: string | undefined, event: any): void => {
		const action: actionEventType = { type: type, value: event };
		this.action.emit(action)
	}
}
