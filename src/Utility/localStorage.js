const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applicatons');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applicatons', JSON.stringify(storedJobApplications))
    }
}
export { getStoredJobApplication, saveJobApplication }
