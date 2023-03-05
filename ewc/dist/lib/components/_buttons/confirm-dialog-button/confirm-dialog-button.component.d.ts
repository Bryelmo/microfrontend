import { EventEmitter, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { buttonsActionTypes } from '../actions';
import { actionEventType } from '../../type';
import * as i0 from "@angular/core";
export declare class ConfirmDialogButtonComponent implements OnInit {
    private dialog;
    wrapperClassNames: string;
    classNames: string;
    label: string;
    icon: string;
    dialogTitle: string;
    dialogIcon: string;
    dialogMessage: string;
    action: EventEmitter<actionEventType>;
    actionTypes: typeof buttonsActionTypes;
    constructor(dialog: ConfirmationService);
    ngOnInit(): void;
    /**
     *  @description I trigger the opening of the Dialog box
     *  @return {VoidFunction}
     */
    openDialog: () => void;
    /**
     *  @description I mount the Map type action event and I emit it into the parent component
     *  @param {string | undefined} type
     *  @param {Any} event
     *  @return {VoidFunction}
     */
    handleActions: (type: string | undefined, event: any) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialogButtonComponent, "ewc-confirm-dialog-button", never, { "wrapperClassNames": "wrapperClassNames"; "classNames": "classNames"; "label": "label"; "icon": "icon"; "dialogTitle": "dialogTitle"; "dialogIcon": "dialogIcon"; "dialogMessage": "dialogMessage"; }, { "action": "action"; }, never, never, false, never>;
}
