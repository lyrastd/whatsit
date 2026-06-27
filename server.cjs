var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);

// fallback_questions.ts
var FALLBACK_QUESTIONS = [
  // --- ASTRONOMIA ---
  {
    category: "astronomia",
    difficulty: "facil",
    item: "Lua",
    description: "O \xFAnico sat\xE9lite natural da Terra, conhecido por suas fases e por influenciar as mar\xE9s oce\xE2nicas.",
    searchQuery: "moon night space",
    alternatives: ["Lua", "Marte", "Europa", "Ganimedes", "Tit\xE3", "Fobos"]
  },
  {
    category: "astronomia",
    difficulty: "facil",
    item: "Sol",
    description: "A estrela central do nosso Sistema Solar, respons\xE1vel por fornecer luz e calor para sustentar a vida na Terra.",
    searchQuery: "sun space star",
    alternatives: ["Sol", "Sirius", "Betelgeuse", "Alfa Centauri", "Polaris", "Vega"]
  },
  {
    category: "astronomia",
    difficulty: "facil",
    item: "Planeta Saturno",
    description: "O segundo maior planeta do Sistema Solar, famoso por seu espetacular e brilhante sistema de an\xE9is de gelo e poeira.",
    searchQuery: "saturn planet",
    alternatives: ["Planeta Saturno", "J\xFApiter", "Urano", "Netuno", "Marte", "V\xEAnus"]
  },
  {
    category: "astronomia",
    difficulty: "medio",
    item: "Telesc\xF3pio Hubble",
    description: "Lan\xE7ado ao espa\xE7o em 1990, este grande observat\xF3rio \xF3ptico revolucionou a astronomia com fotos ultra n\xEDtidas do cosmos profundo.",
    searchQuery: "hubble space telescope",
    alternatives: ["Telesc\xF3pio Hubble", "James Webb", "Kepler", "Chandra", "Curiosity", "Voyager 1"]
  },
  {
    category: "astronomia",
    difficulty: "medio",
    item: "Buraco Negro",
    description: "Uma regi\xE3o do espa\xE7o-tempo com um campo gravitacional t\xE3o intenso que nada, nem mesmo a luz, consegue escapar de seu interior.",
    searchQuery: "black hole space",
    alternatives: ["Buraco Negro", "An\xE3 Branca", "Estrela de N\xEAutrons", "Supernova", "Nebulosa", "Quasar"]
  },
  {
    category: "astronomia",
    difficulty: "medio",
    item: "Esta\xE7\xE3o Espacial Internacional",
    description: "Um laborat\xF3rio orbital multinacional habit\xE1vel que viaja a 28.000 km/h, servindo como base cient\xEDfica no espa\xE7o.",
    searchQuery: "international space station iss",
    alternatives: ["Esta\xE7\xE3o Espacial Internacional", "Esta\xE7\xE3o Tiangong", "Mir", "Skylab", "Sputnik", "Hubble"]
  },
  {
    category: "astronomia",
    difficulty: "dificil",
    item: "Estrela de N\xEAutrons",
    description: "O remanescente extremamente denso e colapsado de uma estrela massiva, onde uma colher de ch\xE1 de mat\xE9ria pesaria bilh\xF5es de toneladas.",
    searchQuery: "neutron star nebula",
    alternatives: ["Estrela de N\xEAutrons", "An\xE3 Vermelha", "Gigante Azul", "P\xFAlsar", "Magnetar", "Buraco Vermelho"]
  },
  {
    category: "astronomia",
    difficulty: "dificil",
    item: "Nebulosa de \xD3rion",
    description: 'Uma das nebulosas mais brilhantes do c\xE9u noturno, localizada logo abaixo do "Cintur\xE3o de \xD3rion", sendo um ber\xE7\xE1rio ativo de estrelas.',
    searchQuery: "orion nebula space",
    alternatives: ["Nebulosa de \xD3rion", "Pilar da Cria\xE7\xE3o", "Nebulosa de Carina", "Nebulosa do Caranguejo", "Nebulosa de H\xE9lice", "Nebulosa de \xC1guia"]
  },
  {
    category: "astronomia",
    difficulty: "dificil",
    item: "P\xFAlsar",
    description: "Uma estrela de n\xEAutrons em r\xE1pida rota\xE7\xE3o que emite feixes de radia\xE7\xE3o eletromagn\xE9tica altamente regulares como se fosse um farol espacial.",
    searchQuery: "pulsar space beacon",
    alternatives: ["P\xFAlsar", "Magnetar", "Quasar", "Supernova tipo Ia", "An\xE3 Marrom", "Estrela de Wolf-Rayet"]
  },
  // --- ANIMAIS ---
  {
    category: "animais",
    difficulty: "facil",
    item: "Mico-le\xE3o-dourado",
    description: "Um pequeno primata end\xEAmico da Mata Atl\xE2ntica brasileira, s\xEDmbolo da conserva\xE7\xE3o da biodiversidade do pa\xEDs.",
    searchQuery: "golden lion tamarin monkey",
    alternatives: ["Mico-le\xE3o-dourado", "Chimpanz\xE9", "Mico-estrela", "Bugio", "Mico-preto", "Sagui"]
  },
  {
    category: "animais",
    difficulty: "facil",
    item: "Urso Polar",
    description: "O maior carn\xEDvoro terrestre do mundo, que possui pele preta e pelos transl\xFAcidos, perfeitamente adaptado \xE0s condi\xE7\xF5es do \xC1rtico.",
    searchQuery: "polar bear snow",
    alternatives: ["Urso Polar", "Urso Pardo", "Urso Panda", "Grizzly", "Lobo do \xC1rtico", "Le\xE3o Marinho"]
  },
  {
    category: "animais",
    difficulty: "facil",
    item: "Golfinho-rotador",
    description: "Mam\xEDfero marinho altamente social conhecido por seus saltos acrob\xE1ticos fora d'\xE1gua girando sobre o pr\xF3prio eixo.",
    searchQuery: "spinner dolphin ocean",
    alternatives: ["Golfinho-rotador", "Baleia Orca", "Tubar\xE3o-baleia", "Peixe-boi", "Arraia Manta", "Baleia Jubarte"]
  },
  {
    category: "animais",
    difficulty: "medio",
    item: "Ornitorrinco",
    description: "Um mam\xEDfero semi-aqu\xE1tico da Austr\xE1lia que bota ovos, tem bico de pato, cauda de castor e espor\xF5es venenosos nas patas traseiras.",
    searchQuery: "platypus",
    alternatives: ["Ornitorrinco", "Equidna", "Castor", "Lontra", "Coala", "Diabo da Tasm\xE2nia"]
  },
  {
    category: "animais",
    difficulty: "medio",
    item: "Drag\xE3o de Komodo",
    description: "A maior esp\xE9cie de lagarto viva na Terra, nativa de ilhas indon\xE9sias, conhecida por sua mordida infecciosa e h\xE1bitos de ca\xE7a carn\xEDvoros.",
    searchQuery: "komodo dragon lizard",
    alternatives: ["Drag\xE3o de Komodo", "Iguana Verde", "Jacar\xE9-do-papo-amarelo", "Camale\xE3o de Jackson", "Monstro de Gila", "Lagarto Monitor"]
  },
  {
    category: "animais",
    difficulty: "dificil",
    item: "Axolote",
    description: "Uma esp\xE9cie de salamandra mexicana que ret\xE9m suas caracter\xEDsticas larvais por toda a vida e tem uma capacidade incr\xEDvel de regenerar membros.",
    searchQuery: "axolotl salamander",
    alternatives: ["Axolote", "Salamandra de Fogo", "Trit\xE3o-cristado", "Perereca-de-vidro", "Sapo-cururu", "Cobra-cega"]
  },
  {
    category: "animais",
    difficulty: "dificil",
    item: "Polvo-m\xEDmico",
    description: "Criatura marinha fascinante capaz de imitar a forma, cor e comportamento de outras esp\xE9cies marinhas como cobras e peixes-le\xE3o para evitar predadores.",
    searchQuery: "mimic octopus under water",
    alternatives: ["Polvo-m\xEDmico", "Lula-gigante", "Nautilus", "S\xE9pia", "Polvo-de-an\xE9is-azuis", "Caravela-portuguesa"]
  },
  // --- TECNOLOGIA ---
  {
    category: "tecnologia",
    difficulty: "facil",
    item: "\xD3culos de Realidade Virtual",
    description: "Dispositivo que envolve a vis\xE3o do usu\xE1rio para simular um ambiente imersivo tridimensional em 360 graus.",
    searchQuery: "virtual reality headset vr",
    alternatives: ["\xD3culos de Realidade Virtual", "\xD3culos Inteligentes", "Smartwatch", "Projetor 3D", "Console Port\xE1til", "Holograma"]
  },
  {
    category: "tecnologia",
    difficulty: "facil",
    item: "Drone",
    description: "Ve\xEDculo a\xE9reo n\xE3o tripulado controlado remotamente, muito utilizado para fotografia a\xE9rea, entregas e filmagens cinematogr\xE1ficas.",
    searchQuery: "drone quadcopter sky",
    alternatives: ["Drone", "Helic\xF3ptero RC", "Bal\xE3o Meteorol\xF3gico", "Planador", "Sat\xE9lite Cubesat", "Aerogerador"]
  },
  {
    category: "tecnologia",
    difficulty: "medio",
    item: "Impressora 3D",
    description: "Equipamento de manufatura aditiva que constr\xF3i objetos f\xEDsicos camada por camada a partir de um modelo digital tridimensional.",
    searchQuery: "3d printer printing",
    alternatives: ["Impressora 3D", "Cortadora a Laser", "Torno CNC", "Plotter de Recorte", "Scanner 3D", "Injetora de Pl\xE1stico"]
  },
  {
    category: "tecnologia",
    difficulty: "medio",
    item: "Placa de Circuito Impresso",
    description: "Base de material isolante que suporta e conecta eletricamente componentes eletr\xF4nicos atrav\xE9s de trilhas de cobre.",
    searchQuery: "printed circuit board pcb electronics",
    alternatives: ["Placa de Circuito Impresso", "Processador CPU", "Placa de V\xEDdeo GPU", "Resistor de Carbono", "Protoboard", "Microcontrolador"]
  },
  {
    category: "tecnologia",
    difficulty: "dificil",
    item: "Computador Qu\xE2ntico",
    description: "M\xE1quina de computa\xE7\xE3o avan\xE7ada que processa informa\xE7\xF5es usando qubits, baseando-se nas leis da mec\xE2nica qu\xE2ntica de superposi\xE7\xE3o e emaranhamento.",
    searchQuery: "quantum computer rig server room",
    alternatives: ["Computador Qu\xE2ntico", "Supercomputador", "Servidor de Nuvem", "Cluster de GPUs", "C\xE9rebro Eletr\xF4nico", " mainframe \xF3ptico"]
  },
  // --- CONSTRUCOES ---
  {
    category: "construcoes",
    difficulty: "facil",
    item: "Torre Eiffel",
    description: "Uma ic\xF4nica estrutura de treli\xE7a de ferro localizada no Champ de Mars, em Paris, constru\xEDda para a Exposi\xE7\xE3o Universal de 1889.",
    searchQuery: "eiffel tower paris",
    alternatives: ["Torre Eiffel", "Torre de Pisa", "Big Ben", "Empire State Building", "Torre de T\xF3quio", "Arco do Triunfo"]
  },
  {
    category: "construcoes",
    difficulty: "facil",
    item: "Cristo Redentor",
    description: "Est\xE1tua monumental em estilo Art D\xE9co localizada no topo do morro do Corcovado, no Rio de Janeiro, uma das Maravilhas do Mundo Moderno.",
    searchQuery: "christ the redeemer rio de janeiro",
    alternatives: ["Cristo Redentor", "Est\xE1tua da Liberdade", "Esfinge de Giz\xE9", "Buda do Templo da Primavera", "Colosso de Rodes", "Monumento \xE0 P\xE1tria"]
  },
  {
    category: "construcoes",
    difficulty: "medio",
    item: "Coliseu de Roma",
    description: "O maior anfiteatro da antiguidade cl\xE1ssica, constru\xEDdo no Imp\xE9rio Romano para abrigar combates de gladiadores e espet\xE1culos p\xFAblicos.",
    searchQuery: "colosseum rome italy",
    alternatives: ["Coliseu de Roma", "Partenon", "Pante\xE3o", "F\xF3rum Romano", "Teatro de Epidauro", "Arena de Verona"]
  },
  {
    category: "construcoes",
    difficulty: "medio",
    item: "Taj Mahal",
    description: "Um suntuoso mausol\xE9u de m\xE1rmore branco constru\xEDdo em Agra, na \xCDndia, pelo imperador Shah Jahan em mem\xF3ria de sua esposa favorita.",
    searchQuery: "taj mahal india",
    alternatives: ["Taj Mahal", "Templo de L\xF3tus", "Mesquita Azul", "Pal\xE1cio de Petra", "Alhambra", "Grande Mesquita de Djenn\xE9"]
  },
  {
    category: "construcoes",
    difficulty: "dificil",
    item: "Canal do Panam\xE1",
    description: "Uma espetacular obra de engenharia hidr\xE1ulica de 82 km de extens\xE3o que conecta o Oceano Atl\xE2ntico ao Oceano Pac\xEDfico atrav\xE9s de um sistema de eclusas.",
    searchQuery: "panama canal lock ship",
    alternatives: ["Canal do Panam\xE1", "Canal de Suez", "Canal de Corinto", "Eclusa de Itaipu", "Canal de Kiel", "Dique de Hoover"]
  },
  // --- EQUIPAMENTOS ---
  {
    category: "equipamentos",
    difficulty: "facil",
    item: "Microsc\xF3pio \xD3ptico",
    description: "Instrumento que utiliza lentes de vidro para ampliar a imagem de objetos min\xFAsculos, essencial na biologia e medicina.",
    searchQuery: "microscope laboratory science",
    alternatives: ["Microsc\xF3pio \xD3ptico", "Telesc\xF3pio", "Lupa de M\xE3o", "Estetosc\xF3pio", "Espectr\xF4metro", "Pipeta Semiautom\xE1tica"]
  },
  {
    category: "equipamentos",
    difficulty: "medio",
    item: "Acelerador de Part\xEDculas",
    description: "Instala\xE7\xE3o cient\xEDfica que acelera part\xEDculas subat\xF4micas a velocidades pr\xF3ximas \xE0 da luz para colidi-las e estudar f\xEDsica fundamental.",
    searchQuery: "large hadron collider particle accelerator",
    alternatives: ["Acelerador de Part\xEDculas", "Reator Nuclear", "C\xE2mara de V\xE1cuo", "Supercondutor", "Fusi\xF4metro", "Espectr\xF3grafo de Massa"]
  },
  {
    category: "equipamentos",
    difficulty: "dificil",
    item: "Torno Mec\xE2nico",
    description: "M\xE1quina-ferramenta industrial extremamente precisa usada para usinar materiais met\xE1licos ou de madeira fazendo-os girar contra ferramentas de corte.",
    searchQuery: "industrial metal lathe turning machine",
    alternatives: ["Torno Mec\xE2nico", "Fresa CNC", "Furadeira de Bancada", "Ret\xEDfica Cil\xEDndrica", "Extrusora de Pl\xE1stico", "Prensa Hidr\xE1ulica"]
  },
  // --- ESPORTES ---
  {
    category: "esportes",
    difficulty: "facil",
    item: "Bola de Basquete",
    description: "Uma esfera de couro ou material sint\xE9tico texturizado na cor laranja, inflada e usada para arremessar em uma cesta elevada.",
    searchQuery: "basketball ball court",
    alternatives: ["Bola de Basquete", "Bola de Futebol", "Bola de V\xF4lei", "Bola de Handebol", "Bola de T\xEAnis", "Bola de Rugby"]
  },
  {
    category: "esportes",
    difficulty: "medio",
    item: "Bicicleta de Ciclismo de Pista",
    description: "Bicicleta aerodin\xE2mica especial sem freios e com engrenagem fixa (pinh\xE3o fixo) usada em competi\xE7\xF5es em vel\xF3dromos fechados.",
    searchQuery: "track cycling velodrome bicycle",
    alternatives: ["Bicicleta de Ciclismo de Pista", "Mountain Bike", "Bicicleta de BMX", "Bicicleta de Estrada", "Triciclo de Competi\xE7\xE3o", "Monociclo"]
  },
  {
    category: "esportes",
    difficulty: "dificil",
    item: "Pedra de Curling",
    description: "Um disco pesado de granito polido especial com uma al\xE7a superior, deslizado sobre o gelo em dire\xE7\xE3o a um alvo circular.",
    searchQuery: "curling stone ice sport",
    alternatives: ["Pedra de Curling", "Puck de H\xF3quei", "Tren\xF3 de Bobsled", "Dardo de Atletismo", "Bola de Bocha", "Pino de Boliche"]
  },
  // --- PROFISSOES ---
  {
    category: "profissoes",
    difficulty: "facil",
    item: "Estetosc\xF3pio",
    description: "Instrumento m\xE9dico de ausculta\xE7\xE3o ac\xFAstica usado para ouvir sons internos do corpo humano, principalmente batimentos card\xEDacos e respira\xE7\xE3o.",
    searchQuery: "stethoscope medical doctor",
    alternatives: ["Estetosc\xF3pio", "Term\xF4metro Cl\xEDnico", "Otosc\xF3pio", "Esfigmoman\xF4metro", "Bisturi El\xE9trico", "Seringa"]
  },
  {
    category: "profissoes",
    difficulty: "medio",
    item: "Capacete de Soldador",
    description: "Equipamento de prote\xE7\xE3o individual com visor escurecido autom\xE1tico que protege os olhos e o rosto de fa\xEDscas e radia\xE7\xE3o ultravioleta.",
    searchQuery: "welding mask helmet sparks",
    alternatives: ["Capacete de Soldador", "Capacete de Bombeiro", "M\xE1scara de Prote\xE7\xE3o Qu\xEDmica", "Capacete de Engenheiro", "M\xE1scara de Apicultor", "\xD3culos de Prote\xE7\xE3o"]
  },
  {
    category: "profissoes",
    difficulty: "dificil",
    item: "Form\xE3o de Marceneiro",
    description: "Ferramenta manual de corte de a\xE7o com gume chanfrado afiado, usada por carpinteiros para entalhar e esculpir madeira de forma artesanal.",
    searchQuery: "wood chisel carpentry tool",
    alternatives: ["Form\xE3o de Marceneiro", "Plainas Manuais", "Serrote de Costas", "Goiva", "Desempenadeira", "Grosa para Madeira"]
  },
  // --- PLANTAS ---
  {
    category: "plantas",
    difficulty: "facil",
    item: "Girassol",
    description: "Uma flor heliotr\xF3pica amarela brilhante famosa por girar sua corola de frente para o Sol durante o dia.",
    searchQuery: "sunflower yellow field",
    alternatives: ["Girassol", "Margarida", "Rosa Vermelha", "Orqu\xEDdea", "Tulipa", "L\xF3tus"]
  },
  {
    category: "plantas",
    difficulty: "medio",
    item: "Flor de L\xF3tus",
    description: "Planta aqu\xE1tica sagrada em v\xE1rias culturas, conhecida por suas flores imaculadas que emergem limpas de \xE1guas lodosas.",
    searchQuery: "lotus flower pond water lily",
    alternatives: ["Flor de L\xF3tus", "Vit\xF3ria-r\xE9gia", "Alga Marinha", "Junco", "Aguap\xE9", "Papiro"]
  },
  {
    category: "plantas",
    difficulty: "dificil",
    item: "Planta Carn\xEDvora Dioneia",
    description: "Pequena planta nativa de p\xE2ntanos que captura insetos ativamente atrav\xE9s de folhas modificadas em forma de dobradi\xE7a com gatilhos r\xE1pidos.",
    searchQuery: "venus flytrap carnivorous plant",
    alternatives: ["Planta Carn\xEDvora Dioneia", "Planta Jarro Nepenthes", "Drosera", "Planta Sensitiva", "Cacto Saguaro", "Musgo de Turfa"]
  }
];
function getFallbackQuestions(category, difficulty, categoryName) {
  let filtered = FALLBACK_QUESTIONS.filter((q) => category === "all" || q.category === category);
  if (filtered.length === 0) {
    filtered = [...FALLBACK_QUESTIONS];
  }
  let difficultyFiltered = filtered.filter((q) => q.difficulty === difficulty);
  const others = filtered.filter((q) => q.difficulty !== difficulty);
  const pool = [...difficultyFiltered, ...others];
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  let selected = shuffled.slice(0, 20);
  if (selected.length < 20) {
    const remainingCount = 20 - selected.length;
    const usedItems = new Set(selected.map((q) => q.item));
    const supplementPool = FALLBACK_QUESTIONS.filter((q) => !usedItems.has(q.item)).sort(() => Math.random() - 0.5);
    selected = [...selected, ...supplementPool.slice(0, remainingCount)];
  }
  selected = selected.slice(0, 20);
  return selected.map((q, index) => {
    const defaultImg = q.category === "astronomia" ? "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600" : q.category === "animais" ? "https://images.unsplash.com/photo-1472491861675-415080c7f6f4?w=600" : q.category === "tecnologia" ? "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" : q.category === "construcoes" ? "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600";
    return {
      id: `q-fallback-${Date.now()}-${index}-${Math.floor(Math.random() * 1e3)}`,
      type: "multiple",
      item: q.item,
      description: q.description,
      imageUrl: defaultImg,
      // Will be overridden or used as ultimate fallback
      category: categoryName,
      alternatives: q.alternatives || [q.item, "Op\xE7\xE3o B", "Op\xE7\xE3o C", "Op\xE7\xE3o D", "Op\xE7\xE3o E", "Op\xE7\xE3o F"]
    };
  });
}

