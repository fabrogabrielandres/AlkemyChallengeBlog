import * as Yup from 'yup'

export const initialValues= {
  email: '',
  password:"",
}
export const validationSchema = Yup.object().shape({
  password: Yup.string().min(5, 'Too Short!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

 