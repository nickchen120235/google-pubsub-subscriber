import { cloudEvent } from '@google-cloud/functions-framework'
import { type Message } from '@google-cloud/pubsub'

interface PubSubData {
  message: Message
}

cloudEvent<PubSubData>('test-subscriber', event => {
  console.log(`data: ${JSON.stringify(event.data!.message.attributes)}`)
})
