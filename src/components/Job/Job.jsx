import { RiUserLocationLine, RiMoneyDollarBoxLine } from 'react-icons/ri';

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary,ob_description, job_responsibility, educational_requirements, experiences, contact_information} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="md:pt-10">
        <img className="py-2.5 md:py-5"
          src={logo}
          alt={`${company_name} logo`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-sm md:text-base">{company_name}</p>
        <div>
            <button className="px-2.5 py-1.5 md:px-3 text-emerald-400 md:py-2 text-sm md:text-lg font-medium md:font-bold border-2 border-emerald-400 rounded-md mr-4">{remote_or_onsite}</button>
            <button className="px-2.5 py-1.5 md:px-3 md:py-2 text-sm md:text-lg font-medium md:font-bold border-2 border-emerald-400 text-emerald-400 rounded-md">{job_type}</button>
        </div>
        <div className="flex md:gap-4 justify-between items-center my-1 md:my-2">
          <div className='flex gap-3 items-center'>
            <RiUserLocationLine className='md:text-xl'></RiUserLocationLine>
            <p className="text-sm md:text-base font-medium md:font-semibold">{location}</p>
          </div>
          <div className='flex gap-3 items-center'>
            <RiMoneyDollarBoxLine className='md:text-xl'></RiMoneyDollarBoxLine>
            <p className="text-sm md:text-base font-medium md:font-semibold">Salary : {salary}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
