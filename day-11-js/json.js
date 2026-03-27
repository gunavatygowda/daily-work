const json = `[
   { "id": 1, "name": "A", "active": true },
   { "id": 2, "name": "B", "active": false },
   { "id": 3, "name": "C", "active": true }
]`;

const users = JSON.parse(json)
console.log(users[0]);

const employee = {
    name : "ram",
    salary : 334455,
    skills:[{level:10,name:'Java'},
        {level:5, name:'javascript'}
    ]
}
