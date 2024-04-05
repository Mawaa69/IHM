import {vueEval} from "./class_tpnot"

vueEval.init (
    {
        divFormulaire: document.querySelector('[id=div_formulaire]'),
        divAffichagte: document.querySelector('[id=div_affichage]'),
        divFormBoutons: document.querySelector('[id=buttons_add]'),
        radiosoliste: document.querySelector('[id=radio_soliste]'),
        radiogr: document.querySelector('[id=radio_eu]'),
        
        radioAutre: document.querySelector('[id=radio_autre]'),
        edtFrTitle: document.querySelector('[id=frenchTitle]'),
        edtOrTitle: document.querySelector('[id=originalTitle]'),
        plage: document.querySelector('[id=plage]'),
        
        btnAjouter: document.querySelector('[id=btn_add]'),
        btnRetirer: document.querySelector('[id=btn_delete]'),
        btnValider: document.querySelector('[id=btn_valide]'),
        btnAnnuler: document.querySelector('[id=btn_cancel]'),
        liste: document.querySelector('[id=select_liste]'),
        mini: document.querySelector('[id=Mini]'),
        TexteAudio: document.querySelector('[id=p_texteLongueur]'),
    } );