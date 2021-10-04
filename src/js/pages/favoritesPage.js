export default function favoritesPage(){
    const markup = '<h1>Favorites</h1>'
    document.querySelector('#app').insertAdjacentHTML(
        'afterbegin', markup
    )
}