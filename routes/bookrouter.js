var express=require('express')
const router=express.Router();
var bookarray=[
    {
        btitle:"War And Peace",
        genre:"Fiction",
        author:"Tolstoy",
        img:"https://images-na.ssl-images-amazon.com/images/I/51ltMW40TbL._SX320_BO1,204,203,200_.jpg"
    
    },
    {
        btitle:"Inferno",
        genre:"Fiction",
        author:"Dan Brown",
        img:"https://images-na.ssl-images-amazon.com/images/I/51OAESHPy0L._SX313_BO1,204,203,200_.jpg"
    
    },
    {
        btitle:"The Secret Of The Nagas",
        genre:"Fiction",
        author:"Amish",
        img:"https://images-na.ssl-images-amazon.com/images/I/51l7l-sQL2L._SX325_BO1,204,203,200_.jpg"
    
    }
    ];
    
    router.get("/",function(req,res){
        res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}]});
    });
    
    router.get("/:id",function(req,res){
    res.render("singlebook",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}],bookar:bookarray[id]})
    });
    module.exports=router; 