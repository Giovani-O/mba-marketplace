'use client'

import BaseInput from '@/components/base-input'
import { ChangeEvent, useState } from 'react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  return (
    <section className="py-[72px] px-20 h-full flex flex-col justify-between">
      <form className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-title-md font-bold">Acesse sua conta</h1>
          <p className=" font-body text-body-sm font-thin text-gray-300">
            Informe seu e-mail e senha para entrar
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <BaseInput
            type="text"
            placeholder="Seu e-mail cadastrado"
            label="E-mail"
            value={email}
            onChange={handleChangeEmail}
            icon="mail"
          />
          <BaseInput
            type="password"
            label="Senha"
            placeholder="Sua senha de acesso"
            value={password}
            onChange={handleChangePassword}
            icon="password"
          />
        </div>
      </form>

      <button>Cadastrar</button>
    </section>
  )
}
