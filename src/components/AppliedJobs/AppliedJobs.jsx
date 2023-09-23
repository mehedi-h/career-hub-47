import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApply } from "../Utility/LocalStorage";
import { Link } from 'react-router-dom';


const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [allApplyJobs, setAllApplyJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(allApplyJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = allApplyJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = allApplyJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect( () => {
        const getStoredIds = getStoredApply()
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => getStoredIds.includes(job.id))

            const jobsApplied = []
            for (const id of getStoredIds){
                const job = jobs.find(job => job.id === id)
                    if (job) {
                        jobsApplied.push(job)
                    }
                }
                setAllApplyJobs(jobsApplied);
                setDisplayJobs(jobsApplied)
        }
    }, [])

    return (
        <div>
            <h3>All Applied jobs : {allApplyJobs.length}</h3>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All</a></li>
                    <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={allApplyJobs.id}>
                        <div className="grid md:grid-cols-4 md:my-10 border border-gray-200 rounded-md">
                            <div>
                                <img src={job.logo} alt="" />
                            </div>
                            <div className="md:col-span-3">
                                <div className="md:flex md:px-6 justify-between items-center">
                                    <div>
                                        <h2 className="md:my-3 md:font-bold md:text-lg">{job.job_title}</h2>
                                        <h2 className="md:font-medium md:text-lg">{job.company_name}</h2>
                                        <div className="flex gap-2 md:my-3">
                                            <h3 className=" text-blue-500 border-2 border-blue-500  rounded-md md:px-3 md:py-1 text-xs md:text-base font-normal md:font-semibold">{job.remote_or_onsite}</h3>
                                            <h3 className="text-blue-500 border-2 border-blue-500  rounded-md md:px-3 md:py-1 text-xs md:text-base font-normal md:font-semibold">{job.job_type}</h3>
                                        </div>
                                        <div className="flex gap-5">
                                            <h3 className="text-xs md:text-base font-normal md:font-semibold">{job.location}</h3>
                                            <h3 className="text-xs md:text-base font-normal md:font-semibold">{job.salary}</h3>
                                        </div>
                                    </div>
                                <div>
                                    <Link><button className="py-2 px-3 md:py-2.5 md:px-4 rounded-md bg-indigo-600 text-white text-xs font-semibold md:text-base md:font-bold">View Details</button></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;