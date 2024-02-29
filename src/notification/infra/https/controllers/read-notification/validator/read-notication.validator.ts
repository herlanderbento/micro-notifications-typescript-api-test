import { type Request } from 'express';
import * as Yup from 'yup';

export async function readNotificationValidated(request: Request) {
  const schema = Yup.object().shape({
    notificationId: Yup.string().required(),
    recipientId: Yup.string().required(),
  });

  return await schema.validate(request.params, {
    abortEarly: false,
    stripUnknown: true,
  });
}
