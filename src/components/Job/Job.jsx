import { RiUserLocationLine, RiMoneyDollarBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary,ob_description, job_responsibility, educational_requirements, experiences, contact_information} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="md:pt-10">
        <img className="py-2.5 md:py-5"
          src={logo}
          alt={`${company_name} logo`}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-sm font-medium md:text-base md:font-semibold">{job_title}</h2>
        <p className="text-sm md:text-base">{company_name}</p>
        <div>
            <button className="px-2.5 py-1.5 md:px-3 text-emerald-400 md:py-2 text-sm md:text-lg font-medium md:font-bold border-2 border-emerald-400 rounded-md mr-4">{remote_or_onsite}</button>
            <button className="px-2.5 py-1.5 md:px-3 md:py-2 text-sm md:text-lg font-medium md:font-bold border-2 border-emerald-400 text-emerald-400 rounded-md">{job_type}</button>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-center my-1 md:my-2">
          <div className='flex gap-1 md:gap-3 items-center'>
            <RiUserLocationLine className='md:text-xl'></RiUserLocationLine>
            <p className="text-xs md:text-base font-normal md:font-semibold">{location}</p>
          </div>
          <div className='flex gap-1 md:gap-3 items-center'>
            <RiMoneyDollarBoxLine className='md:text-xl'></RiMoneyDollarBoxLine>
            <p className="text-xs md:text-base font-normal md:font-semibold">Salary : {salary}</p>
          </div>
        </div>
        <div className="">
          <Link to={`/job/${id}`}>
            <button className="py-2 px-3 md:py-2.5 md:px-4 rounded-md bg-indigo-600 text-white text-xs font-semibold md:text-base md:font-bold">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
