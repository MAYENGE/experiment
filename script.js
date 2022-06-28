function sendemail() {
    var userid = "bIM5F5f_AFw8lfRT2"
    emailjs.init(userid);
    var thename = document.getElementById('thename').value;
    var themail = document.getElementById('themail').value;
    var themsg = document.getElementById('themsg').value;
    var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (thename == "") {
      alert("Please Enter Name");
    }
    else if (themail == "" || themail.match(!validmail)) {
      alert("Please Enter Valid Email");
    }

    else if (themsg == "") {
      alert("Please Enter Message");
    }
    else {
      var contactdetail = {
        from_name: thename,
        from_email: themail,
        message: themsg
      };
      emailjs.send('service_bswf2a7', 'template_atzmzlq', contactdetail).then(function (res) {
        alert("Email Sent Successfully");
      },
        reason => {
          alert("Error Occur");
        })
    }
  }