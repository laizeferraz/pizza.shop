import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
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

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" />
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign-in
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
