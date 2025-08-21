const MONASTERY_POPUP_TRIGGER_ID = "tooltipTrigger1";
const RESTAURANT_POPUP_TRIGGER_ID = "tooltipTrigger2";

export const MONASTERY_DATA = {
  name: "Saint Gayane Church",
  armName: "ՍՈՒՐԲ ԳԱՅԱՆԵ ԵԿԵՂԵՑԻ",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/navi/org/the_church_of_st_gayane/225773844967?si=thr8p7p3e7ktxj2x0yaaqhqw8c",
      imageSrc: "./assets/images/mapIcons/yandex.png",
    },
    {
      name: "Google Maps",
      locationUrl: "https://maps.app.goo.gl/dWNByr5dafBhxdU1A",
      imageSrc: "./assets/images/mapIcons/google.png",
    },
    {
      locationUrl:
        "https://maps.apple.com/place?address=Isi%20Le%20Mulino%20street,%20Vagharshapat,%20Armenia&coordinate=40.157492,44.291787&name=%D5%8D%D5%B8%D6%82%D6%80%D5%A2%20%D4%B3%D5%A1%D5%B5%D5%A1%D5%B6%D5%A5%20%D5%A5%D5%AF%D5%A5%D5%B2%D5%A5%D6%81%D5%AB&place-id=I7D8B4792CC936DEA&map=explore",
      name: "Apple Maps",
      imageSrc: "./assets/images/mapIcons/apple.png",
    },
  ],
};

export const RESTAURANT_DATA = {
  name: "Voskevaz Winery Banquet Hall",
  armName: "Voskevaz Winery Banquet Hall",
  locations: [
    {
      name: "Yandex Navi",
      locationUrl:
        "https://yandex.com/navi/org/35700805837?si=thr8p7p3e7ktxj2x0yaaqhqw8c",
      imageSrc: "./assets/images/mapIcons/yandex.png",
    },
    {
      name: "Google Maps",
      locationUrl: "https://maps.app.goo.gl/FJbeJbNVx8vSt2WY7",
      imageSrc: "./assets/images/mapIcons/google.png",
    },
    {
      locationUrl:
        "https://maps.apple.com/place?address=Armenia&coordinate=40.269774,44.293864&name=Voskevaz%20Winery&place-id=IB8D9F7317C71012C&map=explore",
      name: "Apple Maps",
      imageSrc: "./assets/images/mapIcons/apple.png",
    },
  ],
};

export const POPUP_TRIGGER_CONTENT_MAP = {
  [MONASTERY_POPUP_TRIGGER_ID]: MONASTERY_DATA,
  [RESTAURANT_POPUP_TRIGGER_ID]: RESTAURANT_DATA,
};
