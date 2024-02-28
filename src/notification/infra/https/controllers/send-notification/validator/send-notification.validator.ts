import { type Request } from "express";
import * as Yup from "yup";

export async function sendNotificationValidated(request: Request) {
  const schema = Yup.object().shape({
    recipientId: Yup.string().required(),
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  return await schema.validate(request.body, {
    abortEarly: false,
    stripUnknown: true,
  });
}
