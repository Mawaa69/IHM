import { vueEval } from "../controleur/class_tpnot";
vueEval.init({
    divFormulaire: document.querySelector('[id=div_formulaire]'),
    divAffichagte: document.querySelector('[id=div_affichage]'),
    divFormBoutons: document.querySelector('[id=buttons_add]'),
    radioSolo: document.querySelector('[id=radio_soliste]'),
    radioGroupe: document.querySelector('[id=radio_gr]'),
    labelTitre: document.querySelector('[id=labeltitre]'),
    radioAutre: document.querySelector('[id=radio_autre]'),
    edtFrTitle: document.querySelector('[id=frenchTitle]'),
    edtOrTitle: document.querySelector('[id=originalTitle]'),
    nbSaison: document.querySelector('[id=seasonNumber]'),
    miniLabel: document.querySelector('[id=miniLabel]'),
    btnAjouter: document.querySelector('[id=btn_add]'),
    btnRetirer: document.querySelector('[id=btn_delete]'),
    btnValider: document.querySelector('[id=btn_valide]'),
    btnAnnuler: document.querySelector('[id=btn_cancel]'),
    liste: document.querySelector('[id=select_liste]'),
    mini: document.querySelector('[id=mini]'),
    texteSeries: document.querySelector('[id=p_texteLongueur]'),
});
//# sourceMappingURL=tpnot.js.map