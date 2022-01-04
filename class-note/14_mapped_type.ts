type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 12,
  Thor: '2000', // error
}