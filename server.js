    
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
                        font-weight: bolder;
                        text-transform: uppercase;
                        font-size: 60px;
                    }
                    a{
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -40%);
                        text-align: center;
                        font-weight: bolder;
                        text-transform: uppercase;
                        font-size: 60px;
                     }
                </style>
            </head>
            <body>
                <h1 style="color: red;">hii i am sourav ENGINEER WALA</h1>
                <h2 style="color:green;">welcome to my REST API JSON DATA</h2>
                <a href="https://sourav-api-json-data.onrender.com/api/data/product-test-api" style="color:blue;">click here</a>
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
            

              
