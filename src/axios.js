import axios from 'axios'

const instance =axios.create({
    baseURL:"http://http://localhost:9000"
})
export default instance