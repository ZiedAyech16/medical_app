import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import { projectsData } from "../data/projectsData";

import spaceVideo from '../assets/sant.mp4'
import img from '../assets/img1.jpg'
import img1 from '../assets/img2.jpg'
import Footer_ from './Footer';

const Video_ = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];

    return (
        <div className='video_'>
            <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            </div>
            <div className='content hover'>
            <div className='container'>
                <img src={img} className="img"  width={200} height={200} />
                {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                </a> */}
                        <div class="overlay">
                        <div class="text">
                            <h3>Pediarie</h3>
                            <p>La pédiatrie est une branche spécialisée de la médecine qui étudie le développement neuro-sensori-moteur et physiologique normal de l'enfant, ainsi que toute la pathologie qui y a trait</p>
                            </div>
                     </div>
            </div>
            <div className='container'>
                <img src={img1} className="img" alt="ffafa" width={200} height={200} />
                <div className="button-container">
                 {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                 <span className="button">voir le site</span>
                 </a> */}
                        <div class="overlay">
               
                        <div class="text">
                            <h3>Pediarie</h3>
                            <p>La pédiatrie est une branche spécialisée de la médecine qui étudie le développement neuro-sensori-moteur et physiologique normal de l'enfant, ainsi que toute la pathologie qui y a trait</p>
                            </div>

                     </div>
            </div>
        </div>
                {/* <div>
                    <Link to='/Find' className='btn'>Find Doctor +</Link>
                    <Link to='/contact' className='btn btn-light'>Read More</Link>
                </div> */}
            </div>
            
            <Footer_ />
        </div>
        
    )
}

export default Video_