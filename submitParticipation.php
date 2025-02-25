<?php
// submitParticipation.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $fullName = htmlspecialchars($_POST["fullName"]);
  $email = htmlspecialchars($_POST["emailAddress"]);
  // ...retrieve other fields similarly

  // For example, save data to a database or send an email to your address
  // (Database connection and email sending code goes here)

  // Redirect to a thank-you page or display a confirmation message
  header("Location: thankyou.html");
  exit;
}
?>
