import { addNewCard } from './addNewCard.js';
import { removeCard } from './removeCard.js'

const addButton = document.querySelector( "#add-button" );
const removeButton = document.querySelector( "#remove-button" );
const gallery = document.querySelector( ".gallery" );
let i = 0;

addButton.addEventListener( "click", () => {
    if ( i < 5 ) {
        addNewCard( gallery, i );
        i++;
    }
}, false );

removeButton.addEventListener( "click", () => {
    if ( i > 0 ) {
        removeCard( gallery );
        i--;
    }
}, false );
