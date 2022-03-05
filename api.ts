import {Store} from "./types";

const MOCK = [
  {
    id: "estacion-verde",
    title: "Estación Verde",
    description: "Café, flores y cosas ricas",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNPGlgvgUcjt2I75PV3Pujn7AWlk2nVwHK3x4Fy=w408-h392-k-no",
    link: "",
    location: {
      map: "https://www.google.com/maps/place/Estaci%C3%B3n+verde/@-34.5652621,-58.4756067,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNW4NMEXzUoBEihwzR68rui3koA3LDEu_Rjh42q!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNW4NMEXzUoBEihwzR68rui3koA3LDEu_Rjh42q%3Dw203-h248-k-no!7i2083!8i2555!4m5!3m4!1s0x95bcb739c3d48f4b:0x9fbe68816fa12ec2!8m2!3d-34.5652621!4d-58.4756067",
      address: "Estomba 2651",
      lat: -34.5652621,
      lng: -58.4843614,
    },
  },
  {
    id: "la-aldea",
    title: "La Aldea",
    description: "Casa de Medialunas",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNgvlAd5XuT6o80fRvjal4FXVNuLSi3PzdYFnE=w408-h306-k-no",
    link: "",
    location: {
      map: "https://www.google.com/maps/place/La+Aldea+-+Casa+de+Medialunas/@-34.5681832,-58.4802694,15z/data=!3m1!4b1!4m5!3m4!1s0x95bcb67c8755ce5b:0x5d21841cf189ed7e!8m2!3d-34.5682001!4d-58.4715157",
      address: "Av. Olazábal 3664, C1430BQP CABA",
      lat: -34.5682001,
      lng: -58.4715157,
    },
  },
  {
    id: "dicha-cafe",
    title: "Dicha Café",
    description: "Café de especialidad colombiano",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPNwL6yRmKi-Hkc08DSbJkM0Pfd3VOzBhjR5Mnw=w203-h114-k-no",
    link: "",
    location: {
      map: "https://www.google.com.ar/maps/place/Dicha+Caf%C3%A9/@-34.5602524,-58.4808012,15z/data=!3m1!4b1!4m5!3m4!1s0x95bcb7680382f6c1:0x676b01111e9376c3!8m2!3d-34.5602704!4d-58.4720465",
      address: "Av. Congreso 3321, C1430 CABA",
      lat: -34.5602704,
      lng: -58.4720465,
    },
  },
];

const api = {
  list: async (): Promise<Store[]> => MOCK,
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id);

    if (!store) {
      throw new Error("Store not found");
    }

    return store;
  },
  hot: async (): Promise<Store> => {
    const index = Math.floor(Math.random() * MOCK.length);

    return MOCK[index];
  },
};

export default api;
