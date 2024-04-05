import { vueEval } from "../controleur/class_tpnot";
vueEval.init({
    divFormulaire: document.querySelector('[id=div_formulaire]'),
    divAffichagte: document.querySelector('[id=div_affichage]'),
    divFormBoutons: document.querySelector('[id=buttons_add]'),
    radioFr: document.querySelector('[id=radio_francais]'),
    radioEu: document.querySelector('[id=radio_eu]'),
    radioUs: document.querySelector('[id=radio_Américain]'),
    radioAutre: document.querySelector('[id=radio_autre]'),
    edtFrTitle: document.querySelector('[id=frenchTitle]'),
    edtOrTitle: document.querySelector('[id=originalTitle]'),
    nbsaison: document.querySelector('[id=seasonNumber]'),
    nbepisode: document.querySelector('[id=episodeNumber]'),
    btnAjouter: document.querySelector('[id=btn_add]'),
    btnRetirer: document.querySelector('[id=btn_delete]'),
    btnValider: document.querySelector('[id=btn_valide]'),
    btnAnnuler: document.querySelector('[id=btn_cancel]'),
    liste: document.querySelector('[id=select_liste]'),
    date: document.querySelector('[id=firstDiffusionDate]'),
    texteSeries: document.querySelector('[id=p_texteLongueur]')
});
//# sourceMappingURL=tpnot.js.map