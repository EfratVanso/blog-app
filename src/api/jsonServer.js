import axios from 'axios';

export default axios.create({
    baseURL: 'http://970be270c533.ngrok.io' //it changes every 8 hours!
});