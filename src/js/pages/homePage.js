import filter from '/src/js/filter/filterController.js';
import listing from '../listing/listingController.js';
export default async function homePage(state){
    const markup = '<h1>HomePage</h1>'
    document.querySelector('#app').insertAdjacentHTML(
        'afterbegin', markup
    )
    await filter(state);
    listing(state);
}