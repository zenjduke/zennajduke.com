// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
const nodemailer = require('nodemailer');

// Code required to import the `keys.js` file and store it in a variable.
var keys = require("../keys.js");

var mail = keys.mail;



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  //If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  // // POST route from contact form
  // app.post('/contact', function (req, res) {
  //   let mailOpts, smtpTrans;
  //   smtpTrans = nodemailer.createTransport({
  //     host: 'smtp.gmail.com',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: mail.GMAIL_USER,
  //       pass: mail.GMAIL_PASS
  //     }
  //   });
  //   debugger;
  //   mailOpts = {
  //     from: req.body.name + ' &lt;' + req.body.email + '&gt;',
  //     to: mail.GMAIL_USER,
  //     subject: 'New message from contact form at zennajduke.com',
  //     text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  //   };
  //   smtpTrans.sendMail(mailOpts, function (error, response) {
  //     if (error) {
  //       res.render('contact-failure');
  //     }
  //     else {
  //       res.render('contact-success');
  //     }
  //   });
  // });
};
