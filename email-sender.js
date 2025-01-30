var sendEmail=require('nodemailer')
var transporter = sendEmail.createTransport({
    host: "sandbox.smtp.mailtrap.io", 
    port: 2525,
    auth: {
      user: 'ad2d154f38dd81',
      pass:'2bdbfc736659e5'
      
    }
  })
  
  var mailOptions = {
    from: 'sanatazi@gmail.com',
    to: 'samiraettaqy@gmail.com',
    subject: 'Request for Exam Date',
    text: 'Hi Mr,I am writing to kindly request the date of the final exam.\n\nThank you in advance for your response.'
  }
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })