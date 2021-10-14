import { addNewCard } from './addNewCard.js';

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

removeButton.addEventListener( "click", () => console.log( "Remove button clicked" ), false );
