import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-practiceplover',
  templateUrl: './practiceplover.component.html',
  styleUrls: ['./practiceplover.component.css']
})
export class PracticePloverComponent implements OnInit {
  constructor() { }


  @ViewChild('entry') vc: ElementRef;

  @HostListener('window:focus', ['$event'])
      onFocus(event: any): void 
      {
        setTimeout(() =>
        {
          this.vc.nativeElement.focus();
        }, 1)
          // this.vc.nativeElement.focus();
      }

  shouldFocus: boolean = true;

  private wordList = ["test", "ace"];
  
  numWords: number = 1000;
  theWord: string = "";
  typedWord: string;

  wordsLeft: number = 0;

  lessons = ["w1", "w2", "t1", "t2", "t3", "tha1", "tha2", "tha3", "tha4", "thb", "thc", "thc2", "thd", "thd2", "the", "the2"];

  les = 
  {
    "w1": false,
    "w2": false,
    "t1": false, 
    "t2": false,
    "t3": false, 
    "tha1": false, 
    "tha2": false, 
    "tha3": false, 
    "tha4": false, 
    "thb": false, 
    "thc": false, 
    "thc2": false, 
    "thd": false, 
    "thd2": false, 
    "the": false, 
    "the2":false,
  }

  lists = 
  {
    "w1": ['sap', 'sag', 'sat', 'sass', 'sad', 'sop', 'sob', 'sell', 'set', 'says', 'tar', 'tap', 'tab', 'tag', 'tad', 'tour', 'top', 'toll', 'tell', 'tough', 'tub', 'tug', 'car', 'cap', 'cab', 'cat', 'cad', 'core', 'cop', 'cog', 'cot', 'cod', 'keg', 'cuff', 'cur', 'cup', 'cub', 'cull', 'cut', 'cuss', 'pal', 'pat', 'pass', 'pad', 'pour', 'poll', 'pot', 'pod', 'pep', 'peg', 'pet', 'puff', 'pup', 'pub', 'pull', 'pug', 'put', 'pus', 'war', 'wag', 'wad', 'was', 'wore', 'web', 'well', 'wet', 'wed', 'half', 'hag', 'hat', 'had', 'has', 'hop', 'hog', 'hot', 'her', 'hell', 'head', 'huff', 'hub', 'hull', 'hug', 'hut', 'rap', 'rag', 'rat', 'roar', 'rob', 'roll', 'rot', 'rod', 'red', 'rough', 'rub', 'rug', 'rut'],
    "w2": ['course', 'cover', 'hover', 'rabble', 'refer', 'rebel', 'robbed', 'rubbed', 'rubble', 'straps', 'strapped', 'trouble', 'troubles', 'waft', 'webbed'],
    "t1": ['past', 'castle', 'stressed', 'pressed', 'passed', 'test', 'tussle', 'crossed'], 
    "t2": ['several', 'suppress', 'averages', 'tablet', 'tepid', 'superb', 'scaffold', 'scarlet', 'starlet', 'started', 'ruffled', 'scuffled', 'corrupted', 'spotted', 'horrible', 'effort'],
    "t3": ['edit', 'elves', 'twelve', 'credit', 'portal'], 
    "tha1": ['still', 'rig', 'hit', 'sip', 'sir', 'skirt', 'crypt', 'syrup', 'pig', 'rift', 'scribble', 'rid', 'river', 'hid', 'wilt', 'wig', 'wit', 'spill'], 
    "tha2": ['aids', 'ace', 'ate', 'able', 'ape', 'raid', 'raise', 'rail', 'rate', 'pay', 'paid', 'pace', 'tape', 'spray', 'praise', 'weaver', 'trees', 'eel', 'eat', 'evil', 'ear', 'heat', 'heap', 'wield', 'weird', 'peer', 'priest', 'tree', 'tweeze', 'tweed', 'seat', 'cease', 'seed', 'seize', 'secrete', 'ire', 'I\'ll', 'ice', 'rife', 'ripe', 'right', 'height', 'wild', 'pipe', 'pride', 'prize', 'kite', 'type', 'spite', 'hope', 'spore', 'post', 'sold', 'prose', 'ode', 'oat', 'over', 'robe', 'rope', 'roar', 'rove', 'host', 'wove', 'wrote', 'pole', 'pose', 'cope', 'coat', 'code', 'crow', 'told', 'cube', 'use', 'rude', 'rule', 'pure', 'prude', 'Proust', 'cure', 'cruel', 'crude', 'cruise', 'truce', 'truth', 'spew', 'skew'], 
    "tha3": ['all', 'awful', 'raw', 'call', 'caught', 'crawl', 'sprawl', 'scald', 'straw', 'halt', 'hall', 'wall', 'out', 'how', 'howl', 'house', 'pout', 'power', 'prowl', 'tower', 'spouse', 'sprout', 'scour', 'soy', 'oil', 'coil', 'toil', 'soil'], 
    "tha4": ['wheel', 'wheal', 'read', 'reed', 'reel', 'real', 'heel', 'heal', 'hear', 'here', 'ware', 'wear', 'pea', 'pee', 'peace', 'piece', 'tee', 'tea', 'sea', 'see', 'tail', 'tale', 'sale', 'sail', 'stare', 'stair', 'waist', 'waste', 'hood', 'rude', 'pool', 'crew', 'soot', 'truce', 'school', 'ruse', 'road', 'rode', 'roar', 'toad', 'soar', 'sore'], 
    "thb": ['due', 'duffer', 'deferral', 'devil', 'double', 'drug', 'depress', 'desire', 'dessert', 'destroyed', 'feral', 'ford', 'for', 'phrase', 'fierce', 'fable', 'feeble', 'sphere', 'fries', 'leader', 'lace', 'letter', 'lust', 'lovers', 'glad', 'glare', 'glides', 'give', 'get', 'group', 'guest', 'guide', 'gravel', 'cigarette', 'goblet', 'bored', 'board', 'bruise', 'buyer', 'bobble', 'brutal', 'zest', 'zap', 'zag', 'vile', 'vase', 'virus', 'eke', 'rockets', 'correct', 'quake', 'task'], 
    "thc": ['nag', 'nap', 'nab', 'nut', 'never', 'nestle', 'nod', 'nest', 'nerd', 'pent', 'parent', 'went', 'earns', 'rant', 'hunt', 'hand', 'panel', 'stun', 'must', 'muffle', 'maggot', 'mallet', 'smuggle', 'morals', 'arm', 'rum', 'harm', 'tempt', 'term', 'calmed', 'palm', 'qualms', 'jut', 'jug', 'just', 'jest', 'jets', 'job', 'jostle', 'jazz', 'jagged', 'urge', 'edge', 'average', 'purge', 'trudge', 'storage', 'yard', 'yet', 'yurt'], 
    "thc2": ['noun', 'inhibit', 'nudge', 'notes', 'knack', 'enacts', 'neck', 'known', 'knock', 'gnome', 'noise', 'novice', 'named', 'neural', 'snide', 'announce', 'loin', 'donor', 'winner', 'dinner', 'learned', 'lend', 'allowance', 'flaunt', 'deference', 'different', 'dance', 'diner', 'demand', 'grunt', 'grant', 'gleans', 'severance', 'cement', 'design', 'mound', 'mourn', 'maim', 'matter', 'commit', 'commend', 'smudge', 'smuggle', 'semester', 'forms', 'primed', 'serum', 'time', 'hermit', 'maim', 'plumb', 'dream', 'gym', 'germ', 'jam', 'blame', 'bottom', 'grammar', 'balm', 'psalm', 'judge', 'journal', 'join', 'joyful', 'jam', 'gerunds', 'forge', 'budgets', 'average', 'leverage', 'merge', 'beige', 'carriage', 'fidget', 'frigid', 'digit', 'gadget', 'garage', 'grudge', 'turgid', 'year', 'yearn', 'yolk'], 
    "thd": ['thefts', 'thud', 'thus', 'thug', 'hath', 'earth', 'oath', 'health', 'wealth', 'worth', 'path', 'troth', 'chess', 'chest', 'chart', 'chat', 'chop', 'chore', 'chaff', 'touch', 'etch', 'ratchet', 'hutch', 'hatch', 'watch', 'patch', 'catch', 'crutch', 'such', 'sketch', 'stretch', 'retch', 'shell', 'shuffled', 'shall' , 'ash', 'rush', 'rash', 'hush', 'hash', 'wash', 'push', 'posh', 'crush', 'crash', 'trash', 'squash', 'stash', 'anger', 'storing', 'rung', 'rang', 'prong', 'tongue', 'twang', 'song', 'stung', 'strong', 'sponge', 'orange' ], 
    "thd2": ['thing', 'thence', 'them', 'thumb', 'thrill', 'throng', 'thrash', 'seethe', 'method', 'math', 'birth', 'breath', 'fifth', 'death', 'sleuth', 'blithe', 'growth', 'choose', 'chasm', 'chuck', 'check', 'churn', 'cherub', 'chin', 'channel', 'chant', 'chance', 'chive', 'charm', 'bleach', 'much', 'latch', 'leech', 'match', 'botch', 'fetch', 'ditch', 'glitch', 'vouch', 'slouch', 'smooch', 'splotch', 'shim', 'slime', 'shrewd', 'shrine', 'shuck', 'shark', 'shock', 'sheesh', 'shrivel', 'sugar', 'lash', 'mesh', 'mash', 'plush', 'bush', 'brush', 'fish', 'fresh', 'flush', 'flesh', 'flash', 'dash', 'delish', 'gosh', 'gash', 'shush', 'slash', 'smush', 'slosh', 'splash', 'squish', 'Irish', 'anger', 'finger', 'dung', 'lung', 'ping', 'pong', 'among', 'bring', 'young', 'fang', 'flung', 'gang', 'belong', 'change', 'range', 'hinge', 'lounge', 'plunge', 'cringe', 'tinge', 'fringe', 'derange', 'grunge', 'syringe'], 
    "the": ['hemp', 'trump', 'rump', 'romp', 'ramp', 'pump', 'camp', 'cramp', 'tamp', 'pomp', 'curve', 'carve', 'serve', 'swerve', 'starve' , 'squelch', 'hulk', 'calc', 'sulk', 'talc', 'rank', 'honk', 'wonk', 'prank', 'crank', 'tank', 'session', 'option', 'ration', 'portion', 'passion', 'cushion', 'caption', 'suppression', 'section', 'correction', 'suction', 'arch', 'ranch', 'hunch', 'porch', 'crunch', 'quench', 'torch', 'trench', 'stench', 'starch' ], 
    "the2": ['limp', 'blimp', 'chomp', 'clamp', 'damp', 'slump', 'shrimp', 'jump', 'nerve', 'verve', 'marvel', 'village', 'mulch', 'bulge', 'belch', 'bilge', 'gulch', 'pillage', 'ilk', 'milk', 'bulk', 'silk', 'bilk', 'wink', 'mink', 'plank', 'brink', 'blink', 'blank', 'flank', 'flunk', 'dank', 'drink', 'gunk', 'junk', 'link', 'chunk', 'lesion', 'provision', 'fusion', 'lotion', 'operation', 'mission', 'motion', 'pollution', 'election', 'auction', 'correction', 'collection', 'fraction', 'friction', 'depiction', 'selection', 'seduction', 'finch', 'clench', 'branch', 'march', 'lurch', 'lynch', 'birch', 'brunch', 'church', 'drench'],
  }
  tempList = [];
  testWords = [];

