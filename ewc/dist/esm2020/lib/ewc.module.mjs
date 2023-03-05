import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { ConfirmDialogButtonComponent } from './components/_buttons/confirm-dialog-button/confirm-dialog-button.component';
import { MenuButtonComponent } from './components/_buttons/menu-button/menu-button.component';
import * as i0 from "@angular/core";
export class EWCModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXdjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2V3Yy9zcmMvbGliL2V3Yy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDO0FBQzNILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOztBQW1COUYsTUFBTSxPQUFPLFNBQVM7O3NHQUFULFNBQVM7dUdBQVQsU0FBUyxpQkFkakIsNEJBQTRCO1FBQzVCLG1CQUFtQixhQUd0Qix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGFBQWEsYUFHYiw0QkFBNEI7UUFDNUIsbUJBQW1CO3VHQUlSLFNBQVMsWUFWcEIsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixhQUFhOzJGQVFGLFNBQVM7a0JBaEJyQixRQUFRO21CQUFDO29CQUNULFlBQVksRUFBRTt3QkFDViw0QkFBNEI7d0JBQzVCLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUiw0QkFBNEI7d0JBQzVCLG1CQUFtQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaW1lbmdNb2R1bGUgfSBmcm9tICcuL3ByaW1lbmcvcHJpbWVuZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL19idXR0b25zL2NvbmZpcm0tZGlhbG9nLWJ1dHRvbi9jb25maXJtLWRpYWxvZy1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvX2J1dHRvbnMvbWVudS1idXR0b24vbWVudS1idXR0b24uY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcbiAgICBcdENvbmZpcm1EaWFsb2dCdXR0b25Db21wb25lbnQsXG4gICAgXHRNZW51QnV0dG9uQ29tcG9uZW50XG5cdF0sXG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0UHJpbWVuZ01vZHVsZVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29uZmlybURpYWxvZ0J1dHRvbkNvbXBvbmVudCxcblx0XHRNZW51QnV0dG9uQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBFV0NNb2R1bGUgeyB9XG4iXX0=