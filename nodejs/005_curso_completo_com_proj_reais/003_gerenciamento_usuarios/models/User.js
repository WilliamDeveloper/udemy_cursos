class User {

    constructor(name, gender, birth, country, email, password, photo, admin ){
        this._id;
        this._name = name
        this._gender = gender
        this._birth = birth
        this._country = country
        this._email = email
        this._password = password
        this._photo = photo
        this._admin = admin
        this._register = new Date()
    }

    get id (){return this._id}
    set id (value){ this._id = value}

    get register (){return this._register}
    set register(value){ this._register = value}

    get name (){return this._name}
    set name(value){ this._name = value}

    get gender (){return this._gender}
    set gender(value){ this._gender = value}

    get birth (){return this._birth}
    set birth(value){ this._birth = value}

    get country (){return this._country}
    set country(value){ this._country = value}

    get email (){return this._email}
    set email(value){ this._email = value}

    get password (){return this._password}
    set password(value){ this._password = value}

    get photo (){return this._photo}
    set photo(value){ this._photo = value}

    get admin (){return this._admin}
    set admin(value){ this._admin = value}

    loadFromJSON(json){
        for (let name in json){

            switch (name) {
                case '_register':
                    this[name] = new Date(json[name])
                break

                default:
                    this[name] = json[name]
            }


        }
    }



    static getUsersStorage(){
        let users = []

        // if(sessionStorage.getItem("users")){
        //     users = JSON.parse(sessionStorage.getItem("users"))
        // }

        if(localStorage.getItem("users")){
            users = JSON.parse(localStorage.getItem("users"))
        }

        return users
    }

    getNewId(){

        let usersID = parseInt(localStorage.getItem("usersID"))

        if ( !usersID ) usersID =0

        usersID++
        localStorage.setItem("usersID", usersID)


        return usersID
    }

    save(){
        let users = User.getUsersStorage()

        if(this.id > 0){
            let user = users.filter( user => { return user.id == this.id })

            let newUser = Object.assign({},user, this)

            users.map( user=>{
                if(user._id == this.id){
                    Object.assign(user,this)
                    user = this
                }
                return user
            })
        }else{
            this.id = this.getNewId()
            users.push(this)
        }


        // sessionStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("users", JSON.stringify(users))
    }

    remove(){
        let users = User.getUsersStorage()

        users.forEach( (userData, index)=>{
            console.log('this._id == userData._id ', JSON.stringify(this), this.id, this._id , userData._id)
            if(this._id == userData._id){
               users.splice(index,1)
            }

        })

        localStorage.setItem("users", JSON.stringify(users))
    }


}