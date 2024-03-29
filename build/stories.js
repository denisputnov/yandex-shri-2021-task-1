'use strict';

const urlParams = new URLSearchParams(window.location.search)
const THEME = urlParams.get('theme') === 'white' ? 'white' : 'dark'
const SLIDE = _checkSlide(parseInt(urlParams.get('slide'))) || 0

function _checkSlide(slide) {
  if (1 <= slide && slide <= 11) return slide - 1
  return undefined
}

console.log(`Theme is ${THEME} and Slide is ${SLIDE}`)

const data = [
  {
    "alias": "leaders",
    "data": {
      "title": "Больше всего коммитов",
      "subtitle": "Спринт № 213",
      "emoji": "👑",
      "users": [
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22" },
        { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "20" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "19" }
      ]
    }
  },
  {
    "alias": "leaders",
    "data": {
      "title": "Самый большой коммит",
      "subtitle": "Спринт № 213",
      "emoji": "😮",
      "users": [
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "4001 строка" },
        { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "3845 строк" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "3640 строк" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "3453 строки" },
        { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "2852 строки" }
      ]
    }
  },
  {
    "alias": "vote",
    "data": {
      "title": "Самый 🔎 внимательный разработчик",
      "subtitle": "Спринт № 213",
      "emoji": "🔎",
      "selectedUserId": 4,
      "users": [
        { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "22 голоса" },
        { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "19 голосов" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "17 голосов" },
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "16 голосов" },
        { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "11 голосов" },
        { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "10 голосов" },
        { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "9 голосов" },
        { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "8 голосов" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "7 голосов" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "6 голосов" },
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "5 голосов" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "4 голоса" }
      ]
    }
  },
  {
    "alias": "leaders",
    "data": {
      "title": "Самый 🔎 внимательный разработчик",
      "subtitle": "Спринт № 213",
      "emoji": "🔎",
      "selectedUserId": 11,
      "users": [
        { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "22 голоса" },
        { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "19 голосов" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "17 голосов" },
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "16 голосов" },
        { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "15 голосов" },
        { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "14 голосов" },
        { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "12 голосов" },
        { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "9 голосов" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "8 голосов" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "6 голосов" },
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "5 голосов" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "4 голоса" }
      ]
    }
  },
  {
    "alias": "vote",
    "data": {
      "title": "Самый 👪 командный разработчик",
      "subtitle": "Спринт № 213",
      "emoji": "👪",
      "offset": 8,
      "users": [
        { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "24 голоса" },
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "21 голос" },
        { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "19 голосов" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "18 голосов" },
        { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "16 голосов" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "14 голосов" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "13 голосов" },
        { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "11 голосов" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "9 голосов" },
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "7 голосов" },
        { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "6 голосов" },
        { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "5 голосов" }
      ]
    }
  },
  {
    "alias": "leaders",
    "data": {
      "title": "Самый 👪 командный разработчик",
      "subtitle": "Спринт № 213",
      "emoji": "👪",
      "selectedUserId": 6,
      "users": [
        { "id": 2, "name": "Александр Шлейко", "avatar": "2.jpg", "valueText": "24 голоса" },
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "21 голос" },
        { "id": 6, "name": "Андрей Мокроусов", "avatar": "6.jpg", "valueText": "19 голосов" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "18 голосов" },
        { "id": 1, "name": "Евгений Дементьев", "avatar": "1.jpg", "valueText": "16 голосов" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "14 голосов" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "13 голосов" },
        { "id": 11, "name": "Юрий Фролов", "avatar": "11.jpg", "valueText": "11 голосов" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "9 голосов" },
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "7 голосов" },
        { "id": 5, "name": "Александр Николаичев", "avatar": "5.jpg", "valueText": "6 голосов" },
        { "id": 4, "name": "Вадим Пацев", "avatar": "4.jpg", "valueText": "5 голосов" }
      ]
    }
  },
  {
    "alias": "chart",
    "data": {
      "title": "Коммиты",
      "subtitle": "Спринт № 213",
      "values": [
        { "title": "203", "value": 108 },
        { "title": "204", "value": 160 },
        { "title": "205", "value": 126 },
        { "title": "206", "value": 134 },
        { "title": "207", "value": 112 },
        { "title": "208", "value": 152 },
        { "title": "209", "value": 128 },
        { "title": "210", "value": 164 },
        { "title": "211", "value": 118 },
        { "title": "212", "value": 140 },
        { "title": "213", "value": 182, "active": true },
        { "title": "214", "value": 0 },
        { "title": "215", "value": 0 },
        { "title": "216", "value": 0 },
        { "title": "217", "value": 0 },
        { "title": "218", "value": 0 }
      ],
      "users": [
        { "id": 3, "name": "Дарья Ковалева", "avatar": "3.jpg", "valueText": "32" },
        { "id": 9, "name": "Сергей Бережной", "avatar": "9.jpg", "valueText": "27" },
        { "id": 7, "name": "Дмитрий Андриянов", "avatar": "7.jpg", "valueText": "22" }
      ]
    }
  },
  {
    "alias": "chart",
    "data": {
      "title": "Строки кода",
      "subtitle": "Спринт № 213",
      "values": [
        { "title": "203", "value": 47798 },
        { "title": "204", "value": 68590 },
        { "title": "205", "value": 55472 },
        { "title": "206", "value": 63073 },
        { "title": "207", "value": 51917 },
        { "title": "208", "value": 65852 },
        { "title": "209", "value": 60693 },
        { "title": "210", "value": 70631 },
        { "title": "211", "value": 57299 },
        { "title": "212", "value": 62839 },
        { "title": "213", "value": 74156, "active": true },
        { "title": "214", "value": 0 },
        { "title": "215", "value": 0 },
        { "title": "216", "value": 0 },
        { "title": "217", "value": 0 },
        { "title": "218", "value": 0 }
      ],
      "users": [
        { "id": 12, "name": "Алексей Ярошевич", "avatar": "12.jpg", "valueText": "8739" },
        { "id": 8, "name": "Александр Иванков", "avatar": "8.jpg", "valueText": "7538" },
        { "id": 10, "name": "Яна Берникова", "avatar": "10.jpg", "valueText": "6845" }
      ]
    }
  },
  {
    "alias": "diagram",
    "data": {
      "title": "Размер коммитов",
      "subtitle": "Спринт № 213",
      "totalText": "182 коммита",
      "differenceText": "+42 с прошлого спринта",
      "categories": [
        { "title": "> 1001 строки", "valueText": "30 коммитов", "differenceText": "+8 коммитов" },
        { "title": "501 — 1000 строк", "valueText": "32 коммита", "differenceText": "+6 коммитов" },
        { "title": "101 — 500 строк", "valueText": "58 коммитов", "differenceText": "+16 коммитов" },
        { "title": "1 — 100 строк", "valueText": "62 коммита", "differenceText": "+12 коммитов" }
      ]
    }
  },
  {
    "alias": "activity",
    "data": {
      "title": "Коммиты, 1 неделя",
      "subtitle": "Спринт № 213",
      "data": {
        "mon": [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 3, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        "tue": [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 1, 0, 3, 0, 0, 2, 1, 0],
        "wed": [1, 0, 0, 0, 1, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 2, 1, 0, 0, 0, 0, 0, 0, 1],
        "thu": [0, 1, 0, 1, 0, 0, 0, 0, 6, 0, 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0],
        "fri": [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 5, 0, 4, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0],
        "sat": [0, 0, 0, 0, 2, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        "sun": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
      }
    }
  },
  {
    "alias": "activity",
    "data": {
      "title": "Коммиты, 2 неделя",
      "subtitle": "Спринт № 213",
      "data": {
        "mon": [0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2],
        "tue": [0, 1, 2, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "wed": [0, 0, 0, 0, 2, 0, 1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 0],
        "thu": [0, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0, 1, 1, 0, 0, 0],
        "fri": [0, 0, 0, 1, 1, 0, 2, 0, 4, 0, 0, 0, 2, 0, 3, 2, 0, 0, 0, 0, 1, 1, 0, 1],
        "sat": [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0],
        "sun": [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1]
      }
    }
  }
]

window.renderTemplate = function (alias, data) {
  console.log(`ALIAS IS: ${alias} and DATA IS: `, data);
  return new Page(alias, data).render();

}

class Page {
  constructor(alias, data) {
    this.alias = alias
    this.data = data
    this._modes = {
      'leaders': this.renderLeaders,
      'vote': this.__renderVote,
      'chart': this.__renderChart,
      'diagram': this.__renderDiagram,
      'activity': this.__renderActivity,
    }

    document.querySelector('body').classList.add(...[`theme_${THEME}`, this.alias])
  }

  render() {
    return this._modes[this.alias].apply(this);
  }

  renderLeaders() {
    let html = `<header>
                  <h1>${this.data.title}</h1>
                  <p>${this.data.subtitle}</p>
                </header>
                <main>`
    for (let i = 0; i < 5; i++) {
      html += `<section data-pos='${i + 1}'>
                <div class="person">
                  <p class="emoji">${i === 0 ? this.data.emoji : ""}</p>
                  <img src="./images/4x/${this.data.users[i].avatar}" class="avatar">
                  <p class="name">${this.data.users[i].name}</p>
                  <p class="score">${this.data.users[i].valueText}</p>
                </div>
                <div class="stand">
                  <p>${i + 1}</p>
                </div>
              </section>`
    }
    html += '</main>'
    return html
  }

  __renderVote() {
    console.log('vote rendered');
  }

  __renderChart() {

    let { values, users } = this.data;

    values.splice(values.length - 3 , 3)
    // console.log(values);

    const maxValue = Math.max.apply(Math, values.map(function(value) { return value.value }));
    const minValue = Math.min.apply(Math, values.map(function(value) { return value.value }));

    const _getPillarHeight = (value) => {
      return value === 0 ? '5%' : `calc(${((100 * value) / maxValue).toFixed(1)}% - 10vh)`; 
    }

    const renderHeader = () => `<header>
                                  <h1>Коммиты</h1>
                                  <p>Спринт № 213</p>
                                </header>`
 
    const renderChart = () => {
      let html = '';
      values.forEach(value => {
        html += `<section ${value.active ? 'class="active"' : ''}>
                   <p class="value">${value.value == 0 ? '' : value.value}</p>
                   <div class="pillar" style="max-height: ${_getPillarHeight(value.value)};"></div>
                   <p class="title">${value.title}</p>
                 </section>`
      });
      return `<div class="chart-content">${html}</div>`
    }

    const renderUsers = () => {
      let html = '';
      for (let i = 0; i < 2; i++) {
        html += `<div class="user">
                  <img src="./images/4x/${users[i].avatar}" alt="" class="user-avatar">
                  <div class="user-info">
                    <p class="username">${users[i].name}</p>
                    <p class="score">${users[i].valueText}</p>
                  </div>
                </div>`
      }
      return `<div class="users">${html}</div>`
    }
    
    const _scrollChart = () => {
      const chartContent = document.querySelector('.chart-content');
      const scroll = () => chartContent.scrollBy({
        top: 0,
        left: chartContent.offsetWidth
        // right: 0,
      });
      window.addEventListener('resize', scroll);
      scroll();
      console.log('chart rendered');
    }

    setTimeout(_scrollChart, 500);
    return `${renderHeader()}<main>${renderChart() + renderUsers()}</main>`
  }

  __renderDiagram() {

    console.log('diagram rendered');
  }

  __renderActivity() {
    console.log('activity rendered');
  }

  __renderError() {
    console.log('error rendered');
  }
}

renderTemplate(data[SLIDE].alias, data[SLIDE].data)


const body = document.querySelector('body');
// body.innerHTML = renderTemplate(data[SLIDE].alias, data[SLIDE].data);
