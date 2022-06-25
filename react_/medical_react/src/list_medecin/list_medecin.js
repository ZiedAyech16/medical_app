import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./list_medecin.css";

function ListMedecin() {
    
        return (
            <div>

            <table className="container_items">
                <tr className="item">
                    <td>
                        <div className="display_item">
                            <img src="/images/medecin1.jpg" width={40} height={40}></img>
                        <h6> <Link to="/pediatres" className="link_">Pédiatre</Link></h6>
                        </div>
                    </td>

                    <td>
                        <div className="display_item">
                            <img src="/images/medecin2.jpg" width={40} height={40}></img>
                            <h6><Link to="/psychotherapie" className="link_">Psychothérapie</Link></h6>
                        </div>
                    </td>

                <td >
                        <div className="display_item">
                            <img src="/images/medecin3.png" width={40} height={40}></img>
                            <h6><Link to="/dentiste" className="link_">Dentiste</Link></h6>
                        </div>
                    </td>
 
                    <td >
                        <div className="display_item">
                            <img src="/images/Allergists.jpg" width={40} height={40}></img>
                            <h6><Link to="/allergists" className="link_">Allergists</Link></h6>
                        </div>
                    </td>

              

                    <td >
                        <div className="display_item">
                            <img src="/images/Dermatologists.webp" width={40} height={40}></img>
                            <h6><Link to="/dermatologists" className="link_">Dermatologists</Link></h6>
                        </div>
                    </td>

                    <td >
                        <div className="display_item">
                            <img src="/images/gynecologists.jpg" width={40} height={40}></img>
                            <h6><Link to="/gynecologists" className="link_">gynecologists</Link></h6>
                        </div>
                    </td>

                    <td >
                        <div className="display_item">
                            <img src="/images/cardiologists.jpg" width={40} height={40}></img>
                            <h6><Link to="/cardiologists" className="link_">Cardiologists</Link></h6>
                        </div>
                    </td>

                </tr>
                
                    
                    
                    
                    
                    
            </table>
            </div>
        );
    
}

export default ListMedecin;