const { where } = require('sequelize');
const {city}=require('../models/index');   

class cityrepository{
    async createcity({name}){
        try{
            const city =await city.create({name});
            return city;
        } catch(error){
            throw{error};
        }
    }
    async deletecity({cityid}){
        try {
            await city.destroy({
                where:{
                    id:cityid
                }
            });            
        } catch (error) {
            throw{error};
        }
    }
       
}

module.exports=cityrepository;