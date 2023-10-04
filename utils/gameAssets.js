import personnage1 from "@/public/jeu/personnages/01.webp";
import personnage2 from "@/public/jeu/personnages/02.webp";
import personnage3 from "@/public/jeu/personnages/03.webp";
import personnage4 from "@/public/jeu/personnages/04.webp";
import personnage5 from "@/public/jeu/personnages/05.webp";
import personnage6 from "@/public/jeu/personnages/06.webp";
import personnage7 from "@/public/jeu/personnages/07.webp";
import personnage8 from "@/public/jeu/personnages/08.webp";
import personnage9 from "@/public/jeu/personnages/09.webp";
import personnage10 from "@/public/jeu/personnages/10.webp";

import feuille1 from "@/public/jeu/feuilles/01.webp";
import feuille1b from "@/public/jeu/feuilles/01.jpeg";
import feuille2 from "@/public/jeu/feuilles/02.webp";
import feuille2b from "@/public/jeu/feuilles/02.jpeg";
import feuille3 from "@/public/jeu/feuilles/03.webp";
import feuille3b from "@/public/jeu/feuilles/03.jpeg";
import feuille4 from "@/public/jeu/feuilles/04.webp";
import feuille4b from "@/public/jeu/feuilles/04.jpeg";
import feuille5 from "@/public/jeu/feuilles/05.webp";
import feuille6 from "@/public/jeu/feuilles/06.webp";
import feuille7 from "@/public/jeu/feuilles/07.webp";
import feuille8 from "@/public/jeu/feuilles/08.webp";
import feuille8b from "@/public/jeu/feuilles/08.jpeg";
import feuille9 from "@/public/jeu/feuilles/09.webp";
import feuille10 from "@/public/jeu/feuilles/10.webp";

export const personnagesArray = [
  {
    id: 1,
    type: "Tobie",
    imageSrc: personnage1.src,
    description:
      "Tobie, c'est un brin d'aventure enroulé dans un sourire. Petit par la taille mais immense par le cœur, il danse d'une branche à l'autre comme si le monde était sa balançoire. Courageux et ingénieux, il est le héro qui écoute l'arbre et ses amis.",
  },
  {
    id: 2,
    type: "Sam",
    imageSrc: personnage2.src,
    description:
      "Le savant qui a percé le secret de l'arbre, Sam est une bibliothèque vivante avec des lunettes. Il est le père qui enseigne que chaque feuille est une leçon.",
  },
  {
    id: 3,
    type: "Maia",
    imageSrc: personnage3.src,
    description:
      "La mère tendre comme la brise printanière, Maia Lolness est le doux foyer que l'on retrouve après chaque aventure. Elle est la mélodie du nid familial.",
  },
  {
    id: 4,
    type: "Elisha",
    imageSrc: personnage4.src,
    description:
      "La douce étoile qui éclaire les nuits, Elisha est sage comme une vieille chouette mais aussi espiègle qu'un écureuil. Elle est l'amie qui comprend sans parler.",
  },
  {
    id: 5,
    type: "Mère de Elisha",
    imageSrc: personnage5.src,
    description:
      "Présence discrète mais indéniable, elle est la racine qui ancre Elisha dans le monde et la source de sa force intérieure.",
  },
  {
    id: 6,
    type: "Grande-Mère",
    imageSrc: personnage6.src,
    description:
      "Une femme aux années nombreuses mais aux yeux toujours pétillants, elle incarne la mémoire de la famille.",
  },
  {
    id: 7,
    type: "Jo Mitch",
    imageSrc: personnage7.src,
    description:
      "L'ombre qui plane sur l'arbre, Jo Mitch est la tempête qui menace de déraciner la vie. Il est l'énigme avec des intentions sombres, le cauchemar qui réveille l'arbre en sursaut.",
  },
  {
    id: 8,
    type: "Tuteur de Léo",
    imageSrc: personnage8.src,
    description: `Nom du personnage: [À compléter]/
    Description de base:
    Nature de la relation avec Tobie: [Ami, mentor, etc.]/
    Caractéristiques principales: [Courageux, loyal, mystérieux, etc.]/
    Actions marquantes: [A aidé Tobie de quelle manière, interactions significatives, etc.]/
    Description créative:
    [Insérer ici une description poétique et créative du personnage, en respectant les points de la description de base. Par exemple, si le personnage est un ami loyal de Tobie, vous pourriez dire "Un pilier dans la tempête, [Nom] est la main tendue dans l'obscurité, toujours là pour aider Tobie à retrouver son chemin."]`,
  },
  {
    id: 9,
    type: "nine",
    imageSrc: personnage9.src,
    description: `Nom du personnage: [À compléter]/
    Description de base:
    Nature de la relation avec Tobie: [Ami, mentor, etc.]/
    Caractéristiques principales: [Courageux, loyal, mystérieux, etc.]/
    Actions marquantes: [A aidé Tobie de quelle manière, interactions significatives, etc.]/
    Description créative:
    [Insérer ici une description poétique et créative du personnage, en respectant les points de la description de base. Par exemple, si le personnage est un ami loyal de Tobie, vous pourriez dire "Un pilier dans la tempête, [Nom] est la main tendue dans l'obscurité, toujours là pour aider Tobie à retrouver son chemin."]`,
  },
  {
    id: 10,
    type: "ten",
    imageSrc: personnage10.src,
    description: `Nom du personnage: [À compléter]/
    Description de base:
    Nature de la relation avec Tobie: [Ami, mentor, etc.]/
    Caractéristiques principales: [Courageux, loyal, mystérieux, etc.]/
    Actions marquantes: [A aidé Tobie de quelle manière, interactions significatives, etc.]/
    Description créative:
    [Insérer ici une description poétique et créative du personnage, en respectant les points de la description de base. Par exemple, si le personnage est un ami loyal de Tobie, vous pourriez dire "Un pilier dans la tempête, [Nom] est la main tendue dans l'obscurité, toujours là pour aider Tobie à retrouver son chemin."]`,
  },
];

