class Person {
  name: string;
  phone: string;
}

export class Employee extends Person { 
  dob: Date;
  employeeId: number;
  getAge() {
    return (new Date()).getFullYear() - this.dob.getFullYear();
  }

}


export class Customer extends Person {
  customerID: number;
  shippingAddress: string;
  billingAddress: string;
}

interface IAnimal {
  name;
  age;
  getName: () => string;
}


// export function getEmployee(id) {
//   return { name: 'Tesfaye' };
// }