import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '../../core/services/session.service';
import { SidenavModel } from './models/sidenav.model';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

	sidenavModel: SidenavModel = new SidenavModel();
	href: string;
	constructor(private router: Router, public cookieService: CookieService, public readonly sessionService: SessionService) { }

	ngOnInit(): void {
		if (localStorage.getItem('sideNaveState') == 'true') {
			this.toogle();
		}
		this.toogle();	
		this.href = this.router.url;
		console.log(this.href)	
	}

	toogle() {
		const sidebar = document.querySelector('nav');
		if (sidebar) { sidebar.classList.toggle("close") };
		const body = document.querySelector('body');
		if (body) {
			if (document.querySelectorAll('.close').length > 0) {
				body.style.marginLeft = '88px';
				localStorage.setItem('sideNaveState', 'false');
			}
			else {
				body.style.marginLeft = '250px';
				localStorage.setItem('sideNaveState', 'true');
			}
		}
	}

	onSearch(e: any) {
		this.sidenavModel.search = e.target.value;
		clearTimeout(this.sidenavModel.typingTimer);
		this.sidenavModel.typingTimer = setTimeout(() => {
			if (this.sidenavModel.search == "") {
				this.router.navigateByUrl("/jeu");
			}
			else {
				let navigationExtras: NavigationExtras = {
					queryParams: {
						'search': this.sidenavModel.search,
					}
				};
				this.router.navigate(['/jeu'], navigationExtras);
			}
		}, this.sidenavModel.doneTypingInterval);
	}

	routingLoginOrProfil() {
		if (this.cookieService.get('token_mam')) {
			this.sidenavModel.routeName = 'Profil';			
			this.router.navigateByUrl('/profil');
		} else {
			this.sidenavModel.routeName = 'Connexion';
			this.router.navigateByUrl('/connexion');
		}
	}

	logout() {
		//Supprimer variable de session
		this.cookieService.delete('token_mam');
		this.sessionService.clearSession();
		window.location.reload();
	}

	changePage(page: string){
		this.href = "/"+page;
	}

	test(eventData: any) {
		this.sidenavModel.routeName = eventData.routeName;
	}

}

