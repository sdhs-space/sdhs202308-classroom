const name1 = "민석1"; // 선언 한 번하는데 값도 한 번만 넣을 수 있다.
let name2 = "민석2"; // 선언 한 번하는데 값은 여러번 변경할 수 있어
// var name3 = "민석3"; // 선언 여러번가능하고 값도 여러번 변경가능해

let array = [1, 2, 3, 4, 5, 7, 9]; // 배열은 0부터 시작하며 key 를 index 라고 부른다.
let object1 = {
  이름: "홍길동",
  국어: 89,
  수학: 77,
  영어: 98,
  총점: 264,
};
let object2 = {
  이름: "팥쥐",
  국어: 78,
  수학: 95,
  영어: 80,
  총점: 253,
};
let object3 = {
  이름: "콩쥐",
  국어: 99,
  수학: 98,
  영어: 89,
  총점: 286,
};

console.log([object1, object2, object3]);
console.log(object1["이름"]);
console.table([object1, object2, object3]);

/* 함수 */
// 똑같은 코드를 자주 사용을 해, 길거나 양이 많아 분할을 하고 싶어

function hello(name) {
  console.log("hello", name);
}

hello(object1["이름"]);
hello(object2["이름"]);
hello(object3["이름"]);

console.log("hello", object1["이름"]);
console.log("hello", object2["이름"]);
console.log("hello", object3["이름"]);

// DOM API

const $group = document.getElementById("group");
const $groupA = document.querySelector("#group");
const $groupItemFirst = document.querySelector(".group-item");
const $groupItems = document.querySelectorAll(".group-item");

console.log("getElementById", $group);
console.log("querySelector", $groupA);
console.log($groupItemFirst);
console.log($groupItems);

const $div = document.createElement("div");
console.log($div);

/*  ParentNode API
 - parentNode.appendChild(childNode) : 자식요소 추가
 - parentNode.removeChild(childNode) : 자식요소 제거
 */

$group.appendChild($div);
// $group.removeChild($groupItemFirst);
// $group.appendChild($groupItemFirst);

/*  ElementNode API
element.style.property : css 적용
element.textContent : element 의 text 를 가져옴
element.innerHTML : html 적용

element.addEventListener('event',function) : 이벤트 리스너 추가
element.removeEventListener('event',function) : 이벤트 리스너 제거

element.classList.add('classname') : 클래스 생성
element.classList.remove('classname') : 클래스 제거
element.classList.toggle('classname') : 클래스 있으면 제거, 없으면 생성
element.classList.contains('classname') : 클래스 포함 여부 검사
 */

$div.id = "dsajdsakdasjasdjk";
$div.style.background = "red";
$div.textContent = "안녕하세요.";
$div.className = "a b c d e f g";
$div.innerHTML = `
    <div>
        divA
    </div>
`;

// document.addEventListener("click", function () {
//     document.body.style.background = "blue";
// });

// console.log($div.innerHTML);
// const $divA = document.createElement("div");
// const $divB = document.createElement("div");
// const $divC = document.createElement("div");
// $divA.textContent = "divA";
// $divB.textContent = "divB";
// $divC.textContent = "divC";

// $div.appendChild($divA);
// $div.appendChild($divB);
// $div.appendChild($divC);
// console.dir($div);

$groupItemFirst.addEventListener("click", function () {
  $groupItemFirst.classList.toggle("active");
  //   if ($groupItemFirst.classList.contains("active")) {
  //     $groupItemFirst.classList.remove("active");
  //   } else {
  //     $groupItemFirst.classList.add("active");
  //   }
});

// 변수(호이스팅)
/*  호이스팅의 단계
    - 선언 : memory 넣어두기만 한거야
    - 초기화 : undefined 
    - 할당 : 값을 넣는거야 
*/

age();

const age1 = 10; // 선언 - block-scope
let age2 = 12; // 선언 - block-scope
var age3 = 13; // 초기화 - function-scope

// 할당 - function-scope
function age() {
  console.log("aggge");
}

var userA = "연규";
if (true) {
  let userA = "정민석"; // ㅈ
  //   console.log(userA);
}
console.log(userA); // 연규 x => 정민석
console.log(userA);

/* 
    string, number, boolean, undefined : 값을 집어넣지 않음 , null: 값 없다고 표시, object

    원시값  : string, number, boolean , undefined, null
    참조값  : array, object
*/

const _string = "민석";
const _number = 10;
const _boolean = true;
const arrays = []; // 11번 : []
const objectsss = {
  a: [1, 2, 3], // a:50
  /* 
    a:50
     1:51
     2:52
     3:53
  */
};
const aa = [...objectsss.a]; // a:50 => a:55
aa[0] = 4;
console.log(objectsss.a, aa);
// arrays.push(1); // [1]

// arrays = [1, 2]; // 11번 아닌거야 => 12번

// objectsss.name = 1;

const m = "3213213217219";
console.log(+m, m);

if ("1" === 1) {
  console.log("된다");
}
/* 
    && : and 
    || : or 
    ?? : 좌측있는 값이 null, undefined 일 떄 우측값으로 바껴
*/

let userBB = "1";
let bbb = null;
let bbb2 = undefined;

// userBB &&= "1";
// userBB ||= "1";

// console.log(userBB);

function hi(name) {
  console.log("hi", name);
}

userBB && hi(userBB);
