// @ts-nocheck comment
//Remove this after fixing ts issues
let lastClosestSiblingToRight;
let lastDragEndState = null;
const artists: ArtistData = {
  '12th Planet': {genre: 'Bass'},
  '8Kays': {genre: 'House'},
  '999999999': {genre: 'Techno'},
  'A Hundred Drums': {genre: 'Bass'},
  Abana: {genre: 'House'},
  'Above & Beyond': {genre: 'Trance'},
  ACRAZE: {genre: 'House'},
  'ACRAZE B2B Noizu': {genre: 'House'},
  Adrenalize: {genre: 'Hardstyle'},
  'Afrojack (Sunrise Set)': {genre: 'House'},
  'AK Sports': {genre: 'Drum & Bass'},
  'Alison Wonderland': {genre: 'Trap'},
  Alok: {genre: 'House'},
  'Anabel Englund': {genre: 'House'},
  Anden: {genre: 'House'},
  'Andy C': {genre: 'Drum & Bass'},
  'Armin van Buuren': {genre: 'Trance'},
  ARMNHMR: {genre: 'Future Bass'},
  ARTBAT: {genre: 'Techno'},
  atDusk: {genre: 'Techno'},
  Audiofreq: {genre: 'Hardstyle'},
  Azzecca: {genre: 'House'},
  Baggi: {genre: 'House'},
  'Barely Alive': {genre: 'Bass'},
  'Ben Nicky presents Emotional Havoc': {genre: 'Trance'},
  'Ben Nicky presents Xtreme B2B Sub Zero Project': {genre: 'Hardstyle'},
  'Ben UFO': {genre: 'Techno'},
  'Bensley B2B Justin Hawkes': {genre: 'Drum & Bass'},
  'Billy Gillies': {genre: 'Trance'},
  'Biscits B2B Martin Ikin': {genre: 'House'},
  'Black Tiger Sex Machine': {genre: 'House'},
  Blanke: {genre: 'Bass'},
  Blastoyz: {genre: 'Psytrance'},
  'Bleu Clair': {genre: 'House'},
  'Boogie T': {genre: 'Bass'},
  'Borgore B2B Level Up': {genre: 'Bass'},
  'Boris Brejcha': {genre: 'Techno'},
  'Born Dirty': {genre: 'House'},
  'Brennan Heart': {genre: 'Hardstyle'},
  'Camden Cox': {genre: 'House'},
  Capozzi: {genre: 'House'},
  Carola: {genre: 'Techno'},
  'Champagne Drip': {genre: 'Bass'},
  Chaney: {genre: 'House'},
  'Chris Lake': {genre: 'House'},
  'Chris Lorenzo': {genre: 'House'},
  'CID B2B Sage Armstrong': {genre: 'House'},
  CID: {genre: 'House'},
  Cloverdale: {genre: 'House'},
  'Code Black': {genre: 'Hardstyle'},
  Coone: {genre: 'Hardstyle'},
  'Cosmic Gate': {genre: 'Trance'},
  'D-Sturb': {genre: 'Hardstyle'},
  'Da Tweekaz': {genre: 'Hardstyle'},
  'Danny Daze': {genre: 'Techno'},
  'Darren Styles': {genre: 'Hardcore'},
  'David Guetta': {genre: 'House'},
  'David Morales': {genre: 'House'},
  'Deadly Guns': {genre: 'Hardcore'},
  'Deeper Purpose': {genre: 'House'},
  'Dennis Ferrer': {genre: 'House'},
  Deorro: {genre: 'House'},
  Dimension: {genre: 'Drum & Bass'},
  'Dionysus & Yosuf present: Bigger Stronger Faster': {genre: 'Hardstyle'},
  'Dirt Monkey': {genre: 'Bass'},
  'Disco Lines': {genre: 'House'},
  'DJ AniMe': {genre: 'Hardcore'},
  'DJ Isaac': {genre: 'Hardstyle'},
  'DJ Minx': {genre: 'House'},
  'Dom Dolla': {genre: 'House'},
  Dombresky: {genre: 'House'},
  'Dr Phunk': {genre: 'Hardstyle'},
  'Duke Dumont': {genre: 'House'},
  'Dustin Husain': {genre: 'Trance'},
  'Eli Brown': {genre: 'House'},
  Eliminate: {genre: 'Bass'},
  'Ellen Allien': {genre: 'Techno'},
  Enamour: {genre: 'House'},
  Eptic: {genre: 'Bass'},
  'Excision B2B Dion Timmer': {genre: 'Bass'},
  Excision: {genre: 'Bass'},
  'Fallen B2B Richter with MC Dino': {genre: 'Drum & Bass'},
  Fallon: {genre: 'House'},
  'Ferreck Dawn': {genre: 'House'},
  'Ferry Corsten': {genre: 'Trance'},
  Fisher: {genre: 'House'},
  'Frame (Declan James & Decoder)': {genre: 'House'},
  'Franky Wah': {genre: 'House'},
  'Fred Everything': {genre: 'House'},
  Friction: {genre: 'Drum & Bass'},
  FrostTop: {genre: 'Trap'},
  FuntCase: {genre: 'Bass'},
  'Fury B2B Nightstalker': {genre: 'Drum & Bass'},
  Galantis: {genre: 'House'},
  'Gammer B2B Tweekacore': {genre: 'Hardcore'},
  'Gareth Emery': {genre: 'Trance'},
  'Gentlemens Club': {genre: 'Bass'},
  'Giuseppe Ottaviani': {genre: 'Trance'},
  Goodboys: {genre: 'Other'},
  GRiZ: {genre: 'Other'},
  Griztronics: {genre: 'Bass'},
  Habstrakt: {genre: 'House'},
  HANA: {genre: 'Other'},
  'Hannah Wants': {genre: 'House'},
  'Hint Of Lavender': {genre: 'House'},
  'HOL!': {genre: 'Bass'},
  'Hot Since 82': {genre: 'House'},
  Hugel: {genre: 'House'},
  HVDES: {genre: 'Bass'},
  'I Hate Models': {genre: 'Techno'},
  IMANU: {genre: 'Drum & Bass'},
  'J. Worra': {genre: 'House'},
  Jaded: {genre: 'House'},
  'James Hype': {genre: 'House'},
  jamesjamesjames: {genre: 'House'},
  'Jeff Mills': {genre: 'Techno'},
  'Jerome Isma-Ae': {genre: 'House'},
  'John Bryars': {genre: 'House'},
  Jorza: {genre: 'Trance'},
  Joshwa: {genre: 'House'},
  JSTJR: {genre: 'Trap'},
  Kaivon: {genre: 'Future Bass'},
  'Kaleena Zanders': {genre: 'House'},
  'Kaskade Redux': {genre: 'House'},
  Kaytranada: {genre: 'House'},
  KETTAMA: {genre: 'House'},
  'Kill Script': {genre: 'Techno'},
  Korolova: {
    genre: 'Techno',
  },
  Kream: {
    genre: 'House',
  },
  'Lady Faith': {
    genre: 'Hardstyle',
  },
  'Lady Sinclair': {
    genre: 'House',
  },
  'Lane 8': {
    genre: 'House',
  },
  'Layla Benitez': {
    genre: 'House',
  },
  'Le Youth': {
    genre: 'House',
  },
  'Lenny Dee': {
    genre: 'Techno',
  },
  Levenkhan: {
    genre: 'House',
  },
  'Lil Texas': {
    genre: 'Hardcore',
  },
  'Loco Dice B2B Fisher': {
    genre: 'House',
  },
  'Loud Luxury': {
    genre: 'House',
  },
  'Louie Vega': {
    genre: 'House',
  },
  'Lovefingers + Heidi Lawden': {
    genre: 'House',
  },
  'Maarten de Jong': {
    genre: 'Trance',
  },
  'Malaa B2B Wax Motif': {
    genre: 'House',
  },
  'Marc V': {
    genre: 'Trance',
  },
  Marshmello: {
    genre: 'Future Bass',
  },
  'Marshmello B2B Svdden Death': {
    genre: 'Bass',
  },
  'Marten Hørger': {
    genre: 'House',
  },
  'Martin Garrix': {
    genre: 'House',
  },
  'The Martinez Brothers': {
    genre: 'House',
  },
  Matroda: {
    genre: 'House',
  },
  'Matt Fax': {
    genre: 'House',
  },
  'Mau P': {
    genre: 'House',
  },
  Meduza: {
    genre: 'House',
  },
  Memba: {
    genre: 'Other',
  },
  'Metrik B2B Grafix': {
    genre: 'Drum & Bass',
  },
  Miane: {
    genre: 'House',
  },
  'Michael Bibi': {
    genre: 'House',
  },
  'Midnight Tyrannosaurus': {
    genre: 'Bass',
  },
  'Mike Dunn': {
    genre: 'House',
  },
  'MISS DRE': {
    genre: 'House',
  },
  Mochakk: {
    genre: 'House',
  },
  Modapit: {
    genre: 'Techno',
  },
  'Moody Good (Throwback Set)': {
    genre: 'Bass',
  },
  MORTEN: {
    genre: 'House',
  },
  Mrotek: {
    genre: 'Hardstyle',
  },
  'Ms. Mada B2B Bakke': {
    genre: 'House',
  },
  Nala: {
    genre: 'House',
  },
  Netsky: {
    genre: 'Drum & Bass',
  },
  Noizu: {
    genre: 'House',
  },
  Nostalgix: {
    genre: 'House',
  },
  'Odd Mob': {
    genre: 'House',
  },
  'Omar Santana': {
    genre: 'Hardcore',
  },
  'Paco Osuna': {
    genre: 'Techno',
  },
  'Patrick Topping': {
    genre: 'House',
  },
  'Paul Denton': {
    genre: 'Trance',
  },
  'Pauline Herr': {
    genre: 'Future Bass',
  },
  Peekaboo: {
    genre: 'Bass',
  },
  'Pretty Pink': {
    genre: 'House',
  },
  'Ray Volpe': {
    genre: 'Bass',
  },
  Reaper: {genre: 'Drum & Bass'},
  Rebelion: {genre: 'Hardstyle'},
  'Reinier Zonneveld (Live)': {genre: 'Techno'},
  'Riot Ten B2B Jessica Audiffred': {genre: 'Bass'},
  'Rob Gee 30 Years': {genre: 'Hardcore'},
  'Said The Sky': {genre: 'Future Bass'},
  salute: {genre: 'House'},
  'San Pacho': {genre: 'House'},
  SAYMYNAME: {genre: 'Trap'},
  Shei: {genre: 'Hardstyle'},
  SHERELLE: {genre: 'Other'},
  'Ship Wrek': {genre: 'House'},
  SIDEPIECE: {genre: 'House'},
  SLANDER: {genre: 'Trap'},
  'Softest Hard': {genre: 'House'},
  'Sonny Fodera': {genre: 'House'},
  SOREN: {genre: 'Hardstyle'},
  'Sound Rush': {genre: 'Hardstyle'},
  'Space Laces': {genre: 'Bass'},
  'Space Motion': {genre: 'House'},
  'Spencer Brown': {genre: 'House'},
  Suae: {genre: 'Hardstyle'},
  'Sub Zero Project': {genre: 'Hardstyle'},
  Subtronics: {genre: 'Bass'},
  'Sullivan King B2B Kai Wachi': {genre: 'Bass'},
  'Sullivan King': {genre: 'Bass'},
  'Sultan + Shepard': {genre: 'House'},
  'Svdden Death: Into The Inferno': {genre: 'Bass'},
  'Tchami B2B AC Slater': {genre: 'House'},
  'Things You Say': {genre: 'House'},
  Tiësto: {genre: 'House'},
  TOBEHONEST: {genre: 'House'},
  'Todd Terry': {genre: 'House'},
  'Tom & Collins': {genre: 'House'},
  'Township Rebellion': {genre: 'Techno'},
  Triode: {genre: 'Trance'},
  'Tsu Nami': {genre: 'Trap'},
  'Valentino Khan': {genre: 'House'},
  'Vini Vici': {genre: 'Psytrance'},
  'Warface B2B D-Sturb': {genre: 'Hardstyle'},
  Warface: {genre: 'Hardstyle'},
  'Wax Motif': {genre: 'House'},
  Westend: {genre: 'House'},
  'Will Atkinson': {genre: 'Trance'},
  'Will Clarke': {genre: 'House'},
  Wooli: {genre: 'Bass'},
  'Yellow Claw': {genre: 'Trap'},
  yetep: {genre: 'Future Bass'},
  'Yoshi & Razner': {genre: 'Trance'},
  Yotto: {genre: 'House'},
  Zedd: {genre: 'House'},
  'Zeds Dead B2B Chase & Status': {genre: 'Drum & Bass'},
};
const genreTagMap = new Map([
  ['Bass', 'border-t-rose-700/70'],
  ['House', 'border-t-fuchsia-700/70'],
  ['Trance', 'border-t-violet-700/70'],
  ['Techno', 'border-t-blue-700/70'],
  ['Hardstyle', 'border-t-cyan-700/70'],
  ['Hardcore', 'border-t-emerald-700/70'],
  ['Trap', 'border-t-lime-700/70'],
  ['Future Bass', 'border-t-amber-700/70'],
  ['Psytrance', 'border-t-red-700/70'],
  ['Drum & Bass', 'border-t-neutral-700/70'],
  ['Other', 'border-t-slate-950'],
]);
addEdcLineup();
// seedData();
addPrevRankings();

