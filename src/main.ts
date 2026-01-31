let lastClosestSiblingToRight: null | HTMLElement = null;
let lastDragEndState: null | DragEvent = null;
let selectedFestival: keyof typeof festivalInfo = 'esca2026';
let numberOfSelections = 0;
const ileSoniqArtists: Record<string, ArtistData> = {
  'AK Sports': {genre: 'Techno'},
  Alesso: {genre: 'House'},
  Alleycvtt: {genre: 'Trap'},
  'Automhate b2b Beastboi.': {genre: 'Bass'},
  'Black Tiger Sex Machine': {genre: 'Bass'},
  'BUNT.': {genre: 'Other'},
  Cassian: {genre: 'House'},
  'Chase & Status': {genre: 'Drum & Bass'},
  'Dave Summit': {genre: 'House'},
  'Deep Dish': {genre: 'House'},
  'Dion Timmer b2b Calcium': {genre: 'Bass'},
  'D.O.D': {genre: 'House'},
  Drinkurwater: {genre: 'Bass'},
  'Eli Brown': {genre: 'Techno'},
  'Frank Walker': {genre: 'House'},
  Genesi: {genre: 'Techno'},
  GorillaT: {genre: 'Bass'},
  Illenium: {genre: 'Future Bass'},
  'John Summit': {genre: 'House'},
  'Joris Voorn': {genre: 'Techno'},
  Joshwa: {genre: 'House'},
  Kaskade: {genre: 'House'},
  'Layton Giordani': {genre: 'Techno'},
  Lovra: {genre: 'House'},
  'LP Giobbi': {genre: 'House'},
  Maddix: {genre: 'Techno'},
  'Mau P': {genre: 'House'},
  'Max Styler': {genre: 'House'},
  Muzz: {genre: 'Drum & Bass'},
  'Oliver Heldens': {genre: 'House'},
  PAUZA: {genre: 'House'},
  'Ray Volpe b2b Kai Wachi': {genre: 'Bass'},
  'Sara Landry': {genre: 'Techno'},
  Sippy: {genre: 'Bass'},
  Snails: {genre: 'Bass'},
  'Sofi Tukker': {genre: 'Other'},
  'Steve Aoki': {genre: 'House'},
  'Sullivan King b2b Crankdat': {genre: 'Bass'},
  'TAPE B b2b Levity': {genre: 'Bass'},
  'DJ Sam': {genre: 'Other'},
  'Homeby6: Félix Patry b2b William Walsh': {genre: 'Other'},
  Humansion: {genre: 'Other'},
  Katzkat: {genre: 'Other'},
  'Ludo Lacoste': {genre: 'Other'},
  Marta: {genre: 'Other'},
};

const ileSoniq2026Artists: Record<string, ArtistData> = {
  'Dom Dolla': {genre: 'House'},
  'Chris Lake': {genre: 'House'},
  deadmau5: {genre: 'House'},
  Rezz: {genre: 'Bass'},
  'Above & Beyond': {genre: 'Trance'},
  'Boris Brejcha': {genre: 'Techno'},
  'Sub Focus': {genre: 'Drum & Bass'},
  'Seven Lions': {genre: 'Future Bass'},
  ATLiens: {genre: 'Bass'},
  'Layz b2b Kompany': {genre: 'Bass'},
  Wooli: {genre: 'Bass'},
  Gryffin: {genre: 'Future Bass'},
  Hedex: {genre: 'Drum & Bass'},
  'Chris Lorenzo': {genre: 'House'},
  Dabin: {genre: 'Future Bass'},
  AYYBO: {genre: 'Bass'},
  'Bullet Tooth': {genre: 'Bass'},
  'Future Exit': {genre: 'Bass'},
  Neotek: {genre: 'Bass'},
  Hayla: {genre: 'House'},
  'Holy Priest': {genre: 'Techno'},
  'Izzy Vadim': {genre: 'House'},
  'Jkyl X Hyde': {genre: 'Bass'},
  Kattana: {genre: 'Techno'},
  'KI/KI': {genre: 'Techno'},
  Kleed: {genre: 'House'},
  Kream: {genre: 'House'},
  'Level Up': {genre: 'Bass'},
  Infekt: {genre: 'Bass'},
  Lyny: {genre: 'Bass'},
  'Marco Strous': {genre: 'Techno'},
  Novah: {genre: 'Bass'},
  Oguz: {genre: 'Techno'},
  Riordan: {genre: 'House'},
  'Roddy Lima': {genre: 'House'},
  Sidepiece: {genre: 'House'},
  Stoog3s: {genre: 'House'},
  TDJ: {genre: 'House'},
  Yurie: {genre: 'Techno'},
  'Yousuke Yukimatsu': {genre: 'Techno'},
};

