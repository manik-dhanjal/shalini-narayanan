import { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../../shared/button/button.component';
import ContactFormStyles from './contact-form.styles';
import React from 'react';
import InputField from '../../shared/input-field/input-field.components';
import { InputFieldTypes } from '../../shared/input-field/input-field.enum';
import { ButtonStatus } from '../../shared/button/button.enums';

const ContactForm: React.FC = () => {
  const [btnMessage, setBtnMessage] = useState('Send Message'); // This will be used to show a message if the submission is successful
  const [requestStatus, setRequestStatus] = useState<ButtonStatus>(ButtonStatus.NOT_STARTED);
  const [alertMessage, setAlertMessage] = useState<string>('Alert Message');
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    onSubmit: () => {
      setBtnMessage('Sending Message');
      setRequestStatus(ButtonStatus.LOADING);
      setTimeout(() => {
        setRequestStatus(ButtonStatus.ERROR);
        setBtnMessage('Message Not Sent');
        setAlertMessage('successfully sent form');
      }, 1000);
    },
    validationSchema: yup.object({
      firstName: yup.string().trim().required('First Name is required'),
      lastName: yup.string().trim().required('Last Name is required'),
      email: yup.string().email('Must be a valid email').required('Email is required'),
      message: yup.string().trim(),
    }),
  });

  return (
    <ContactFormStyles>
      <form className="w-50" onSubmit={formik.handleSubmit}>
        <div className="name-fields">
          <label htmlFor="firstName">
            Name <span className="required">*</span>
          </label>
          <div className="name-fields-wrapper">
            <InputField
              type={InputFieldTypes.TEXT}
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName || null}
            />
            <InputField
              type={InputFieldTypes.TEXT}
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName || null}
            />
          </div>
        </div>

        <InputField
          label="Email"
          type={InputFieldTypes.EMAIL}
          name="email"
          className="form-control"
          placeholder="Enter email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email || null}
          isRequired
        />

        <InputField
          label="Message"
          type={InputFieldTypes.TEXT_AREA}
          name="message"
          className="form-control"
          placeholder="Type your message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.message || null}
        />

        <Button
          type="submit"
          status={requestStatus}
          hoverMessage={
            requestStatus === ButtonStatus.NOT_STARTED ? 'Send Message' : 'Resend Message'
          }
        >
          {btnMessage}
        </Button>
      </form>
    </ContactFormStyles>
  );
};

export default ContactForm;
