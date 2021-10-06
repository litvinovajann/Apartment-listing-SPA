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
    async submitForm(formData) {
        try {
            const queryString = `http://jsproject.webcademy.ru/bidnew`;
            const response = await fetch(queryString, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                }, 
                body: JSON.stringify(formData)
            });
            this.response = await response.json();
            }
            catch(error) {
                alert(error);
            }
    }
}