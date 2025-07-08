import { useForm } from 'react-hook-form';

export default function FormularioForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Dados enviados:', data)
  }

  return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome", { required: 'Nome é obrigatorio' })} placeholder='Nome' />
      {errors.nome && <p>{errors.nome.message}</p>}

      <input {...register('email', { required: "Email obrigatorio" })} placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}

      <button type='submit'>Enviar</button>
    </form>

  </>)
}