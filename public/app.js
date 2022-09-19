console.log('hej from js')

function primtalLista() {
 
    var txtBoxValue = document.getElementById('nrInputLista').value;
    const primtalArray = new Array(2,3,5,7,11);

    for (var i = 0; i < txtBoxValue; i++) {

        console.log(primtalArray[i]);

    };

}

function primtalPosition() {

    var txtBoxValue = document.getElementById('nrInputPrimtal').value;
    const primtalArray = new Array(2,3,5,7,11);

    txtBoxValue -= 1;

    console.log(primtalArray[txtBoxValue]);
}

