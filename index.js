const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.use(express.json());


// Routs
app.get("/users",(req,res) =>{

    const html =  `
    <ul>
        ${users.map((user) => `<li>${user.first_name} </li>`).join("")}
    </ul>
    `;

    return res.send(html);

});

//REST API
// app.get("/api/users",(req,res) => {
//     return res.json(users);
// });


app
.route("/api/users/:id")
.get((req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req,res)=>{
    // Edit user with ID
    return res.json({status:"Pending"});
})
.delete((req,res) =>{
    // TODO = Delete the users withs id
    return res.json({status:"Pending"});
});

app.post("/api/users",(req,res) => {
    return res.json({status:"Pending"});
});

app.listen(PORT,() => console.log( `Server started at Port:${PORT}`));