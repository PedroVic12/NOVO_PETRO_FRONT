// model.js

const getUser = () => ({
    id: 1,
    name: 'John Doe',
    age: 30
  });
  
  module.exports = {
    getUser
  };

  
  class UserModel {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  export default UserModel;
  