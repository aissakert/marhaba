export class User {

	constructor( _nom: string, _prenom: string, _email: string, _password: string, _dateDeNaissance: Date) {
		this.nom = _nom;
		this.prenom = _prenom;
		this.email = _email;
		this.password = _password;
		this.dateDeNaissance = _dateDeNaissance;
	}
    
    id: string;
    nom: string;
    prenom: string;
    email: string;
    password : string;
    dateDeNaissance: Date;
}
