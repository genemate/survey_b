export const json = {
  title: "Questionnaire Test",
  completedHtmlOnCondition: [
    {
      expression: "{totalScore} > ({maxScore} / 3 * 2)",
      html: "You got {totalScore} out of {maxScore} points. You did great!",
    },
    {
      expression: "{totalScore} <= ({maxScore} / 3)",
      html: "You got {totalScore} out of {maxScore} points. Come on now, step up!",
    },
    {
      expression: "({maxScore} / 3 * 2) < {totalScore} <= ({maxScore} / 3)",
      html: "You got {totalScore} out of {maxScore} points. Well done!",
    },
  ],
  pages: [
    {
      name: "physical-activity",
      title: "Survey call center",
      description:
        "Здравствуйте! Меня зовут ___________, Я работаю в Асакабанк и мы проводим опрос среди клиентов нашего банка. Опрос займет не более 1ой минуты Вашего времени. Позвольте задать Вам несколько вопросов?",
      elements: [
        {
          type: "panel",
          name: "activity-at-work",
          title: "First question",
          elements: [
            {
              type: "rating",
              name: "does-vigorous-activity",
              title:
                "Учитывая Ваш недавний опыт взаимодействия с Асакабанк, оцените, пожалуйста, полученный Вами продукт/услугу банка по 10 шкале?",
              choices: [
                { value: true, text: "Yes", score: 10 },
                { value: false, text: "No", score: 0 },
              ],
            },
            {
              type: "radiogroup",
              name: "vigorous-activity-frequency",
              visibleIf: "{does-vigorous-activity} = true",
              title:
                "Чего не хватает в нашем продукте, что может улучшить ваш опыт?",
              choices: [
                {
                  value: "rarely",
                  text: "Не выгодная процентная ставка",
                  score: 0,
                },
                { value: "often", text: "Срок действия", score: 5 },
                {
                  value: "everyday",
                  text: "Большое кол-во бюрократии",
                  score: 7,
                },
                {
                  value: "sureday",
                  text: "Скорость рассмотрения заявки (кредит, карты)",
                  score: 10,
                },
              ],
            },
            {
              type: "radiogroup",
              name: "moderate-activity-frequency",
              visibleIf: "{does-moderate-activity} = true",
              title:
                "In a typical week, on how many days do you do moderate-intensity activities as part of your work?",
              choices: [
                { value: "rarely", text: "A few", score: 0 },
                { value: "often", text: "Every other day", score: 5 },
                { value: "everyday", text: "Every day", score: 10 },
              ],
            },
            {
              type: "rating",
              name: "moderate-activity-duration",
              visibleIf: "{does-moderate-activity} = true",
              title:
                "How much time do you spend doing moderate-intensity activities at work on a typical day?",
              rateValues: [
                { value: "littletime", text: "1", score: 2 },
                { value: "sometime", text: "2", score: 7 },
                { value: "fulltime", text: "3", score: 10 },
              ],
              minRateDescription: "Less Than Two Hours",
              maxRateDescription: "Full Time",
            },
          ],
        },
        {
          type: "panel",
          name: "activity-at-work",
          title: "Second question",
          elements: [
            {
              type: "rating",
              name: "secondquestion",
              title:
                "Оцените, пожалуйста, полученный Вами сервис обслуживания со стороны сотрудника банка по 10 шкале?",
              choices: [
                { value: true, text: "Yes", score: 10 },
                { value: false, text: "No", score: 0 },
              ],
            },
            {
              type: "radiogroup",
              name: "secondquestion",
              visibleIf: "{secondquestion} = true",
              title:
                "Чего не хватает в нашем продукте, что может улучшить ваш опыт?",
              choices: [
                {
                  value: "speed",
                  text: "Скорость обслуживания со стороны сторудника",
                  score: 1,
                },
                {
                  value: "phone",
                  text: "Использование сотрудником мобильного телефона",
                  score: 6,
                },
                {
                  value: "sign",
                  text: "Чрезмерная жестикуляция",
                  score: 2,
                },
                {
                  value: "info",
                  text: "Неполноценное информирование",
                  score: 4,
                },
              ],
            },
            {
              type: "radiogroup",
              name: "secondquestion",
              visibleIf: "{secondquestion} = true",
              title:
                "Что мы можем улучшить в нашем продукте/услуге?",
              choices: [
                {
                  value: "speed",
                  text: "Скорость обслуживания со стороны сторудника",
                  score: 1,
                },
                {
                  value: "phone",
                  text: "Использование сотрудником мобильного телефона",
                  score: 6,
                },
                {
                  value: "sign",
                  text: "Чрезмерная жестикуляция",
                  score: 2,
                },
                {
                  value: "info",
                  text: "Неполноценное информирование",
                  score: 4,
                },
              ],
            },
            {
              type: "radiogroup",
              name: "secondquestion",
              visibleIf: "{secondquestion} = true",
              title:
                "Каковы основные преимущества использования нашего продукта/услуги?",
              choices: [
                {
                  value: "speed",
                  text: "Скорость обслуживания со стороны сторудника",
                  score: 1,
                },
                {
                  value: "phone",
                  text: "Использование сотрудником мобильного телефона",
                  score: 6,
                },
                {
                  value: "sign",
                  text: "Чрезмерная жестикуляция",
                  score: 2,
                },
                {
                  value: "info",
                  text: "Неполноценное информирование",
                  score: 4,
                },
              ],
            },
            // {
            //   type: "rating",
            //   name: "secondquestion",
            //   visibleIf: "{secondquestion} = true",
            //   title:
            //     "How much time do you spend doing moderate-intensity activities at work on a typical day?",
            //   rateValues: [
            //     {
            //       value: "speed",
            //       text: "Скорость обслуживания со стороны сторудника",
            //       score: 1,
            //     },
            //     { value: "phone", text: "Использование сотрудником мобильного телефона", score: 6 },
            //     {
            //       value: "sign",
            //       text: "Чрезмерная жестикуляция",
            //       score: 2,
            //     },
            //     {
            //       value: "info",
            //       text: "Неполноценное информирование",
            //       score: 4,
            //     },
            //   ],
            // },
          ],
        },
        {
          type: "panel",
          name: "activity-at-work",
          title: "Third question",
          elements: [
            {
              type: "rating",
              name: "thirdquestion",
              title:
                "Насколько вероятно, что Вы порекомендуете наш банк другу, коллеге, родственнику по 10 шкале?",
              choices: [
                { value: true, text: "Yes", score: 10 },
                { value: false, text: "No", score: 0 },
              ],
            },
            {
              type: "radiogroup",
              name: "thirdquestion",
              visibleIf: "{thirdquestion} = true",
              title:
                "Чего не хватает в нашем продукте, что может улучшить ваш опыт?",
              choices: [
                {
                  value: "speedy",
                  text: "Скорость обслуживания со стороны сторудника",
                  score: 0,
                },
                { value: "explonetion", text: "Оношение к клиенту", score: 5 },
                {
                  value: "mobileuse",
                  text: "Использование сотрудником мобильного телефона",
                  score: 7,
                },
                {
                  value: "signyty",
                  text: "Чрезмерная жестикуляция",
                  score: 10,
                },
              ],
            },
            {
              type: "radiogroup",
              name: "moderate-activity-frequency",
              visibleIf: "{does-moderate-activity} = true",
              title:
                "In a typical week, on how many days do you do moderate-intensity activities as part of your work?",
              choices: [
                { value: "rarely", text: "A few", score: 0 },
                { value: "often", text: "Every other day", score: 5 },
                { value: "everyday", text: "Every day", score: 10 },
              ],
            },
            {
              type: "rating",
              name: "moderate-activity-duration",
              visibleIf: "{does-moderate-activity} = true",
              title:
                "How much time do you spend doing moderate-intensity activities at work on a typical day?",
              rateValues: [
                { value: "littletime", text: "1", score: 2 },
                { value: "sometime", text: "2", score: 7 },
                { value: "fulltime", text: "3", score: 10 },
              ],
              minRateDescription: "Less Than Two Hours",
              maxRateDescription: "Full Time",
            },
          ],
        },
        // {
        //   type: "panel",
        //   name: "traveling",
        //   elements: [
        //     {
        //       type: "radiogroup",
        //       name: "does-walk-or-rides-bicycle",
        //       title:
        //         "Bank xodimidan olgan xizmatingizni 10 ball bilan baholang?",
        //       choices: [
        //         { value: true, text: "Yes", score: 10 },
        //         { value: false, text: "No", score: 0 },
        //       ],
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "walking-bicycling-frequency",
        //       visibleIf: "{does-walk-or-rides-bicycle} = true",
        //       title:
        //         "In a typical week, on how many days do you walk or bicycle for at least 10 minutes continuously to get to and from places?",
        //       choices: [
        //         { value: "rarely", text: "A few", score: 0 },
        //         { value: "often", text: "Every other day", score: 5 },
        //         { value: "everyday", text: "Every day", score: 10 },
        //       ],
        //     },
        //     {
        //       type: "rating",
        //       name: "walking-bicycling-duration",
        //       visibleIf: "{does-walk-or-rides-bicycle} = true",
        //       title:
        //         "How much time do you spend walking or bicycling for travel on a typical day?",
        //       rateValues: [
        //         { value: "littletime", text: "1", score: 2 },
        //         { value: "sometime", text: "2", score: 7 },
        //         { value: "fulltime", text: "3", score: 10 },
        //       ],
        //       minRateDescription: "Less Than Two Hours",
        //       maxRateDescription: "Full Time",
        //     },
        //   ],
        // },
        // {
        //   type: "panel",
        //   name: "recreational-activities-panel",
        //   title: "Recreational activities",
        //   description:
        //     "The next questions exclude the work and transport activities that you have already mentioned. Now we would like to ask you about sports, fitness, and recreational activities.",
        //   elements: [
        //     {
        //       type: "matrix",
        //       name: "recreational-activities",
        //       title:
        //         "Do you practice any of the following sports, fitness, or recteational activities at least 10 minutes continuously?",
        //       description: "Select all that apply",
        //       columns: [
        //         { value: true, text: "Yes", score: 2 },
        //         { value: false, text: "No", score: 0 },
        //       ],
        //       rows: [
        //         { value: "running", text: "Running" },
        //         { value: "football", text: "Playing football" },
        //         { value: "brisk-walking", text: "Brisk walking" },
        //         { value: "cycling", text: "Cycling" },
        //         { value: "swimming", text: "Swimming" },
        //       ],
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "running-frequency",
        //       visibleIf:
        //         "{recreational-activities.running} = true or {recreational-activities.football} = true",
        //       title:
        //         "In a typical week, on how many days do you run or play football?",
        //       choices: [
        //         { value: "rarely", text: "A few", score: 0 },
        //         { value: "often", text: "Every other day", score: 5 },
        //         { value: "everyday", text: "Every day", score: 10 },
        //       ],
        //     },
        //     {
        //       type: "rating",
        //       name: "running-duration",
        //       visibleIf:
        //         "{recreational-activities.running} = true or {recreational-activities.football} = true",
        //       title: "How much time do you spend on this on a typical day?",
        //       rateValues: [
        //         { value: "littletime", text: "1", score: 2 },
        //         { value: "sometime", text: "2", score: 7 },
        //         { value: "fulltime", text: "3", score: 10 },
        //       ],
        //       minRateDescription: "Less Than Two Hours",
        //       maxRateDescription: "Full Time",
        //     },
        //     {
        //       type: "radiogroup",
        //       name: "swimming-etc-frequency",
        //       visibleIf:
        //         "{recreational-activities.brisk-walking} = true or {recreational-activities.swimming} = true or {recreational-activities.cycling} = true",
        //       title:
        //         "In a typical week, on how many days do you swim, cycle, or walk briskly?",
        //       choices: [
        //         { value: "rarely", text: "A few", score: 0 },
        //         { value: "often", text: "Every other day", score: 5 },
        //         { value: "everyday", text: "Every day", score: 10 },
        //       ],
        //     },
        //     {
        //       type: "rating",
        //       name: "swimming-etc-duration",
        //       visibleIf:
        //         "{recreational-activities.brisk-walking} = true or {recreational-activities.swimming} = true or {recreational-activities.cycling} = true",
        //       title:
        //         "How much time do you spend doing these moderate-intensity sports on a typical day?",
        //       rateValues: [
        //         { value: "littletime", text: "1", score: 2 },
        //         { value: "sometime", text: "2", score: 7 },
        //         { value: "fulltime", text: "3", score: 10 },
        //       ],
        //       minRateDescription: "Less Than Two Hours",
        //       maxRateDescription: "Full Time",
        //     },
        //   ],
        // },
        // {
        //   type: "panel",
        //   name: "sedentary-behavior",
        //   title: "Sedentary behavior",
        //   description:
        //     "The following question is about sitting or reclining at work, at home, getting to and from places, or with friends, including time spent sitting at a desk, sitting with friends, travelling by car, bus, train, reading, playing cards or watching television; it does not include time spent sleeping.",
        //   elements: [
        //     {
        //       type: "rating",
        //       name: "sedentary-behavior-duration",
        //       title:
        //         "How much time do you usually spend sitting or reclining on a typical day?",
        //       rateValues: [
        //         { value: "littletime", text: "1", score: 10 },
        //         { value: "sometime", text: "2", score: 7 },
        //         { value: "fulltime", text: "3", score: 2 },
        //       ],
        //       minRateDescription: "Less Than Two Hours",
        //       maxRateDescription: "Full Time",
        //     },
        //   ],
        // },
      ],
    },
  ],
};
