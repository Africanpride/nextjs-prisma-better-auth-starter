import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from '@/lib/prisma'
import { sendEmail } from './resend';
import WelcomeEmail from '@/emails/slack-welcome';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: ['http://localhost:3000'],

    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    sendEmail({
                        from: "Acme <onboarding@resend.dev>",
                        to: user.email,
                        subject: "Welcome to Our Service!",
                        // Provide user name and email.
                        react: WelcomeEmail({ name: user.name, email: user.email }),
                    });
                },
            },
        },
    },
})