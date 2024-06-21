import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string().length(6, {
    message: 'Password must be at least 6 characters',
  }),
});

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('enviando datos exitosamente');
    reset();
  };

  return (
    <div>
      <h3>Formulario</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" {...register('email')} />
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register('password')}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

// un login conectado al back estilos
// con mensaje de exito y error
// link de github
