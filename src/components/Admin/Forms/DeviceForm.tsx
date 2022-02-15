import React, { Dispatch, SetStateAction } from 'react';
import FormControl from '../../FormControl/FormControl';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../..';
import { AiOutlineCloseCircle } from "react-icons/ai"
import { IDeviceInfo } from '../../../types/dbModels';


const DeviceForm = observer(() => {
    const [info, setInfo] = React.useState<IDeviceInfo[]>([])
    const { store } = React.useContext(StoreContext)

    const handleRemoveProp = (number: number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            type: "1",
            brand: "1",
            price: 0,
            img: {} as File,
            info: [] as IDeviceInfo[]
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            if (values.info.length > 0) {
                values.info = info
            }

            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("typeId", values.type)
            fd.append("price", `${values.price}`)
            fd.append("brandId", values.brand)
            fd.append("img", values.img)
            fd.append("info", JSON.stringify(info))

            store.deviceStore.createDevice(fd)
            setSubmitting(true)
            setInfo([])
            resetForm()
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required("Обязательное поле")
                .min(2, "Длина от 2 до 35 сивмолов").max(35, "Длина от 2 до 35 сивмолов"),

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
                    {store.deviceStore.types.map(t =>
                        <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>

                <select name="brand" value={formik.values.brand} onChange={formik.handleChange}>
                    <option disabled={true} >Выберите бренд</option>
                    {store.deviceStore.brands.map(b =>
                        <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
            </div>

            <div className="admin__form__control">
                <input type="file" name="img" accept="image/png, image/jpg, image/jpeg"
                    onChange={(e) => formik.setFieldValue("img", e.target.files?.[0])} />
            </div>

            <div className="admin__form__props">
                <PropsForm setInfo={setInfo} info={info} />
            </div>
            {info.length > 0 && info.map(i => <div className="admin__form__prop" key={i.number}>
                <div className="prop__title">{i.title}</div>
                <div className="prop__value">{i.description}</div>
                <AiOutlineCloseCircle size={25} className="prop__remove"
                    onClick={() => handleRemoveProp(i.number)} />
            </div>)}

            <button type="submit" className="btn" disabled={!!formik.errors.brand ||
                !!formik.errors.type || !!formik.errors.img || !!formik.errors.name || !!formik.errors.price || formik.isSubmitting}>
                Добавить устройство
            </button>
        </form>
    );
});

export default DeviceForm;



interface IPropsFormProps {
    setInfo: Dispatch<SetStateAction<IDeviceInfo[]>>
    info: IDeviceInfo[]
}

const PropsForm: React.FC<IPropsFormProps> = ({ setInfo, info }) => {

    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            setInfo([...info, { description: values.description, title: values.title, number: Date.now() }])
            resetForm()
        },

        validationSchema: Yup.object().shape({
            title: Yup.string().required()
                .min(2, "Длина от 2 до 20 сивмолов").max(20, "Длина от 2 до 20 сивмолов"),
            description: Yup.string().required()
                .min(1, "Длина от 1 до 20 сивмолов").max(25, "Длина от 2 до 25 сивмолов"),
        })
    })

    return (
        <>
            <div className="admin__form__control">
                <FormControl type="text" placeholder="Свойство" htmlFor="title"
                    value={formik.values.title} onChange={formik.handleChange} label="Свойство" />
            </div>
            <div className="admin__form__control">
                <FormControl type="text" placeholder="Значение" label="Значение" htmlFor="description"
                    value={formik.values.description} onChange={formik.handleChange} />
            </div>
            <button className="btn btn_light" type="button" onClick={formik.submitForm}
                disabled={formik.isSubmitting || !!formik.errors.title || !!formik.errors.description}>
                Добавить свойство
            </button>
        </>
    )
}

