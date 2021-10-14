import { getNewCard } from './getNewCard.js';
export const addNewCard = ( gallery, heroIndex ) => gallery.insertAdjacentElement( "beforeend", getNewCard( heroIndex ) );
