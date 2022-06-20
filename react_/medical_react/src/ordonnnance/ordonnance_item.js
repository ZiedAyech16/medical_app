import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./ordonnance.css";
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function OrdonnanceItem(props) {
    const ordonnance = props.ordonnance;
    const navigate = useNavigate();
    const [ordonnance_, setOrdonnance_] = useState({});

    useEffect(()=>{
        axios.get(`/ordonnances/${ordonnance.id}`).then(r=>setOrdonnance_(r.data));
    },[])


    const editer_ = ()=>navigate({
        pathname:'/ordonnances/editer',
        search:createSearchParams(ordonnance).toString()
    });

    const imprimer = ()=>{

        Swal.fire({
            title: 'Imprimer Les Données?',
            text: "pour imprimer cliquer ai boutton imprimer!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Imprimer!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate({
                    pathname:"/ordonnances/imprimer",
                    search:createSearchParams(ordonnance_).toString()
                })
            Swal.fire(
                'Imprimer!',
                'Ajouter au base de données',
                'success'
            )
            }
        })

    }

    const delete_ = (e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'vous avez sure?',
            text: "vous pouvez annuler!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            axios.delete(`/ordonnances/${ordonnance.id}`).then(r=>console.log(r));

        })

    }
  return (
    <div>
        <div className='ordonnance_items_'>
        <div className='ord_item_'>
            <h3>Patient :</h3>
            <h6>{ordonnance.Patient.nom+' '+ordonnance.Patient.prenom} </h6>
            <h6>{'Contact : '+ordonnance.Patient.contact} </h6>
            <h6>{'Email : '+ordonnance.Patient.email} </h6>
        </div>
        <div className='ord_item_'>
            <h4>Date : </h4>
            <h6>{ordonnance.createdAt.substring(0,10)} </h6>
        </div>
        <div className='ord_item_'>
            <h3>{'Detail : '}</h3>
            <h6>{ordonnance.apci==='0'? 'Apci : Oui':'Apci : Non'} </h6>
            <h6>{'Medicament : '+ordonnance.medicament} </h6>
        </div>
        <div className='ord_item_'>
            {
                localStorage.getItem("role")==="medecin"?
                <>
                                <button className='button_ordonnance__ color_edite' onClick={editer_}>Editer</button>
            <button className='button_ordonnance__ color_delete' onClick={delete_}>Supprimer</button>
   
                </>:<button className='button_ordonnance__ color_imprimer' onClick={imprimer}>Imprimer</button>
            }
     </div>
        </div>
    </div>
  )
}

OrdonnanceItem.propTypes = {}

export default OrdonnanceItem
