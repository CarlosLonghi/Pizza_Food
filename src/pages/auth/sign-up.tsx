import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Conta criada com sucesso!')

      if (!isSubmitting) {
        navigate('/sign-in')
      }
    } catch (error) {
      toast.error('Erro ao realizar o cadastro!')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-6">
        <Button
          variant={'secondary'}
          asChild
          className="absolute right-8 top-8"
        >
          <Link to="/sign-in">Fazer Login</Link>
        </Button>

        <div className="w-96 space-y-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie sua conta para gerenciar sua Pizzaria pelo nosso painel!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu Telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register('email')} required />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Cadastrar
            </Button>

            <p className="text-justify text-sm leading-relaxed text-muted-foreground">
              Ao continuar você concorda com nossos{' '}
              <a className="underline underline-offset-2" href="#">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-2" href="#">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
