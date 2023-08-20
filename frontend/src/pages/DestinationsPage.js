import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import BackgroundTemplate from "../components/templates/BackgroundTemplate";
import PopularPlanetSlider from "../components/organisms/ImageSliders/PopularPlanetSlider";
import SearchBar from "../components/molecules/SearchBar";
import TextBody from "../components/atoms/texts/TextBody";
import IconEmergencyAssistance from "../components/atoms/icons/IconEmergencyAssistance";
import TextHeading from "../components/atoms/texts/TextHeading";
import CardPopularDestinationLarge from "../components/molecules/ItemCards/CardPopularDestinationLarge";
import PopularDestinationSlider from "../components/organisms/ImageSliders/PopularDestinationSlider";

export default function DestinationsPage() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get(apiUrl)
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, [apiUrl]);

  const allPlanets = [
    {
      id: 1,
      name: 'Mars',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/41f6/6690/a676009d8b4985f74650d8491df37085?Expires=1693180800&Signature=D26gk0rg6EFpZTcmt86nDODb46dBGnNbuNOatV3q8ENUDj3w9~zInWRAvwMH5GHE8fVVHvlzlOQB~lvMMSOKsphkIaDPUHPWU1pIJw-C1nnaP1JTLF7BAu2CKNdWPnq3OnkiackP318TYknkj9HpZl~EiG04EoTPLbNxFymbo2CO2zkLMG2TIh~y9LHebbStCZVPNTIdGN4VcyyTfNsJhI4gMBlppirN4vSRZEWMZik23OGbE6vnap1dyzlFDR5ZMaJzaUpgzjTmXWimkk0dWgYU3p001ovO2c9on-FY9SJbkl0DdLJN6U3j6HxDgzkxP~88hOf9UCB5lY-g-OkvZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4',
      temperature: '-80 °C',
      duration: '5 Days',
      details: "Mars is the fourth planet from the sun and has a distinct rusty red appearance and two unusual moons.\n\n" +
      "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull." +
      " Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up.\n\n" +
      "Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system, according to NASA Science." +
        "The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull.\n\n",
    },
    {
      id: 2,
      name: 'Mercury',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/de51/b8fa/04339ff0abc9268a3f4df02a1887e193?Expires=1693180800&Signature=a-EN0XQmZbYGJLLLoxZxWJkUCruyUZoWQi3EjCSvek7UUb8b6LQRNy-g5MK~3XalDL6ZSfuKU~SU4~f-q1ZBcGjtPozveynfGBW9o1wjBVW49oLgxpJ0hXCN3Clrj5mNztYJxqU6VSbrmFE4TgQRRP2C3rnKH9PDFMQe9T6yIYFYwt-qrCezWPGeCO7zT7-N4yLwdPZ8b9wiO7rZ0DTtYhAqlR3HM3yZZYs07P3-PJv6Mre-sLQNq04a5yONSqGjIx~P~MG7Zmj9Bxgk9FsoT4JowmfR99B1Mo2oC0xBYSgDL8fJS-32A80il~NsLDPNWsQmth3OAE2L4I8V9nQDEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 7000.00',
      rating: '4.5',
      temperature: '430 °C',
      duration: '2 Days',
      details: "Mercury is the closest planet to the Sun and is also the smallest planet in the Sun's family.\n\n" +
      "It has a very thin atmosphere, almost negligible, which means it can't retain heat effectively, leading to the extreme temperature fluctuations mentioned above." +
      "Its surface is rocky and heavily cratered, resembling the Moon.\n\n" +
      "Despite its proximity to the Sun, some of the polar regions of Mercury are thought to have craters that are permanently shadowed." +
      "Mercury is a fascinating planet with unique characteristics, from its slow rotation and extreme temperature variations to its intriguing surface features.\n\n",
    },
    {
      id: 3,
      name: 'Venus',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/3260/6ea4/cb66b8d5c3420c01336925eef080adc0?Expires=1693180800&Signature=aJvqsAA4Raav40xYpR9TX~witbuBD2w7ppGL6epXmpuqG8KunvNTudP4EKZTFo9r34NcQTvv~ZVnXxu9Pyzw114A4WlRrEWFYVzpELM8m7vIXOIpioYiXSNcU1zZfOqNnmbc27tJQeK86UnXIubuzgxN~eaodXLWz~h6KnRHa4sal9g7oXeRV4rYC8N~H77UkzXzEsb6OoBY5sAOHntjtSY47IfNj1U4mt7fInJUrpdyDtlXysd0tNrsRiH9AHqsO6Nr9mXYYf~93l8sNPiMhiklqBJsqK8us4BopgUB4AleBcssXWeLi3TKWLZy3NB2ZzFYXk7-Yz6iF0Ki8cjgzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '4.7',
      temperature: '470 °C',
      duration: '3 Days',
      details: "Venus is the second planet from the Sun and is often referred to as Earth's sister planet due to their similar size and composition.\n\n" +
      "A blistering atmosphere, hotter than even Mercury's surface, envelopes this world." +
      "Venus' tumultuous winds and toxic atmosphere offer a stark contrast to its ethereal brilliance in the sky.\n\n" +
      "Its unique rotation and day-night cycle make it one of the most intriguing objects in the sun’s family.\n\n",
    },
    {
      id: 4,
      name: 'Earth',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/e37b/f7a0/61839add0eaa454eadb0bc28afde8272?Expires=1693180800&Signature=Jp5Y7nkmccYKVhhgnlOiVxTUuBVbqCmndVnYE2LXHvY-wbP3oFm8JKIXBj63vu1bFIlmsb~jYr8gYVIevbv1iaE4DiXCvo5pZb8KLqCZ9UFU2aLvsZrJepsBGEs-0KuIQcdc85MkJvdVdcUy1b0GTTxGJaPa6zDyzw~1lg4agu2ks-2A9YCRydoDx6RmowltHHkikd9cpKJZ4x~ciYWV8WHdbRlgfYAGlLCHoWIX6FAKk1BGxqKfUeGXiI-~mJplszUCOKW~9hXvooVYQvkra~ERR9oOK7A2S~GRA-EcD~ewrqCafwtAbS7~LVmEHtfkE4y5qpobnHCHQCHHa-R5kA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4400.00',
      rating: '5',
      temperature: '15 °C',
      duration: '4 Days',
      details: "Earth is the third planet from the Sun.\n\n" +
      "Earth is a dynamic and complex planet that sustains a rich diversity of life." +
      "Earth has a diverse and life-supporting atmosphere primarily composed of nitrogen (about 78%) and oxygen (about 21%).\n\n" +
      "Earth's surface features include continents, oceans, mountains, valleys, deserts, and more. About 71% of Earth's surface is covered by water, with the remaining 29% being land." +
      "Biodiversity is distributed across different ecosystems, including forests, grasslands, oceans, and more.\n\n",
    },
    {
      id: 5,
      name: 'Jupiter',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/be55/a4f7/8a82361ca635b25abfcafdfbd660d926?Expires=1693180800&Signature=qpbAmUB9UqyuXdYrEjwjxWrNyv0Ev2DMgNuBlsIvjTNnoapKlZa9sHvW7ocMa1SShgjnAVSoNkm54LUtAZKDBMR9CdzZ1S3mscxjzNzGwo3TNuOAttp53CtHSr~wQhMsGRrqo70WK~mcAabnnHzA0H20BpXZVgRf0OAlA0GUS81qdHQpNqG3JPmsWXbUGARfmowHwvdUv0VW-MwD8ZgAP0JGlMoYL1kugJIvu1EzVAM3I1O~BW~LtYKkdZB9pYy-XIphDUGSkLSJZz7Rz5dCpjwbiV4~q~RBgVi7wu6ZBPZP2B3cC5qgFL~fU70X24jhrhlfup7K57~UIcb6O5bgOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 4200.00',
      rating: '3.5',
      temperature: '-145 °C',
      duration: '7 Days',
      details: "Jupiter, the gas giant king, boasts a vibrant array of cloud bands and belts that encircle its massive form.\n\n" +
      "The Great Red Spot, a centuries-old storm, draws the eye as a testament to its dynamic atmosphere." +
      "Its family of moons, including Europa's subsurface ocean and Io's volcanic activity, add layers to Jupiter's captivating story.\n\n",
    },
    {
      id: 6,
      name: 'Saturn',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/95d1/5a3f/83ebd015165ed7e61b530f0e58b395b5?Expires=1693180800&Signature=ddyGScNS60wzqRWa6A2uWKLETTh9i8NBH17AXvlTjxLSZd76IEzSMi6wm8QE1gJxQjrbKhY~eeGx80BXu--XvjO6nfbfH3x87ACWtHZNn3Ex6kDgVLylxgMTh2luT3s4~Ql4FPU-KyoPLTrbpm1lr5oQ4q6S0doG82xUuwIZZWvHj6MngioC64Y6NQaTp3G9BLYa8agDK1DW8n28FEQNmKSbJ3IeymtBYmW9EmCz1MSV5MBcr8r3xqtz4gD-EJ4Jq1CKY5rxY8CEnZ57lQUZRvo8F6PTUI2h-c7Z1Ijgy0OmHxXwrgmioSLGPVgk-lEfTfOtY3CFWUePXx4gRZKPng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 5200.00',
      rating: '4.5',
      temperature: '-178 °C',
      duration: '14 Days',
      details: "Saturn, with its iconic rings, stands as a celestial jewel.\n\n" +
      "These intricate rings, composed of icy particles, dance around its equator in an ethereal display." +
      "Beyond its rings, Saturn's moons offer realms of their own: icy Enceladus with its subsurface ocean, enigmatic Titan with its hazy atmosphere, and more.\n\n",
    },
    {
      id: 7,
      name: 'Uranus',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/d510/ffd8/3374e01fbc62b5561b1b54036bf4fbaa?Expires=1693180800&Signature=SWTiY3ung7S0AURFkZ0RQdyw4JrzVxLtu5CtbSE8wDWZGqkedmaR8jxRWRnhFlbfGU5oRds~ijP6qRVx1Y8UmJMCUwqjHplf7V~vD9PlyBl-YyGhHX6hQv01St6zxfv25O8hIvKPePWrPfd-05GyiJLQiJ2Ns8IqV~cHkV33DyGo0czi0HzoNKAz~xot3Nzyk7SCNpUipuDaBGQx6QzAmSdO-uWzJ2oZDRaKoXznFVe7nq-26DxHWTx2zY1e~cXrTSzzx8vD6Yi-xrRNhUlH-G--OX1u3N9TwuVtrhSZqTPCvJ3--yhGYehaWrRvmNgBq1b1MXYJ3KleeOh9OTP4CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 6700.00',
      rating: '3',
      temperature: '-224 °C',
      duration: '21 Days',
      details: "Uranus, the enigmatic ice giant, spins on its side, defying the typical orientation of planetary rotations.\n\n" +
      "Its pale blue hue comes from methane in its atmosphere." +
      "With a system of faint rings and a retinue of moons, Uranus adds an air of mystery to our understanding of planetary dynamics.\n\n",
    },
    {
      id: 8,
      name: 'Neptune',
      imageSrc: 'https://s3-alpha-sig.figma.com/img/a690/c71e/91edd4ed35421940fd34234e231428f3?Expires=1693180800&Signature=PnA3eUDBjEZzcgjdCZdhDIC5r7~xONdo3e7efXwxhDeFTO7CE4vltU-iOoacsqzZy9KvXZ4gWaW0Sm2rj-G042y-tDuya1-lM2vXZUakCguroreBMPKhMHR3jcirY9w~6wHecR8MHdLfa71aktVeiuNFS6iyR52mXMWxHmoztr4C-X-2TMWLWzsMlz15UZ1bGdeZK-xtc31MTmIxatDbEuKonqlhfTLX4kIrSJfbZPJvVnoLB54tcC0k-UV3b3Xq8URwXKngb58jbwfsj4Cv~zBXTx-8ufE3Z~JL0JgCV385KN~bCf93LB1LVlWGo5eGp-iVNh92qG7Eq00abwhK-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      cost: '$ 8200.00',
      rating: '4.7',
      temperature: '-218 °C',
      duration: '30 Days',
      details: "Neptune, the distant ice giant, is a world of vibrant blues due to its methane-rich atmosphere.\n\n" +
      "Its Great Dark Spot and accompanying storms showcase the tumultuous nature of its dynamic atmosphere." +
      "Neptune's far-reaching winds and distinctive appearance paint a picture of a planet shaped by the elements.\n\n",
    },
  ];

  const allPopularDestinations = [
    {
      id: 1,
      name: 'Elysium Dome Resort',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/7320/dc94/aeb4e0366da899e1decf79bba3f49c92?Expires=1693180800&Signature=P-8N5Vy2FxpBXISGbyk7H2bC03~5VUEr5Y-mKtNvU-n1xyRaMKCSLyzkwhjbbTimCxR-fCmv4J5SmJ8EJp509Wiz50ubN1W~Eq73sFYjiiOZzIP25GgDDTorcY6WFT~q~6rB~dSMEXlwucz20M3yG7u9BzjIPNMmk~iaAzJC-LAgD2UjMaIvKv6hPTy0FYRFd7d5xpZxgTDEPeX1XOsuzg~AL1PkAS6NnXZQwdr-KXyiGT1VgF5xYoOzdk0KenMqkF46RlgzDZQNo590-~EB-1r5Dw6FHvoRgV2ELGJghQ0a2rLyjAhVNdZo1RLMe~RcBmMuS45u7~QWlnDoiO9EEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 2,
        name: 'Cassini Skywalk Observatory',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/7bad/6a10/0392500f18801957e3a27e7645ba5ed4?Expires=1693180800&Signature=gQfW2PWgxPyWxkT-Bau4tQdTxrWfp5w1McflEq9dJyBTK~IDfXuy6ZgueL-FylyEUAt4OkqdDP-h-8LpAs~COmuP4-jZ0Xza9wA~U6HICvbda3JWXznP7wyerpVGbKdyH4Hpj9Y2E-bfG2PUcSZirXZTs2mvx0iYQKkECrrBncD6bR5~f5j0IT15L03HHuFAd8BtnMg16rXGL1iy2SznT2fv0BJ6ofodpeBHPIF8ngvYjfaKDdacw9VVzlrI-My3cQsqaHCXSmaPILLLUexlNRxyDQERsZmObDK9Ia77U1r9KB7ipLfcOe75AS2CxsnN~8IvvL2KVnHyD2fTe-d-GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        id: 3,
        name: 'Aeronauts Skyport',
          imageSrc: 'https://s3-alpha-sig.figma.com/img/d258/19cf/fc14e1628c22b14dbab31289862a8dfe?Expires=1693180800&Signature=J9GZgEMI9qNlCNkw2W6C~jzw2LSb7GCZBKwfuCuCCPXoPwBuE4~8XngwHA4XQ-yfCYCmHcIJcKsaInRUgB8QaHy2eIkrs9E4iocYAlLgphfzNf5OkbKg-RJVKHUtMETaXhJo44Y-c2FyU6kFE87qsVtDWL2ulfzuUy7WA909DG2ZUbK~LUFiBgWkoMuyCVKbgQDU5lEV1CrB3XfWUco6awO~NRaqGWLO6AD06aGDYYojfwLI070BmYFs~9aEA545dDSW0muY3vbMNbRbB2I6VvdqCvn~FxDrO1AS8eVtkhz9u7MV4raUl~ZP9AQt8~Mrw2VVyq9dJiDni8oDVOBRHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
      id: 4,
      name: 'Athena Spaceport & Martian Space Museum',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/de8d/dbe8/c1b20dbb5c2445d7bc2d80cfb6f6f59a?Expires=1693180800&Signature=n-Du8mXDgpLcZWwANFcSdIyYyWvWB7TQADq8lCeKU51nHsIoxsDb5DyD1u4Vo0NhzxlcCJfK~vkNa~FnCwb17NhUMBbqU6iXw9IrQAN8ERTCdrpFo0wgqzPrP7M6yhwigL61J4eTLg8uuM-GSyq-Kaqr~6mrpV2BqElX22biqky7eKlpV1TGmbM3ft0EiiGEEIN9yPgCNwvZuMdSvFBAGZUjvar6soZqkWMovc8V0xwGkKdNQzSq~61-wMF-P7ww7j2xSYOWMb2iy1gJFFpd~WiNpVVv3i8rAPMNZGTXudtvQzgjv7-YPjeoxe3BZ3RrhPPf~UO0ucpd~PmWSBGYjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 5,
      name: 'Luminova Light Show',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/1cb6/51e2/80753749d5e8494fd2e1c920bd123d95?Expires=1693180800&Signature=ROlJSuYLW8gFi-A01IKEd5zbSdnMuDc0g6O4-M045TZ48bSIb4P5~Ng-EXJ5oEAbcmTfTJ5fE-7aRDugVRhO6sVA5ZS0dKyQKNVEKp1QYV4sXmF-kO-iIemejZkAO1ADR4kJDkEUt73BJw2EmHjg6wS~bwLAsfDJxsO4oAiHy6dtMKKanmEsY1~wrhU2h-jVhLHB3vt9iAs1rD3t6RDlyqTMNA25cY0pa2RGOHNdsFV6IbAGHvlQt8vLLm5cTRgJAiNYCuOKQPk0AR4ibd5Y4zi-f-2Kb0D9zfYZdal81OUyiLimkQq23S8Cw9E8LpAugWMxcn~QAQaxs4~EAQ~ghQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 6,
      name: 'Lunar Sports Arenas',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/8e72/c091/0342ed284f4d1026041ab6d29db7ca06?Expires=1693180800&Signature=qk1nA4vgFDAP~RR2ywwH4Fc82qbhib-6E88qH0RGNtqsNYQTwEqrNHdC1wMsDxYbfYpvrdBCFPUUnc6ST0X7r30Zc423uQiEUUFHpX7yum~uon1vifcICVJyKquWoTQs8CrfZ1EzHZ9~zf66SLH66kr7jZwo7mIOn3b-HYAZcqn9MrXbKQieoJp~wYTsQ36RvIhjNbAF0y6Ou2zfGagOHJ9kgDsruj2B2oUOVZZAQUuL-TheQcXSjv2lxF15AZklp6v3Iwe1ByVJsrpPFfA2fDYlSh~91wXw2xh6tH7gV8IYrQ3HKpFhGV1DGCizZpKkhBtB5zJnXKsoBkh4c~2HLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 7,
      name: 'Red Sands Bazaar',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/0e08/e89c/f2da073b321bacea54cedcaf26535046?Expires=1693180800&Signature=bWBE2a03U4y-F-PR~9yJ4sGi4rlINrg0CZpvXZmCNM~VdiHo6zvXoNkjqtX~dPahI5MAmAVqD4s9VpoE3XOQ2Z0DrHzTwYJBx3b75gN-IjGk-eNj-07Aut4SN5D-PUNgYHnUYXKOJ8iJuhw578kx0PLtN7WmiNmGOnqmU3ZB~Mi61QFhsxt4zabkVTByTC0M7-eBCqr-30gRshuu1IXwRPLOi7cJnNf-mGNyvC-lTJj5NMBGqdsNbNTKCAM2Q1M1Mw8ViBlRbkp0Be4xSKAQVngG3HQxbHZ2~hN3GiSVUe6xZxpSs8TfEis0rwxkvPwj1yqNOLDcvnfWn9D-ARasyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 8,
      name: 'HydroHaven Coral Gardens',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/3668/fc6b/4c73ea19d413005b03fab18630a95893?Expires=1693180800&Signature=cY5IJge7VojbLroGOiDRyoe5L2UezWo-IgGUdUWbv5CcI2YjZQjUSV-wE005cOeX8wvNpP8nNWDkADdJumCWkxpZaHgdz7MU8a6keBIQwnoEbiknjRU18uG7Tsmru4MDkyt~cAXGjpwE43IzfofSfZXHA496UDRe~hZ3UxffCImDgFbq-7MXDlx5-cSE7xLlfHJQ0eIilv4P3R1W~No~AcBHjJs-aQFrQ7ZUMTISs6YqsHb2L8ubLSoEomYP3q6TIObKU55CmMuxca24gAMwD93dY~ONafc6wLkfc09Or6DzmjkI2zItDeMN~OH8tsKbS6OiFrrKx~-zk6YX9SkbIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];


  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  // Listen for keyboard events
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
      }
    );

    // Clean up event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <BackgroundTemplate>
      <View style={styles.container}>
        <View style={styles.topPartContainer}>
          <View style={styles.topPart}>
            <View style={styles.appNameContainer}>
              <Image
                source={require("../assets/images/appLogo.png")}
                style={{ marginRight: 12, width: 22, height: 19 }}
              ></Image>
              <TextHeading value={"Aurora"}></TextHeading>
            </View>
            <View style={styles.searchBarContainer}>
              <SearchBar></SearchBar>
            </View>
            <View style={styles.titleOuterContainer}>
              <View style={styles.commonTitleContainer}>
                <TextHeading
                  value={"Popular Destinations"}
                  fontSize={26}
                  lineHeight={39}
                  fontWeight={600}
                  textAlign={"center"}
                ></TextHeading>
                <TouchableOpacity>
                  <TextBody
                    value={"See all"}
                    fontSize={14}
                    lineHeight={24}
                    fontWeight={600}
                    color={"white"}
                    textAlign={"center"}
                  ></TextBody>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <PopularDestinationSlider data={allPopularDestinations} />
          </View>
        </View>
        {/* from list onwards comes below */}
        {isKeyboardOpen ? (
          <View style={styles.secondPartContainer}></View>
        ) : (
          <>
            <View style={styles.secondPartContainer}>
              <ScrollView>
                <View style={styles.listContainer}>
                  <FlatList
                    data={allPlanets}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <CardPopularDestinationLarge data={item} />
                    )}
                    style={styles.cardList}
                  />
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </BackgroundTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 45,
  },
  topPartContainer: {
    // marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    height: "52%",
  },
  topPart: {
    paddingHorizontal: 32,
  },
  secondPartContainer: {
    height: "48%",
  },
  appNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
    alignItems: "center",
  },
  searchBarContainer: {
    marginBottom: 25,
  },
  commonTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "center",
    marginBottom: 15,
    alignItems: "center",
  },
  titleOuterContainer: {
    // marginHorizontal: 32,
  },
  sliderContainer: {
    paddingLeft: 32,
    // paddingLeft: 22,
    marginBottom: 28,
    minHeight: 296,
    maxHeight: 296,
  },
  listContainer: {
    marginHorizontal: 25, // double check
  },
  cardList: {
    paddingBottom: 50,
  },
});
