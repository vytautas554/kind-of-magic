import { CardSectionData, ImageInfo } from './landing-page.type';

export const HeaderImgInfo: ImageInfo = {
  imageSrc: '../../assets/img/test-images/ggg-Edit.jpg',
  showTitle: false,
  title: '',
  description:
    'Nuotykis, tai magija! Nutinka ji tada, kai padedame žemėlapį į šoną ir leidžiame sau truputį paklysti.',
  showCta: false,
};

export const AboutMeImgInfo: ImageInfo = {
  imageSrc: '../../assets/img/test-images/DSC_0183-Edit.jpg',
  showTitle: true,
  title: 'LABAS!\nMANO VARDAS ROMA!',
  description:
    'Mano širdis priklauso veiksmui, gyvumui, tikrumui ir žinoma nuoširdumui nuotraukose.\n Tvirtai tikiu - nėra nefotogeniškų žmonių. ♡',
  showCta: true,
};

export const CardSection: CardSectionData[] = [
  {
    imageSrc: '../../assets/img/test-images/DSC_0121.jpg',
    title: 'GALERIJA',
    description:
      'Mano sukurtos foto istorijos slypi štai čia! \n\nPer 6 aktyvaus fotografavimo metus istorijų skaičius jau siekia triženklę sumą. Labai norėčiau visas Jums parodyti, bet tikiu išvydę mano ilgą kūrybinį kelią labai pasimestumėt! Kelio būta labai įdomaus, kalnuoto ir su daug posūkių iki kol atradau tai, kas man labiausiai miela širdžiai. Tikrai nesakau, kad tai jau kelio pabaiga! Nuolat noriai mokausi naujų dalykų, domiuosi, tyrinėju naujus horizontus! O čia rasite naujausias istorijas.',
    ctaLabel: 'Daugiau',
    routePath: 'galerija',
  },
  {
    imageSrc: '../../assets/img/test-images/Justina ir Vaidas.1052-Edit.jpg',
    title: 'DUK',
    description:
      'Kaip apsirengti fotosesijai? \nKur fotografuotis? \nNemokame pozuoti. Ką daryti? \n\nTai ko gero patys dažniausi klausimai, kuriuos tenka išgirsti iš Jūsų. Nusprendžiau sudėti visus atsakymus į populiariausius klausimus vienoje vietoje, kad visada patogiai rastumėte. \n\nJeigu atsakymo čia nerasite - lauksiu Jūsų laiško.',
    ctaLabel: 'Daugiau',
    routePath: 'duk',
  },
  {
    imageSrc: '',
    title: 'JŪSŲ DŽIAUGSMO LAIŠKAI',
    description:
      'Jeigu nuoširdžiai Tau pavyko – mintimis tikrai teleportavomės į tą nepamirštamą, magišką dieną. Jau kai darbe pateasinau save su kadrais žinojau, kad bus visiškas džiaugsmas širdžiai peržiūrėt viską. Ir buvo. \n\nNiekada nesijaučiau tokia graži, kaip atrodau per Tavo objektyvą, Vaidas man gali paantrinti. Tu perteiki kiekvieną emociją, kiekvieną šypsniuką, ašarą į kampučius įtryškusią. Perteiki kiekvieną rūpestėlį, šokių judesį. Kai pasižiūri tokius gyvus kadrus, supranti, kad nereikia net ir videografo. Roma, džiaugiuosi, kad nebedarai kavos. Nesakau, kad ten buvo kažkas negerai, bet pasaulis būtų praradęs be proto talentingą fotografę, o mes būtumėm niekada neturėję tokių gražių vestuvinių akimirkų. \n\nAčiū, kad mūsų sužadėtuvėmis džiaugeisi kaip šeimos narė, o dabar savo kolkas laimingiausią gyvenimo dieną iki pat dienų pabaigos galėsim stebėti per Tavo nepaprastai šiltą ir tikrą objektyvą. Heres to many more bendrų proga, kurias, tikiuosi, pasirašysi įamžinti ♡',
    reviewPerson: '- Justina ir Vaidas',
    ctaLabel: 'Daugiau',
    routePath: 'laiskai',
  },
];
