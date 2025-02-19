'use client';

import { User, Mail, ArrowRight } from 'lucide-react';
// import { register } from "module";
import Button from '../components/button';
import { InputRoot, InputIcon, InputField } from '../components/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
              <p className="text-danger font-semibold text-xs">
                {errors.name.message}
              </p>
            )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
              <p className="text-danger font-semibold text-xs">
                {errors.email.message}
              </p>
            )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  );
}
