import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-3 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-medium">Pizza Food</span>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; Pizza Food - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative col-span-2 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
