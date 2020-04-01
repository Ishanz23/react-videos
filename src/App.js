import React from 'react'
import Searchbar from './components/Searchbar'
import { VideoDetail } from './components/VideoDetail'
import { VideoList } from './components/VideoList'
import { youtube, API_KEY } from './api/youtube'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onFormSubmit('react js')
  }

  onFormSubmit = async term => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          type: 'video',
          key: API_KEY,
          maxResults: 10
        }
      })
      this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
    } catch (error) {
      console.log(error)
    }
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <Searchbar onFormSubmit={this.onFormSubmit}></Searchbar>
        <div className='ui grid'>
          <div className='eleven wide column'>
            <VideoDetail video={this.state.selectedVideo}></VideoDetail>
          </div>
          <div className='five wide column'>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
          </div>
        </div>
      </div>
    )
  }
}

export default App
