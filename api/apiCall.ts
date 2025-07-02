import axios from "axios";

const apiToken = axios.create({
  baseURL: "https://api.ngbookings.com/api",
});

export const postRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any | File | FileList;
}) => {
  const response = await apiToken.post(url, data);
  return response.data;
};

export const getRequest = async ({ url }: { url: string }) => {
  const response = await apiToken.get(url, {
    headers: {
      Authorization: `Bearer token`,
    },
  });
  return response.data;
};

export const login = async ({ url, data }: { url: string; data: any }) => {
  const response = await axios.post(url, data);
  return response.data;
};
