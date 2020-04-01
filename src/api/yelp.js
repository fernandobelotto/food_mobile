import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer b9tF7BwlpAScXhMYw7dvTLdok57kOe6kl2QSqRSTsMtjhqQpBDWgDCgiTcutVB8gJI74-aE_yl8TyYxrnEtnUZd7xa2hlp3KQE6OGWQ8yPTuCQ85RUHXeGwDHTZ7XnYx'
  }
})
