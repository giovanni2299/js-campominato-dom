// console.log('ciao mamma')

// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella.
// la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//collegare il bottone per creare la griglia
const createGrid = document.querySelector('.btn');

const selectElementDOM = document.querySelector('.select');

//creo l'evento quando clicco il bottone

createGrid.addEventListener('click', function() {

    //creare la griglia 

    const gridElement = document.querySelector('.grid');

    //creare le celle all interno della griglia 

        //do una dimensione alle celle 

        let dimention ;

        //provo a fare il bonus scegliendo la difficoltà 
        if(selectElementDOM.value === 'easy'){

            dimention = 10;

            gridElement.classList.add('easy');

            gridElement.classList.remove('medium', 'hard');

        }else if(selectElementDOM.value === 'medium'){

            dimention = 9;

            gridElement.classList.add('medium')

            gridElement.classList.remove('easy', 'hard');

        } else{

            dimention = 7;

            gridElement.classList.add('hard')

            gridElement.classList.remove('medium', 'easy');
        }

        //moltiplico le celle per ottenere una griglia 10 x 10
        const squereDimention = dimention * dimention;

        gridElement.innerHTML = ''

    //lggo le celle singolarmente per tramite un ciclo for

    for(let i = 0; i < squereDimention; i++){

        //per generare le celle da 1 a 100 altrimenti sarebbe da 0 a 99

        const num = i + 1; 

        //aggiungo le celle al dom all interno di grid
            //creo un div al interno del dom 

        const cellElement = document.createElement('div');
            //gli assegno la classe cell 

        cellElement.className = 'cell';

            //stampo in numeri all interno delle nostre celle per averle numerate da 1 a 100

        cellElement.innerHTML = num;

            //"appendo" le mie celle al interno del grid

        gridElement.appendChild(cellElement);

        //ad ogni re-click le celle perdono il colore dark green
        cellElement.addEventListener('click', function(){
            cellElement.classList.toggle('bg-dark-green');
            console.log(num);
        })
    }

})


