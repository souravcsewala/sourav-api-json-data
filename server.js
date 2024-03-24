    
        require("dotenv").config();
        const express=require("express");

            const app=express();
            const PORT=process.env.PORT || 7000;
            const pruductRoute=require("./routes/productroute");
            const {connection}=require("./database/db")

   
app.get("/", (req, res) => {
    const htmlContent = `
        <html>
            <head>
                <style>
                    h1 {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -70%);
                        text-align: center;
                        color: red;
                        font-weight: bolder;
                        text-transform: uppercase;
                        font-size: 60px;
                    }
                </style>
            </head>
            <body>
                <h1>hii i am sourav
                    welcome to my REST API JSON DATA 
                </h1>
            </body>
        </html>
    `;
    res.send(htmlContent);
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
            

              
