import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import { projectsData } from "../data/projectsData";

import spaceVideo from '../assets/sant.mp4'
import img from '../assets/pediatre.jpg'
import img1 from '../assets/derma.jpg'
import img2 from '../assets/dentiste.jpg'
import img3 from '../assets/psychiatre.jpg'
import img4 from '../assets/gynecolo.jpg'
import img5 from '../assets/cardiologie.jpg'

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
                            <h3>Pédiatrie</h3>
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
                            <h3>Dermatologue</h3>
                            <p>La dermatologie est une spécialité de médecine qui s'occupe de la peau, des muqueuses et des phanères (ongles, cheveux, poils)</p>
                            </div>

                     </div>
            </div>


        
            
        </div>
          
            </div>


            <div className='content hover'>
            <div className='container'>
                <img src={img2} className="img"  width={200} height={200} />
                {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                </a> */}
                        <div class="overlay">
                        <div class="text">
                            <h3>Dentiste</h3>
                            <p>Le dentiste, aussi appelé chirurgien dentiste, est un professionnel de la médecine dentaire et de l’odontologie. Il peut traiter et soigner : les dents, des gencives ou des mâchoires</p>
                            </div>
                     </div>
            </div>
            <div className='container'>
                <img src={img3} className="img" alt="ffafa" width={200} height={200} />
                <div className="button-container">
                 {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                 <span className="button">voir le site</span>
                 </a> */}
                        <div class="overlay">
               
                        <div class="text">
                            <h3>Psychiatre</h3>
                            <p>La psychothérapie comprend les soins ou l'accompagnement, prodigués par une personne formée à cela, à une ou plusieurs autres personnes souffrant de problèmes psychologiques, parfois en complément d'autres types d'interventions à visée thérapeutique</p>
                            </div>

                     </div>
            </div>


        
            
        </div>
          
            </div>


            <div className='content hover'>
            <div className='container'>
                <img src={img4} className="img"  width={200} height={200} />
                {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                </a> */}
                        <div class="overlay">
                        <div class="text">
                            <h3>Gynécologue</h3>
                            <p>La gynécologie est une spécialité médico-chirurgicale qui s'occupe de la physiologie et des maladies de l'appareil génital féminin. Le médecin spécialisé pratiquant la gynécologie s'appelle un gynécologue. Cette spécialité peut aussi être pratiquée par une sage-femme</p>
                            </div>
                     </div>
            </div>
            <div className='container'>
                <img src={img5} className="img" alt="ffafa" width={200} height={200} />
                <div className="button-container">
                 {/* <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className="hover">
                 <span className="button">voir le site</span>
                 </a> */}
                        <div class="overlay">
               
                        <div class="text">
                            <h3>Cardiologue</h3>
                            <p>La cardiologie est une branche de la médecine qui traite des troubles du cœur ainsi que de certaines parties du système circulatoire</p>
                            </div>

                     </div>
            </div>


        
            
        </div>
          
            </div>
                  {/* <div>
                    <Link to='/Find' className='btn'>Find Doctor +</Link>
                    <Link to='/contact' className='btn btn-light'>Read More</Link>
                </div> */}
            <Footer_ />
        </div>
        
    )
}

export default Video_