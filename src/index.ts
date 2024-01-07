import functions from '@google-cloud/functions-framework'

functions.cloudEvent('test-subscriber', event => {
  console.log(`content type: ${event.datacontenttype}`)
  console.log(`data: ${event.data}`)
})
