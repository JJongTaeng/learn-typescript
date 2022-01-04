interface DropDownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropDownItem<string>[] = [
  {value: 'naver.com', selected: true},
  {value: 'gmail.com', selected: false},
  {value: 'hanmail.net', selected: false},
];

const numberOfProducts: DropDownItem<number>[] = [
  {value: 1, selected: true},
  {value: 2, selected: false},
  {value: 3, selected: false},
];

function createDropdownItem<Value>(item: DropDownItem<Value>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  createDropdownItem<number>(product);
})


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name: 'Tony', age: 33, skill: 'JS'}
}

var tony = introduce();

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

console.log((tony as Developer).skill); // error skill이 없을 수 있다고 에러발생


// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
