import { authService } from '../services/auth.service'
import LogoutIcon from './icons/LogoutIcon'

export default function LogoutButton() {
  async function logout() {
    await authService.logout()
  }

  return (
    <button
      className='btn hover:text-red-400'
      onClick={logout}
    >
      <LogoutIcon />
    </button>
  )
}
