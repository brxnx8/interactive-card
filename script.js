const campos = document.querySelectorAll('input');

const btn = document.querySelector('#button-formCard');

campos.forEach(item => {
    item.addEventListener('keyup', function(e) {
        
        let edit = document.querySelector(`.${e.target.name}`);
        let code = e.keyCode;
        let campoCard = edit.classList[0];
        
        if((campoCard == 'name') && (code < 65 || code > 91) && (code != 8) ){
            return;
        }

        if((campoCard == 'number') && (e.target.value.replace(/ /g, '').length % 4 == 0) && !(isNaN(e.key))) {
            if(e.target.value.replace(/ /g, '').length >= 16){
                return;
            }else{
                e.target.value += ' ';
            }
            
        }

        if(e.target.value == ''){
            switch(campoCard){
                case 'number' :
                    edit.innerText = '1234 5678 9123 4567';
                    break;
                case 'name' :
                    edit.innerText = 'name last-name';
                    break;
                case 'mounth' :
                    edit.innerText = '00';
                    break;
                case 'day' :
                    edit.innerText = '00';
                    break;
                case 'cvc' :
                    edit.innerText = '000';
                    break;
                default :
                    return;
            }
                
        }else{
            edit.innerText = e.target.value.toUpperCase();
        }
        
    })
})

btn.addEventListener('click', (event) => {
    
    event.preventDefault();
    
    campos.forEach( e => {
        campo = e.validity;
        const mensagem = document.querySelector(`#span-${e.name}`);
        if(!(campo.valid)){
            if(e.name != 'day'){
                
                mensagem.innerText = `Preencha corretamente`
            }
            
        }else{
            mensagem.innerText = ``
        }
    })
})