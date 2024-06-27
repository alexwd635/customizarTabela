var modal = document.getElementById('modal');
var mascara = document.getElementById('mascara');

var checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(function(checkbox) {
    checkbox.checked = true;
});

function fecharModal(){
    modal.style.display = "none";
    mascara.style.display = "none";
}
function abrirModal(){
    modal.style.display = "block";
    mascara.style.display = "block";
}

function selecaoDecolunas(val) {
    var colunaForm = document.getElementsByName('coluna');
    var colunas = document.querySelectorAll('td');

    var listAlterar = [];

    if(val == 1){
        for (let index = 0; index < colunas.length; index++) {
            colunas[index].classList.remove('hide');
        }

        for (let index = 0; index < colunaForm.length; index++) {
            if(colunaForm[index].checked == false){
                listAlterar.push(colunaForm[index].value);
            }
        }

        listAlterar.forEach(hide=>{
            colunas.forEach(item=>{
                if(item.innerText == hide){
                    item.classList.add('hide');
                }
            })
        });

    }else{
        colunas.forEach(item=>{
            item.classList.add('hide');
        })
      
        for (let index = 0; index < colunaForm.length; index++) {
            if(colunaForm[index].checked == true){
                colunaForm[index].checked == false;
            }
        }

        var checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
}
