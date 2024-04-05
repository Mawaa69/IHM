var Vuetp1 = /** @class */ (function () {
    function Vuetp1() {
    }
    Vuetp1.prototype.init = function (form) {
        this._form = form;
        this.form.edtht.onkeydown = function () { vueTp1.viderTTC(); };
        this.form.edtTTC.onkeydown = function () { vueTp1.viderHT(); };
        this.form.btnCalculer.onclick = function () { vueTp1.calculer(); };
    };
    Object.defineProperty(Vuetp1.prototype, "form", {
        get: function () { return this._form; },
        enumerable: false,
        configurable: true
    });
    Vuetp1.prototype.viderHT = function () {
        this.form.edtht.value = '';
    };
    Vuetp1.prototype.viderTTC = function () {
        this.form.edtTTC.value = '';
    };
    Vuetp1.prototype.calculer = function () {
        var taux1 = this.form.radio_taux_1;
        var taux2 = this.form.radio_taux_2;
        var taux3 = this.form.radio_taux_3;
        var edtht = this.form.edtht;
        var edtTTC = this.form.edtTTC;
        var taux = '';
        if (taux1.checked)
            (taux = taux1.value);
        else if (taux2.checked)
            (taux = taux2.value);
        else if (taux3.checked)
            (taux = taux3.value);
        if (taux !== '') {
            var tauxTVA = Number(taux) / 100;
            var ht = edtht.value.trim();
            if (ht !== '') {
                var nb = Number(ht);
                if (isNaN(nb)) {
                    alert("Erreur - calcul impossible : Le montant TTx" + ht + " est invalide.");
                }
                else {
                    edtTTC.value = this.calculHtversTtc(nb, tauxTVA).toFixed(2);
                }
            }
            else {
                var ttc = edtTTC.value.trim();
                if (ttc !== '') {
                    var nb = Number(ttc);
                    if (isNaN(nb)) {
                        alert("Erreur - calcul impossible : Le montant TTx" + ttc + " est invalide.");
                    }
                    else {
                        edtTTC.value = this.calculTtcversHt(nb, tauxTVA).toFixed(2);
                    }
                }
                else {
                    alert("Erreur - calcul impossible : le taux de TVA n'est pas renseigné");
                }
            }
        }
    };
    Vuetp1.prototype.calculHtversTtc = function (ht, taux) {
        return ht * (1 + taux);
    };
    Vuetp1.prototype.calculTtcversHt = function (ttc, taux) {
        return ttc * (1 + taux);
    };
    return Vuetp1;
}());
var vueTp1 = new Vuetp1;
export { vueTp1 };
//# sourceMappingURL=class_tp1.js.map