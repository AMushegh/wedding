const MONASTERY_POPUP_TRIGGER_ID = "tooltipTrigger1";
const RESTAURANT_POPUP_TRIGGER_ID = "tooltipTrigger2";

export const MONASTERY_DATA = {
  name: "Saint Sargis Church",
  armName: "ՍՈՒՐԲ ՍԱՐԳԻՍ ԵԿԵՂԵՑԻ",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/navi/org/surb_sargis_yekeghetsi/231672587701?si=thr8p7p3e7ktxj2x0yaaqhqw8c",
      imageSrc: "./assets/images/mapIcons/yandex.png",
    },
    {
      name: "Google Maps",
      locationUrl: "https://maps.app.goo.gl/YvTnmuANfhmgh3zV6",
      imageSrc: "./assets/images/mapIcons/google.png",
    },
    {
      locationUrl: "https://maps.apple/p/3Y00D5upp3d_Mr",
      name: "Apple Maps",
      imageSrc: "./assets/images/mapIcons/apple.png",
    },
  ],
};

export const RESTAURANT_DATA = {
  name: "Palermo Hall",
  armName: "Palermo Hall",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/navi/org/palermo_holl/47026041904?si=thr8p7p3e7ktxj2x0yaaqhqw8c",
      imageSrc: "./assets/images/mapIcons/yandex.png",
    },
    {
      name: "Google Maps",
      locationUrl: "https://maps.app.goo.gl/vhZtZvAJ8LiHeY537",
      imageSrc: "./assets/images/mapIcons/google.png",
    },
    {
      locationUrl: "https://maps.apple/p/h5bhkWLHMITv0Y",
      name: "Apple Maps",
      imageSrc: "./assets/images/mapIcons/apple.png",
    },
  ],
};

export const POPUP_TRIGGER_CONTENT_MAP = {
  [MONASTERY_POPUP_TRIGGER_ID]: MONASTERY_DATA,
  [RESTAURANT_POPUP_TRIGGER_ID]: RESTAURANT_DATA,
};
