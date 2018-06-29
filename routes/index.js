const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.post('/send-email', (req, res, next) => {
  let {
    email,
    subject,
    message
  } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'a.llerena001@gmail.com',
      pass: 'vBnSOCroFngqAvRK22#INaNpJF02NYg3qO7I^*qzyYjbZPQW!5S#X1&QC6^3F0Ck'
    }
  });
  transporter.sendMail({
      from: '"My Awesome Project 👻" <myawesome@project.com>',
      to: email,
      subject: subject,
      text: message,
      html: `<b>${message}</b>`
    })
    .then(info => res.render('message', {
      email,
      subject,
      message,
      info
    }))
    .catch(error => console.log(error));
});

module.exports = router;