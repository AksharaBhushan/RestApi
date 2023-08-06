const Product=require("../models/product");

const getAllProducts = async(req,res)=> {
    const {company,name,featured,sort,select} = req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;  
    }
    if(featured){
            queryObject.featured=featured;
    }
    if(name){
        queryObject.name={$regex:name, $options:'i'};
    }

    let apiData= Product.find(queryObject);

    if(sort){
        let sortFix= sort.replace(",", " ");
        //queryObject.sort= sortFix;
        apiData= apiData.sort(sortFix);
    }

    
    if(select){
        //let selectFix= select.replace(",", " ");
        let selectFix= select.split(",").join(" ");
        //queryObject.sort= sortFix;
        apiData= apiData.sort(selectFix);
    }

    let page=Number( req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1)*limit;

    apiData= apiData.skip(skip).limit(limit);

    console.log(queryObject);


    const myData= await apiData;
    res.status(200).json({myData,nbHits: myData.length});
};

const getAllProductsTesting = async(req,res)=> {
    const myData= await Product.find(queryObject).select('name');
    res.status(200).json({myData});
};
//req.query
module.exports={ getAllProducts,getAllProductsTesting};