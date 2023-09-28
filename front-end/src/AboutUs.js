import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Messages.css'
import loadingIcon from './loading.gif'

const AboutUs = props => {
  const [paragraphs, setParagraphs] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [imageURL, setImageURL] = useState('')

  const getMessages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        setParagraphs(response.data.paragraphs)
        setImageURL(response.data.imageURL)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    getMessages()

    const intervalHandle = setInterval(() => {
      getMessages()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, [])

  return (
    <>
      <h1 style ={{textAlign:'center'}}>About me: Gloria!</h1>
      {paragraphs.map(message => (
        <p
        style={{marginBottom: '10px'}}
        >{message}</p>
      ))}
      <img
        style={{ width: '30%', height: '20%' }}
        src={imageURL}
        alt="photo of Gloria"
      />
    </>
  )
}

export default AboutUs
