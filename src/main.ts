// @ts-nocheck comment
//Remove this after fixing ts issues
let lastClosestSiblingToRight;
let lastDragEndState = null;
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
  const artists = [
    '12th Planet',
    '8Kays',
    '999999999',
    'A Hundred Drums',
    'Abana',
    'Above & Beyond',
    'ACRAZE',
    'ACRAZE B2B Noizu',
    'Adrenalize',
    'Afrojack (Sunrise Set)',
    'AK Sports',
    'Alison Wonderland',
    'Alok',
    'Anabel Englund',
    'Anden',
    'Andy C',
    'Armin van Buuren',
    'ARMNHMR',
    'ARTBAT',
    'atDusk',
    'Audiofreq',
    'Azzecca',
    'Baggi',
    'Barely Alive',
    'Ben Nicky presents Emotional Havoc',
    'Ben Nicky presents Xtreme B2B Sub Zero Project',
    'Ben UFO',
    'Bensley B2B Justin Hawkes',
    'Billy Gillies',
    'Biscits B2B Martin Ikin',
    'Black Tiger Sex Machine',
    'Blanke',
    'Blastoyz',
    'Bleu Clair',
    'Boogie T',
    'Borgore B2B Level Up',
    'Boris Brejcha',
    'Born Dirty',
    'Brennan Heart',
    'Camden Cox',
    'Capozzi',
    'Carola',
    'Champagne Drip',
    'Chaney',
    'Chris Lake',
    'Chris Lorenzo',
    'CID B2B Sage Armstrong',
    'CID',
    'Cloverdale',
    'Code Black',
    'Coone',
    'Cosmic Gate',
    'D-Sturb',
    'Da Tweekaz',
    'Danny Daze',
    'Darren Styles',
    'David Guetta',
    'David Morales',
    'Deadly Guns',
    'Deeper Purpose',
    'Dennis Ferrer',
    'Deorro',
    'Dimension',
    'Dionysus & Yosuf present: Bigger Stronger Faster',
    'Dirt Monkey',
    'Disco Lines',
    'DJ AniMe',
    'DJ Isaac',
    'DJ Minx',
    'Dom Dolla',
    'Dombresky',
    'Dr Phunk',
    'Duke Dumont',
    'Dustin Husain',
    'Eli Brown',
    'Eliminate',
    'Ellen Allien',
    'Enamour',
    'Eptic',
    'Excision B2B Dion Timmer',
    'Excision',
    'Fallen B2B Richter with MC Dino',
    'Fallon',
    'Ferreck Dawn',
    'Ferry Corsten',
    'Fisher',
    'Frame (Declan James & Decoder)',
    'Franky Wah',
    'Fred Everything',
    'Friction',
    'FrostTop',
    'FuntCase',
    'Fury B2B Nightstalker',
    'Galantis',
    'Gammer B2B Tweekacore',
    'Gareth Emery',
    'Gentlemens Club',
    'Giuseppe Ottaviani',
    'Goodboys',
    'GRiZ',
    'Griztronics',
    'Habstrakt',
    'HANA',
    'Hannah Wants',
    'Hint Of Lavender',
    'HOL!',
    'Hot Since 82',
    'Hugel',
    'HVDES',
    'I Hate Models',
    'IMANU',
    'J. Worra',
    'Jaded',
    'James Hype',
    'jamesjamesjames',
    'Jeff Mills',
    'Jerome Isma-Ae',
    'John Bryars',
    'Jorza',
    'Joshwa',
    'JSTJR',
    'Kaivon',
    'Kaleena Zanders',
    'Kaskade Redux',
    'Kaytranada',
    'KETTAMA',
    'Kill Script',
    'Korolova',
    'Kream',
    'Lady Faith',
    'Lady Sinclair',
    'Lane 8',
    'Layla Benitez',
    'Le Youth',
    'Lenny Dee',
    'Levenkhan',
    'Lil Texas',
    'Loco Dice B2B Fisher',
    'Loud Luxury',
    'Louie Vega',
    'Lovefingers + Heidi Lawden',
    'Maarten de Jong',
    'Malaa B2B Wax Motif',
    'Marc V',
    'Marshmello',
    'Marshmello B2B Svdden Death',
    'Marten Hørger',
    'Martin Garrix',
    'The Martinez Brothers',
    'Matroda',
    'Matt Fax',
    'Mau P',
    'Meduza',
    'Memba',
    'Metrik B2B Grafix',
    'Miane',
    'Michael Bibi',
    'Midnight Tyrannosaurus',
    'Mike Dunn',
    'MISS DRE',
    'Mochakk',
    'Modapit',
    'Moody Good (Throwback Set)',
    'MORTEN',
    'Mrotek',
    'Ms. Mada B2B Bakke',
    'Nala',
    'Netsky',
    'Noizu',
    'Nostalgix',
    'Odd Mob',
    'Omar Santana',
    'Paco Osuna',
    'Patrick Topping',
    'Paul Denton',
    'Pauline Herr',
    'Peekaboo',
    'Pretty Pink',
    'Ray Volpe',
    'Reaper',
    'Rebelion',
    'Reinier Zonneveld (Live)',
    'Riot Ten B2B Jessica Audiffred',
    'Rob Gee 30 Years',
    'Said The Sky',
    'salute',
    'San Pacho',
    'SAYMYNAME',
    'Shei',
    'SHERELLE',
    'Ship Wrek',
    'SIDEPIECE',
    'SLANDER',
    'Softest Hard',
    'Sonny Fodera',
    'SOREN',
    'Sound Rush',
    'Space Laces',
    'Space Motion',
    'Spencer Brown',
    'Suae',
    'Sub Zero Project',
    'Subtronics',
    'Sullivan King B2B Kai Wachi',
    'Sullivan King',
    'Sultan + Shepard',
    'Svdden Death: Into The Inferno',
    'Tchami B2B AC Slater',
    'Things You Say',
    'Tiësto',
    'TOBEHONEST',
    'Todd Terry',
    'Tom & Collins',
    'Township Rebellion',
    'Triode',
    'Tsu Nami',
    'Valentino Khan',
    'Vini Vici',
    'Warface B2B D-Sturb',
    'Warface',
    'Wax Motif',
    'Westend',
    'Will Atkinson',
    'Will Clarke',
    'Wooli',
    'Yellow Claw',
    'yetep',
    'Yoshi & Razner',
    'Yotto',
    'Zedd',
    'Zeds Dead B2B Chase & Status',
  ];
  const fragment = document.createDocumentFragment();
  const prevRankedItems = getPrevRankedItems();
  artists.forEach(artist => {
    const isAlreadyRanked = prevRankedItems.includes(artist);
    if (isAlreadyRanked) {
      return;
    }
    const element = document.createElement('li');
    const pElement = document.createElement('p');
    pElement.textContent = artist;
    element.appendChild(pElement);

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
      'items-center'
    );
    element.classList.add(
      'h-24',
      'w-24',
      'flex',
      'bg-neutral-300/50',
      'border-solid',
      'border-neutral-700',
      'border-2'
    );
    element.setAttribute('draggable', 'true');
    fragment.appendChild(element);
  });
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
    const element = document.createElement('li');
    const pElement = document.createElement('p');
    pElement.textContent = item;

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
      'items-center'
    );
    element.classList.add(
      'h-24',
      'w-24',
      'flex',
      'bg-neutral-300/50',
      'border-solid',
      'border-neutral-600',
      'border-2'
    );
    element.appendChild(pElement);
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
  const artists = [
    '12th Planet',
    '8Kays',
    '999999999',
    'A Hundred Drums',
    'Abana',
    'Above & Beyond',
    'ACRAZE',
    'ACRAZE B2B Noizu',
    'Adrenalize',
    'Afrojack (Sunrise Set)',
    'AK Sports',
    'Alison Wonderland',
    'Alok',
    'Anabel Englund',
    'Anden',
    'Andy C',
    'Armin van Buuren',
    'ARMNHMR',
    'ARTBAT',
    'atDusk',
    'Audiofreq',
    'Azzecca',
    'Baggi',
    'Barely Alive',
    'Ben Nicky presents Emotional Havoc',
    'Ben Nicky presents Xtreme B2B Sub Zero Project',
    'Ben UFO',
    'Bensley B2B Justin Hawkes',
    'Billy Gillies',
    'Biscits B2B Martin Ikin',
    'Black Tiger Sex Machine',
    'Blanke',
    'Blastoyz',
    'Bleu Clair',
    'Boogie T',
    'Borgore B2B Level Up',
    'Boris Brejcha',
    'Born Dirty',
    'Brennan Heart',
    'Camden Cox',
    'Capozzi',
    'Carola',
    'Champagne Drip',
    'Chaney',
    'Chris Lake',
    'Chris Lorenzo',
    'CID B2B Sage Armstrong',
    'CID',
    'Cloverdale',
    'Code Black',
    'Coone',
    'Cosmic Gate',
    'D-Sturb',
    'Da Tweekaz',
    'Danny Daze',
    'Darren Styles',
    'David Guetta',
    'David Morales',
    'Deadly Guns',
    'Deeper Purpose',
    'Dennis Ferrer',
    'Deorro',
    'Dimension',
    'Dionysus & Yosuf present: Bigger Stronger Faster',
    'Dirt Monkey',
    'Disco Lines',
    'DJ AniMe',
    'DJ Isaac',
    'DJ Minx',
    'Dom Dolla',
    'Dombresky',
    'Dr Phunk',
    'Duke Dumont',
    'Dustin Husain',
    'Eli Brown',
    'Eliminate',
    'Ellen Allien',
    'Enamour',
    'Eptic',
    'Excision B2B Dion Timmer',
    'Excision',
    'Fallen B2B Richter with MC Dino',
    'Fallon',
    'Ferreck Dawn',
    'Ferry Corsten',
    'Fisher',
    'Frame (Declan James & Decoder)',
    'Franky Wah',
    'Fred Everything',
    'Friction',
    'FrostTop',
    'FuntCase',
    'Fury B2B Nightstalker',
    'Galantis',
    'Gammer B2B Tweekacore',
    'Gareth Emery',
    'Gentlemens Club',
    'Giuseppe Ottaviani',
    'Goodboys',
    'GRiZ',
    'Griztronics',
    'Habstrakt',
    'HANA',
    'Hannah Wants',
    'Hint Of Lavender',
    'HOL!',
    'Hot Since 82',
    'Hugel',
    'HVDES',
    'I Hate Models',
    'IMANU',
    'J. Worra',
    'Jaded',
    'James Hype',
    'jamesjamesjames',
    'Jeff Mills',
    'Jerome Isma-Ae',
    'John Bryars',
    'Jorza',
    'Joshwa',
    'JSTJR',
    'Kaivon',
    'Kaleena Zanders',
    'Kaskade Redux',
    'Kaytranada',
    'KETTAMA',
    'Kill Script',
    'Korolova',
    'Kream',
    'Lady Faith',
    'Lady Sinclair',
    'Lane 8',
    'Layla Benitez',
    'Le Youth',
    'Lenny Dee',
    'Levenkhan',
    'Lil Texas',
    'Loco Dice B2B Fisher',
    'Loud Luxury',
    'Louie Vega',
    'Lovefingers + Heidi Lawden',
    'Maarten de Jong',
    'Malaa B2B Wax Motif',
    'Marc V',
    'Marshmello',
    'Marshmello B2B Svdden Death',
    'Marten Hørger',
    'Martin Garrix',
    'The Martinez Brothers',
    'Matroda',
    'Matt Fax',
    'Mau P',
    'Meduza',
    'Memba',
    'Metrik B2B Grafix',
    'Miane',
    'Michael Bibi',
    'Midnight Tyrannosaurus',
    'Mike Dunn',
    'MISS DRE',
    'Mochakk',
    'Modapit',
    'Moody Good (Throwback Set)',
    'MORTEN',
    'Mrotek',
    'Ms. Mada B2B Bakke',
    'Nala',
    'Netsky',
    'Noizu',
    'Nostalgix',
    'Odd Mob',
    'Omar Santana',
    'Paco Osuna',
    'Patrick Topping',
    'Paul Denton',
    'Pauline Herr',
    'Peekaboo',
    'Pretty Pink',
    'Ray Volpe',
    'Reaper',
    'Rebelion',
    'Reinier Zonneveld (Live)',
    'Riot Ten B2B Jessica Audiffred',
    'Rob Gee 30 Years',
    'Said The Sky',
    'salute',
    'San Pacho',
    'SAYMYNAME',
    'Shei',
    'SHERELLE',
    'Ship Wrek',
    'SIDEPIECE',
    'SLANDER',
    'Softest Hard',
    'Sonny Fodera',
    'SOREN',
    'Sound Rush',
    'Space Laces',
    'Space Motion',
    'Spencer Brown',
    'Suae',
    'Sub Zero Project',
    'Subtronics',
    'Sullivan King B2B Kai Wachi',
    'Sullivan King',
    'Sultan + Shepard',
    'Svdden Death: Into The Inferno',
    'Tchami B2B AC Slater',
    'Things You Say',
    'Tiësto',
    'TOBEHONEST',
    'Todd Terry',
    'Tom & Collins',
    'Township Rebellion',
    'Triode',
    'Tsu Nami',
    'Valentino Khan',
    'Vini Vici',
    'Warface B2B D-Sturb',
    'Warface',
    'Wax Motif',
    'Westend',
    'Will Atkinson',
    'Will Clarke',
    'Wooli',
    'Yellow Claw',
    'yetep',
    'Yoshi & Razner',
    'Yotto',
    'Zedd',
    'Zeds Dead B2B Chase & Status',
  ];
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
