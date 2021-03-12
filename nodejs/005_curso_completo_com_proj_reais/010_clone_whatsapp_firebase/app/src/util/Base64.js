export class Base64 {

    static getMimeType(urlBase64){
        let regex = /^data:(.+);base64,(.*)$/
        let result =  urlBase64.match(regex)
        // console.log('result ',result)
        return result[1]
    }

}