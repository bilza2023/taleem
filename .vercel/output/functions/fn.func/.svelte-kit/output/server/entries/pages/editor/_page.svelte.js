import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { r as registerSlideTypes, S as SlideObject, T as ToolbarDiv } from "../../../chunks/slideObject.js";
import "howler";
import "../../../chunks/client.js";
import "katex";
import { O as OpenFileButton } from "../../../chunks/OpenFileButton.js";
const NavBtn2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clk } = $$props;
  let { icon = "🧪" } = $$props;
  let { title = "Menu" } = $$props;
  let { bgColor = "bg-gray-800" } = $$props;
  if ($$props.clk === void 0 && $$bindings.clk && clk !== void 0) $$bindings.clk(clk);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  return `<div${add_attribute("class", `w-16 ${bgColor} rounded-md`, 0)}><button${add_attribute("class", `w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-700 active:bg-gray-900`, 0)}><span class="text-md">${escape(icon)}</span> <span class="text-xs font-medium text-white">${escape(title)}</span></button></div>`;
});
class Icons {
  static ADD = " ➕";
  static ANGLE = " ∠";
  static BALANCE = "⚖️";
  static BAZIER = "🔷";
  static BARCHART = "📊";
  static BOOK = "📘";
  static BOOKS = "📚";
  static BUS = "🚌";
  static BULB = "💡";
  static CAR = "🚗";
  static CANVAS = "🖼️";
  static CHARTUP = "📈";
  static CHARTDOWN = "📉";
  static CIRCLE = "⭕";
  static CLOCK = "⏱️";
  static COG = "⚙";
  static COMPUTER = "💻";
  static COPY = "📋";
  static CODE = "📟";
  static COLD = "🥶";
  static CROSS = "❌";
  static CLIP = "📎";
  static CLONE = "🁜";
  static DARK = "🌃";
  static DEL = "🗑️";
  static DOOR = "🚪";
  static DOT = "🔘";
  static DOWN = "↓";
  static EMAIL = "📧";
  static EYE = "👁️";
  static EYES = "👀";
  static EXPLOSION = "💥";
  static ELLIPSE = "🥚";
  static FILESBOX = "🗃️";
  static FLOWER = "🌸";
  static FROWNFACE = "☹️";
  static HAMMER_AND_WRENCH = "🛠️";
  static HEART = "❤️";
  static HIDE = "🙈";
  static HOT = "🔥";
  static HOURGLASS = "⌛";
  static HOUSE = "🏠";
  static ICE = "🧊";
  static KEY = "🔑";
  static LOCK = "🔒";
  static LEFT = "←";
  static LINE = "➖";
  static MAGNIFYING_GLASS = "🔍";
  static MANAGER = "💼";
  static MCQ = "🔱";
  static MESSAGE = "📨";
  static MICROSCOPE = "🔬";
  static NET = "🌐";
  static NOTES = "📋";
  static NUMBER = "❶";
  static PALETTE = "🎨";
  static PENCIL = " ✏️";
  static PHONE = "📱";
  static QUESTIONMARK = "❓";
  static RULER = "📏";
  static RIGHT = "→";
  static RECYCLE = "♻️";
  static RECTANGLE = "▭";
  static RUN = "🏃";
  static ROCKET = "🚀";
  static SAVE = "💾";
  static SMILYFACE = "😊";
  static SPEECH = "🗣️";
  static SPEAKER = "📢";
  static NOSPEAKER = "🔇";
  static STAIRS = "🪜";
  static STAR = "⭐";
  static SHEEP = "🐑";
  static START = "▶";
  static STOP = "||";
  static STUDENT = "👨‍🎓";
  static SPRITE = "🕹️";
  static STUDENTCAP = "🎓";
  static SUN = "☀️";
  static SUNRISE = "🌅";
  static SUBTRACT = "➖";
  static TAG = "🏷️";
  static TEAM = "🧑‍🤝‍🧑";
  static TICK = "✔️";
  static TEMPRATURE = "🌡️";
  static TEMPLATE = "📜";
  static TEST = "🧪";
  static TEXT = "📃";
  static TEXT2 = "¶";
  static THUMBSUP = "👍";
  static THUMBSDOWN = "👎";
  static TRIANGE = "🔺";
  static TRIANGULAR_RULER = "📐";
  static TREE = "🌳";
  static TV = "📺";
  static WRENCH = "🔧";
  static UP = "↑";
  static MONEYBAG = "💰";
  static MAGNET = "🧲";
  static MAGICWAND = "🪄";
  static MAP = "🗺️";
  static MEDAL = "🎖️";
  static MEGAPHONE = "📣";
  static MICROPHONE = "🎤";
  static MILK = "🥛";
  static MOON = "🌙";
  static MOUNTAIN = "⛰️";
  static MUSIC = "🎵";
  static NETWORK = "🔗";
  static NEWSPAPER = "📰";
  static NOTEBOOK = "📓";
  static OIL = "🛢️";
  static PANDA = "🐼";
  static PARACHUTE = "🪂";
  static PEACE = "☮️";
  static PENGUIN = "🐧";
  static PET = "🐾";
  static PIGGYBANK = "🐖";
  static PINEAPPLE = "🍍";
  static PIZZA = "🍕";
  static PLANET = "🪐";
  static PRINTER = "🖨️";
  static PUZZLE = "🧩";
  static QUILL = "🖋️";
  static RAINBOW = "🌈";
  static RECORD = "🎙️";
  static ROSE = "🌹";
  static SAILBOAT = "⛵";
  static SATELLITE = "🛰️";
  static SCISSORS = "✂️";
  static SCROLL = "📜";
  static SHIELD = "🛡️";
  static SNOWFLAKE = "❄️";
  static SQUIRREL = "🐿️";
  static SUITCASE = "💼";
  static SUNGLASSES = "🕶️";
  static SURFBOARD = "🏄‍♂️";
  static TADA = "🎉";
  static TEA = "🍵";
  static TELESCOPE = "🔭";
  static TENT = "⛺";
  static TOOLS = "🛠️";
  static TORNADO = "🌪️";
  static TROPHY = "🏆";
  static UMBRELLA = "☂️";
  static UNLOCK = "🔓";
  static VAN = "🚐";
  static VIAL = "🧪";
  static VIKING = "🛡️";
  static WALLET = "👛";
  static WATERMELON = "🍉";
  static WHALE = "🐋";
  static WIFI = "📶";
  static WIND = "💨";
  static WOLF = "🐺";
  static YIN_YANG = "☯️";
  static AIRPLANE = "✈️";
  static ALARM = "⏰";
  static APPLE = "🍎";
  static AVOCADO = "🥑";
  static BALLOON = "🎈";
  static BANANA = "🍌";
  static BATTERY = "🔋";
  static BEACH = "🏖️";
  static BELL = "🔔";
  static BICYCLE = "🚲";
  static BIRD = "🐦";
  static BIRTHDAY_CAKE = "🎂";
  static BOMB = "💣";
  static BOOKMARK = "🔖";
  static BOW_AND_ARROW = "🏹";
  static BRIEFCASE2 = "👜";
  static BROOM = "🧹";
  static CACTUS = "🌵";
  static CALCULATOR = "📟";
  static CAMERA = "📷";
  static CANDY = "🍬";
  static CANDLE = "🕯️";
  static CARD = "💳";
  static CARROT = "🥕";
  static CAT = "🐱";
  static CHAMPAGNE = "🍾";
  static CHECK_MARK = "✅";
  static CHERRY = "🍒";
  static CHEESE = "🧀";
  static CHESS = "♟️";
  static CHICKEN = "🐔";
  static CLOUD = "☁️";
  static CLAPPERBOARD = "🎬";
  static COOKIE = "🍪";
  static CROWN = "👑";
  static CUPCAKE = "🧁";
  static CUTLERY = "🍴";
  static DAGGER = "🗡️";
  static DIAMOND = "💎";
  static DRUM = "🥁";
  static DUMBBELL = "🏋️";
  static ELEPHANT = "🐘";
  static ENVELOPE = "✉️";
  static FIREWORKS = "🎆";
  static FLAG = "🚩";
  static FLAME = "🔥";
  static FOOTBALL = "⚽";
  static FRIES = "🍟";
  static GEAR2 = "⚙️";
  static GIFT = "🎁";
  static GLOBE = "🌍";
  static GUITAR = "🎸";
  static HANDSHAKE = "🤝";
  static HELICOPTER = "🚁";
  static HONEY = "🍯";
  static HURRICANE = "🌀";
  static ICE_CREAM = "🍦";
  static JAM = "🍓";
  static JUICE = "🧃";
  static KITE = "🪁";
  static LAMP = "💡";
  static LEMONADE = "🍋";
  static LIGHTNING = "⚡";
  static LOCKED_BOOK = "🔏";
  static LOUDSPEAKER = "📢";
  static LUNCHBOX = "🍱";
  static MAGNETIC_TAPE = "📼";
  static MAPLE_LEAF = "🍁";
  static MASK = "🎭";
  static MEDICINE = "💊";
  static METEOR = "☄️";
  static MOLECULE = "🧬";
  static MOUSE = "🐭";
  static MUSHROOM = "🍄";
  static NUT_AND_BOLT = "🔩";
  static OCTOPUS = "🐙";
  static ORANGE = "🍊";
  static OWL = "🦉";
  static PAW_PRINT = "🐾";
  static PENCIL2 = "🖊️";
  static PILLOW = "🛏️";
  static PINE_TREE = "🌲";
  static POPCORN = "🍿";
  static RADAR = "📡";
  static ROBOT = "🤖";
  static RUBY = "💍";
  static SANDWICH = "🥪";
  static SATURN = "🪐";
  static SEA_SHELL = "🐚";
  static SHARK = "🦈";
  static SHOPPING_BAG = "🛍️";
  static SKULL = "💀";
  static SNORKEL = "🤿";
  static SPIDER = "🕷️";
  static SQUID = "🦑";
  static STETHOSCOPE = "🩺";
  static SWIMMING_POOL = "🏊";
  static SYRINGE = "💉";
  static TOOLBOX = "🧰";
  static TRAFFIC_LIGHT = "🚦";
  static TRAIN = "🚆";
  static TREE2 = "🌴";
  static TRUCK = "🚚";
  static VAMPIRE = "🧛";
  static WATERMELON_SLICE = "🍉";
  static ABACUS = "🧮";
  static ALIEN = "👽";
  static AMPHORA = "🏺";
  static ANCHOR = "⚓";
  static ANT = "🐜";
  static ASTRONAUT = "👨‍🚀";
  static ATOM = "⚛️";
  static AXE = "🪓";
  static BACKPACK = "🎒";
  static BADMINTON = "🏸";
  static BAGEL = "🥯";
  static BAGUETTE = "🥖";
  static BAMBOO = "🎍";
  static BANJO = "🪕";
  static BASKET = "🧺";
  static BAT = "🦇";
  static BEAVER = "🦫";
  static BENTO = "🍱";
  static BIOHAZARD = "☣️";
  static BLUEBERRY = "🫐";
  static BOAR = "🐗";
  static BOBSLED = "🛷";
  static BONE = "🦴";
  static BONSAI = "🎍";
  static BOOMERANG = "🪃";
  static BRAIN = "🧠";
  static BREAD = "🍞";
  static BRICK = "🧱";
  static BRIDGE = "🌉";
  static BROCCOLI = "🥦";
  static BROOM_AND_BALL = "🧹🏀";
  static BUBBLE_TEA = "🧋";
  static BUCKET = "🪣";
  static BUTTERFLY = "🦋";
  static CACTUS_IN_POT = "🌵🪴";
  static CALENDAR = "📅";
  static CAMEL = "🐪";
  static CANOE = "🛶";
  static CASTLE = "🏰";
  static CHAINSAW = "🪚";
  static CHAIR = "🪑";
  static CHESTNUT = "🌰";
  static CHIPMUNK = "🐿️";
  static CHOCOLATE_BAR = "🍫";
  static CHOPSTICKS = "🥢";
  static CLAMP = "🗜️";
  static CLOVER = "🍀";
  static COCONUT = "🥥";
  static COFFIN = "⚰️";
  static COIN = "🪙";
  static COMET = "☄️";
  static COMPASS = "🧭";
  static CORAL = "🪸";
  static CORN = "🌽";
  static CRAYON = "🖍️";
  static CRICKET = "🦗";
  static CROCODILE = "🐊";
  static CROISSANT = "🥐";
  static CRYSTAL_BALL = "🔮";
  static CUCUMBER = "🥒";
  static CUPID = "💘";
  static CURLING_STONE = "🥌";
  static CYCLONE = "🌀";
  static DANGO = "🍡";
  static DART = "🎯";
  static DEER = "🦌";
  static DESKTOP = "🖥️";
  static DICE = "🎲";
  static DINOSAUR = "🦕";
  static DIVIDER = "〰️";
  static DNA = "🧬";
  static DONUT = "🍩";
  static DOVE = "🕊️";
  static DRAGON = "🐉";
  static DRILL = "🛠️";
  static DROPLET = "💧";
  static DUCK = "🦆";
  static DUMPLING = "🥟";
  static EAR = "👂";
  static EGGPLANT = "🍆";
  static ELF = "🧝";
  static EVERGREEN = "🌲";
  static FAIRY = "🧚";
  static FALLEN_LEAF = "🍂";
  static FEATHER = "🪶";
  static FERRIS_WHEEL = "🎡";
  static FIRE_EXTINGUISHER = "🧯";
  static FIRECRACKER = "🧨";
  static FISHING_POLE = "🎣";
  static FLEUR_DE_LIS = "⚜️";
  static FLYING_DISC = "🥏";
  static FLYING_SAUCER = "🛸";
  static FOG = "🌫️";
  static FONDUE = "🫕";
  static FOOTPRINTS = "👣";
  static FOUNTAIN = "⛲";
  static FOX = "🦊";
  static FROG = "🐸";
  static GARLIC = "🧄";
  static GENIE = "🧞";
  static GERM = "🦠";
  static GHOST = "👻";
  static GIRAFFE = "🦒";
  static GLOVES = "🧤";
  static GOAT = "🐐";
  static GORILLA = "🦍";
  static GRAPES = "🍇";
  static GRASSHOPPER = "🦗";
  static HAMSA = "🧿";
  static HARMONICA = "🎹";
  static HEADSTONE = "🪦";
  static HEDGEHOG = "🦔";
  static HERB = "🌿";
  static HIBISCUS = "🌺";
  static HIPPOPOTAMUS = "🦛";
  static HOOK = "🪝";
  static HOURGLASS_DONE = "⌛";
  static IGLOO = "�iglq";
  static INFINITY = "♾️";
  static JELLYFISH = "🪼";
  static JIGSAW = "🧩";
  static JOYSTICK = "🕹️";
  static KANGAROO = "🦘";
  static KIWI = "🥝";
  static KNOT = "🪢";
  static KOALA = "🐨";
  static LABCOAT = "🥼";
  static LADDER = "🪜";
  static LADYBUG = "🐞";
  static LASSO = "🪃";
  static LEMON = "🍋";
  static LEOPARD = "🐆";
  static LEVITATE = "🕴️";
  static LIGHT_BULB = "💡";
  static LIZARD = "🦎";
  static LLAMA = "🦙";
  static LOBSTER = "🦞";
  static LOLLIPOP = "🍭";
  static LOTUS = "🪷";
  static LUGGAGE = "🧳";
  static LUNGS = "🫁";
  static MAGE = "🧙";
  static MANGO = "🥭";
  static MANTIS = "🦗";
  static MICROBE = "🦠";
  static MIRROR = "🪞";
  static MOAI = "🗿";
  static MOLE = "🐀";
  static MONKEY = "🐒";
  static MOSQUITO = "🦟";
  static MOTOR_SCOOTER = "🛵";
  static MOTORCYCLE = "🏍️";
  static MOUNTAIN_CABLEWAY = "🚠";
  static NAZAR_AMULET = "🧿";
  static NECKTIE = "👔";
  static NESTING_DOLLS = "🪆";
  static NINJA = "🥷";
  static ONION = "🧅";
  static ORANGUTAN = "🦧";
  static OTTER = "🦦";
  static OYSTER = "🦪";
  static PACKAGE = "📦";
  static PAINTBRUSH = "🖌️";
  static PALM_TREE = "🌴";
  static PANCAKES = "🥞";
  static PAPERCLIP = "📎";
  static PARROT = "🦜";
  static PEACH = "🍑";
  static PEACOCK = "🦚";
  static PEANUTS = "🥜";
  static PEARL = "🫠";
  static PEAR = "🍐";
  static PENCIL_AND_PAPER = "📝";
  static PEPPER = "🌶️";
  static PETRI_DISH = "🧫";
  static PICKAXE = "⛏️";
  static PIEZO = "🔊";
  static PIGEON = "🕊️";
  static PILL = "💊";
  static PINATA = "🪅";
  static PINCH = "🤏";
  static PINEAPPLE_SLICE = "🍍";
  static PING_PONG = "🏓";
  static PIRATE = "🏴‍☠️";
  static PLANT_IN_POT = "🪴";
  static PLATYPUS = "🦡";
  static PLUNGER = "🪠";
  static POPCORN_BUCKET = "🍿";
  static POTATO = "🥔";
  static PRETZEL = "🥨";
  static PROTOZOA = "🦠";
  static PUMPKIN = "🎃";
  static PUSHPIN = "📌";
  static RABBIT = "🐰";
  static RACCOON = "🦝";
  static RADIO = "📻";
  static RAIL_CAR = "🚃";
  static RAINBOW_FLAG = "🏳️‍🌈";
  static RAMEN = "🍜";
  static RAT = "🐀";
  static RECEIPT = "🧾";
  static RHINOCEROS = "🦏";
  static RICE = "🍚";
  static RING_BUOY = "🛟";
  static ROCK = "🪨";
  static ROOSTER = "🐓";
  static SAFETY_PIN = "🧷";
  static SAFETY_VEST = "🦺";
  static SALT = "🧂";
  static SANDAL = "👡";
  static SATELLITE_ANTENNA = "📡";
  static SAUROPOD = "🦕";
  static SCALES = "⚖️";
  static SCARF = "🧣";
  static SCORPION = "🦂";
  static SCREWDRIVER = "🪛";
  static SEAL = "🦭";
  static SEEDLING = "🌱";
  static SHAMROCK = "☘️";
  static SHRIMP = "🦐";
  static SKUNK = "🦨";
  static SLED = "🛷";
  static SLOTH = "🦥";
  static SNAIL = "🐌";
  static SNAKE = "🐍";
  static SNOWBOARDER = "🏂";
  static SNOWMAN = "☃️";
  static SOAP = "🧼";
  static SOCCER_BALL = "⚽";
  static SOCKS = "🧦";
  static SOFTBALL = "🥎";
  static SPADE = "♠️";
  static SPAGHETTI = "🍝";
  static SPARKLES = "✨";
  static SPARKLER = "🎇";
  static SPARKLING_HEART = "💖";
  static SPOON = "🥄";
  static SPORTS_MEDAL = "🏅";
  static STACKED_BOOKS = "📚";
  static STAPLER = "🗄️";
  static STOPWATCH = "⏱️";
  static STORM = "🌩️";
  static STRAWBERRY = "🍓";
  static SUNFLOWER = "🌻";
  static SUSHI = "🍣";
  static SWAN = "🦢";
  static SWEAT_DROPLETS = "💦";
  static T_REX = "🦖";
  static TACO = "🌮";
  static TAKEOUT_BOX = "🥡";
  static TAMALE = "🫔";
  static TANGERINE = "🍊";
  static TAXI = "🚕";
  static TEAPOT = "🫖";
  static TEDDY_BEAR = "🧸";
  static TENNIS = "🎾";
  static THERMOMETER = "🌡️";
  static THONG_SANDAL = "🩴";
  static THREAD = "🧵";
  static TICKET = "🎟️";
  static TIGER = "🐯";
  static TOILET = "🚽";
  static TOMATO = "🍅";
  static TONGUE = "👅";
  static TRACTOR = "🚜";
  static TROLLEYBUS = "🚎";
  static TSHIRT = "👕";
  static TULIP = "🌷";
  static TURKEY = "🦃";
  static TURTLE = "🐢";
  static UNICORN = "🦄";
  static VIOLIN = "🎻";
  static VOLLEYBALL = "🏐";
  static WAFFLE = "🧇";
  static WASTEBASKET = "🗑️";
  static WATCH = "⌚";
  static WATER_BUFFALO = "🐃";
  static WATER_POLO = "🤽";
  static WATER_WAVE = "🌊";
  static WATERFALL = "🧗‍♀️";
  static WINDMILL = "🏰";
  static WINDOW = "🪟";
  static WINE_GLASS = "🍷";
  static WOOD = "🪵";
  static WORM = "🪱";
  static WREATH = "🎍";
  static WRITING_HAND = "✍️";
  static X_RAY = "🦴";
  static YARN = "🧶";
  static YO_YO = "🪀";
  static ZEBRA = "🦓";
  static ZOMBIE = "🧟";
  ////////////////////////
}
const SoundButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { soundFile = null } = $$props;
  let { currentTime = 0 } = $$props;
  let { isBlob = false } = $$props;
  if ($$props.soundFile === void 0 && $$bindings.soundFile && soundFile !== void 0) $$bindings.soundFile(soundFile);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  if ($$props.isBlob === void 0 && $$bindings.isBlob && isBlob !== void 0) $$bindings.isBlob(isBlob);
  return `<div class="flex justify-center items-center text-xs bg-green-700 p-1 rounded-md">${` <div class="text-lg">${validate_component(NavBtn2, "NavBtn2").$$render($$result, { title: "No Sound", icon: Icons.NOSPEAKER }, {}, {})}</div>`}</div>`;
});
const NewSlidesDlg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { addNew } = $$props;
  if ($$props.addNew === void 0 && $$bindings.addNew && addNew !== void 0) $$bindings.addNew(addNew);
  return `<div class="flex flex-wrap bg-gray-900 border-2 border-white gap-2 p-1 rounded-md">    ${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "Eqs",
      icon: Icons.NOTES,
      clk: () => addNew("Eqs")
    },
    {},
    {}
  )}  ${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "Canvas",
      icon: Icons.TV,
      clk: () => addNew("canvas")
    },
    {},
    {}
  )} ${validate_component(NavBtn2, "NavBtn2").$$render(
    $$result,
    {
      title: "blinkingMessage",
      icon: Icons.TV,
      clk: () => addNew("blinkingMessage")
    },
    {},
    {}
  )} </div>`;
});
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show } = $$props;
  let { slides } = $$props;
  let { addNew } = $$props;
  let { isBlob } = $$props;
  let { showSidePanel } = $$props;
  let { currentSlideIndex } = $$props;
  let { copySlide: copySlide2 } = $$props;
  let { pasteSlide: pasteSlide2 } = $$props;
  let { cloneSlide: cloneSlide2 } = $$props;
  let { deleteSlide: deleteSlide2 } = $$props;
  let { shiftTime } = $$props;
  let { soundFile = null } = $$props;
  let { currentTime = 0 } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0) $$bindings.slides(slides);
  if ($$props.addNew === void 0 && $$bindings.addNew && addNew !== void 0) $$bindings.addNew(addNew);
  if ($$props.isBlob === void 0 && $$bindings.isBlob && isBlob !== void 0) $$bindings.isBlob(isBlob);
  if ($$props.showSidePanel === void 0 && $$bindings.showSidePanel && showSidePanel !== void 0) $$bindings.showSidePanel(showSidePanel);
  if ($$props.currentSlideIndex === void 0 && $$bindings.currentSlideIndex && currentSlideIndex !== void 0) $$bindings.currentSlideIndex(currentSlideIndex);
  if ($$props.copySlide === void 0 && $$bindings.copySlide && copySlide2 !== void 0) $$bindings.copySlide(copySlide2);
  if ($$props.pasteSlide === void 0 && $$bindings.pasteSlide && pasteSlide2 !== void 0) $$bindings.pasteSlide(pasteSlide2);
  if ($$props.cloneSlide === void 0 && $$bindings.cloneSlide && cloneSlide2 !== void 0) $$bindings.cloneSlide(cloneSlide2);
  if ($$props.deleteSlide === void 0 && $$bindings.deleteSlide && deleteSlide2 !== void 0) $$bindings.deleteSlide(deleteSlide2);
  if ($$props.shiftTime === void 0 && $$bindings.shiftTime && shiftTime !== void 0) $$bindings.shiftTime(shiftTime);
  if ($$props.soundFile === void 0 && $$bindings.soundFile && soundFile !== void 0) $$bindings.soundFile(soundFile);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0) $$bindings.currentTime(currentTime);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex justify-between bg-gray-700 m-0 p-0 items-center gap-1 pt-2 px-2 "><div class="flex justify-start items-center gap-1">${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "SP",
        icon: Icons.DOOR,
        clk: () => showSidePanel = !showSidePanel
      },
      {},
      {}
    )} ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Slide",
        icon: Icons.BULB,
        clk: () => show = !show
      },
      {},
      {}
    )} ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Save",
        icon: "🖨️",
        clk: () => {
          console.log("export const presentationData = " + JSON.stringify(slides));
        }
      },
      {},
      {}
    )} ${soundFile ? `${validate_component(SoundButtons, "SoundButtons").$$render(
      $$result,
      { soundFile, isBlob, currentTime },
      {
        currentTime: ($$value) => {
          currentTime = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> <div class="flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500 rounded-md text-xs mr-1">${slides.length > 0 ? `<span class="text-xs" data-svelte-h="svelte-114xiwa">Start</span> <div class="bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white" type="number">${escape(slides[currentSlideIndex].startTime)}</div> <span class="text-xs" data-svelte-h="svelte-1a3n0d9">End</span> <input class="bg-gray-500 text-white p-0 px-1 text-center m-0 rounded-md border-2 border-white text-center " type="number"${add_attribute("value", slides[currentSlideIndex].endTime, 0)} min="0" max="3600">  ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Clone",
        icon: Icons.SHEEP,
        clk: cloneSlide2
      },
      {},
      {}
    )} ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Copy",
        icon: Icons.COPY,
        clk: copySlide2
      },
      {},
      {}
    )} ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Paste",
        icon: "🖨️",
        clk: pasteSlide2
      },
      {},
      {}
    )} ${validate_component(NavBtn2, "NavBtn2").$$render(
      $$result,
      {
        title: "Delete",
        icon: Icons.WASTEBASKET,
        clk: deleteSlide2
      },
      {},
      {}
    )}` : ``}</div></div> ${show ? `${validate_component(NewSlidesDlg, "NewSlidesDlg").$$render($$result, { addNew }, {}, {})}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
