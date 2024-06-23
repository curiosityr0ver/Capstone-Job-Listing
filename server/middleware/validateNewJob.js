const validateNewJob = (req, res, next) => {
    const { companyName, title, description, logoUrl, salary, location, duration, locationType, information, jobType, skills } = req.body;
    const refUserId = req.refUserId;
    try {

        const parsedSalary = parseInt(salary);

        if (!companyName || !title || !description || !logoUrl || !parsedSalary || !location || !duration || !locationType || !information || !jobType || !skills || !refUserId) {

            return res.status(400).json({
                message: 'Please provide all required fields',
            });
        }

        const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
        const validLocationTypes = ["On-Site", "Remote", "Hybrid"];
        const validSkills = Array.isArray(skills) && skills.every(skill => typeof skill === 'string');
        const validSalary = typeof parsedSalary === 'number' && salary > 0;
        const validJobType = validJobTypes.includes(jobType);
        const validLogoUrl = logoUrl.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i);
        const validLocationType = validLocationTypes.includes(locationType);
        if (!validJobType) {
            throw new Error('Invalid job type');
        }
        if (!validSkills) {
            throw new Error('Invalid skills');
        }
        if (!validSalary) {
            return res.status(400).json({
                message: 'Invalid salary',
            });
        }
        if (!validLogoUrl) {
            return res.status(400).json({
                message: 'Invalid logo URL',
            });
        }
        if (!validLocationType) {
            return res.status(400).json({
                message: 'Invalid location type',
            });
        }
        next();

    } catch (error) {
        next({
            message: "Error Adding Job",
            error: error
        });
    }


};

module.exports = validateNewJob;