import { Meta, moduleMetadata, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogButtonComponent } from './confirm-dialog-button.component';

const meta: Meta<ConfirmDialogButtonComponent> = {
	title: 'Buttons/ConfirmDialogButton',
	component: ConfirmDialogButtonComponent,
	tags: ['autodocs'],
	decorators: [moduleMetadata({
		imports: [
			BrowserAnimationsModule,
			ButtonModule,
			ConfirmDialogModule
		],
		declarations: [],
		providers: [ConfirmationService],
		schemas: []
	}),
	componentWrapperDecorator((story) => `<div style="width: 100%">${story}</div>`)],
	argTypes: {
		wrapperClassNames: { description: 'Custom CSS classes as component wraps' },
		classNames: { description: 'Custom CSS classes' },
		label: { description: 'Button label'},
		icon: { description: 'Button icon'},
		dialogTitle: { description: 'Head title for the dialog box'},
		dialogIcon: { description: 'Icon for the dialog box message'},
		dialogMessage: { description: 'Dialog box message'},
		action: { description: 'The Event action emitted for the parent component' },
	},
	parameters: {
		docs: {
			description: {
				component: `Component that uses [PrimeNg Button](https://primeng.org/button), [PrimeNg Icons](https://primeng.org/icons) 
							and [PrimeNg Confirm Dialog](https://primeng.org/confirmdialog) to create an editable button that opens
							a Confirmation popup box and emit an event for the parent component.<br><br>
							• **[wrapperClassNames]** string data used for put CSS classes on the component tag element<br>
							• **[classNames]** string data used for put CSS classes to extend the default CSS com≤ponent class<br>
							• **[label]** the button label<br>
							• **[icon]** a PrimeIcons string CSS class for the button icon<br>
							• ** [dialogTitle]** a string title used as head title for the dialog pop up box<br>
							• ** [dialogIcon]** a PrimeIcons string CSS class for the pop up text icon<br>
							• ** [dialogMessage]** a string text for the dialog popup box<br>
							• **(action)** Map data event action dispathed from the child component to the parent.`
			}
		}
	},
};

export default meta;
type Story = StoryObj<ConfirmDialogButtonComponent>;


export const _ConfirmDialogButtonComponent: Story = {
	args: {
		wrapperClassNames: '',
		classNames: '',
		label: 'Button',
		icon: 'pi-check', 
		dialogTitle: 'Confirmation',
		dialogIcon: 'pi-exclamation-triangle' ,
		dialogMessage: 'This is the warning text'
	},
};