export const feuillesArray = [
  {
    id: 1,
    type: "Chêne",
    imageSrc: feuille1.src,
    imageDetailSrc: feuille1b.src,
    description:
      "Le patriarche de la forêt, le chêne est une tour de sagesse et de résistance. Ses branches sont des arcs célestes qui saluent le ciel, et son tronc, un pilier de l'histoire gravée en anneaux de vie.",
  },
  {
    id: 2,
    type: "two",
    imageSrc: feuille2.src,
    imageDetailSrc: feuille2b.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 3,
    type: "three",
    imageSrc: feuille3.src,
    imageDetailSrc: feuille3b.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 4,
    type: "four",
    imageSrc: feuille4.src,
    imageDetailSrc: feuille4b.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 5,
    type: "five",
    imageSrc: feuille5.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 6,
    type: "six",
    imageSrc: feuille6.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 7,
    type: "seven",
    imageSrc: feuille7.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 8,
    type: "eight",
    imageSrc: feuille8.src,
    imageDetailSrc: feuille8b.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 9,
    type: "nine",
    imageSrc: feuille9.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
  {
    id: 10,
    type: "ten",
    imageSrc: feuille10.src,
    description: `Nom de la feuille ou de l'arbre: [À compléter]

    Description de base:
    
    Type: [Arbre, plante grimpante, fongus, etc.]
    Localisation habituelle: [Forêt, sous-bois, etc.]
    Caractéristiques visuelles: [Couleur, forme, taille, etc.]
    Description neutre:
    
    [Cette section est destinée à une description simple et neutre du type de feuille ou d'arbre, en se basant sur les points énumérés dans la description de base. Par exemple, si vous travaillez avec un arbre inconnu, vous pourriez dire : "Arbre de taille moyenne souvent trouvé en forêt, reconnaissable à ses feuilles vertes en forme de lance."]
    
    `,
  },
];
