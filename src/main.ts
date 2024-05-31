let lastClosestSiblingToRight: null | HTMLElement = null;
let lastDragEndState: null | DragEvent = null;
let selectedFestival: keyof typeof festivalInfo = 'escapade2024';
let numberOfSelections = 0;
const elementsArtists: Record<string, ArtistData> = {
  'CHRIS LAKE B2B CLOONEE': {genre: 'House'},
  EXCISION: {genre: 'Bass'},
  ILLENIUM: {genre: 'Future Bass'},
  'KASKADE REDUX': {genre: 'House'},
  SLANDER: {genre: 'Trap'},
  SUBTRONICS: {genre: 'Bass'},
  CLOZEE: {genre: 'Bass'},
  'THE DISCO BISCUITS': {genre: 'Other'},
  'FLY WITH US': {genre: 'Other'},
  'GREEN VELVET B2B PATRICK TOPPING': {genre: 'House'},
  'LIQUID STRANGER': {genre: 'Bass'},
  LSDREAM: {genre: 'Bass'},
  'BARCLAY CRENSHAW': {genre: 'Bass'},
  'THE BLESSED MADONNA': {genre: 'House'},
  'BLOND:ISH': {genre: 'House'},
  'BOOGIE T': {genre: 'Bass'},
  'DESERT HEARTS': {genre: 'House'},
  DIMENSION: {genre: 'Drum & Bass'},
  'DISCO LINES': {genre: 'House'},
  'DR. FRESCH': {genre: 'House'},
  'THE FLOOZIES': {genre: 'Other'},
  'G JONES': {genre: 'Bass'},
  INZO: {genre: 'Future Bass'},
  'JUSTIN MARTIN': {genre: 'House'},
  KASABLANCA: {genre: 'Other'},
  MATRODA: {genre: 'House'},
  'SUB FOCUS': {genre: 'Drum & Bass'},
  TROYBOI: {genre: 'Trap'},
  'WALKER & ROYCE': {genre: 'House'},
  '5AM TRIO': {genre: 'Bass'},
  AIMMIA: {genre: 'Other'},
  AHADADREAM: {genre: 'Other'},
  AUSTERIA: {genre: 'Other'},
  AZZECCA: {genre: 'House'},
  ÆONMODE: {genre: 'Other'},
  'BOOGIE TRIO': {genre: 'Other'},
  CANABLISS: {genre: 'Bass'},
  'COOL CUSTOMER': {genre: 'Other'},
  'ELI FOLA': {genre: 'Other'},
  FLY: {genre: 'Other'},
  'GOLDEN PONY': {genre: 'House'},
  HAMDI: {genre: 'Other'},
  'THE ILLUSTRIOUS BLACKS': {genre: 'Other'},
  'LEE REYNOLDS': {genre: 'House'},
  LESPECIAL: {genre: 'Other'},
  LYNY: {genre: 'Trap'},
  MARBS: {genre: 'House'},
  'MARVEL YEARS': {genre: 'Other'},
  'MAX STYLER': {genre: 'House'},
  'MIKEY LION': {genre: 'House'},
  NHII: {genre: 'House'},
  'NIGHT TALES': {genre: 'House'},
  'ODD MOB & OMNOM HYPERBEAM': {genre: 'House'},
  'PLAYER DAVE': {genre: 'Other'},
  PORKY: {genre: 'Other'},
  'ROME IN SILVER': {genre: 'Other'},
  SAKA: {genre: 'Other'},
  'SPACE BACON': {genre: 'Other'},
  'SPACE WIZARD': {genre: 'Bass'},
  'SPLINTERED SUNLIGHT': {genre: 'Other'},
  SUNSQUABI: {genre: 'Other'},
  'TOWNSHIP REBELLION': {genre: 'Other'},
  TVBOO: {genre: 'Bass'},
  VNSSA: {genre: 'House'},
  NALA: {genre: 'Other'},
  WRECKNO: {genre: 'Bass'},
  ZINGARA: {genre: 'Other'},
  '9049': {genre: 'Other'},
  BSBO: {genre: 'Other'},
  BENITO: {genre: 'Other'},
  BERGER: {genre: 'Other'},
  BEYZ: {genre: 'Other'},
  'CUPPA T': {genre: 'Other'},
  DCAL: {genre: 'Other'},
  'DICE MAN': {genre: 'Other'},
  'EARTH SIGNS': {genre: 'Other'},
  FIRE: {genre: 'Other'},
  HOKI: {genre: 'Other'},
  KROOK: {genre: 'Other'},
  LAARIS: {genre: 'Other'},
  'LADY SHAY': {genre: 'Other'},
  LAUNCHES: {genre: 'Other'},
  'MAX A': {genre: 'Other'},
  DANA: {genre: 'Other'},
  MILAN: {genre: 'Other'},
  MILLER: {genre: 'Other'},
  OBA: {genre: 'Other'},
  'FILI PAPA': {genre: 'Other'},
  RAUDRA: {genre: 'Other'},
  'SKY SOY YOON': {genre: 'Other'},
  ZLATA: {genre: 'Other'},
  'BOB MOSES CLUB SET': {genre: 'House'},
  'SULLIVAN KING B2B KAYZO': {genre: 'Bass'},
  'OF THE TREES': {genre: 'Bass'},
  'SARA LANDRY': {genre: 'Techno'},
  'TAPE B': {genre: 'Other'},
  "IT'S MURPH": {genre: 'Other'},
};

