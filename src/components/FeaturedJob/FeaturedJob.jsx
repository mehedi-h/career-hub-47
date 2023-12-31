import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(2)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []) 
    // console.log(jobs);
    return (
        <div>
            <div className="text-center">
                <h2 className="text-lg font-semibold md:text-4xl md:font-bold">Featured Job : {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 md:gap-7">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)}
                className="btn btn-primary md:font-bold">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJob;