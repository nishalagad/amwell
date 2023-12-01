export default function APICall(props) {
  console.log("props", props);
  const apiUrl =
    "https://extentiaunternehmensberatunggmbh-a.my.salesforce.com/services/apexrest/myApiEndpoint/doPost";

  // Define the request headers, including the access token
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 00D5j00000DiR1H!ARYAQCPDcmELimMvniSOfeslsWK1UbvRAqq45B7FG5U7EOHB_9ETN2OEeDKCZ98juDqLDtCKWEST4m9nlD65PuCNZ7nWYy6Y",
  };
  const requestBody = {
    patientId: "1234",
    patientName: "Extentia Patient 01",
    appointment_date: "2023-12-02",
    appointment_time: props.time, //"2PM to 3PM",
    doctor_name: props.doctorName,
    doctor_id: "6789",
  };
  // Make the POST request
  fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log("Response:", data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}

function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
}

function error() {
  console.log("Unable to retrieve your location");
}
