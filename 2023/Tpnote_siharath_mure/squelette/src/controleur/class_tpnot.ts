type TEvalForm = {
    divAffichagte: HTMLElement;
    divFormBoutons: HTMLElement;
    liste: HTMLSelectElement;
    divFormulaire: HTMLElement;
    radioSolo: HTMLInputElement;
    radioGroupe: HTMLInputElement;
    mini: HTMLInputElement;
    radioAutre: HTMLInputElement;
    edtFrTitle: HTMLInputElement;
    miniLabel: HTMLInputElement;
    edtOrTitle: HTMLInputElement;
    nbSaison: HTMLInputElement;
    labelTitre: HTMLElement;
    btnAjouter: HTMLInputElement;
    btnRetirer: HTMLInputElement;
    btnValider: HTMLInputElement;
    btnAnnuler: HTMLInputElement;
    texteSeries: HTMLParagraphElement;
};

class VueEval {
    private _form: TEvalForm;

    init(form: TEvalForm): void {
        this._form = form;
        this.form.labelTitre.hidden = true;

        this.form.divFormulaire.hidden = true;
        this.form.mini.hidden = true;
        this.form.miniLabel.hidden = true;
        this.form.texteSeries.textContent =
            "Nombre de serie répertorier : " + this.form.liste.length;

        this.form.btnAjouter.onclick = function(): void {
            vueEval.afficheFormulaire();
            vueEval.masquerListe();
        };
        this.form.btnAnnuler.onclick = function(): void {
            vueEval.cacherFromulaire();
            vueEval.resetForm();
            vueEval.afficherListe();
        };
        this.form.btnRetirer.onclick = function(): void {
            vueEval.supprimerLigne();
        };
        this.form.btnValider.onclick = function(): void {
            vueEval.ajouterLigne();
            vueEval.afficherListe();
        };
        this.form.nbSaison.onchange = function(): void {
            vueEval.Mini();
        };
    }

    get form(): TEvalForm {
        return this._form;
    }

    Mini(): void {
        let nbSaison = this.form.nbSaison.value;
        if (parseInt(nbSaison) > 0 && parseInt(nbSaison) <= 5) {
            this.form.mini.hidden = false;
            this.form.miniLabel.hidden = false;
        } else {
            this.form.mini.hidden = true;
            this.form.miniLabel.hidden = true;
            this.form.mini.checked = false;
        }
    }

    masquerListe(): void{
        this.form.liste.disabled = true;
        this.form.btnRetirer.disabled = true;
        this.form.btnAjouter.disabled = true;
    }

    afficherListe(): void{
        this.form.liste.disabled = false;
        this.form.btnRetirer.disabled = false;
        this.form.btnAjouter.disabled = false;
    }

    resetForm(): void {
        this.form.edtOrTitle.value = "";
        this.form.edtFrTitle.value = "";
        this.form.nbSaison.value = "";
        this.form.mini.checked = false;
        this.form.radioAutre.checked = false;
        this.form.radioGroupe.checked = false;
        this.form.radioSolo.checked = false;
    }

    afficheFormulaire(): void {
        this.form.divFormulaire.style.display = "grid";
        this.form.labelTitre.hidden = false;
    }
    cacherFromulaire(): void {
        this.form.divFormulaire.style.display = "none";
        this.form.labelTitre.hidden = true;

        this.form.nbSaison.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";

        this.form.radioSolo.checked = false;

        this.form.radioGroupe.checked = false;
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

    ajouterLigne(): void {
        let erreur: string = "";
        const titreOr = this.form.edtOrTitle.value.trim();
        const titreFr = this.form.edtFrTitle.value.trim();
        const nbSaison = this.form.nbSaison.value.trim();
        const radsolo = this.form.radioSolo;
        const radgr = this.form.radioGroupe;
        const radAutre = this.form.radioAutre;
        let plage = "plage";
        let mini = "mini";
        let plursaison = "s";

        if (parseInt(nbSaison) > 1) {
            plage += plursaison;
        }

        if (titreFr.length === 0) {
            erreur += "Saisir titre \n";
        }

        if (nbSaison.length === 0) {
            erreur += "Saisir un interprète\n";
        }

        if (parseInt(nbSaison) < 0) {
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
                        nbSaison +
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
                        nbSaison +
                        " " +
                        plage,
                    ),
                );
            }

            this.form.texteSeries.textContent =
                "Nombre d'album répertorier : " + liste.length;

            this.cacherFromulaire();
        } else {
            alert("Erreur dans le formulaire\n" + erreur);
        }
    }
}
let vueEval = new VueEval();
export { vueEval };
