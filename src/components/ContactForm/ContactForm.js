import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/contactsSlice';
import {
  FormStyled,
  LabelStylet,
  FieldStyled,
  ButtonForm,
  ErrorMess,
} from './Form.styled';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(
      1,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
    )
    .required('Please enter a name'),
  number: Yup.string()
    .min(
      7,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please enter the number'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if(contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
          values.name.toLowerCase().trim() ||
        contact.number.trim() === values.number.trim()
    )) {
      return toast.error('A contact with that name or number already exists');
    }
     dispatch(addContact({ ...values, id: nanoid() }));
     actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <LabelStylet>
          <p>Name</p>
          <FieldStyled type="text" name="name" />
          <ErrorMess name="name" component="div" />
        </LabelStylet>

        <LabelStylet>
          <p>Number</p>
          <FieldStyled type="tel" name="number" />
          <ErrorMess name="number" component="div" />
        </LabelStylet>

        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormStyled>
    </Formik>
  );
};
