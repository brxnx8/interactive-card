const campos = document.querySelectorAll('input');
let data = ''


campos.forEach(item => {
    item.addEventListener('keyup', function(e) {
        
        let edit = document.querySelector(`#${e.target.name}`);
        let code = parseInt(e.keyCode);
        
        if((edit.id == 'name') && (code < 65 || code > 91) && (code != 8) ){
            return
        }
        edit.innerText = e.target.value;
    })
})