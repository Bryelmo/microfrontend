import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Form
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

// PrimeNG Button
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

// PrimeNG Data
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

// PrimeNG Panel
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

// PrimeNG Overlay
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

// PrimeNG File
import { FileUploadModule } from 'primeng/fileupload';

// PrimeNG Menu
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

// PrimeNG Chart
import { ChartModule } from 'primeng/chart';

// PrimeNG Message
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

// PrimeNG Media
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

// PrimeNG Drag&Drop
import { DragDropModule } from 'primeng/dragdrop';

// PrimeNG Misc
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

// PrimeNG Directive
import { DeferModule } from 'primeng/defer';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { AnimateModule } from 'primeng/animate';

@NgModule({
	declarations: [],
	imports: [ CommonModule ],
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
})
export class PrimengModule { }
