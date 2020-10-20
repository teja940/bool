import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp()
var database = admin.database()

exports.reset_database_every_day = functions.pubsub.schedule('00 00 * * *').onRun((context) => {
    database.ref('bars/Boylan Heights/itsLit').set(0)
    database.ref('bars/Boylan Heights/itsAight').set(0)
    database.ref('bars/Boylan Heights/itsDead').set(0)
    database.ref('bars/Biltmore/itsLit').set(0)
    database.ref('bars/Biltmore/itsAight').set(0)
    database.ref('bars/Biltmore/itsDead').set(0)
    database.ref('bars/Coupes/itsLit').set(0)
    database.ref('bars/Coupes/itsAight').set(0)
    database.ref('bars/Coupes/itsDead').set(0)
    database.ref('bars/Hole/itsLit').set(0)
    database.ref('bars/Hole/itsAight').set(0)
    database.ref('bars/Hole/itsDead').set(0)
    database.ref('bars/Trin/itsLit').set(0)
    database.ref('bars/Trin/itsAight').set(0)
    database.ref('bars/Trin/itsDead').set(0)
    //database.ref('users').child("Teja Suvarna").update({boylanRatingLimit: 0})
    let dbCon = database.ref("users/");
        dbCon.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            child.ref.update(
            {boylanRatingLimit: 0,
            biltRatingLimit: 0,
            trinRatingLimit: 0, 
            holeRatingLimit: 0, 
            coupesRatingLimit: 0}
            );
        });
        });
    //database.ref('users' + name + 'biltRatingLimit').set(0)
    //database.ref('users/Teja Suvarna/boylanRatingLimit').set(0)
    //database.ref('users/Teja Suvarna/coupesRatingLimit').set(0)
    //database.ref('users/Teja Suvarna/holeRatingLimit').set(0)
    //database.ref('users/Teja Suvarna/trinRatingLimit').set(0)
    return null
  });