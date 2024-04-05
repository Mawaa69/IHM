var moisEnLettre = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
];
var VueEval = /** @class */ (function () {
    function VueEval() {
    }
    Object.defineProperty(VueEval.prototype, "form", {
        get: function () { return this._form; },
        enumerable: false,
        configurable: true
    });
    VueEval.prototype.init = function (form) {
        this._form = form;
        this._form.divFormulaire.hidden = true;
        this.form.texteSeries.textContent = "Nombre de serie répertorier : " + this.form.liste.length;
        this._form.radioFr.onclick = function () { vueEval.cacherOriginal(); };
        this._form.radioEu.onclick = function () { vueEval.afficherOriginal(); };
        this._form.radioAutre.onclick = function () { vueEval.afficherOriginal(); };
        this._form.radioUs.onclick = function () { vueEval.afficherOriginal(); };
        this._form.btnAjouter.onclick = function () { vueEval.afficheFormulaire(); };
        this._form.btnAnnuler.onclick = function () { vueEval.cacherformulaire(); };
        this.form.btnRetirer.onclick = function () { vueEval.supprimerLigne(); };
        this.form.btnValider.onclick = function () { vueEval.ajouterligne(); };
    };
    VueEval.prototype.cacherOriginal = function () {
        this.form.edtOrTitle.disabled = true;
    };
    VueEval.prototype.afficherOriginal = function () {
        this.form.edtOrTitle.disabled = false;
        this.form.edtOrTitle.value = "";
    };
    VueEval.prototype.afficheFormulaire = function () {
        this.form.divFormulaire.hidden = false;
    };
    VueEval.prototype.cacherformulaire = function () {
        this.form.divFormulaire.hidden = true;
        this.form.nbepisode.value = "";
        this.form.nbsaison.value = "";
        this.form.edtFrTitle.value = "";
        this.form.edtOrTitle.value = "";
        this.form.date.value = "";
        this.form.radioFr.checked = false;
        this.form.radioUs.checked = false;
        this.form.radioEu.checked = false;
        this.form.radioAutre.checked = false;
    };
    VueEval.prototype.supprimerLigne = function () {
        var result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (result === true) {
            var noLigne = this.form.liste.selectedIndex;
            if (noLigne > -1) {
                this.form.liste.remove(noLigne);
                this.form.texteSeries.textContent = "Nombre de serie répertorier : " + this.form.liste.length;
            }
        }
    };
    VueEval.prototype.ajouterligne = function () {
        var erreur = "";
        var titreOr = this.form.edtOrTitle.value;
        var titreFr = this.form.edtFrTitle.value;
        var nbsaison = this.form.nbsaison.value;
        var nbepisode = this.form.nbepisode.value;
        var date = this.form.date.valueAsDate;
        var radFr = this.form.radioFr;
        var radUs = this.form.radioUs;
        var radEu = this.form.radioEu;
        var radAutre = this.form.radioAutre;
        if (titreFr.length === 0) {
            erreur += "Saisir titre en francais\n";
        }
        if (nbepisode.length === 0) {
            erreur += "Saisir un nombre d'episodes\n";
        }
        if (nbsaison.length === 0) {
            erreur += "Saisir un nombre de saisons\n";
        }
        if (date === null) {
            erreur += "Saisir une date\n";
        }
        if (parseInt(nbepisode) < 0) {
            erreur += "Nombre d'episode negatif\n";
        }
        if (parseInt(nbsaison) < 0) {
            erreur += "Nombre de saison negatif\n";
        }
        if (!radFr.checked && !radUs.checked && !radEu.checked && !radAutre.checked) {
            erreur += "Merci de cocher une nationalité\n";
        }
        if (erreur.length === 0) {
            var nation = "";
            if (radFr.checked)
                nation = "francaise";
            else if (radUs.checked)
                nation = "Américaine";
            else if (radEu.checked)
                nation = "Européenne";
            else if (radAutre.checked)
                nation = "Autre";
            var m = date.getMonth();
            var mois = moisEnLettre[m];
            var datestr = date.getDate() + " " + mois;
            var listee = this.form.liste;
            if (titreOr.length === 0) {
                listee.options.add(new Option(titreFr + " - " + nation + " - " + datestr + " - " + nbsaison + " saison" + " - " + nbepisode + " episodes"));
            }
            else {
                listee.options.add(new Option(titreFr + " - " + nation + " - " + "(" + titreOr + ")" + " - " + datestr + " - " + nbsaison + " saison" + " - " + nbepisode + " episodes"));
            }
            this.form.texteSeries.textContent = "Nombre de serie répertorier : " + listee.length;
        }
        else {
            alert('Erreur dans le formulaire\n' + erreur);
        }
    };
    return VueEval;
}());
var vueEval = new VueEval;
export { vueEval };
//# sourceMappingURL=class_tpnot.js.map