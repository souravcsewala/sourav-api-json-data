    
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
                    body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    h1, h2, a {
                        font-weight: bolder;
                        text-transform: uppercase;
                        font-size: 30px;
                        text-align: center;
                    }
                    h1 {
                        color: red;
                        margin-bottom: 20px;
                    }
                    h2 {
                        color: green;
                        margin-bottom: 20px;
                    }
                    a {
                        color: blue;
                    }
                </style>
            </head>
            <body>
                <h1>Hi, I am Sourav, ENGINEER WALA</h1>
                <h2>Welcome to my REST API JSON Data</h2>
                <a href="https://sourav-api-json-data.onrender.com/api/data/product-test-api">Click here</a>
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
            

              
