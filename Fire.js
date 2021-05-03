import firebase from 'firebase'

class Fire{
    constructor(){
        this.init()
        this.checkAuth()
    }
    init  =() =>{
        if(!firebase.apps.length)
        {
            firebase.initializeApp({
                apiKey: "AIzaSyBoJGZIq9vavvBalmR3IZ-eD-RTM_E3bYE",
                authDomain: "chatwithfire-a7f80.firebaseapp.com",
                databaseURL: "https://chatwithfire-a7f80-default-rtdb.firebaseio.com",
                projectId: "chatwithfire-a7f80",
                storageBucket: "chatwithfire-a7f80.appspot.com",
                messagingSenderId: "340854328192",
                appId: "1:340854328192:web:69b9bc0c10cd440eebcf65",
                measurementId: "G-0HNWX4TXNF"
              });
        }
    };
    checkAuth= () => {
        firebase.auth().onAuthStateChanged(user=>{
            if(!user){
                firebase.auth().signInAnonymously();
            }
        });
    }
    send = messages =>{
        messages.forEach(item =>{
            console.log('item', item)
            const message={
                text:item.text,
                timestamp:firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            };
            this.db.push(message)
        })
    }
    parse = message =>{
        const {user,text,timestamp}=message.val();
        const {key: _id} = message;
        const createdAt =new Date(timestamp);
        return{
            _id,
            createdAt,
            text,
            user
        };
    };
    get = callback => {
        this.db.on('child_added',snapshot=>callback(this.parse(snapshot)));
    }
    off(){
        this.db.off()
    }
    
    get db(){
        return firebase.database().ref("messages");
    }
    get uid() {
        return(firebase.auth().currentUser || {}).uid;
    }
}
export default new Fire();