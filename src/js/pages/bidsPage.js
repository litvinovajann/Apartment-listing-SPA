export default function bidsPage(){
    const markup = '<h1>Bids</h1>'
    document.querySelector('#app').insertAdjacentHTML(
        'afterbegin', markup
    )
}