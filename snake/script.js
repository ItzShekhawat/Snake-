
//funzione all'avvio
const DIM = 20; // costante dimensione campo
var campo = new Array(DIM);//vettore campo da gioco
var direzione = "dx"; //direzione destra iniziale dello snake all'avvio
/* Costanti per colori*/
const GRIGIO = "rgb(127, 127, 127)";
const BIANCO = "rgb(255, 255, 255)";
const ROSSO = "rgb(255, 0, 0)";
const BLU = "rgb(0, 0, 255)";
/* POSIZIONE CIBO*/
var xCibo, yCibo; //coordinate cibo
var nCibo;//quanto cibo è stato mangiato

/* POSIZIONE SNAKE */
var posSn x = 1; // coordinata x snake
var posSn y = 1; //coordinate y snake
var coda= new Array(0);// array contenente le posizioni della coda 

function avvia(){
    initMatrice();
    //disegnaMatrice()
    disegnaCampo();
}
function initMatrice(){
    for(var i = 0; i<DIM; i++){
        campo[i]= new Array(DIM);
        //inizializzo la matrice
        for(var i = 0; i<DIM; i++){
            for(var j = 0; i<DIM; j++){
                campo[i][j] = 0;
            }
        }
function disegnaCampo(){
    var refBody = document.getElementsByTagName("body")[0];
    var tabella = document.createElement("table");
    var, riga, cella, btn;
    refBody.appendChild(tabella);
}