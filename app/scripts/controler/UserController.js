class UserController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId); // id do formulario
        this.tableEl = document.getElementById(tableId); // id da tabela da criacao do usuario

        
    } // fim construtor

disableButton(){

    let btn = this.formEl.querySelector("[type=submit]");    

    btn.disabled = true;
}

enableButton(){

    let btn = this.formEl.querySelector("[type=submit]");

    btn.disabled = false;
}

submitValue(){ // enviar json/criar tabelas

    this.formEl.addEventListener('submit', (event) =>{

        event.preventDefault();

        this.disableButton();

        let dataUser = this.createJson();

        if(dataUser == false){

            return false;
        }

        this.getPhoto().then(
            
            (content)=>{

                dataUser.photo = content;

                this.createTable(dataUser, this.tableEl)

                this.formEl.reset();

                this.enableButton();

        },  (error)=>{

                console.error(error);

        }); // fim then




    }); // fim addEventListener




} // // fim do método submitValue

createJson(){ // criar Json

    var user ={};

    let isValid = true; // parar o looping

    [...this.formEl.elements].forEach( (field, index)=>{

        if(["usur", "email1", "telephone", "born", "sexo", "passwd", "photo"].indexOf(field.name) > -1 && !field.value){ 

            field.classList.add("is-invalid");

            isValid = false;


        }

        if(field.name == 'sexo'){

            if(field.checked){

                user[field.name] = field.value;

                console.log(user.sexo);

            }  else { 

                return false; // não permite o looping atribuir os valores do campo 2x
            }

        }

        if (field.name == 'admin'){

            user[field.name] = field.checked;


        } else{

                user[field.name] = field.value;
            }

        
        
    }); // fim forEach


    if(isValid == false){

        let btn = this.formEl.querySelector("[type=submit]");

        this.enableButton();

        return false;
    }

    console.log(user);
    
    return new User(

        user.usur,
        user.email1,
        user.telephone,
        user.born,
        user.sexo,
        user.passwd,
        user.photo,
        user.admin

    ) // retorna os valores
        
    

} // fim do método createJson


getPhoto(){ // metodo para upload da foto

    return new Promise((resolve, reject) =>{

    let fileReader = new FileReader();

    let elements = [...this.formEl.elements].filter((item)=>{ // metodo filter - filtra um array
                                                            // conforme uma condicao
        if ( item.name == 'photo' ) {

            return item;


        }            
    }) // fim metodo filter

    let imageNumber = elements[0].files[0]; // file[0] pra pegar justamente o primeiro arquivo

    fileReader.onload = ()=>{


       resolve(fileReader.result); // se der certo

    }

    fileReader.onerror = (e)=>{


        reject(e) // se der errado
    }

    if (imageNumber) {
        
        fileReader.readAsDataURL(imageNumber);

    } else {

        resolve();
    }


}) // fim promise



} // fim do método


createTable(usuarios, tabela){ // criar table rule quando clicar no botão enviar

    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td><img src="${usuarios.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${usuarios.name}</td>
        <td>${usuarios.email}</td>
        <td>${usuarios.telephone}</td>
        <td>${usuarios.register}</td>
        <td>${usuarios.gender}</td>
        <td>${usuarios.password}</td>
        <td>
        <button type='button' class='btn btn-danger'>Excluir</button>
        </td>
        <td>${(usuarios.admin) ? 'Sim' : 'Não' }</td>
    </tr>`

    tabela.appendChild(tr);
    

}



} // fim da classe