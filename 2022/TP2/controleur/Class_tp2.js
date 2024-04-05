var VueTp2 = /** @class */ (function () {
    function VueTp2() {
    }
    VueTp2.prototype.init = function (form) {
        this._form = form;
        this.form.edtSaisie.onkeydown
            = function (event) { vueTp2.ajouterSaisie(event); };
        this.form.chktri.onchange
            = function () { vueTp2.TrierListe(); };
        this.form.btnVider.onclick
            = function () { vueTp2.viderListe(); };
        this.form.btnSupprimer.onclick
            = function () { vueTp2.supprimerLigne(); };
    };
    Object.defineProperty(VueTp2.prototype, "form", {
        get: function () { return this._form; },
        enumerable: false,
        configurable: true
    });
    VueTp2.prototype.viderListe = function () {
        this.form.listeText.length = 0;
    };
    VueTp2.prototype.supprimerLigne = function () {
        var liste = this.form.listeText;
        var noLigne = liste.selectedIndex;
        if (noLigne > -1) {
            liste.remove(noLigne);
        }
    };
    VueTp2.prototype.TrierListe = function () {
        if (this.form.chktri.checked) {
            this.triListe(this.form.listeText);
        }
    };
    VueTp2.prototype.ajouterSaisie = function (ev) {
        if (ev.key === 'Enter') {
            var elt = this.form.edtSaisie;
            var liste = this.form.listeText;
            var chaine = elt.value.trim();
            if (chaine !== "") {
                var opt = new Option(chaine, chaine);
                liste.options.add(opt);
                this.TrierListe();
            }
            elt.value = "";
            elt.focus();
        }
    };
    VueTp2.prototype.triListe = function (liste) {
        var options = liste.options;
        var optionsArray = [];
        for (var i = 0; i < options.length; i++) {
            optionsArray.push(options[i]);
        }
        optionsArray = optionsArray.sort(function (a, b) {
            if (a.value > b.value) {
                return 1;
            }
            else {
                return -1;
            }
        });
        for (var i = 0; i <= options.length; i++) {
            options[i] = optionsArray[i];
        }
    };
    return VueTp2;
}());
var vueTp2 = new VueTp2;
export { vueTp2 };
//# sourceMappingURL=Class_tp2.js.map