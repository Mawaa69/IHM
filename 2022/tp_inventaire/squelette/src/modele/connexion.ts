import * as APIsql from "../modele/sqlWeb.js"

APIsql.sqlWeb.init("https://devweb.iutmetz.univ-lorraine.fr/~siharath5u/IHM/tp_inventaire/vue/","https://devweb.iutmetz.univ-lorraine.fr/~nitschke5/ihm/IHM_API/")

class Connexion {
	constructor() {
		this.init();
	}
	init():void {
		// à adapter avec voter nom de base et vos identifiants de connexion
		APIsql.sqlWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr','3306','siharath5u_bdinventaire', 'siharath5u_appli','32210896', 'utf8');
		
	}
}
let connexion = new Connexion;

export {connexion, APIsql}

