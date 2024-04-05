type TTp2Form = {
    edtSaisie : HTMLInputElement
    , listeText : HTMLSelectElement
    , chktri : HTMLInputElement
    , btnVider : HTMLInputElement
    ,btnSupprimer : HTMLInputElement
}



class VueTp2 { 
    private _form : TTp2Form

    init(form : TTp2Form) : void {
        this._form = form
        this.form.edtSaisie.onkeydown
            = function (event) : void {vueTp2.ajouterSaisie(event);}
        this.form.chktri.onchange
            = function():void { vueTp2.TrierListe();}
        this.form.btnVider.onclick 
            = function (): void {vueTp2.viderListe();}
            this.form.btnSupprimer.onclick
            = function ():void { vueTp2.supprimerLigne();}
    }

    get form() : TTp2Form{return this._form}

    viderListe():void {
        this.form.listeText.length = 0
    }

    supprimerLigne():void {
        const liste = this.form.listeText;
        const noLigne : number = liste.selectedIndex;
        if (noLigne > -1){
            liste.remove(noLigne);
        }
        }

        TrierListe() : void {
            if (this.form.chktri.checked){
                this.triListe(this.form.listeText)
            }
        }

        ajouterSaisie(ev:KeyboardEvent):void {
            if (ev.key === 'Enter') {
                const elt = this.form.edtSaisie;
                const liste = this.form.listeText;
                const chaine : string = elt.value.trim();
                if (chaine !==""){
                    const opt = new Option(chaine, chaine);
                    liste.options.add(opt)
                    this.TrierListe();
                }
                elt.value="";
                elt.focus();
            }
        }


    triListe(liste : HTMLSelectElement):void {
        const options : HTMLOptionsCollection = liste.options;
        let optionsArray : HTMLOptionElement[] = [];
        for (let i = 0; i < options.length; i++) {
        optionsArray.push(options[i]);
        }
        optionsArray = optionsArray.sort(function
        (a:HTMLOptionElement, b:HTMLOptionElement):number {
        if (a.value > b.value) { return 1 } else { return -1 }
        });
        for (let i = 0; i <= options.length; i++) {
        options[i] = optionsArray[i];
        }
        }

   

   


}

let vueTp2 = new VueTp2;

export { vueTp2 }