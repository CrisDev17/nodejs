
const checkExist = (Model) => {
    return async (req, res, next) => {
        const {id} = req.params
        try{
            const modelName = await Model.findOne({
                where: {
                    id
                }
            })
            if(modelName){
                next()
            } else {
                res.status(404).send("Not found")
            }
        } catch(error){
            res.status(500).send(error)
        }
    }
}

module.exports = {
    checkExist
}