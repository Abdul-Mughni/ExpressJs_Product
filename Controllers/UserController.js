const bcrypt = require("bcryptjs");

function getProduct(req, res) {
  return res.render("Home");
}

async function sendProduct(req, res) {
  try {
    const { ProductName, ProductPrice, ProductDesc, ProductRating } = req.body;

    const prodata = {
      ProductName,
      ProductPrice,
      ProductDesc,
      ProductRating,
    };

    // Duplicate product creation rokna hai
    const Response = await fetch(
      "https://6713574e6c5f5ced662619e4.mockapi.io/Product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prodata),
      }
    );

    if (!Response.ok) {
      throw new Error("Failed to create product");
    }

    return res.send({ UserData: req.body });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error in creating product");
  }
}


async function getAllProdcut(req,res){
  try{
    const Response = await fetch("https://6713574e6c5f5ced662619e4.mockapi.io/Product")
    const prodata = await Response.json()
    console.log("Product Data:", prodata);
  
  
    return res.status(200).render("prolist",{prodata})
  
  }catch(error){
    console.log(error)
  }
  }

module.exports = { getProduct,sendProduct,getAllProdcut};
