import Produk from "../models/produkModel.js";

export const getProduk = async(req,res) =>{
   try {
    const response = await Produk.findAll();
    res.status(200).json(response);
   } catch (error) {
    console.log(error.message);
   }
}
export const getProdukById = async(req,res) =>{
   try {
    const response = await Produk.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json(response);
   } catch (error) {
    console.log(error.message);
   }
}
export const createProduk = async(req,res) =>{
    try {
        await Produk.create(req.body);
        res.status(201).json({message: 'Produk created successfully'})
    } catch (error) {
     console.log(error.message);
    }
 }
 export const updateProduk = async(req,res) =>{
    try {
        await Produk.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({message: 'Produk update successfully'})
    } catch (error) {
     console.log(error.message);
    }
 }
 export const deleteProduk = async(req,res) =>{
    try {
        await Produk.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({message: 'User deleted successfully'})
    } catch (error) {
     console.log(error.message);
    }
 }
