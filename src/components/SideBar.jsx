import SideBarLink from '../SideBarLink'
import SideBarMenu from './SideBarMenu'
import HomeIcon from './icons/HomeIcon'
import UserIcon from './icons/UserIcon'
import SettingsIcon from './icons/SettingsIcon'
import LogoutIcon from './icons/LogoutIcon'

export default function SideBar() {
  return (
    <aside className='fixed w-72 left-0 bg-base-200 h-[100dvh]'>
      <SideBarMenu className='flex flex-col gap-5 mt-24 indent-4'>
        <SideBarLink
          label='Home'
          linkTo='/dashboard'
          icon={<HomeIcon />}
        />
        <SideBarLink
          label='Users Management'
          linkTo='/users'
          icon={<UserIcon />}
        />
        <SideBarLink
          label='Settings'
          linkTo='/settings'
          icon={<SettingsIcon />}
        />
        <SideBarLink
          label='Logout'
          linkTo='/logout'
          icon={<LogoutIcon />}
        />
      </SideBarMenu>
    </aside>
  )
}