const draggableConatiners = Array.from(
  document.querySelectorAll('.drag-container')
) as HTMLElement[];
const draggableItems = Array.from(document.querySelectorAll('[draggable]')) as HTMLElement[];

draggableConatiners.forEach(item => {
  item.addEventListener('dragover', handleDragover.bind(null, item));
});

draggableItems.forEach(item => {
  item.addEventListener('dragstart', handleDragStart.bind(null, item));
  item.addEventListener('dragend', handleDragEnd.bind(null, item));
});

function getClosestSiblingToRight(container: HTMLElement, mouseX: number, mouseY: number) {
  const staticDraggables = Array.from(
    container.querySelectorAll('[draggable]:not(.dragging)')
  ) as HTMLElement[];

  if (!staticDraggables.length) {
    return null;
  }

  let closestOffset = Number.NEGATIVE_INFINITY;
  let closestElement: null | HTMLElement = null;
  staticDraggables.forEach(draggableItem => {
    const {width, height, x, y} = draggableItem.getBoundingClientRect();
    const itemXValue = x + width / 2;
    const itemYValue = y + height / 2;
    const itemXOffset = mouseX - itemXValue;
    const itemYOffset = Math.abs(mouseY - itemYValue);
    const maxYOffset = height / 2;
    if (itemXOffset < 0 && itemXOffset > closestOffset && itemYOffset <= maxYOffset) {
      closestElement = draggableItem;
      closestOffset = itemXOffset;
    }
  });
  lastClosestSiblingToRight = closestElement;
  return closestElement as HTMLElement | null;
}

