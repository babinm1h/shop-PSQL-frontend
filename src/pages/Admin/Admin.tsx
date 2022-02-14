import "./Admin.scss"
import BrandForm from '../../components/Admin/Forms/BrandForm';
import TypeForm from '../../components/Admin/Forms/TypeForm';
import DeviceForm from '../../components/Admin/Forms/DeviceForm';
import { observer } from 'mobx-react-lite';

const Admin = observer(() => {

    return (
        <div className="admin">
            <BrandForm />
            <TypeForm />
            <DeviceForm />
        </div>
    );
});

export default Admin;