var campos = document.querySelectorAll('#form-criar-cadastro [name]');

var usuarios = {};

function addOperacaoCadastro(dadosUsuario){

    var tr = document.createElement('tr');

    tr.innerHTML = `
    
        <td>${usuarios.usur}</td>
        <td>${usuarios.email1}</td>
        <td>${usuarios.telephone}</td>
        <td>${usuarios.born}</td>
        <td>${usuarios.sexo}</td>
        <td>${usuarios.passwd}</td>
        <td>
        <button type='button' class='btn btn-danger'>Excluir</button>
        </td>

    </tr>`

    document.getElementById('gerar-linhas').appendChild(tr);


}


document.getElementById('form-criar-cadastro').addEventListener('submit', function(event){

    event.preventDefault();

    campos.forEach((campo, index)=>{

        if(campo.name == 'sexo'){
    
            if(campo.checked){
    
                usuarios[campo.name] = campo.value;
            }
    
        } else{
    
            usuarios[campo.name] = campo.value;
        }
    
        
    });

    addOperacaoCadastro(usuarios);

})