function addEdcLineup() {
  const fragment = document.createDocumentFragment();
  const prevRankedItems = getPrevRankedItems();
  for (const artist in artists) {
    const {genre} = artists[artist];
    const isAlreadyRanked = prevRankedItems.includes(artist);
    if (isAlreadyRanked) {
      continue;
    }
    const element = document.createElement('li');
    const tag = document.createElement('div');
    const tagColor = genreTagMap.get(genre);
    tag.classList.add('tag', 'border-opacity-75', tagColor, 'border-t-[30px]');
    const pElement = document.createElement('p');
    pElement.textContent = artist;
    element.appendChild(pElement);
    element.appendChild(tag);

    pElement.classList.add(
      'overflow-hidden',
      'hover:overflow-auto',
      'w-full',
      'h-full',
      'scrollbar',
      'scrollbar-thumb-neutral-400',
      'scrollbar-thumb-rounded-lg',
      'scrollbar-h-1',
      'scrollbar-w-1',
      'text-center',
      'grid',
      'items-center',
      'absolute'
    );
    element.classList.add(
      'h-24',
      'w-24',
      'flex',
      'bg-neutral-300/50',
      'border-solid',
      'border-neutral-700',
      'border-[1px]',
      'relative'
    );
    element.setAttribute('draggable', 'true');
    fragment.appendChild(element);
  }
  document.getElementById('starting-container')?.appendChild(fragment);
}

