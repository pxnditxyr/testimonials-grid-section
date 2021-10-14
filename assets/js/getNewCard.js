import { heroes } from './data/heroes.js';

const createNewTag = ( tag, tagClass, tagSrc, tagHref ) => {
    tag = document.createElement( tag );
    tagClass && tag.classList.add( tagClass );
    tagSrc ? tag.src = tagSrc : undefined;
    tagHref ? tag.href = tagHref : undefined;
    return tag;
}
const createElements = ({ name, className }) => ({
    card: createNewTag( "article", "card" ),
    cardHeader: createNewTag( "section", "card-header" ),
    cardBody: createNewTag( "section", "card-body" ),
    cardImage: createNewTag( "img", "card-reviewer-pic", `./assets/images/image-${ name.split( " " )[ 0 ].toLowerCase() }.jpg` ),
    cardName: createNewTag( "span" ),
    cardGraduate: createNewTag( "p" ),
    cardIntro: createNewTag( "p", "card-intro" ),
    cardReview: createNewTag( "p", "card-review" ),
});

const createTextNodes = ({ name, graduate, intro, review  }) => ({
    cardNameText: document.createTextNode( name ),
    cardGraduateText: document.createTextNode( graduate ),
    cardIntroText: document.createTextNode( intro ),
    cardReviewText: document.createTextNode( review ),
});

export const getNewCard = ( heroIndex ) => {
    const {
        card,
        cardHeader,
        cardBody,
        cardImage,
        cardName,
        cardGraduate,
        cardIntro,
        cardReview,
    } = createElements( heroes[ heroIndex ] );

    const { className } = heroes[ heroIndex ];

    const cardClasses = className.split( " " );
    cardClasses.map( cardClass => {
        card.classList.add( cardClass );
    });
        

    const {
        cardNameText,
        cardGraduateText,
        cardIntroText,
        cardReviewText,
    } = createTextNodes( heroes[ heroIndex ] );

    cardName.appendChild( cardNameText );
    cardGraduate.appendChild( cardGraduateText );
    cardIntro.appendChild( cardIntroText );
    cardReview.appendChild( cardReviewText );

    cardHeader.insertAdjacentElement( "beforeend", cardImage );
    cardHeader.insertAdjacentElement( "beforeend", cardName );
    cardHeader.insertAdjacentElement( "beforeend", cardGraduate );

    cardBody.insertAdjacentElement( "beforeend", cardIntro );
    cardBody.insertAdjacentElement( "beforeend", cardReview );

    card.insertAdjacentElement( "beforeend", cardHeader );
    card.insertAdjacentElement( "beforeend", cardBody );

    return card;
}
