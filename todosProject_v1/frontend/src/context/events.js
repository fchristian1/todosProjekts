import EventEmitter from 'events';
import { DEBUG } from './config';

export const events = new EventEmitter();

if (DEBUG) {

    events.on('init', (...args) => {
        const data = args.join(', ');
        console.log('init event', data);
    });
    events.on('getToken', (...args) => {
        const data = args.join(', ');
        console.log('getToken event', data);
    });
    events.on('setToken', (...args) => {
        const data = args.join(', ');
        console.log('setToken event', data);
    });
    events.on('removeToken', (...args) => {
        const data = args.join(', ');
        console.log('removeToken event', data);
    });
    events.on('login', (...args) => {
        const data = args.join(', ');
        console.log('login event', data);
    });
    events.on('fetchApi', (...args) => {
        const data = args.join(', ');
        console.log('fetchApi event', data);
    });
}