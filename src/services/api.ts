import axios from "axios";

type Foto = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export const getFotos = async (): Promise<Foto[]> => {
  const { data } = await axios.get<Foto[]>(
    "https://api.thecatapi.com/v1/images/search?limit=100"
  );

  return data;
};