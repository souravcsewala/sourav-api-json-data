    
        require("dotenv").config();
        const express=require("express");

            const app=express();
            const PORT=process.env.PORT || 7000;
            const pruductRoute=require("./routes/productroute");
            const {connection}=require("./database/db")

     app.get("/", (req, res) => {
    res.send("<style>h1 {position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: red;}</style><h1>hii i am backend developer</h1>");
});


                app.use("/api/data",pruductRoute)

               const Startserver=()=>{
                   try{
                       connection()
                    app.listen(PORT, ()=>{
                        console.log(`server is running on the port ${PORT}`)
                    })
                   }catch(error){
                       console.log(error)
                   }
               }
                   Startserver();
            

              
