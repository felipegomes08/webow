import AffiliatesIcon from 'assets/menuIcons/AffiliatesIcon.svg';
import BetsIcon from 'assets/menuIcons/BetsIcon.svg';
import EvolutionIcon from 'assets/menuIcons/EvolutionIcon.svg';
import HomeIcon from 'assets/menuIcons/HomeIcon.svg';
import MarketingIcon from 'assets/menuIcons/MarketingIcon.svg';
import SupportIcon from 'assets/menuIcons/SupportIcon.svg';
import SystemIcon from 'assets/menuIcons/SystemIcon.svg';
import UsersIcon from 'assets/menuIcons/UsersIcon.svg';
import { Affiliates } from 'pages/Affiliates';
import { Bets } from 'pages/Bets';
import { Evolution } from 'pages/Evolution';
import { Home } from 'pages/Home';
import { Marketing } from 'pages/Marketing';
import { Support } from 'pages/Support';
import { System } from 'pages/System';
import { User } from 'pages/User';

export const localRoutes = [
  {
    path: '/home',
    element: <Home />,
    title: 'Início',
    icon: HomeIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Início',
        path: '/home'
      }
    ]
  },
  {
    path: '/evolution',
    element: <Evolution />,
    title: 'Evolução',
    icon: EvolutionIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Evolução',
        path: '/evolution'
      }
    ]
  },
  {
    path: '/bets',
    element: <Bets />,
    title: 'Apostas',
    icon: BetsIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Apostas',
        path: '/bets'
      }
    ]
  },
  {
    path: '/users',
    element: <User />,
    title: 'Usuários',
    icon: UsersIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/users'
      }
    ]
  },
  {
    path: '/users/main',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/users'
      },
      {
        label: 'Cadastro',
        path: '/users/main'
      }
    ]
  },
  {
    path: '/users/ban',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/users'
      },
      {
        label: 'Banidos',
        path: '/users/ban'
      }
    ]
  },
  {
    path: '/users/online',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/users'
      },
      {
        label: 'Online',
        path: '/users/online'
      }
    ]
  },
  {
    path: '/affiliates',
    element: <Affiliates />,
    title: 'Afiliados',
    icon: AffiliatesIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Afiliados',
        path: '/affiliates'
      }
    ]
  },
  {
    path: '/marketing',
    element: <Marketing />,
    title: 'Marketing',
    icon: MarketingIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Marketing',
        path: '/marketing'
      }
    ]
  },
  {
    path: '/support',
    element: <Support />,
    title: 'Suporte',
    icon: SupportIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/support'
      }
    ]
  },
  {
    path: '/support/messages',
    element: <Support />,
    title: 'Mensagem',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/support'
      },
      {
        label: 'Mensagem',
        path: '/support/messages'
      }
    ]
  },
  {
    path: '/system',
    element: <System />,
    title: 'Sistema',
    icon: SystemIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Sistema',
        path: '/system'
      }
    ]
  }
];
