function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "testtest12332test@gmail.com",
        Password: "12345678919ws",
        To: 'daleksieva02@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone number: " + document.getElementById("number").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}