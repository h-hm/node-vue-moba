module.exports = app => {
    var express = require('express')
    // 定义一个子路由
    var router = express.Router()
    // 创建分类
    var Category = require('../../models/Category')
    router.post('/categories', async(req,res) => {
        var model = await Category.create(req.body)
        res.send(model)
    }),
    // 更新列表
    router.put('/categories/:id', async(req,res) => {
        var model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    }),
    //删除分类
    router.delete('/categories/:id', async(req,res) => {
        await Category.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success: true
        })
    }),
    //查询分类列表
    router.get('/categories', async(req,res) => {
        var items = await Category.find().populate('parent').limit(10)
        res.send(items)
    })
    router.get('/categories/:id', async(req,res) => {
        var model = await Category.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api',router)
}