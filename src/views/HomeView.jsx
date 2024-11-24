import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'

export default function HomeView() {

  return (
    <main className='h-[100dvh] flex flex-col justify-center items-center'>
      <NavBar />
      <div className='flex flex-col items-center justify-center gap-4'>
        <LoginForm />
      </div>
    </main>
  )
}
