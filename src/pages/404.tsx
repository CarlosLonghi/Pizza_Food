import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para{' '}
        <Link
          to="/"
          className="text-sky-600 underline-offset-4 transition hover:underline dark:text-sky-400"
        >
          página inicial
        </Link>
      </p>
    </div>
  )
}
