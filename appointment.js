
function openForm(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeForm(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  

  document.getElementById("formNaresh").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const appointment = {
        doctor: "Dr. Naresh Trehan",
        name,
        email,
        date,
        timestamp: new Date().toLocaleString()
      };
    
      // Save to localStorage
      let history = JSON.parse(localStorage.getItem("appointments")) || [];
      history.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(history));
  
    sendEmail(name, email, "Naresh Trehan", date);
    alert("Your appointment with Dr. Naresh Trehan has been booked!");
    closeForm("modalNaresh");
    

  });
  
  document.getElementById("formRakesh").addEventListener("submit", function(e) {
    e.preventDefault();
     const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const date = this.querySelector('input[type="date"]').value;
  const appointment = {
    doctor: "Dr. Rakash",
    name,
    email,
    date,
    timestamp: new Date().toLocaleString()
  };

  // Save to localStorage
  let history = JSON.parse(localStorage.getItem("appointments")) || [];
  history.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(history));


  sendEmail(name, email, "Rakesh", date);
    alert("Your appointment with Dr. Rakesh Mahajan has been booked!");
    closeForm("modalRakesh");
  });
  
  document.getElementById("formBalbir").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const appointment = {
        doctor: "Dr. Balbir",
        name,
        email,
        date,
        timestamp: new Date().toLocaleString()
      };
    
      // Save to localStorage
      let history = JSON.parse(localStorage.getItem("appointments")) || [];
      history.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(history));
  
  
    sendEmail(name, email, "Balbir", date);
    alert("Your appointment with Dr. Balbir Singh has been booked!");
    closeForm("modalBalbir");
  });
  
  
  document.getElementById("formPankaj").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const appointment = {
        doctor: "Dr.  Pankaj",
        name,
        email,
        date,
        timestamp: new Date().toLocaleString()
      };
    
      // Save to localStorage
      let history = JSON.parse(localStorage.getItem("appointments")) || [];
      history.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(history));
  
  
    sendEmail(name, email, "Pankaj", date);
    alert("Your appointment with Dr. Pankaj Aneja has been booked!");
    closeForm("modalPankaj");
  });
  (function(){
    emailjs.init("BzUocemCmmCy6o01h"); // Replace with your actual Public Key
  })();
  function sendEmail(userName, userEmail, doctorName, appointmentDate) {
    emailjs.send("service_5zalwdy", "template_bavrthj", {
      user_name: userName,
      doctor_name: doctorName,
      appointment_date: appointmentDate,
      to_email: userEmail
    })
    .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
    }, function(error) {
      console.error("Failed to send email", error);
    });
  }
  function showAppointmentHistory() {
    const container = document.getElementById("appointmentHistory");
    const history = JSON.parse(localStorage.getItem("appointments")) || [];
  
    container.style.textAlign = "center"; // Center the whole container
  
    if (history.length === 0) {
      container.innerHTML = "<p>No past appointments found.</p>";
      container.style.display = "block";
      return;
    }
  
    let html = "<h3>Your Past Appointments:</h3><div style='display: inline-block; text-align: left;'>";
    history.forEach(appt => {
      html += `<li><strong>${appt.doctor}</strong><br>
               Name: ${appt.name} | Email: ${appt.email} | Date: ${appt.date} <br><small>Booked on: ${appt.timestamp}</small></li><hr>`;
    });
    html += "</div>";
    container.innerHTML = html;
    container.style.display = "block";
  }
  