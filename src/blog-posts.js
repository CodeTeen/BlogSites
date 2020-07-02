export const getPosts = () => {
  return [
    {
      writer: "Fahri Muhammet Demir",
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      intro:"Sitemin Post Kısmı Böyle Görünecek",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019",
      img: "https://picsum.photos/600"
    },
    {
      writer: "Fahri Muhammet Demir",
      title: "Örnek yazı",
      slug: "ornek-yazi",
      intro:"Sitemin Post Kısmı Böyle Görünecek",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019",
      img: "https://picsum.photos/600"
    },
    {
      writer: "Fahri Muhammet Demir",
      title: "Merhaba dünya!",
      slug: "merhaba",
      intro:"Sitemin Post Kısmı Böyle Görünecek",
      details: require("./posts/merhaba.md").default,
      date: "1 Aralık 2019",
      img: "https://picsum.photos/600"
    }
  ];
};
