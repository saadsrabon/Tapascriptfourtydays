export class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }

    getInfo(){
        return {
            name:this.name,
            email:this.email
        }
    }
}