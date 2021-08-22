function Employee(title) {

  this.title = title;
  this.setTitle = function (title) {
    this.title = title;
  };
  this.getTitle = function () {
    return this.title;
  };

  // this.saludo = function() {
  //   console.log('¡Hola! soy ' + this.title + '.');
  // };
}

function Engineer(title, isManager) {
  Employee.call(this, title);

  this.isManager = isManager;
  this.setIsManager = function setIsManager() {
    this.setIsManager = isManager;
  };
  this.getIsManager = function getIsManager() {
    return this.setIsManager;
  };
}


Employee.prototype.saludo = function() {
  console.log('¡Hola! soy ' + this.title + '.');
};

Engineer.prototype = Object.create(Employee.prototype);
var engineerObject = new Engineer('Developer', true);

console.log(engineerObject.getTitle())
engineerObject.saludo()
