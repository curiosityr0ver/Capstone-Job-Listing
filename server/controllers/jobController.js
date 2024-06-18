const Job = require('../model/Job');

function getJobById() {
    return async (req, res) => {
        try {
            const jobID = req.params.id;
            const job = await Job.findById(jobID);
            if (job) {
                res.status(200).json({
                    message: 'Job found',
                    job: job
                });
            }
        } catch (error) {
            next("Error Finding Job", error);
        }
    };
}

function createNewJob() {
    return async (req, res, next) => {
        try {
            const { companyName, title, description, logoUrl, jobPosition, salary, location, duration, locationType, information, jobType, skills } = req.body;
            const refUserId = req.refUserId;
            const newJob = new Job({
                companyName,
                title,
                description,
                logoUrl,
                jobPosition,
                salary,
                location,
                duration,
                locationType,
                information,
                jobType,
                skills,
                refUserId
            });

            await newJob.save();
            res.status(201).json({
                message: 'Job added successfully',
                jobID: newJob._id
            });
        } catch (error) {
            next({
                message: "Error Adding Job",
                error
            });
        }
    };
}

function getFilteredJobs() {
    return async (req, res, next) => {

        try {
            const { title, skills } = req.query;
            console.log(title, skills);
            const jobs = await Job.find(
                {
                    title: title || { $exists: true },
                }
            );

            //Handle this in the mongoose query itself
            res.status(200).json({
                message: 'Job route is working fine',
                status: 'Working',
                jobs: jobs
            });
        } catch (error) {
            next("Error Finding Jobs", error);
        }
    };
}

function updateExistingJob() {
    return async (req, res) => {
        try {
            const jobID = req.params.id;
            const { companyName, title, description, logoUrl, jobPosition, salary, location, duration, locationType, information, jobType, skills } = req.body;
            const refUserId = req.refUserId;
            const updatedJob = await Job.findByIdAndUpdate(jobID, {
                companyName,
                title,
                description,
                logoUrl,
                jobPosition,
                salary,
                location,
                duration,
                locationType,
                information,
                jobType,
                skills,
                refUserId
            });

            res.status(200).json({
                message: 'Job updated successfully',
                job: updatedJob
            });
        } catch (error) {
            next("Error Updating Job", error);
        }
    };
}

function deleteJob() {
    return async (req, res) => {
        try {
            const jobID = req.params.id;
            await Job.findByIdAndDelete(jobID);
            res.status(200).json({
                message: 'Job deleted successfully',
            });
        } catch (error) {
            next("Error Deleting Job", error);
        }
    };
}


module.exports = {
    getJobById,
    createNewJob,
    getFilteredJobs,
    updateExistingJob,
    deleteJob
};
