// // Write your solution in this file!
// const employee = [
// {
// name: 'Bill',
// streetAdress: 'Nairobi',
// }
// ];
// // update --->Non-destructive
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return {...employee, [key]:value};
// }
// // update --->Destructive
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee; 
// }
// // deletion --->Non-destructive
// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee };
//     delete newEmployee[key];
//     return newEmployee;
// };
// //Deletion --->Destructive
// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// };
// // module.exports = {
// //   employee,
// //   updateEmployeeWithKeyAndValue,
// //   destructivelyUpdateEmployeeWithKeyAndValue,
// //   deleteFromEmployeeByKey,
// //   destructivelyDeleteFromEmployeeByKey,
// // }; 

// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // Non-destructive update
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive deletion
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive deletion
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the functions and employee object (if required)
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  }; 