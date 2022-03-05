import { useState } from "react";
import "./Form.css";

const defaultFormData = {
  latitude: "",
  longitude: "",
  alternativeSource: false,
};

export default function Form() {
  const [formData, setFormData] = useState(defaultFormData);
  const { latitude, longitude, alternativeSource } = formData;

  return <></>;
}
