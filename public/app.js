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

    textParagraph.innerHTML = "Det " + txtBoxValue + ":e primtalet är: ";

    txtBoxValue -= 1;

    textParagraph.innerHTML += primtalArray[txtBoxValue];

}

function FibonacciNr() {

    var txtBoxValue = document.getElementById('nrFibonacciInput').value;
    const FibonacciSeqNr = document.getElementById('nrFibonacci');

    var Fsumman = [1,1];

   if ( txtBoxValue == 1) {
        Fsumman = [1];
   }
   if ( txtBoxValue == 2) {
        Fsumman = [1,1];
   }

    for ( var i=2; i < txtBoxValue; i++) {

        Fsumman[i]= Fsumman[i-1]+ Fsumman[i-2];
    }

    FibonacciSeqNr.innerHTML = "Det " + txtBoxValue + ":e numret i fibonacci sekvensen är: ";

    txtBoxValue -= 1;
    FibonacciSeqNr.innerHTML += Fsumman[txtBoxValue];

}

function FibonacciSeq() {

    var txtBoxValue = document.getElementById('nrFibonacciSeqInput').value;
    const FibonacciSeqList = document.getElementById('nrFibonacciSeq');

    var Fsumman = [1,1];

   if ( txtBoxValue == 1) {
        Fsumman = [1];
        FibonacciSeqList.innerHTML = "Det första talet i fibonacci sekvensen är: ";
   }

   if ( txtBoxValue == 2) {
    Fsumman = [1,1]; 
    FibonacciSeqList.innerHTML = "De första " + txtBoxValue + " numrena i fibonacci sekvensen är: ";
   }

    for ( var i=2; i < txtBoxValue; i++) {

        Fsumman[+i] = Fsumman[i-1] + Fsumman[i-2];    
        FibonacciSeqList.innerHTML = "De första " + txtBoxValue + " numrena i fibonacci sekvensen är: ";
    }


    FibonacciSeqList.innerHTML += Fsumman;

}