const veld2026Artists: Record<string, ArtistData> = {
  'Above & Beyond': {genre: 'Trance'},
  'Armin van Buuren': {genre: 'Trance'},
  ARTBAT: {genre: 'Techno'},
  BEAUZ: {genre: 'Future Bass'},
  'Black Tiger Sex Machine': {genre: 'Bass'},
  'Boys Noize': {genre: 'Techno'},
  'Charlotte de Witte': {genre: 'Techno'},
  Crankdat: {genre: 'Bass'},
  'Dana Vicci': {genre: 'House'},
  'Disco Lines': {genre: 'House'},
  Effin: {genre: 'Bass'},
  Fallon: {genre: 'House'},
  Fisher: {genre: 'House'},
  'Frank Walker': {genre: 'Future Bass'},
  Galantis: {genre: 'Future Bass'},
  Genesi: {genre: 'Techno'},
  Illenium: {genre: 'Future Bass'},
  'James Hype': {genre: 'House'},
  KREAM: {genre: 'House'},
  Kx5: {genre: 'House'},
  Łaszewo: {genre: 'Techno'},
  'Level Up': {genre: 'Bass'},
  Levity: {genre: 'Bass'},
  'Lilly Palmer': {genre: 'Techno'},
  'Lost Frequencies': {genre: 'House'},
  Maddix: {genre: 'Techno'},
  Malaa: {genre: 'House'},
  'Mau P': {genre: 'House'},
  'Miss Monique': {genre: 'Techno'},
  Panteros666: {genre: 'Other'},
  'Paper Skies': {genre: 'Future Bass'},
  'Ray Volpe': {genre: 'Bass'},
  Restricted: {genre: 'House'},
  'Sara Landry': {genre: 'Techno'},
  Slander: {genre: 'Future Bass'},
  Subtronics: {genre: 'Bass'},
  Whethan: {genre: 'Future Bass'},
  YDG: {genre: 'Trap'},
  'Yousuke Yukimatsu': {genre: 'Techno'},
  Addy: {genre: 'House'},
  Deecee: {genre: 'House'},
  Dirtyhappy: {genre: 'House'},
  Kaz: {genre: 'House'},
  Lukav: {genre: 'House'},
  'Manzone & Strong': {genre: 'House'},
  Nader: {genre: 'House'},
  Pedro: {genre: 'House'},
  Quim: {genre: 'House'},
  'Stella Maise': {genre: 'House'},
  Tellie: {genre: 'House'},
  Youngwolf: {genre: 'House'},
};

