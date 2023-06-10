import MenuItem from '@/layouts/MenuItem'
import { siteSettings } from '@/settings/site.settings'
import { useLocation } from 'react-router-dom'

export default function Menu() {
  const location = useLocation()
  return (
    <nav className="flex justify-center items-center gap-2">
      {siteSettings.menus.map((el) => (
        <MenuItem icon={el.Icon} to={el.to} key={el.id} active={location.pathname === el.to} />
      ))}
    </nav>
  )
}
