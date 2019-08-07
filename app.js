var express=require('express')
var app=express();
const path=require('path')
var bookrouter=require('./routes/bookrouter')
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
app.use("books",bookrouter)
app.set("view engine","ejs");
app.set("views","./src/views")
app.use(express.static(path.join(__dirname,"/public")));
app.get("/",function(req,res){
    res.render("index",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}]});
});
app.get("/books",function(req,res){
    res.render("books",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}],bookar:bookarray})
});
app.get("/books/:id",function(req,res){
    var id=req.params.id
    console.log(id)

 res.render("singlebook",{pagetitle:"Library",nav:[{link:"/books",title:"BOOKS"},{link:"/authors",title:"AUTHORS"}],bookar:bookarray[id]})
})

app.listen(8089,function(req,res){
    console.log("server started listening..")
})