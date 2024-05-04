import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { ThemeToggle } from '../theme/theme-toogle'
import { Separator } from '../ui/separator'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex items-center gap-4 px-8 py-4">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
