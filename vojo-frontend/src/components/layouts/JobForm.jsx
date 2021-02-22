import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, TextInput } from "@mindlab-vojo/component-library";

const validationSchema = yup.object({
    title: yup.string().required("Campo obrigatório"),
    // description: yup.string().required("Campo obrigatório"),
    information: yup.string().required("Campo obrigatório"),
    // requirements: yup.string().required("Campo obrigatório"),
    education: yup.string().required("Campo obrigatório"),
    workingHours: yup.string().required("Campo obrigatório"),
    totalSpots: yup.string().required("Campo obrigatório"),
    imageUrl: yup.string().required("Campo obrigatório"),
    company: yup.string().required("Campo obrigatório"),
    location: yup.object({
        city: yup.string().required("Campo obrigatório"),
        state: yup.string().required("Campo obrigatório"),
        country: yup.string().required("Campo obrigatório"),
    }),
    compensation: yup.object({
        amount: yup.string().required("Campo obrigatório"),
        currency: yup.string().required("Campo obrigatório"),
        recurrency: yup.string().required("Campo obrigatório"),
    }),
});

const fields = {
    title: "",
    // description: "",
    information: "",
    // requirements: "",
    education: "",
    workingHours: "",
    totalSpots: "",
    imageUrl: "",
    company: "",
    location: {
        city: "",
        state: "",
        country: "",
    },
    compensation: {
        amount: "",
        currency: "",
        isVariable: false,
        recurrency: "",
    },
};

const populateFields = (values) => {
    const result = {};

    Object.keys(values).forEach((key) => {
        Object.keys(fields).forEach((field) => {
            if (key === field) {
                result[field] = values[key];
            }
        });
    });

    return result;
};

