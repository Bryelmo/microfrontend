import { Meta, moduleMetadata, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { PrimeIcons } from 'primeng/api';
import { MenuButtonComponent } from './menu-button.component';

const meta: Meta<MenuButtonComponent> = {
	title: 'Buttons/MenuButton',
	component: MenuButtonComponent,
	tags: ['autodocs'],
	decorators: [moduleMetadata({
		imports: [
			BrowserAnimationsModule,
			ButtonModule,
			MenuModule,
			OverlayPanelModule
		],
		declarations: [],
		providers: [],
		schemas: []
	}),
	componentWrapperDecorator((story) => `<div style="width: 100%">${story}</div>`)],
	argTypes: {
		wrapperClassNames: { description: 'Custom CSS classes as component wraps' },
		classNames: { description: 'Custom CSS classes' },
		label: { description: 'Button label' },
		icon: { description: 'Button icon' },
		menu: { description: 'The dropdown menu items list' },
		action: { description: 'The Event action emitted for the parent component' },
	},
	parameters: {
		docs: {
			description: {
				component: `Component that uses [PrimeNg Button](https://primeng.org/button), [PrimeNg Icons](https://primeng.org/icons) 
							and [PrimeNg Menu](https://primeng.org/menu) to create an editable button that opens
							a popup menu and emit an event for the parent component.<br><br>
							• **[wrapperClassNames]** string data used for put CSS classes on the component tag element<br>
							• **[classNames]** string data used for put CSS classes to extend the default CSS com≤ponent class<br>
							• **[label]** the button label<br>
							• **[icon]** a PrimeIcons string CSS class for the button icon<br>
							• **[menu]** array data list for show datas using the same structure of [PrimeNg MenuModelItem](https://primeng.org/menumodel)<br>
							• **(action)** Map data event action dispathed from the child component to the parent.`
			}
		}
	},
};

export default meta;
type Story = StoryObj<MenuButtonComponent>;

const sampleDropdownMenu: MenuItem[] = [
	{ label: 'Edit', icon: PrimeIcons.PENCIL },
	{ label: 'Export', icon: PrimeIcons.FILE },
	{ label: 'Duplicate', icon: PrimeIcons.COPY },
	{ label: 'Archive', icon: PrimeIcons.SERVER }
]

export const _MenuButtonComponent: Story = {
	args: {
		wrapperClassNames: '',
		classNames: '',
		label: 'Button',
		icon: 'pi-check',
		menu: sampleDropdownMenu
	},
};
