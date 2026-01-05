export const testUserController = (req, res)=>{
try {
    return res.status(200).send({success : "true", 
        message : "Test user Data api" })
} catch (error) {
    console.log("error in test API" , error)
}
}