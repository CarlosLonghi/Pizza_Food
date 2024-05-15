import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error
  console.log(error.message)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold">Ops... Aconteceu um Error</h1>
      <p className="w-1/3 text-center text-accent-foreground">
        Se o Erro persistir entre em{' '}
        <a
          className="text-sky-600 underline-offset-2 transition hover:underline dark:text-sky-400"
          href="mailto:carloslonghi.cl@gmail.com"
        >
          contato
        </a>{' '}
        conosco, para que possamos resolver.
      </p>
      <p className="text-accent-foreground">
        Voltar para{' '}
        <Link
          to="/"
          className="text-sky-600 underline-offset-2 transition hover:underline dark:text-sky-400"
        >
          página inicial
        </Link>
        .
      </p>
    </div>
  )
}
