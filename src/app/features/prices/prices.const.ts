import { PlanInfo } from './prices.type';

export const PLAN_INFO: PlanInfo[] = [
  {
    category: 'Vestuviu fotografavimas',
    serviceInfo: [
      {
        photographyValue: {
          time: 'FOTOGRAFAVIMAS IKI 5 val.',
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
      },
    ],
    extraServices: [
      'Papildoma fotografavimo valanda 150€',
      'Poros fotosesija (priešvestuvinė) -20€ nuolaida',
    ],
  },
];
