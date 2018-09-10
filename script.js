class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }

    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}
//Manager
class NewManager extends Employee{
    constructor(name, hireDate, salary, descriptionOfJob){
        super(name,salary,hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription(){
        console.log("Hello my name is" + " " + this.name +" "+"I started working here on"+" "+ this.hireDate +" " + "I get paid" + " " + this.salary + " " + "I am a " + this.descriptionOfJob);
    }
getJobDescription(){
    console.log(this.descriptionOfJob);
}

}

//designer
class NewDesigner extends Employee{
    constructor(name, hireDate,salary,experience){
        super(name,salary,hireDate);
        this.experience = experience;
    }
    yearsExperience(){
        console.log("Hello my name is" + " " + this.name +" "+"I started working here on"+" "+ this.hireDate +" " + "I get paid" + " " + this.salary + " " + "I have" + this.experience);
    }
    getExperience(){
        console.log(this.experience);
    }
}

//SalesAssociate
class NewSalesAssociate extends Employee{
    constructor(name,hireDate,salary,degrees){
        super(name,salary,hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log("Hello my name is" + " " + this.name +" "+"I started working here on"+" "+ this.hireDate +" " + "I get paid" + " " + this.salary + " " + "I have" + this.degrees);
    }
    getSales(){
        console.log(this.degrees);
    }
}
  let manager = new NewManager("Rogelio","8/21/2018", "7000", "software developer");
  manager.jobDescription();
  manager.getName();
  manager.getHireDate();
  manager.getSalary();
  manager.getJobDescription();
  
  let designer = new NewDesigner("Rogelio","8/21/2018", "7000", "5 years experience");
  designer.yearsExperience();
  designer.getName();
  designer.getHireDate();
  designer.getSalary();
  designer.getExperience();

  let sales = new NewSalesAssociate("Rogelio","8/21/2018", "7000","2 degrees");
  sales.degreeCompleted();
  sales.getName();
  sales.getHireDate();
  slaes.getSalary();
  sales.getSales();

