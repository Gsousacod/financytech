"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
export function LoginForm({
  className,
  ...props
}: Omit<React.ComponentProps<"form">, "onSubmit">) {
  const seachParams = useSearchParams()

  const error = seachParams.get('error')

  async function login(e: React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
   
    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }
  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={login}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-muted-foreground text-sm text-balance">
         Entre com seu email e sua senha
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" >Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" name="password"required placeholder="*********"/>
        </div>
        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
          Login
        </Button>
        {
                error === "CredentialsSignin" && (
                  <div className="text-red-500">Erro no login</div>
                )
              }
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          {/* <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span> */}
          </div>
        
      </div>
      <div className="text-center text-sm">
        Ainda não tem uma conta?{" "}
        <a href="#" className="underline underline-offset-4">
          Cadastrar
        </a>
      </div>
    </form>
  )
}
