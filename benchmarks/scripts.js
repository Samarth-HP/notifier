import http from "k6/http";

const baseURL = "http://localhost:3000";

export default function () {
  let response = http.get(`${baseURL}/allSms`, {
    user: "string",
    templateId: 12,
    provider: "CDAC",
    data: {
      message: "Test 27",
    },
  });
}
