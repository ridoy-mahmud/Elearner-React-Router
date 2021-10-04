import React, { useEffect, useState } from 'react';
import "./Services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const element = <FontAwesomeIcon icon={faStar} />
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeDb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-body">
            <h1 className="py-4">Services</h1>
            <hr className="w-25 mx-auto" />
            {
                services.map(service =>
                    <div className="d-flex justify-content-center">
                        <div className="row m-4 c-body w-75">
                            <div className="col-4">
                                <img className="card-image" src={service.image} alt="" />
                                <h5 className="mt-3">Fees -  ${service.price}</h5>
                            </div>
                            <div className="col-8 text-start">
                                <h4>Instructor - {service.name}</h4>
                                <p >{service.info}</p>
                                <div className="d-flex mt-4">
                                    <h6 className="me-3 border p-2">Teaches - {service.teaches}</h6>
                                    <h6 className="me-3 border p-2">From {service.from}</h6>
                                </div>
                                <h6 className="mt-2 p-2">Duration {service.time}</h6>
                                <button className="btn btn-danger px-4 mt-2 ms-2">Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Services;