const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


router.post('/received-letter', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let receivedLetter = req.session.data['received-letter']

  if (receivedLetter === 'yes') {
    res.redirect('/received-letter')
  } else {
    res.redirect('/enter-child-weight-details')
  }

})

router.post('/letter-code', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let letterCode = req.session.data['letter-code']

  if (letterCode === 'AB316725') {
    res.redirect('/child-weight-details')
  } else {
    res.redirect('/received-letter?error=true')
  }

})

router.post('/child-weight-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let weight = req.session.data['weight']

  if (weight != '') {
    res.redirect('/your-childs-weight')
  } else {
    res.redirect('/enter-child-weight-details?error=true')
  }

})

router.get('/enter-child-weight-details', function(req,res) {
  res.render('enter-child-weight-details', { 'error': req.query.error })
})

router.get('/received-letter', function(req,res) {
  res.render('received-letter', { 'error': req.query.error })
})

// Add your routes here - above the module.exports line

module.exports = router
