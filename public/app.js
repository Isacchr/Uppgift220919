console.log('hej from js')

function primtalLista() {
 
    var txtBoxValue = document.getElementById('nrInputLista').value;
    const primtalArray = new Array(2,3,5,7,11);

    var textParagraph = document.getElementById('primtalListaText');
    textParagraph.innerHTML = "De första " + txtBoxValue + " primtalen är: ";

    for (var i = 0; i < txtBoxValue; i++) {

        textParagraph.innerHTML += primtalArray[i] + ", ";

    };

}

function primtalPosition() {

    var txtBoxValue = document.getElementById('nrInputPrimtal').value;
    const primtalArray = new Array(2,3,5,7,11);

    const textParagraph = document.getElementById('primtalPositionText');

    txtBoxValue -= 1;

    textParagraph.innerHTML = "Det " + txtBoxValue + " primtalet är: ";

    textParagraph.innerHTML += primtalArray[txtBoxValue];

}

