import {Link} from 'react-router-dom';
import image from './photo.jpg';

const AboutUs = props => {
  return(
    <>
    <h1>HI IM GLORIA</h1>
    <p> para 1</p>
    <p> para 2</p>
    <img style ={{width: "20%", height: "20%"}} src={image} alt={"pic of Gloria"}/>
    </>
  )
};

export default AboutUs;