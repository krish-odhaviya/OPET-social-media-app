import axios from "axios";
import alert from "./alert";

const sendEmail = async (
  orgName,
  toEmail,
  subject,
  orgId,
  userName,
  password,
  templateId
) => {
  const apiKey =
    "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";
  const url = "https://api.sendgrid.com/v3/mail/send";

  const data = {
    personalizations: [
      {
        to: [{ email: toEmail }],
        subject: subject,
        dynamic_template_data: {
          Recipient: orgName,
          organization_id: orgId,
          user_name: userName,
          password: password,
        },
      },
    ],
    template_id: templateId,
    from: { name: "Opet Team", email: "g20.8368113101@gmail.com" },
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    console.log("Email sent:", response.data);
  } catch (error) {
    alert(
      "May be API error",
      "Please contact developer of this application for the api key to send emails"
    );
  }
};

export default sendEmail;
