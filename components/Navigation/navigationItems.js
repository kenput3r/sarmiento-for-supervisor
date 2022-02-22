const navigationItems = [
  {
    text: {
      english: 'Home',
      spanish: 'Inicio',
    },
    path: '/',
    primary: true,
    secondary: true,
    styles: '',
    icon: 'home',
  },
  {
    text: {
      english: 'Press Release',
      spanish: 'Comunicado de Prensa',
    },
    path: '/press-release',
    primary: false,
    secondary: true,
    styles: '',
    icon: 'updates',
  },
  {
    text: {
      english: 'Contact',
      spanish: 'Contacto',
    },
    path: '/contact',
    primary: false,
    secondary: true,
    styles: '',
    icon: 'contact',
  },
  {
    text: {
      english: 'Donate',
      spanish: 'Donacion',
    },
    path: 'https://www.efundraisingconnections.com/c/VinceSarmiento/',
    primary: true,
    secondary: true,
    styles: 'bg-orange-500 text-white rounded-[5px]',
    icon: 'donate',
  },
  {
    text: {
      english: 'Endorsements',
      spanish: 'Endorsements',
    },
    path: '/endorsements',
    primary: false,
    secondary: true,
    icon: 'endorsement',
  },
]

export default navigationItems
