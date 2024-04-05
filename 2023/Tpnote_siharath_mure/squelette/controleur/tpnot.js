import { vueEval } from "../controleur/class_tpnot";
vueEval.init({
    divFormulaire: document.querySelector('[id=div_formulaire]'),
    divAffichagte: document.querySelector('[id=div_affichage]'),
    divFormBoutons: document.querySelector('[id=buttons_add]'),
    radiosolo: document.querySelector('[id=radio_soliste]'),
    radiogr: document.querySelector('[id=radio_gr]'),
    labeltitre: document.querySelector('[id=labeltitre]'),
    labeltitree: document.querySelector('[id=labeltitree]'),
    radioAutre: document.querySelector('[id=radio_autre]'),
    edtFrTitle: document.querySelector('[id=frenchTitle]'),
    edtOrTitle: document.querySelector('[id=originalTitle]'),
    nbsaison: document.querySelector('[id=seasonNumber]'),
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