import {User} from './User'

export class Admin extends User{
    constructor(name,email){
        super(name,email)
        this.role ='admin'
    }

    getInfo(){
        return {
            name:this.name,
            email:this.email,
            role:this.role
        }
    }
}