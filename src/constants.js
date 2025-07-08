const MONASTERY_POPUP_TRIGGER_ID = "tooltipTrigger1";
const RESTAURANT_POPUP_TRIGGER_ID = "tooltipTrigger2";

export const MONASTERY_DATA = {
  name: "Monastery",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/maps/213/moscow/?ll=37.6173%2C55.7558&z=10",
      imageSrc: "./assets/images/yandex.png",
    },
  ],
};

export const RESTAURANT_DATA = {
  name: "Florence Restaurant",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/navi/org/florence/46488697731?si=thr8p7p3e7ktxj2x0yaaqhqw8c",
      imageSrc: "./assets/images/yandex.png",
    },
    {
      name: "Google Maps",
      locationUrl: "https://maps.app.goo.gl/b1sA225gxX42Z4rw9",
      imageSrc: "./assets/images/google-maps.png",
    },
    {
      locationUrl:
        "https://maps.apple.com/place?address=Hrazdan%20Riverbank%20Road,%20Yerevan,%20Armenia&coordinate=40.194461,44.481560&name=Florence%20Restaurant&place-id=I6B3EDFF1C3EB6E6C&map=explore",
      name: "Apple Maps",
      imageSrc: "./assets/images/apple.png",
    },
  ],
};

export const TOOLTIP_TRIGGER_CONTENT_MAP = {
  [MONASTERY_POPUP_TRIGGER_ID]: MONASTERY_DATA,
  [RESTAURANT_POPUP_TRIGGER_ID]: RESTAURANT_DATA,
};
