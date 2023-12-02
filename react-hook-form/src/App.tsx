// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: ``,
      password: ``,
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...register('username', {
              required: 'Vui lòng nhập tên đăng nhập'
            })}
            type="text"
            name="username"
            id="username"
          />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'Vui lòng nhập mật khẩu',
              minLength: {
                value: 6, 
                message: "Mật khẩu phải có ít nhất 6 ký tự"
              }
            })}
            type="password"
            name="password"
            id="password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default App;
