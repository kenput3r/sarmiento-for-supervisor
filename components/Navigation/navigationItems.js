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
      english: 'About Vicente',
      spanish: 'Sobre Vicente',
    },
    path: '/about-vicente',
    primary: false,
    secondary: true,
    styles: '',
    icon: 'contact',
  },
  {
    text: {
      english: 'News',
      spanish: 'Noticias',
    },
    path: '/articles',
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
      spanish: 'Donación',
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
      spanish: 'Endosos',
    },
    path: '/endorsements',
    primary: false,
    secondary: true,
    icon: 'endorsement',
  },
  {
    text: {
      english: 'District Map',
      spanish: 'Mapa Del Distrito',
    },
    path: '/district-map',
    primary: false,
    secondary: true,
    icon: 'map',
  },
]

export default navigationItems
