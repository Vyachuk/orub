import axios from "axios";

interface formData {
  fullName: string;
  birthday: string;
  region: string;
  phone: string;
  profession: string;
  comment: string;
}

export const sendData = async (data: formData) => {
  const result = await axios.post("/api/form", data);
  return result;
};
