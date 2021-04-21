const { random } = require("lodash");

const VID_ID = [
  "xrZMYVDcjZI",
  "A6Dkt7zyImk",
  "AhdFpWBeJSQ",
  "zTBIZcB8YA",
  "onMY6lCUCAA",
  "8-vx_ItNiX4",
  "Sgeh2w0j51w",
  "mpMfxmsN_5c",
  "WTvIdp-3Hbk",
  "QxEqYrt9lNI",
];
module.exports = function () {
  const faker = require("faker");
  const _ = require("lodash");
  return {
    users: _.times(3, function (n) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const nickName = faker.lorem.word();
      return {
        id: n + 1,
        firstName,
        lastName,
        nickName: nickName.slice(0, 1).toUpperCase() + nickName.slice(1),
        email: `${firstName.toLowerCase()}.${lastName
          .slice(0, 1)
          .toLowerCase()}@${faker.internet.email().split("@")[1]}`,
        birthDate: faker.date.past(),
        password: faker.internet.password(),
        userRole: n % 2 === 0 ? "CREATOR" : "USER",
        profileImage: faker.image.avatar(),
        planId: Math.round(Math.random() * 8 + 1),
      };
    }),
    ["video-posts"]: _.times(10, function (n) {
      return {
        id: n + 1,
        title: faker.lorem.sentence(),
        link: `https://www.youtube.com/watch?v=${VID_ID[n]}`,
        description: faker.lorem.paragraph(),
        userId: 2,
      };
    }),
    ["content-posts"]: _.times(20, function (n) {
      return {
        id: n + 1,
        title: faker.lorem.sentence(),
        image: n % 2 === 0 ? faker.image.sports() : faker.image.people(),
        description: faker.lorem.paragraphs(),
        userId: 2,
      };
    }),
    plans: [
      { id: 1, value: "12/12" },
      { id: 2, value: "16/8" },
      { id: 3, value: "18/6" },
      { id: 4, value: "20/4" },
      { id: 5, value: "22/2" },
      { id: 6, value: "23/1" },
      { id: 7, value: "24 h." },
      { id: 8, value: "48 h." },
      { id: 9, value: "72 h." },
    ],
  };
};
