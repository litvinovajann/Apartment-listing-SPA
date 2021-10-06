import SingleItem from './singleItemModel';
import * as view from './singleItemView'
export default function(state) {
    document.querySelector('#app').innerHTML = '';
    state.singleItem = new SingleItem(state.routeParams);
    state.singleItem.getItem();
    view.render(state.singleItem.result);
    console.log(state.singleItem)
}