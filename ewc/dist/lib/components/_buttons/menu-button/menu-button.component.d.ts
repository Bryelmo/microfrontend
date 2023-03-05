import { EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { actionEventType } from '../../type';
import * as i0 from "@angular/core";
export declare class MenuButtonComponent implements OnInit {
    wrapperClassNames: string;
    classNames: string;
    label: string;
    icon: string;
    appendTo: any;
    menu: MenuItem[];
    action: EventEmitter<actionEventType>;
    constructor();
    /**
     *  @description At init of the component I attach an ActionEvent into the MenuItems
     *  @return {VoidFunction}
     */
    ngOnInit(): void;
    /**
     *  @description I attach a command ActionEvent for each menu items that will be emitted for the parent component
     *  @param {MenuItem[]} menu
     *  @return {VoidFunction}
     */
    attachCommandAction: (menu: MenuItem[]) => void;
    /**
     *  @description I mount the Map type action event and I emit it into the parent component
     * 	If the event is already a Map type I get and remount data in a new one
     *  @param {string | undefined} type
     *  @param {Any} event
     *  @return {VoidFunction}
     */
    handleActions: (type: string | undefined, event: any) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuButtonComponent, "ewc-menu-button", never, { "wrapperClassNames": "wrapperClassNames"; "classNames": "classNames"; "label": "label"; "icon": "icon"; "appendTo": "appendTo"; "menu": "menu"; }, { "action": "action"; }, never, never, false, never>;
}
