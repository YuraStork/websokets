import { FormikHelpers } from "formik";
import * as yup from "yup";
import { CreateRoom } from "../types";

const initialValues = {
  name: "",
  roomName: "",
  roomPassword: ""
}
const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  roomName: yup.string().required('Required'),
  roomPassword: yup.string().required('Required')
})

const onSubmit = (data: CreateRoom, helper: FormikHelpers<CreateRoom>) => console.log(data);
export { initialValues, validationSchema, onSubmit }