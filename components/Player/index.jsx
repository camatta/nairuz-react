import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player';

import backgroundControl from '../../public/cases/linx/background-control-btn.png'
import podcastImage from '../../public/cases/linx/podcast.png'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [progress, setProgress] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleDuration = (duration) => {
    const fileMinutes = parseInt(duration / 60)
    const restSeconds = parseInt(duration % 60)

    setDuration(duration)
    setSeconds(restSeconds)
    setMinutes(fileMinutes)
  }

  const handleElapsedTime = (event) => {
    const elapsedSeconds = parseInt(event.playedSeconds)

    let currentProgress = (event.playedSeconds / duration) * 100;
    currentProgress = currentProgress.toFixed(2)

    setProgress(currentProgress)
    setElapsedSeconds(elapsedSeconds)
  }

  const ElapsedTime = ({ seconds }) => {
    return (
      <time dateTime={`P${Math.round(seconds)}S`}>
        {format(seconds)}
      </time>
    )
  }
  
  const format = (seconds) => {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
  }
  
  const pad = (string) => {
    return ('0' + string).slice(-2)
  }

  return (
    <div className='podcast'>
      <Image src={podcastImage} alt="Entre amigos by ecommerce Brasil" width={232} height={232} />

      <div className='podcast-content'>
        <div className='podcast-header'>
          <button type='button' className='btn-control' onClick={handlePlayPause}>
            <span className='btn-icon' style={{ backgroundImage: `url(/cases/linx/${isPlaying ? 'icon-pause.png' : 'icon-play.png'})` }}></span>
            <Image src={backgroundControl} alt="Tocar podcast" width={80} height={80} />
          </button>

          <div className='podcast-info'>
            <h6>Entre Amigos by E-Commerce Brasil</h6>
            <h3>Brasil e Linx | Como consolidar a presença digital</h3>
          </div>
        </div>

        <div className='podcast-timeline'>
          <div className='wave-not-played'></div>
          <div className='wave-played' style={{
            backgroundImage: `url(/cases/linx/wave-played.svg)`,
            width: `${progress}%`
          }}></div>
          <ReactPlayer
            className='player'
            url='/cases/linx/podcast-file.mp3'
            width='100%'
            height={80}
            playing={isPlaying}
            onDuration={handleDuration}
            onProgress={handleElapsedTime}
          />
        </div>

        <div className='podcast-footer'>
          <span><ElapsedTime seconds={elapsedSeconds} /> | {minutes}:{seconds}</span>
        </div>
      </div>
    </div>
  )
}

export { Player }