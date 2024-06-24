const validateNewJob = (req, res, next) => {

    try {
        const { companyName, title, description, logoUrl, salary, location, duration, locationType, information, jobType, skills } = req.body;
        const refUserId = req.refUserId;
        const parsedSalary = parseInt(salary);

        if (!companyName || !title || !description || !logoUrl || !parsedSalary || !location || !duration || !locationType || !information || !jobType || !skills || !refUserId) {

            const error = new Error(`Missing required fields ${!companyName ? 'companyName' : ''}${!title ? 'title' : ''}${!description ? 'description' : ''}${!logoUrl ? 'logoUrl' : ''}${!parsedSalary ? 'salary' : ''}${!location ? 'location' : ''}${!duration ? 'duration' : ''}${!locationType ? 'locationType' : ''}${!information ? 'information' : ''}${!jobType ? 'jobType' : ''}${!skills ? 'skills' : ''}${!refUserId ? 'refUserId' : ''}`);
            error.statusCode = 400;
            throw error;
        }

        const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
        const validLocationTypes = ["On-Site", "Remote", "Hybrid"];
        const validSkills = Array.isArray(skills) && skills.every(skill => typeof skill === 'string');
        const validSalary = typeof parsedSalary === 'number' && salary > 0;
        const validJobType = validJobTypes.includes(jobType);
        const validLogoUrl = logoUrl.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i);
        const validLocationType = validLocationTypes.includes(locationType);
        if (!validJobType) {


        }
        if (!validSkills || !Array.isArray(skills) || skills.length === 0 || !skills.every(skill => typeof skill === 'string') || !validSalary || !validLogoUrl || !validLocationType) {
            const error = new Error(`Invalid ${!validSkills ? 'skills' : ''} ${!Array.isArray(skills) ? 'skills' : ''} ${skills.length === 0 ? 'skills' : ''} ${!skills.every(skill => typeof skill === 'string') ? 'skills' : ''} ${!validSalary ? 'salary' : ''} ${!validLogoUrl ? 'logoUrl' : ''} ${!validLocationType ? 'locationType' : ''}`);
            error.statusCode = 400;
            throw error;
        }

        next();

    } catch (error) {
        next(error);
    }
};

module.exports = validateNewJob;