const express = require('express')
const router = express.Router()
const Post = require('./model/post')

router.get('/', (req, res) => {
    return Post.find().populate('creator').exec((err, posts) => {
        if (err) throw err
        res.json(posts)
    })
})

router.get('/public', (req, res) => {
    return Post.find({status: 1}).populate('creator').exec((err, posts) => {
        if (err) throw err
        res.json(posts)
    })
})

router.get('/private', (req, res) => {
    return Post.find({ status: 0 }).populate('creator').exec((err, posts) => {
        if (err) throw err
        res.json(posts)
    })
})

router.get('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request post id' })

    const id = { _id: req.params.id }

    return Post.findById(id).populate('creator').exec((err, post) => {
        if (err) throw err;
        res.json(post)
    })
})

router.get('/user/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request account id' })

    const id = { _id: req.params.id }
    
    return Post.find({ creator: id }).populate('creator').exec((err, posts) => {
        if (err) throw err;
        res.json(posts)
    })
})

router.get('/user/:id/public', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request account id' })

    const id = { _id: req.params.id }

    return Post.find({ creator: id, status: 1 }).populate('creator').exec((err, posts) => {
        if (err) throw err;
        res.json(posts)
    })
})


router.post('/', (req, res) => {
    let post = new Post(req.body)
    post.save(err => {
        if (err) throw err
        console.log('Post successfully')
    })
    res.json({ "data": post })
})

router.put('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request post id' })
    const id = {_id: req.params.id} 
    const update = req.body

    await Post.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ error: 'request post id' })

    const id = { _id: req.params.id }
    Post.findByIdAndDelete(id, (err, doc) => {
        if (err) console.log(err);
        else res.json({ message: `Delete post ${req.params.id} successfully` });
    })
})

module.exports = router