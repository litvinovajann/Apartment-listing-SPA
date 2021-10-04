export default class Filter {
    constructor() {
        this.query = '';
    }
    async getParams() {
        try {
        const queryString = 'http://jsproject.webcademy.ru/itemsinfo';
        const response =  await fetch(queryString);
        const data = await response.json();
        this.params = await data;
        } catch(error) {
            console.log('Eror occured in DataFetch' + error);
        }
    } 
    async getResults(){
        try {
            const queryString = 'http://jsproject.webcademy.ru/items'+  this.query;
            const response = await fetch(queryString);
            const data = await response.json();
            this.result = await data;
        } 
        catch(error) {
            console.log('Eror occured in DataFetch' + error);
        }
    }
}