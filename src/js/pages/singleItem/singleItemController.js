import SingleItem from './singleItemModel.js';
import * as view from './singleItemView.js';
export default async function (state){
    // Создаем новый объект singleItem
    state.singleItem = new SingleItem(state.routeParams);
    // Получаем данные с сервера
    await state.singleItem.getItem();   
    // Отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result);
    //open modal window
    document.querySelector(".button-order").addEventListener('click', (e) => {
        view.showModal();
    })
    document.querySelector('.modal__close').addEventListener('click', (e) => {
        view.hideModal();
    })
    document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.modal')) {
            return null;
        } else {
            view.hideModal();
        }
    })
    //submit form 
    document.querySelector('.modal__form').addEventListener('submit',async(e) => {
        e.preventDefault();
        const formData =  view.getInput();
        await state.singleItem.submitForm(formData);
        console.log(state.singleItem)
        if (state.singleItem.response.message === 'Bid Created') {
            alert('Ваша заявка успешно получена!');
            view.hideModal();
            view.clearInput();
        } else if (state.singleItem.response.message === 'Bid Not Created'){
            state.singleItem.response.errors.forEach(item => {
                alert(item);
            });
        }
    })
}    