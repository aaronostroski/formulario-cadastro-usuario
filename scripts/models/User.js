class User{ // classe com os propriedades para criar o JSON

    constructor(name, email, telephone, birth, gender, password, photo, admin){

        this._name = name;
        this._email = email;
        this._telephone = telephone;
        this._birth = birth;
        this._gender = gender;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date().toLocaleString("pt-br",{

            day: "2-digit",
            month: 'short',
            year: 'numeric',
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        } );
    
    }

    get name(){

        return this._name;
    }

    get email(){

        return this._email;
    }

    get telephone(){

        return this._telephone;
    }

    get birth(){

        return this._birth;
    }

    get gender(){

        return this._gender;
    }

    get password(){

        return this._password;
    }

    get photo(){

        return this._photo;
    }

    set photo(value){

        return this._photo = value;
    }

    get admin(){

        return this._admin;
    }

    get register(){

        return this._register;
    }

}