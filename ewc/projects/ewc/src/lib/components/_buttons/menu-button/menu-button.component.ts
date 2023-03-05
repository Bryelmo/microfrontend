import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { actionEventType } from '../../type';

@Component({
	selector: 'ewc-menu-button',
	templateUrl: './menu-button.component.html',
	styleUrls: ['./menu-button.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuButtonComponent implements OnInit {

	@HostBinding('class') @Input() wrapperClassNames: string = ''
	@Input() classNames: string = '';
	@Input() label: string = '';
	@Input() icon: string = '';
	@Input() appendTo: any = '';
	@Input() menu: MenuItem[] = [] as MenuItem[];
	@Output() action: EventEmitter<actionEventType> = new EventEmitter<actionEventType>();

	constructor() {
		
	}

	/**
	 *  @description At init of the component I attach an ActionEvent into the MenuItems
	 *  @return {VoidFunction}
	 */
	ngOnInit(): void {
		this.menu && this.menu.length > 0 && this.attachCommandAction(this.menu)
	}

	/**
	 *  @description I attach a command ActionEvent for each menu items that will be emitted for the parent component
	 *  @param {MenuItem[]} menu
	 *  @return {VoidFunction}
	 */
	attachCommandAction = (menu: MenuItem[]): void => {
		const _menu: MenuItem[] = [...menu];
		_menu.map((item) => {
			item.command = (event) => this.handleActions(item.label, event)
			return item;
		})
	}

	/**
	 *  @description I mount the Map type action event and I emit it into the parent component
	 * 	If the event is already a Map type I get and remount data in a new one
	 *  @param {string | undefined} type
	 *  @param {Any} event
	 *  @return {VoidFunction}
	 */
	handleActions = (type: string | undefined, event: any): void => {
		const action: actionEventType = { type: type, value: event };
		this.action.emit(action)
	}

}
