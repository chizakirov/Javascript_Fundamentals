let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function obj(students){
students.forEach(function(student){
  console.log("Name: " + student.name + ", Cohort: " + student.cohort);
})
}
obj(students);

let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
      {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
      {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function obj_users(users){
for (var key in users){
  for(var i = 0; i< users[key].length; i++){
    console.log(users[key][i].last_name + ", " + users[key][i].first_name);
  }
}
}
obj_users(users);