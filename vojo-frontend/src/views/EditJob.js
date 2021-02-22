import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { Container, Header, Footer, Typography, themes } from "@mindlab-vojo/component-library";

import { JobForm } from '../components/layouts';

import "../styles/Home.scss";

const EditJob = () => {
    const location = useLocation();
    const history = useHistory();

    const data = location.state;

    const handleSubmit = async (values) => {
        const accessToken = sessionStorage.getItem("accessToken");

        try {
            const response = await fetch(`${process.env.REACT_APP_API}/v3/jobs/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify(values),
            });

            const resData = await response.json();

            if (!resData.error) {
                history.push('/');
                toast.success("Vaga atualizada com sucesso!");
            } else {
                toast.error("Não foi possível atualizar a vaga no momento.");
            }
        } catch (error) {
            toast.error("Não foi possível atualizar a vaga no momento.");
        }
    };

    return (
        <Container maxWidth="full">
            <Container maxWidth="full">
                <Header />
            </Container>

            <div className="container Login__Container job-form">
                <div>
                    <Typography
                        tag="h1"
                        type="title"
                        color={themes.vojo.colors.primaryColor}
                    >
                        <strong>Editar vaga</strong>
                    </Typography>
                </div>

                <JobForm data={data} onSubmit={handleSubmit} />
            </div>

            <Container maxWidth="full">
                <Footer />
            </Container>
        </Container>
    );
};

export default EditJob;
