class HelloControllers {
    async index(req, res){
        return res.json({ hello: 'tudo bem'});
    }
}

export default new HelloControllers();