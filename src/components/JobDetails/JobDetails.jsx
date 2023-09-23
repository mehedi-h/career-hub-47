import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredApply, savedApply } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idParse = parseInt(id);
    const job = jobs.find(job => job.id === idParse)
    const handleApply = () => {
        savedApply(idParse)
        toast('You have successfully applied')
    }
    // console.log(job);
    return (
        <div>
            <h2>Job Details by : {id}</h2>
            <div className="grid md:grid-cols-4 gap-5 p-5">
                <div className="md:col-span-3">
                    <h2 className="md:text-base md:font-bold">Job Description : 
                        <span className="md:text-base md:font-normal text-gray-500">{job.job_description}</span>
                    </h2>
                    <br />
                    <h2 className="md:text-base md:font-bold">Job Responsibility : 
                        <span className="md:text-base md:font-normal text-gray-500">{job.job_responsibility}</span>
                    </h2>
                    <br /> 
                    <div>
                        <h2 className="md:text-base md:font-bold">Educational Requirements : </h2>
                        <span className="md:text-base md:font-normal text-gray-500">{job.educational_requirements}</span>
                    </div>
                    <br />
                    <div>
                        <h2 className="md:text-base md:font-bold">Experiences : </h2>
                        <span className="md:text-base md:font-normal text-gray-500">{job.experiences}</span>
                    </div>
                </div>
                <div className="">
                    <div className="md:mb-5 md:p-4 bg-green-50 rounded-md">
                        <div>
                            <h2 className="md:text-lg md:font-bold border-b-2 md:py-2">Job Details</h2>
                        </div>
                        <div className="border-b-2">
                            <h2 className="md:text-base md:font-semibold">Salary : 
                                <span className="text-gray-500">{job.salary}</span></h2>
                            <h2 className="md:text-base md:font-semibold">Job Title : 
                                <span className="text-gray-500">{job.job_title}</span></h2>
                            <h2 className="md:py-4 md:text-lg md:font-bold">Contact Information</h2>
                        </div>
                        <div>
                            <h2 className="md:text-base md:font-semibold">Phone :
                                <span className="text-gray-500">{job.contact_information.phone}</span>
                            </h2>
                            <h2 className="md:text-base md:font-semibold">Email : 
                                <span className="text-gray-500">{job.contact_information.email}</span>
                            </h2>
                            <h2 className="md:text-base md:font-semibold">Address : 
                                <span className="text-gray-500">{job.contact_information.address}</span>
                            </h2>
                        </div>
                    </div>
                    <div>
                        <Link><button onClick={handleApply} className="w-full md:py-2 rounded-md bg-indigo-500 text-white md:font-bold md:text-base">Apply</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;