const express = require("express");

const app = (exports.app = express());

const hb = require("express-handlebars");

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));

app.get("/mastering", (req, res) => {
    let title =
        "We base all mastering processes on analog equipment, ensuring to improve the audio quality. We master the audio for Vinyl, Digital, CD or Cassette.";
    res.render("mastering", {
        layout: "main",
        title,
        pageTitle: true,
    });
});

app.get("/", (req, res) => {
    let title = "AnalogCut Mastering & Dubplates - Berlin";
    res.render("homepage", {
        layout: "main",
        title,
        pageTitle: true,
        navbarHome: true,
    });
});

// send mastering request route

app.post("/book-master", (req, res) => {
    const smtpTrans = nodemailer.createTransport({
        host: "smtp.gmail.com", // specific to GMAIL, so change
        port: 465, // specific to GMAIL, so change
        secure: true, // specific to GMAIL, so change
        auth: {
            user: GMAIL_USER, // add to secrets.json
            pass: GMAIL_PASS, // add to secrets.json
        },
    });
    const mailOpts = {
        from: "Your sender info here", // This is ignored by Gmail
        to: GMAIL_USER,
        subject: "New message from contact form at tylerkrys.ca",
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
    };

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render("contact-failure"); // Show a page indicating failure
        } else {
            res.render("contact-success"); // Show a page indicating success
        }
    });
});

if (require.main == module) {
    app.listen(process.env.PORT || 8080, () => {
        console.log("AnalogCut server is running");
    });
}
