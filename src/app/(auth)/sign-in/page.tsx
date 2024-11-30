'use client'

import BaseButton from '@/components/base-button'
import BaseInput from '@/components/base-input'
import { ArrowRight01Icon } from 'hugeicons-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Informe um e-mail válido' }),
  password: z
    .string()
    .min(4, { message: 'A senha deve conter ao menos 4 caracteres' }),
})

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setEmailError('')
    setEmail(value)
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setPasswordError('')
    setPassword(value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = { email, password }
    const result = formSchema.safeParse(form)

    if (!result.success && result.error.errors.length > 0) {
      result.error.errors.forEach((error) => {
        if (error.path.includes('email')) {
          setEmailError(error.message)
        } else if (error.path.includes('password')) {
          setPasswordError(error.message)
        }
      })
    }
  }

  return (
    <section className="py-[72px] px-20 h-full flex flex-col justify-between">
      <form
        className="flex flex-col gap-12"
        id="sign-in-form"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-title-md font-bold">Acesse sua conta</h1>
          <p className=" font-body text-body-sm font-thin text-gray-300">
            Informe seu e-mail e senha para entrar
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <BaseInput
            type="text"
            placeholder="Seu e-mail cadastrado"
            label="E-mail"
            value={email}
            onChange={handleChangeEmail}
            icon="mail"
            error={emailError}
            required
          />
          <BaseInput
            type="password"
            label="Senha"
            placeholder="Sua senha de acesso"
            value={password}
            onChange={handleChangePassword}
            icon="password"
            error={passwordError}
            required
          />
        </div>
        <BaseButton
          type="submit"
          text="Acessar"
          iconRight={<ArrowRight01Icon />}
          disabled={!!emailError || !!passwordError}
        />
      </form>

      <div className="w-full flex flex-col gap-5">
        <p className="font-body text-body-md font-regular text-gray-300">
          Ainda não tem uma conta?
        </p>
        <BaseButton
          text="Cadastrar"
          variant="secondary"
          iconRight={<ArrowRight01Icon />}
        />
      </div>
    </section>
  )
}
