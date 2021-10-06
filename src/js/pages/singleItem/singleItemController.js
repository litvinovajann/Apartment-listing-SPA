import SingleItem from './singleItemModel.js';
import * as view from './singleItemView.js';

export default async function (state){
    // Создаем новый объект singleItem
    state.singleItem = new SingleItem(state.routeParams);
    // Получаем данные с сервера
    await state.singleItem.getItem();   // Отрисовываем разметку для отдельного объекта
    view.render(state.singleItem.result);
}