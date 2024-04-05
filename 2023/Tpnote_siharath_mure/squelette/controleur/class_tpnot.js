class VueEval {
    get form() {
        return this._form;
    }
    init(form) {
        this._form = form;
        this._form.labeltitree.hidden = true;
        this._form.divFormulaire.hidden = true;
        this._form.mini.hidden = true;
        this._form.miniLabel.hidden = true;
        this.form.texteSeries.textContent =
            "Nombre de serie répertorier : " + this.form.liste.length;
        this._form.radiogr.onclick = function () {
            vueEval.afficherOriginal();
        };
        this._form.radioAutre.onclick = function () {
            vueEval.afficherOriginal();
        };
        this._form.btnAjouter.onclick = function () {
            vueEval.afficheFormulaire();
        };
        this._form.btnAnnuler.onclick = function () {
            vueEval.cacherformulaire();
            vueEval.resetform();
        };
        this.form.btnRetirer.onclick = function () {
            vueEval.supprimerLigne();
        };
        this.form.btnValider.onclick = function () {
            vueEval.ajouterligne();
        };
        this.form.nbsaison.onchange = function () {
            vueEval.Mini();
        };
    }
    Mini() {
        let nbsaison = this.form.nbsaison.value;
        if (parseInt(nbsaison) > 0 && parseInt(nbsaison) <= 5) {
            this._form.mini.hidden = false;
            this._form.miniLabel.hidden = false;
        }
        else {
            this._form.mini.hidden = true;
            this._form.miniLabel.hidden = true;
            this._form.mini.checked = false;
        }
    }
    resetform() {
        this.form.edtOrTitle.value = "";
        this.form.edtFrTitle.value = "";
        this.form.nbsaison.value = "";
        this.form.mini.checked = false;
        this.form.radioAutre.checked = false;
        this.form.radiogr.checked = false;
        this.form.radiosolo.checked = false;
    }
    afficherOriginal() {
        this.form.edtOrTitle.disabled = false;
    }
    afficheFormulaire() {
        this.form.divFormulaire.style.display = "grid";
        this._form.labeltitree.hidden = false;
    }
    cacherformulaire() {
        this.form.divFormulaire.style.display = "none";
        this.form.labeltitree.hidden = true;
        this.form.nbsaison.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";
        this.form.radiosolo.checked = false;
        this.form.radiogr.checked = false;
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
    ajouterligne() {
        let erreur = "";
        let titreOr = this.form.edtOrTitle.value;
        let titreFr = this.form.edtFrTitle.value;
        let nbsaison = this.form.nbsaison.value;
        let plage = "plage";
        let mini = "mini";
        let radsolo = this.form.radiosolo;
        let radgr = this.form.radiogr;
        let radAutre = this.form.radioAutre;
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
                    nbsaison +
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
                    mini + " " +
                    nbsaison +
                    " " +
                    plage));
            }
            this.form.texteSeries.textContent =
                "Nombre d'album répertorier : " + liste.length;
            this.cacherformulaire();
        }
        else {
            alert("Erreur dans le formulaire\n" + erreur);
        }
    }
}
let vueEval = new VueEval();
export { vueEval };
//# sourceMappingURL=class_tpnot.js.map