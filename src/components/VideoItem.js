import './VideoItem.css'
import React from 'react'

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}