const JobForm = ({ data, onSubmit }) => {
    const initialValues = populateFields(data);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, errors, setFieldValue, handleSubmit }) => (
                <>
                    <h5 className="job-form-subtitle">Informações gerais</h5>
                    <div className="row">
                        <TextInput
                            isRequired
                            label="Título"
                            name="title"
                            value={values.title}
                            onInputBlur={({ value }) => setFieldValue("title", value)}
                            onInputChange={({ value }) => setFieldValue("title", value)}
                            placeholder="Título"
                            errorMessage={errors.title}
                            showError={!!errors.title}
                        />

                        {/* <TextInput
                            isRequired
                            label="Descrição"
                            name="description"
                            value={values.description}
                            onInputBlur={({ value }) => setFieldValue("description", value)}
                            onInputChange={({ value }) => setFieldValue("description", value)}
                            placeholder="Descrição"
                            errorMessage={errors.description}
                            showError={!!errors.description}
                        /> */}
                    </div>

                    <div className="row">
                        <TextInput
                            isRequired
                            label="Informações"
                            name="information"
                            value={values.information}
                            onInputBlur={({ value }) => setFieldValue("information", value)}
                            onInputChange={({ value }) => setFieldValue("information", value)}
                            placeholder="Informações"
                            errorMessage={errors.information}
                            showError={!!errors.information}
                        />

                        {/* <TextInput
                            isRequired
                            label="Requisitos"
                            name="requirements"
                            value={values.requirements}
                            onInputBlur={({ value }) => setFieldValue("requirements", value)}
                            onInputChange={({ value }) => setFieldValue("requirements", value)}
                            placeholder="Requisitos"
                            errorMessage={errors.requirements}
                            showError={!!errors.requirements}
                        /> */}

                        <TextInput
                            isRequired
                            label="Empresa"
                            name="company"
                            value={values.company}
                            onInputBlur={({ value }) => setFieldValue("company", value)}
                            onInputChange={({ value }) => setFieldValue("company", value)}
                            placeholder="Empresa"
                            errorMessage={errors.company}
                            showError={!!errors.company}
                        />
                    </div>

                    <div className="row">
                        <TextInput
                            isRequired
                            label="Educação"
                            name="education"
                            value={values.education}
                            onInputBlur={({ value }) => setFieldValue("education", value)}
                            onInputChange={({ value }) => setFieldValue("education", value)}
                            placeholder="Educação"
                            errorMessage={errors.education}
                            showError={!!errors.education}
                        />

                        <TextInput
                            isRequired
                            label="Carga horária"
                            name="workingHours"
                            value={values.workingHours}
                            onInputBlur={({ value }) => setFieldValue("workingHours", value)}
                            onInputChange={({ value }) =>
                                setFieldValue("workingHours", value)
                            }
                            placeholder="Carga horária"
                            errorMessage={errors.workingHours}
                            showError={!!errors.workingHours}
                        />

                        <TextInput
                            isRequired
                            label="Vagas disponíveis"
                            name="totalSpots"
                            value={String(values.totalSpots)}
                            onInputBlur={({ value }) =>
                                setFieldValue("totalSpots", Number(value))
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("totalSpots", Number(value))
                            }
                            placeholder="Vagas disponíveis"
                            errorMessage={errors.totalSpots}
                            showError={!!errors.totalSpots}
                            type="number"
                        />

                        <TextInput
                            isRequired
                            label="Imagem"
                            name="imageUrl"
                            value={values.imageUrl}
                            onInputBlur={({ value }) => setFieldValue("imageUrl", value)}
                            onInputChange={({ value }) => setFieldValue("imageUrl", value)}
                            placeholder="Imagem"
                            errorMessage={errors.imageUrl}
                            showError={!!errors.imageUrl}
                        />
                    </div>

                    <h5 className="job-form-subtitle">Local</h5>
                    <div className="row">
                        <TextInput
                            isRequired
                            label="Cidade"
                            name="location.city"
                            value={values.location?.city}
                            onInputBlur={({ value }) => setFieldValue("location.city", value)}
                            onInputChange={({ value }) =>
                                setFieldValue("location.city", value)
                            }
                            placeholder="Cidade"
                            errorMessage={errors.location?.city}
                            showError={!!errors.location?.city}
                        />

                        <TextInput
                            isRequired
                            label="Estado"
                            name="location.state"
                            value={values.location?.state}
                            onInputBlur={({ value }) =>
                                setFieldValue("location.state", value)
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("location.state", value)
                            }
                            placeholder="Estado"
                            errorMessage={errors.location?.state}
                            showError={!!errors.location?.state}
                        />

                        <TextInput
                            isRequired
                            label="País"
                            name="location.country"
                            value={values.location?.country}
                            onInputBlur={({ value }) =>
                                setFieldValue("location.country", value)
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("location.country", value)
                            }
                            placeholder="País"
                            errorMessage={errors.location?.country}
                            showError={!!errors.location?.country}
                        />
                    </div>

                    <h5 className="job-form-subtitle">Remuneração</h5>
                    <div style={{ marginBottom: 24 }} className="row">
                        <TextInput
                            isRequired
                            label="Valor"
                            name="compensation.amount"
                            value={String(values.compensation?.amount)}
                            onInputBlur={({ value }) =>
                                setFieldValue("compensation.amount", Number(value))
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("compensation.amount", Number(value))
                            }
                            placeholder="Valor"
                            errorMessage={errors.compensation?.amount}
                            showError={!!errors.compensation?.amount}
                            type="number"
                        />

                        <TextInput
                            isRequired
                            label="Moeda"
                            name="compensation.currency"
                            value={values.compensation?.currency}
                            onInputBlur={({ value }) =>
                                setFieldValue("compensation.currency", value)
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("compensation.currency", value)
                            }
                            placeholder="Moeda"
                            errorMessage={errors.compensation?.currency}
                            showError={!!errors.compensation?.currency}
                        />

                        <TextInput
                            isRequired
                            label="Recorrência"
                            name="compensation.recurrency"
                            value={values.compensation?.recurrency}
                            onInputBlur={({ value }) =>
                                setFieldValue("compensation.recurrency", value)
                            }
                            onInputChange={({ value }) =>
                                setFieldValue("compensation.recurrency", value)
                            }
                            placeholder="Recorrência"
                            errorMessage={errors.compensation?.recurrency}
                            showError={!!errors.compensation?.recurrency}
                        />
                    </div>
                    <Button onButtonClick={handleSubmit}>Atualizar vaga</Button>
                </>
            )}
        </Formik>
    );
};

export default JobForm;