function updateSlideTimings(slides) {
  return slides.map((slide, index) => {
    const startTime = index === 0 ? 0 : slides[index - 1].endTime;
    const duration = slide.endTime - slide.startTime;
    return {
      ...slide,
      startTime,
      endTime: startTime + duration
    };
  });
}
function moveSlide(slides, index, direction) {
  const newIndex = direction === "up" ? index - 1 : index + 1;
  if (newIndex < 0 || newIndex >= slides.length) {
    return slides;
  }
  const newSlides = [...slides];
  [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
  return updateSlideTimings(newSlides);
}
function deleteSlide(slides, currentIndex) {
  if (slides.length <= 1) {
    return { slides: [], newIndex: 0 };
  }
  const newSlides = slides.filter((_, i) => i !== currentIndex);
  const newIndex = Math.min(currentIndex, newSlides.length - 1);
  return {
    slides: updateSlideTimings(newSlides),
    newIndex
  };
}
function copySlide(slide) {
  if (!slide) return false;
  try {
    localStorage.setItem("copiedSlide", JSON.stringify(slide));
    return true;
  } catch (error) {
    console.error("Failed to copy slide:", error);
    return false;
  }
}
function pasteSlide(slides) {
  try {
    const savedSlide = localStorage.getItem("copiedSlide");
    if (!savedSlide) {
      return { success: false };
    }
    const clipboardSlide = JSON.parse(savedSlide);
    const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
    const pastedSlide = {
      ...clipboardSlide,
      startTime,
      endTime: startTime + 10
    };
    return {
      success: true,
      newSlides: updateSlideTimings([...slides, pastedSlide])
    };
  } catch (error) {
    console.error("Failed to paste slide:", error);
    return { success: false };
  }
}
function cloneSlide(currentSlide, slides) {
  if (!currentSlide) {
    return { success: false };
  }
  try {
    const clonedSlide = JSON.parse(JSON.stringify(currentSlide));
    const newSlides = [...slides, clonedSlide];
    return {
      success: true,
      newSlides: updateSlideTimings(newSlides)
    };
  } catch (error) {
    console.error("Failed to clone slide:", error);
    return { success: false };
  }
}
const css = {
  code: ".stack-panel-item.svelte-h7rznk{text-align:center;border:2px solid #737c89;border-radius:10px;margin:1px;transition:background-color 0.3s}.stack-panel-item.selected.svelte-h7rznk{border-color:white;background-color:rgba(255, 0, 0, 0.1)}.stack-panel-item.svelte-h7rznk:hover{background-color:rgba(255, 0, 0, 0.2)}.stack-panel-selector.svelte-h7rznk{background-color:#4a5568;color:white;padding:0.25rem;border-radius:0.25rem;font-size:0.75rem;margin:0.25rem}.stack-panel-actions.svelte-h7rznk{display:flex;justify-content:center;margin-top:0.25rem}.stack-panel-move-buttons.svelte-h7rznk{display:flex;justify-content:center;gap:0.25rem}.stack-panel-move-button.svelte-h7rznk{background-color:#4a5568;color:white;padding:0.25rem;border-radius:0.25rem}.stack-panel-empty.svelte-h7rznk{text-align:center;color:#718096;padding:1rem}",
  map: `{"version":3,"file":"StackPanel.svelte","sources":["StackPanel.svelte"],"sourcesContent":["<script>\\n    import Icons from '../icons';\\n    \\n    export let stackItems = [];\\n    export let selectedItemIndex = -1;\\n    export let displayKey = 'type';\\n    export let setSelectedIndex;\\n    export let onMoveUp = () => {};\\n    export let onMoveDown = () => {};\\n    <\/script>\\n    \\n    {#if stackItems.length}\\n        {#each stackItems as item, itemIndex}\\n            <div \\n                class=\\"stack-panel-item\\"\\n                class:selected={itemIndex === selectedItemIndex}\\n            >\\n                <button \\n                    class=\\"stack-panel-selector\\" \\n                    on:click={() => setSelectedIndex(itemIndex)}\\n                >\\n                    {String(item[displayKey] || '').toUpperCase().slice(0, 7)}\\n                </button>\\n                \\n                <div class=\\"stack-panel-actions\\">\\n                    <div class=\\"stack-panel-move-buttons\\">\\n                        <button \\n                            class=\\"stack-panel-move-button\\"\\n                            on:click={() => onMoveDown(itemIndex)}\\n                        >\\n                            {Icons.DOWN}\\n                        </button>\\n    \\n                        <button \\n                            class=\\"stack-panel-move-button\\"\\n                            on:click={() => onMoveUp(itemIndex)}\\n                        >\\n                            {Icons.UP}\\n                        </button>\\n                    </div>\\n                </div>\\n            </div>\\n        {/each}\\n    {:else}\\n        <div class=\\"stack-panel-empty\\">No items</div>\\n    {/if}\\n    \\n    <style>\\n    .stack-panel-item {\\n        text-align: center;\\n        border: 2px solid #737c89;\\n        border-radius: 10px;\\n        margin: 1px;\\n        transition: background-color 0.3s;\\n    }\\n    \\n    .stack-panel-item.selected {\\n        border-color: white;\\n        background-color: rgba(255, 0, 0, 0.1);\\n    }\\n    \\n    .stack-panel-item:hover {\\n        background-color: rgba(255, 0, 0, 0.2);\\n    }\\n    \\n    .stack-panel-selector {\\n        background-color: #4a5568;\\n        color: white;\\n        padding: 0.25rem;\\n        border-radius: 0.25rem;\\n        font-size: 0.75rem;\\n        margin: 0.25rem;\\n    }\\n    \\n    .stack-panel-actions {\\n        display: flex;\\n        justify-content: center;\\n        margin-top: 0.25rem;\\n    }\\n    \\n    .stack-panel-move-buttons {\\n        display: flex;\\n        justify-content: center;\\n        gap: 0.25rem;\\n    }\\n    \\n    .stack-panel-move-button {\\n        background-color: #4a5568;\\n        color: white;\\n        padding: 0.25rem;\\n        border-radius: 0.25rem;\\n    }\\n    \\n    .stack-panel-empty {\\n        text-align: center;\\n        color: #718096;\\n        padding: 1rem;\\n    }\\n    </style>"],"names":[],"mappings":"AAgDI,+BAAkB,CACd,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,gBAAgB,CAAC,IACjC,CAEA,iBAAiB,uBAAU,CACvB,YAAY,CAAE,KAAK,CACnB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACzC,CAEA,+BAAiB,MAAO,CACpB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACzC,CAEA,mCAAsB,CAClB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,OAAO,CAChB,aAAa,CAAE,OAAO,CACtB,SAAS,CAAE,OAAO,CAClB,MAAM,CAAE,OACZ,CAEA,kCAAqB,CACjB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,OAChB,CAEA,uCAA0B,CACtB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,OACT,CAEA,sCAAyB,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,OAAO,CAChB,aAAa,CAAE,OACnB,CAEA,gCAAmB,CACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IACb"}`
};
const StackPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stackItems = [] } = $$props;
  let { selectedItemIndex = -1 } = $$props;
  let { displayKey = "type" } = $$props;
  let { setSelectedIndex } = $$props;
  let { onMoveUp = () => {
  } } = $$props;
  let { onMoveDown = () => {
  } } = $$props;
  if ($$props.stackItems === void 0 && $$bindings.stackItems && stackItems !== void 0) $$bindings.stackItems(stackItems);
  if ($$props.selectedItemIndex === void 0 && $$bindings.selectedItemIndex && selectedItemIndex !== void 0) $$bindings.selectedItemIndex(selectedItemIndex);
  if ($$props.displayKey === void 0 && $$bindings.displayKey && displayKey !== void 0) $$bindings.displayKey(displayKey);
  if ($$props.setSelectedIndex === void 0 && $$bindings.setSelectedIndex && setSelectedIndex !== void 0) $$bindings.setSelectedIndex(setSelectedIndex);
  if ($$props.onMoveUp === void 0 && $$bindings.onMoveUp && onMoveUp !== void 0) $$bindings.onMoveUp(onMoveUp);
  if ($$props.onMoveDown === void 0 && $$bindings.onMoveDown && onMoveDown !== void 0) $$bindings.onMoveDown(onMoveDown);
  $$result.css.add(css);
  return `${stackItems.length ? `${each(stackItems, (item, itemIndex) => {
    return `<div class="${[
      "stack-panel-item svelte-h7rznk",
      itemIndex === selectedItemIndex ? "selected" : ""
    ].join(" ").trim()}"><button class="stack-panel-selector svelte-h7rznk">${escape(String(item[displayKey] || "").toUpperCase().slice(0, 7))}</button> <div class="stack-panel-actions svelte-h7rznk"><div class="stack-panel-move-buttons svelte-h7rznk"><button class="stack-panel-move-button svelte-h7rznk">${escape(Icons.DOWN)}</button> <button class="stack-panel-move-button svelte-h7rznk">${escape(Icons.UP)}</button> </div></div> </div>`;
  })}` : `<div class="stack-panel-empty svelte-h7rznk" data-svelte-h="svelte-16rqrt9">No items</div>`}`;
});
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSlide;
  registerSlideTypes();
  let { slides } = $$props;
  let { isBlob = false } = $$props;
  let { showToolbar = true } = $$props;
  let { audioData: audioData2 = "" } = $$props;
  let currentTime = 0;
  let currentSlideIndex = 0;
  let showSidePanel = false;
  let show = false;
  function checkTimingErrors() {
    let timingError = false;
    let timingErrorMessage = "";
    if (!slides || slides.length === 0) {
      timingError = true;
      timingErrorMessage = "No slides found.";
      return { timingError, timingErrorMessage };
    }
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      if (slide.startTime === void 0 || slide.endTime === void 0) {
        timingError = true;
        timingErrorMessage = `Slide ${i + 1}: Missing startTime or endTime.`;
        return { timingError, timingErrorMessage };
      }
    }
    if (slides[0].startTime !== 0) {
      timingError = true;
      timingErrorMessage = "First slide startTime must be 0.";
      return { timingError, timingErrorMessage };
    }
    for (let i = 1; i < slides.length; i++) {
      const prevSlide = slides[i - 1];
      const currentSlide2 = slides[i];
      if (prevSlide.endTime !== currentSlide2.startTime) {
        timingError = true;
        timingErrorMessage = `Gap between slides ${i - 1} and ${i}.`;
        return { timingError, timingErrorMessage };
      }
      if (currentSlide2.endTime - currentSlide2.startTime < 2) {
        timingError = true;
        timingErrorMessage = `Slide ${i} duration is less than 2 seconds.`;
        return { timingError, timingErrorMessage };
      }
    }
    return { timingError, timingErrorMessage };
  }
  function shiftTime(newEndTime) {
    slides[currentSlideIndex].endTime = newEndTime;
    for (let i = currentSlideIndex + 1; i < slides.length; i++) {
      const durationChange = slides[i].startTime - slides[i - 1].endTime;
      slides[i].startTime -= durationChange;
      slides[i].endTime -= durationChange;
      if (slides[i].startTime < slides[i - 1].endTime) {
        slides[i].startTime = slides[i - 1].endTime;
        slides[i].endTime = slides[i].startTime + (slides[i].endTime - slides[i].startTime);
      }
    }
    checkTimingErrors();
  }
  function setCurrentSlideIndex(index) {
    if (index >= 0 && index < slides.length) {
      currentSlideIndex = index;
    } else {
      console.warn(`Invalid slide index: ${index}`);
    }
  }
  function setNewSlideTimings(newSlide) {
    if (slides.length === 0) ;
    else {
      newSlide.startTime = slides[slides.length - 1].endTime;
      newSlide.endTime = newSlide.startTime + 10;
    }
  }
  function handleAddNew(slideType) {
    try {
      const newSlide = SlideObject.getNewSlide(slideType);
      setNewSlideTimings(newSlide);
      slides = [...slides, newSlide];
      setCurrentSlideIndex(slides.length - 1);
      show = false;
    } catch (error) {
      console.error("Failed to add new slide:", error);
    }
  }
  function handleMoveSlide(index, direction) {
    try {
      const updatedSlides = moveSlide(slides, index, direction);
      if (updatedSlides !== slides) {
        slides = updatedSlides;
        setCurrentSlideIndex(direction === "up" ? index - 1 : index + 1);
      }
    } catch (error) {
      console.error("Failed to move slide:", error);
    }
  }
  function handleDeleteSlide() {
    try {
      const { slides: updatedSlides, newIndex } = deleteSlide(slides, currentSlideIndex);
      slides = updatedSlides;
      currentSlideIndex = newIndex;
    } catch (error) {
      console.error("Failed to delete slide:", error);
    }
  }
  function handleCopySlide() {
    try {
      if (currentSlide && copySlide(currentSlide)) {
        console.log("Slide copied successfully");
      }
    } catch (error) {
      console.error("Failed to copy slide:", error);
    }
  }
  function handlePasteSlide() {
    try {
      const result = pasteSlide(slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error("Failed to paste slide:", error);
    }
  }
  function handleCloneSlide() {
    try {
      const result = cloneSlide(currentSlide, slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error("Failed to clone slide:", error);
    }
  }
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0) $$bindings.slides(slides);
  if ($$props.isBlob === void 0 && $$bindings.isBlob && isBlob !== void 0) $$bindings.isBlob(isBlob);
  if ($$props.showToolbar === void 0 && $$bindings.showToolbar && showToolbar !== void 0) $$bindings.showToolbar(showToolbar);
  if ($$props.audioData === void 0 && $$bindings.audioData && audioData2 !== void 0) $$bindings.audioData(audioData2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    currentSlide = slides?.[currentSlideIndex] || null;
    $$rendered = `<div class="bg-gray-800 overflow-x-auto w-full text-white min-h-screen">${showToolbar ? `<div>${validate_component(Toolbar, "Toolbar").$$render(
      $$result,
      {
        currentSlideIndex,
        addNew: handleAddNew,
        deleteSlide: handleDeleteSlide,
        copySlide: handleCopySlide,
        pasteSlide: handlePasteSlide,
        cloneSlide: handleCloneSlide,
        soundFile: audioData2,
        isBlob,
        setCurrentSlideIndex,
        shiftTime,
        slides,
        show,
        showSidePanel,
        currentTime
      },
      {
        slides: ($$value) => {
          slides = $$value;
          $$settled = false;
        },
        show: ($$value) => {
          show = $$value;
          $$settled = false;
        },
        showSidePanel: ($$value) => {
          showSidePanel = $$value;
          $$settled = false;
        },
        currentTime: ($$value) => {
          currentTime = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``} ${``} <div class="flex justify-start w-full">${slides?.length ? `${showSidePanel ? `<div class="flex flex-col w-1/12 bg-gray-600 p-1" style="border-right: 2px solid white;">${validate_component(StackPanel, "StackPanel").$$render(
      $$result,
      {
        stackItems: slides,
        setSelectedIndex: setCurrentSlideIndex,
        selectedItemIndex: currentSlideIndex,
        displayKey: "type",
        onMoveDown: (index) => handleMoveSlide(index, "down"),
        onMoveUp: (index) => handleMoveSlide(index, "up")
      },
      {},
      {}
    )}</div>` : ``} <div${add_attribute("class", `p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`, 0)}>${``}</div>` : `<h1 data-svelte-h="svelte-ys6mhb">No Slides in the presentation</h1>`}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const CallbackButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Callback Button" } = $$props;
  let { callback = () => {
  } } = $$props;
  let { icon = "🔥" } = $$props;
  let { style = " text-[10px] text-white  rounded-md" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0) $$bindings.callback(callback);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  return `<button${add_attribute("class", style, 0)}>${escape(title)} ${escape(icon)}</button>`;
});
const SaveFileButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = [] } = $$props;
  let { fileName = "file" } = $$props;
  let { fileExtension = "js" } = $$props;
  let { PreTextToAdd = "export const Content" } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.fileName === void 0 && $$bindings.fileName && fileName !== void 0) $$bindings.fileName(fileName);
  if ($$props.fileExtension === void 0 && $$bindings.fileExtension && fileExtension !== void 0) $$bindings.fileExtension(fileExtension);
  if ($$props.PreTextToAdd === void 0 && $$bindings.PreTextToAdd && PreTextToAdd !== void 0) $$bindings.PreTextToAdd(PreTextToAdd);
  return `<div class="flex text-white gap-2"> <button class="text-[10px]" data-svelte-h="svelte-7f9chx">Save 💾</button>  <input class="text-[10px] p-0 text-white bg-gray-600 rounded-md text-center" type="text"${add_attribute("value", fileName, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides;
  let showToolbar = true;
  function newPresentation() {
    slides = [];
  }
  function callback(incomming) {
    slides = [...incomming];
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ToolbarDiv, "ToolbarDiv").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CallbackButton, "CallbackButton").$$render(
          $$result,
          {
            callback: newPresentation,
            title: "New ",
            icon: "🎉"
          },
          {},
          {}
        )} ${validate_component(CallbackButton, "CallbackButton").$$render(
          $$result,
          {
            callback: () => showToolbar = !showToolbar,
            title: "Fold ",
            icon: "🪜"
          },
          {},
          {}
        )} ${validate_component(OpenFileButton, "OpenFileButton").$$render(
          $$result,
          {
            callback,
            importAccept: ".js",
            regexReplaceFilter: /export\s+const\s+\w+\s*=\s*/
          },
          {},
          {}
        )}  ${validate_component(SaveFileButton, "SaveFileButton").$$render(
          $$result,
          {
            content: slides,
            PreTextToAdd: "export const Slides"
          },
          {},
          {}
        )}`;
      }
    })} <div class="w-full bg-gray-800">${slides ? `${validate_component(Editor, "Editor").$$render(
      $$result,
      {
        isBlob: true,
        showToolbar,
        audioData,
        slides
      },
      {
        slides: ($$value) => {
          slides = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};