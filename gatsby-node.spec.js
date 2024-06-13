const axios = require('axios');
const lib = require('./gatsby-node');

const mockData = [
  {
    id: 'IOuiXocunSE',
    slug: 'a-man-working-on-a-skateboard-inside-of-a-shop-IOuiXocunSE',
    alternative_slugs: {
      en: 'a-man-working-on-a-skateboard-inside-of-a-shop-IOuiXocunSE',
      es: 'un-hombre-trabajando-en-una-patineta-dentro-de-una-tienda-IOuiXocunSE',
      ja: '店内でスケートボードをやる男性-IOuiXocunSE',
      fr: 'un-homme-travaillant-sur-une-planche-a-roulettes-a-linterieur-dun-magasin-IOuiXocunSE',
      it: 'un-uomo-che-lavora-su-uno-skateboard-allinterno-di-un-negozio-IOuiXocunSE',
      ko: '가게-안에서-스케이트보드를-타고-있는-남자-IOuiXocunSE',
      de: 'ein-mann-der-in-einem-geschaft-an-einem-skateboard-arbeitet-IOuiXocunSE',
      pt: 'um-homem-trabalhando-em-um-skate-dentro-de-uma-loja-IOuiXocunSE',
    },
    created_at: '2024-01-25T19:25:53Z',
    updated_at: '2024-06-10T14:12:13Z',
    promoted_at: null,
    width: 5263,
    height: 3509,
    color: '#260c0c',
    blur_hash: 'LGC?M*0LR*Vr~Vs.D*Rj-oxtD%%1',
    description: null,
    alt_description: 'a man working on a skateboard inside of a shop',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1706209792857-b93902bac0e8?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1706209792857-b93902bac0e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1706209792857-b93902bac0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1706209792857-b93902bac0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1706209792857-b93902bac0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706209792857-b93902bac0e8',
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-man-working-on-a-skateboard-inside-of-a-shop-IOuiXocunSE',
      html: 'https://unsplash.com/photos/a-man-working-on-a-skateboard-inside-of-a-shop-IOuiXocunSE',
      download:
        'https://unsplash.com/photos/IOuiXocunSE/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/IOuiXocunSE/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'a-F-5AW3Vdc',
      updated_at: '2024-06-11T08:39:14Z',
      username: 'lucia_sorrentino',
      name: 'Lucia Sorrentino',
      first_name: 'Lucia',
      last_name: 'Sorrentino',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: 'London',
      links: {
        self: 'https://api.unsplash.com/users/lucia_sorrentino',
        html: 'https://unsplash.com/@lucia_sorrentino',
        photos: 'https://api.unsplash.com/users/lucia_sorrentino/photos',
        likes: 'https://api.unsplash.com/users/lucia_sorrentino/likes',
        portfolio: 'https://api.unsplash.com/users/lucia_sorrentino/portfolio',
        following: 'https://api.unsplash.com/users/lucia_sorrentino/following',
        followers: 'https://api.unsplash.com/users/lucia_sorrentino/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1691883842711-378b63b86a8eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1691883842711-378b63b86a8eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1691883842711-378b63b86a8eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'lucia_sorrentino_lando',
      total_collections: 0,
      total_likes: 23,
      total_photos: 114,
      total_promoted_photos: 0,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'lucia_sorrentino_lando',
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'Sk-C-om9Jz8',
    slug: 'low-angle-of-black-metal-tower-Sk-C-om9Jz8',
    alternative_slugs: {
      en: 'low-angle-of-black-metal-tower-Sk-C-om9Jz8',
      es: 'angulo-bajo-de-la-torre-de-metal-negro-Sk-C-om9Jz8',
      ja: 'ブラックメタルタワーの低角度-Sk-C-om9Jz8',
      fr: 'angle-bas-de-la-tour-en-metal-noir-Sk-C-om9Jz8',
      it: 'angolo-basso-della-torre-di-metallo-nero-Sk-C-om9Jz8',
      ko: '블랙-메탈-타워의-낮은-각도-Sk-C-om9Jz8',
      de: 'niedriger-winkel-des-schwarzen-metallturms-Sk-C-om9Jz8',
      pt: 'baixo-angulo-da-torre-de-metal-preto-Sk-C-om9Jz8',
    },
    created_at: '2016-06-13T14:47:40Z',
    updated_at: '2024-06-11T11:17:22Z',
    promoted_at: '2016-06-13T14:47:40Z',
    width: 5264,
    height: 3509,
    color: '#260c0c',
    blur_hash: 'L99Gj#xa9DNFIpR*$%ofrooJM{s:',
    description: null,
    alt_description: 'low angle of black metal tower',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1465829235810-1f912537f253?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1465829235810-1f912537f253?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1465829235810-1f912537f253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1465829235810-1f912537f253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1465829235810-1f912537f253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1465829235810-1f912537f253',
    },
    links: {
      self: 'https://api.unsplash.com/photos/low-angle-of-black-metal-tower-Sk-C-om9Jz8',
      html: 'https://unsplash.com/photos/low-angle-of-black-metal-tower-Sk-C-om9Jz8',
      download:
        'https://unsplash.com/photos/Sk-C-om9Jz8/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/Sk-C-om9Jz8/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwyfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 347,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'k4dbcU0uHDg',
      updated_at: '2024-04-24T01:02:19Z',
      username: 'dtopkin1',
      name: 'Dayne Topkin',
      first_name: 'Dayne',
      last_name: 'Topkin',
      twitter_username: 'daynetopkin',
      portfolio_url: 'https://cutt.us/user-969c4a3d7b1d',
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/dtopkin1',
        html: 'https://unsplash.com/@dtopkin1',
        photos: 'https://api.unsplash.com/users/dtopkin1/photos',
        likes: 'https://api.unsplash.com/users/dtopkin1/likes',
        portfolio: 'https://api.unsplash.com/users/dtopkin1/portfolio',
        following: 'https://api.unsplash.com/users/dtopkin1/following',
        followers: 'https://api.unsplash.com/users/dtopkin1/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1559189489265-e1b3a1612b45?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1559189489265-e1b3a1612b45?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1559189489265-e1b3a1612b45?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 1,
      total_photos: 195,
      total_promoted_photos: 29,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: null,
        portfolio_url: 'https://cutt.us/user-969c4a3d7b1d',
        twitter_username: 'daynetopkin',
        paypal_email: null,
      },
    },
  },
  {
    id: '4-EeTnaC1S4',
    slug: 'man-wearing-headphones-while-sitting-on-chair-in-front-of-macbook-4-EeTnaC1S4',
    alternative_slugs: {
      en: 'man-wearing-headphones-while-sitting-on-chair-in-front-of-macbook-4-EeTnaC1S4',
      es: 'hombre-con-auriculares-mientras-esta-sentado-en-una-silla-frente-a-macbook-4-EeTnaC1S4',
      ja: 'macbookの前の椅子に座っているときにヘッドフォンをしている男性-4-EeTnaC1S4',
      fr: 'homme-portant-des-ecouteurs-alors-quil-est-assis-sur-une-chaise-devant-un-macbook-4-EeTnaC1S4',
      it: 'uomo-che-indossa-cuffie-mentre-e-seduto-sulla-sedia-di-fronte-a-macbook-4-EeTnaC1S4',
      ko: 'macbook-앞-의자에-앉아-헤드폰을-착용한-남자-4-EeTnaC1S4',
      de: 'mann-mit-kopfhorern-wahrend-er-auf-einem-stuhl-vor-dem-macbook-sitzt-4-EeTnaC1S4',
      pt: 'homem-usando-fones-de-ouvido-enquanto-sentado-na-cadeira-em-frente-ao-macbook-4-EeTnaC1S4',
    },
    created_at: '2017-12-14T13:39:02Z',
    updated_at: '2024-06-10T18:05:50Z',
    promoted_at: '2017-12-14T14:37:15Z',
    width: 6720,
    height: 4480,
    color: '#0c2626',
    blur_hash: 'LPDJkse8IoJo4TyEx^M{I@j[jE%2',
    description: null,
    alt_description:
      'man wearing headphones while sitting on chair in front of MacBook',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1513258496099-48168024aec0',
    },
    links: {
      self: 'https://api.unsplash.com/photos/man-wearing-headphones-while-sitting-on-chair-in-front-of-macbook-4-EeTnaC1S4',
      html: 'https://unsplash.com/photos/man-wearing-headphones-while-sitting-on-chair-in-front-of-macbook-4-EeTnaC1S4',
      download:
        'https://unsplash.com/photos/4-EeTnaC1S4/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/4-EeTnaC1S4/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwzfDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 1790,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      'back-to-school': {
        status: 'approved',
        approved_on: '2021-09-14T08:09:30Z',
      },
      'business-work': {
        status: 'approved',
        approved_on: '2020-09-18T19:42:16Z',
      },
      technology: {
        status: 'approved',
        approved_on: '2020-09-19T07:25:10Z',
      },
    },
    asset_type: 'photo',
    user: {
      id: 'EDrR_qL61bc',
      updated_at: '2024-06-03T06:37:30Z',
      username: 'sickhews',
      name: 'Wes Hicks',
      first_name: 'Wes',
      last_name: 'Hicks',
      twitter_username: null,
      portfolio_url:
        'https://sickhews.darkroom.com/?utm_medium=social&utm_source=unsplash&utm_content=v1',
      bio: 'Based in North Carolina, focusing on nature / outdoors. Please follow me on Instagram @sickhews. Prints available via the website below! Thank you for your support.',
      location: 'Charlotte, NC',
      links: {
        self: 'https://api.unsplash.com/users/sickhews',
        html: 'https://unsplash.com/@sickhews',
        photos: 'https://api.unsplash.com/users/sickhews/photos',
        likes: 'https://api.unsplash.com/users/sickhews/likes',
        portfolio: 'https://api.unsplash.com/users/sickhews/portfolio',
        following: 'https://api.unsplash.com/users/sickhews/following',
        followers: 'https://api.unsplash.com/users/sickhews/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1548249255389-2d3ac2109b06?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1548249255389-2d3ac2109b06?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1548249255389-2d3ac2109b06?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'sickhews',
      total_collections: 39,
      total_likes: 222,
      total_photos: 394,
      total_promoted_photos: 163,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'sickhews',
        portfolio_url:
          'https://sickhews.darkroom.com/?utm_medium=social&utm_source=unsplash&utm_content=v1',
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: '5QIPyaDT1V0',
    slug: 'two-person-doing-mix-martial-arts-on-white-and-blue-stadium-5QIPyaDT1V0',
    alternative_slugs: {
      en: 'two-person-doing-mix-martial-arts-on-white-and-blue-stadium-5QIPyaDT1V0',
      es: 'dos-personas-haciendo-artes-marciales-mixtas-en-el-estadio-blanco-y-azul-5QIPyaDT1V0',
      ja: '白と青のスタジアムで総合格闘技をやっている2人-5QIPyaDT1V0',
      fr: 'deux-personnes-faisant-des-arts-martiaux-mixtes-sur-le-stade-blanc-et-bleu-5QIPyaDT1V0',
      it: 'due-persone-che-fanno-arti-marziali-miste-sullo-stadio-bianco-e-blu-5QIPyaDT1V0',
      ko: '흰색과-파란색-경기장에서-혼합-무술을하는-두-사람-5QIPyaDT1V0',
      de: 'zwei-personen-machen-mixed-martial-arts-im-weissen-und-blauen-stadion-5QIPyaDT1V0',
      pt: 'duas-pessoas-fazendo-artes-marciais-mistas-no-estadio-branco-e-azul-5QIPyaDT1V0',
    },
    created_at: '2017-02-04T13:40:55Z',
    updated_at: '2024-06-08T01:17:31Z',
    promoted_at: '2017-02-04T13:40:55Z',
    width: 3500,
    height: 2333,
    color: '#262626',
    blur_hash: 'L9BD1r009}IUt89F-;9ZT2IU~VM{',
    description: null,
    alt_description:
      'two person doing mix martial arts on white and blue stadium',
    breadcrumbs: [
      {
        slug: 'backgrounds',
        title: 'HQ Background Images',
        index: 0,
        type: 'landing_page',
      },
      {
        slug: 'nature',
        title: 'Nature Backgrounds',
        index: 1,
        type: 'landing_page',
      },
      {
        slug: 'fire',
        title: 'Fire Backgrounds',
        index: 2,
        type: 'landing_page',
      },
    ],
    urls: {
      raw: 'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1486215397028-cb4f31efea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1486215397028-cb4f31efea3e',
    },
    links: {
      self: 'https://api.unsplash.com/photos/two-person-doing-mix-martial-arts-on-white-and-blue-stadium-5QIPyaDT1V0',
      html: 'https://unsplash.com/photos/two-person-doing-mix-martial-arts-on-white-and-blue-stadium-5QIPyaDT1V0',
      download:
        'https://unsplash.com/photos/5QIPyaDT1V0/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/5QIPyaDT1V0/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw0fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 587,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      sports: {
        status: 'approved',
        approved_on: '2020-07-21T13:18:55Z',
      },
    },
    asset_type: 'photo',
    user: {
      id: 'IRwOlIpEmOE',
      updated_at: '2023-09-11T18:39:44Z',
      username: 'svkj',
      name: 'Solal Ohayon',
      first_name: 'Solal',
      last_name: 'Ohayon',
      twitter_username: null,
      portfolio_url: null,
      bio: 'Paris based digital art director',
      location: 'Paris, France',
      links: {
        self: 'https://api.unsplash.com/users/svkj',
        html: 'https://unsplash.com/@svkj',
        photos: 'https://api.unsplash.com/users/svkj/photos',
        likes: 'https://api.unsplash.com/users/svkj/likes',
        portfolio: 'https://api.unsplash.com/users/svkj/portfolio',
        following: 'https://api.unsplash.com/users/svkj/following',
        followers: 'https://api.unsplash.com/users/svkj/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1486672469251-a87ce6a181b1?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1486672469251-a87ce6a181b1?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1486672469251-a87ce6a181b1?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 2,
      total_photos: 2,
      total_promoted_photos: 1,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'zmDbLyW7VQg',
    slug: 'silhouette-of-person-sitting-on-chair-in-front-of-table-zmDbLyW7VQg',
    alternative_slugs: {
      en: 'silhouette-of-person-sitting-on-chair-in-front-of-table-zmDbLyW7VQg',
      es: 'silueta-de-persona-sentada-en-silla-frente-a-mesa-zmDbLyW7VQg',
      ja: 'テーブルの前の椅子に座っている人のシルエット-zmDbLyW7VQg',
      fr: 'silhouette-de-personne-assise-sur-une-chaise-devant-une-table-zmDbLyW7VQg',
      it: 'silhouette-di-persona-seduta-sulla-sedia-di-fronte-al-tavolo-zmDbLyW7VQg',
      ko: '테이블-앞-의자에-앉아-있는-사람의-실루엣-zmDbLyW7VQg',
      de: 'silhouette-der-person-die-auf-dem-stuhl-vor-dem-tisch-sitzt-zmDbLyW7VQg',
      pt: 'silhueta-da-pessoa-sentada-na-cadeira-na-frente-da-mesa-zmDbLyW7VQg',
    },
    created_at: '2020-05-12T07:16:55Z',
    updated_at: '2024-06-11T06:31:08Z',
    promoted_at: null,
    width: 5033,
    height: 3356,
    color: '#262626',
    blur_hash: 'LL9QmqfQ00ofxuj[M{ay9Fj[?bWB',
    description: 'Frustrated student in empty classroom.',
    alt_description: 'silhouette of person sitting on chair in front of table',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1589267800259-7cabc122afe7?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1589267800259-7cabc122afe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1589267800259-7cabc122afe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1589267800259-7cabc122afe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1589267800259-7cabc122afe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1589267800259-7cabc122afe7',
    },
    links: {
      self: 'https://api.unsplash.com/photos/silhouette-of-person-sitting-on-chair-in-front-of-table-zmDbLyW7VQg',
      html: 'https://unsplash.com/photos/silhouette-of-person-sitting-on-chair-in-front-of-table-zmDbLyW7VQg',
      download:
        'https://unsplash.com/photos/zmDbLyW7VQg/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/zmDbLyW7VQg/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw1fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 98,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      people: {
        status: 'rejected',
      },
    },
    asset_type: 'photo',
    user: {
      id: '0cMl3B9Z8vo',
      updated_at: '2024-04-19T17:26:24Z',
      username: '4lexmccarthy',
      name: 'Alex McCarthy',
      first_name: 'Alex',
      last_name: 'McCarthy',
      twitter_username: '4lexmccarthy',
      portfolio_url: null,
      bio: '21-year-old enthusiast photographer sharing his work with the world. Check out some portraits on Instagram: @4lexmccarthy',
      location: 'Tegucigalpa,Honduras',
      links: {
        self: 'https://api.unsplash.com/users/4lexmccarthy',
        html: 'https://unsplash.com/@4lexmccarthy',
        photos: 'https://api.unsplash.com/users/4lexmccarthy/photos',
        likes: 'https://api.unsplash.com/users/4lexmccarthy/likes',
        portfolio: 'https://api.unsplash.com/users/4lexmccarthy/portfolio',
        following: 'https://api.unsplash.com/users/4lexmccarthy/following',
        followers: 'https://api.unsplash.com/users/4lexmccarthy/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1637919341420-8de5304a2a00image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1637919341420-8de5304a2a00image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1637919341420-8de5304a2a00image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: '4lexmccarthy',
      total_collections: 10,
      total_likes: 6383,
      total_photos: 83,
      total_promoted_photos: 5,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: '4lexmccarthy',
        portfolio_url: null,
        twitter_username: '4lexmccarthy',
        paypal_email: null,
      },
    },
  },
  {
    id: '9Eheu3sIgrM',
    slug: 'time-lapse-photography-of-person-doing-circle-rainbow-light-9Eheu3sIgrM',
    alternative_slugs: {
      en: 'time-lapse-photography-of-person-doing-circle-rainbow-light-9Eheu3sIgrM',
      es: 'fotografia-de-lapso-de-tiempo-de-una-persona-que-hace-un-circulo-de-luz-de-arco-iris-9Eheu3sIgrM',
      ja: 'サークルレインボーライトをしている人のタイムラプス撮影-9Eheu3sIgrM',
      fr: 'photographie-en-accelere-de-la-personne-faisant-la-lumiere-arc-en-ciel-du-cercle-9Eheu3sIgrM',
      it: 'fotografia-time-lapse-di-persona-che-fa-cerchio-arcobaleno-luce-9Eheu3sIgrM',
      ko: '서클-레인보우-라이트를-하고-있는-사람의-타임랩스-촬영-9Eheu3sIgrM',
      de: 'zeitrafferfotografie-einer-person-die-regenbogenlicht-kreist-9Eheu3sIgrM',
      pt: 'fotografia-time-lapse-de-pessoa-fazendo-circulo-de-luz-arco-iris-9Eheu3sIgrM',
    },
    created_at: '2017-05-31T04:49:56Z',
    updated_at: '2024-06-08T01:36:41Z',
    promoted_at: '2017-05-31T10:50:52Z',
    width: 4000,
    height: 2831,
    color: '#0c0c26',
    blur_hash: 'L63+4pkQ9WRDr:W;S%r@IRaP%No[',
    description:
      'Life off screen doesn’t have to mean you stay in the darkness.   Nights learning poi spinning at the beach were quite fun!',
    alt_description:
      'time-lapse photography of person doing circle rainbow light',
    breadcrumbs: [
      {
        slug: 'images',
        title: '1,000,000+ Free Images',
        index: 0,
        type: 'landing_page',
      },
      {
        slug: 'feelings',
        title: 'Feelings Images',
        index: 1,
        type: 'landing_page',
      },
      {
        slug: 'cool',
        title: 'Cool Images & Photos',
        index: 2,
        type: 'landing_page',
      },
    ],
    urls: {
      raw: 'https://images.unsplash.com/photo-1496205856088-91b021308c54?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1496205856088-91b021308c54?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1496205856088-91b021308c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1496205856088-91b021308c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1496205856088-91b021308c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1496205856088-91b021308c54',
    },
    links: {
      self: 'https://api.unsplash.com/photos/time-lapse-photography-of-person-doing-circle-rainbow-light-9Eheu3sIgrM',
      html: 'https://unsplash.com/photos/time-lapse-photography-of-person-doing-circle-rainbow-light-9Eheu3sIgrM',
      download:
        'https://unsplash.com/photos/9Eheu3sIgrM/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/9Eheu3sIgrM/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw2fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 1223,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'a6RHorWL5ho',
      updated_at: '2024-06-10T19:34:13Z',
      username: 'lastly',
      name: 'Tyler Lastovich',
      first_name: 'Tyler',
      last_name: 'Lastovich',
      twitter_username: 'tylerlastovich',
      portfolio_url: 'http://lastovich.me',
      bio: 'There is always something new to build and somewhere new to explore.',
      location: 'USA',
      links: {
        self: 'https://api.unsplash.com/users/lastly',
        html: 'https://unsplash.com/@lastly',
        photos: 'https://api.unsplash.com/users/lastly/photos',
        likes: 'https://api.unsplash.com/users/lastly/likes',
        portfolio: 'https://api.unsplash.com/users/lastly/portfolio',
        following: 'https://api.unsplash.com/users/lastly/following',
        followers: 'https://api.unsplash.com/users/lastly/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1638556136300-c3f4eeafca51image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1638556136300-c3f4eeafca51image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1638556136300-c3f4eeafca51image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'lastlystudios',
      total_collections: 10,
      total_likes: 176,
      total_photos: 112,
      total_promoted_photos: 87,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'lastlystudios',
        portfolio_url: 'http://lastovich.me',
        twitter_username: 'tylerlastovich',
        paypal_email: null,
      },
    },
  },
  {
    id: 'FZWivbri0Xk',
    slug: 'photo-of-black-and-brown-cassette-tape-FZWivbri0Xk',
    alternative_slugs: {
      en: 'photo-of-black-and-brown-cassette-tape-FZWivbri0Xk',
      es: 'foto-de-cinta-de-casete-negra-y-marron-FZWivbri0Xk',
      ja: '黒と茶色のカセットテープの写真-FZWivbri0Xk',
      fr: 'photo-dune-cassette-noire-et-brune-FZWivbri0Xk',
      it: 'foto-di-cassetta-nera-e-marrone-FZWivbri0Xk',
      ko: '검은-색과-갈색-카세트-테이프-사진-FZWivbri0Xk',
      de: 'foto-einer-schwarzen-und-braunen-kassette-FZWivbri0Xk',
      pt: 'foto-de-fita-preta-e-marrom-FZWivbri0Xk',
    },
    created_at: '2017-05-08T08:35:17Z',
    updated_at: '2024-06-11T01:16:45Z',
    promoted_at: '2017-05-08T11:56:53Z',
    width: 3704,
    height: 2470,
    color: '#d9d9d9',
    blur_hash: 'LJPskp4n_4ofRhxuahWV?ct79Ejs',
    description: 'Retro style cassette',
    alt_description: 'photo of black and brown cassette tape',
    breadcrumbs: [
      {
        slug: 'images',
        title: '1,000,000+ Free Images',
        index: 0,
        type: 'landing_page',
      },
      {
        slug: 'stock',
        title: 'Stock Photos & Images',
        index: 1,
        type: 'landing_page',
      },
      {
        slug: 'cover',
        title: 'Cover Photos & Images',
        index: 2,
        type: 'landing_page',
      },
    ],
    urls: {
      raw: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494232410401-ad00d5433cfa',
    },
    links: {
      self: 'https://api.unsplash.com/photos/photo-of-black-and-brown-cassette-tape-FZWivbri0Xk',
      html: 'https://unsplash.com/photos/photo-of-black-and-brown-cassette-tape-FZWivbri0Xk',
      download:
        'https://unsplash.com/photos/FZWivbri0Xk/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/FZWivbri0Xk/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw3fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 5462,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'QdnSVgfmmTU',
      updated_at: '2023-09-13T01:23:56Z',
      username: 'namroud',
      name: 'Namroud Gorguis',
      first_name: 'Namroud',
      last_name: 'Gorguis',
      twitter_username: 'namroud',
      portfolio_url: 'http://namroud.myportfolio.com',
      bio: 'Interactive Art Director and UX designer. Working globally. Formerly @Ogilvy, @LeoBurnett and @Halvarsson',
      location: 'stockholm',
      links: {
        self: 'https://api.unsplash.com/users/namroud',
        html: 'https://unsplash.com/@namroud',
        photos: 'https://api.unsplash.com/users/namroud/photos',
        likes: 'https://api.unsplash.com/users/namroud/likes',
        portfolio: 'https://api.unsplash.com/users/namroud/portfolio',
        following: 'https://api.unsplash.com/users/namroud/following',
        followers: 'https://api.unsplash.com/users/namroud/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1495448403596-8e2b19a581fc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1495448403596-8e2b19a581fc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1495448403596-8e2b19a581fc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'namroud',
      total_collections: 39,
      total_likes: 8,
      total_photos: 3,
      total_promoted_photos: 2,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: false,
      for_hire: false,
      social: {
        instagram_username: 'namroud',
        portfolio_url: 'http://namroud.myportfolio.com',
        twitter_username: 'namroud',
        paypal_email: null,
      },
    },
  },
  {
    id: 'D3ZdfBqA4nQ',
    slug: 'black-sony-game-console-D3ZdfBqA4nQ',
    alternative_slugs: {
      en: 'black-sony-game-console-D3ZdfBqA4nQ',
      es: 'consola-de-juegos-sony-negra-D3ZdfBqA4nQ',
      ja: '黒のソニーのゲーム機-D3ZdfBqA4nQ',
      fr: 'console-de-jeu-sony-noire-D3ZdfBqA4nQ',
      it: 'console-di-gioco-sony-nera-D3ZdfBqA4nQ',
      ko: '블랙-소니-게임-콘솔-D3ZdfBqA4nQ',
      de: 'schwarze-sony-spielekonsole-D3ZdfBqA4nQ',
      pt: 'consola-de-jogos-sony-preta-D3ZdfBqA4nQ',
    },
    created_at: '2018-05-16T22:30:06Z',
    updated_at: '2024-04-01T19:10:41Z',
    promoted_at: null,
    width: 5184,
    height: 3456,
    color: '#262659',
    blur_hash: 'L~EVk39Wt7ohRiocohjvt8aiWAj=',
    description: 'Sony Playstation 2 Launch Edition Black Console',
    alt_description: 'black Sony game console',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1526509706191-c268f28e9ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1526509706191-c268f28e9ecb',
    },
    links: {
      self: 'https://api.unsplash.com/photos/black-sony-game-console-D3ZdfBqA4nQ',
      html: 'https://unsplash.com/photos/black-sony-game-console-D3ZdfBqA4nQ',
      download:
        'https://unsplash.com/photos/D3ZdfBqA4nQ/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/D3ZdfBqA4nQ/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw4fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 138,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'gFsqrfwPo5Q',
      updated_at: '2024-06-05T10:42:39Z',
      username: 'chilinik',
      name: 'Nikita Kostrykin',
      first_name: 'Nikita',
      last_name: 'Kostrykin',
      twitter_username: 'chilinik',
      portfolio_url: null,
      bio: "Hi guys, I'm happy to share my images with you all! Please credit me when you use the images, this will really make me feel happy! Thank you and may the force be with you 😄",
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/chilinik',
        html: 'https://unsplash.com/@chilinik',
        photos: 'https://api.unsplash.com/users/chilinik/photos',
        likes: 'https://api.unsplash.com/users/chilinik/likes',
        portfolio: 'https://api.unsplash.com/users/chilinik/portfolio',
        following: 'https://api.unsplash.com/users/chilinik/following',
        followers: 'https://api.unsplash.com/users/chilinik/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1693061210282-ad918bc2560aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1693061210282-ad918bc2560aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1693061210282-ad918bc2560aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'chilinik',
      total_collections: 0,
      total_likes: 4,
      total_photos: 18,
      total_promoted_photos: 1,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'chilinik',
        portfolio_url: null,
        twitter_username: 'chilinik',
        paypal_email: null,
      },
    },
  },
  {
    id: 'Gf47cZJxrSw',
    slug: 'assorted-coloring-papers-Gf47cZJxrSw',
    alternative_slugs: {
      en: 'assorted-coloring-papers-Gf47cZJxrSw',
      es: 'papeles-para-colorear-surtidos-Gf47cZJxrSw',
      ja: '各種ぬりえペーパー-Gf47cZJxrSw',
      fr: 'papiers-a-colorier-assortis-Gf47cZJxrSw',
      it: 'carte-da-colorare-assortite-Gf47cZJxrSw',
      ko: '모듬-색칠-종이-Gf47cZJxrSw',
      de: 'verschiedene-malpapiere-Gf47cZJxrSw',
      pt: 'papeis-para-colorir-variados-Gf47cZJxrSw',
    },
    created_at: '2018-11-19T22:31:26Z',
    updated_at: '2024-06-08T01:22:00Z',
    promoted_at: null,
    width: 5688,
    height: 3892,
    color: '#f326f3',
    blur_hash: 'LVL_k_31RUtgKtV[,vo;#8R$$lw]',
    description: 'Think colorful',
    alt_description: 'assorted coloring papers',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1542666594-15c7b33d17ac?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1542666594-15c7b33d17ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1542666594-15c7b33d17ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1542666594-15c7b33d17ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1542666594-15c7b33d17ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1542666594-15c7b33d17ac',
    },
    links: {
      self: 'https://api.unsplash.com/photos/assorted-coloring-papers-Gf47cZJxrSw',
      html: 'https://unsplash.com/photos/assorted-coloring-papers-Gf47cZJxrSw',
      download:
        'https://unsplash.com/photos/Gf47cZJxrSw/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
      download_location:
        'https://api.unsplash.com/photos/Gf47cZJxrSw/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnw5fDE1Nzg1MDh8fHx8fDJ8fDE3MTgxMzkwOTJ8',
    },
    likes: 106,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: 'Itb-4GCuUDU',
      updated_at: '2024-06-11T19:56:26Z',
      username: 'cbarbalis',
      name: 'Chris Barbalis',
      first_name: 'Chris',
      last_name: 'Barbalis',
      twitter_username: 'ChrisBarbalis',
      portfolio_url: null,
      bio: 'Support the Photographers work!',
      location: 'Italy/Greece',
      links: {
        self: 'https://api.unsplash.com/users/cbarbalis',
        html: 'https://unsplash.com/@cbarbalis',
        photos: 'https://api.unsplash.com/users/cbarbalis/photos',
        likes: 'https://api.unsplash.com/users/cbarbalis/likes',
        portfolio: 'https://api.unsplash.com/users/cbarbalis/portfolio',
        following: 'https://api.unsplash.com/users/cbarbalis/following',
        followers: 'https://api.unsplash.com/users/cbarbalis/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1460461456342-a21eb34982a0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1460461456342-a21eb34982a0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1460461456342-a21eb34982a0?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'ChrisBarbalis',
      total_collections: 21,
      total_likes: 9916,
      total_photos: 1551,
      total_promoted_photos: 180,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'ChrisBarbalis',
        portfolio_url: null,
        twitter_username: 'ChrisBarbalis',
        paypal_email: null,
      },
    },
  },
  {
    id: 'rgkKFn5Ysb0',
    slug: 'grayscale-photography-of-man-in-striped-shirt-rgkKFn5Ysb0',
    alternative_slugs: {
      en: 'grayscale-photography-of-man-in-striped-shirt-rgkKFn5Ysb0',
      es: 'fotografia-en-escala-de-grises-de-un-hombre-con-camisa-a-rayas-rgkKFn5Ysb0',
      ja: '縞模様のシャツを着た男のグレースケール写真-rgkKFn5Ysb0',
      fr: 'photographie-en-niveaux-de-gris-dun-homme-en-chemise-rayee-rgkKFn5Ysb0',
      it: 'fotografia-in-scala-di-grigi-di-uomo-in-camicia-a-righe-rgkKFn5Ysb0',
      ko: '줄무늬-셔츠를-입은-남자의-그레이스케일-사진-rgkKFn5Ysb0',
      de: 'graustufenfotografie-eines-mannes-im-gestreiften-hemd-rgkKFn5Ysb0',
      pt: 'fotografia-em-tons-de-cinza-do-homem-na-camisa-listrada-rgkKFn5Ysb0',
    },
    created_at: '2018-06-01T11:26:48Z',
    updated_at: '2024-04-03T16:51:15Z',
    promoted_at: '2018-06-02T05:45:23Z',
    width: 3000,
    height: 2500,
    color: '#262626',
    blur_hash: 'LAD0Jx4n9Ft7-;9Fxu%M00IUt7t8',
    description: 'guitar player on stage- gear',
    alt_description: 'grayscale photography of man in striped shirt',
    breadcrumbs: [],
    urls: {
      raw: 'https://images.unsplash.com/photo-1527852366497-5206c7052474?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1527852366497-5206c7052474?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA&ixlib=rb-4.0.3&q=85',
      regular:
        'https://images.unsplash.com/photo-1527852366497-5206c7052474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1527852366497-5206c7052474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA&ixlib=rb-4.0.3&q=80&w=400',
      thumb:
        'https://images.unsplash.com/photo-1527852366497-5206c7052474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA&ixlib=rb-4.0.3&q=80&w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1527852366497-5206c7052474',
    },
    links: {
      self: 'https://api.unsplash.com/photos/grayscale-photography-of-man-in-striped-shirt-rgkKFn5Ysb0',
      html: 'https://unsplash.com/photos/grayscale-photography-of-man-in-striped-shirt-rgkKFn5Ysb0',
      download:
        'https://unsplash.com/photos/rgkKFn5Ysb0/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA',
      download_location:
        'https://api.unsplash.com/photos/rgkKFn5Ysb0/download?ixid=M3wxOTM5NHwwfDF8Y29sbGVjdGlvbnwxMHwxNTc4NTA4fHx8fHwyfHwxNzE4MTM5MDkyfA',
    },
    likes: 51,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    asset_type: 'photo',
    user: {
      id: '8Mn9BiwEMUQ',
      updated_at: '2024-05-27T12:13:38Z',
      username: 'adigold1',
      name: 'Adi Goldstein',
      first_name: 'Adi',
      last_name: 'Goldstein',
      twitter_username: 'adigold1',
      portfolio_url: 'http://instagram.com/adigold1',
      bio: 'Adi Goldstein\r\n🎼Composer• Entrepreneur•Photographer-Leica M7,8,10,Q/Sony a7Rii/Hasselblad503/RicohGRii/Mamiya7ii',
      location: 'Tel-Aviv, Israel',
      links: {
        self: 'https://api.unsplash.com/users/adigold1',
        html: 'https://unsplash.com/@adigold1',
        photos: 'https://api.unsplash.com/users/adigold1/photos',
        likes: 'https://api.unsplash.com/users/adigold1/likes',
        portfolio: 'https://api.unsplash.com/users/adigold1/portfolio',
        following: 'https://api.unsplash.com/users/adigold1/following',
        followers: 'https://api.unsplash.com/users/adigold1/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1599637298437-076e53146706image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium:
          'https://images.unsplash.com/profile-1599637298437-076e53146706image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large:
          'https://images.unsplash.com/profile-1599637298437-076e53146706image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
      },
      instagram_username: 'adigold1',
      total_collections: 1,
      total_likes: 16,
      total_photos: 194,
      total_promoted_photos: 31,
      total_illustrations: 0,
      total_promoted_illustrations: 0,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'adigold1',
        portfolio_url: 'http://instagram.com/adigold1',
        twitter_username: 'adigold1',
        paypal_email: null,
      },
    },
  },
];

jest.mock('axios', () => {
  return {
    get: jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: mockData,
      });
    }),
  };
});

describe('sourceNodes', () => {
  it('calls axios get for each collection passed as an argument', async () => {
    await lib.sourceNodes(
      { actions: { createNode: jest.fn() } },
      { clientId: 'something', collections: ['99999', '33333'], perPage: 10 }
    );
    expect(axios.get).toBeCalledTimes(2);
  });

  it('calls createNode for every photo returned', async () => {
    const createNode = jest.fn();
    await lib.sourceNodes(
      { actions: { createNode } },
      { clientId: 'something', collections: ['99999'], perPage: 10 }
    );

    expect(createNode).toBeCalledTimes(10);
  });
});
