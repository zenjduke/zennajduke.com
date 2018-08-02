var nodemailer = require('nodemailer');
 
// Code required to import the `keys.js` file and store it in a variable.
var keys = require("../keys.js");

var mail = keys.mail;
 
//reusable transport, look at the docs to see other service/protocol options
var smtpTransport = nodemailer.createTransport('SMTP',{
    service: 'Gmail',
    auth: {
      user: mail.GMAIL_USER,
      pass: mail.GMAIL_PASS
    }
});
 
// Public method that actually sends the email
exports.sendMail = function(fromAddress, toAddress, subject, content, next){
  var success = true;
  var mailOptions = {
    // NOTE: the fromAdress can actually be different than the email address you're sending it from. Which is good and bad I suppose. Use it wisely.
    from: YOUR_NAME + ' <' + fromAddress + '>',
    to: toAddress,
    replyTo: fromAddress,
    subject: subject,
    html: content
  };
  
  // send the email!
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log('[ERROR] Message NOT sent: ', error);
      success = false;
    }
    else {
      console.log('[INFO] Message Sent: ' + response.message);
    }
    next(error, success);
  });
};