import * as i0 from '@angular/core';
import { NgModule, EventEmitter, Component, ViewEncapsulation, HostBinding, Input, Output, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import * as i2 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { DataViewModule } from 'primeng/dataview';
import { GMapModule } from 'primeng/gmap';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ScrollerModule } from 'primeng/scroller';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import * as i3 from 'primeng/confirmdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import * as i3$1 from 'primeng/overlaypanel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import * as i4$1 from 'primeng/menu';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DockModule } from 'primeng/dock';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChartModule } from 'primeng/chart';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DragDropModule } from 'primeng/dragdrop';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { CaptchaModule } from 'primeng/captcha';
import { ChipModule } from 'primeng/chip';
import { InplaceModule } from 'primeng/inplace';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { DeferModule } from 'primeng/defer';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import * as i4 from 'primeng/ripple';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateModule } from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i1 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

class PrimengModule {
}
PrimengModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: PrimengModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrimengModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: PrimengModule, imports: [CommonModule], exports: [
        // PrimeNG Form
        AutoCompleteModule,
        CalendarModule,
        CascadeSelectModule,
        CheckboxModule,
        ChipsModule,
        ColorPickerModule,
        DropdownModule,
        EditorModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        KnobModule,
        KeyFilterModule,
        ListboxModule,
        MultiSelectModule,
        PasswordModule,
        RadioButtonModule,
        RatingModule,
        SliderModule,
        SelectButtonModule,
        ToggleButtonModule,
        TreeSelectModule,
        TriStateCheckboxModule,
        // PrimeNG Button
        ButtonModule,
        SplitButtonModule,
        SpeedDialModule,
        // PrimeNG Data
        DataViewModule,
        GMapModule,
        OrderListModule,
        OrganizationChartModule,
        PaginatorModule,
        PickListModule,
        TableModule,
        TimelineModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ScrollerModule,
        // PrimeNG Panel
        AccordionModule,
        CardModule,
        DividerModule,
        FieldsetModule,
        PanelModule,
        SplitterModule,
        ScrollPanelModule,
        TabViewModule,
        ToolbarModule,
        // PrimeNG Overlay
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        DynamicDialogModule,
        OverlayPanelModule,
        SidebarModule,
        TooltipModule,
        // PrimeNG File
        FileUploadModule,
        // PrimeNG Menu
        MenuModule,
        BreadcrumbModule,
        ContextMenuModule,
        DockModule,
        MegaMenuModule,
        MenubarModule,
        PanelMenuModule,
        SlideMenuModule,
        StepsModule,
        TabMenuModule,
        TieredMenuModule,
        // PrimeNG Chart
        ChartModule,
        // PrimeNG Message
        MessagesModule,
        MessageModule,
        ToastModule,
        // PrimeNG Media
        CarouselModule,
        GalleriaModule,
        ImageModule,
        // PrimeNG Drag&Drop
        DragDropModule,
        // PrimeNG Misc
        AvatarModule,
        BadgeModule,
        BlockUIModule,
        CaptchaModule,
        ChipModule,
        InplaceModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        ScrollTopModule,
        SkeletonModule,
        TagModule,
        TerminalModule,
        // PrimeNG Directive
        DeferModule,
        FocusTrapModule,
        StyleClassModule,
        RippleModule,
        AutoFocusModule,
        AnimateModule
    ] });
PrimengModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: PrimengModule, imports: [CommonModule,
        // PrimeNG Form
        AutoCompleteModule,
        CalendarModule,
        CascadeSelectModule,
        CheckboxModule,
        ChipsModule,
        ColorPickerModule,
        DropdownModule,
        EditorModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        KnobModule,
        KeyFilterModule,
        ListboxModule,
        MultiSelectModule,
        PasswordModule,
        RadioButtonModule,
        RatingModule,
        SliderModule,
        SelectButtonModule,
        ToggleButtonModule,
        TreeSelectModule,
        TriStateCheckboxModule,
        // PrimeNG Button
        ButtonModule,
        SplitButtonModule,
        SpeedDialModule,
        // PrimeNG Data
        DataViewModule,
        GMapModule,
        OrderListModule,
        OrganizationChartModule,
        PaginatorModule,
        PickListModule,
        TableModule,
        TimelineModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        ScrollerModule,
        // PrimeNG Panel
        AccordionModule,
        CardModule,
        DividerModule,
        FieldsetModule,
        PanelModule,
        SplitterModule,
        ScrollPanelModule,
        TabViewModule,
        ToolbarModule,
        // PrimeNG Overlay
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        DynamicDialogModule,
        OverlayPanelModule,
        SidebarModule,
        TooltipModule,
        // PrimeNG File
        FileUploadModule,
        // PrimeNG Menu
        MenuModule,
        BreadcrumbModule,
        ContextMenuModule,
        DockModule,
        MegaMenuModule,
        MenubarModule,
        PanelMenuModule,
        SlideMenuModule,
        StepsModule,
        TabMenuModule,
        TieredMenuModule,
        // PrimeNG Chart
        ChartModule,
        // PrimeNG Message
        MessagesModule,
        MessageModule,
        ToastModule,
        // PrimeNG Media
        CarouselModule,
        GalleriaModule,
        ImageModule,
        // PrimeNG Drag&Drop
        DragDropModule,
        // PrimeNG Misc
        AvatarModule,
        BadgeModule,
        BlockUIModule,
        CaptchaModule,
        ChipModule,
        InplaceModule,
        ProgressBarModule,
        ProgressSpinnerModule,
        ScrollTopModule,
        SkeletonModule,
        TagModule,
        TerminalModule,
        // PrimeNG Directive
        DeferModule,
        FocusTrapModule,
        StyleClassModule,
        RippleModule,
        AutoFocusModule,
        AnimateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: PrimengModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule],
                    exports: [
                        // PrimeNG Form
                        AutoCompleteModule,
                        CalendarModule,
                        CascadeSelectModule,
                        CheckboxModule,
                        ChipsModule,
                        ColorPickerModule,
                        DropdownModule,
                        EditorModule,
                        InputMaskModule,
                        InputSwitchModule,
                        InputTextModule,
                        InputTextareaModule,
                        InputNumberModule,
                        KnobModule,
                        KeyFilterModule,
                        ListboxModule,
                        MultiSelectModule,
                        PasswordModule,
                        RadioButtonModule,
                        RatingModule,
                        SliderModule,
                        SelectButtonModule,
                        ToggleButtonModule,
                        TreeSelectModule,
                        TriStateCheckboxModule,
                        // PrimeNG Button
                        ButtonModule,
                        SplitButtonModule,
                        SpeedDialModule,
                        // PrimeNG Data
                        DataViewModule,
                        GMapModule,
                        OrderListModule,
                        OrganizationChartModule,
                        PaginatorModule,
                        PickListModule,
                        TableModule,
                        TimelineModule,
                        TreeModule,
                        TreeTableModule,
                        VirtualScrollerModule,
                        ScrollerModule,
                        // PrimeNG Panel
                        AccordionModule,
                        CardModule,
                        DividerModule,
                        FieldsetModule,
                        PanelModule,
                        SplitterModule,
                        ScrollPanelModule,
                        TabViewModule,
                        ToolbarModule,
                        // PrimeNG Overlay
                        ConfirmDialogModule,
                        ConfirmPopupModule,
                        DialogModule,
                        DynamicDialogModule,
                        OverlayPanelModule,
                        SidebarModule,
                        TooltipModule,
                        // PrimeNG File
                        FileUploadModule,
                        // PrimeNG Menu
                        MenuModule,
                        BreadcrumbModule,
                        ContextMenuModule,
                        DockModule,
                        MegaMenuModule,
                        MenubarModule,
                        PanelMenuModule,
                        SlideMenuModule,
                        StepsModule,
                        TabMenuModule,
                        TieredMenuModule,
                        // PrimeNG Chart
                        ChartModule,
                        // PrimeNG Message
                        MessagesModule,
                        MessageModule,
                        ToastModule,
                        // PrimeNG Media
                        CarouselModule,
                        GalleriaModule,
                        ImageModule,
                        // PrimeNG Drag&Drop
                        DragDropModule,
                        // PrimeNG Misc
                        AvatarModule,
                        BadgeModule,
                        BlockUIModule,
                        CaptchaModule,
                        ChipModule,
                        InplaceModule,
                        ProgressBarModule,
                        ProgressSpinnerModule,
                        ScrollTopModule,
                        SkeletonModule,
                        TagModule,
                        TerminalModule,
                        // PrimeNG Directive
                        DeferModule,
                        FocusTrapModule,
                        StyleClassModule,
                        RippleModule,
                        AutoFocusModule,
                        AnimateModule
                    ]
                }]
        }] });

