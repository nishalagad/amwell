import axios from "axios";

export const sendMessage = async (props) => {
  try {
    // Replace with your Twilio credentials and WhatsApp API endpoint
    const twilioAccountSid = "ACc8569c8fa44e6076a712ea8533990a03";
    const twilioAuthToken = "7869db1231b08a8ab00092df47717ec8";
    const twilioPhoneNumber = "+14155238886";
    const phoneNumber = props.mobileNumber || "+919307345712";

    const url = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;

    const formData = new FormData();
    formData.append("To", `whatsapp:${phoneNumber}`);
    formData.append("From", `whatsapp:${twilioPhoneNumber}`);
    formData.append("Body", props.message);

    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Basic ${btoa(
          `${twilioAccountSid}:${twilioAuthToken}`
        )}`,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
};