function getPrevRankedItems() {
  const savedRankings = getSavedRankings();
  const rankedItems = [];
  for (const key in savedRankings) {
    for (const item of savedRankings[key]) {
      rankedItems.push(item);
    }
  }

  return rankedItems;
}

type TierRanking = 'S' | 'A' | 'B' | 'C' | 'F' | 'Dont Know';
type RankingsData = {
  [key: TierRanking[number]]: string[] | [];
};
const genres = [
  'Bass',
  'House',
  'Trance',
  'Techno',
  'Hardstyle',
  'Hardcore',
  'Trap',
  'Future Bass',
  'Psytrance',
  'Other',
  'Drum & Bass',
] as const;
type Genre = typeof genres[number];
type ArtistData = {
  string: {
    genre: Genre;
  };
};

function addPrevRankings() {
  const prevRankings = getSavedRankings();

  for (const ranking in prevRankings) {
    insertSavedRankings(ranking as TierRanking, prevRankings[ranking]);
  }
}

function getSavedRankings() {
  const prevRankings = localStorage.getItem('rankings');
  if (prevRankings === null) {
    return {
      S: [],
      A: [],
      B: [],
      C: [],
      F: [],
      'Dont Know': [],
    };
  }
  return JSON.parse(prevRankings) as RankingsData;
}

