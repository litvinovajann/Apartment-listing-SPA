import * as view from './listingView'
export default function (state) {
	// Рендер контейнера для карточек
	view.render();
	// Рендер карточек
	state.results.forEach(function (item) {
		view.renderCard(item);
	});
	state.emitter.subscribe('event:render-listing', async () => {
		//clear card container
		await view.clearListingContainer();
		//render new cards
		await state.results.forEach(function (item) {
			view.renderCard(item);
		});
	});
}