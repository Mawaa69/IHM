
type TEvalForm = {
    divAffichagte : HTMLElement
    divFormBoutons : HTMLElement,
    liste : HTMLSelectElement,
    divFormulaire : HTMLElement,
    radioFr : HTMLInputElement,
    radioEu : HTMLInputElement,
    radioUs : HTMLInputElement,
    radioAutre : HTMLInputElement,
    edtFrTitle : HTMLInputElement,
    date : HTMLInputElement,
    edtOrTitle : HTMLInputElement,
    nbsaison : HTMLInputElement,
    nbepisode : HTMLInputElement,
    btnAjouter : HTMLInputElement,
    btnRetirer : HTMLInputElement,
    btnValider : HTMLInputElement,
    btnAnnuler : HTMLInputElement,
    texteSeries: HTMLElement,
}
    const moisEnLettre = [
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
class VueEval {
    private _form : TEvalForm
      get form() : TEvalForm { return this._form}
    init(form : TEvalForm) : void {
        this._form = form; 
        this._form.divFormulaire.hidden = true;

        this.form.texteSeries.textContent = "Nombre de serie répertorier : " + this.form.liste.length
        this._form.radioFr.onclick = function ():void { vueEval.cacherOriginal(); }
        this._form.radioEu.onclick = function ():void { vueEval.afficherOriginal(); }
        this._form.radioAutre.onclick = function ():void { vueEval.afficherOriginal(); }
        this._form.radioUs.onclick = function ():void { vueEval.afficherOriginal(); }
        this._form.btnAjouter.onclick = function ():void { vueEval.afficheFormulaire(); }
        this._form.btnAnnuler.onclick = function ():void { vueEval.cacherformulaire(); }
        this.form.btnRetirer.onclick = function ():void { vueEval.supprimerLigne(); }
        this.form.btnValider.onclick = function ():void { vueEval.ajouterligne(); }

    }
    cacherOriginal():void{
        this.form.edtOrTitle.disabled=true
    }
    afficherOriginal():void{
        this.form.edtOrTitle.disabled=false
        this.form.edtOrTitle.value=""
    }
    
    afficheFormulaire() : void {
        this.form.divFormulaire.hidden = false;
    }
    cacherformulaire() : void {
        this.form.divFormulaire.hidden = true;
        this.form.nbepisode.value="";
        this.form.nbsaison.value="";
        this.form.edtFrTitle.value="";
        this.form.edtOrTitle.value="";
        this.form.date.value="";
        this.form.radioFr.checked=false;
        this.form.radioUs.checked=false;
        this.form.radioEu.checked=false;
        this.form.radioAutre.checked=false;
    }
    supprimerLigne():void{
        const result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (result === true) {
            const noLigne : number = this.form.liste.selectedIndex; 
            if(noLigne > -1) {
                this.form.liste.remove(noLigne)
                this.form.texteSeries.textContent = "Nombre de serie répertorier : " + this.form.liste.length
            }   
        }      
    }
     
    ajouterligne():void {
        let erreur : string = "";
        let titreOr=this.form.edtOrTitle.value
        let titreFr=this.form.edtFrTitle.value
        let nbsaison=this.form.nbsaison.value
        let nbepisode=this.form.nbepisode.value
        let date:Date=this.form.date.valueAsDate
        let radFr=this.form.radioFr
        let radUs=this.form.radioUs
        let radEu=this.form.radioEu
        let radAutre=this.form.radioAutre
        if(titreFr.length===0){
            erreur+="Saisir titre en francais\n"
        }
        if(nbepisode.length===0){
            erreur+="Saisir un nombre d'episodes\n"
        }
        if(nbsaison.length===0){
            erreur+="Saisir un nombre de saisons\n"
        }
        if(date===null){
            erreur+="Saisir une date\n"
        }
        if(parseInt(nbepisode)<0){
            erreur+="Nombre d'episode negatif\n"
        }
        if(parseInt(nbsaison)<0){
            erreur+="Nombre de saison negatif\n"
        }
        if(!radFr.checked && !radUs.checked  && !radEu.checked  && !radAutre.checked  ){
            erreur+="Merci de cocher une nationalité\n"
        }

        if(erreur.length===0){
            let nation="";
            if(radFr.checked)
                nation="francaise"
            else if(radUs.checked)
                nation="Américaine"
            else if(radEu.checked)
                nation="Européenne"
            else if(radAutre.checked)
                nation="Autre"
            
            let m=date.getMonth()
            let mois=moisEnLettre[m]
            let datestr=date.getDate()+" "+mois
        
            let listee=this.form.liste
            if(titreOr.length===0){
                listee.options.add(new Option(titreFr +" - "+ nation+" - "+datestr+" - "+nbsaison+" saison"+" - "+nbepisode+" episodes"))
               
            }
            else {
           
            listee.options.add(new Option(titreFr +" - "+ nation+" - "+  "("+titreOr+")" +" - "+datestr+" - "+nbsaison+" saison"+" - "+nbepisode+" episodes"))
            }

            this.form.texteSeries.textContent = "Nombre de serie répertorier : " + listee.length
            
        }
        else{
            alert('Erreur dans le formulaire\n'+erreur);
        }

        


        
    }
}
let vueEval = new VueEval; 
export {vueEval}