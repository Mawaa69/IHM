import { connexion, APIsql } from "../modele/connexion.js";
class UneSalle {
    constructor(num_salle = "", lib_salle = "", etage = "", code_dept = "") {
        this._numSalle = num_salle;
        this._libSalle = lib_salle;
        this._etage = etage;
        this._codeDept = code_dept;
    }
    // définition des « getters » et des « setters » pour les attributs privés de la classe
    get numSalle() {
        return this._numSalle;
    }
    set numSalle(num_salle) {
        this._numSalle = num_salle;
    }
    get libSalle() {
        return this._libSalle;
    }
    set libSalle(lib_salle) {
        this._libSalle = lib_salle;
    }
    get etage() {
        return this._etage;
    }
    set etage(etage) {
        this._etage = etage;
    }
    get codeDept() {
        return this._codeDept;
    }
    set codeDept(code_dept) {
        this._codeDept = code_dept;
    }
    toArray() {
        // renvoie l’objet sous la forme d’un tableau associatif
        // pour un affichage dans une ligne d’un tableau HTML
        const tableau = {
            numSalle: this._numSalle,
            libSalle: this._libSalle,
            etage: this.etage,
            codeDept: this._codeDept,
        };
        return tableau;
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LesSalles {
    // définition de la classe gérant les données de la table SALLE
    constructor() {
        // rien
    }
    idExiste(num_salle) {
        // renvoie le test d’existence d’une salle dans la table
        // sert pour l’ajout d’une nouvelle salle
        return (APIsql.sqlWeb.SQLloadData("SELECT num_salle FROM SALLE WHERE num_salle=?", [num_salle]).length > 0);
    }
    load(result) {
        // à partir d’un TdataSet, conversion en tableau d’objets UneSalle
        let salles = {};
        for (const element of result) {
            const item = element;
            const salle = new UneSalle(item["num_salle"], item["lib_salle"], item["etage"], item["code_dept"]);
            salles[salle.numSalle] = salle; // clé d’un élément du tableau : num salle
        }
        return salles;
    }
    prepare(where) {
        // préparation de la requête avec ou sans restriction (WHERE)
        let sql;
        sql = "SELECT num_salle, lib_salle, etage, code_dept ";
        sql += " FROM SALLE";
        if (where !== "") {
            sql += " WHERE " + where;
        }
        return sql;
    }
    all() {
        // renvoie le tableau d’objets contenant toutes les salles
        return this.load(APIsql.sqlWeb.SQLloadData(this.prepare(""), []));
    }
    byNumSalle(num_salle) {
        // renvoie l’objet correspondant à la salle num_salle
        let salle = new UneSalle();
        const salles = this.load(APIsql.sqlWeb.SQLloadData(this.prepare("num_salle = ?"), [num_salle]));
        const lesCles = Object.keys(salles);
        // affecte les clés du tableau associatif « salles » dans le tableau de chaines « lesCles »
        if (lesCles.length > 0) {
            salle = salles[lesCles[0]]; // récupérer le 1er élément du tableau associatif « salles »
        }
        return salle;
    }
    toArray(salles) {
        // renvoie le tableau d’objets sous la forme
        // d’un tableau de tableaux associatifs pour un affichage dans un tableau HTML
        let T = [];
        for (let id in salles) {
            T.push(salles[id].toArray());
        }
        return T;
    }
    delete(num_salle) {
        // requête de suppression d’une salle dans la table
        let sql;
        sql = "DELETE FROM SALLE WHERE num_salle = ?";
        return APIsql.sqlWeb.SQLexec(sql, [num_salle]); // requête de manipulation : utiliser SQLexec
    }
    insert(salle) {
        // requête d’ajout d’une salle dans la table
        let sql; // requête de manipulation : utiliser SQLexec
        sql =
            "INSERT INTO SALLE(num_salle, lib_salle, etage, code_dept ) VALUES (?, ?, ?, ?)";
        return APIsql.sqlWeb.SQLexec(sql, [
            salle.numSalle,
            salle.libSalle,
            salle.etage,
            salle.codeDept,
        ]);
    }
    update(salle) {
        // requête de modification d’une salle dans la table
        let sql;
        sql = "UPDATE SALLE SET lib_salle = ?, etage = ?, code_dept = ? ";
        sql += " WHERE num_salle = ?"; // requête de manipulation : utiliser SQLexec
        return APIsql.sqlWeb.SQLexec(sql, [
            salle.libSalle,
            salle.etage,
            salle.codeDept,
            salle.numSalle,
        ]);
    }
}
export { connexion };
export { UneSalle };
export { LesSalles };
//# sourceMappingURL=data_salle.js.map