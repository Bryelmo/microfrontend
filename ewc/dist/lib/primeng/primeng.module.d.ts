import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/autocomplete";
import * as i3 from "primeng/calendar";
import * as i4 from "primeng/cascadeselect";
import * as i5 from "primeng/checkbox";
import * as i6 from "primeng/chips";
import * as i7 from "primeng/colorpicker";
import * as i8 from "primeng/dropdown";
import * as i9 from "primeng/editor";
import * as i10 from "primeng/inputmask";
import * as i11 from "primeng/inputswitch";
import * as i12 from "primeng/inputtext";
import * as i13 from "primeng/inputtextarea";
import * as i14 from "primeng/inputnumber";
import * as i15 from "primeng/knob";
import * as i16 from "primeng/keyfilter";
import * as i17 from "primeng/listbox";
import * as i18 from "primeng/multiselect";
import * as i19 from "primeng/password";
import * as i20 from "primeng/radiobutton";
import * as i21 from "primeng/rating";
import * as i22 from "primeng/slider";
import * as i23 from "primeng/selectbutton";
import * as i24 from "primeng/togglebutton";
import * as i25 from "primeng/treeselect";
import * as i26 from "primeng/tristatecheckbox";
import * as i27 from "primeng/button";
import * as i28 from "primeng/splitbutton";
import * as i29 from "primeng/speeddial";
import * as i30 from "primeng/dataview";
import * as i31 from "primeng/gmap";
import * as i32 from "primeng/orderlist";
import * as i33 from "primeng/organizationchart";
import * as i34 from "primeng/paginator";
import * as i35 from "primeng/picklist";
import * as i36 from "primeng/table";
import * as i37 from "primeng/timeline";
import * as i38 from "primeng/tree";
import * as i39 from "primeng/treetable";
import * as i40 from "primeng/virtualscroller";
import * as i41 from "primeng/scroller";
import * as i42 from "primeng/accordion";
import * as i43 from "primeng/card";
import * as i44 from "primeng/divider";
import * as i45 from "primeng/fieldset";
import * as i46 from "primeng/panel";
import * as i47 from "primeng/splitter";
import * as i48 from "primeng/scrollpanel";
import * as i49 from "primeng/tabview";
import * as i50 from "primeng/toolbar";
import * as i51 from "primeng/confirmdialog";
import * as i52 from "primeng/confirmpopup";
import * as i53 from "primeng/dialog";
import * as i54 from "primeng/dynamicdialog";
import * as i55 from "primeng/overlaypanel";
import * as i56 from "primeng/sidebar";
import * as i57 from "primeng/tooltip";
import * as i58 from "primeng/fileupload";
import * as i59 from "primeng/menu";
import * as i60 from "primeng/breadcrumb";
import * as i61 from "primeng/contextmenu";
import * as i62 from "primeng/dock";
import * as i63 from "primeng/megamenu";
import * as i64 from "primeng/menubar";
import * as i65 from "primeng/panelmenu";
import * as i66 from "primeng/slidemenu";
import * as i67 from "primeng/steps";
import * as i68 from "primeng/tabmenu";
import * as i69 from "primeng/tieredmenu";
import * as i70 from "primeng/chart";
import * as i71 from "primeng/messages";
import * as i72 from "primeng/message";
import * as i73 from "primeng/toast";
import * as i74 from "primeng/carousel";
import * as i75 from "primeng/galleria";
import * as i76 from "primeng/image";
import * as i77 from "primeng/dragdrop";
import * as i78 from "primeng/avatar";
import * as i79 from "primeng/badge";
import * as i80 from "primeng/blockui";
import * as i81 from "primeng/captcha";
import * as i82 from "primeng/chip";
import * as i83 from "primeng/inplace";
import * as i84 from "primeng/progressbar";
import * as i85 from "primeng/progressspinner";
import * as i86 from "primeng/scrolltop";
import * as i87 from "primeng/skeleton";
import * as i88 from "primeng/tag";
import * as i89 from "primeng/terminal";
import * as i90 from "primeng/defer";
import * as i91 from "primeng/focustrap";
import * as i92 from "primeng/styleclass";
import * as i93 from "primeng/ripple";
import * as i94 from "primeng/autofocus";
import * as i95 from "primeng/animate";
export declare class PrimengModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PrimengModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PrimengModule, never, [typeof i1.CommonModule], [typeof i2.AutoCompleteModule, typeof i3.CalendarModule, typeof i4.CascadeSelectModule, typeof i5.CheckboxModule, typeof i6.ChipsModule, typeof i7.ColorPickerModule, typeof i8.DropdownModule, typeof i9.EditorModule, typeof i10.InputMaskModule, typeof i11.InputSwitchModule, typeof i12.InputTextModule, typeof i13.InputTextareaModule, typeof i14.InputNumberModule, typeof i15.KnobModule, typeof i16.KeyFilterModule, typeof i17.ListboxModule, typeof i18.MultiSelectModule, typeof i19.PasswordModule, typeof i20.RadioButtonModule, typeof i21.RatingModule, typeof i22.SliderModule, typeof i23.SelectButtonModule, typeof i24.ToggleButtonModule, typeof i25.TreeSelectModule, typeof i26.TriStateCheckboxModule, typeof i27.ButtonModule, typeof i28.SplitButtonModule, typeof i29.SpeedDialModule, typeof i30.DataViewModule, typeof i31.GMapModule, typeof i32.OrderListModule, typeof i33.OrganizationChartModule, typeof i34.PaginatorModule, typeof i35.PickListModule, typeof i36.TableModule, typeof i37.TimelineModule, typeof i38.TreeModule, typeof i39.TreeTableModule, typeof i40.VirtualScrollerModule, typeof i41.ScrollerModule, typeof i42.AccordionModule, typeof i43.CardModule, typeof i44.DividerModule, typeof i45.FieldsetModule, typeof i46.PanelModule, typeof i47.SplitterModule, typeof i48.ScrollPanelModule, typeof i49.TabViewModule, typeof i50.ToolbarModule, typeof i51.ConfirmDialogModule, typeof i52.ConfirmPopupModule, typeof i53.DialogModule, typeof i54.DynamicDialogModule, typeof i55.OverlayPanelModule, typeof i56.SidebarModule, typeof i57.TooltipModule, typeof i58.FileUploadModule, typeof i59.MenuModule, typeof i60.BreadcrumbModule, typeof i61.ContextMenuModule, typeof i62.DockModule, typeof i63.MegaMenuModule, typeof i64.MenubarModule, typeof i65.PanelMenuModule, typeof i66.SlideMenuModule, typeof i67.StepsModule, typeof i68.TabMenuModule, typeof i69.TieredMenuModule, typeof i70.ChartModule, typeof i71.MessagesModule, typeof i72.MessageModule, typeof i73.ToastModule, typeof i74.CarouselModule, typeof i75.GalleriaModule, typeof i76.ImageModule, typeof i77.DragDropModule, typeof i78.AvatarModule, typeof i79.BadgeModule, typeof i80.BlockUIModule, typeof i81.CaptchaModule, typeof i82.ChipModule, typeof i83.InplaceModule, typeof i84.ProgressBarModule, typeof i85.ProgressSpinnerModule, typeof i86.ScrollTopModule, typeof i87.SkeletonModule, typeof i88.TagModule, typeof i89.TerminalModule, typeof i90.DeferModule, typeof i91.FocusTrapModule, typeof i92.StyleClassModule, typeof i93.RippleModule, typeof i94.AutoFocusModule, typeof i95.AnimateModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PrimengModule>;
}
