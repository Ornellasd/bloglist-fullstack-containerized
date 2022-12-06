import axios from '../utils/apiClient'
const baseUrl = '/api/users'

const getAll =  async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }