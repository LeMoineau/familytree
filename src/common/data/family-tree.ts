import { FamilyTree } from "../interfaces/family-tree";
import { persons } from "./persons";

export const familyTree: FamilyTree = [
  {
    person: persons.helene,
    consorts: [
      {
        person: persons.maurice,
        children: [
          {
            person: persons.marc,
            consorts: [
              {
                person: persons.veronique,
                actualConsort: true,
                children: [
                  {
                    person: persons.alex,
                  },
                  {
                    person: persons.arianne,
                  },
                ],
              },
              {
                person: persons.agathe,
              },
            ],
          },
          {
            person: persons.isabelle,
          },
          {
            person: persons.jacques,
            consorts: [
              {
                person: persons.christine,
                actualConsort: true,
                children: [
                  {
                    person: persons.ariane,
                    consorts: [
                      {
                        person: persons.ludo,
                        children: [
                          {
                            person: persons.eloise,
                          },
                          {
                            person: persons.marie,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    person: persons.amelie,
                    consorts: [
                      {
                        person: persons.raph,
                      },
                    ],
                  },
                  {
                    person: persons.antoine,
                    consorts: [
                      {
                        person: persons.genevieve,
                      },
                    ],
                  },
                ],
              },
              {
                person: persons.sylvie,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    person: persons.marcel,
    consorts: [
      {
        person: persons.marcelle,
        children: [
          {
            person: persons.francois,
            consorts: [
              {
                person: persons.mariesybille,
                children: [
                  {
                    person: persons.etienne,
                  },
                  {
                    person: persons.remi,
                    consorts: [
                      {
                        person: persons.stephanie,
                      },
                    ],
                  },
                  {
                    person: persons.olivier,
                    consorts: [
                      {
                        person: persons.erika,
                        children: [
                          {
                            person: persons.clara,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    person: persons.clemence,
                    consorts: [
                      {
                        person: persons.sebastien,
                        children: [
                          {
                            person: persons.jeanne,
                          },
                          {
                            person: persons.mathilde,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            person: persons.jacques2,
            consorts: [
              {
                person: persons.nada,
                children: [
                  {
                    person: persons.marie2,
                  },
                  {
                    person: persons.may,
                  },
                  {
                    person: persons.joe,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    person: persons.henri,
    consorts: [
      {
        person: persons.unknown,
        children: [
          {
            person: persons.monique,
            consorts: [
              {
                person: persons.marcel2,
                children: [
                  {
                    person: persons.cyrille,
                    consorts: [
                      {
                        person: persons.asmahan,
                        children: [
                          {
                            person: persons.adrien,
                          },
                          {
                            person: persons.christian,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    person: persons.eric,
                  },
                ],
              },
            ],
          },
          {
            person: persons.bernard,
            consorts: [
              {
                person: persons.marie3,
                children: [
                  {
                    person: persons.stephanie2,
                    consorts: [
                      {
                        person: persons.jeanmarc,
                      },
                    ],
                  },
                  {
                    person: persons.marc2,
                  },
                  {
                    person: persons.bruno,
                  },
                ],
              },
            ],
          },
          {
            person: persons.patrick,
            consorts: [
              {
                person: persons.priscilla,
                children: [
                  {
                    person: persons.thierry,
                    consorts: [
                      {
                        person: persons.marion,
                      },
                    ],
                  },
                  {
                    person: persons.philippe,
                    consorts: [
                      {
                        person: persons.annesophie,
                        children: [
                          {
                            person: persons.gabriel,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            person: persons.nadine,
            consorts: [
              {
                person: persons.gregory,
                children: [
                  {
                    person: persons.paul,
                    consorts: [
                      {
                        person: persons.ana,
                        children: [
                          {
                            person: persons.paloma,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    person: persons.christian2,
                  },
                  {
                    person: persons.nicolas,
                    consorts: [
                      {
                        person: persons.samara,
                      },
                    ],
                  },
                  {
                    person: persons.brendan,
                  },
                ],
              },
            ],
          },
          {
            person: persons.christine2,
            consorts: [
              {
                person: persons.jad,
                children: [
                  {
                    person: persons.chloe,
                  },
                  {
                    person: persons.matthieu,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
