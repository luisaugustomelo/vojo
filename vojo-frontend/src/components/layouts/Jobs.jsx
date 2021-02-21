import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Button, themes } from "@mindlab-vojo/component-library";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

import { Card } from "../elements";
import { Modal } from "../layouts";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const { authData } = useContext(AuthContext);
    const { setShow } = useContext(ModalContext);

    const history = useHistory();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs`);

                const data = await response.json();

                setJobs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
        setShow(true);
    };

    const handleEditJob = () => {
        if (!authData.logged) {
            history.push({
                pathname: "/login",
                search: `?action=edit&subject=${selectedJob._id}`,
                state: selectedJob
            });
        } else {
            history.push(`/edit/${selectedJob._id}`, selectedJob);
        }
    };

    return (
        <>
            <div className="jobs">
                {jobs.map((job) => (
                    <Card
                        key={job._id}
                        onClick={() => handleJobClick(job)}
                        className="job-card"
                    >
                        <img src={job.imageUrl} alt="job" className="job-image" />
                        <div className="job-header">
                            <h2 className="job-title">{job.title}</h2>
                        </div>
                    </Card>
                ))}
            </div>
            <Modal className="job-modal">
                {selectedJob && (
                    <>
                        <img src={selectedJob.imageUrl} alt="job" className="job-image" />

                        <div className="job-header">
                            <h2 className="job-title">{selectedJob.title}</h2>

                            <div
                                className="job-action-edit"
                                style={{
                                    color: themes.vojo.colors.primaryColor,
                                }}
                                onClick={handleEditJob}
                            >
                                Editar
              </div>
                        </div>

                        <div className="job-info">
                            <p>
                                <span className="job-label">Sobre a vaga</span>
                                <br />
                                {selectedJob.information}
                            </p>

                            <p>
                                <span className="job-label">Educação</span>
                                <br />
                                {selectedJob.education}
                            </p>

                            <p>
                                <span className="job-label">Local</span>
                                <br />
                                {`${selectedJob.location.city} - ${selectedJob.location.state}`}
                            </p>

                            <Typography
                                tag="p"
                                type="title"
                                color={themes.vojo.colors.primaryColor}
                            >
                                {selectedJob.compensation.amount ? (
                                    <>
                                        {`${selectedJob.compensation.currency} ${selectedJob.compensation.amount}`}
                                    </>
                                ) : (
                                        <>A combinar</>
                                    )}
                            </Typography>
                        </div>

                        <div className="job-footer">
                            <Button>Candidatar-se</Button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};

export default Jobs;
