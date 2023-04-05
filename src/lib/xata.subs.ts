import { xataClient } from './xata.client'

export const getSubs = async () => {
  const subs = await xataClient.db.subscribers.getMany()
  return subs
}
