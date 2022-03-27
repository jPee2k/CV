export default {
  translation: {
    meta: {
      'description.content': 'Резюме frontend програміста, максимально наочне та легке для читання.',
    },
    nav: {
      about: 'Про мене',
      skills: 'Навички',
      experience: 'Досвід роботи',
      education: 'Освіта',
      works: 'Мої роботи',
    },
    main: {
      title: 'Моє резюме',
      buttons: {
        download: 'Завантажити резюме',
      },
    },
    about: {
      title: 'Про мене',
      name: 'Сергій Пилипенко',
      position: 'Frontend developer',
      description: 'Початківець в frontend розробці з невеликим комерційним досвідом у backend розробці. Прагну до чистого, якісного, сучасного та максимально детермінованого коду. Надаю перевагу якості, а не швидкості.',
      avatar: {
        alt: 'фото автора',
      },
      contacts: {
        title: 'Зв\'язатися зі мною',
        'phone.aria-label': 'номер телефону',
        'email.aria-label': 'електронна адреса',
      },
    },
    skills: {
      title: 'Навички',
      html: 'Розробка адаптивних та доступних веб-сторінок <span>HTML, CSS, sass</span>',
      js: 'Розробка скриптів на мові програмування JavaScript <span>JS, ajax, fetch</span>',
      react: 'Розробка React компонентів <span>React, Redux</span>',
      php: 'Розробка серверних скриптів мовою PHP <span>PHP</span>',
      sql: 'Базові знання SQL. Робота з mySQL, postgreSQL <span>MySQL, PostgreSQL</span>',
      git: 'Базові навички роботи з git <span>GitHub, BitBucket</span>',
      test: 'Базові навички написання Unit тестів <span>Unit Tests</span>',
      npm: 'Додатково: webpack, npm, composer, linters, bash, linux',
    },
    experience: {
      title: 'Останні місця роботи',
      php: {
        title: 'PHP backend developer',
        company: 'Redlab, Чернігів (web)',
        datetime: 'з 01.2021 по 05.2021 (4 місяці)',
        res: [
          'Розробка серверної частини веб-сайтів на PHP (Wordpress, менше Laravel)',
          'Побудова взаємодії серверної та клієнтської частини за допомогою ajax, fetch, Jquery',
          'Робота з HTML, CSS, MySQL...',
        ],
      },
      factory: {
        title: 'Інженер-технолог',
        company: 'БК "Вималспецбуд", Чернігів (будівельна компанія)',
        datetime: 'з 01.2016 по 04.2020 (4 роки 3 місяці)',
        res: [
          'Розробка технологічного процесу виготовлення обладнання',
          'Розрахунок норм часу на виготовлення обладнання',
          'Розрахунок нормативів матеріальних витрат',
          'Розробка спеціального оснащення',
          'Складання програм для верстатів з ЧПК',
        ],
      },
    },
    education: {
      title: 'Освіта',
      university: {
        name: 'Чернігівський національний технологічний університет',
        position: 'Технології машинобудування, інженер-технолог, Чернігів',
        description: 'Під час навчання працював налагоджувальником верстатів із числовим програмним керуванням. Згодом лаборантом у Чернігівському національному технологічному університеті на кафедрі фізики.',
        datetime: 'з 09.2011 по 06.2015 (3 роки 9 місяців)',
      },
      technical: {
        name: 'Чернігівський радіомеханічний технікум',
        position: 'Обробка матеріалів на верстатах та автоматичних лініях, технік-технолог.',
        description: 'Під час навчання проходив практику за фахом. Брав участь в олімпіадах з математики та інформатики. Отримав диплом із відзнакою.',
        datetime: 'з 09.2007 по 06.2011 (3 роки 9 місяців)',
      },
      additional: {
        title: 'Додаткова освіта',
        htmlAcademy: {
          title: 'Основи Frontend розробки',
          description: 'Онлайн навчання в академії веб-розробки - <b>HTML Academy</b> (HTML, CSS, sass, JS).',
          datetime: '2021 (3 місяці)',
        },
        hexletJS: {
          title: 'JS-розробник',
          description: 'Онлайн навчання на <b>Hexlet.io</b>, за напрямком JS-розробник.',
          datetime: '2021 (3 місяці)',
        },
        reactJS: {
          title: 'React / Redux',
          description: 'Онлайн курс - React від <b>Intellias</b>.',
          datetime: '2022 (3 місяці)',
        },
        hexletPHP: {
          title: 'PHP-розробник',
          description: 'Онлайн навчання на <b>Hexlet.io</b>, за напрямком PHP-розробник.',
          datetime: '2019 (6 місяців)',
        },
        cs50: {
          title: 'Основи програмування CS50',
          description: 'Онлайн курс - Основи програмування CS50',
          datetime: '2020 (4 місяці)',
        },
        qa: {
          title: 'Основи тестування ПЗ',
          description: 'Онлайн навчання у навчально-консультативному центрі <b>QA TestLab</b>.',
          datetime: '2019 (1 місяць)',
        },
      },
    },
    works: {
      title: 'Мої роботи',
      links: {
        git: 'Код',
        prod: 'Перегляд',
      },
      wallet: {
        title: 'Cyber Wallet',
        alt: 'Скриншот сайту Wallet',
      },
      redlab: {
        title: 'Redlab менеджмент',
        alt: 'Скриншот сайту - Redlab менеджмент',
      },
      nerds: {
        title: 'Nerds - дизайн студія',
        alt: 'Скриншот сайту Nerds',
      },
      yooosi: {
        title: 'Yooosi',
        alt: 'Скриншот сайту Yooosi',
      },
      rss: {
        title: 'RSS агрегатор',
        alt: 'Скриншот сайту - агрегатор RSS стрічок',
      },
      diff: {
        title: 'Gen diff - консольна утиліта',
        alt: 'Скриншот результату роботи програми',
      },
      puzzle: {
        title: 'П\'ятнашки',
        alt: 'Скриншот міні гри - П\'ятнашки',
      },
      roulette: {
        title: 'Lucky-day',
        alt: 'Скриншот міні додатку - рулетка на удачу',
      },
    },
    additional: {
      title: 'Додатково',
      description: [
        'На початку свого професійного шляху я не мав жодного уявлення про те, що таке машинобудування. Керуючись бажанням створювати щось нове та цікаве, обрав професію інженера. Але реалії такі, що на промисловому виробництві не цікаво та не дуже багато можливостей для саморозвитку та самореалізації.',
        'Комп’ютер в мене був змалку, тому можу сказати, що ще в школі вже був просунутим користувачем, але цього було мало. Мені завжди було цікаво, як то кажуть, "заглянути під капот", та не просто заглянути, а розібратися як воно працює. Спробував програмувати і зрозумів, що для мене набагато цікавіше створювати «цифрові вироби», а не металеві. Бажання опанувати новітні технології, поглибити знання та відчути на власному досвіді як працює сучасний веб підштовхнуло мене на здобуття нової професії. Адже, зараз, це вже невід’ємна частина нашого життя. Я займаюся самоосвітою в напрямку Веб-розробки та кожного дня дізнаюся щось нове. Добре, що тепер кожен може вивчати сонячну систему або хімічні сполуки не виходячи з дому. Онлайн курси, які я закінчив, дали мені багато фундаментальних знань з програмування.',
        'У вільний час я займався веб розробкою, але і промислові навики продовжую використовувати – збираю роботоподібні, автоматичні конструктори на базі Arduino з використанням 3Д друку. В свій час виготовив лазерний гравіювальний верстат в дусі ЗD принтеру. Завжди доводжу розпочату роботу до кінця. Всі нові аспекти та нюанси з якими раніше не доводилось працювати - розбираю та опановую. Посидючість та чітко поставлена ціль дають гарні результати.',
      ],
    },
  },
};
