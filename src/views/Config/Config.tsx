import React from 'react';
import CustomForm from '../../components/common/CustomForm/CustomForm';
import Sidebar from '../../components/common/Sidebar/Sidebar';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import { formOptions } from './constants';

const Config: React.FC<{}> = () => (
    <Sidebar>
        <Header />
        <CustomForm
            onComplete={(values: any) => {
                createTemplate(values);
            }}
            formFields={formOptions}
            submitLabel="Save as template"
            initialValues={initialValues}
            validationSchema={validationSchema}
        />
        <Footer />
    </Sidebar>
);

export default Config;
