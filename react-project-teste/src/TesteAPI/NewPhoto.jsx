import { useForm } from "react-hook-form";
import Axios from "axios";

const NewPhoto = () => {
  const { register, handleSubmit } = useForm();

  function sendPhoto(data) {
    const formData = new FormData();
    formData.append("nome", data.dogName);
    formData.append("peso", data.weight);
    formData.append("idade", data.age);
    if (data.photo[0]) formData.append("img", data.photo[0]);
    try {
      Axios.post("https://dogsapi.origamid.dev/json/api/user", formData, {
        headers: {
          Authorization: "Bearer " + data.token,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <fieldset>
        <legend>New Photo</legend>
        <form onSubmit={handleSubmit(sendPhoto)}>
          <label htmlFor="token">Token</label>
          <input
            type="text"
            id="token"
            placeholder="Type your token here"
            {...register("token", { required: true })}
          />

          <label htmlFor="dogName">Dog name</label>
          <input
            type="text"
            id="dogName"
            placeholder="What's your dog's name ?"
            {...register("dogName", { required: true })}
          />

          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            id="weight"
            placeholder="How much does your dog weight? ?"
            {...register("weight", { required: true })}
          />

          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="What's your dog's age ?"
            {...register("age", { required: true })}
          />

          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" {...register("photo")} />

          <div>
            <button>Publicar</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default NewPhoto;
