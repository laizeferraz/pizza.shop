import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignInSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof SignInSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const handleSignin = async (data: SignInForm) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Authentication link sent to your email', {
        action: {
          label: 'Resend',
          onClick: () => handleSignin(data),
        },
      })
    } catch {
      toast.error('Sign-in failed')
    }
  }
  return (
    <>
      <Helmet title="Sign-in" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Follow your sales accessing the dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Sign-in
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
