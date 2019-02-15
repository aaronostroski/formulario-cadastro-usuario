class User{ // classe com os propriedades para criar o JSON

    constructor(name, email, telephone, birth, gender, password, photo, admin){

        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.birth = birth;
        this.gender = gender;
        this.password = password;
        this.photo = photo;
        this.admin = admin;
        this.register = new Date().toLocaleString("pt-br",{

            day: "2-digit",
            month: 'short',
            year: 'numeric',
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        } );

    }

}