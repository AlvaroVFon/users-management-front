import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'


export default function DashboardView() {
  return (
    <main className='h-[100dvh] flex flex-col justify-center items-center'>
      <NavBar />
      <SideBar />
    </main>
  )
}
