import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class HomeComponent implements OnInit{

	sampleDropdownMenu: MenuItem[] = [
		{ label: 'Edit', icon: PrimeIcons.PENCIL },
		{ label: 'Export', icon: PrimeIcons.FILE },
		{ label: 'Duplicate', icon: PrimeIcons.COPY },
		{ label: 'Archive', icon: PrimeIcons.SERVER }
	]

	constructor() {}

	ngOnInit(): void {}
}

