// re_gqXm96Yj_MciQiu68ZhmTGPD1LxKHwUgM

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["walter.avendano@gmail.com"],
                subject: "Landing Page",
                react: EmailTemplate({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email,
                }),
                text:"Tarredev",
            });
            return Response.json(data);
        } catch (error) {
            return Response.json({ error });
        }
    } catch (error) {
        return Response.json({ error });
    }
}
