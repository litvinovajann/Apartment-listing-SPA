export default class EventEmitter {
    constructor() {
        this.events = {}
    }
    emit(eventName, data) {
        const event = this.events[eventName];
        if (event){
            event.forEach(fn => {
                fn.call(null, data)
            });
        }
    }
    subscribe(eventName, func) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(func);
        return () => {
            this.events[eventName] = this.events[eventName].filter(
                (eventFunc) => func !== eventFunc
            )
        }
    }
}