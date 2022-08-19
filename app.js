// Lesson 41:
/* Тоглогчийн ээлжийг хадгалах хувьсагч: 
Нэгдүгээр тоглогчийг 0,
Хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
*/
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч:
// Array ашиглан хийх нь.
var scores = [0, 0];

// Ээлжийн оноог түр цуглуулдаг хувьсагч :
var roundScore = 0;

/* Шоо хэд буусныг хадгалах хувьсагч :
1-6 гэсэн утгыг энэ хувьсагчид рэндомоор үүсгэж өгнө.
*/

var dice = Math.floor(Math.random() * 6) + 1;
// 1-6 хүртэлх рэндом тоо.

console.log('Шоо : ' + dice);

/////////////////// Домыг хэрхэн өөрчлөх вэ?
// 1. HTML - ээс айдийг нь хайж олно.
window.document.querySelector('#score-0').textContent = dice;
/* window доторх нүдэнд харагддаг документ.
querySelector - нь домын элементийг хайж олж өгдөг функц.
.textContent =
        <div class="player-score" id="score-0">43</div>
        ийн 43.

.textContent = '100'; - нь уг объектийн text content-нд
өөр утга олгоно. 
*/

window.document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
// .innerHTML function - text Content биш доторх HTML ашиглан өөрчлөхийг хүсэх үед ашиглана.

document.querySelector('.dice').style.display = 'none';
// .style. - ашиглан CSS өөрчлөлт хийх нь.

// Програм ажиллахад бэлдэж бүх дүнг 0 болгох нь.
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

// Lesson 42:
