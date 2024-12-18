const physicsQuestions = [
  {
    question: "What is the SI unit of force?",
    options: ["Watt", "Joule", "Newton", "Pascal"],
    correctAnswer: 2,
  },
  {
    question: "What is the SI unit of electric current?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correctAnswer: 0,
  },
  {
    question:
      "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
    options: [
      "Boyle’s law",
      "Charles’s law",
      "Gay-Lussac’s law",
      "Avogadro’s law",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the phenomenon where light waves change direction as they pass through a medium with varying refractive index?",
    options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    correctAnswer: 1,
  },
  {
    question:
      "Which type of energy is associated with the motion of an object?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Chemical energy",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the SI unit of force?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    correctAnswer: 0,
  },
  {
    question:
      "Which law states that the total momentum of a closed system remains constant if no external forces act on it?",
    options: [
      "Newton’s first law",
      "Newton’s second law",
      "Newton’s third law",
      "Law of conservation of momentum",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "What is the process by which a solid directly changes into a gas without passing through the liquid phase?",
    options: ["Sublimation", "Evaporation", "Condensation", "Melting"],
    correctAnswer: 0,
  },
  {
    question: "Which type of lens converges light rays and forms real images?",
    options: [
      "Convex lens",
      "Concave lens",
      "Plano-convex lens",
      "Biconvex lens",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the acceleration due to gravity on the surface of Earth approximately?",
    options: ["9.8 m/s²", "10 m/s²", "9.0 m/s²", "8.0 m/s²"],
    correctAnswer: 0,
  },
  {
    question:
      "Which law states that the entropy of an isolated system always increases over time?",
    options: [
      "First law of thermodynamics",
      "Second law of thermodynamics",
      "Third law of thermodynamics",
      "Zeroth law of thermodynamics",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "At the boiling point of a liquid, the Saturated Vapour Pressure of the Liquid (SVP)",
    options: [
      "SVP < Atmospheric Pressure",
      "SVP = Atmospheric Pressure",
      "SVP > Atmospheric Pressure",
      "SVP = 0",
    ],
    correctAnswer: 1,
  },
  {
    question:
      " Reynolds number determines the nature of the flow of liquid through a fluid",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question:
      "The pressure of one mole of an ideal gas of volume 100m<sup>3</sup> at a temperature of 27<sup>o</sup>C is [ gas constant = 8.3J mol]",
    options: [
      " 2.24 x l0<sup>3</sup>Nm",
      "2.24 x 10<sup>2</sup>Nm",
      "2.49 x 10<sup>5</sup>Nm",
      "2.49 x 10<sup>8</sup>Nm",
    ],
    correctAnswer: 2,
  },
  {
    question: "It is observed that water will wet a clean glass because the",
    options: [
      "It is observed that water will wet a clean glass because the",
      "adhesion of water molecules is weaker than the cohesion of water to glass",
      "cohesion of water to glass is weaker than the cohesion of water molecules",
      "Adhesion of water molecules is stronger than the cohesion of water molecules",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "if a cage containing a truck of coal weighing 750KG is raised to a height of 90m in 1minutes, what is the total power expended? <br>(g = 10ms<sup>-2</sup>)",
    options: ["11.50KW", "12.60KW", "11.25KW", "12.10KW"],
    correctAnswer: 2,
  },
  {
    question:
      "A bread toaster uses a current of 4A plugged in a 240 volts line. It takes one minutes to toast slices of a bread. What is the energy consumed by the toaster?",
    options: [
      "5.76 x 10<sup>4</sup>J",
      "1.60 x 10<sup>4</sup>J",
      "3.60 x 10<sup>3</sup>J",
      "1.60 x 10<sup>2</sup>J",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "A particle of mass 0.01kg is fixed to the tip of a fan blade which rotates with the angular velocity of 100rads<sup>-1</sup>. If the radius of the blade is 0.2m, the centripetal forces is:",
    options: ["2N", "20N", "200N", "400N"],
    correctAnswer: 1,
  },
  {
    question: "Zener diodes is used for",
    options: [
      "current amplification",
      "power amplification",
      "voltage regulation",
      "energy conversion",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "The values <b>x, y and z</b> respectively in the expression M<sup>x</sup>L<sup>y</sup>T<sup>z</sup>",
    options: ["2,-3,-2", "-1,3,-2", "-1,2,-3", "-2,-1,3"],
    correctAnswer: 1,
  },
  {
    question:
      "A glass plate 0.9cm thick has a refractive index of 1.50. How long does it take for a pulse of light to pass through the plate<br> [C = 3.0 x 10<sup>8</sup>ms<sup>-1</sup>]",
    options: [
      "3.0 x 10<sup>-11</sup>s",
      "4.5 x 10<sup>-11</sup>s",
      "3.0 x 10<sup>-10</sup>s",
      "4.5 x 10<sup>-10</sup>s",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "The production of pure spectrum could be easily achieved using a ",
    options: [
      "triangular prism only",
      "triangular prism with two concave lense",
      "triangular prism with two convex lenses",
      "glass prism with a pin",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Neglecing end effect, find the length of a closed pipe which emits a fundamental note of frquency 8.50Hz<br> (speed of sound in air = 330m/s)",
    options: ["0.40m", "0.20m", "0.12m", "0.10m"],
    correctAnswer: 3,
  },
  {
    question:
      "A shooter wants to fire a bullet in such a way that its horizontal range is equal to three times its maximum height. At what angle should he fire the bullet to achieve this",
    options: [
      "64<sup>o</sup>",
      "53<sup>o</sup>",
      "26<sup>o</sup>",
      "30<sup>o</sup>",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "The energy stored in an inductance 5mH when a current of 6A flows through it is",
    options: [
      "1.8 x 10<sup>-2</sup>J",
      "9.0 x 10<sup>3</sup>J",
      "1.4 x 10<sup>-2</sup>J",
      "9.0 x 10<sup>-2</sup>J",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "when left in a freezer, a bottle full of water cracks on freezing into ice because of the ",
    options: [
      "decrease in the volume of water",
      "contraction of bottle",
      "expansion of bottle",
      "increase in the volume of water",
    ],
    correctAnswer: 3,
  },
  {
    question: "Tea pots are often silver-coated to prevent heat loss by",
    options: [
      "convection and conduction",
      "radiation only",
      "conduction only",
      "convection only",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "The maximum kinetic energy of the photoelectrons emitted from a metal surface is 0.34eV. If the work function of the metal surface is 1.83eV, find the stopping potential",
    options: ["2.17V", "1.49V", "1.09V", "0.34V"],
    correctAnswer: 0,
  },
  {
    question:
      "In a semiconductor junction diode, as the depletion or barrier layer is forward-biased, the layer",
    options: ["widens", "narrows", "remain constant", "widens then narrows"],
    correctAnswer: 0,
  },
  {
    question:
      "A 100KG box is pushed along the road with a force of 500N. if the box moves with a uniform velocity, the coefficient of friction between the box and the road is",
    options: ["0.5", "0.4", "1.0", "0.8"],
    correctAnswer: 0,
  },
  // Add more physics questions...
];

const chemistryQuestions = [
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Cu", "Fe"],
    correctAnswer: 1,
  },
  {
    question: "The allotrope of carbon which conducts electricity is?",
    options: ["Diamond", "Fullerene", "Graphite", "Carbon"],
    correctAnswer: 2,
  },
  {
    question: "which of the following is a common property of all hydrocarbon?",
    options: ["oxidation", "substitution", "addition", "combustion"],
    correctAnswer: 3,
  },
  {
    question: "What substance is used in making mercury wet glass?",
    options: ["O<sub>3</sub>", "O<sub>2</sub>", "Cu", "Cl<sub>2</sub>"],
    correctAnswer: 0,
  },
  {
    question: "What is the value of Avogrado's constant?",
    options: [
      "6.02*10<sup>21</sup>",
      "6.02*10<sup>22</sup>",
      "6.02*10<sup>23</sup>",
      "6.02*10<sup>-23</sup>",
    ],
    correctAnswer: 2,
  },
  {
    question: "which of the following Ph is strongly alkalinic?",
    options: ["4", "6.7", "8.2", "13.6"],
    correctAnswer: 3,
  },
  {
    question: "Chlorine belongs to what group in the periodic table?",
    options: ["Halogen", "Inert", "Alkali metals", "Nitrogen family"],
    correctAnswer: 0,
  },
  {
    question:
      "The bond existing between elements of high electronegative difference is?",
    options: ["dative", "Covalent", "ionic", "vander waals"],
    correctAnswer: 2,
  },
  {
    question:
      "The electronic configuration 1S<sup>2</sup>,2S<sup>2</sup>,2P<sup>6</sup>,3S<sup>2</sup>,3P<sup>2</sup> belongs to which period?",
    options: ["3", "2", "4", "5"],
    correctAnswer: 0,
  },
  {
    question: "The element <b>Titanium</b> belongs to block?",
    options: ["S", "D", "F", "P"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a strong acid?",
    options: ["HCl", "H2SO4", "CH3COOH", "H2CO3"],
    correctAnswer: 0,
  },
  {
    question: "What is the atomic number of Carbon?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Helium", "Fluorine"],
    correctAnswer: 2,
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "SO2", "NO2"],
    correctAnswer: 0,
  },
  {
    question: "What is the oxidation state of Sodium in NaCl?",
    options: ["1", "2", "-1", "-2"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an alkali metal?",
    options: ["Lithium", "Magnesium", "Aluminum", "Copper"],
    correctAnswer: 0,
  },
  {
    question: "What is the molecular weight of Oxygen?",
    options: ["16", "32", "40", "64"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a covalent compound?",
    options: ["NaCl", "H2O", "CO2", "CaO"],
    correctAnswer: 1,
  },
  {
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "-7"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a base?",
    options: ["HCl", "NaOH", "CH3COOH", "H2SO4"],
    correctAnswer: 1,
  },
  {
    question: "What is the chemical formula for Sodium carbonate?",
    options: ["Na2CO3", "NaHCO3", "NaCl", "Na2SO4"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a polymer?",
    options: ["Glucose", "Starch", "Cellulose", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: "What is the molecular formula for glucose?",
    options: ["C6H12O6", "C5H10O5", "C4H8O4", "C3H6O3"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a reducing agent?",
    options: ["Oxygen", "Hydrogen", "Sodium", "Chlorine"],
    correctAnswer: 1,
  },
  {
    question: "What is the chemical formula for Calcium phosphate?",
    options: ["Ca3(PO4)2", "Ca2PO4", "CaPO4", "Ca3PO4"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an organic compound?",
    options: ["CH4", "CO2", "H2O", "NaCl"],
    correctAnswer: 0,
  },
  {
    question: "What is the molecular weight of Methane?",
    options: ["16", "32", "40", "64"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a chemical change?",
    options: [
      "Melting of ice",
      "Boiling of water",
      "Rusting of iron",
      "Dissolution of salt",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the chemical formula for Ammonia?",
    options: ["NH3", "NH4", "NO2", "NO3"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a physical change?",
    options: [
      "Melting of ice",
      "Boiling of water",
      "Rusting of iron",
      "Dissolution of salt",
    ],
    correctAnswer: 0,
  },
  // Add more chemistry questions...
];
const eet224Questions = [
  {
    question:
      'Another name for <b>program</b> is called',
    options: ["data", "software", "information", "algorithm"],
    correctAnswer: 1,
  },
  {
    question:
      "who used the vacuum tube triode as electronic switch in the first computers",
    options: ["Lee D0 Forest", "Lee Dee forest", "Lee De forest", "Karmil Jack"],
    correctAnswer: 3,
  },
  {
    question: "<b>Bliase Pascal</b> intoduce the cgemical tweenko",
    options: [" ", " ", " ", " "],
    correctAnswer: 1,
  },
  {
    question:
      " ",
    options: [" ", " ", " ", " "],
    correctAnswer: 3,
  },
  {
    question: " ",
    options: [
      "",
      " ",
      "",
      "",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 2,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 2,
  },
  {
    question: "?",
    options: ["", "", "", ""],
    correctAnswer: 1,
  },
  {
    question:
      "",
    options: ["", "", "", ""],
    correctAnswer: 0,
  },
  {
    question:
      "?",
    options: [
      "",
      "",
      "",
      "",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 1,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 1,
  },
  {
    question: "?",
    options: ["", "", "", ""],
    correctAnswer: 1,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 3,
  },
  {
    question: "",
    options: [
      "",
      "",
      "",
      "",
    ],
    correctAnswer: 3,
  },
  {
    question: "?",
    options: [
      "",
      "",
      "",
      "",
    ],
    correctAnswer: 3,
  },
  {
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 3,
  },
  {
    question: "",
    options: [
      "",
      "",
      "",
      "",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "?",
    options: ["", "", "", ""],
    correctAnswer: 3,
  },
  {
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 3,
  },
  {
    question:
      "<b>John Von Neuman's</b> first draft a reput of EDVAC in ?",
    options: [
      "1945",
      "1970",
      "1923",
      "207",
    ],
    correctAnswer: 0,
  },
  {
    question: "In what year did Bell laboratories announces first fully transistoried computer?",
    options: [
      "1945",
      "1933",
      "1971",
      "1955",
    ],
    correctAnswer: 3,
  },
  {
    question: "full meaning of <b>EDVAC</b>?",
    options: [
      "Electronic Discrete Variable Automatic Computer",
      "Electronic Discontinuous Variant Automatic Computer",
      "Electronic Discreet Variable Automatic Computer",
      "Electronic Digital Variable Automatic Computer",
    ],
    correctAnswer: 0,
  },
  {
    question: "uses the internet and web to shift many computer activities from a user computer to computers on the internet?",
    options: [
      "cloud sharing",
      "cloud networking",
      "cloud computing",
      "cloud writing",
    ],
    correctAnswer: 0,
  },
  {
    question: "largest network is the?",
    options: [
      "LAN",
      "WAN",
      "internet",
      "communication",
    ],
    correctAnswer: 2,
  },
  {
    question: "The most improtant part of any system is?",
    options: [
      "people",
      "software",
      "hardware",
      "data",
    ],
    correctAnswer: 0,
  },
  {
    question: "what component of the information system allows the computer to share information and connect to the internet?",
    options: [
      "internet",
      "network",
      "connectors",
      "connectivity",
    ],
    correctAnswer: 3,
  },
  {
    question: "The integral part of the information system is?",
    options: ["Information tech", "software", "information system", "Information technology"],
    correctAnswer: 3,
  },
  {
    question: "____ refers to the process of acquiring computer related skill?",
    options: [
      "computer literacy",
      "computer competency",
      "computer science",
      "computer acquisition",
    ],
    correctAnswer: 1,
  },
  // Add more chemistry questions...
];

const htmlQuestions = [
  {
    question: "What is the basic structure of an HTML document?",
    options: [
      "HTML, HEAD, BODY",
      "HTML, TITLE, BODY",
      "HTML, HEAD, TITLE",
      "HTML, BODY, FOOTER",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a hyperlink?",
    options: ["A", "LINK", "ANCHOR", "HREF"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'alt' attribute?",
    options: [
      "To specify the color of an image",
      "To specify the size of an image",
      "To provide alternative text for an image",
      "To specify the border of an image",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    options: ["P", "PARA", "TEXT", "SENTENCE"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'src' attribute?",
    options: [
      "To specify the source of an image",
      "To specify the source of a link",
      "To specify the source of a script",
      "To specify the source of a style sheet",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a list?",
    options: ["UL", "OL", "LIST", "MENU"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'href' attribute?",
    options: [
      "To specify the source of an image",
      "To specify the source of a link",
      "To specify the source of a script",
      "To specify the source of a style sheet",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML element is used to define a table?",
    options: ["TABLE", "TD", "TR", "TH"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'title' attribute?",
    options: [
      "To specify the title of a page",
      "To specify the title of an image",
      "To specify the title of a link",
      "To specify the title of a table",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a form?",
    options: ["FORM", "INPUT", "SELECT", "TEXTAREA"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'action' attribute?",
    options: [
      "To specify the action of a form",
      "To specify the action of a link",
      "To specify the action of a script",
      "To specify the action of a style sheet",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a heading?",
    options: ["H1", "H2", "H3", "H4"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'style' attribute?",
    options: [
      "To specify the style of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a division?",
    options: ["DIV", "SPAN", "SECTION", "ARTICLE"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'class' attribute?",
    options: [
      "To specify the class of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define an image?",
    options: ["IMG", "IMAGE", "PICTURE", "GRAPHIC"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'id' attribute?",
    options: [
      "To specify the id of an element",
      "To specify the class of an element",
      "To specify the size of an element",
      "To specify the color of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a span of text?",
    options: ["SPAN", "DIV", "P", "TEXT"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML ' tabindex' attribute?",
    options: [
      "To specify the tab order of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'href' attribute?",
    options: [
      "To specify the source of an image",
      "To specify the source of a link",
      "To specify the source of a script",
      "To specify the source of a style sheet",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML element is used to define a table?",
    options: ["TABLE", "TD", "TR", "TH"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'title' attribute?",
    options: [
      "To specify the title of a page",
      "To specify the title of an image",
      "To specify the title of a link",
      "To specify the title of a table",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a form?",
    options: ["FORM", "INPUT", "SELECT", "TEXTAREA"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'action' attribute?",
    options: [
      "To specify the action of a form",
      "To specify the action of a link",
      "To specify the action of a script",
      "To specify the action of a style sheet",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a heading?",
    options: ["H1", "H2", "H3", "H4"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'style' attribute?",
    options: [
      "To specify the style of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a division?",
    options: ["DIV", "SPAN", "SECTION", "ARTICLE"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'class' attribute?",
    options: [
      "To specify the class of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the HTML 'id' attribute?",
    options: [
      "To specify the id of an element",
      "To specify the class of an element",
      "To specify the size of an element",
      "To specify the color of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to define a span of text?",
    options: ["SPAN", "DIV", "P", "TEXT"],
    correctAnswer: 0,
  },
  // Add more mathematics questions...
];

const cssQuestions = [
  {
    question: "What is the purpose of the CSS 'position' property?",
    options: [
      "To specify the color of an element",
      "To specify the size of an element",
      "To specify the position of an element",
      "To specify the border of an element",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which CSS property is used to specify the background color of an element?",
    options: ["background-color", "color", "border-color", "font-color"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'display' property?",
    options: [
      "To specify the display type of an element",
      "To specify the position of an element",
      "To specify the size of an element",
      "To specify the color of an element",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the font size of an element?",
    options: ["font-size", "font-family", "font-style", "font-color"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'margin' property?",
    options: [
      "To specify the margin of an element",
      "To specify the padding of an element",
      "To specify the border of an element",
      "To specify the width of an element",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the border style of an element?",
    options: ["border-style", "border-color", "border-width", "border-radius"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'padding' property?",
    options: [
      "To specify the padding of an element",
      "To specify the margin of an element",
      "To specify the border of an element",
      "To specify the width of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to specify the width of an element?",
    options: ["width", "height", "margin", "padding"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'float' property?",
    options: [
      "To specify the float type of an element",
      "To specify the position of an element",
      "To specify the size of an element",
      "To specify the color of an element",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the opacity of an element?",
    options: ["opacity", "transparency", "visibility", "display"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'box-sizing' property?",
    options: [
      "To specify the size of an element",
      "To specify the padding of an element",
      "To specify the border of an element",
      "To specify how the width and height of an element are calculated",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which CSS property is used to specify the font family of an element?",
    options: ["font-family", "font-size", "font-style", "font-color"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'text-align' property?",
    options: [
      "To specify the alignment of text",
      "To specify the color of text",
      "To specify the size of text",
      "To specify the style of text",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the background image of an element?",
    options: [
      "background-image",
      "background-color",
      "background-repeat",
      "background-attachment",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'cursor' property?",
    options: [
      "To specify the cursor type",
      "To specify the cursor size",
      "To specify the cursor color",
      "To specify the cursor position",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the transition effect of an element?",
    options: ["transition", "animation", "transform", "visibility"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'flexbox' property?",
    options: [
      "To specify the layout of elements",
      "To specify the size of elements",
      "To specify the color of elements",
      "To specify the position of elements",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the grid layout of an element?",
    options: [
      "grid-template-columns",
      "grid-template-rows",
      "grid-gap",
      "grid-auto-flow",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'media query' property?",
    options: [
      "To specify the layout of elements",
      "To specify the size of elements",
      "To specify the color of elements",
      "To apply different styles based on different device screen sizes",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Which CSS property is used to specify the scroll behavior of an element?",
    options: ["overflow", "scrollbar", "scroll-behavior", "scroll-position"],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the CSS 'z-index' property?",
    options: [
      "To specify the position of an element",
      "To specify the size of an element",
      "To specify the color of an element",
      "To specify the stacking order of elements",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which CSS property is used to specify the shape of an element?",
    options: ["shape", "clip-path", "mask", "border-radius"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the CSS 'writing-mode' property?",
    options: [
      "To specify the writing mode of text",
      "To specify the direction of text",
      "To specify the alignment of text",
      "To specify the size of text",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to specify the hyphenation of text?",
    options: ["hyphens", "white-space", "text-align", "line-height"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'pointer-events' property?",
    options: [
      "To specify the pointer events of an element",
      "To specify the pointer size of an element",
      "To specify the pointer color of an element",
      "To specify the pointer position of an element",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which CSS property is used to specify the resize behavior of an element?",
    options: ["resize", "overflow", "scrollbar", "scroll-behavior"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'user-select' property?",
    options: [
      "To specify the user selection of an element",
      "To specify the user size of an element",
      "To specify the user color of an element",
      "To specify the user position of an element",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'object-fit' property?",
    options: [
      "To specify the size of an element",
      "To specify the position of an element",
      "To specify the scaling of an image or video within an element",
      "To specify the color of an element",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "Which CSS property is used to specify the column layout of an element?",
    options: ["column-count", "column-width", "column-gap", "column-rule"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the CSS 'aspect-ratio' property?",
    options: [
      "To specify the aspect ratio of an element",
      "To specify the size of an element",
      "To specify the position of an element",
      "To specify the color of an element",
    ],
    correctAnswer: 0,
  },
];
const javaQuestions1 = [
  {
    question:
      "What is the purpose of the 'public static void main' method in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To serve as the entry point for a Java program",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java data type is used to represent a whole number?",
    options: ["int", "double", "float", "boolean"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'extends' keyword in Java?",
    options: [
      "To inherit properties from a parent class",
      "To create a new class",
      "To declare a variable",
      "To define a method",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Java operator is used to concatenate strings?",
    options: ["+", "-", "*", "/"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'try-catch' block in Java?",
    options: [
      "To handle errors and exceptions",
      "To declare a variable",
      "To define a method",
      "To create an object",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which Java collection is used to store a group of elements?",
    options: ["Array", "ArrayList", "LinkedList", "HashSet"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'abstract' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To define an abstract method or class",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java method is used to print output to the screen?",
    options: [
      "System.out.println()",
      "System.out.print()",
      "System.in.read()",
      "System.err.println()",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'interface' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To define a contract or interface",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java keyword is used to create a new object?",
    options: ["new", "this", "super", "null"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'finally' block in Java?",
    options: [
      "To handle errors and exceptions",
      "To declare a variable",
      "To define a method",
      "To execute code regardless of an exception",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java data type is used to represent a decimal number?",
    options: ["int", "double", "float", "boolean"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'static' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To define a static method or variable",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java method is used to get user input?",
    options: [
      "System.in.read()",
      "System.out.println()",
      "Scanner.nextLine()",
      "BufferedReader.readLine()",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the 'switch' statement in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To execute different blocks of code based on a condition",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the 'enum' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To define an enumeration",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java collection is used to store a key-value pair?",
    options: ["Array", "ArrayList", "HashMap", "HashSet"],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the 'transient' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To exclude a field from serialization",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java method is used to sort an array?",
    options: [
      "Arrays.sort()",
      "Collections.sort()",
      "List.sort()",
      "Array.sort()",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'synchronized' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To synchronize access to a block of code",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java class is used to represent a file?",
    options: ["File", "FileNotFoundException", "IOException", "InputStream"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'volatile' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To mark a field as being stored in main memory",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java method is used to convert a string to uppercase?",
    options: ["toLowerCase()", "toUpperCase()", "toString()", "substring()"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'assert' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To assert a condition",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java class is used to represent a date and time?",
    options: ["Date", "Time", "DateTime", "Calendar"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the 'native' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To call a native method",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java method is used to read a file?",
    options: ["read()", "write()", "open()", "close()"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'strictfp' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To restrict floating-point calculations",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which Java class is used to represent a vector?",
    options: ["Vector", "ArrayList", "LinkedList", "HashSet"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'instanceof' keyword in Java?",
    options: [
      "To declare a variable",
      "To define a class",
      "To create an object",
      "To check if an object is an instance of a class",
    ],
    correctAnswer: 3,
  },
];

const mceQuestions = [
  {
    question: "Who coined the term 'Mechatronics'",
    options: [
      "Tetsuro Mori",
      "Joseph Engelberger",
      "George Devol",
      "Kazuo Watanabe",
    ],
    correctAnswer: 0,
  },
  {
    question: 'In what year was the term "Mechatronics" coined?',
    options: ["1969", "1971", "1973", "1975"],
    correctAnswer: 0,
  },
  {
    question: 'What is Mechatronics?',
    options: [
      "A combination of mechanical and electrical engineering",
      "A combination of mechanical, electrical, and software engineering",
      "A branch of mechanical engineering",
      "A branch of electrical engineering",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the primary goal of Mechatronics?',
    options: [
      "To design and develop intelligent systems",
      "To design and develop mechanical systems",
      "To design and develop electrical systems",
      "To design and develop software systems",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is a component of Mechatronics systems?',
    options: ["Input", "Output", "Signal condition", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: 'What is a property of Mechatronics systems?',
    options: ["Design", "Efficiency", "Performance", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: 'Which of the following is an application of Mechatronics?',
    options: [
      "Manufacturing",
      "Transportation",
      "Smart robotics",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is Class-I Mechatronics product?',
    options: [
      "Simple mechanical system with no electronic control",
      "Mechanical system with simple electronic control",
      "Mechanical system with complex electronic control",
      "None of the above",
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which discipline is NOT involved in Mechatronics?',
    options: [
      "Mechanical engineering",
      "Electrical engineering",
      "Software engineering",
      "Civil engineering",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What element of Mechatronics involves the use of sensors and actuators?',
    options: [
      "Computer and logic system",
      "Physical system modeling",
      "Software and DAQ acquisition",
      "Sensors and actuators",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is a primary advantage of Mechatronics?',
    options: [
      "Increased complexity",
      "Decreased efficiency",
      "Improved performance",
      "Increased cost",
    ],
    correctAnswer: 2,
  },
  {
    question: 'What is the role of software in Mechatronics?',
    options: [
      "To control mechanical systems",
      "To control electrical systems",
      "To integrate mechanical, electrical, and software systems",
      "To design mechanical systems",
    ],
    correctAnswer: 2,
  },
  // ... (85 more questions)
  {
    question: 'What is the purpose of DAQ acquisition in Mechatronics?',
    options: [
      "To acquire data from sensors",
      "To control actuators",
      "To model physical systems",
      "To design software systems",
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is a Mechatronics application in the medical field?',
    options: [
      "Robot-assisted surgery",
      "Medical imaging",
      "Patient monitoring",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of software control in Mechatronics?',
    options: [
      "To control mechanical systems",
      "To control electrical systems",
      "To integrate mechanical, electrical, and software systems",
      "To design software systems",
    ],
    correctAnswer: 2,
  },
  {
    question: 'Which of the following is a type of actuator used in Mechatronics?',
    options: [
      "Electric motor",
      "Hydraulic cylinder",
      "Pneumatic cylinder",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of input components in Mechatronics systems?',
    options: [
      "To provide data to the system",
      "To control the system",
      "To monitor the system",
      "To design the system",
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is a Mechatronics application in the defense field?',
    options: [
      "Missile guidance systems",
      "Surveillance systems",
      "Communication systems",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of output components in Mechatronics systems?',
    options: [
      "To provide data to the user",
      "To control the system",
      "To monitor the system",
      "To design the system",
    ],
    correctAnswer: 0,
  },
  // ... (45 more questions)
  {
    question: 'What is the purpose of signal processing in Mechatronics?',
    options: [
      "To amplify signals",
      "To filter signals",
      "To convert signals",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'Which of the following is a Mechatronics application in the sports field?',
    options: [
      "Wearable technology",
      "Sports equipment design",
      "Player tracking systems",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of control systems in Mechatronics?',
    options: [
      "To control mechanical systems",
      "To control electrical systems",
      "To integrate mechanical, electrical, and software systems",
      "To design software systems",
    ],
    correctAnswer: 2,
  },
  {
    question: 'Which of the following is a type of sensor used in Mechatronics?',
    options: [
      "Accelerometer",
      "Gyroscope",
      "Magnetometer",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of microcontrollers in Mechatronics?',
    options: [
      "To control systems",
      "To monitor systems",
      "To design systems",
      "To test systems",
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is a Mechatronics application in the medical field?',
    options: [
      "Patient monitoring systems",
      "Medical imaging systems",
      "Robot-assisted surgery",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of data acquisition in Mechatronics?',
    options: [
      "To acquire data from sensors",
      "To control actuators",
      "To model physical systems",
      "To design software systems",
    ],
    correctAnswer: 0,
  },
  // ... (25 more questions)
  {
    question: 'What is the purpose of system integration in Mechatronics?',
    options: [
      "To integrate mechanical, electrical, and software systems",
      "To design software systems",
      "To test systems",
      "To control systems",
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is a Mechatronics application in the aerospace field?',
    options: [
      "Navigation systems",
      "Communication systems",
      "Control systems",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of human-machine interface in Mechatronics?',
    options: [
      "To interact with users",
      "To control systems",
      "To monitor systems",
      "To design systems",
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which of the following is a type of actuator used in Mechatronics?',
    options: [
      "Servo motor",
      "Stepper motor",
      "DC motor",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of simulation in Mechatronics?',
    options: [
      "To design systems",
      "To test systems",
      "To monitor systems",
      "To control systems",
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which of the following is a Mechatronics application in the automotive field?',
    options: [
      "Anti-lock braking system",
      "Electronic stability control",
      "Cruise control",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the purpose of calibration in Mechatronics?',
    options: [
      "To ensure accuracy",
      "To ensure precision",
      "To ensure reliability",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  // ... (9 more questions)
  {
    question: 'What is the purpose of fault diagnosis in Mechatronics?',
    options: [
      "To identify faults",
      "To repair faults",
      "To prevent faults",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'Which of the following is a Mechatronics application in the industrial field?',
    options: [
      "Robotics",
      "Computer-aided design",
      "Computer-aided manufacturing",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is the future scope of Mechatronics?',
    options: [
      "Limited to industrial automation",
      "Limited to robotics",
      "Expanding to various fields like healthcare, transportation, and education",
      "No future scope",
    ],
    correctAnswer: 2,
  },
  {
    question: 'What is the brain of a microcomputer?',
    options: [
      "Microprocessor",
      "Memory",
      "Input/Output devices",
      "Power supply",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Microprocessor?',
    options: [
      "To store data",
      "To perform calculations",
      "To control input/output devices",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: 'What is ROM?',
    options: [
      "Read-Only Memory",
      "Random-Access Memory",
      "Erasable Programmable Read-Only Memory",
      "Flash Memory",
    ],
    correctAnswer: 0,
  },
  // ... (47 more questions)
  {
    question: 'What is the function of the ALU in the CPU?',
    options: [
      "To perform arithmetic and logical operations",
      "To decode instructions",
      "To control the flow of data",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the program counter in the CPU?',
    options: [
      "A register that stores the current instruction",
      "A register that stores the next instruction",
      "A register that stores data",
      "A register that stores the program",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What happens in the CPU of the microprocessor?',
    options: [
      "Data is stored",
      "Instructions are executed",
      "Input/output operations are performed",
      "All of the above",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the function of the Instruction Register in the CPU?',
    options: [
      "To store the current instruction",
      "To store the next instruction",
      "To decode instructions",
      "To execute instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between PROM and EPROM?',
    options: [
      "PROM is erasable, EPROM is not",
      "PROM is not erasable, EPROM is",
      "PROM is used for temporary storage, EPROM is used for permanent storage",
      "PROM is used for permanent storage, EPROM is used for temporary storage",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the function of the Stack Pointer in the CPU?',
    options: [
      "To point to the top of the stack",
      "To point to the bottom of the stack",
      "To store data",
      "To execute instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Flag Register in the CPU?',
    options: [
      "To store flags",
      "To store data",
      "To execute instructions",
      "To decode instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between RAM and ROM?',
    options: [
      "RAM is volatile, ROM is non-volatile",
      "RAM is non-volatile, ROM is volatile",
      "RAM is used for temporary storage, ROM is used for permanent storage",
      "RAM is used for permanent storage, ROM is used for temporary storage",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Clock Circuit in the CPU?',
    options: [
      "To generate clock signals",
      "To decode instructions",
      "To execute instructions",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Reset Circuit in the CPU?',
    options: [
      "To reset the CPU",
      "To decode instructions",
      "To execute instructions",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between OTP and EEPROM?',
    options: [
      "OTP is erasable, EEPROM is not",
      "OTP is not erasable, EEPROM is",
      "OTP is used for temporary storage, EEPROM is used for permanent storage",
      "OTP is used for permanent storage, EEPROM is used for temporary storage",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the function of the Instruction Decode and Control Unit in the CPU?',
    options: [
      "To decode instructions",
      "To execute instructions",
      "To store data",
      "To control the flow of data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between Flash Memory and RAM?',
    options: [
      "Flash Memory is volatile, RAM is non-volatile",
      "Flash Memory is non-volatile, RAM is volatile",
      "Flash Memory is used for temporary storage, RAM is used for permanent storage",
      "Flash Memory is used for permanent storage, RAM is used for temporary storage",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the function of the Program Counter in the CPU?',
    options: [
      "To store the current instruction",
      "To store the next instruction",
      "To decode instructions",
      "To execute instructions",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the difference between Microprocessor and Microcontroller?',
    options: [
      "Microprocessor has internal memory, Microcontroller does not",
      "Microprocessor does not have internal memory, Microcontroller does",
      "Microprocessor has external memory, Microcontroller does not",
      "Microprocessor does not have external memory, Microcontroller does",
    ],
    correctAnswer: 1,
  },
  // ... (22 more questions)
  {
    question: 'What is the function of the Address Bus in the CPU?',
    options: [
      "To transmit data",
      "To transmit addresses",
      "To control the flow of data",
      "To execute instructions",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the difference between Little Endian and Big Endian?',
    options: [
      "Little Endian stores the most significant byte first, Big Endian stores the least significant byte first",
      "Little Endian stores the least significant byte first, Big Endian stores the most significant byte first",
      "Little Endian is used for 16-bit processors, Big Endian is used for 32-bit processors",
      "Little Endian is used for 32-bit processors, Big Endian is used for 16-bit processors",
    ],
    correctAnswer: 1,
  },
  {
    question: 'What is the function of the Data Bus in the CPU?',
    options: [
      "To transmit data",
      "To transmit addresses",
      "To control the flow of data",
      "To execute instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between Synchronous and Asynchronous counters?',
    options: [
      "Synchronous counters count simultaneously, Asynchronous counters count sequentially",
      "Synchronous counters count sequentially, Asynchronous counters count simultaneously",
      "Synchronous counters are used for binary numbers, Asynchronous counters are used for decimal numbers",
      "Synchronous counters are used for decimal numbers, Asynchronous counters are used for binary numbers",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Control Unit in the CPU?',
    options: [
      "To control the flow of data",
      "To execute instructions",
      "To store data",
      "To decode instructions",
    ],
    correctAnswer: 0,
  },
  // ... (18 more questions)
  {
    question: 'What is the difference between Interrupt and Trap?',
    options: [
      "Interrupt is hardware-initiated, Trap is software-initiated",
      "Interrupt is software-initiated, Trap is hardware-initiated",
      "Interrupt is used for I/O operations, Trap is used for arithmetic operations",
      "Interrupt is used for arithmetic operations, Trap is used for I/O operations",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Status Register in the CPU?',
    options: [
      "To store flags",
      "To store data",
      "To execute instructions",
      "To decode instructions",
    ],
    correctAnswer: 0,
  },
  // ... (16 more questions)
  {
    question: 'What is the difference between 8-bit and 16-bit microprocessors?',
    options: [
      "8-bit microprocessors can address 256 bytes, 16-bit microprocessors can address 65536 bytes",
      "8-bit microprocessors can address 65536 bytes, 16-bit microprocessors can address 256 bytes",
      "8-bit microprocessors are used for simple applications, 16-bit microprocessors are used for complex applications",
      "8-bit microprocessors are used for complex applications, 16-bit microprocessors are used for simple applications",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Arithmetic Logic Unit (ALU) in the CPU?',
    options: [
      "To perform arithmetic and logical operations",
      "To decode instructions",
      "To execute instructions",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between a Microprocessor and a Digital Signal Processor (DSP)?',
    options: [
      "Microprocessor is used for general-purpose applications, DSP is used for signal processing applications",
      "Microprocessor is used for signal processing applications, DSP is used for general-purpose applications",
      "Microprocessor has a higher clock speed than DSP",
      "DSP has a higher clock speed than Microprocessor",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Memory Management Unit (MMU) in the CPU?',
    options: [
      "To manage memory",
      "To execute instructions",
      "To decode instructions",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between a RISC and CISC processor?',
    options: [
      "RISC has a reduced instruction set, CISC has a complex instruction set",
      "RISC has a complex instruction set, CISC has a reduced instruction set",
      "RISC is used for general-purpose applications, CISC is used for signal processing applications",
      "RISC is used for signal processing applications, CISC is used for general-purpose applications",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Cache Memory in the CPU?',
    options: [
      "To store frequently used data",
      "To store infrequently used data",
      "To execute instructions",
      "To decode instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between a Bus and a Network?',
    options: [
      "Bus is a communication pathway within a computer, Network is a communication pathway between computers",
      "Bus is a communication pathway between computers, Network is a communication pathway within a computer",
      "Bus is used for parallel communication, Network is used for serial communication",
      "Bus is used for serial communication, Network is used for parallel communication",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the function of the Power Management Unit (PMU) in the CPU?',
    options: [
      "To manage power consumption",
      "To execute instructions",
      "To decode instructions",
      "To store data",
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the difference between a 32-bit and a 64-bit microprocessor?',
    options: [
      "32-bit microprocessor can address 4GB of memory, 64-bit microprocessor can address 16GB of memory",
      "32-bit microprocessor can address 16GB of memory, 64-bit microprocessor can address 4GB of memory",
      "32-bit microprocessor is used for simple applications, 64-bit microprocessor is used for complex applications",
      "32-bit microprocessor is used for complex applications, 64-bit microprocessor is used for simple applications",
    ],
    correctAnswer: 0,
  },
];

const mceQuestions1 = [
  // History
  {
    question: "Who coined the term 'Mechatronics'?",
    options: [
      "Tetsuro Mori",
      "Joseph Engelberger",
      "George Devol",
      "Kazuo Watanabe",
    ],
    correctAnswer: 0,
  },
  {
    question: "In what year was the term 'Mechatronics' coined?",
    options: ["1969", "1971", "1973", "1975"],
    correctAnswer: 0,
  },
  {
    question: "Which organization is credited with the first use of 'Mechatronics' in a technical sense?",
    options: [
      "Japan Institute of Electrical Engineers",
      "IEEE",
      "ACM",
      "ISO",
    ],
    correctAnswer: 0,
  },
  {
    question: "The concept of mechatronics emerged during which technological era?",
    options: [
      "Industrial Revolution",
      "Post-World War II",
      "Information Age",
      "Digital Revolution",
    ],
    correctAnswer: 1,
  },
  {
    question: "What was the primary motivation behind the creation of mechatronics?",
    options: [
      "Integration of mechanical systems with electronics",
      "Advancement in hydraulic systems",
      "Development of pure software controls",
      "Improvement in manufacturing processes",
    ],
    correctAnswer: 0,
  },

  // Introduction and Definitions
  {
    question: "Which of the following best defines mechatronics?",
    options: [
      "Integration of mechanical, electronic, and software engineering",
      "Combination of mechanical and electrical engineering only",
      "Focus on electronics and software without mechanical components",
      "Standalone mechanical systems with advanced sensors",
    ],
    correctAnswer: 0,
  },
  {
    question: "Mechatronics primarily combines which three disciplines?",
    options: [
      "Mechanical, Electronic, Software",
      "Mechanical, Chemical, Software",
      "Electronic, Software, Chemical",
      "Mechanical, Electrical, Chemical",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which field is NOT typically included in mechatronics?",
    options: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
      "Software Engineering",
    ],
    correctAnswer: 2,
  },
  {
    question: "The term 'mechatronics' is a blend of which two words?",
    options: [
      "Mechanics and Electronics",
      "Mechanics and Robotics",
      "Electronics and Robotics",
      "Electronics and Mechanics",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following systems is an example of mechatronics?",
    options: [
      "Washing machines",
      "Manual lathes",
      "Simple mechanical clocks",
      "Basic electric fans",
    ],
    correctAnswer: 0,
  },

  // Advantages
  {
    question: "What is one major advantage of mechatronic systems?",
    options: [
      "Increased system efficiency",
      "Reduced complexity",
      "Lower cost compared to traditional systems",
      "Simplified mechanical components",
    ],
    correctAnswer: 0,
  },
  {
    question: "Mechatronics systems can improve which aspect of manufacturing?",
    options: [
      "Precision and automation",
      "Manual labor requirements",
      "Cost of raw materials",
      "Employee training needs",
    ],
    correctAnswer: 0,
  },
  {
    question: "How do mechatronic systems typically affect maintenance?",
    options: [
      "Reduce the need for frequent maintenance",
      "Increase maintenance costs",
      "Make maintenance procedures more complex",
      "Have no impact on maintenance",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a benefit of integrating mechatronics?",
    options: [
      "Enhanced system performance",
      "Increased operational speed",
      "Greater energy efficiency",
      "Simplified mechanical design",
    ],
    correctAnswer: 3,
  },
  {
    question: "In terms of product development, mechatronics can lead to:",
    options: [
      "Faster time-to-market",
      "More manual assembly",
      "Increased development costs",
      "Longer product lifecycle",
    ],
    correctAnswer: 0,
  },

  // Disciplines Involved
  {
    question: "Which discipline focuses on control systems and automation in mechatronics?",
    options: [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Computer Science",
      "Chemical Engineering",
    ],
    correctAnswer: 0,
  },
  {
    question: "What role does mechanical engineering play in mechatronics?",
    options: [
      "Designing physical components and systems",
      "Developing software algorithms",
      "Creating electronic circuits",
      "Handling chemical processes",
    ],
    correctAnswer: 0,
  },
  {
    question: "In mechatronics, which discipline is primarily responsible for developing embedded systems?",
    options: [
      "Computer Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Electrical Engineering",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which discipline in mechatronics deals with the software aspect of system control?",
    options: [
      "Computer Science",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
    ],
    correctAnswer: 0,
  },
  {
    question: "Integration of mechanical, electronic, and software components is a hallmark of which field?",
    options: [
      "Mechatronics",
      "Traditional Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
    ],
    correctAnswer: 0,
  },

  // Elements Involved
  {
    question: "Which element in mechatronics is responsible for system control and decision making?",
    options: [
      "Microprocessors",
      "Actuators",
      "Sensors",
      "DAQ Systems",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of signal conditioning in mechatronics systems?",
    options: [
      "Enhance signal quality for processing",
      "Control mechanical components",
      "Gather data from sensors",
      "Transmit data to software systems",
    ],
    correctAnswer: 0,
  },
  {
    question: "DAQ stands for:",
    options: [
      "Data Acquisition",
      "Digital Analysis Quality",
      "Dynamic Automated Query",
      "Data Analysis Query",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which component is responsible for converting physical signals into electrical signals?",
    options: [
      "Sensors",
      "Actuators",
      "Microprocessors",
      "Signal Conditioners",
    ],
    correctAnswer: 0,
  },
  {
    question: "What role do actuators play in mechatronics systems?",
    options: [
      "Convert electrical signals into physical movement",
      "Process sensor data",
      "Control software operations",
      "Condition input signals",
    ],
    correctAnswer: 0,
  },

  // Mechatronics Application
  {
    question: "In which application area is mechatronics used to enhance precision and automation?",
    options: [
      "Manufacturing",
      "Medical Devices",
      "Space Exploration",
      "All of the Above",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which mechatronics application focuses on autonomous systems and intelligent behavior?",
    options: [
      "Smart Robotics",
      "Transportation",
      "Defense",
      "Medical Devices",
    ],
    correctAnswer: 0,
  },
  {
    question: "In which field does mechatronics contribute to robotic surgical tools?",
    options: [
      "Medical",
      "Manufacturing",
      "Defense",
      "Transportation",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which mechatronics application involves the use of robotics in space missions?",
    options: [
      "Space Exploration",
      "Medical",
      "Manufacturing",
      "Smart Robotics",
    ],
    correctAnswer: 0,
  },
  {
    question: "Mechatronics is used in transportation primarily for:",
    options: [
      "Automated control systems",
      "Chemical processing",
      "Building construction",
      "Medical diagnostics",
    ],
    correctAnswer: 0,
  },

  // Classes of Mechatronics Products
  {
    question: "Class-I mechatronics products are typically characterized by:",
    options: [
      "Simple mechanical-electrical integration",
      "Advanced robotics and automation",
      "Complex software and hardware integration",
      "High level of autonomy and intelligence",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which class of mechatronics products includes advanced intelligent systems?",
    options: [
      "Class-IV",
      "Class-III",
      "Class-II",
      "Class-I",
    ],
    correctAnswer: 0,
  },
  {
    question: "Class-II mechatronics products are known for:",
    options: [
      "Moderate complexity and integration",
      "Basic mechanical-electrical systems",
      "High-level autonomy and learning",
      "Minimal electronics integration",
    ],
    correctAnswer: 0,
  },
  {
    question: "Class-III mechatronics products typically include:",
    options: [
      "Moderate to complex systems with significant software integration",
      "Simple mechanical systems with minimal electronics",
      "Highly autonomous and intelligent systems",
      "Simple manual control systems",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which class of mechatronics products involves the most sophisticated integration of mechanical, electronic, and software systems?",
    options: [
      "Class-IV",
      "Class-III",
      "Class-II",
      "Class-I",
    ],
    correctAnswer: 0,
  },

  // Properties of Mechatronics Systems (Design)
  {
    question: "A key property of mechatronics systems design is:",
    options: [
      "Integration of multidisciplinary engineering principles",
      "Focus on mechanical components only",
      "Ignoring software aspects",
      "Isolated system operation without feedback",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which design aspect is crucial for ensuring flexibility in mechatronics systems?",
    options: [
      "Modular design",
      "Single-purpose components",
      "Fixed configuration",
      "High reliance on mechanical parts",
    ],
    correctAnswer: 0,
  },
  {
    question: "In mechatronics system design, what is the purpose of feedback mechanisms?",
    options: [
      "To enhance system accuracy and control",
      "To simplify the system architecture",
      "To eliminate the need for sensors",
      "To reduce the number of actuators required",
    ],
    correctAnswer: 0,
  },
  {
    question: "What design approach is often used to improve reliability and maintainability in mechatronics systems?",
    options: [
      "Redundancy and fault tolerance",
      "Single-use components",
      "Limited integration of subsystems",
      "Minimal testing procedures",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which aspect of design ensures that mechatronics systems are adaptable to various conditions?",
    options: [
      "Scalability",
      "Fixed design parameters",
      "Manual operation only",
      "Non-interchangeable components",
    ],
    correctAnswer: 0,
  },

  // Components of Mechatronics Systems
  {
    question: "Which component of a mechatronics system is responsible for interpreting sensor data?",
    options: [
      "Microprocessors",
      "Actuators",
      "Signal Conditioners",
      "Software Control",
    ],
    correctAnswer: 0,
  },
  {
    question: "Signal conditioning in mechatronics systems is primarily used to:",
    options: [
      "Prepare data for accurate processing",
      "Control mechanical movements",
      "Develop software algorithms",
      "Transmit data over long distances",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the role of software control in mechatronics systems?",
    options: [
      "To provide instructions and manage operations",
      "To convert physical signals into electrical ones",
      "To physically manipulate components",
      "To collect and store data from sensors",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which component is essential for interfacing and controlling the operation of mechanical parts in mechatronics systems?",
    options: [
      "Actuators",
      "Sensors",
      "Signal Conditioners",
      "Microprocessors",
    ],
    correctAnswer: 0,
  },
  {
    question: "Testing and instrumentation in mechatronics systems are crucial for:",
    options: [
      "Verifying system performance and reliability",
      "Reducing the number of sensors",
      "Simplifying software algorithms",
      "Eliminating the need for actuators",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which component is primarily responsible for controlling data acquisition in a mechatronics system?",
    options: [
      "DAQ Systems",
      "Signal Conditioners",
      "Microprocessors",
      "Actuators",
    ],
    correctAnswer: 0,
  },
  {
    question: "What function does a microprocessor serve in a mechatronics system?",
    options: [
      "Executing control algorithms and processing data",
      "Directly converting physical signals",
      "Modifying the physical structure of components",
      "Enhancing mechanical performance",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which component is responsible for changing the physical state of a system based on electronic control signals?",
    options: [
      "Actuators",
      "Sensors",
      "Signal Conditioners",
      "Microprocessors",
    ],
    correctAnswer: 0,
  },
  {
    question: "In a mechatronics system, software control is used to:",
    options: [
      "Manage and adjust system operations based on data inputs",
      "Physically interact with the environment",
      "Condition signals from sensors",
      "Transmit physical movements to the system",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which component is essential for converting analog sensor signals into digital data for processing?",
    options: [
      "Signal Conditioners",
      "Actuators",
      "DAQ Systems",
      "Microprocessors",
    ],
    correctAnswer: 0,
  },
  {
    question: "Testing in mechatronics systems is performed to ensure:",
    options: [
      "System reliability and performance standards",
      "Lower costs of materials",
      "Simplified software complexity",
      "Manual operational capabilities",
    ],
    correctAnswer: 0,
  },

    // History (continued)
    {
      question: "Who is considered one of the pioneers of mechatronics in industrial robotics?",
      options: [
        "Joseph Engelberger",
        "Kazuo Watanabe",
        "Tetsuro Mori",
        "George Devol",
      ],
      correctAnswer: 0,
    },
    {
      question: "In which decade did mechatronics start gaining significant recognition?",
      options: [
        "1970s",
        "1980s",
        "1990s",
        "2000s",
      ],
      correctAnswer: 0,
    },
  
    // Introduction and Definitions (continued)
    {
      question: "Mechatronics is often used to describe systems that:",
      options: [
        "Integrate mechanical, electronic, and computational elements",
        "Focus solely on mechanical design",
        "Operate without any electronic components",
        "Depend exclusively on manual control",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is NOT a common application of mechatronics?",
      options: [
        "Basic manual tools",
        "Automated production lines",
        "Robotic surgery",
        "Smart home devices",
      ],
      correctAnswer: 0,
    },
  
    // Advantages (continued)
    {
      question: "Which of the following advantages is commonly associated with mechatronics systems in consumer products?",
      options: [
        "Enhanced user interface and functionality",
        "Decreased overall system complexity",
        "Reduced integration of mechanical and electronic components",
        "Elimination of software requirements",
      ],
      correctAnswer: 0,
    },
    {
      question: "One of the key advantages of mechatronics systems in automation is:",
      options: [
        "Increased accuracy and efficiency",
        "Higher manual intervention",
        "Increased operational cost",
        "Complex maintenance procedures",
      ],
      correctAnswer: 0,
    },
  
    // Disciplines Involved (continued)
    {
      question: "Which discipline in mechatronics is primarily concerned with real-time data processing?",
      options: [
        "Computer Science",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which engineering discipline contributes to the development of sensors and instrumentation in mechatronics?",
      options: [
        "Electrical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Architectural Engineering",
      ],
      correctAnswer: 0,
    },
  
    // Elements Involved (continued)
    {
      question: "Which element in mechatronics systems is used to interface between mechanical components and software?",
      options: [
        "Microprocessors",
        "Sensors",
        "Actuators",
        "DAQ Systems",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which component in a mechatronics system provides real-time feedback for system adjustments?",
      options: [
        "Sensors",
        "Actuators",
        "Signal Conditioners",
        "Microprocessors",
      ],
      correctAnswer: 0,
    },
  
    // Mechatronics Application (continued)
    {
      question: "In which area does mechatronics contribute to autonomous vehicle technology?",
      options: [
        "Transportation",
        "Manufacturing",
        "Medical",
        "Defense",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which application involves the use of mechatronics for precision in sports equipment?",
      options: [
        "Sports",
        "Manufacturing",
        "Medical",
        "Space Exploration",
      ],
      correctAnswer: 0,
    },
  
    // Classes of Mechatronics Products (continued)
    {
      question: "Class-I mechatronics products typically involve:",
      options: [
        "Basic mechanical-electrical integration",
        "Advanced robotics with high software complexity",
        "High-level autonomous systems",
        "Complex integration of multiple subsystems",
      ],
      correctAnswer: 0,
    },
    {
      question: "Class-IV mechatronics products are characterized by:",
      options: [
        "Highly autonomous and intelligent systems",
        "Simple mechanical-electrical integration",
        "Low-level software integration",
        "Basic control systems with minimal electronics",
      ],
      correctAnswer: 0,
    },
  
    // Properties of Mechatronics Systems (Design) (continued)
    {
      question: "Which design property is essential for ensuring mechatronics systems are future-proof?",
      options: [
        "Scalability and upgradability",
        "Fixed and rigid architecture",
        "Minimal integration of new technologies",
        "Use of outdated components",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the primary goal of modular design in mechatronics systems?",
      options: [
        "Facilitates upgrades and maintenance",
        "Reduces system complexity",
        "Increases physical size of components",
        "Simplifies system integration",
      ],
      correctAnswer: 0,
    },
  
    // Components of Mechatronics Systems (continued)
    {
      question: "Which component in mechatronics systems is primarily responsible for processing data from sensors and controlling actuators?",
      options: [
        "Microprocessors",
        "Actuators",
        "Signal Conditioners",
        "DAQ Systems",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which component in a mechatronics system helps to ensure data is accurately collected from various sensors?",
      options: [
        "DAQ Systems",
        "Signal Conditioners",
        "Actuators",
        "Microprocessors",
      ],
      correctAnswer: 0,
    },
    {
      question: "What role does software play in testing mechatronics systems?",
      options: [
        "Automates testing procedures and analysis",
        "Physically manipulates components",
        "Conditions sensor signals",
        "Directly controls mechanical movements",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which component is essential for providing a user interface in mechatronics systems?",
      options: [
        "Software Control",
        "Actuators",
        "Signal Conditioners",
        "Sensors",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the main function of signal conditioners in mechatronics systems?",
      options: [
        "Prepare and adjust sensor signals for accurate data acquisition",
        "Control the mechanical components",
        "Process and execute software commands",
        "Directly interface with user inputs",
      ],
      correctAnswer: 0,
    },
  
];


