const publications = [
  {
    authors:
      'Bonnick, Patrick; Redko, Mikhail; <strong>Wang, Chuhong (co-first authors)</strong> et al',
    title:
      "An Exploration of the Role of Charge-Transfer Complexes in Polymer Electrolytes",
    journal: "ACS Energy Letters",
    year: 2023,
    doi: "https://doi.org/10.1021/acsenergylett.3c01579",
  },
  {
    authors:
      'Jaydeep Thik, Siwen Wang, <strong>Chuhong Wang</strong>, et al.',
    title:
      "Realizing the cooking recipe of materials synthesis through large language models",
    journal: "J. Mater. Chem. A",
    year: 2023,
    doi: "https://doi.org/10.1039/D3TA05457H",
  },
  {
    authors:
      "<strong>Wang, Chuhong</strong>, Muratahan Aykol and Tim Mueller",
    title:
      "Nature of the amorphous-amorphous interfaces in solid-state batteries revealed using machine-learned interatomic potentials",
    journal: "Chemistry of Materials",
    year: 2023,
    doi: "https://doi.org/10.1021/acs.chemmater.3c00993",
  },
  {
    authors:
      'Taein Lee, Yue Luo, <strong>Chuhong Wang</strong>, et al.',
    title:
      "Effect of organic electroactive crystallites in a dielectric matrix on the electrical properties of a polymer dielectric",
    journal: "Physical Review Materials",
    year: 2023,
    doi: "https://doi.org/10.1103/PhysRevMaterials.7.065003",
  },
  {
    authors:
      "<strong>Wang, Chuhong</strong>, Tim Mueller, and Rajeev S. Assary",
    title:
      "Ionic dynamics of Charge carrier in Layered solid materials for Mg Rechargeable batteries",
    journal: "Chemistry of Materials",
    year: 2022,
    doi: "https://doi.org/10.1021/acs.chemmater.2c01954",
  },
  {
    authors:
      'Adam B Peters, <strong>Chuhong Wang</strong>, Dajie Zhang, Alberto Hernandez, Dennis C Nagle, Tim Mueller, James B Spicer',
    title:
      "Reactive Laser Synthesis of Ultra-high-temperature Ceramics HfC, ZrC, TiC, HfN, ZrN, and TiN for Additive Manufacturing",
    journal: "Ceramics International",
    year: 2023,
    doi: "https://doi.org/10.1016/j.ceramint.2022.11.319",
  },
  {
    authors:
      'Adam B Peters, Dajie Zhang, Alberto Hernandez, <strong>Chuhong Wang</strong>, Dennis C Nagle, Tim Mueller, James B Spicer',
    title:
      "Selective Laser Reaction Synthesis of SiC, SiN and HfC/SiC Composites for Additive Manufacturing",
    journal: "Journal of the European Ceramic Society",
    year: 2023,
    doi: "https://doi.org/10.1016/j.jeurceramsoc.2022.11.015",
  },
  {
    authors:
      "<strong>Wang, Chuhong</strong>, Koutarou Aoyagi, Pandu Wisesa, and Tim Mueller",
    title:
      "Computational design of double-layer cathode coatings in all-solid-state batteries",
    journal: "J. Mater. Chem. A",
    year: 2021,
    doi: "https://doi.org/10.1039/D1TA04987A",
  },
  {
    authors:
      "<strong>Wang, Chuhong</strong>, Koutarou Aoyagi, Pandu Wisesa, and Tim Mueller",
    title:
      "Lithium Ion Conduction in Cathode Coating Materials from On-the-Fly Machine Learning",
    journal: "Chemistry of Materials",
    year: 2020,
    doi: "https://doi.org/10.1021/acs.chemmater.9b04663",
  },
  {
    authors:
      "<strong>Wang, Chuhong</strong>, Koutarou Aoyagi, Muratahan Aykol and Tim Mueller",
    title:
      "Ionic Conduction through Reaction Products at the Electrolyte–Electrode Interface in All-Solid-State Li+ Batteries",
    journal: "ACS Applied Materials & Interfaces",
    year: 2020,
    doi: "https://doi.org/10.1021/acsami.0c17285",
  },
  {
    authors:
      'Aoyagi, Koutarou; <strong>Wang, Chuhong</strong>; Matsuyama, Takuya; Mueller, Tim; Yoshida, Jun',
    title:
      "Computational Design of Cathode Coating Materials for All-Solid-State Lithium-Ion Batteries",
    journal: "SAE Technical Paper",
    year: 2021,
    doi: "https://doi.org/10.4271/2021-01-0758",
  },
  {
    authors:
      'Mueller, Tim, Alberto Hernandez, and <strong>Chuhong Wang</strong>',
    title: "Machine learning for interatomic potential models",
    journal: "The Journal of Chemical Physics",
    year: 2020,
    doi: "https://doi.org/10.1063/1.5126336",
  },
  {
    authors:
      'Sun, Du, Yunfei Wang, Kenneth JT Livi, <strong>Chuhong Wang</strong> et al.',
    title:
      "Ordered Intermetallic Pd3Bi Prepared by an Electrochemically Induced Phase Transformation for Oxygen Reduction Electrocatalysis",
    journal: "ACS Nano",
    year: 2019,
    doi: "https://doi.org/10.1021/acsnano.9b06019",
  },
  {
    authors:
      'Wisesa Pandu, Chenyang Li, <strong>Chuhong Wang</strong> and Tim Mueller',
    title:
      "Materials with the CrVO4 structure type as candidate superprotonic conductors",
    journal: "RSC Advances",
    year: 2019,
    doi: "https://doi.org/10.1039/C9RA06291B",
  },
];

export default function PublicationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight">Publications</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        Research papers on machine learning potentials, solid-state batteries,
        and materials design.
      </p>

      <hr />

      {publications.map((pub, i) => (
        <div key={pub.doi}>
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium leading-snug text-zinc-900 no-underline hover:underline dark:text-zinc-100"
          >
            {pub.title}
          </a>
          <p
            className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: pub.authors }}
          />
          <p className="mt-0.5 text-sm text-zinc-400 dark:text-zinc-500">
            <em>{pub.journal}</em> ({pub.year})
          </p>
          {i < publications.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
