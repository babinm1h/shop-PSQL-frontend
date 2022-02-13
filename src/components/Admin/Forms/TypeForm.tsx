import React from 'react';
import FormControl from '../../FormControl/FormControl';
import * as Yup from "yup"
import { useFormik } from 'formik';


const TypeForm = () => {
    const formik = useFormik({
        initialValues: {
            type: "",
        },

        onSubmit: async () => {

        },

        validationSchema: Yup.object().shape({
            type: Yup.string().required("Обязательное поле")
                .min(2, "Длина от 2 до 35 сивмолов").max(35, "Длина от 2 до 35 сивмолов"),
        })
    })

    return (
        <form action="" className="admin__form" onSubmit={formik.handleSubmit}>
            <div className="admin__form__control">
                <FormControl htmlFor="type" label="Тип устройства" onChange={formik.handleChange}
                    value={formik.values.type} placeholder="Тип..." type="text" />
                {formik.errors.type && <div className="form__error">{formik.errors.type}</div>}
            </div>

            <button type="submit" className="btn" disabled={!!formik.errors.type}>
                Добавить тип
            </button>
        </form>
    );
};

export default TypeForm;