export default {
  translation: {
    meta: {
      'description.content': 'Резюме frontend программиста, максимально наглядное и легко читаемое.',
    },
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      experience: 'Опыт работы',
      education: 'Образование',
      works: 'Мои работы',
    },
    main: {
      title: 'Мое резюме',
      buttons: {
        download: 'Скачать резюме',
      },
    },
    about: {
      title: 'Обо мне',
      name: 'Сергей Пилипенко',
      position: 'Frontend developer',
      description: 'Начинающий frontend developer с небольшим коммерческим опытом в backend разработке. Стремлюсь к чистому, качественному, современному и максимально детерминированному коду. Качество ставлю превыше скорости.',
      avatar: {
        alt: 'фото автора',
      },
      contacts: {
        title: 'Связаться со мной',
        'phone.aria-label': 'номер телефона',
        'email.aria-label': 'электронная почта',
      },
    },
    skills: {
      title: 'Навыки',
      html: 'Разработка адаптивных и доступных веб страниц <span>HTML, CSS, sass</span>',
      js: 'Разработка скриптов на языке JavaScript <span>JS, ajax, fetch</span>',
      react: 'Разработка React компонентов <span>React, Redux</span>',
      php: 'Разработка серверных скриптов на языке PHP <span>PHP</span>',
      sql: 'Базовые знания SQL. Работа с mySQL, postgreSQL <span>MySQL, PostgreSQL</span>',
      git: 'Базовые навыки работы с git <span>GitHub, BitBucket</span>',
      test: 'Базовые навыки написания Unit тестов <span>Unit Tests</span>',
      npm: 'Дополнительно: webpack, npm, composer, linters, bash, linux',
    },
    experience: {
      title: 'Последние места работы',
      php: {
        title: 'PHP backend developer',
        company: 'Redlab, Чернигов (web)',
        datetime: 'с 01.2021 по 05.2021 (4 месяца)',
        res: [
          'Разработка серверной части веб сайтов на PHP (Wordpress, меньше Laravel)',
          'Построение взаимодействия серверной и клиентской части при помощи ajax, fetch, Jquery',
          'Работа с HTML, CSS, MySQL...',
        ],
      },
      factory: {
        title: 'Инженер-технолог',
        company: 'СК "Вималспецбуд", Чернигов (строительная компания)',
        datetime: 'с 01.2016 по 04.2020 (4 года 3 месяца)',
        res: [
          'Разработка технологического процесса изготовления оборудования',
          'Расчет норм времени на изготовление оборудования',
          'Расчет нормативов материальных затрат',
          'Разработка специальной оснастки',
          'Составление программ для станков с ЧПУ',
        ],
      },
    },
    education: {
      title: 'Образование',
      university: {
        name: 'Черниговский национальный технологический университет',
        position: 'Технологии машиностроения, инженер-технолог, Чернигов',
        description: 'Во время обучения работал наладчиком станков с числовым программным обеспечением. Затем лаборантом в Черниговском национальном технологическом университете на кафедре физики.',
        datetime: 'с 09.2011 по 06.2015 (3 года 9 месяцев)',
      },
      technical: {
        name: 'Черниговский радиомеханический техникум',
        position: 'Обработка материалов на станках и автоматических линиях, техник-технолог.',
        description: 'Во время учебы проходил практику по специальности. Участвовал в олимпиадах по математике и информатике. Получил диплом с отличием.',
        datetime: 'с 09.2007 по 06.2011 (3 года 9 месяцев)',
      },
      additional: {
        title: 'Дополнительное образование',
        htmlAcademy: {
          title: 'Основы Frontend разработки',
          description: 'Онлайн обучение в академии веб-разработки - <b>HTML Academy</b> (HTML, CSS, sass, JS).',
          datetime: '2021 (3 месяца)',
        },
        hexletJS: {
          title: 'JS-разработчик',
          description: 'Онлайн обучение на <b>Hexlet.io</b>, за направлением JS-разработчик.',
          datetime: '2021 (3 месяца)',
        },
        reactJS: {
          title: 'React / Redux',
          description: 'Онлайн курс React от <b>Intellias</b>.',
          datetime: '2022 (3 месяца)',
        },
        hexletPHP: {
          title: 'PHP-разработчик',
          description: 'Онлайн обучение на <b>Hexlet.io</b>, за направлением PHP-разработчик.',
          datetime: '2019 (6 месяцев)',
        },
        cs50: {
          title: 'Основы программирования CS50',
          description: 'Онлайн курс - Основы программирования CS50.',
          datetime: '2020 (4 месяца)',
        },
        qa: {
          title: 'Основы тестирования ПО',
          description: 'Онлайн обучение в учебно-консультативном центре <b>QA TestLab</b>.',
          datetime: '2019 (1 месяц)',
        },
      },
    },
    works: {
      title: 'Мои работы',
      links: {
        git: 'Исходники',
        prod: 'Просмотр',
      },
      wallet: {
        title: 'Cyber Wallet',
        alt: 'Скриншот сайта Wallet',
      },
      redlab: {
        title: 'Redlab менеджмент',
        alt: 'Скриншот сайта - Redlab менеджмент',
      },
      nerds: {
        title: 'Nerds - дизайн студия',
        alt: 'Скриншот сайта Nerds',
      },
      yooosi: {
        title: 'Yooosi',
        alt: 'Скриншот сайта Yooosi',
      },
      rss: {
        title: 'RSS агрегатор',
        alt: 'Скриншот агрегатора RSS лент',
      },
      diff: {
        title: 'Gen diff - консольная утилита',
        alt: 'Скриншот результата работы приложения',
      },
      puzzle: {
        title: 'Пятнашки',
        alt: 'Скриншот мини игры - Пятнашки',
      },
      roulette: {
        title: 'Lucky-day',
        alt: 'Скриншот мини приложения, рулетка на удачу',
      },
    },
    additional: {
      title: 'Дополнительно',
      description: [
        'Свой профессиональный путь я начинал с машиностроения, проще говоря - завод. Вдохновляясь желанием создавать что-то новое, интересное и полезное людям, выбрал профессию инженера. Но реалии таковы, что на промышленном производстве не интересно и очень мало возможностей для саморазвития и самореализации.',
        'Компьютер у меня был с детства, поэтому могу сказать, что еще в школе уже был продвинутым пользователем, но этого было не достаточно. Мне всегда было интересно, как говорится, "заглянуть под капот", но не просто заглянуть, а разобраться как оно работает. Попробовал программировать и понял, что для меня гораздо интереснее создавать "цифровые изделия", а не металлические. Желание овладеть новейшими технологиями, углубить знания и почувствовать на своем опыте как работает современный интернет подтолкнуло меня на получение новой профессии. Ведь сейчас это уже неотъемлемая часть нашей жизни. Я занимаюсь самообразованием по направлению Веб-разработки и каждый день узнаю что-нибудь новое. Хорошо, что теперь каждый может изучать солнечную систему или химические соединения, не выходя из дома. Онлайн курсы, которые я закончил, дали мне много фундаментальных знаний по программированию.',
        'В свободное время я занимаюсь веб-разработкой, но и промышленные навыки продолжаю использовать – собираю роботоподобные, автоматические конструкторы на базе Arduino с использованием 3Д печати. В свое время изготовил лазерный гравировальный станок в духе ЗD принтера. Всегда довожу начатую работу до конца. Все новые аспекты и нюансы с которыми раньше не приходилось работать - разбираю и овладеваю. усидчивость и четко поставленная цель дают хорошие результаты.',
      ],
    },
  },
};
