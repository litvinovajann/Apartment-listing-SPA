export default function ErrorPage(){
    const markup = '<h1>Error</h1>'
    document.querySelector('#app').insertAdjacentHTML(
        'afterbegin', markup
    )
}