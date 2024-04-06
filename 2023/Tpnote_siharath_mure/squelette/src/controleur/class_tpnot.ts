type TEvalForm = {
    divAffichagte: HTMLElement;
    divFormBoutons: HTMLElement;
    liste: HTMLSelectElement;
    divFormulaire: HTMLElement;
    radiosolo: HTMLInputElement;
    radiogr: HTMLInputElement;
    mini: HTMLInputElement;
    radioAutre: HTMLInputElement;
    edtFrTitle: HTMLInputElement;
    miniLabel: HTMLInputElement;
    edtOrTitle: HTMLInputElement;
    nbsaison: HTMLInputElement;
    labeltitre: HTMLElement;
    labeltitree: HTMLElement;
    btnAjouter: HTMLInputElement;
    btnRetirer: HTMLInputElement;
    btnValider: HTMLInputElement;
    btnAnnuler: HTMLInputElement;
    texteSeries: HTMLElement;
};

class VueEval {
    private _form: TEvalForm;

    init(form: TEvalForm): void {
        this._form = form;
        this._form.labeltitree.hidden = true;

        this._form.divFormulaire.hidden = true;
        this._form.mini.hidden = true;
        this._form.miniLabel.hidden = true;
        this.form.texteSeries.textContent =
            "Nombre de serie répertorier : " + this.form.liste.length;

        this._form.radiogr.onclick = function(): void {
  //          vueEval.afficherOriginal();
        };
        this._form.radioAutre.onclick = function(): void {
 //           vueEval.afficherOriginal();
        };

        this._form.btnAjouter.onclick = function(): void {
            vueEval.afficheFormulaire();
        };
        this._form.btnAnnuler.onclick = function(): void {
            vueEval.cacherformulaire();
            vueEval.resetform();
        };
        this.form.btnRetirer.onclick = function(): void {
            vueEval.supprimerLigne();
        };
        this.form.btnValider.onclick = function(): void {
            vueEval.ajouterligne();
        };
        this.form.nbsaison.onchange = function(): void {
            vueEval.Mini();
        };
    }

    get form(): TEvalForm {
        return this._form;
    }

    Mini(): void {
        let nbsaison = this.form.nbsaison.value;
        if (parseInt(nbsaison) > 0 && parseInt(nbsaison) <= 5) {
            this._form.mini.hidden = false;
            this._form.miniLabel.hidden = false;
        } else {
            this._form.mini.hidden = true;
            this._form.miniLabel.hidden = true;
            this._form.mini.checked = false;
        }
    }


    resetform(): void {
        this.form.edtOrTitle.value = "";
        this.form.edtFrTitle.value = "";
        this.form.nbsaison.value = "";
        this.form.mini.checked = false;
        this.form.radioAutre.checked = false;
        this.form.radiogr.checked = false;
        this.form.radiosolo.checked = false;
    }

/*    afficherOriginal(): void {
        this.form.edtOrTitle.disabled = false;
    }
*/
    afficheFormulaire(): void {
        this.form.divFormulaire.style.display = "grid";
        this._form.labeltitree.hidden = false;
    }
    cacherformulaire(): void {
        this.form.divFormulaire.style.display = "none";
        this.form.labeltitree.hidden = true;

        this.form.nbsaison.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";

        this.form.radiosolo.checked = false;

        this.form.radiogr.checked = false;
        this.form.radioAutre.checked = false;
    }
    supprimerLigne(): void {
        const result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (result === true) {
            const noLigne: number = this.form.liste.selectedIndex;
            if (noLigne > -1) {
                this.form.liste.remove(noLigne);
                this.form.texteSeries.textContent =
                    "Nombre de serie répertorier : " + this.form.liste.length;
            }
        }
    }

    ajouterligne(): void {
        let erreur: string = "";
        const titreOr = this.form.edtOrTitle.value.trim();
        const titreFr = this.form.edtFrTitle.value.trim();
        const nbsaison = this.form.nbsaison.value.trim();
        let plage = "plage";
        let mini = "mini";
        const radsolo = this.form.radiosolo;
        const radgr = this.form.radiogr;
        const radAutre = this.form.radioAutre;
        let plursaison = "s";

        if (parseInt(nbsaison) > 1) {
            plage += plursaison;
        }

        if (titreFr.length === 0) {
            erreur += "Saisir titre \n";
        }

        if (nbsaison.length === 0) {
            erreur += "Saisir un interprète\n";
        }

        if (parseInt(nbsaison) < 0) {
            erreur += "Nombre de plage negatif\n";
        }
        if (!radsolo.checked && !radgr.checked && !radAutre.checked) {
            erreur += "Merci de cocher un type\n";
        }

        if (erreur.length === 0) {
            let type = "";
            if (radsolo.checked) type = "soliste";
            else if (radgr.checked) type = "Groupe";
            else if (radAutre.checked) type = "Autre";

            let liste = this.form.liste;
            if (this.form.mini.checked !== true) {
                liste.options.add(
                    new Option(
                        titreFr +
                        " - " +
                        titreOr +
                        " - " +
                        type +
                        " - " +
                        nbsaison +
                        " " +
                        plage,
                    ),
                );
            } else {
                liste.options.add(
                    new Option(
                        titreFr +
                        " - " +
                        titreOr +
                        " - " +
                        type +
                        " - " +
                        mini +
                        " " +
                        nbsaison +
                        " " +
                        plage,
                    ),
                );
            }

            this.form.texteSeries.textContent =
                "Nombre d'album répertorier : " + liste.length;

            this.cacherformulaire();
        } else {
            alert("Erreur dans le formulaire\n" + erreur);
        }
    }
}
let vueEval = new VueEval();
export { vueEval };
