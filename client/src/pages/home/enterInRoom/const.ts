import { NavigateFunction } from "react-router-dom";
import { FormikHelpers } from "formik";
import * as yup from "yup";
import { EnterInRoomType } from "../types";
import { enterInRoom } from "../../../api/rooms/enterInRoom";

const initialValues = {
  name: "",
  roomId: "",
  roomPassword: "",
};
const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  roomId: yup.string().required("Required"),
  roomPassword: yup.string()
});

const onSubmit = async (
  data: EnterInRoomType,
  helper: FormikHelpers<EnterInRoomType>,
  navigate: NavigateFunction
) => {
  try {
    const res = await enterInRoom(data);
    navigate(`/draw_online/${res.data._id}`)
  } catch (e) {
    console.error(e);
  }

};

export { initialValues, onSubmit, validationSchema }