import axios from "axios";

const apiToken = axios.create({
  baseURL: "https://api.ngbookings.com/api",
  withCredentials: true,
});

const base = "https://api.ngbookings.com/api";

export const getOTP = async (email: string) => {
  const response = await axios.post(`${base}/agent_auth/get-email-otp`, { email });
  return response.data;
};

export const verifyOTP = async ({ email, otp }: { email: string; otp: string }) => {
  const response = await axios.post(`${base}/agent_auth/verify-email-otp`, { email, otp });
  return response.data;
};

export const getRequest = async ({ url }: { url: string }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authtoken") : null;

  if (!token) {
    // console.warn(token)
    console.warn("⚠️ No auth token found in localStorage");
    throw new Error("No auth token provided");
  }

  const response = await apiToken.get(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiNjgzMTI3YzBjOTZkZTU5OGEyZDM1M2M4IiwiaWF0IjoxNzUxNDYyMDIwLCJleHAiOjE3ODMwMTk2MjB9.gafIZN36PvSeSlAtVFTwujjmpwHYiQRjNViYGFIY4_k`,
    },
  });

  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(
    "https://api.ngbookings.com/api/agent_auth/login",
    credentials,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
