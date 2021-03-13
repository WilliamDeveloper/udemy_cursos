import {Firebase} from './Firebase'

export class Upload{

    static send(file, from){

        return new Promise((resolve, reject)=>{
            let uploadTask = Firebase.hd().ref(from).child(Date.now()+'_'+file.name).put(file)
            uploadTask.on('state_changed',
                (e)=>{
                    console.info('state_change ',e)
                },
                (error)=>{
                    console.log('state_change error ', error)
                    reject(error)
                },
                ()=>{
                    console.log('state_change  sucess')
                    uploadTask.snapshot.ref.getDownloadURL().then( downloadURL =>{
                        resolve(downloadURL)
                    })


                }
            )
        })

    }

}