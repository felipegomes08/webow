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

export const privateRoutes = [
  {
    path: 'home',
    element: <Home />,
    title: 'Início',
    icon: HomeIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Início',
        path: '/app/home'
      }
    ]
  },
  {
    path: 'evolution',
    element: <Evolution />,
    title: 'Evolução',
    icon: EvolutionIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Evolução',
        path: '/app/evolution'
      }
    ]
  },
  {
    path: 'bets',
    element: <Bets />,
    title: 'Apostas',
    icon: BetsIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Apostas',
        path: '/app/bets'
      }
    ]
  },
  {
    path: 'users',
    element: <User />,
    title: 'Usuários',
    icon: UsersIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/app/users'
      }
    ]
  },
  {
    path: 'users/main',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/app/users'
      },
      {
        label: 'Cadastro',
        path: '/app/users/main'
      }
    ]
  },
  {
    path: 'users/ban',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/app/users'
      },
      {
        label: 'Banidos',
        path: '/app/users/ban'
      }
    ]
  },
  {
    path: 'users/online',
    element: <User />,
    title: 'Usuários',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Usuários',
        path: '/app/users'
      },
      {
        label: 'Online',
        path: '/app/users/online'
      }
    ]
  },
  {
    path: 'affiliates',
    element: <Affiliates />,
    title: 'Afiliados',
    icon: AffiliatesIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Afiliados',
        path: '/app/affiliates'
      }
    ]
  },
  {
    path: 'marketing',
    element: <Marketing />,
    title: 'Marketing',
    icon: MarketingIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Marketing',
        path: '/app/marketing'
      }
    ]
  },
  {
    path: 'marketing/affiliates',
    element: <Marketing />,
    title: 'Afiliados',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Marketing',
        path: '/app/marketing'
      },
      {
        label: 'Afiliados',
        path: '/app/maketing/affiliates'
      }
    ]
  },
  {
    path: 'marketing/upsell',
    element: <Marketing />,
    title: 'UpSell',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Marketing',
        path: '/app/marketing'
      },
      {
        label: 'UpSell',
        path: '/app/maketing/upsell'
      }
    ]
  },
  {
    path: 'marketing/pixel',
    element: <Marketing />,
    title: 'Pixel',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Marketing',
        path: '/app/marketing'
      },
      {
        label: 'Pixel',
        path: '/app/maketing/pixel'
      }
    ]
  },
  {
    path: 'support',
    element: <Support />,
    title: 'Suporte',
    icon: SupportIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/app/support'
      }
    ]
  },
  {
    path: 'support/messages',
    element: <Support />,
    title: 'Mensagem',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/app/support'
      },
      {
        label: 'Mensagem',
        path: '/app/support/messages'
      }
    ]
  },
  {
    path: 'support/ticket',
    element: <Support />,
    title: 'Ticket',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/app/support'
      },
      {
        label: 'Mensagem',
        path: '/app/support/ticket'
      }
    ]
  },
  {
    path: 'support/closedTicket',
    element: <Support />,
    title: 'Ticket Fechado',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Suporte',
        path: '/app/support'
      },
      {
        label: 'Mensagem',
        path: '/app/support/closedTicket'
      }
    ]
  },
  {
    path: 'system',
    element: <System />,
    title: 'Sistema',
    icon: SystemIcon,
    showSidebar: true,
    breadcrumbs: [
      {
        label: 'Sistema',
        path: '/app/system'
      }
    ]
  },
  {
    path: 'system/main',
    element: <System />,
    title: 'Sistema',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Sistema',
        path: '/app/system'
      },
      {
        label: 'Sistema',
        path: '/app/system/main'
      }
    ]
  },
  {
    path: 'system/interface',
    element: <System />,
    title: 'Interface',
    showSidebar: false,
    breadcrumbs: [
      {
        label: 'Sistema',
        path: '/app/system'
      },
      {
        label: 'Interface',
        path: '/app/system/interface'
      }
    ]
  }
];
