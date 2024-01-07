import { cloudEvent } from '@google-cloud/functions-framework'

cloudEvent('test-subscriber', event => {
  console.log(`content type: ${event.datacontenttype}`)
  // @ts-expect-error wtf google
  console.log(`data: ${event.data.message.data}`)
})
