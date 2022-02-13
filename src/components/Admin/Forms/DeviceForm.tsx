import React from 'react';
import FormControl from '../../FormControl/FormControl';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { IBrand, IType } from '../../../types/dbModels';

interface IDeviceFormProps {
    types: IType[]
    brands: IBrand[]
}

const DeviceForm: React.FC<IDeviceFormProps> = observer(({ types, brands }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            type: "",
            brand: "",
            price: 0,
            img: {} as File
        },

        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required("Обязательное поле")
                .min(2, "Длина от 2 до 35 сивмолов").max(35, "Длина от 2 до 35 сивмолов"),
            type: Yup.string().required("Выберите тип"),
            brand: Yup.string().required("Выберите бренд")
        })
    })

    return (
        <form action="" className="admin__form" onSubmit={formik.handleSubmit}>

            <div className="admin__form__control">
                <FormControl htmlFor="name" label="Название устройства" onChange={formik.handleChange}
                    value={formik.values.name} placeholder="Название..." type="text" />
            </div>

            <div className="admin__form__control">
                <FormControl htmlFor="price" label="Цена устройства" onChange={formik.handleChange}
                    value={formik.values.price} placeholder="Цена..." type="number" />
            </div>

            <div className="admin__form__selects">
                <select name="type" value={formik.values.type} onChange={formik.handleChange}>
                    <option disabled={true}>Выберите тип</option>
                    {types.map(t => <option key={t.id}>{t.name}</option>)}
                </select>

                <select name="brand" value={formik.values.brand} onChange={formik.handleChange}>
                    <option disabled={true}>Выберите бренд</option>
                    {brands.map(b => <option key={b.id}>{b.name}</option>)}
                </select>
            </div>

            <div className="admin__form__control">
                <input type="file" name="img"
                    onChange={(e) => formik.setFieldValue("img", e.target.files?.[0])} />
            </div>

            <button type="submit" className="btn">Добавить устройство</button>
        </form>
    );
});

export default DeviceForm;