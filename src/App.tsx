import './global.css'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-900">
      <Button variant={'secondary'}>Login</Button>
    </div>
  )
}