const esca2026Artists: Record<string, ArtistData> = {
  'Alan Walker': {genre: 'Future Bass'},
  Alleycvt: {genre: 'Bass'},
  Avello: {genre: 'House'},
  Chyl: {genre: 'Bass'},
  'Cosmic Gate': {genre: 'Trance'},
  Crankdat: {genre: 'Bass'},
  'Danny Avila': {genre: 'House'},
  Devault: {genre: 'Bass'},
  'Distant Matter': {genre: 'Techno'},
  'Disco Lines': {genre: 'House'},
  'Disco Dom': {genre: 'House'},
  'Dreya V': {genre: 'Techno'},
  'Eli Brown': {genre: 'Techno'},
  Fisher: {genre: 'House'},
  Fovos: {genre: 'Bass'},
  'Frank Walker': {genre: 'Future Bass'},
  Getter: {genre: 'Bass'},
  Griz: {genre: 'Bass'},
  Hexxa: {genre: 'Bass'},
  Heyz: {genre: 'Bass'},
  'Hi-Lo': {genre: 'Techno'},
  Hoang: {genre: 'Future Bass'},
  'Hol!': {genre: 'Bass'},
  Illenium: {genre: 'Future Bass'},
  'Jackie Hollander': {genre: 'House'},
  'Jay Pryor': {genre: 'House'},
  Knock2: {genre: 'Bass'},
  'Layton Giordani': {genre: 'Techno'},
  'Loud Luxury': {genre: 'House'},
  'Luke Alexander': {genre: 'House'},
  Maddix: {genre: 'Techno'},
  'Max Styler': {genre: 'House'},
  MC4D: {genre: 'Bass'},
  Meduza: {genre: 'House'},
  'Micah Martin': {genre: 'Bass'},
  MPH: {genre: 'Bass'},
  'Nicky Romero': {genre: 'House'},
  'Odd Mob': {genre: 'House'},
  Okayval: {genre: 'Bass'},
  'Oliver Heldens': {genre: 'House'},
  'Oskar Med K': {genre: 'Techno'},
  Roz: {genre: 'Techno'},
  'Sam Lamar': {genre: 'House'},
  Script: {genre: 'Techno'},
  'Skull Machine': {genre: 'Bass'},
  Slander: {genre: 'Future Bass'},
  'Sullivan King': {genre: 'Bass'},
  'Svdden Death': {genre: 'Bass'},
  Tiësto: {genre: 'House'},
  Viperactive: {genre: 'Techno'},
  'Virtual Riot': {genre: 'Bass'},
  'Walker & Royce': {genre: 'House'},
};

