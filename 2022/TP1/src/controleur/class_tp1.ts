type TTp1Form = {
    edtht           : HTMLInputElement
    edtTTC          : HTMLInputElement
    radio_taux_1    : HTMLInputElement
    radio_taux_2    : HTMLInputElement
    radio_taux_3    : HTMLInputElement
    btnCalculer     : HTMLInputElement
}
class Vuetp1 {
    private _form : TTp1Form

    init(form : TTp1Form): void {
        this._form = form 
        this.form.edtht.onkeydown = function():void {vueTp1.viderTTC();}
        this.form.edtTTC.onkeydown = function():void {vueTp1.viderHT();}
        this.form.btnCalculer.onclick = function():void {vueTp1.calculer();}
    }

    get form() : TTp1Form{ return this._form }


    viderHT() : void {
       this.form.edtht.value = '';
    }


    viderTTC() : void {
        this.form.edtTTC.value = '';
    }

    calculer() : void {
        const taux1 = this.form.radio_taux_1;
        const taux2 = this.form.radio_taux_2;
        const taux3 = this.form.radio_taux_3;
        const edtht = this.form.edtht;
        const edtTTC = this.form.edtTTC;

        let taux ='';
        if (taux1.checked) ( taux = taux1.value)
        else if (taux2.checked) ( taux = taux2.value)
        else if (taux3.checked) ( taux = taux3.value)

        if (taux !=='') {
            
            const tauxTVA = Number(taux)/100;
            const ht = edtht.value.trim();
            if (ht !== ''){
                const nb = Number(ht);
                
                if (isNaN(nb)){
                    alert("Erreur - calcul impossible : Le montant TTx" +ht+" est invalide.")
                }
            
            else { edtTTC.value = this.calculHtversTtc(nb, tauxTVA).toFixed(2)}
            
            }
        else {
            const ttc = edtTTC.value.trim();
            if (ttc !== ''){
                const nb = Number(ttc);
                if (isNaN(nb)){
                alert("Erreur - calcul impossible : Le montant TTx" +ttc+" est invalide.")
            }
            else { edtTTC.value = this.calculTtcversHt(nb, tauxTVA).toFixed(2)
            }
        }
        else { alert("Erreur - calcul impossible : le taux de TVA n'est pas renseigné") }
    }
    }
    
    }

    calculHtversTtc(ht:number, taux : number): number {
        return ht* (1+taux)
    }
    
    calculTtcversHt(ttc:number, taux : number): number {
        return ttc* (1+taux)
    }

}
let vueTp1 = new Vuetp1

export {vueTp1}

