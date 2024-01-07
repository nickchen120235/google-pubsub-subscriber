import { cloudEvent } from '@google-cloud/functions-framework'
import { type Message } from '@google-cloud/pubsub'

interface PubSubData {
  message: Message
}

cloudEvent<PubSubData>('test-subscriber', event => {
  console.log(`data: ${event.data!.message.data}`)
  console.log(`decoded data: ${event.data!.message.data.toString('ascii')}`)
})
