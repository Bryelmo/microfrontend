import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
/** 
 *  app.components.ts
 *  @category App
 *  @author Gabriele Morero <gabriele.morero@gmail.com>
 *  @description The Remote app aka the remote app component
 */export class AppComponent implements OnInit {


	constructor() { }

	ngOnInit(): void {}

}
