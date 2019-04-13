import axios from 'axios'

const baseUrl = process.env.APP_URL

const api = axios.create({
  baseURL: baseUrl,
  auth: {
    username: process.env.BASIC_AUTH_USER,
    password: process.env.BASIC_AUTH_PASS
  }
})

export const getTopTen = async () => {

  const { data } = await api.get('api/getTopTen')
  return data
}

export const getMems = async () => {
  const { data } = await api.get('api/getMems')
  return data
}

export const searchProducts = async (query) => {
  const { data } = await api.get('api/getProductBase?name=' + query + "&currency=EUR")
  return data
}

export const getProduct = async (productBaseId) => {
  const { data } = await api.get("api/getProductBaseRelated?id=" + productBaseId)
  return data
}

export const getDeals = async () => {
  const { data } = await api.get('api/getDeals')
  return data
}

export const upVoteDeal = async (dealId) => {
  const { data } = await api.post('api/upVote/' + dealId)
  return data
}

export const getUser = async (userId) => {
  const { data } = await api.get('api/getUser/' + userId)
  return data
}

export const getUserDeals = async (name) => {
  const { data } = await api.get('api/getUserDeals?name=' + name)
  return data
}

export const getUsers = async () => {
  const { data } = await api.get('api/getUsers/')
  return data
}

export const getUserByEmail = async (email) => {
  const { data } = await api.post('api/getUserByEmail/' + email)
  return data
}

export const addDealByUser = async (deal) => {
  const { data } = await api.post('api/front/addDealByUser', deal)
  return data
}

export const addDealByGuest = async (deal) => {
  const { data } = await api.post('api/front/addDealByGuest', deal)
  return data
}

export const createAccount = async (payload) => {
  const { data } = await api.post('api/createAccount', { payload })
  return data
}

export const loginUser = async (credentials) => {
  const { data } = await axios.post('auth/login-user', credentials )
  return data
}