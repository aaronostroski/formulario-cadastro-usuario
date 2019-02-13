class UserController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId); // id do formulario
        this.tableEl = document.getElementById(tableId); // id da tabela da criacao do usuario

        
    } // fim construtor


submitValue(){ // enviar json/criar tabelas

    this.formEl.addEventListener('submit', (event) =>{

        event.preventDefault();

        let dataUser = this.createJson();

        this.getPhoto().then(
            
            (content)=>{

                dataUser.photo = content;

                this.createTable(dataUser, this.tableEl)

        },  (error)=>{

                console.error(error);

        }); // fim then




    }); // fim addEventListener




} // // fim do método submitValue

createJson(){ // criar Json

    var user ={};


    [...this.formEl.elements].forEach( (field, index)=>{

        if(field.name == 'sexo'){

            if(field.checked){

                user[field.name] = field.value;

            }

            else if (field.name === 'admin'){

                user[field.name] = field.checked;

            }

            } else{

                user[field.name] = field.value;
            }



    }); // fim if

    return new User(

        user.name,
        user.email,
        user.telephone,
        user.birth,
        user.gender,
        user.password,
        user.photo,
        user.check

    ) // retorna os valores
        
    

} // fim do método


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

    if (file === true ) {
        
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
        <td>${usuarios.usur}</td>
        <td>${usuarios.email1}</td>
        <td>${usuarios.telephone}</td>
        <td>${usuarios.born}</td>
        <td>${usuarios.sexo}</td>
        <td>${usuarios.passwd}</td>
        <td>
        <button type='button' class='btn btn-danger'>Excluir</button>
        </td>
        <td>${(usuarios.admin) ? 'Sim' : 'Não' }</td>

    </tr>`

    tabela.appendChild(tr);
    

}



} // fim da classe