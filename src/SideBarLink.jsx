export default function SideBarLink({ label, linkTo, icon }) {
  return (
    <li className='hover:bg-base-content py-2 rounded-sm group'>
      <a
        className='flex group-hover:text-base-200 px-3'
        href={linkTo}
      >
        <span>{icon}</span> {label}
      </a>
    </li>
  )
}
