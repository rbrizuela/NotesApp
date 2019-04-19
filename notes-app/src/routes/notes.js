const express = require('express')
const router = express.Router()

router.get('/notes/add', (req, res) => {
  res.render('notes/new-note')
})

router.post('/notes/new-note', (req, res) => {
  const { title, description} = req.body
  const errors = []
  if (!title) {
    errors.push({text: 'Please write a title'}) 
  }
  if (!description) {
    errors.push({text: 'Please write a description'}) 
  }
  if (errors.length > 0){
    res.render('notes/new-note', {
      errors,
      title,
      description
    })
  } else {
    res.send('OK ')
  }
  
})

router.get('/notes', (req, res) => {
  res.send('Notes from database')
})

module.exports = router