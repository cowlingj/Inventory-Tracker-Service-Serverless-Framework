import { APIGatewayProxyHandler } from 'aws-lambda';
import firebase from './firebase'

export const hello: APIGatewayProxyHandler = async (_event, _context) => {
  try {
    await firebase.messaging().send({
      notification: {
        title: "this is a title",
        body: "this is a body",
        
      },
      topic: "default"
    })
  } catch (e) {
    return {
      statusCode: 500,
      body: e
    }
  }
  return { statusCode: 204, body: null }
}
