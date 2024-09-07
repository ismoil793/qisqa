import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className="p-20 flex flex-col">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required className='border' />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="text" required className='border' />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}