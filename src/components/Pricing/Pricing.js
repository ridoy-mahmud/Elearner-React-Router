import React from 'react';
import "./Pricing.css"

const Pricing = () => {
    return (
        <div className='pricing-part pt-5'>
            <h1>Pricing</h1>
            <hr className="w-25 mx-auto" />
            <div className="d-flex " >
                <div className="card-body card-style">
                    <h1 className="d-flex justify-content-center"><span>$</span>60</h1>
                    <h6 className="card-subtitle mb-2 text-muted">Per month price</h6>
                    <div className="mt-4">
                        <h6>Includes</h6>
                        <ul className="text-start">
                            <li>Dedicated teacher and administrator support.</li>
                            <li>Integrations, including Clever and Google Classroom.</li>
                            <li>All teacher features, including teacher collaboration tools such as co-teacher support.</li>
                        </ul>
                    </div>
                </div>
                <div className="card-body card-style">
                    <h1 className="d-flex justify-content-center"><span>$</span>35</h1>
                    <h6 className="card-subtitle mb-2 text-muted">Per 15 days price</h6>
                    <div className="mt-4">
                        <h6>Includes</h6>
                        <ul className="text-start">
                            <li>Dedicated teacher and administrator support.</li>
                            <li>Integrations, including Clever and Google Classroom.</li>
                            <li>All teacher features, including teacher collaboration tools such as co-teacher support.</li>
                        </ul>
                    </div>
                </div>
                <div className="card-body card-style">
                    <h1 className="d-flex justify-content-center"><span>$</span>18</h1>
                    <h6 className="card-subtitle mb-2 text-muted">Per week price</h6>
                    <div className="mt-4">
                        <h6>Includes</h6>
                        <ul className="text-start">
                            <li>Dedicated teacher and administrator support.</li>
                            <li>Integrations, including Clever and Google Classroom.</li>
                            <li>All teacher features, including teacher collaboration tools such as co-teacher support.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;