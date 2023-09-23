const getStoredApply = () => {
    const storedApply = localStorage.getItem('job-application')
    if (storedApply) {
        return JSON.parse(storedApply)
    }
    return [];
}

const savedApply = id => {
    const storedApply = getStoredApply()
    const exists = storedApply.find(jobId => jobId === id)
    if (!exists) {
        storedApply.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedApply))
    }
}

export {getStoredApply, savedApply}