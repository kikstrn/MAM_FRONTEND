export class SidenavModel {
    sidenavWidth: number;
	search: string;
	route: string;
	routeName: string;
	typingTimer: any;
	doneTypingInterval: number;
	constructor() {
        this.routeName = 'Connexion';
        this.sidenavWidth = 4;
        this.doneTypingInterval = 1000;
    }
}