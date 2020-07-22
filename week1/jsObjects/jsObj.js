let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function showStudents(arr){
    for(let i=0; i<arr.length; i++){
        console.log("Name: "+ arr[i].name +", Cohort: " + arr[i].cohort)
    }
}

showStudents(students);

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

function showUsers(obj){
    let count =1; 
    for(let key in obj){
        console.log(key.toUpperCase());
        for(let i = 0; i < obj[key].length; i++){
            let nameCount = (obj[key][i].first_name.length + obj[key][i].last_name.length)
            let firstName = obj[key][i].first_name.toUpperCase();
            let lastName = obj[key][i].last_name.toUpperCase();
            console.log(count +" - "+lastName+", "+firstName+" - "+ nameCount);
            count ++;
        }
    }
}

showUsers(users);
