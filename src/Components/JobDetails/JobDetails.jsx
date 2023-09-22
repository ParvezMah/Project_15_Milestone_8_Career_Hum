import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseFloat(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleAppliedJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied Jobs')
    }


    return (
        <div>
            <h3>Job Details of : {id}</h3>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                </div> 
                <div className="border ">
                    <h3 >Side Things</h3>
                    <button onClick={handleAppliedJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;