var buttonsActionTypes;
(function (buttonsActionTypes) {
    buttonsActionTypes["ACCEPT"] = "Accept";
    buttonsActionTypes["REJECT"] = "Reject";
})(buttonsActionTypes || (buttonsActionTypes = {}));

class ConfirmDialogButtonComponent {
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

class MenuButtonComponent {
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
MenuButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: MenuButtonComponent, selector: "ewc-menu-button", inputs: { wrapperClassNames: "wrapperClassNames", classNames: "classNames", label: "label", icon: "icon", appendTo: "appendTo", menu: "menu" }, outputs: { action: "action" }, host: { properties: { "class": "this.wrapperClassNames" } }, ngImport: i0, template: "<button\n\tpButton\n\tpRipple\n\ttype=\"button\"\n\ticon=\"pi pi-cog\"\n\tclass=\"ew_EventActions__Button ew_EventActions__Button--Edit\"\n\t(click)=\"op.toggle($event)\">\n</button>\n<p-overlayPanel #op styleClass=\"ew_EventActions__Panel\">\n\t<p-menu *ngIf=\"menu && menu.length > 0\" [model]=\"menu\" styleClass=\"ew_MenuButton__Menu\"></p-menu>\n</p-overlayPanel>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap\";body{font-family:Roboto,Lucida Grande,Tahoma,sans-serif;font-size:1rem;color:#091433;margin:0}a{color:#3578e4;text-decoration:none}a:hover{color:#6296ea;text-decoration:none}h1{font-size:3rem;line-height:3.5rem}h2{font-size:2.5rem;line-height:3rem}h3{font-size:2rem;line-height:2.5rem}h4{font-size:1.5rem;line-height:2rem}h5{font-size:1rem;line-height:1.2rem}h6{font-size:.8rem;line-height:1rem}.smooth,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text,.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link,.p-dialog .p-dialog-header .p-dialog-header-icon,.p-button{transition:opacity .5s ease-in-out}.darkGradient,.ew_EventActions__Panel{background:#000000;background:linear-gradient(10deg,#000000 0%,#091433 70%,#091433 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=$black,endColorstr=$dark,GradientType=1)}.p-link:focus{box-shadow:none}.p-inputtext:enabled:focus{box-shadow:none;border-color:#7671f4}.p-button{border-radius:1rem}.p-button:focus{box-shadow:none}.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus{box-shadow:none}.p-panel .p-panel-header .p-panel-header-icon:focus{box-shadow:none}.p-button{background-color:#7671f4;border-color:#7671f4}.p-button:enabled:hover{background-color:#5f59f2;border-color:#5f59f2}.p-dropdown:not(.p-disabled).p-focus{box-shadow:none;border-color:#7671f4}.p-dropdown-panel .p-dropdown-items{padding:0}.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-pages .p-paginator-page.p-highlight{background-color:#7671f4;color:#fff;border-color:#7671f4}.p-paginator .p-paginator-first,.p-paginator .p-paginator-prev,.p-paginator .p-paginator-next,.p-paginator .p-paginator-last{color:#091433}.p-paginator .p-paginator-pages .p-paginator-page{color:#091433;background-color:#7671f41a}.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover{background-color:#7671f41a;color:#7671f4}.p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover{color:#7671f4;background-color:transparent}.p-datatable .p-datatable-thead>tr>th{border:none;padding-bottom:.5rem}.p-datatable .p-sortable-column:not(.p-highlight):hover{background:none;color:#091433}.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon{color:#7671f4}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{font-size:.8rem;color:gray}.p-column-filter-menu-button.p-column-filter-menu-button-active,.p-column-filter-menu-button.p-column-filter-menu-button-active:hover{background-color:#7671f4;color:#fff}.p-column-filter-overlay .p-column-filter-row-items{padding:0;font-size:.8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item{font-size:.8rem;padding:.5rem .8rem}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight{background-color:#7671f433;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover{background-color:#7671f41a;color:#7671f4}.p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator{margin:0}.p-dialog .p-dialog-header{padding:.5rem;color:#fff;background-color:#7671f4;font-size:1rem}.p-dialog .p-dialog-header .p-dialog-title{font-size:1rem}.p-dialog .p-dialog-header .p-dialog-header-icon{width:1.2rem;height:1.2rem;color:#fff}.p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover{color:#091433}.p-dialog.p-confirm-dialog .p-confirm-dialog-icon{font-size:1rem}.p-dialog .p-dialog-content{padding:2rem 1rem}.p-dialog .p-dialog-footer{padding:.5rem 1rem}.p-dialog .p-dialog-footer button:last-child{margin-right:0}.p-dialog .p-dialog-footer button{padding-top:.2rem;padding-bottom:.2rem}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept{background-color:#fff;border:2px solid #7671F4;color:#7671f4}.p-dialog .p-dialog-footer button.p-confirm-dialog-accept:hover{background-color:#7671f4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject{background-color:#7671f4;border:2px solid #7671F4;color:#fff}.p-dialog .p-dialog-footer button.p-confirm-dialog-reject:hover{background-color:#5f59f2;border-color:#5f59f2;color:#fff}.p-tag{border-radius:2rem;font-size:.512rem;text-transform:uppercase;padding:.1rem .4rem}.p-tag.p-tag-success{background-color:#00cf80}.p-tag.p-tag-danger{background-color:#f02c56}.ew_EventActions__Panel{color:#fff;border-color:transparent;border-radius:2rem}.ew_EventActions__Panel:before,.ew_EventActions__Panel:after{display:none}.ew_EventActions__Panel .p-overlaypanel-content{padding:1rem}.ew_MenuButton__Menu{margin-top:0;background:none;border:none;padding:0;min-width:8rem;width:auto;max-width:12.5rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link{padding:.5rem .6rem;color:#fff;font-size:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-icon{color:#fff;margin-right:1rem}.ew_MenuButton__Menu.p-menu .p-menuitem-link .p-menuitem-text{color:#fff}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover{background:none;color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-icon,.ew_MenuButton__Menu.p-menu .p-menuitem-link:hover .p-menuitem-text{color:#7671f4}.ew_MenuButton__Menu.p-menu .p-menuitem-link:focus{box-shadow:none}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i3$1.OverlayPanel, selector: "p-overlayPanel", inputs: ["dismissable", "showCloseIcon", "style", "styleClass", "appendTo", "autoZIndex", "ariaCloseLabel", "baseZIndex", "focusOnShow", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "component", type: i4$1.Menu, selector: "p-menu", inputs: ["model", "popup", "style", "styleClass", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "directive", type: i4.Ripple, selector: "[pRipple]" }], encapsulation: i0.ViewEncapsulation.None });
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

class EWCModule {
}
EWCModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: EWCModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EWCModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.1", ngImport: i0, type: EWCModule, declarations: [ConfirmDialogButtonComponent,
        MenuButtonComponent], imports: [BrowserAnimationsModule,
        CommonModule,
        PrimengModule], exports: [ConfirmDialogButtonComponent,
        MenuButtonComponent] });
EWCModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: EWCModule, imports: [BrowserAnimationsModule,
        CommonModule,
        PrimengModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: EWCModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

/*
 * Public API Surface of ewc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ConfirmDialogButtonComponent, EWCModule, MenuButtonComponent, PrimengModule };
//# sourceMappingURL=ewc.mjs.map
