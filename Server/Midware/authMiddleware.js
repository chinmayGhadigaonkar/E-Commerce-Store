import jwt from 'jsonwebtoken'


const authMiddleware =(req ,res ,next)=>{
        // get token form user 
        const token =req.header('auth-token')
        if(!token){
            res.status(401).send({ error: "Please authenticate using a valid token" })
        }
        try{
            const validation  = jwt.verify(token ,process.env.JWT_SECRETE)
            console.log(process.env.JWT_SECRETE)
            req.user =  validation.user
            next()
        }
        catch (error) {
            res.status(401).send({ error: "Please authenticate using a valid token" })
        }
}

export default authMiddleware