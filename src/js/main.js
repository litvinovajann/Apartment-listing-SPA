import homePage from './pages/homePage';
import errorPage from './pages/errorPage';
import singleItemPage from './pages/homePage';
import favoritesPage from './pages/homePage';
import bidsPage from './pages/bidsPage';
import EventEmitter from './utils/EventEmitter.js';
const state = {
    results: [],
    emitter: new EventEmitter(),
};
//array of routes
const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: 'item',
        component: singleItemPage
    },
    {
        path: 'favorites',
        component: favoritesPage
    },
    {
        path: 'bids',
        component: bidsPage
    },
];
//function to take route and give path
function findComponentByPath(path,routes) {
    return routes.find(function(route){
        if (route.path == path) {
            return route.component;
        }
    })
}
//take url, find component, run component
function router() {
    //split path to array
    const pathArray = location.hash.split('/');
    //set current path
    let currentPath = pathArray[0] == '' ? '/' :pathArray[1];
    currentPath = currentPath === ''? '/' : currentPath;
    //chose matching component from router or error page
    const {
        component = errorPage 
    } = findComponentByPath(currentPath, routes) || {};
    component(state);
}
window.addEventListener('hashchange',router);
window.addEventListener('load', router);