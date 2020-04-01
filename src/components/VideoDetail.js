import React from 'react'

export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  )
}
