import http from 'http'  
import path from 'path'
import {readFileSync} from 'fs'
import colors from 'colors'
import dotenv from 'dotenv'

//environment variable
dotenv.config()
const PORT= process.env.SERVER_PORT || 5020
const HOST_NAME=process.env.HOST_NAME || 'localhost'

//server create
const server=http.createServer((req,res)=>{
    //home route
    if(req.url==='/'){
        const homePage = readFileSync(
          "./public/index.html"
        );
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //about route
    else if(req.url==='/about'){
        const about = readFileSync(
         "./public/about.html"
        );
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(about)
        res.end()
    }
    //contact route
    else if(req.url==='/contact'){
        const contact = readFileSync(
          "./public/contact.html"
        );
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(contact)
        res.end()
    }
    //from data showing route
    else if(req.url==='/form'){
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk.toString()
        })
        req.on('end',()=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(body)
            res.end()
        })
    }
    //404 not found page route
    else{
        const error = readFileSync(
          "./public/error.html"
        );
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(error)
        res.end()
    }
})

//server port listen
server.listen(PORT,HOST_NAME,()=>{
    console.log(`server running on http://${HOST_NAME}:${PORT}`.bgGreen);
})


