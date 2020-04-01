import React from 'react'
import { VideoItem } from './VideoItem'

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}></VideoItem>
  ))
  return <div className='ui relaxed divided list'>{renderedVideos}</div>
}
