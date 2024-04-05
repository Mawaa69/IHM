type TTp4Form = {
    divFormulaire : HTMLElement
     divRecap : HTMLElement,
     divFormBoutons : HTMLElement,
    radioMadame : HTMLInputElement,
    radioMonsieur : HTMLInputElement,
    edtNom : HTMLInputElement,
    edtPrenom : HTMLInputElement,
    edtDtNais : HTMLInputElement,
    listeDiplome : HTMLSelectElement,
    edtExperience : HTMLInputElement,
    chkWindows : HTMLInputElement,
    chkLinux : HTMLInputElement,
    chkAutre : HTMLInputElement,
    edtAutre : HTMLInputElement,
    edtCommentaire : HTMLInputElement,
    ListeRecap : HTMLSelectElement,
    btnValider : HTMLInputElement,
    btncorriger : HTMLInputElement,
}
class VueTp4 {
    private _form : TTp4Form
    
    init(form : TTp4Form) : void {
        
        this.form.divRecap.hidden = false;
        this.form.edtAutre.hidden = true;

        this._form = form;
        this.form.radioMadame.onclick
            = function ():void { vueTp4.changecivilité(); }
this.form.radioMonsieur.onclick
            = function ():void { vueTp4.changecivilité(); }
this.form.chkAutre.onchange
            = function ():void { vueTp4.changeAutreSysteme(); }
this.form.btnValider.onclick
            = function ():void { vueTp4.valideSaisie(); }
this.form.btncorriger.onclick
            = function ():void { vueTp4.corrigeSaisie(); }

    }

    get form() : TTp4Form { return this._form}

    changecivilité() :void {
        let chaine : string; 
        if(this._form.radioMadame.checked) {
            chaine = "Née le"
        }
        else {
            chaine = "Né le"
        }
        this._form.edtDtNais.labels[0].textContent= chaine; 

    }
    changeAutreSysteme() {
        this._form.edtAutre.hidden = !this._form.chkAutre.checked; 
        this._form.edtAutre.value
    }

    corrigeSaise(): void {
        this._form.divFormBoutons.style.pointerEvents = "auto";
        this._form.divRecap.hidden =true; 
        this._form.divFormBoutons.hidden = false; 
    }

    valideSaisie() : void {
        // récupération des données du formulaire dans des variables
        let civilite = "";
        if (this.form.radioMadame.checked) {
        civilite = this.form.radioMadame.value
        }
        else if (this.form.radioMonsieur.checked) {
        civilite = this.form.radioMonsieur.value
        }
        const nom : string = this.form.edtNom.value.trim();
        const prenom : string = this.form.edtPrenom.value.trim();
        const dtnais : Date = this.form.edtDtNais.valueAsDate;
        const experience : string = this.form.edtExperience.value;
        const diplome : string = this.form.listeDiplome.value;
        const autre : string = this.form.edtAutre.value.trim();
        let systeme = "";
        // récupérer toutes les cases à cocher de "système"
        if (this.form.chkWindows.checked) {
        systeme += this.form.chkWindows.value +', '
        }
        if (this.form.chkLinux.checked) {
        systeme += this.form.chkLinux.value +', '
        }
        systeme += autre;
        // traitement des erreurs
        let erreur = "";
        if (civilite.length ===0) { erreur += "Civilité à sélectionner<br>"; }
        if (nom.length === 0) { erreur += "Nom à renseigner<br>"; }
        if (prenom.length === 0) { erreur += "Prénom à renseigner<br>"; }
        if (dtnais === null) { erreur += "Date de naissance à renseigner<br>"; }
        if (diplome.length === 0) { erreur += "Diplôme à renseigner<br>";}
        const nb = Number(experience); // si la valeur n'est pas un nombre, nb 0
        if (nb < 1) { erreur += "Expérience doit être supérieure à 1 année<br>"; }
        if (systeme.length === 0) { erreur += "Au moins un système à cocher<br>"; }
        else if (!this.form.edtAutre.hidden) {
        // si système "autre" est coché alors "autre" ne doit pas être vide
        if (autre.length === 0) {erreur += 'Système "autre" à préciser<br>'; }
        }
        // affichage des informations dans la partie récapitulatif
        // sinon affichage message d'erreur
        if (erreur.length === 0) {
         // rendre inactif la partie "formulaire"
        // rendre visible la partie "récapitulatif"
        // cacher les boutons du formulaire
          this.form.divFormulaire.style.pointerEvents = 'none';
          this.form.divRecap.hidden = false;
          this.form.divFormBoutons.hidden = true;

          const liste = this.form.ListeRecap;
         // vider la liste avant de la remplir à nouveau
           liste.length = 0;

            liste.options.add(new Option(civilite +' '+prenom +' '+nom));
            liste.options.add(new Option(dtnais.toLocaleDateString('fr')));
            liste.options.add(new Option(systeme));
            let an = 'an';
            // gestion du pluriel du nombre d'années d'expérience
            if (experience > '1') { an = an +'s'; }
            liste.options.add(new Option(experience +' ' +an +" d'expérience"));
            liste.options.add(new Option('diplôme le plus élevé : ' +diplome ));
            }
            else { alert('Erreur dans le formulaire '+erreur); }
            }


            corrigeSaisie() : void {
            // demande de correction de la saisie
            // ==> rendre actif la partie "formulaire", cacher la partie "récapitulatif",
            // rendre visible les boutons du formulaire
            this.form.divFormulaire.style.pointerEvents = 'auto';
            this.form.divRecap.hidden = true;
            this.form.divFormBoutons.hidden = false;
            }

   }
let vueTp4 = new VueTp4; 
export {vueTp4}

