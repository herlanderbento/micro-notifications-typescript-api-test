import { type Request } from 'express';
import * as Yup from 'yup';

export async function deleteNotificationValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.string().required(),
  });

  return await schema.validate(request.params, {
    abortEarly: false,
    stripUnknown: true,
  });
}
