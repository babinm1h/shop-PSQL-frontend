import React from 'react';
import FormControl from '../../FormControl/FormControl';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../..';


const BrandForm = observer(() => {
    const { store } = React.useContext(StoreContext)

    const formik = useFormik({
        initialValues: {
            brand: "",
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            store.deviceStore.createBrand(values.brand)
            resetForm()
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

            <button type="submit" className="btn"
                disabled={!!formik.errors.brand || formik.isSubmitting}>
                Добавить бренд
            </button>
        </form>
    );
});

export default BrandForm;