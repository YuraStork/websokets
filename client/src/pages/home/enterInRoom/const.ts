import { FormikHelpers } from "formik";
import * as yup from "yup";
import { EnterInRoomType } from "../types";

const initialValues = {
  name: "",
  roomId: "",
  roomPassword: ""
}
const validationSchema = yup.object().shape({
  name: yup.string().required('Required'),
  roomId: yup.string().required('Required'),
  roomPassword: yup.string().required('Required')
})

const onSubmit = (data: EnterInRoomType, helper: FormikHelpers<EnterInRoomType>) => console.log(data);
export { initialValues, validationSchema, onSubmit }