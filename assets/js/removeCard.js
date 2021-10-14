export const removeCard = ( gallery ) => {
    const countNodes = gallery.childNodes.length;
    ( countNodes ) ? gallery.removeChild( gallery.childNodes[ countNodes - 1 ] ) : console.log( "No more cards can be removed" );
}
