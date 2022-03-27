var mysql = require("mysql");


var con =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pfa',
    port:'3308'
});

class userDB{
//    constructor(nom,prenom,email,contact,username,password){}
    constructor(){}
    ajouterUser(){
        con.connect(function(err){
            if(err)return err;
            var sql = "insert into user(nom,prenom,email,contact,username,password) values(?,?,?,?,?,?)";
            let user = ["zied","ayech","zied@hotmail.fr","124545","zied4545","1111"];
            con.query(sql,user,(err,results, fields)=>{
                if(err)return err;
                console.log(results);
            });

        })}
        afficherTousUser(){
            return new Promise((resolve,reject)=>{

 
            con.connect(function(err){
                var users = [];

                if(err)return err;
                let sql = "select * from user";
                con.query(sql,(err,results,fields)=>{
                    if(err) reject(err);
                    //console.log(results);
                    results.forEach((v) => users.push({id:v.id,nom:v.nom,prenom:v.prenom,username:v.username,email:v.email,contact:v.contact,password:v.password}));
                    //console.log(users);
                    resolve(users);
                    
                })
                return users;
            })
        });
        
    }
}


module.exports = userDB;
