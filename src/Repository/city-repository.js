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
    async updateCity({cityId, data}) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getcity(cityid){
        try {
            const city=await findByPk(cityid);
            return city;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }   

}

module.exports=cityrepository;