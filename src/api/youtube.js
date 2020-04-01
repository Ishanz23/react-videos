import Axios from 'axios'

export const API_KEY = 'AIzaSyCd0po8p3BCdNcw4xXqaIKmw5hIeLP_Qt0'

export const youtube = Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: API_KEY
  }
})
