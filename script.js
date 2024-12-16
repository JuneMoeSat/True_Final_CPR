function getTicket(form) {

  let formData = new FormData(form);

  let object = {};

  formData.forEach(function (value, key) {

      object[key] = value;

  });

  if (!object.username || !object.email || !object.phone || !object.date || !object.training) {

      alert("Please fill out all fields before submitting.");

      return;

  }

  alert(

      object.username +

          " registered for " +

          object.training +

          " training on " +

          object.date

  );

  alert(

      "Your appointment schedule will be sent to the email: " +

          object.email

  );

}

