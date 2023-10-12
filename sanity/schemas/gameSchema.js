const game = {
  name: "memoryGameSet",
  type: "document",
  title: "Jeu de Mémoire",
  fields: [
    {
      name: "gameSetName",
      type: "string",
      title: "Nom du Jeu",
    },
    {
      name: "cards",
      type: "array",
      title: "Cartes",
      description: "Ajoutez exactement 10 cartes pour compléter un jeu.",
      of: [{ type: "memoryCard" }],
      validation: (Rule) =>
        Rule.length(10).error("Un jeu doit avoir exactement 10 cartes."),
    },
  ],
};

export default game;