const escaArtists: Record<string, ArtistData> = {
  'AC SLATER': {genre: 'House'},
  ACRAZE: {genre: 'House'},
  ALLEYCVT: {genre: 'Trap'},
  'ARMIN VAN BUUREN': {genre: 'Trance'},
  AVAO: {genre: 'Trance'},
  BUNT: {genre: 'House'},
  CELO: {genre: 'Other'},
  'THE CHAINSMOKERS': {genre: 'Future Bass'},
  'CHASE & STATUS': {genre: 'Drum & Bass'},
  'CHEYENNE GILES': {genre: 'House'},
  CLAPTONE: {genre: 'House'},
  'DAVE SUMMER': {genre: 'House'},
  "DIESEL (SHAQUILLE O'NEAL)": {genre: 'Bass'},
  'DOG EAT DOG (CRANKDAT X RIOT TEN)': {genre: 'Bass'},
  DOMENO: {genre: 'House'},
  DRAEDEN: {genre: 'Other'},
  'FERRY CORSTEN PRESENTS GOURYELLA': {genre: 'Trance'},
  FISHER: {genre: 'House'},
  'GANJA WHITE NIGHT': {genre: 'Bass'},
  'GG MAGREE': {genre: 'Trap'},
  GOODBOYS: {genre: 'House'},
  GORILLAT: {genre: 'Bass'},
  HAIRTAGE: {genre: 'Trap'},
  HAMRO: {genre: 'Bass'},
  HÜGEL: {genre: 'House'},
  'ILAN BLUESTONE': {genre: 'Trance'},
  ILLENIUM: {genre: 'Future Bass'},
  'IMANU B2B NITEPUNK': {genre: 'Drum & Bass'},
  ISOXO: {genre: 'Trap'},
  'JAMES HYPE': {genre: 'House'},
  KAYZO: {genre: 'Hardstyle'},
  KNOCK2: {genre: 'Trap'},
  KREAM: {genre: 'House'},
  'KYLE WALKER': {genre: 'House'},
  LEV3L: {genre: 'Bass'},
  LEVITY: {genre: 'Bass'},
  'LOST FREQUENCIES': {genre: 'House'},
  'LUCAS & STEVE': {genre: 'House'},
  MADDIX: {genre: 'Techno'},
  'MATT SASSARI': {genre: 'Techno'},
  'MAU P': {genre: 'House'},
  'MAX STYLER': {genre: 'House'},
  MEROW: {genre: 'House'},
  'MICHAEL SPARKS': {genre: 'House'},
  MORTEN: {genre: 'House'},
  'NIIKO X SWAE': {genre: 'House'},
  'NO THANKS': {genre: 'House'},
  NOIZU: {genre: 'House'},
  ODDKIDOUT: {genre: 'Other'},
  'PRETTY PINK': {genre: 'House'},
  'RETURN OF THE JADED': {genre: 'House'},
  'SAMMY VIRJI': {genre: 'Other'},
  'SEVEN LIONS': {genre: 'Future Bass'},
  SLANDER: {genre: 'Trap'},
  'STEVE ANGELLO': {genre: 'House'},
  'STEVE AOKI': {genre: 'House'},
  SUBTRONICS: {genre: 'Bass'},
  'TAPE B': {genre: 'Bass'},
  'TCHAMI X MALAA (NO REDEMPTION)': {genre: 'House'},
  'VINI VICI': {genre: 'Psytrance'},
  ZEDD: {genre: 'House'},
  ZUBAH: {genre: 'Bass'},
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
  escapade2024: {
    artists: escaArtists,
    name: 'Escapade 2024',
  },
  elements2024: {
    artists: elementsArtists,
    name: 'Elements 2024',
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
