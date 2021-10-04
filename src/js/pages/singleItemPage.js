export default function singleItemPage(){
    const markup = '<h1>Item</h1>'
    document.querySelector('#app').insertAdjacentHTML(
        'afterbegin', markup
    )
}