// server.ts
import_dotenv.default.config();
var app = (0, import_express.default)();
app.use(import_express.default.json());
var PORT = 3e3;
var apiKey = process.env.GEMINI_API_KEY;
var ai = apiKey ? new import_genai.GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
}) : null;
var CATEGORY_PLACEHOLDERS = {
  equipamentos: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
  tecnologia: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  construcoes: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  animais: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
  esportes: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
  profissoes: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  astronomia: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  plantas: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80",
  bandeiras: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
  logos: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  default: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
};
async function fetchWikipediaPageImage(query, lang, allowSvg = false) {
  const cleanQuery = query.toLowerCase().trim();
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&piprop=original&gsrsearch=${encodeURIComponent(cleanQuery)}&gsrlimit=5&origin=*`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "OQueEQuizApp/1.0 (shla2701@gmail.com) Node/Fetch"
      }
    });
    if (res.ok) {
      const data = await res.json();
      const pagesObj = data.query?.pages;
      if (pagesObj) {
        const sortedPages = Object.values(pagesObj).sort((a, b) => (a.index || 0) - (b.index || 0));
        for (const page of sortedPages) {
          const originalUrl = page?.original?.source;
          if (originalUrl && (originalUrl.startsWith("http://") || originalUrl.startsWith("https://"))) {
            if (allowSvg || !originalUrl.toLowerCase().endsWith(".svg")) {
              return originalUrl;
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(`Wikipedia [${lang}] fetch failed for "${cleanQuery}":`, err);
  }
  return null;
}
async function fetchWikimediaImage(query, allowSvg = false) {
  const cleanQuery = query.toLowerCase().trim();
  try {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&piprop=original&gsrsearch=${encodeURIComponent(cleanQuery)}&gsrlimit=8&origin=*`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "OQueEQuizApp/1.0 (shla2701@gmail.com) Node/Fetch"
      }
    });
    if (res.ok) {
      const data = await res.json();
      const pages = data.query?.pages;
      if (pages) {
        const sortedPages = Object.values(pages).sort((a, b) => (a.index || 0) - (b.index || 0));
        for (const page of sortedPages) {
          const originalUrl = page?.original?.source;
          if (originalUrl && (originalUrl.startsWith("http://") || originalUrl.startsWith("https://"))) {
            if (allowSvg || !originalUrl.toLowerCase().endsWith(".svg")) {
              return originalUrl;
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(`Wikimedia Commons fetch failed for "${cleanQuery}":`, err);
  }
  return null;
}
async function fetchImageForQuestion(query, category, fallbackQuery) {
  const cleanString = (str) => {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s-]/g, "").trim();
  };
  const cleanQuery = cleanString(query);
  const cleanFallback = fallbackQuery ? cleanString(fallbackQuery) : "";
  const allowSvg = category === "bandeiras" || category === "logos";
  if (!cleanQuery) {
    return CATEGORY_PLACEHOLDERS[category || "default"] || CATEGORY_PLACEHOLDERS.default;
  }
  try {
    const wikiEnUrl = await fetchWikipediaPageImage(cleanQuery, "en", allowSvg);
    if (wikiEnUrl) return wikiEnUrl;
  } catch (err) {
    console.error(`Wikipedia EN PageImages failed for "${cleanQuery}":`, err);
  }
  if (cleanFallback && cleanFallback !== cleanQuery) {
    try {
      const wikiPtUrl = await fetchWikipediaPageImage(cleanFallback, "pt", allowSvg);
      if (wikiPtUrl) return wikiPtUrl;
    } catch (err) {
      console.error(`Wikipedia PT PageImages failed for "${cleanFallback}":`, err);
    }
  }
  try {
    const wikiPtUrlAlt = await fetchWikipediaPageImage(cleanQuery, "pt", allowSvg);
    if (wikiPtUrlAlt) return wikiPtUrlAlt;
  } catch (err) {
    console.error(`Wikipedia PT PageImages alternative failed for "${cleanQuery}":`, err);
  }
  if (cleanFallback && cleanFallback !== cleanQuery) {
    try {
      const wikiEnUrlAlt = await fetchWikipediaPageImage(cleanFallback, "en", allowSvg);
      if (wikiEnUrlAlt) return wikiEnUrlAlt;
    } catch (err) {
      console.error(`Wikipedia EN PageImages alternative failed for "${cleanFallback}":`, err);
    }
  }
  try {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(cleanQuery)}&per_page=5`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    if (res.ok) {
      const data = await res.json();
      const results = data.results;
      if (results && results.length > 0) {
        const idx = Math.floor(Math.random() * Math.min(results.length, 3));
        const imgUrl = results[idx]?.urls?.regular || results[idx]?.urls?.small;
        if (imgUrl) return imgUrl;
      }
    }
  } catch (err) {
    console.error(`Unsplash NAPI fetch failed for "${cleanQuery}":`, err);
  }
  try {
    const wikimediaUrl = await fetchWikimediaImage(cleanQuery, allowSvg);
    if (wikimediaUrl) return wikimediaUrl;
  } catch (wikiErr) {
    console.error(`Wikimedia search fallback failed for "${cleanQuery}":`, wikiErr);
  }
  if (cleanFallback && cleanFallback !== cleanQuery) {
    try {
      const wikimediaUrl = await fetchWikimediaImage(cleanFallback, allowSvg);
      if (wikimediaUrl) return wikimediaUrl;
    } catch (wikiErr) {
      console.error(`Wikimedia search fallback failed for "${cleanFallback}":`, wikiErr);
    }
  }
  return CATEGORY_PLACEHOLDERS[category || "default"] || CATEGORY_PLACEHOLDERS.default;
}
app.post("/api/validate-key", async (req, res) => {
  const { apiKey: apiKey2 } = req.body;
  if (!apiKey2) {
    return res.status(400).json({ error: "Chave de API n\xE3o informada." });
  }
  try {
    const testAi = new import_genai.GoogleGenAI({
      apiKey: apiKey2,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
    const response = await testAi.models.generateContent({
      model: "gemini-2.5-flash",
      contents: 'Retorne a palavra "OK" em JSON: {"status": "OK"}',
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text ? response.text.trim() : "";
    if (text) {
      return res.json({ valid: true });
    } else {
      throw new Error("Resposta vazia da API do Gemini.");
    }
  } catch (err) {
    console.error("Erro na valida\xE7\xE3o da chave de API:", err);
    return res.status(400).json({
      valid: false,
      error: err.message || "Chave inv\xE1lida ou limite excedido. Verifique se a chave \xE9 v\xE1lida."
    });
  }
});
app.post("/api/generate-questions", async (req, res) => {
  const { category, difficulty, categoryName } = req.body;
  const customKey = req.headers["x-gemini-api-key"];
  console.log(`Generating quiz for Category: ${categoryName} (${category}), Difficulty: ${difficulty}`);
  let parsedData = null;
  const activeAi = customKey && customKey.trim().startsWith("AIzaSy") ? new import_genai.GoogleGenAI({ apiKey: customKey.trim(), httpOptions: { headers: { "User-Agent": "aistudio-build" } } }) : ai;
  if (activeAi) {
    const sessionSeed = Math.random().toString(36).substring(7);
    const categorySpecialInstructions = category === "bandeiras" ? `
Para a categoria "Bandeiras", selecione bandeiras de pa\xEDses reconhecidos, estados proeminentes, times de futebol ou outros clubes conhecidos mundialmente ou nacionalmente. O "item" deve ser o nome correto do pa\xEDs/estado/time (ex: "Bandeira do Brasil", "Bandeira do Jap\xE3o", "Bandeira do Estado de S\xE3o Paulo", "Bandeira do Flamengo"). A dica deve descrever cores, s\xEDmbolos ou curiosidades hist\xF3ricas da bandeira. A "searchQuery" deve ser em ingl\xEAs e super precisa para buscar a imagem da bandeira no Unsplash ou Wikipedia (ex: "brazil flag", "japan flag", "flamengo logo flag").` : category === "logos" ? `
Para a categoria "Logos e Marcas", selecione logotipos de marcas de consumo ic\xF4nicas, empresas multinacionais famosas ou marcas hist\xF3ricas conhecidas mundialmente. O "item" deve ser o nome da marca/empresa (ex: "Apple", "Coca-Cola", "Nike", "Ferrari", "Google"). A dica deve descrever as formas, cores, elementos visuais do logo ou a hist\xF3ria da marca de forma inteligente e enigm\xE1tica, sem mencionar o pr\xF3prio nome. A "searchQuery" deve ser precisa em ingl\xEAs para obter imagens limpas ou representa\xE7\xF5es do logo no Unsplash ou Wikipedia (ex: "apple logo", "coca-cola logo sign", "nike logo design", "ferrari logo logo").` : "";
    const prompt = `Voc\xEA \xE9 o gerador oficial de perguntas do jogo "O que \xE9?", um quiz mobile-first visual e altamente interativo em portugu\xEAs do Brasil.
Gere uma lista de exatamente 20 perguntas para a categoria "${categoryName}" (${category}) com n\xEDvel de dificuldade "${difficulty}".
Gere tudo com extremo rigor e precis\xE3o cient\xEDfica/popular.

Para cada pergunta, selecione um objeto, equipamento, animal, tecnologia, estrutura hist\xF3rica/moderna, esporte, profiss\xE3o, corpo celeste, planta ou flor ic\xF4nico e interessante que se enquadre na categoria.${categorySpecialInstructions}

Retorne um objeto JSON com uma \xFAnica chave "questions" contendo uma lista de exatamente 20 objetos de pergunta.
Cada objeto de pergunta DEVE conter EXATAMENTE os seguintes campos:
- item: (string) o nome preciso e em portugu\xEAs do Brasil do objeto/coisa (ex: "Telesc\xF3pio Hubble", "Mico-le\xE3o-dourado", "Torre Eiffel", "Acelerador de Part\xEDculas"). Utilize a grafia correta em portugu\xEAs do Brasil.
- description: (string) uma dica curta de 1 a 2 frases explicando o que \xE9, sem falar o nome exato dele. Deve ser interessante e instrutivo.
- searchQuery: (string) termos de busca super precisos e curtos em ingl\xEAs para buscar uma foto perfeita e de alta qualidade no Unsplash (ex: "hubble space telescope", "golden lion tamarin", "eiffel tower", "particle accelerator").
- alternatives: (string[]) exatamente 6 alternativas de resposta em portugu\xEAs do Brasil (incluindo o nome correto do 'item' e 5 alternativas incorretas extremamente plaus\xEDveis do mesmo contexto/tema).

Certifique-se de que a dificuldade "${difficulty}" reflita na complexidade do item selecionado:
- "facil": Coisas muito famosas, comuns e facilmente reconhecidas no dia a dia.
- "medio": Coisas conhecidas, mas que exigem um pouco mais de conhecimento ou aten\xE7\xE3o.
- "dificil": Coisas raras, cient\xEDficas, hist\xF3ricas, t\xE9cnicas ou altamente espec\xEDficas.

INSTRU\xC7\xC3O DE VARIEDADE EXTREMA E SESS\xC3O \xDANICA (ID da Sess\xE3o: ${sessionSeed}-${Date.now()}):
Para garantir que esta sess\xE3o de jogo seja totalmente \xDANICA e nunca repetitiva para o jogador (mesmo se ele jogar o mesmo n\xEDvel e categoria repetidamente):
1. Selecione itens criativos, variados e evite repetir as escolhas mais \xF3bvias ou comuns da categoria.
2. Certifique-se de que a dificuldade "${difficulty}" seja rigorosamente respeitada, mas diversificando ao m\xE1ximo as perguntas.
3. Altere a ordem dos itens e selecione objetos menos clich\xEAs ou de subtemas inovadores.
4. Garanta que as 6 alternativas sejam sempre variadas e tragam op\xE7\xF5es incorretas muito plaus\xEDveis do mesmo universo tem\xE1tico do item correto.

IMPORTANTE: Responda apenas com o JSON puro, sem formata\xE7\xE3o markdown (como \`\`\`json).`;
    const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash"];
    for (const model of modelsToTry) {
      try {
        console.log(`Attempting question generation with model: ${model}`);
        const response = await activeAi.models.generateContent({
          model,
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        const text = response.text ? response.text.trim() : "";
        if (!text) continue;
        parsedData = JSON.parse(text);
        if (parsedData && parsedData.questions && Array.isArray(parsedData.questions)) {
          console.log(`Successfully generated questions using ${model}`);
          break;
        }
      } catch (err) {
        console.log(`Model ${model} is temporarily unavailable or busy. Trying next option.`);
      }
    }
  }
  if (parsedData && parsedData.questions && Array.isArray(parsedData.questions)) {
    try {
      const questionsWithImages = await Promise.all(
        parsedData.questions.slice(0, 20).map(async (q, index) => {
          const imageUrl = await fetchImageForQuestion(q.searchQuery || q.item, category, q.item);
          return {
            id: `q-${Date.now()}-${index}`,
            type: "multiple",
            item: q.item,
            description: q.description,
            imageUrl,
            category: categoryName,
            alternatives: q.alternatives || []
          };
        })
      );
      return res.json({ questions: questionsWithImages });
    } catch (imageErr) {
      console.error("Error setting up images for generated questions:", imageErr);
    }
  }
  console.log(`Using curated local fallback questions for Category: ${categoryName} (${category})`);
  try {
    const fallbackList = getFallbackQuestions(category, difficulty, categoryName);
    const questionsWithImages = await Promise.all(
      fallbackList.map(async (q) => {
        const searchQuery = q.searchQuery || q.item;
        try {
          const imageUrl = await fetchImageForQuestion(searchQuery, category, q.item);
          return { ...q, imageUrl };
        } catch (unsplashErr) {
          return q;
        }
      })
    );
    return res.json({ questions: questionsWithImages });
  } catch (fallbackErr) {
    console.error("Critical fallback failed:", fallbackErr);
    return res.status(500).json({ error: "Infelizmente todos os servi\xE7os de gera\xE7\xE3o falharam. Tente novamente mais tarde." });
  }
});
app.post("/api/evaluate-free-text", async (req, res) => {
  const { userAnswer, correctAnswer, description } = req.body;
  const customKey = req.headers["x-gemini-api-key"];
  if (!userAnswer || !correctAnswer) {
    return res.status(400).json({ error: "Resposta do usu\xE1rio e resposta correta s\xE3o obrigat\xF3rias." });
  }
  const runOfflineEvaluation = () => {
    const normalizedUser = userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedCorrect = correctAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const isCorrect = normalizedUser === normalizedCorrect || normalizedCorrect.includes(normalizedUser);
    return {
      isCorrect,
      correctedName: correctAnswer,
      explanation: isCorrect ? "Muito bem!" : `A resposta correta era: ${correctAnswer}`
    };
  };
  const activeAi = customKey && customKey.trim().startsWith("AIzaSy") ? new import_genai.GoogleGenAI({ apiKey: customKey.trim(), httpOptions: { headers: { "User-Agent": "aistudio-build" } } }) : ai;
  if (!activeAi) {
    return res.json(runOfflineEvaluation());
  }
  const prompt = `Voc\xEA \xE9 o avaliador oficial do jogo "O que \xE9?".
O objetivo \xE9 avaliar se a resposta livre inserida pelo usu\xE1rio \xE9 correta ou semanticamente equivalente \xE0 resposta esperada.

Resposta Esperada: "${correctAnswer}"
Descri\xE7\xE3o/Dica do Item: "${description}"
Resposta do Usu\xE1rio: "${userAnswer}"

Regras de Avalia\xE7\xE3o:
- Seja tolerante a erros de digita\xE7\xE3o leves, falta de acentos, artigos adicionais (ex: "o telesc\xF3pio" vs "telesc\xF3pio"), plural/singular, ou uso de termos sin\xF4nimos extremamente pr\xF3ximos.
- Se a resposta do usu\xE1rio indicar claramente que ele reconheceu o objeto de forma correta, marque como verdadeiro.
- Retorne um objeto JSON contendo:
  - isCorrect: (boolean) true se a resposta estiver correta/aceit\xE1vel, false caso contr\xE1rio.
  - correctedName: (string) o nome correto e oficial do item (com acentua\xE7\xE3o e capitaliza\xE7\xE3o corretas, ex: "${correctAnswer}").
  - explanation: (string) uma resposta curta, entusiasmada e educativa em portugu\xEAs de 1 frase explicando se est\xE1 certo ou dando uma dica sobre o que era se errou.

IMPORTANTE: Responda apenas com o JSON puro, sem markdown.`;
  const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash"];
  for (const model of modelsToTry) {
    try {
      console.log(`Attempting free text evaluation with model: ${model}`);
      const response = await activeAi.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      const text = response.text ? response.text.trim() : "";
      if (text) {
        const result = JSON.parse(text);
        return res.json(result);
      }
    } catch (err) {
      console.log(`Model ${model} is busy or unavailable for answer evaluation. Trying next option.`);
    }
  }
  console.log("Evaluation model failed or offline. Using local normalization fallback.");
  return res.json(runOfflineEvaluation());
});
app.post("/api/generate-hint", async (req, res) => {
  const { item, description, category } = req.body;
  const customKey = req.headers["x-gemini-api-key"];
  if (!item) {
    return res.status(400).json({ error: "O nome do item \xE9 obrigat\xF3rio para gerar uma dica." });
  }
  const runOfflineHint = () => {
    return {
      hint: `Pistas sobre o enigma: Trata-se de um item da categoria "${category || "geral"}". Pense em algo que se relaciona com: "${description || "sua utilidade no dia a dia"}".`
    };
  };
  const activeAi = customKey && customKey.trim().startsWith("AIzaSy") ? new import_genai.GoogleGenAI({ apiKey: customKey.trim(), httpOptions: { headers: { "User-Agent": "aistudio-build" } } }) : ai;
  if (!activeAi) {
    return res.json(runOfflineHint());
  }
  const prompt = `Voc\xEA \xE9 o mestre dos enigmas do quiz "O que \xE9?".
Sua miss\xE3o \xE9 dar uma dica extremamente inteligente, instigante e divertida para ajudar o usu\xE1rio a adivinhar o item "${item}".
O item pertence \xE0 categoria "${category || "geral"}".
Sua descri\xE7\xE3o de base \xE9: "${description}".

Regras CR\xCDTICAS e OBRIGAT\xD3RIAS:
1. \xC9 TERMINANTEMENTE PROIBIDO falar o nome "${item}" ou qualquer palavra contida nele. Exemplo: se o item for "Telesc\xF3pio Hubble", n\xE3o use "telesc\xF3pio" nem "Hubble".
2. N\xE3o d\xEA pistas \xF3bvias demais. D\xEA uma pista em formato de charada de 1 ou no m\xE1ximo 2 frases curtas.
3. Use um tom enigm\xE1tico, po\xE9tico e divertido em portugu\xEAs do Brasil (ex: "Mesmo sem asas, viajo pelos mares de estrelas buscando segredos do passado...").
4. Retorne um objeto JSON contendo:
   - hint: (string) a charada/dica gerada.

IMPORTANTE: Responda apenas com o JSON puro, sem markdown.`;
  const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash"];
  for (const model of modelsToTry) {
    try {
      console.log(`Attempting hint generation with model: ${model}`);
      const response = await activeAi.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      const text = response.text ? response.text.trim() : "";
      if (text) {
        const result = JSON.parse(text);
        return res.json(result);
      }
    } catch (err) {
      console.log(`Model ${model} is busy or unavailable for hint generation. Trying next.`);
    }
  }
  console.log("Hint generation models failed or offline. Using local fallback.");
  return res.json(runOfflineHint());
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=server.cjs.map
