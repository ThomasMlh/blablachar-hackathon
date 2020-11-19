import axios from "axios";

export const getProfiles = async () => {
  try {
    const { data } = await axios.get(
      `https://still-ravine-63028.herokuapp.com/profiles/`
    );
    return data;
  } catch (error) {
    return error;
  }
};
