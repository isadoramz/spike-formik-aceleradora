import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './App.css';

function App() {
  return (
    <div className="container div">
      <h1>Form teste com formik</h1>
      <Formik
        initialValues={{ nome: "", sobrenome: "" }}
        validate={values => {
          const errors = {};
          if (!values.nome) {
            errors.nome = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label>Nome:</label>
            <Field type="text" name="nome" />
            <ErrorMessage name="nome" component="div" />
            <br />
            <label>Sobrenome:</label>
            <Field type="text" name="sobrenome" />
            <ErrorMessage name="sobrenome" component="div" />
            <br />
            <button  className="btn-primary" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}



export default App;
