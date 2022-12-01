import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.

axios.defaults.headers.post['Content-Type'] = 'application/json'
export default axios