const escaArtists: Record<string, ArtistData> = {
  'Above & Beyond': {genre: 'Trance'},
  'Alex Sonata & TheRio': {genre: 'Trance'},
  'Amy Wiles': {genre: 'Trance'},
  ARMNHMR: {genre: 'Future Bass'},
  Audien: {genre: 'Trance'},
  Azzecca: {genre: 'House'},
  Blossom: {genre: 'House'},
  Bou: {genre: 'Drum & Bass'},
  Capochino: {genre: 'Other'},
  'The Chainsmokers': {genre: 'Future Bass'},
  'Chris Lake': {genre: 'House'},
  Cyclops: {genre: 'Bass'},
  'Daniel Allan': {genre: 'Future Bass'},
  'Dave Summit': {genre: 'House'},
  Deathpact: {genre: 'Bass'},
  Dennett: {genre: 'House'},
  Discip: {genre: 'Bass'},
  'Disclosure (DJ Set)': {genre: 'House'},
  DVBBS: {genre: 'Trap'},
  Excision: {genre: 'Bass'},
  'Gabriel & Dresden': {genre: 'Trance'},
  Galantis: {genre: 'Future Bass'},
  'Ghetto Birds': {genre: 'Other'},
  'Gorgon City': {genre: 'House'},
  'Green Velvet': {genre: 'House'},
  Gryffin: {genre: 'Future Bass'},
  Hamro: {genre: 'House'},
  Hedex: {genre: 'Drum & Bass'},
  HNTR: {genre: 'Techno'},
  Hypaton: {genre: 'Trance'},
  INF1KT: {genre: 'Hardstyle'},
  'Jason Ross': {genre: 'Trance'},
  'Jessica Audiffred': {genre: 'Bass'},
  Kasablanca: {genre: 'Trance'},
  Kaskade: {genre: 'House'},
  Kygo: {genre: 'Future Bass'},
  Layz: {genre: 'Bass'},
  'Level Up b2b Kompany': {genre: 'Bass'},
  Linska: {genre: 'Other'},
  'Liquid Stranger': {genre: 'Bass'},
  'Loco Dice': {genre: 'Techno'},
  'Lost Frequencies': {genre: 'House'},
  'Mat Zo b2b Arty': {genre: 'Trance'},
  Matroda: {genre: 'Techno'},
  Morten: {genre: 'House'},
  'Nikita, The Wicked': {genre: 'Other'},
  Nourey: {genre: 'Trance'},
  'Oliver Smith': {genre: 'Trance'},
  'Pineo & Loeb': {genre: 'Other'},
  'The Outlaw': {genre: 'Other'},
  'Paper Skies': {genre: 'Future Bass'},
  'Patrick Topping': {genre: 'House'},
  'Rose Motion': {genre: 'House'},
  'RL Grime': {genre: 'Trap'},
  Sota: {genre: 'Drum & Bass'},
  'SVDDEN DEATH': {genre: 'Bass'},
  Subtronics: {genre: 'Bass'},
  'Vastive b2b Benda': {genre: 'Bass'},
  'Vintae Culture': {genre: 'House'},
  Wooli: {genre: 'Bass'},
  Xandra: {genre: 'Trance'},
  YDG: {genre: 'Trap'},
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

const festivalInfo = {
  escapade2025: {
    artists: escaArtists,
    name: 'Escapade 2025',
  },
  esca2026: {
    artists: esca2026Artists,
    name: 'Escapade 2026',
  },
  ileSoniq2025: {
    artists: ileSoniqArtists,
    name: 'Ile Soniq 2025',
  },
  ileSoniq2026: {
    artists: ileSoniq2026Artists,
    name: 'Ile Soniq 2026',
  },
  veld2026: {
    artists: veld2026Artists,
    name: 'Veld 2026',
  },
};

deleteV1Rankings();
insertArtists();

document.addEventListener('DOMContentLoaded', () => {
  addDragListeners();
  const festivalSelection = document.getElementById('festival-selection') as HTMLSelectElement;
  festivalSelection.addEventListener('change', () => {
    if (festivalSelection.value === selectedFestival) return;
    selectedFestival = festivalSelection.value as keyof typeof festivalInfo;
    removeRankings();
    insertArtists();
    updateTitle();
    addDragListeners();
  });
});

function addDragListeners() {
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
}

function updateTitle() {
  document.getElementById(
    'title'
  )!.textContent = `${festivalInfo[selectedFestival].name} Tier List`;
}

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

function getClosestSiblingToLeft(container: HTMLElement, mouseX: number, mouseY: number) {
  const staticDraggables = Array.from(
    container.querySelectorAll('[draggable]:not(.dragging)')
  ) as HTMLElement[];

  if (!staticDraggables.length) {
    return null;
  }

  let closestOffset = Number.POSITIVE_INFINITY;
  let closestElement: null | HTMLElement = null;
  staticDraggables.forEach(draggableItem => {
    const {width, height, x, y} = draggableItem.getBoundingClientRect();
    const itemXValue = x + width / 2;
    const itemYValue = y + height / 2;
    const itemXOffset = mouseX - itemXValue;
    const itemYOffset = Math.abs(mouseY - itemYValue);
    const maxYOffset = height / 2;
    if (itemXOffset > 0 && itemXOffset < closestOffset && itemYOffset <= maxYOffset) {
      closestElement = draggableItem;
      closestOffset = itemXOffset;
    }
  });
  return closestElement as HTMLElement | null;
}

function insertArtists() {
  addLineup();
  addPrevRankings();
}

function removeRankings() {
  document.querySelectorAll('.artist').forEach(item => {
    item.remove();
  });
}

function addLineup() {
  const fragment = document.createDocumentFragment();
  const prevRankedItems = getPrevRankedItems();
  const artistList = festivalInfo[selectedFestival].artists;
  for (const artist in artistList) {
    const {genre} = artistList[artist];
    const isAlreadyRanked = prevRankedItems.includes(artist);
    if (isAlreadyRanked) {
      continue;
    }
    const element = document.createElement('li');
    const tag = document.createElement('div');
    const tagColor = genreTagMap.get(genre) ?? '';
    tag.classList.add('tag', 'border-opacity-75', tagColor, 'border-t-[30px]', 'tooltip');
    tag.dataset.tooltip = genre;
    tag.style.setProperty('--after-visibilty', 'hidden');
    tag.style.setProperty('--after-opacity', '0');
    tag.addEventListener('mousemove', handleTagMouseMove.bind(null, tag));
    tag.addEventListener('mouseleave', handleTagMouseLeave.bind(null, tag));
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
      'relative',
      'artist'
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
  [key: TierRanking[number]]: string[];
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
  genre: Genre;
};

function addPrevRankings() {
  const prevRankings = getSavedRankings();

  for (const ranking in prevRankings) {
    insertSavedRankings(ranking as TierRanking, prevRankings[ranking]);
  }
}

function getSavedRankings() {
  const prevRankings = localStorage.getItem(selectedFestival);
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
  localStorage.setItem(selectedFestival, JSON.stringify(data));
  return;
}

function insertRanking(location: TierRanking, element: HTMLElement) {
  const rankings = getSavedRankings();
  if (lastClosestSiblingToRight) {
    const position = rankings[location].indexOf(lastClosestSiblingToRight.textContent!);
    rankings[location].splice(position, 0, element.textContent!);
  } else {
    rankings[location].push(element.textContent!);
  }
  saveRankings(rankings);
}

function insertSavedRankings(location: TierRanking, data: string[]) {
  const fragment = document.createDocumentFragment();
  const artistList = festivalInfo[selectedFestival].artists;
  data.forEach(item => {
    const {genre} = artistList[item];
    const element = document.createElement('li');
    const tag = document.createElement('div');
    const pElement = document.createElement('p');
    pElement.textContent = item;

    const tagColor = genreTagMap.get(genre) ?? '';
    tag.classList.add('tag', 'border-opacity-75', tagColor, 'border-t-[30px]', 'tooltip');
    tag.dataset.tooltip = genre;
    tag.style.setProperty('--after-visibilty', 'hidden');
    tag.style.setProperty('--after-opacity', '0');
    tag.addEventListener('mousemove', handleTagMouseMove.bind(null, tag));
    tag.addEventListener('mouseleave', handleTagMouseLeave.bind(null, tag));
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
      'relative',
      'artist'
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

function handleDragover(item: HTMLElement, event: DragEvent) {
  event.preventDefault();
  const draggingElement = document.querySelector('.dragging')!;
  const closestSiblingToRight = getClosestSiblingToRight(item, event.clientX, event.clientY);
  const closestSiblingToLeft = getClosestSiblingToLeft(item, event.clientX, event.clientY);
  const containerListElement = item.querySelector('ol')!;
  if ((event.target as HTMLElement).textContent !== draggingElement.textContent) {
    if (closestSiblingToLeft) {
      closestSiblingToLeft?.after(draggingElement);
    } else if (closestSiblingToRight) {
      containerListElement.insertBefore(draggingElement, closestSiblingToRight);
    } else {
      containerListElement.appendChild(draggingElement);
    }
  }
}

function handleDragStart(item: HTMLElement, event: DragEvent) {
  item.classList.add('dragging', 'opacity-50');
  const path = event.composedPath() as HTMLElement[];
  for (const element of path) {
    if (element.tagName === 'OL' && element.id !== 'starting-container') {
      if (item.dataset.ranking) {
        removeRanking(item.dataset.ranking as TierRanking, item.textContent!);
      } else {
        console.error('There is no ranking on this Element', item);
      }
    }
  }
}

function handleDragEnd(item: HTMLElement, event: DragEvent) {
  item.classList.remove('dragging', 'opacity-50');
  if (lastDragEndState !== event) {
    const path = event.composedPath() as HTMLElement[];
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

function handleTagMouseMove(item: HTMLElement, event: MouseEvent) {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;
  if (Math.abs(mouseY) >= Math.abs(mouseX)) {
    item.style.setProperty('--after-visibilty', 'visible');
    item.style.setProperty('--after-opacity', '1');
  } else {
    item.style.setProperty('--after-visibilty', 'hidden');
    item.style.setProperty('--after-opacity', '0');
  }
}

function handleTagMouseLeave(item: HTMLElement) {
  item.style.setProperty('--after-visibilty', 'hidden');
  item.style.setProperty('--after-opacity', '0');
}

function deleteV1Rankings() {
  localStorage.removeItem('rankings');
}
