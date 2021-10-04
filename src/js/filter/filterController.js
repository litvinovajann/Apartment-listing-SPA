import Filter from './filterModel';
import * as view from './filterView.js';
export default async function(state) {
    //make new filter object
    if (!state.filter) state.filter = new Filter();
    //getParams for filter
    await state.filter.getParams();
    view.render(state.filter.params);
    //make query to server
    await state.filter.getResults();
	state.results = state.filter.result;
    view.changeButtonText(state.filter.result.length);
    //listen to events in the form
    const form = document.getElementById("filterForm");
    form.addEventListener('change', async function(e) {
      e.preventDefault();
      state.filter.query = view.getInput();
      await state.filter.getResults();
      view.changeButtonText(state.filter.result.length);
    })
    form.addEventListener('reset', async function() {
        state.filter.query = '';
        await state.filter.getResults();
        view.changeButtonText(state.filter.result.length);
    })
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        await state.filter.getResults();
        state.results = state.filter.result;
        state.emitter.emit('event:render-listing', {});
    })
}