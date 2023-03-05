import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/button";
import * as i3 from "primeng/overlaypanel";
import * as i4 from "primeng/menu";
import * as i5 from "primeng/ripple";
export class MenuButtonComponent {
    constructor() {
        this.wrapperClassNames = '';
        this.classNames = '';
        this.label = '';
        this.icon = '';
        this.appendTo = '';
        this.menu = [];
        this.action = new EventEmitter();
        /**
         *  @description I attach a command ActionEvent for each menu items that will be emitted for the parent component
         *  @param {MenuItem[]} menu
         *  @return {VoidFunction}
         */
        this.attachCommandAction = (menu) => {
            const _menu = [...menu];
            _menu.map((item) => {
                item.command = (event) => this.handleActions(item.label, event);
                return item;
            });
        };
        /**
         *  @description I mount the Map type action event and I emit it into the parent component
         * 	If the event is already a Map type I get and remount data in a new one
         *  @param {string | undefined} type
         *  @param {Any} event
         *  @return {VoidFunction}
         */
        this.handleActions = (type, event) => {
            const action = { type: type, value: event };
            this.action.emit(action);
        };
    }
    /**
     *  @description At init of the component I attach an ActionEvent into the MenuItems
     *  @return {VoidFunction}
     */
    ngOnInit() {
        this.menu && this.menu.length > 0 && this.attachCommandAction(this.menu);
    }
}
MenuButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: MenuButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: MenuButtonComponent, selector: "ewc-menu-button", inputs: { wrapperClassNames: "wrapperClassNames", classNames: "classNames", label: "label", icon: "icon", appendTo: "appendTo", menu: "menu" }, outputs: { action: "action" }, host: { properties: { "class": "this.wrapperClassNames" } }, ngImport: i0, template: "<button\n\tpButton\n\tpRipple\n\ttype=\"button\"\n\ticon=\"pi pi-cog\"\n\tclass=\"ew_EventActions__Button ew_EventActions__Button--Edit\"\n\t(click)=\"op.toggle($event)\">\n</button>\n<p-overlayPanel #op styleClass=\"ew_EventActions__Panel\">\n\t<p-menu *ngIf=\"menu && menu.length > 0\" [model]=\"menu\" styleClass=\"ew_MenuButton__Menu\"></p-menu>\n</p-overlayPanel>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\";body{font-family:Roboto,Lucida Grande,Tahoma,sans-serif;font-size:1rem;color:#091433;margin:0}a{color:#3578e4;text-decoration:none}a:hover{color:#6296ea;text-decoration:none}h1{font-size:3rem;line-height:3.5rem}h2{font-size:2.5rem;line-height:3rem}h3{font-size:2rem;line-height:2.5rem}h4{font-size:1.5rem;line-height:2rem}h5{font-size:1rem;line-height:1.2rem}h6{font-size:.8rem;line-height:1rem}.smooth,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link,.p-dialog .p-dialog-header .p-dialog-header-icon,.p-button{transition:opacity .5s ease-in-out}.darkGradient,.ew_EventActions__Panel{background:#000000;background:linear-gradient(10deg,#000000 0%,#091433 70%,#091433 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=$black,endColorstr=$dark,GradientType=1)}.p-link:focus{box-shadow:none}.p-inputtext:enabled:focus{box-shadow:none;border-color:#7671f4}.p-button{border-radius:1rem}.p-button:focus{box-shadow:none}.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus{box-shadow:none}.p-panel .p-panel-header .p-panel-header-icon:focus{box-shadow:none}.p-button{background-color:#7671f4;border-color:#7671f4}.p-button:enabled:hover{background-color:#5f59f2;border-color:#5f59f2}.p-dropdown:not(.p-disabled).p-focus{box-shadow:none;border-color:#7671f4}.p-dropdown-panel .p-dropdown-items{padding:0}.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#7671f4;color:#fff;border-color:#7671f4}.p-paginator .p-paginator-first,.p-paginator .p-paginator-prev,.p-paginator .p-paginator-next,.p-paginator .p-paginator-last{color:#091433}.p-paginator .p-paginator-pages .p-paginator-page{color:#091433;background-color:#7671f41a}.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover{color:#7671f4;background-color:transparent}.p-datatable .p-datatable-thead>tr>th{border:none;padding-bottom:.5rem}.p-datatable .p-sortable-column:not(.p-highlight):hover{background:none;color:#091433}.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon{color:#7671f4}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{font-size:.8rem;color:gray}.p-column-filter-menu-button.p-column-filter-menu-button-active,.p-column-filter-menu-button.p-column-filter-menu-button-active:hover{background-color:#7671f4;color:#fff}.p-column-filter-overlay .p-column-filter-row-items{padding:0;font-size:.8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item{font-size:.8rem;padding:.5rem .8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator{margin:0}.p-dialog .p-dialog-header{padding:.5rem;color:#fff;background-color:#7671f4;font-size:1rem}.p-dialog .p-dialog-header .p-dialog-title{font-size:1rem}.p-dialog .p-dialog-header .p-dialog-header-icon{width:1.2rem;height:1.2rem;color:#fff}.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover{color:#091433}.p-dialog.p-confirm-dialog .p-confirm-dialog-icon{font-size:1rem}.p-dialog .p-dialog-content{padding:2rem 1rem}.p-dialog .p-dialog-footer{padding:.5rem 1rem}.p-dialog .p-dialog-footer button:last-child{margin-right:0}.p-dialog .p-dialog-footer button{padding-top:.2rem;padding-bottom:.2rem}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept{background-color:#fff;border:2px solid #7671F4;color:#7671f4}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept:hover{background-color:#7671f4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject{background-color:#7671f4;border:2px solid #7671F4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject:hover{background-color:#5f59f2;border-color:#5f59f2;color:#fff}.p-tag{border-radius:2rem;font-size:.512rem;text-transform:uppercase;padding:.1rem .4rem}.p-tag.p-tag-success{background-color:#00cf80}.p-tag.p-tag-danger{background-color:#f02c56}.ew_EventActions__Panel{color:#fff;border-color:transparent;border-radius:2rem}.ew_EventActions__Panel:before,.ew_EventActions__Panel:after{display:none}.ew_EventActions__Panel .p-overlaypanel-content{padding:1rem}.ew_MenuButton__Menu{margin-top:0;background:none;border:none;padding:0;min-width:8rem;width:auto;max-width:12.5rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link{padding:.5rem .6rem;color:#fff;font-size:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon{color:#fff;margin-right:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text{color:#fff}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover{background:none;color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-text{color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:focus{box-shadow:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i3.OverlayPanel, selector: "p-overlayPanel", inputs: ["dismissable", "showCloseIcon", "style", "styleClass", "appendTo", "autoZIndex", "ariaCloseLabel", "baseZIndex", "focusOnShow", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "component", type: i4.Menu, selector: "p-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "directive", type: i5.Ripple, selector: "[pRipple]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: MenuButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ewc-menu-button', encapsulation: ViewEncapsulation.None, template: "<button\n\tpButton\n\tpRipple\n\ttype=\"button\"\n\ticon=\"pi pi-cog\"\n\tclass=\"ew_EventActions__Button ew_EventActions__Button--Edit\"\n\t(click)=\"op.toggle($event)\">\n</button>\n<p-overlayPanel #op styleClass=\"ew_EventActions__Panel\">\n\t<p-menu *ngIf=\"menu && menu.length > 0\" [model]=\"menu\" styleClass=\"ew_MenuButton__Menu\"></p-menu>\n</p-overlayPanel>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\";body{font-family:Roboto,Lucida Grande,Tahoma,sans-serif;font-size:1rem;color:#091433;margin:0}a{color:#3578e4;text-decoration:none}a:hover{color:#6296ea;text-decoration:none}h1{font-size:3rem;line-height:3.5rem}h2{font-size:2.5rem;line-height:3rem}h3{font-size:2rem;line-height:2.5rem}h4{font-size:1.5rem;line-height:2rem}h5{font-size:1rem;line-height:1.2rem}h6{font-size:.8rem;line-height:1rem}.smooth,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link,.p-dialog .p-dialog-header .p-dialog-header-icon,.p-button{transition:opacity .5s ease-in-out}.darkGradient,.ew_EventActions__Panel{background:#000000;background:linear-gradient(10deg,#000000 0%,#091433 70%,#091433 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=$black,endColorstr=$dark,GradientType=1)}.p-link:focus{box-shadow:none}.p-inputtext:enabled:focus{box-shadow:none;border-color:#7671f4}.p-button{border-radius:1rem}.p-button:focus{box-shadow:none}.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus{box-shadow:none}.p-panel .p-panel-header .p-panel-header-icon:focus{box-shadow:none}.p-button{background-color:#7671f4;border-color:#7671f4}.p-button:enabled:hover{background-color:#5f59f2;border-color:#5f59f2}.p-dropdown:not(.p-disabled).p-focus{box-shadow:none;border-color:#7671f4}.p-dropdown-panel .p-dropdown-items{padding:0}.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#7671f4;color:#fff;border-color:#7671f4}.p-paginator .p-paginator-first,.p-paginator .p-paginator-prev,.p-paginator .p-paginator-next,.p-paginator .p-paginator-last{color:#091433}.p-paginator .p-paginator-pages .p-paginator-page{color:#091433;background-color:#7671f41a}.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover{color:#7671f4;background-color:transparent}.p-datatable .p-datatable-thead>tr>th{border:none;padding-bottom:.5rem}.p-datatable .p-sortable-column:not(.p-highlight):hover{background:none;color:#091433}.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon{color:#7671f4}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{font-size:.8rem;color:gray}.p-column-filter-menu-button.p-column-filter-menu-button-active,.p-column-filter-menu-button.p-column-filter-menu-button-active:hover{background-color:#7671f4;color:#fff}.p-column-filter-overlay .p-column-filter-row-items{padding:0;font-size:.8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item{font-size:.8rem;padding:.5rem .8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator{margin:0}.p-dialog .p-dialog-header{padding:.5rem;color:#fff;background-color:#7671f4;font-size:1rem}.p-dialog .p-dialog-header .p-dialog-title{font-size:1rem}.p-dialog .p-dialog-header .p-dialog-header-icon{width:1.2rem;height:1.2rem;color:#fff}.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover{color:#091433}.p-dialog.p-confirm-dialog .p-confirm-dialog-icon{font-size:1rem}.p-dialog .p-dialog-content{padding:2rem 1rem}.p-dialog .p-dialog-footer{padding:.5rem 1rem}.p-dialog .p-dialog-footer button:last-child{margin-right:0}.p-dialog .p-dialog-footer button{padding-top:.2rem;padding-bottom:.2rem}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept{background-color:#fff;border:2px solid #7671F4;color:#7671f4}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept:hover{background-color:#7671f4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject{background-color:#7671f4;border:2px solid #7671F4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject:hover{background-color:#5f59f2;border-color:#5f59f2;color:#fff}.p-tag{border-radius:2rem;font-size:.512rem;text-transform:uppercase;padding:.1rem .4rem}.p-tag.p-tag-success{background-color:#00cf80}.p-tag.p-tag-danger{background-color:#f02c56}.ew_EventActions__Panel{color:#fff;border-color:transparent;border-radius:2rem}.ew_EventActions__Panel:before,.ew_EventActions__Panel:after{display:none}.ew_EventActions__Panel .p-overlaypanel-content{padding:1rem}.ew_MenuButton__Menu{margin-top:0;background:none;border:none;padding:0;min-width:8rem;width:auto;max-width:12.5rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link{padding:.5rem .6rem;color:#fff;font-size:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon{color:#fff;margin-right:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text{color:#fff}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover{background:none;color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-text{color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:focus{box-shadow:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { wrapperClassNames: [{
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
            }], appendTo: [{
                type: Input
            }], menu: [{
                type: Input
            }], action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXdjL3NyYy9saWIvY29tcG9uZW50cy9fYnV0dG9ucy9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ld2Mvc3JjL2xpYi9jb21wb25lbnRzL19idXR0b25zL21lbnUtYnV0dG9uL21lbnUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBVXRJLE1BQU0sT0FBTyxtQkFBbUI7SUFVL0I7UUFSK0Isc0JBQWlCLEdBQVcsRUFBRSxDQUFBO1FBQ3BELGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFlLEVBQWdCLENBQUM7UUFDbkMsV0FBTSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQWN0Rjs7OztXQUlHO1FBQ0gsd0JBQW1CLEdBQUcsQ0FBQyxJQUFnQixFQUFRLEVBQUU7WUFDaEQsTUFBTSxLQUFLLEdBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMvRCxPQUFPLElBQUksQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ0gsa0JBQWEsR0FBRyxDQUFDLElBQXdCLEVBQUUsS0FBVSxFQUFRLEVBQUU7WUFDOUQsTUFBTSxNQUFNLEdBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFBO0lBakNELENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ1AsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6RSxDQUFDOztnSEFwQlcsbUJBQW1CO29HQUFuQixtQkFBbUIsbVNDVmhDLGtYQVVpQjsyRkRBSixtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0MsaUJBQWlCLGlCQUdaLGlCQUFpQixDQUFDLElBQUk7MEVBSU4saUJBQWlCO3NCQUEvQyxXQUFXO3VCQUFDLE9BQU87O3NCQUFHLEtBQUs7Z0JBQ25CLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBhY3Rpb25FdmVudFR5cGUgfSBmcm9tICcuLi8uLi90eXBlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZXdjLW1lbnUtYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL21lbnUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbWVudS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCkgd3JhcHBlckNsYXNzTmFtZXM6IHN0cmluZyA9ICcnXG5cdEBJbnB1dCgpIGNsYXNzTmFtZXM6IHN0cmluZyA9ICcnO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcnO1xuXHRASW5wdXQoKSBhcHBlbmRUbzogYW55ID0gJyc7XG5cdEBJbnB1dCgpIG1lbnU6IE1lbnVJdGVtW10gPSBbXSBhcyBNZW51SXRlbVtdO1xuXHRAT3V0cHV0KCkgYWN0aW9uOiBFdmVudEVtaXR0ZXI8YWN0aW9uRXZlbnRUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXI8YWN0aW9uRXZlbnRUeXBlPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdFxuXHR9XG5cblx0LyoqXG5cdCAqICBAZGVzY3JpcHRpb24gQXQgaW5pdCBvZiB0aGUgY29tcG9uZW50IEkgYXR0YWNoIGFuIEFjdGlvbkV2ZW50IGludG8gdGhlIE1lbnVJdGVtc1xuXHQgKiAgQHJldHVybiB7Vm9pZEZ1bmN0aW9ufVxuXHQgKi9cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51ICYmIHRoaXMubWVudS5sZW5ndGggPiAwICYmIHRoaXMuYXR0YWNoQ29tbWFuZEFjdGlvbih0aGlzLm1lbnUpXG5cdH1cblxuXHQvKipcblx0ICogIEBkZXNjcmlwdGlvbiBJIGF0dGFjaCBhIGNvbW1hbmQgQWN0aW9uRXZlbnQgZm9yIGVhY2ggbWVudSBpdGVtcyB0aGF0IHdpbGwgYmUgZW1pdHRlZCBmb3IgdGhlIHBhcmVudCBjb21wb25lbnRcblx0ICogIEBwYXJhbSB7TWVudUl0ZW1bXX0gbWVudVxuXHQgKiAgQHJldHVybiB7Vm9pZEZ1bmN0aW9ufVxuXHQgKi9cblx0YXR0YWNoQ29tbWFuZEFjdGlvbiA9IChtZW51OiBNZW51SXRlbVtdKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgX21lbnU6IE1lbnVJdGVtW10gPSBbLi4ubWVudV07XG5cdFx0X21lbnUubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRpdGVtLmNvbW1hbmQgPSAoZXZlbnQpID0+IHRoaXMuaGFuZGxlQWN0aW9ucyhpdGVtLmxhYmVsLCBldmVudClcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogIEBkZXNjcmlwdGlvbiBJIG1vdW50IHRoZSBNYXAgdHlwZSBhY3Rpb24gZXZlbnQgYW5kIEkgZW1pdCBpdCBpbnRvIHRoZSBwYXJlbnQgY29tcG9uZW50XG5cdCAqIFx0SWYgdGhlIGV2ZW50IGlzIGFscmVhZHkgYSBNYXAgdHlwZSBJIGdldCBhbmQgcmVtb3VudCBkYXRhIGluIGEgbmV3IG9uZVxuXHQgKiAgQHBhcmFtIHtzdHJpbmcgfCB1bmRlZmluZWR9IHR5cGVcblx0ICogIEBwYXJhbSB7QW55fSBldmVudFxuXHQgKiAgQHJldHVybiB7Vm9pZEZ1bmN0aW9ufVxuXHQgKi9cblx0aGFuZGxlQWN0aW9ucyA9ICh0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcblx0XHRjb25zdCBhY3Rpb246IGFjdGlvbkV2ZW50VHlwZSA9IHsgdHlwZTogdHlwZSwgdmFsdWU6IGV2ZW50IH07XG5cdFx0dGhpcy5hY3Rpb24uZW1pdChhY3Rpb24pXG5cdH1cblxufVxuIiwiPGJ1dHRvblxuXHRwQnV0dG9uXG5cdHBSaXBwbGVcblx0dHlwZT1cImJ1dHRvblwiXG5cdGljb249XCJwaSBwaS1jb2dcIlxuXHRjbGFzcz1cImV3X0V2ZW50QWN0aW9uc19fQnV0dG9uIGV3X0V2ZW50QWN0aW9uc19fQnV0dG9uLS1FZGl0XCJcblx0KGNsaWNrKT1cIm9wLnRvZ2dsZSgkZXZlbnQpXCI+XG48L2J1dHRvbj5cbjxwLW92ZXJsYXlQYW5lbCAjb3Agc3R5bGVDbGFzcz1cImV3X0V2ZW50QWN0aW9uc19fUGFuZWxcIj5cblx0PHAtbWVudSAqbmdJZj1cIm1lbnUgJiYgbWVudS5sZW5ndGggPiAwXCIgW21vZGVsXT1cIm1lbnVcIiBzdHlsZUNsYXNzPVwiZXdfTWVudUJ1dHRvbl9fTWVudVwiPjwvcC1tZW51PlxuPC9wLW92ZXJsYXlQYW5lbD4iXX0=