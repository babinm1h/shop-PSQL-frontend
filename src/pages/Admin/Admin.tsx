import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup"
import "./Admin.scss"
import BrandForm from '../../components/Admin/Forms/BrandForm';
import TypeForm from '../../components/Admin/Forms/TypeForm';
import DeviceForm from '../../components/Admin/Forms/DeviceForm';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../..';

const Admin = observer(() => {
    const { store } = React.useContext(StoreContext)

    return (
        <div className="admin">
            <BrandForm />
            <TypeForm />
            <DeviceForm types={store.deviceStore.types} brands={store.deviceStore.brands} />
        </div>
    );
});

export default Admin;