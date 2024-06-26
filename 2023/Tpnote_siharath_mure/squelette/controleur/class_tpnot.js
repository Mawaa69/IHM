class VueEval {
    init(form) {
        this._form = form;
        this._form.labelTitre.hidden = true;
        this._form.divFormulaire.hidden = true;
        this._form.mini.hidden = true;
        this._form.miniLabel.hidden = true;
        this.form.texteSeries.textContent =
            "Nombre de serie répertorier : " + this.form.liste.length;
        this._form.btnAjouter.onclick = function () {
            vueEval.afficheFormulaire();
        };
        this._form.btnAnnuler.onclick = function () {
            vueEval.cacherFromulaire();
            vueEval.resetForm();
        };
        this.form.btnRetirer.onclick = function () {
            vueEval.supprimerLigne();
        };
        this.form.btnValider.onclick = function () {
            vueEval.ajouterLigne();
        };
        this.form.nbSaison.onchange = function () {
            vueEval.Mini();
        };
    }
    get form() {
        return this._form;
    }
    Mini() {
        let nbSaison = this.form.nbSaison.value;
        if (parseInt(nbSaison) > 0 && parseInt(nbSaison) <= 5) {
            this._form.mini.hidden = false;
            this._form.miniLabel.hidden = false;
        }
        else {
            this._form.mini.hidden = true;
            this._form.miniLabel.hidden = true;
            this._form.mini.checked = false;
        }
    }
    resetForm() {
        this.form.edtOrTitle.value = "";
        this.form.edtFrTitle.value = "";
        this.form.nbSaison.value = "";
        this.form.mini.checked = false;
        this.form.radioAutre.checked = false;
        this.form.radioGroupe.checked = false;
        this.form.radioSolo.checked = false;
    }
    afficheFormulaire() {
        this.form.liste.disabled = true;
        this.form.btnRetirer.disabled = true;
        this.form.btnAjouter.disabled = true;
        this.form.divFormulaire.style.display = "grid";
        this._form.labelTitre.hidden = false;
    }
    cacherFromulaire() {
        this.form.divFormulaire.style.display = "none";
        this.form.labelTitre.hidden = true;
        this.form.nbSaison.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";
        this.form.radioSolo.checked = false;
        this.form.radioGroupe.checked = false;
        this.form.radioAutre.checked = false;
    }
    supprimerLigne() {
        const result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (result === true) {
            const noLigne = this.form.liste.selectedIndex;
            if (noLigne > -1) {
                this.form.liste.remove(noLigne);
                this.form.texteSeries.textContent =
                    "Nombre de serie répertorier : " + this.form.liste.length;
            }
        }
    }
    ajouterLigne() {
        let erreur = "";
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
            if (radsolo.checked)
                type = "soliste";
            else if (radgr.checked)
                type = "Groupe";
            else if (radAutre.checked)
                type = "Autre";
            let liste = this.form.liste;
            if (this.form.mini.checked !== true) {
                liste.options.add(new Option(titreFr +
                    " - " +
                    titreOr +
                    " - " +
                    type +
                    " - " +
                    nbSaison +
                    " " +
                    plage));
            }
            else {
                liste.options.add(new Option(titreFr +
                    " - " +
                    titreOr +
                    " - " +
                    type +
                    " - " +
                    mini +
                    " " +
                    nbSaison +
                    " " +
                    plage));
            }
            this.form.texteSeries.textContent =
                "Nombre d'album répertorier : " + liste.length;
            this.cacherFromulaire();
        }
        else {
            alert("Erreur dans le formulaire\n" + erreur);
        }
    }
}
let vueEval = new VueEval();
export { vueEval };
//# sourceMappingURL=class_tpnot.js.map