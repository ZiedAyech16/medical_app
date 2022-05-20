const Calender = require("../model/calender");

async function insertCalender(calender){
    return await Calender.create(
        {date:calender.date,MedecinId:calender.MedecinId}
    );
}

async function findAllCalender(){
    return await Calender.findAll({
        
    });
}

module.exports =  {insertCalender,findAllCalender}