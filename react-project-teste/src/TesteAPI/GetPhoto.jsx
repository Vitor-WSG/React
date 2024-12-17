import Axios from "axios";
import { useForm } from "react-hook-form";

const GetPhoto = () => {
  const { register, handleSubmit } = useForm();

  function getPhoto(data) {
    Axios.get(`https://dogsapi.origamid.dev/json/api/photo/${data.idPhoto}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <fieldset>
        <legend>Get Photo</legend>
        <form onSubmit={handleSubmit(getPhoto)}>
          <label htmlFor="id">Id Photo</label>
          <input
            type="text"
            id="id"
            placeholder="Search photo by code"
            {...register("idPhoto")}
          />
          <div>
            <button style={{ backgroundColor: "purple", borderRadius:"10%" }}>Buscar</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default GetPhoto;
