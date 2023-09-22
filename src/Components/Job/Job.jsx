import { Link } from "react-router-dom";

import { GrLocation } from "react-icons/gr";
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 mr-4 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">{remote_or_onsite}</button>
                    <button className="px-5 mr-4 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <h2><GrLocation></GrLocation></h2>
                    <h2 className="mr-4">{location}</h2>
                    <h2 className="mr-4">{salary}</h2>
                </div>
                <div className="card-actions">
                <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
            </div>
            </div>
    );
};

export default Job;