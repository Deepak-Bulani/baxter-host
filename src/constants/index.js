export const navbarItem = [
  {
    text: 'Clinical',
    link: '/clinical',
    subMenuFlag: false,
    subMenuItem: [],
    defaultHover: true,
  },
  {
    text: 'Customer Service',
    link: '/app',
    subMenuFlag: false,
    subMenuItem: [],
    defaultHover: false,
  },
  {
    text: 'Adequest',
    link: '/adequest',
    subMenuFlag: false,
    subMenuItem: [],
  },
  {
    text: 'Patient Adminstartion',
    link: '/patientAd',
    subMenuFlag: false,
    subMenuItem: [],
    defaultHover: false,
  },
  {
    text: 'More',
    link: '#',
    subMenuFlag: true,
    defaultHover: false,
    subMenuItem: [
      {
        text: 'User',
        link: '/user',
        subMenuFlag: false,
      },
      {
        text: 'Patient',
        link: '#',
        subMenuFlag: false,
      },
      {
        text: 'Doctor',
        link: '#',
        subMenuFlag: false,
      },
    ],
  },
];
