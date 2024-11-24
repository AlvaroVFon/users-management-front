import LogoutButton from './LogoutButton'

export default function NavBar() {
  return (
    <div className='navbar fixed flex justify-between top-0 bg-base-100 shadow-lg z-50'>
      <a className='btn btn-ghost text-xl' href='/dashboard'>someLogoHere</a>
      <LogoutButton />
    </div>
  )
}
