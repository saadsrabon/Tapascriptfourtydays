import {User} from '../models/User'

class UserService {
    constructor(){
        this.users = new Map()
    }

    //add user 
    addUser(value){
        let name = value.trim()
        let user = new User(name)
        this.users.set(name,user);
    }
    //get user
    //getAll user
    //get users name
    //has user
    //get usercount
    //clear
    //importUsers
}