  shuffle(a) 
  {
      for (let i = a.length - 1; i > 0; i--) 
      {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }


  activateLists()
  {
    this.testWords = [];
    for (let l in this.les)
    {
      if (this.les[l] === true)
      {
        this.testWords = this.testWords.concat(this.lists[l]);
        this.testWords = this.shuffle(this.testWords);
      }
    }

    this.tempList = this.testWords.slice();

    

    while (this.testWords.length > this.numWords)
    {

      this.testWords.shift();
    }

    if (this.testWords.length === 0)
    {
      this.wordsLeft = 0;
    }
    else
    {
      this.wordsLeft = this.testWords.length;
    }
    

    this.vc.nativeElement.focus();
  }

  onKeyUp(event: any)
  {
    
    if (this.typedWord.replace(/ /g, "") === this.testWords[0])
    {
      this.theWord = this.typedWord;
      this.testWords.shift();
      this.typedWord = "";
    }

    if (this.testWords.length === 0)
    {
      this.wordsLeft = 0;
    }
    else
    {
      this.wordsLeft = this.testWords.length;
    }
  }

  cutList(event: any)
  {
    if (event.keyCode === 13)
    {

      alert(this.testWords.length);
      alert(this.numWords)
      alert(this.tempList)
      if (this.testWords.length <= this.numWords)
      {
        this.testWords = this.tempList;
      }
      alert(this.testWords.length);
      while (this.testWords.length > this.numWords)
      {

        this.testWords.shift();
      }
      this.vc.nativeElement.focus();
    }
    if (this.testWords.length === 0)
    {
      this.wordsLeft = 0;
    }
    else
    {
      this.wordsLeft = this.testWords.length;
    }
  }

  selectAll()
  {
    for (let l in this.les)
    {
      this.les[l] = true;
    }
    this.activateLists();
  }

  clearAll()
  {
    for (let l in this.les)
    {
      this.les[l] = false;
    }
    this.activateLists();
  }

  ngOnInit()
  {

  }

  ngAfterViewInit()
  {
    this.vc.nativeElement.focus();
  }

}
