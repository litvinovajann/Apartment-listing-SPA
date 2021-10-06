export default class singleItem {
    constructor(id) {
        this.id = id;
    }
    async getItem() {
        try {
        const queryString = `http://jsproject.webcademy.ru/items/${this.id}`;
        const response = await fetch(queryString);
        const data = await response.json();
        this.result = await data;
        }
        catch(error) {
            alert(error);
        }
    }
}