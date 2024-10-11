import { PlanInfo } from './prices.type';

export const PLAN_INFO: PlanInfo[] = [
  {
    header: 'VESTUVIŲ FOTOGRAFAVIMAS',
    serviceInfo: [
      {
        photographyValue: {
          time: 'FOTOGRAFAVIMAS 5 val.',
          price: '750€',
        },
        includedServices: [
          'Fotografė + asistentas',
          'Nemažiau 175 redaguotų skaitmeninių nuotr.',
          'Retušavimas iki 4 mėn.',
          'Pagalba dienos plano sudaryme nuo fotografavimo pradžios iki vakarinės dalies starto.',
          'Į kainą įskaičiuotos kuro išlaidos (neįskaičiuotas parkingas, keltai, įėjimai į sodus ar kt. lankyt. vietas)',
          'Data rezervuojama pasirašius sutartį ir sumokėjus 5-10% avansą.',
        ],
        extraServices: [
          'Papildoma fotografavimo valanda 150€',
          'Poros fotosesija (priešvestuvinė) -20€ nuolaida',
        ],
      },
      {
        photographyValue: {
          time: 'FOTOGRAFAVIMAS IKI 7 val.',
          price: '1000€',
        },
        includedServices: [
          'Fotografė + asistentas',
          'Nemažiau 280 redaguotų skaitmeninių nuotr.',
          'Retušavimas iki 4 mėn.',
          'Pagalba dienos plano sudaryme nuo fotografavimo pradžios iki vakarinės dalies starto.',
          'Į kainą įskaičiuotos kuro išlaidos (neįskaičiuotas parkingas, keltai, įėjimai į sodus ar kt. lankyt. vietas)',
          'Data rezervuojama pasirašius sutartį ir sumokėjus 5-10% avansą.',
        ],
        extraServices: [
          'Papildoma fotografavimo valanda 100€',
          'Poros fotosesija (priešvestuvinė) -30€ nuolaida',
        ],
      },
      {
        photographyValue: {
          time: 'FOTOGRAFAVIMAS IKI 10 val.',
          price: '1300€',
        },
        includedServices: [
          'Fotografė + asistentas',
          'Nemažiau 400 redaguotų skaitmeninių nuotr.',
          'Retušavimas iki 4 mėn.',
          'Pagalba dienos plano sudaryme nuo fotografavimo pradžios iki vakarinės dalies starto.',
          'Į kainą įskaičiuotos kuro išlaidos (neįskaičiuotas parkingas, keltai, įėjimai į sodus ar kt. lankyt. vietas)',
          'Data rezervuojama pasirašius sutartį ir sumokėjus 5-10% avansą.',
        ],
        extraServices: [
          'Papildoma fotografavimo valanda 100€',
          'Poros fotosesija (priešvestuvinė) -40€ nuolaida',
        ],
      },
    ],
    specialOffer: {
      header: 'SPECIALUS PASIŪLYMAS',
      offer:
        'Planuojate vestuves už Lietuvos ribų? Pasidalinkite savo planais ir gaukite ypatingą pasiūlymą. Jūsų šventė niekaip netils į klasikinius standartų rėmus? Papasakokite laiške apie savo unikalią viziją daugiau!',
    },
  },
  // {
  //   header: 'FOTOSESIJA',
  //   subHeader: 'KRIKŠTO',
  //   serviceInfo: [
  //     {
  //       photographyValue: {
  //         time: 'FOTOGRAFAVIMAS IKI 1 val.',
  //         price: '150€',
  //       },
  //       includedServices: [
  //         'Minimalus fotografavimo laikas 1 valanda.',
  //         'Gražiausius kadrus atsirenkate patys iš paruoštos online galerijos.',
  //         'Patarimai dėliojant kriškšto dienos planą.',
  //         'Į kainą neįskaičiuotos kuro išlaidos ir įėjimai į muziejus, sodus ar kt. lankytinas vietas.',
  //         'Fotografuojant Kauno mieste kuro mok. netaikomas.',
  //       ],
  //       extraServices: [
  //         'Papildoma fotografavimo valanda 130€',
  //         'Retušavimas iki 3 mėn.',
  //       ],
  //     },
  //   ],
  // },
  {
    header: 'FOTOSESIJOS',
    subHeader: 'KITOS',
    serviceInfo: [
      {
        photographyValue: {
          time: 'FOTOGRAFAVIMAS IKI 1 val.',
          price: '150€',
        },
        includedServices: [
          'Minimalus fotografavimo laikas 1 valanda.',
          'Gražiausius kadrus atsirenkate patys iš paruoštos online galerijos.',
          'Patarimai renkantis aprangą fotosesijai.',
          'Į kainą neįskaičiuotos kuro išlaidos ir įėjimai į muziejus, sodus ar kt. lankytinas vietas.',
          'Fotografuojant Kauno mieste kuro mok. netaikomas.',
        ],
        extraServices: [
          'Papildoma fotografavimo valanda 130€',
          'Retušavimas iki 2 mėn.',
        ],
      },
    ],
    specialOffer: {
      header: 'SPECIALUS PASIŪLYMAS',
      offer:
        'Turite itin smagią fotosesijos idėją, kurios metu nuo juoko net skruostus skaudės? Papasakokite laiške apie savo unikalią viziją daugiau ir gaukite specialų pasiūlymą pritaikytą tik Jums!',
    },
  },
];
