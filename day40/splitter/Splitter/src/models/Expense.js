import {User} from './User.js'
class Expense {
  constructor(paidBy, ammount, description = 'No description added') {
    if(!paidBy || typeof paidBy != "string"){
        throw new Error('Paid By Must be a valid String')
    }
    if(!ammount || typeof ammount !='number' || ammount<=0){
        throw new Error  ("Ammount must be a Positive Number")  }

    this.paidBy = paidBy;
    this.ammount = ammount;
    this.description = description;
    this.id =User.generateID()
  }

  

}

const ex = new Expense("saad",40,)

console.log(ex)
