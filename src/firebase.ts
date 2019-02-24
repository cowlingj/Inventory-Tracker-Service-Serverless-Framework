import * as firebase from 'firebase-admin'

const config: FirebaseConfig = require('../' + process.env.FIREBASE_CONFIG)

interface FirebaseConfig {
  name: string
  admin: string
}

export default firebase.initializeApp({
  credential: firebase.credential.cert(config.admin)
})