import axios from 'axios';
// hash = 0d415f7d374ff08df98712630b6f7e95
// ts = 1
// api key 5e40d88cab4a4d10303ae73eec0db038
const axiosConfig = {
    baseURL: 'https://gateway.marvel.com',
    params: {
        ts: 'thesoer',
        apikey: '5e40d88cab4a4d10303ae73eec0db038',
        hash: 'cfff9edc11dc8fb4258461824f523825'
    }
  };
  
export default axios.create(axiosConfig);