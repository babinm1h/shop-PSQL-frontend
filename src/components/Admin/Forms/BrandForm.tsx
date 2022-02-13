import React from 'react';
import FormControl from '../../FormControl/FormControl';
import * as Yup from "yup"
import { useFormik } from 'formik';


const BrandForm = () => {
    const formik = useFormik({
        initialValues: {
            brand: "",
        },

        onSubmit: async () => {

        },

        validationSchema: Yup.object().shape({
            brand: Yup.string().required("Обязательное поле")
                .min(2, "Длина от 2 до 35 сивмолов").max(35, "Длина от 2 до 35 сивмолов"),
        })
    })

    return (
        <form action="" className="admin__form brand__form" onSubmit={formik.handleSubmit}>
            <div className="admin__form__control">
                <FormControl htmlFor="brand" label="Бренд устройства" onChange={formik.handleChange}
                    value={formik.values.brand} placeholder="Бренд..." type="text" />
                {formik.errors.brand && <div className="form__error">{formik.errors.brand}</div>}
            </div>

            <button type="submit" className="btn" disabled={!!formik.errors.brand}>
                Добавить бренд
            </button>
        </form>
    );
};

export default BrandForm;