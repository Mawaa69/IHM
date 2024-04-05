type TEvalForm = {
  divAffichagte: HTMLElement;
  divFormBoutons: HTMLElement;
  liste: HTMLSelectElement;
  divFormulaire: HTMLElement;
  radiosoliste: HTMLInputElement;
  radiogr: HTMLInputElement;
  radioAutre: HTMLInputElement;
  edtFrTitle: HTMLInputElement;
  mini: HTMLInputElement;
  edtOrTitle: HTMLInputElement;
  plage: HTMLInputElement;

  btnAjouter: HTMLInputElement;
  btnRetirer: HTMLInputElement;
  btnValider: HTMLInputElement;
  btnAnnuler: HTMLInputElement;
  TexteAudio: HTMLElement;
};

 class VueEval {
  private _form: TEvalForm;
  get form(): TEvalForm {
    return this._form;
  }
  init(form: TEvalForm): void {
    this._form = form;
    this._form.divFormulaire.hidden = true;

    this.form.TexteAudio.textContent =
      "Nombre de serie répertorier : " + this.form.liste.length;
    this._form.radiogr.onclick = function (): void {
      vueEval.afficherOriginal();
    };
    this._form.radioAutre.onclick = function (): void {
      vueEval.afficherOriginal();
    };

    this._form.btnAjouter.onclick = function (): void {
      vueEval.afficheFormulaire();
    };
    this._form.btnAnnuler.onclick = function (): void {
      vueEval.cacherformulaire();
    };
    this.form.btnRetirer.onclick = function (): void {
      vueEval.supprimerLigne();
    };
    this.form.btnValider.onclick = function (): void {
      vueEval.ajouterligne();
    };
  }
  
  afficherOriginal(): void {
    this.form.edtOrTitle.disabled = false;
    this.form.edtOrTitle.value = "";
  }

  afficheFormulaire(): void {
    this.form.divFormulaire.hidden = true;
  }
  cacherformulaire(): void {
    this.form.divFormulaire.hidden = true;

    this.form.plage.value = "";
    this.form.edtFrTitle.value = "";
    this.form.edtOrTitle.value = "";
    this.form.mini.value = "";
    this.form.radiosoliste.checked = false;
    this.form.radiogr.checked = false;
    this.form.radioAutre.checked = false;
  }
  supprimerLigne(): void {
    const result = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
    if (result === true) {
      const noLigne: number = this.form.liste.selectedIndex;
      if (noLigne > -1) {
        this.form.liste.remove(noLigne);
        this.form.TexteAudio.textContent =
          "Nombre de serie répertorier : " + this.form.liste.length;
      }
    }
  }

  ajouterligne(): void {
    let erreur: string = "";
    let titreOr = this.form.edtOrTitle.value;
    let titreFr = this.form.edtFrTitle.value;
    let plage = this.form.plage.value;

    let Mini = this.form.mini.value;
    let radFr = this.form.radiosoliste;

    let radEu = this.form.radiogr;
    let radAutre = this.form.radioAutre;
    if (titreFr.length === 0) {
      erreur += "Saisir titre en francais\n";
    }
    if (plage.length === 0) {
      erreur += "Saisir un nombre de plage\n";
    }
    if (Mini === null) {
      erreur += "Saisir une date\n";
    }

    if (parseInt(plage) < 0) {
      erreur += "Nombre de saison negatif\n";
    }
    if (!radFr.checked && !radEu.checked && !radAutre.checked) {
      erreur += "Merci de cocher une nationalité\n";
    }

    if (erreur.length === 0) {
      let nation = "";
      if (radFr.checked) nation = "francaise";
      else if (radEu.checked) nation = "Européenne";
      else if (radAutre.checked) nation = "Autre";

 

      let listee = this.form.liste;
      if (titreOr.length === 0) {
        listee.options.add(
          new Option(
            titreFr +
              " - " +
              nation +
              " - " +
              Mini +
              " - " +
              plage +
              " plage" +
              " - " +
              " "
          )
        );
      } else {
        listee.options.add(
          new Option(
            titreFr +
              " - " +
              nation +
              " - " +
              "(" +
              titreOr +
              ")" +
              " - " +
              Mini +
              " - " +
              plage +
              " plage" +
              " "
          )
        );
      }

      this.form.TexteAudio.textContent =
        "Nombre de serie répertorier : " + listee.length;
    } else {
      alert("Erreur dans le formulaire\n" + erreur);
    }
  }
}
let vueEval = new VueEval();
export { vueEval };
