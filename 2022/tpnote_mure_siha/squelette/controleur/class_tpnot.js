class VueEval {
    get form() {
        return this._form;
    }
    init(form) {
        this._form = form;
        this._form.divFormulaire.hidden = true;
        this.form.TexteAudio.textContent =
            "Nombre de serie répertorier : " + this.form.liste.length;
        this._form.radiosoliste.onclick = function () {
            vueEval.cacherOriginal();
        };
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
        };
        this.form.btnRetirer.onclick = function () {
            vueEval.supprimerLigne();
        };
        this.form.btnValider.onclick = function () {
            vueEval.ajouterligne();
        };
    }
    cacherOriginal() {
        this.form.edtOrTitle.disabled = true;
    }
    afficherOriginal() {
        this.form.edtOrTitle.disabled = false;
        this.form.edtOrTitle.value = "";
    }
    afficheFormulaire() {
        this.form.divFormulaire.hidden = true;
    }
    cacherformulaire() {
        this.form.divFormulaire.hidden = true;
        this.form.plage.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";
        this.form.mini.value = "";
        this.form.radiosoliste.checked = false;
        this.form.radiogr.checked = false;
        this.form.radioAutre.checked = false;
    }
    supprimerLigne() {
        const result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (result === true) {
            const noLigne = this.form.liste.selectedIndex;
            if (noLigne > -1) {
                this.form.liste.remove(noLigne);
                this.form.TexteAudio.textContent =
                    "Nombre de serie répertorier : " + this.form.liste.length;
            }
        }
    }
    ajouterligne() {
        let erreur = "";
        let titreOr = this.form.edtOrTitle.value;
        let titreFr = this.form.edtFrTitle.value;
        let plage = this.form.plage.value;
        let Mini = this.form.mini.value;
        let radFr = this.form.radiosoliste;
        let radEu = this.form.radiogr;
        let radAutre = this.form.radioAutre;
        if (titreFr.length === 0) {
            erreur += "Saisir titre en francais\n";
        }
        if (plage.length === 0) {
            erreur += "Saisir un nombre de plage\n";
        }
        if (Mini === null) {
            erreur += "Saisir une date\n";
        }
        if (parseInt(plage) < 0) {
            erreur += "Nombre de saison negatif\n";
        }
        if (!radFr.checked && !radEu.checked && !radAutre.checked) {
            erreur += "Merci de cocher une nationalité\n";
        }
        if (erreur.length === 0) {
            let nation = "";
            if (radFr.checked)
                nation = "francaise";
            else if (radEu.checked)
                nation = "Européenne";
            else if (radAutre.checked)
                nation = "Autre";
            let listee = this.form.liste;
            if (titreOr.length === 0) {
                listee.options.add(new Option(titreFr +
                    " - " +
                    nation +
                    " - " +
                    Mini +
                    " - " +
                    plage +
                    " plage" +
                    " - " +
                    " "));
            }
            else {
                listee.options.add(new Option(titreFr +
                    " - " +
                    nation +
                    " - " +
                    "(" +
                    titreOr +
                    ")" +
                    " - " +
                    Mini +
                    " - " +
                    plage +
                    " plage" +
                    " "));
            }
            this.form.TexteAudio.textContent =
                "Nombre de serie répertorier : " + listee.length;
        }
        else {
            alert("Erreur dans le formulaire\n" + erreur);
        }
    }
}
let vueEval = new VueEval();
export { vueEval };
//# sourceMappingURL=class_tpnot.js.map