var mysql = require("mysql");
const version = require("nodemon/lib/version");
const User = require("./user");


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
    async ajouterUser(user){
        return await new  Promise((resolve,reject)=>{
            //console.log(user);

            con.connect(function(err){
                //if(err)throw err;
               // var user = req.body;
                console.log(user);
               // res.status(200).send(req.body)
                console.log("connected!");
                con.query("insert into user(nom,prenom,email,contact,username,password) values('"+user.nom+"','"+user.prenom+"','"+user.email+"',"+user.contact+",'"+user.username+"','"+user.password+"')",function(err, result){
                  if(err) { console.log(err)}
                    console.log("Result = "+result);
                })
            });
            
       
        
        
        //  con.connect( function(err){
        //     if(err)return err;
        //  //   var sql = "insert into user(nom,prenom,email,contact,username,password) values(?,?,?,?,?,?)";
        //     var sql = "insert into user set ?";
        //  //   let user_ = [user.nom,user.prenom,user.email,user.contact,user.username,user.password];
        //     let user_ = {nom:user.nom,prenom:user.prenom,email:user.email,contact:user.contact,username:user.username,password:user.password};
        //     con.query(sql,user_,(err,results, fields)=>{
        //         if(err)reject(err);
        //         console.log(results);
        //         resolve(results);
        //     });
        // });
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

    removeItem(id){
        return new Promise((resolve,reject)=>{
            con.connect((err)=>{
                if(err)reject(err);
                con.query("delete from user where id="+id+"",function(err,result){
                    if(err)reject(err);
                    resolve(result);
                })
            })
        })
    }

    updateItem(id,user){
        return new Promise((resolve, reject)=>{
            con.connect((err)=>{
                if(err)reject(err);
                con.query("update user set nom='"+user.nom+"',prenom='"+user.prenom+"',email='"+user.email+"',contact="+user.contact+",username='"+user.username+"',password='"+user.password+"' where id="+id+"",(err,results)=>{
                    if(err)reject(err);
                    resolve(results);
                })
            })
        })
    }
}




module.exports = userDB;
