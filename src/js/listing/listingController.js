export default function(state) {
    state.emitter.subscribe('event:renderListing', () => {
        console.log('callback emit function')
    }) 
}