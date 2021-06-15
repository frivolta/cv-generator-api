import { Education } from 'src/education/entities/education.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Skillset } from 'src/skillset/entities/skillset.entity';
import { WorkingExperience } from 'src/working-experience/entities/working-experience.entity';

const meProfile: Partial<Profile> = {
  name: 'Filippo Rivolta',
  workTitle: 'FRONT-END DEVELOPER, UI / UX DESIGNER',
  website: 'www.rivoltafilippo.com',
  phone: '+39 3347001377',
  email: 'rivoltafilippo@gmail.com',
  biography:
    "Sono un Front-end developer e Ui Designer molto motivato, creo applicazioni e siti web accessibili con un occhio di riguardo nei confronti dell'innovazione e dello stack tecnologico. Teamplayer, cerco di condividere nuove conoscenze e a collaborare con la mia squadra promuovendo una comunicazione chiara e attiva. Mi diverto ad esplorare nuove tendenze e a scrivere articoli entrando in contatto con le diverse realtá della web community.",
  bottomNotes: [
    'Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base all’art. 13 del D. Lgs. 196/2003 e all’art. 13 del Regolamento UE 2016/679 relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.',
    'Made with: NestJS - TS - PostgreSQL, TypeORM, React, check my github for this project.',
  ].toString(),
};

const meWorkingExperiences: Partial<WorkingExperience>[] = [
  {
    title: 'London Stock Exchange Group',
    position: 'Front-end, Software developer',
    description:
      'Continuo il lavoro come software developer iniziato presso Borsa Italiana entrando a far parte del gruppo LSEG',
    startDate: 'Feb 2021',
    endDate: 'Adesso',
    isActual: true,
  },
  {
    title: 'Borsa Italiana S.p.A',
    position: 'Front-end, Software developer',
    description:
      'Faccio parte del team internazionale di LSEG in qualità di Front-end developer, mi occupo di prendere parte al processo decisionale e realizzare applicazioni web (AGILE), con particolare interesse allo sviluppo tramite framework e librerie moderne (React, Express, Socket.io).',
    startDate: 'Set 2019',
    endDate: 'Feb 2021',
    isActual: false,
  },
  {
    title: 'Run Design Branding Agency',
    position: 'Ui / Ux Designer, Front-end developer',
    description:
      'Come Ui / Ux Designer e Front-End Developer mi occupo di capire i requisiti, gli obiettivi, i vincoli e interagire con i progetti in modo da realizzare siti e applicazioni in linea con il brand del cliente, prendendo parte al processo di design, prototipazione e sviluppo con tecnologie come PHP e JavaScript. ',
    startDate: 'Mag 2013',
    endDate: 'Ago 2019',
    isActual: false,
  },
  {
    title: 'Mediaset Premium',
    position: 'Ui / Ux Designer, Consulente RD',
    description:
      'In collaborazione con il team interno all’azienda, ho preso parte alla realizzazione dell’esperienza utente e allo sviluppo della User Interface del sito web di Mediaset Premium Wno al deploy della sua versione finale.',
    startDate: 'Mag 2015',
    endDate: 'Ago 2015',
    isActual: false,
  },
  {
    title: 'Gruppo Mediaset',
    position: 'Graphic Designer, Consulente RD',
    description:
      'In sede presso la DCCI (Direzione Creativa Coordinamento Immagine), ho preso parte alla realizzazione di campagne stampa e web dei brand Mediaset.',
    startDate: 'Mar 2014',
    endDate: 'Dic 2015',
    isActual: false,
  },
  {
    title: 'Freelance',
    position: 'Web Developer, Web Designer',
    description:
      'Mi sono occupato della creazione della Brand Identity ed Experience dei clienti, in particolare sviluppando soluzioni interamente personalizzate su CMS ;ordpress, Drupal, Magento.',
    startDate: 'Ago 2012',
    endDate: 'Mar 2013',
    isActual: false,
  },
  {
    title: 'Arden Luogo del Possibile',
    position: 'Insegnante di fotografia',
    startDate: 'Dic 2011',
    endDate: 'Mar 2012',
    isActual: false,
  },
];

const meEducation: Partial<Education>[] = [
  {
    startYear: '2016',
    title: 'Power Speech',
    institute: 'Fare Utili',
  },
  {
    startYear: '2017',
    title: 'Comunicazione efficace',
    institute: 'Fare Utili',
  },
  {
    startYear: '2018',
    title: 'Corso Cinema 4D',
    institute: 'Mohole',
  },
  {
    startYear: '2005',
    endYear: '2011',
    title: 'Liceo Scientifico Tecnologico',
    institute: 'Instituto E. Breda, Sesto San Giovanni',
  },
  {
    startYear: '2011',
    endYear: '2012',
    title: 'Graphic Design',
    institute: 'Bauer, Milano',
  },
  {
    startYear: '2012',
    endYear: '2013',
    title: 'Web Design',
    institute: 'Bauer, Milano',
  },
  {
    startYear: '2010',
    endYear: '2011',
    title: 'Marketing e Comuncazione',
    institute: 'Universitá di Milano Bicocca',
  },
];

const meSkills: Partial<Skillset>[] = [
  {
    title: 'Linguaggi',
    skills: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'HTML/CSS',
      'Python (learning)',
    ].toString(),
  },
  {
    title: 'Framework e librerie',
    skills: [
      'React JS',
      'React Native',
      'Redux',
      'Node.js',
      'Express',
      'Nest JS',
      'Next JS',
      'JQuery',
      'Flask (wannabe)',
    ].toString(),
  },
  {
    title: 'CMS',
    skills: ['Wordpress', 'Drupal'].toString(),
  },
  {
    title: 'Design',
    skills: [
      'Sketch',
      'Adobe XD',
      'Figma',
      'Suite Adobe (Illustrator - Photoshop - animate - AE - Indesign - Lightroom)',
    ].toString(),
  },
  {
    title: 'Marketing',
    skills: [
      'SEO',
      'SEM (AdWords - FB Ads)',
      'Social Media',
      'Google Analytics',
    ].toString(),
  },
  {
    title: 'Design',
    skills: [
      'Sketch',
      'Adobe XD',
      'Figma',
      'Suite Adobe (Illustrator - Photoshop - animate - AE - Indesign - Lightroom)',
    ].toString(),
  },
  {
    title: 'Lingue',
    skills: ['Italiano', 'Inglese'].toString(),
  },
  {
    title: 'Non tecniche',
    skills: ['Motivato', 'Sociale', 'Teamplayer'].toString(),
  },
];

export { meProfile, meSkills, meWorkingExperiences, meEducation };