function saveRankings(data: RankingsData) {
  localStorage.setItem('rankings', JSON.stringify(data));
  return;
}

function insertRanking(location: TierRanking, element: HTMLElement) {
  const rankings = getSavedRankings();
  if (lastClosestSiblingToRight) {
    const position = rankings[location].indexOf(lastClosestSiblingToRight.textContent);
    rankings[location].splice(position, 0, element.textContent);
  } else {
    rankings[location].push(element.textContent);
  }
  saveRankings(rankings);
}

function insertSavedRankings(location: TierRanking, data: string[]) {
  const fragment = document.createDocumentFragment();
  data.forEach(item => {
    const {genre} = artists[item];
    const element = document.createElement('li');
    const tag = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.textContent = item;

    const tagColor = genreTagMap.get(genre);
    tag.classList.add('tag', 'border-opacity-75', tagColor, 'border-t-[30px]');
    pElement.classList.add(
      'overflow-hidden',
      'hover:overflow-auto',
      'w-full',
      'h-full',
      'scrollbar',
      'scrollbar-thumb-neutral-400',
      'scrollbar-thumb-rounded-lg',
      'scrollbar-h-1',
      'scrollbar-w-1',
      'text-center',
      'grid',
      'items-center',
      'absolute'
    );
    element.classList.add(
      'h-24',
      'w-24',
      'flex',
      'bg-neutral-300/50',
      'border-solid',
      'border-neutral-600',
      'border-[1px]',
      'relative'
    );
    element.appendChild(pElement);
    element.appendChild(tag);
    element.setAttribute('draggable', 'true');
    element.dataset.ranking = location;
    fragment.appendChild(element);
  });
  document.getElementById(location)?.appendChild(fragment);
}

function removeRanking(location: TierRanking, item: string) {
  const rankings = getSavedRankings() as RankingsData;
  const index = rankings[location].indexOf(item);
  if (index !== -1) {
    rankings[location].splice(index, 1);
  }
  saveRankings(rankings);
  return;
}

function seedData() {
  const dataObj = {S: [], A: [], B: [], C: [], D: []};
  artists.forEach(artist => {
    const randomNum = Math.random();
    if (randomNum > 0.8) {
      dataObj['S'].push(artist);
    } else if (randomNum > 0.6) {
      dataObj['A'].push(artist);
    } else if (randomNum > 0.4) {
      dataObj['B'].push(artist);
    } else if (randomNum > 0.2) {
      dataObj['C'].push(artist);
    } else {
      dataObj['D'].push(artist);
    }
  });

  const stringifiedObj = JSON.stringify(dataObj);
  localStorage.setItem('rankings', stringifiedObj);
}

function throttle(func, delay) {
  let lastTime = 0;
  return function() {
    const currentTime = new Date().getTime();
    if (currentTime - lastTime >= delay) {
      func.apply(null, arguments);
      lastTime = currentTime;
    }
  };
}

function handleDragover(item: HTMLElement, event: DragEvent) {
  event.preventDefault();
  const draggingElement = document.querySelector('.dragging')!;
  const closestSiblingToRight = getClosestSiblingToRight(item, event.clientX, event.clientY);
  const containerListElement = item.querySelector('ol')!;
  if (!closestSiblingToRight) {
    containerListElement.appendChild(draggingElement);
  } else {
    containerListElement.insertBefore(draggingElement, closestSiblingToRight);
  }
}

function handleDragStart(item: HTMLElement, event: DragEvent) {
  item.classList.add('dragging', 'opacity-50');
  const path = event.composedPath();
  for (const element of path) {
    if (element.tagName === 'OL' && element.id !== 'starting-container') {
      removeRanking(item.dataset.ranking, item.textContent);
    }
  }
}

function handleDragEnd(item: HTMLElement, event: DragEvent) {
  item.classList.remove('dragging', 'opacity-50');
  if (lastDragEndState !== event) {
    const path = event.composedPath();
    let selectedRank;
    for (const element of path) {
      if (element.tagName === 'OL' && element.id !== 'starting-container') {
        selectedRank = (element as HTMLOListElement).id as TierRanking;
        item.dataset.ranking = selectedRank;
        insertRanking(selectedRank, item);
        break;
      }
    }
    lastDragEndState = event;
  }
}
