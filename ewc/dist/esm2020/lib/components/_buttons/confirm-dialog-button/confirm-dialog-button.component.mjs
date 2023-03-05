import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { buttonsActionTypes } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "primeng/button";
import * as i3 from "primeng/confirmdialog";
import * as i4 from "primeng/ripple";
export class ConfirmDialogButtonComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.wrapperClassNames = '';
        this.classNames = '';
        this.label = '';
        this.icon = '';
        this.dialogTitle = '';
        this.dialogIcon = 'pi-exclamation-triangle';
        this.dialogMessage = '';
        this.action = new EventEmitter();
        this.actionTypes = buttonsActionTypes;
        /**
         *  @description I trigger the opening of the Dialog box
         *  @return {VoidFunction}
         */
        this.openDialog = () => {
            this.dialog.confirm({
                message: this.dialogMessage,
                accept: () => { this.handleActions(this.actionTypes.ACCEPT, {}); },
                reject: () => { this.handleActions(this.actionTypes.REJECT, {}); }
            });
        };
        /**
         *  @description I mount the Map type action event and I emit it into the parent component
         *  @param {string | undefined} type
         *  @param {Any} event
         *  @return {VoidFunction}
         */
        this.handleActions = (type, event) => {
            const action = { type: type, value: event };
            this.action.emit(action);
        };
    }
    ngOnInit() { }
}
ConfirmDialogButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ConfirmDialogButtonComponent, deps: [{ token: i1.ConfirmationService }], target: i0.ɵɵFactoryTarget.Component });
ConfirmDialogButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: ConfirmDialogButtonComponent, selector: "ewc-confirm-dialog-button", inputs: { wrapperClassNames: "wrapperClassNames", classNames: "classNames", label: "label", icon: "icon", dialogTitle: "dialogTitle", dialogIcon: "dialogIcon", dialogMessage: "dialogMessage" }, outputs: { action: "action" }, host: { properties: { "class": "this.wrapperClassNames" } }, providers: [ConfirmationService], ngImport: i0, template: "<button\n\tpButton\n\tpRipple\n\ttype=\"button\"\n\t[label]=\"label\" \n\ticon=\"{{ icon ? 'pi ' + icon : '' }}\"\n\tclass=\"ew_ConfirmDialogButton {{ classNames }}\"\n\t(click)=\"openDialog()\">\n</button>\n<p-confirmDialog\n\t[header]=\"dialogTitle\"\n\ticon=\"pi {{ dialogIcon }}\"\n\t[message]=\"dialogMessage\">\n</p-confirmDialog>", styles: [""], dependencies: [{ kind: "directive", type: i2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i3.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }, { kind: "directive", type: i4.Ripple, selector: "[pRipple]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ConfirmDialogButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ewc-confirm-dialog-button', encapsulation: ViewEncapsulation.None, providers: [ConfirmationService], template: "<button\n\tpButton\n\tpRipple\n\ttype=\"button\"\n\t[label]=\"label\" \n\ticon=\"{{ icon ? 'pi ' + icon : '' }}\"\n\tclass=\"ew_ConfirmDialogButton {{ classNames }}\"\n\t(click)=\"openDialog()\">\n</button>\n<p-confirmDialog\n\t[header]=\"dialogTitle\"\n\ticon=\"pi {{ dialogIcon }}\"\n\t[message]=\"dialogMessage\">\n</p-confirmDialog>" }]
        }], ctorParameters: function () { return [{ type: i1.ConfirmationService }]; }, propDecorators: { wrapperClassNames: [{
                type: HostBinding,
                args: ['class']
            }, {
                type: Input
            }], classNames: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], dialogTitle: [{
                type: Input
            }], dialogIcon: [{
                type: Input
            }], dialogMessage: [{
                type: Input
            }], action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2ctYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2V3Yy9zcmMvbGliL2NvbXBvbmVudHMvX2J1dHRvbnMvY29uZmlybS1kaWFsb2ctYnV0dG9uL2NvbmZpcm0tZGlhbG9nLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ld2Mvc3JjL2xpYi9jb21wb25lbnRzL19idXR0b25zL2NvbmZpcm0tZGlhbG9nLWJ1dHRvbi9jb25maXJtLWRpYWxvZy1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBVWhELE1BQU0sT0FBTyw0QkFBNEI7SUFheEMsWUFDUyxNQUEyQjtRQUEzQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQVpMLHNCQUFpQixHQUFXLEVBQUUsQ0FBQTtRQUNwRCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVcseUJBQXlCLENBQUM7UUFDL0Msa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDMUIsV0FBTSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV0RixnQkFBVyxHQUFHLGtCQUFrQixDQUFDO1FBUWpDOzs7V0FHRztRQUNILGVBQVUsR0FBRyxHQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDM0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFDakUsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSCxrQkFBYSxHQUFHLENBQUMsSUFBd0IsRUFBRSxLQUFVLEVBQVEsRUFBRTtZQUM5RCxNQUFNLE1BQU0sR0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUE7SUF6QkUsQ0FBQztJQUVKLFFBQVEsS0FBVSxDQUFDOzt5SEFqQlAsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsa1ZBRjdCLENBQUMsbUJBQW1CLENBQUMsMEJDVmpDLGtWQWFrQjsyRkRETCw0QkFBNEI7a0JBUHhDLFNBQVM7K0JBQ0MsMkJBQTJCLGlCQUd0QixpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCLENBQUMsbUJBQW1CLENBQUM7MEdBSUQsaUJBQWlCO3NCQUEvQyxXQUFXO3VCQUFDLE9BQU87O3NCQUFHLEtBQUs7Z0JBQ25CLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBidXR0b25zQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IGFjdGlvbkV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL3R5cGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdld2MtY29uZmlybS1kaWFsb2ctYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NvbmZpcm0tZGlhbG9nLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFtDb25maXJtYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCkgd3JhcHBlckNsYXNzTmFtZXM6IHN0cmluZyA9ICcnXG5cdEBJbnB1dCgpIGNsYXNzTmFtZXM6c3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcblx0QElucHV0KCkgaWNvbjogc3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIGRpYWxvZ1RpdGxlOnN0cmluZyA9ICcnO1xuXHRASW5wdXQoKSBkaWFsb2dJY29uOiBzdHJpbmcgPSAncGktZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xuXHRASW5wdXQoKSBkaWFsb2dNZXNzYWdlOiBzdHJpbmcgPSAnJztcblx0QE91dHB1dCgpIGFjdGlvbjogRXZlbnRFbWl0dGVyPGFjdGlvbkV2ZW50VHlwZT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFjdGlvbkV2ZW50VHlwZT4oKTtcblxuXHRhY3Rpb25UeXBlcyA9IGJ1dHRvbnNBY3Rpb25UeXBlcztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGRpYWxvZzogQ29uZmlybWF0aW9uU2VydmljZVxuXHQpIHt9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7fVxuXHRcblx0LyoqXG5cdCAqICBAZGVzY3JpcHRpb24gSSB0cmlnZ2VyIHRoZSBvcGVuaW5nIG9mIHRoZSBEaWFsb2cgYm94XG5cdCAqICBAcmV0dXJuIHtWb2lkRnVuY3Rpb259XG5cdCAqL1xuXHRvcGVuRGlhbG9nID0gKCk6dm9pZCA9PiB7XG5cdFx0dGhpcy5kaWFsb2cuY29uZmlybSh7XG5cdFx0XHRtZXNzYWdlOiB0aGlzLmRpYWxvZ01lc3NhZ2UsXG5cdFx0XHRhY2NlcHQ6ICgpID0+IHsgdGhpcy5oYW5kbGVBY3Rpb25zKHRoaXMuYWN0aW9uVHlwZXMuQUNDRVBULCB7fSkgfSxcblx0XHRcdHJlamVjdDogKCkgPT4geyB0aGlzLmhhbmRsZUFjdGlvbnModGhpcy5hY3Rpb25UeXBlcy5SRUpFQ1QsIHt9KSB9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogIEBkZXNjcmlwdGlvbiBJIG1vdW50IHRoZSBNYXAgdHlwZSBhY3Rpb24gZXZlbnQgYW5kIEkgZW1pdCBpdCBpbnRvIHRoZSBwYXJlbnQgY29tcG9uZW50XG5cdCAqICBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdHlwZVxuXHQgKiAgQHBhcmFtIHtBbnl9IGV2ZW50XG5cdCAqICBAcmV0dXJuIHtWb2lkRnVuY3Rpb259XG5cdCAqL1xuXHRoYW5kbGVBY3Rpb25zID0gKHR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCwgZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGFjdGlvbjogYWN0aW9uRXZlbnRUeXBlID0geyB0eXBlOiB0eXBlLCB2YWx1ZTogZXZlbnQgfTtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KGFjdGlvbilcblx0fVxufVxuIiwiPGJ1dHRvblxuXHRwQnV0dG9uXG5cdHBSaXBwbGVcblx0dHlwZT1cImJ1dHRvblwiXG5cdFtsYWJlbF09XCJsYWJlbFwiIFxuXHRpY29uPVwie3sgaWNvbiA/ICdwaSAnICsgaWNvbiA6ICcnIH19XCJcblx0Y2xhc3M9XCJld19Db25maXJtRGlhbG9nQnV0dG9uIHt7IGNsYXNzTmFtZXMgfX1cIlxuXHQoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+XG48L2J1dHRvbj5cbjxwLWNvbmZpcm1EaWFsb2dcblx0W2hlYWRlcl09XCJkaWFsb2dUaXRsZVwiXG5cdGljb249XCJwaSB7eyBkaWFsb2dJY29uIH19XCJcblx0W21lc3NhZ2VdPVwiZGlhbG9nTWVzc2FnZVwiPlxuPC9wLWNvbmZpcm1EaWFsb2c+Il19