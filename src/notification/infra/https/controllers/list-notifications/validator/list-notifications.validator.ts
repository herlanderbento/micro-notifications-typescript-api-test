import { type Request } from 'express';
import * as Yup from 'yup';
import { ListNotificationsInput } from '~/notification/application';

export async function listNotificationsValidated(request: Request) {
  const schema = Yup.object().shape({
    recipientId: Yup.string().required(),
    page: Yup.number(),
    perPage: Yup.number(),
  });

  return (await schema.validate(
    {
      ...request.params,
      ...request.query,
    },
    {
      abortEarly: false,
      stripUnknown: true,
    }
  )) as unknown as ListNotificationsInput;
}
