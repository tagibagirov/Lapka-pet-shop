const goods = [
    {
        name: "Kitten Сухой Корм Для Котят 4-12 Мес",
        photo: "/img/Royal Canin Kitten Dry Cat Food.jpg",
        brand: "Royal Canin",
        price: "19.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "popular",
        about: "Royal Canin Kitten Сухой корм для котят. Полностью сбалансированый корм специально для котят в период третьей фазы роста (в возрасте от 4 до 12 месяцев). Период роста – важнейшая стадия жизни вашего котенка: это время серьезных изменений, новых открытий и испытаний. Поэтому Вы должны быть уверены, что котенок получает все необходимые питательные вещества, поддерживающие его рост и гармоничное развитие. Вторая фаза роста особенно значима для котят: в этот период постепенно завершается развитие иммунной системы. Продукт Royal Canin Kitten поможет укрепить защитные механизмы котенка в этот период – главным образом, за счет запатентованного комплекса антиоксидантов, в который включен и чрезвычайно важный для иммунной системы витамин E. Корм Royal Canin Kitten обладает повышенной усвояемостью благодаря высококачественным (усваиваются на 90%) белкам L.I.P."
    },
    {
        name: "Mother & Babycat Сухой Корм Для Беременных И Кормящих Кошек И Котят",
        photo: "/img/Royal Canin Mother and Babycat Dry Cat Food.jpg",
        brand: "Royal Canin",
        price: "19.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "popular",
        about: "Royal Canin Mother & Babycat Сухой корм для беременных и кормящих кошек и котят.  Полнорационный сбалансированный корм для беременных и кормящих кошек, а также для котят во время второй фазы роста (в возрасте от 1 до 4 месяцев) и в период отъёма. Если кошка ожидает котят или недавно родила, важно, чтобы и она, и ее потомство правильно питались: это залог здоровья матери и котят. Продукт помогает поддерживать естественные защитные механизмы котят благодаря уникальному комплексу антиоксидантов, включающему витамин Е. Мягкая текстура крокет помогает котятам легко разгрызать продукт, помогая им постепенно привыкнуть к твердой пище. Royal Canin Mother & Babycat обладает очень высокой усвояемостью. Корм обогащен ДГК – жирной кислотой класса Омега-3, которая способствует развитию мозга котенка."
    },
    {
        name: "Сухой Корм Для Кошек От 1 Года",
        photo: "/img/Royal Canin-SC365D.jpg",
        brand: "Royal Canin",
        price: "15.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "popular",
        about: "Royal Canin SC365D Сухой корм для кошек от 1 года. Данный продукт создан с учетом потребностей питомцев в питательных веществах. Нормализует обмен веществ и способствует наращиванию мышечной массы благодаря высокой вкусовой привлекательности и повышенному содержанию белков. Корм SC365D помогает снизить риск избыточного веса благодаря умеренному содержанию жиров и оптимальной суточной дозировке. Корм также рассчитан на поддержание здоровья мочевыделительной системы за счет сбалансированного содержания минералов. Подходит для стерилизованных кошек."
    },
    {
        name: "Instinctive Влажный Корм Для Взрослых Кошек, Кусочки В Желе, 85 Г",
        photo: "/img/RC_Instinctive in jelly.png",
        brand: "Royal Canin",
        price: "3.50",
        discount: "0",
        packaging: "шт",
        type: "cat",
        category: "popular",
        about: "Royal Canin Instinctive Влажный корм для взрослых кошек. Полнорационный корм в форме мелких кусочков в желе. При выборе рациона для кошки важно обеспечить ее необходимыми питательными веществами, при этом удовлетворив ее пищевые предпочтения. Для здоровой и активной жизни необходим правильный корм, при этом важно, чтобы он нравился кошке. Корм Royal Canin Instinctive в желе разработан в соответствии с макронутриентным профилем, инстинктивно предпочитаемым взрослыми кошками. Тщательно отобранные ингредиенты обеспечивают высокую вкусовую привлекательность продукта. Благодаря включению в его состав необходимых витаминов, аминокислот и минеральных веществ продукт сбалансирован и хорошо усваивается. При разработке корма принималась в расчет не только его вкусовая привлекательность, но и его способность поддерживать нормальный вес животного и здоровье его мочевыделительной системы."
    },
    {
        name: "Royal Canin Gastrointestinal Fibre Response Feline Ветеринарная Диета Для Кошек",
        photo: "/img/Royal Canin Gastrointestinal Fibre Response Feline Vet Diet Dry Cat Food.jpg",
        brand: "Royal Canin",
        price: "25.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "popular",
        about: "Royal Canin Gastrointestinal Fibre Response Feline Ветеринарная диета для кошек при запорах. Полнорационный сухой корм с повышенным содержанием клетчатки для кошек при запорах. При первых проявлениях заболевания применять в течение 3-4 недель. При хронических запорах необходимо длительное применение диеты. Специфическая комбинация определенных видов клетчатки в диете Fiber Response Feline способствует формированию фекалий нормальной консистенции, не вызывает диареи, способствует улучшению прохождения содержимого кишечника и таким образом облегчает процесс дефекации у кошек, страдающих запорами. Эта диета способствует созданию в мочевыделительной системе среды, неблагоприятной для формирования как струвитных, так и оксалатных кристаллов. Показания: острый или хронический запор. Противопоказания: кишечная непроходимость, расширение толстого кишечника (мегаколон)"
    },
    {
        name: "Giant Adult Сухой Корм Для Взрослых Собак Очень Крупных Пород",
        photo: "/img/RC_Giant Adult.png",
        brand: "Royal Canin",
        price: "12.50",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "popular",
        about: "Royal Canin Giant Adult Сухой корм для взрослых собак очень крупных пород.  Полнорационный корм для взрослых собак очень крупных пород (весом более 45 кг) в возрасте от 18/24 месяцев. Если ваша собака тоже относится к этой категории, для нее очень важно получать определенные питательные вещества, в том числе, способствующие здоровью костей и суставов и поддержанию нормальной массы тела. Вот почему в состав Royal Canin Giant Adult включены хондроитин и глюкозамин. Они помогают поддерживать здоровье суставов вашей собаки. Корм содержит эксклюзивный комплекс антиоксидантов (в том числе витамины Е и С). Комплекс способствует нейтрализации действия свободных радикалов на клеточном уровне. Аминокислоты, такие как таурин и L-карнитин, также включены в формулу Royal Canin Giant Adult для поддержания здоровья сердца."
    },
    {
        name: "Labrador Retriever Adult Сухой Корм Для Собак Породы Лабрадор-Ретривер",
        photo: "/img/K_Labrador Retriver.png",
        brand: "Royal Canin",
        price: "15.00",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "popular",
        about: "Royal Canin Labrador Retriever Adult Сухой корм для взрослых собак породы лабрадор-ретривер. Полнорационный корм, предназначенный для собак породы лабрадор-ретривер старше 15 месяцев. Специально разработан с учетом всех потребностей в питании взрослой собаки. Корм обладает умеренной калорийностью с повышенным содержанием белка и низким содержанием жиров, чтобы помочь вашей собаке поддерживать оптимальный вес. Структура водоотталкивающей шерсти лабрадора-ретривера защищает его от холода, поэтому важно правильно заботиться о ее состоянии. Эксклюзивный комплекс нутриентов, входящий в состав Royal Canin Labrador Retriever Adult, поддерживает барьерную функцию кожи. Формула, обогащенная ценными питательными веществами, в том числе маслом огуречника аптечного и другими полиненасыщенными жирными кислотами, помогает поддерживать здоровье кожи и шерсти."
    },
    {
        name: "Medium Adult Сухой Корм Для Взрослых Собак Средних Пород",
        photo: "/img/I_Medium Adult.png",
        brand: "Royal Canin",
        price: "13.00",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "popular",
        about: "Royal Canin Medium Adult Сухой корм для взрослых собак средних пород.  Полнорационный сухой корм для взрослых собак средних пород в возрасте от 12 месяцев. Royal Canin Medium Adult удовлетворяет особые потребности собак средних размеров (весом от 11 до 25 кг). К 12 месяцам ваша собака средних пород становится взрослой с точки зрения физического развития. В этот период качественное питание не менее важно, чем в период роста. Для поддержания здоровья своей собаки обеспечьте ей рацион, содержащий в себе все необходимые питательные вещества в правильных пропорциях. Благодаря эксклюзивному комплексу антиоксидантов и другим важным питательным веществам, в частности маннановым олигосахаридам, продукт Royal Canin Medium Adult поддерживает иммунитет собаки и обеспечивает ее энергией для активной жизни. Эксклюзивная формула корма Royal Canin Medium Adult, богатая высококачественным белком, способствует поддержанию оптимального пищеварения, которое позволяет собаке эффективно усваивать питательные вещества. Оптимальное количество пищевой клетчатки обеспечивает нормальную работу пищеварительной системы."
    },
    {
        name: "Mini Adult Сухой Корм Для Взрослых Собак Мелких Пород, От 10 Мес",
        photo: "/img/I_Mini Adult.png",
        brand: "Royal Canin",
        price: "13.00",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "popular",
        about: "Royal Canin Mini Adult Сухой корм для взрослых собак мелких пород. Полнорационный сухой корм для собак в возрасте от 10 месяцев, специально разработан для собак мелких пород (весом от 4 до 10 кг). Им требуется больше энергии, чем крупным собакам, период роста у них короче, а сам рост – интенсивнее. Как правило, они живут дольше, чем крупные собаки, и отличаются большей привередливостью в питании. Корм способствует поддержанию идеального веса благодаря оптимальной калорийности рациона, отвечающей энергетическим потребностям собак мелких пород. Формула также содержит L-карнитин. Исключительные вкусовые качества корма удовлетворят даже самых привередливых в питании собак мелких размеров. Формула содержит питательные вещества, способствующие поддержанию здоровья кожи. Обогащена жирными кислотами EPA-DHA."
    },
    {
        name: "Expert Ликвидатор Пятен И Запаха Для Кроликов, Грызунов И Птиц, 200 Мл",
        photo: "/img/priuckosh.jpg",
        brand: "MR. FRESH EXPERT",
        price: "8.40",
        discount: "0",
        packaging: "шт",
        type: "bird",
        category: "popular",
        about: "Mr. Fresh Expert Ликвидатор пятен и запаха для кроликов, грызунов и птиц. Средство в форме спрея устраняет органические загрязнения (следы и запах мочи, фекалий, меток, крови, рвотных масс животных) с различного рода поверхностей (клетки, аксессуары, мебельная обивка) и устраняет запах."
    },
    {
        name: "Plus Adult Hign Energy Сухой Корм Для Взрослых Собак Высокая Энергия, С Говядиной",
        photo: "/img/Reflex-Plus-Adult-High-Energy-Dry-Dog-Food-with-Beef.jpg",
        brand: "Reflex",
        price: "7.90",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Полнорационный сбалансированный супер премиум корм для взрослых,активных, беременных и кормящих собак всех пород. Состав: белки говядины (дегидратированные), животные белки (дегидратированные), кукуруза, куриный жир, рис, свекольный жом, ароматизатор печень, сухая молочная сыворотка, витамины и минералы, ксило-олигосахариды, пивные дрожжи, l-карнитин, семена льна, соль, юкка,  консерванты-антиоксиданты. Информация об ингредиентах и нутриентном составе на сайте является справочной. Вся информация о продукте представлена непосредственно на упаковке."
    },
    {
        name: "Adult Plus Medium & Large Сухой Корм, Для Взрослых Собак Средних И Крупных Пород, C Ягненком И Рисом",
        photo: "/img/Reflex-Plus-Adult Medium-Large-Breeds-Dry-Dog-Food-with-Lamb-Rice-1000x1000.jpg",
        brand: "Reflex",
        price: "7.90",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Полнорационный сбалансированный супер премиум корм для взрослых собак средних и крупных пород от 18-24 месяцев. Ягненок с рисом. Состав: белки мяса ягненка (дегидратированные), животные белки (дегидратированные), кукуруза, куриный жир, рис, свекольный жом, ароматизатор печень, сухая молочная сыворотка, витамины и минералы, ксило-олигосахариды, пивные дрожжи, l-карнитин, семена льна, соль, юкка, сульфат, консерванты-антиоксиданты. Информация об ингредиентах и нутриентном составе на сайте является справочной. Вся информация о продукте представлена непосредственно на упаковке."
    },
    {
        name: "Mini Adult Сухой Корм, Для Взрослых Собак Мелких Пород, Беззерновой, С Ягненком",
        photo: "/img/ImageRequest-2030-1707x2048-1000x1000.jpg",
        brand: "Brit Care",
        price: "17.20",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Brit Care Mini Grain Free Adult - сухой полнорационный корм для взрослых собак миниатюрных пород. Беззерновая гипоаллергенная формула."
    },
    {
        name: "Mini Puppy Сухой Корм Для Щенков Мелких Пород, Беззерновой, C Ягненком",
        photo: "/img/packshot-puppy-mini-shn17-1000x1000.png",
        brand: "Brit Care",
        price: "20.00",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Brit Care Mini Puppy - сухой полнорационный корм для щенков миниатюрных пород (от 2 недель) и кормящих собак. Беззерновая гипоаллергенная формула."
    },
    {
        name: "Kitten Сухой Корм, Для Котят И Кормящих Кошек",
        photo: "/img/kitten-natures-protection-new-800x800-1000x1000.jpg",
        brand: "Nature's Protection",
        price: "16.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "",
        about: "100% питательная и сбалансированная формула, которая требуется для молодых кошек. Все ингредиенты тщательно подобраны для обеспечения оптимального старта в самый деликатный период жизни. Легко усваивается и обеспечивает спокойный процесс отнятия от матери и легкий переход к твердой пище. Можно также давать кормящей кошке. Состав: мясо птицы 44% (сушеное и измельченное), рис, жир птицы, кукуруза, кукурузный глютен, мука из криля (мин. 4%), рыбная мука, яичный порошок, лососевое масло, жом сахарной свеклы, динамически микронизированный клиноптилолит (1%), семя льнa, пивные дрожжи, экстракт цикория, экстракт юкки. Информация об ингредиентах и нутриентном составе на сайте является справочной. Вся информация о продукте представлена непосредственно на упаковке."
    },
    {
        name: "Сухой Корм Для Собак, С Говядиной, Курицей И Овощами",
        photo: "/img/Chappi-Dry-Dog-Food-Beef-Chicken-Vegetables-1000x1000.jpg",
        brand: "Chappi",
        price: "4.30",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Chappi Сухой корм для собак, с говядиной, курицей и овощами. Сбалансированный рацион для взрослых собак. Обеспечит организм собаки всеми необходимыми питательными веществами. Содержит жирные кислоты и витамины E, D3, А для здоровой и красивой шерсти, укрепления костей и зубов, поддержания иммунитета."
    },
    {
        name: "ХОЛИСТИК (70% мяса) GRANDORF SINGLE GRAIN KITTEN LAMB & TURKEY",
        photo: "https://zoodrug.az/images/products/88812fc5-99ed-4320-a614-1b6c15fb66ec.jpg",
        brand: "GRANDORF",
        price: "31.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "",
        about: "Гипоаллергенный сухой корм класса ХОЛИСТИК (70% мяса) GRANDORF SINGLE GRAIN KITTEN LAMB & TURKEY низкозерновой для котят с ягненком, индейкой и бурым рисом. Максимум мяса и богатый состав полезных ингредиентов для котят в возрасте от 3 недель, беременных и кормящих кошек. Идеально подходит для нежной пищеварительной системы котят. Высокое содержание необходимых протеинов, полезных жиров, аминокислот и витаминов гарантирует оптимальную энергетическую ценность для здорового роста и развития котенка."
    },
    {
        name: "ХОЛИСТИК (70% мяса) GRANDORF CAT 4 MEAT & RICE INDOOR",
        photo: "https://zoodrug.az/images/products/69dea80c-6098-42f5-853c-e41e42a5e09b.jpg",
        brand: "GRANDORF",
        price: "31.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "",
        about: "Гипоаллергенный сухой корм класса ХОЛИСТИК (70% мяса) GRANDORF SINGLE GRAIN KITTEN LAMB & TURKEY низкозерновой для котят с ягненком, индейкой и бурым рисом. Максимум мяса и богатый состав полезных ингредиентов для котят в возрасте от 3 недель, беременных и кормящих кошек. Идеально подходит для нежной пищеварительной системы котят. Высокое содержание необходимых протеинов, полезных жиров, аминокислот и витаминов гарантирует оптимальную энергетическую ценность для здорового роста и развития котенка."
    },
    {
        name: "Сухой корм Monge Cat Sterilised для взрослых кастрированных котов и стерилизованных кошек.",
        photo: "https://zoodrug.az/images/products/51b86f61-c529-4b04-ab53-079cbe9bdee2.jpg",
        brand: "MONGE",
        price: "14.00",
        discount: "0",
        packaging: "кг",
        type: "cat",
        category: "",
        about: "Сухой корм Monge Cat Sterilised c курицей для взрослых кастрированных котов и стерилизованных кошек. Monge Superpremium Cat Sterilised - это полноценный сбалансированный рацион для стерилизованных кошек с пониженным содержанием калорий, обеспечивающий профилактику ожирения. Содержит важнейшие антиоксиданты, такие как витамин Е, для поддержания иммунной системы."
    },
    {
        name: "Сухой корм Monge Puppy&Junior для щенков всех пород со вкусом лосося и риса.",
        photo: "https://zoodrug.az/images/products/470bfe56-3005-4e2d-ab5b-44f9502c8670.jpg",
        brand: "MONGE",
        price: "14.00",
        discount: "0",
        packaging: "кг",
        type: "dog",
        category: "",
        about: "Сухой корм Monge Dog Sterilised c курицей для щенков. Monge Superpremium Dog Sterilised - это полноценный сбалансированный рацион для стерилизованных щенков с пониженным содержанием калорий, обеспечивающий профилактику ожирения. Содержит важнейшие антиоксиданты, такие как витамин Е, для поддержания иммунной системы."
    },
    {
        name: "Качели-арка TRIXIE для птиц. Размер: 10 х 22 см.",
        photo: "https://zoodrug.az/images/products/abcaa95e-98f2-49d8-b6e5-f0f9cce4d1bc.jpg",
        brand: "TRIXIE",
        price: "5.00",
        discount: "0",
        packaging: "шт",
        type: "bird",
        category: "",
        about: "Металлические качели с деревянной жердочкой для птиц небольших размеров (волнистых попугаев, канареек, зябликов, вьюрков и пр.). Аксессуар подвешивается к верхней части клетки и ассоциируется с природным поведением птиц, когда они висят и раскачиваются на ветках деревьев."
    },
    {
        name: "Корм для хомячков.",
        photo: "https://zoodrug.az/images/products/a4481ee3-ed15-463a-b97f-726d03c5da4a.jpg",
        brand: "Little One",
        price: "4.80",
        discount: "0",
        packaging: "шт",
        type: "rodents",
        category: "",
        about: "Полнорационный корм с добавлением витаминов и минеральных веществ. Разнообразный состав включает в себя зерна, семена, орехи и редкие плоды. Разработан с учетом специфических потребностей хомячков и не содержит острых компонентов, которые могут повредить нежные щеки питомцев. Комплекс цинка и биотина для блестящей шерсти и здоровой кожи питомца. Добавленный экстракт юкки нейтрализует неприятные запахи Сбалансированный состав обеспечит высокую питательность и усваиваемость корма."
    },
    {
        name: "Корм для кроликов.",
        photo: "https://zoodrug.az/images/products/c0eaae9e-b34b-4b43-9257-9fc290917a00.jpg",
        brand: "Little One",
        price: "4.80",
        discount: "0",
        packaging: "шт",
        type: "rodents",
        category: "",
        about: "Полнорационный корм, содержащий комплекс белков, жиров, углеводов, минеральных веществ и витаминов. Разработан с учетом специфических потребностей кроликов и отличается высоким содержанием клетчатки, необходимой для правильного пищеварения. Состав корма обогащен сушеными овощами, плющеными бобами и плодами редких растений. Корм для кроликов содержит витаминно–минеральный комплекс, содержит фруктоолигосахариды – натуральные пребиотики для комфортного пищеварения, комплекс цинка и биотина для здоровой кожи и блестящей шерсти. Экстракт юкки предотвращает образование неприятного запаха."
    },
    {
        name: "Корма для рыб Pro Energy универсальный Чипсы 12 гр.",
        photo: "https://zoodrug.az/images/products/d3af4ee1-20ce-4c18-adb4-74c6bce6605b.jpg",
        brand: "Tetra",
        price: "3.50",
        discount: "0",
        packaging: "шт",
        type: "fish",
        category: "",
        about: "Высококачественный полноценный корм изготавливается по бережной низкотемпературной технологии, что позволяет сохранить его высокую питательную ценность. Концентрат для повышения энергии придает рыбам жизненные силы."
    },
    {
        name: "Min Flakes Корма для рыб универсальный хлопья 12 гр.",
        photo: "https://zoodrug.az/images/products/1aeb9237-386c-4865-8d04-0d85b7c588a3.jpg",
        brand: "Tetra",
        price: "3.50",
        discount: "0",
        packaging: "шт",
        type: "fish",
        category: "",
        about: "Tetra Min - полноценный корм в виде смеси высококачественных хлопьев с функциональными питательными веществами, обеспечивающий полноценный рацион для ежедневного питания всех видов декоративных рыб. Поддерживает здоровый рост и жизненные силы рыб, а также яркость окраса."
    },
]

const brandsList = [
    {
        name: "CHAPPI",
        photo: "https://zoodrug.az/images/brands/175bad2c-9d31-4e8a-a1f2-5ae433ef5817.jpg",
        info: "- принадлежит американской компании Mars Incorporated. Однако корм для собак, выпускаемый под этой маркой, изготавливается в России на производственных мощностях, принадлежащих компании Mars. В состав входят злаки, мясо и субпродукты, отборные овощи, питательные масла, жиры и полезные травы, которые благотворно влияют на работу почек и желудочно-кишечного тракта. Также «Чаппи» содержит витамины А, D, Е и группы В, которые улучшают состояние шерсти и кожи, укрепляют иммунитет и помогают защищать организм от негативных воздействий окружающей среды. Консервы «Чаппи» — это питательная еда для взрослых собак, которая приготовлена из натуральных ингредиентов. Их можно давать в качестве самостоятельного блюда или смешивать с сухим кормом или кашами. В каталоге консервы «Чаппи» представлены в следующих видах упаковки: в жестяных банках объемом 400 г, а также в паучах массой 100 г."
    },
    {
        name: "GRANDORF",
        photo: "https://zoodrug.az/images/brands/c8b8137e-b1ab-44fc-9e79-5d5d6fabdf34.jpg",
        info: "— это корма Бельгийской марки. Качественный рацион для кошек и собак, который относится к классу холистик. Это полноценное и сбалансированное питание, восполняющее энергетические затраты питомца. Подходит для аллергиков, регулярно получает положительные отзывы от заводчиков, ветеринаров и владельцев животных. Сухие корма GRANDORF выпускаются в Бельгии. Консервы сходят с итальянских конвейеров — этим объясняется бескомпромиссное качество продукта. Основной упор здесь сделан на качестве. Производитель не закладывает большие маркетинговые затраты в себестоимость продукта, что положительно отражается на стоимости."
    },
    {
        name: "MR. FRESH EXPERT",
        photo: "https://zoodrug.az/images/brands/dbd4e480-9487-471a-a5c9-192a263682e5.jpg",
        info: "– серия современных средств по уходу за домашними животными. Составы разработаны компанией Neoterica GmbH (Германия). Средства Mr.Fresh помогут Вам приучить Ваших любимцев к порядку и содержать дом в чистоте, не прибегая к насилию. Специальные составы: Входящие в состав энзимы разлагают запах и пятна на молекулярном уровне, тем самым устраняют, а не маскируют проблему. Цена и качество. Изготовлены по современным европейским технологиям в России, что позволяет не переплачивать за их высокое качество. Безопасность. Не содержат хлора, фтора и других химически агрессивных компонентов."
    },
    {
        name: "MONGE",
        photo: "https://zoodrug.az/images/brands/9fba1ad8-df78-417e-8ab7-a65d40f7b9b8.jpg",
        info: "- итальянская компания, которая производит качественные сухие и влажные корма для собак и кошек. Их рецептура разработана на основе результатов исследований и инноваций в сфере создания питания для домашних животных. Специалисты компании тесно сотрудничают с профессорами европейских университетов, где открыты факультеты ветеринарной медицины. Ученых привлекают в качестве независимых консультантов, это позволяет постоянно улучшать рецептуру и делать корма Monge еще более полезными."
    },
    {
        name: "NATURE'S PROTECTION",
        photo: "https://zoodrug.az/images/brands/5a49ce3e-2805-4d24-b9a2-f4870ee23183.jpg",
        info: "– сухой и влажный корм высочайшего качества класса Super Premium для кошек и собак. Nature’sProtection -  это новинка в питании домашних животных из природы. NATURE’S PROTECTION мир – это более миллиона преданных питомцев из более чем 50 стран мира, победами и историями успеха которых мы с радостью делимся. В своей работе команда NATURE’S PROTECTION - постоянно сталкивается c поиском решений трудных задач. Для них важно создать и усовершенствовать разработки в области диетологии нового поколения, которые основаны на эффективности и оценке ведущих заводчиков. Лучшие специалисты по вопросам питания и признанные ветеринары помогают им создавать видение лучшего мира для питомцев. NATURE’S PROTECTION SUPERIOR CARE - это специализированный функциональный полнорационный сухой корм Super Premium класса для собак и кошек с особыми потребностями."
    },
    {
        name: "ROYAL CANIN",
        photo: "https://zoodrug.az/images/brands/2297c30e-86aa-4105-9e9d-8a5fc2684f44.jpg",
        info: "— французский производитель кормов для кошек и собак, с 2002 года принадлежащий подразделению компании Mars, Incorporated «Masterfood».  Фирма «Royal Canin» была основана в 1967 году в местечке Гард (Франция). Нынче, главный офис размещается в городе Эмарг (Франция). Компания «Royal Canin» имеет представительства в разных странах: США, Аргентине, Бразилии, Германии, России и Канаде. Компания «Royal Canin» также известна своими разработками в области сбалансированного питания кошек и собак, основанными на производстве кормов для животных с различными особенностями: пожилой возраст, длинная шерсть, уход за кожей, образ жизни (подвижность)."
    },
    {
        name: "REFLEX",
        photo: "https://zoodrug.az/images/brands/f23b5426-373f-4a63-ac57-40fb993d9312.jpg",
        info: "- ведущий производитель кормов в Турции. Была основана в 2009 году в партнерстве с Tavas Pet и Sera Pet, авторитетными компаниями группы с долгой и успешной историей, работающей в более чем шести тысячах точек продаж в секторе кормов для домашних животных.Компания, которая продолжает расти с быстрым ускорением, осуществляет производство с годовой мощностью 150 тысяч тонн на общей площади 40 тысяч квадратных метров.Как семья Lider Pet Food, компания переписывает, разрабатывает и делится рецептом счастья для ваших пушистых друзей с 2009 года."
    },
    {
        name: "TRIXIE",
        photo: "https://zoodrug.az/images/brands/3ff9a13f-f34f-4086-9d4b-8b8bb9170465.jpg",
        info: "- производитель качественных зоо-товаров для животных. Немецкая компания TRIXIE Heimtierbedarf GmbH & Co KG была основана в 1974 г., и с тех пор, вот уже более 40 лет, домашние животные неизменно остаются в центре внимания этой компании. Интерес и любовь к животным и их владельцам помогают бренду непрерывно развиваться. Широкий диапазон продуктов TRIXIE экспортируется более чем в 60 стран. Инновационные продукты, современные технологии, ориентированный на потребности клиентов сервис - это лишь некоторые из факторов успеха TRIXIE."
    },
    {
        name: "ZOODRUG",
        photo: "https://zoodrug.az/images/brands/99695dc3-1551-458f-9496-68a1321be410.jpg",
        info: "- наша миссия, предоставить вам и вашим любимым питомцам высокое качество сервиса, ассортимент и низкие цены в нашем зоомагазине. Наш коллектив молодых и энергичных специалистов, которые всегда будут рады ответить на ваши вопросы и пожелания. С помощью наших товаров сделайте жизнь любимого животного долгой, счастливой и яркой."
    },
    {
        name: "BRIT",
        photo: "https://zoodrug.az/images/brands/25dbe7da-fd84-4e8a-8cf0-0d33925d95c1.jpg",
        info: "— это сбалансированный рацион, разработанный при участии ведущих ветеринаров и диетологов. В их рецептуру входят натуральные, легкоусвояемые ингредиенты, которые проходят специальную обработку, позволяющую сохранить максимум витаминов и микроэлементов. В каталоге представлены корма BRIT для щенков, беременных и кормящих сук, кошек и котят, взрослых собак мелких, средних и крупных пород, питомцев, страдающих от пищевой аллергии, с чувствительным пищеварением, а также для пожилых животных."
    },
]

//add goods
for (let i = 0; i < goods.length; i++) {
    add(".goods", i)
}
function add(className, c) {
    $(className).append(`
<div goodsId = "${c}"  class="gds col-lg-2 p-2 bg-white border my-2 rounded">
    <div class="gds-click" onclick="showInfo(${c})">
        <div class="img">
            <img src="${goods[c].photo}" width="100%" alt="">
        </div>
        <div class="txt p-2 mt-2">
            <div class = "gds-info">
                <h4 class="fs-7 m-0 fw-normal"><b>${goods[c].brand}</b> ${goods[c].name}</h4>
            </div>
            <div class="review d-flex align-items-center mb-2">
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <p class="text-muted ms-2 fs-7">(0)</p>
            </div>
            <span class="text-primary"><span class="price text-danger fw-bold">${goods[c].price}₼ /</span>1 ${goods[c].packaging}</span>
        </div>
    </div>
    <button class="rounded-circle fv"><i class="fa-regular add-favorite fa-heart cl-orange"></i></button>
</div>`)
}
function search(id) {
    $(".goods").html("")
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].brand.toLocaleUpperCase().includes($(id).siblings().val().toLocaleUpperCase()) || goods[i].about.toLocaleUpperCase().includes($(id).siblings().val().toLocaleUpperCase()) || goods[i].name.toLocaleUpperCase().includes($(id).siblings().val().toLocaleUpperCase()) || goods[i].type.toLocaleUpperCase().includes($(id).siblings().val().toLocaleUpperCase()) || goods[i].category.toLocaleUpperCase().includes($(id).siblings().val().toLocaleUpperCase())) {
            add(".goods", i)
        }
        $(".goods .add-favorite").each(function () {
            if (favoritesList.includes(Number($(this).parents(".gds").attr("goodsId")))) {
                $(this).addClass("fa-solid")
            }
        });
    }
    $(".menu-click").each(function (i) {
        $(".menu-click").eq(i).children().eq(0).removeClass("clicked-img")
        $(".menu-click").eq(i).children().eq(1).removeClass("clicked-h4")
    })

}
$('.search input[type=search]').on('search', function () {
    $(".goods").html("")
    for (let i = 0; i < goods.length; i++) {
        add(".goods", i)
        $(".goods .add-favorite").each(function () {
            if (favoritesList.includes(Number($(this).parents(".gds").attr("goodsId")))) {
                $(this).addClass("fa-solid")
            }
        });
    }
    $(".search input").val("")
});
$(".search input").keyup(function () {
    $(".search input").val(`${$(this).val()}`)
})
function quantityDown() {
    $(".product-quantity").attr("value", Number($(".product-quantity").attr("value")) - 1)
    if ($(".product-quantity").attr("value") < 1) {
        $(".product-quantity").attr("value", `1`)
    }
}
function quantityUp() {
    $(".product-quantity").attr("value", Number($(".product-quantity").attr("value")) + 1)
    if ($(".product-quantity").attr("value") > 10) {
        $(".product-quantity").attr("value", `10`)
    }
}
function price() {
    var price = 0
    var id = 0
    cartList.forEach((index, x) => {
        price += Number($(".gds .product-quantity").val()) * goods[x].price
        id++
    })
    $(".total-price").text(`${price}₼`)
}
var index
var cartList = new Map();
function showInfo(b) {
    //show
    $(".info").show()
    $("body").css("overflow", "hidden")
    $(".info .item").html(`
<div class="info-ust d-flex justify-content-between align-items-center">
    <h4 class="pe-3 mb-0">${goods[b].name}</h4>
    <i class="fa-regular fa-circle-xmark cl-dorange fs-2"></i>
</div>
<div class="info-alt">
    <div class="info-img">
        <img class="w-100"
            src="${goods[b].photo}"
            alt="">
    </div>
    <div class="info-txt pt-3">
        <div class="info-txt-ust">
            <p class="mb-1"><span class="fw-bold">Бренд: </span><span class="text-muted ms-3 show-brands" onclick="showBrands('${goods[b].brand}')">${goods[b].brand}</span></p>
            <div class="review d-flex align-items-center py-3">
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <p class="text-muted ms-2 fs-7">(0 Отзывы)</p>
            </div>
            <span class="h1 text-danger">${goods[b].price}₼<span class= "text-primary fw-normal">/1${goods[b].packaging}</span></span>
        </div>
        <div class="info-txt-alt">
            <hr>
            <div class="info-about pe-5">
                <p class="m-0">${goods[b].about}</p>
            </div>
            <hr>
            <div class="option quantity">
                <p>Количество</p>
                <div class="d-flex">
                    <button onclick="quantityDown()" class="quantity-button border quantity-down fa fa-minus bg-muted"></button>
                    <input type="button" value="1" class="product-quantity d-flex justify-content-center align-items-center border-0 bg-white border-top border-bottom">
                    <button onclick="quantityUp()" class="quantity-button border quantity-up fa fa-plus bg-muted"></button>
                    <button class="ms-5 w-75 ad-cart btn bg-orange text-white" >Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</div>`)
    cartList.forEach((index, x) => {
        if (b == x) {
            $(".product-quantity").attr("value", `${index}`)
        }
    })
    // add cart 
    $(".ad-cart").click(function () {
        cartList.set(b, Number($(".product-quantity").attr("value")))
        $(".cart-quantity").attr("value", `${cartList.size}`)
    })
    // hide
    $(".info .fa-circle-xmark").click(function () {
        $(".info").hide()
        $("body").css("overflow", "auto")
    })
}
function showInfoIn(b) {
    //show
    $(".info").show()
    $("body").css("overflow", "hidden")
    $(".brands-info").css("z-index", "98")
    $(".info .item").html(`
<div class="info-ust d-flex justify-content-between align-items-center">
    <h4 class=" mb-0">${goods[b].name}</h4>
    <i class="fa-regular fa-circle-xmark cl-dorange fs-2"></i>
</div>
<div class="info-alt">
    <div class="info-img">
        <img class="w-100"
            src="${goods[b].photo}"
            alt="">
    </div>
    <div class="info-txt pt-3">
        <div class="info-txt-ust">
            <p class="mb-1"><span class="fw-bold">Бренд: </span><span class="text-muted ms-3 show-brands" onclick="showBrands('${goods[b].brand}')">${goods[b].brand}</span></p>
            <div class="review d-flex align-items-center py-3">
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <i class="fa-solid fa-star fs-7 text-warning"></i>
                <p class="text-muted ms-2 fs-7">(0 Отзывы)</p>
            </div>
            <span class="h1 text-danger">${goods[b].price}₼<span class= "text-primary fw-normal">/1${goods[b].packaging}</span></span>
        </div>
        <div class="info-txt-alt">
            <hr>
            <div class="info-about pe-5">
                <p class="m-0">${goods[b].about}</p>
            </div>
            <hr>
            <div class="option quantity">
                <p>Количество</p>
                <div class="d-flex">
                    <button onclick="quantityDown()" class="quantity-button border quantity-down fa fa-minus bg-muted"></button>
                    <input type="button" value="1" class="product-quantity d-flex justify-content-center align-items-center border-0 bg-white border-top border-bottom">
                    <button onclick="quantityUp()" class="quantity-button border quantity-up fa fa-plus bg-muted"></button>
                    <button class="ms-5 w-75 ad-cart btn bg-orange text-white" >Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</div>`)
    cartList.forEach((index, x) => {
        if (b == x) {
            $(".product-quantity").attr("value", `${index}`)
        }
    })
    // add cart 
    $(".ad-cart").click(function () {
        cartList.set(b, Number($(".product-quantity").attr("value")))
        $(".cart-quantity").attr("value", `${cartList.size}`)
    })
    // hide
    $(".info .fa-circle-xmark").click(function () {
        $(".info").hide()
        $(".brands-info").css("z-index", "101")
    })
}
$(".menu-click").click(function () {
    if ($(this).children().eq(0).hasClass("clicked-img")) {
        $(this).children().eq(0).toggleClass("clicked-img")
        $(this).children().eq(1).toggleClass("clicked-h4")
        $(".goods").html("")
        for (let i = 0; i < goods.length; i++) {
            add(".goods", i)
        }
    } else {
        $(".menu-click").each(function (i) {
            $(".menu-click").eq(i).children().eq(0).removeClass("clicked-img")
            $(".menu-click").eq(i).children().eq(1).removeClass("clicked-h4")
        })
        $(this).children().eq(0).toggleClass("clicked-img")
        $(this).children().eq(1).toggleClass("clicked-h4")
        $(".goods").html("")
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].type == $(this).attr("category")) {
                add(".goods", i)
            }
        }
    }
    $(".goods .add-favorite").each(function () {
        if (favoritesList.includes(Number($(this).parents(".gds").attr("goodsId")))) {
            $(this).addClass("fa-solid")
        }
    });

})
$(".cart").on("click", ".quantity-cart-up", function () {
    var quantity = $(this).parents(".quantity-arena").children().eq(1)
    quantity.attr("value", Number(quantity.attr("value")) + 1)
    if (quantity.attr("value") > 10) {
        quantity.attr("value", `10`)
    }
    price()
})
$(".cart").on("click", ".quantity-cart-down", function () {
    var quantity = $(this).parents(".quantity-arena").children().eq(1)
    quantity.attr("value", Number(quantity.attr("value")) - 1)
    if (quantity.attr("value") < 1) {
        quantity.attr("value", `1`)
    }
    price()
})

// favorites
$(".open-favorites").click(function () {
    // show
    $(".favorites").css("display", "block")
    $("body").css("overflow", "hidden")
    for (let i = 0; i < favoritesList.length; i++) {
        $(".favorites .alt").append(`
<div goodsId = "${favoritesList[i]}"  class="gds col-lg-2 p-2 bg-white border my-2 rounded">
    <div class="gds-click" onclick="showInfoIn(${favoritesList[i]})">
        <div class="img">
            <img src="${goods[favoritesList[i]].photo}" width="100%" alt="">
        </div>
        <div class="txt p-2 mt-2">
            <div class = "gds-info">
                <h4 class="fs-7 m-0 fw-normal"><b>${goods[favoritesList[i]].brand}</b> ${goods[favoritesList[i]].name}</h4>
            </div>
            <div class="review d-flex align-items-center mb-2">
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <p class="text-muted ms-2 fs-7">(0)</p>
            </div>
            <span class="text-primary"><span class="price text-danger fw-bold">${goods[favoritesList[i]].price}₼ /</span>1 ${goods[favoritesList[i]].packaging}</span>
        </div>
    </div>
    <button class="rounded-circle fv me-2"><i class="fa-regular fa-solid add-favorite fa-heart cl-orange"></i></button>
</div>`)
    }
    // hide
    altFavoriteList = []
    $(".favorites .fa-circle-xmark").click(function () {
        $(".favorites").css("display", "none")
        $("body").css("overflow", "auto")
        for (let i = 0; i < favoritesList.length; i++) {
            if ($(".favorites .add-favorite").eq(i).hasClass("fa-solid")) {
                altFavoriteList.push(favoritesList[i])
            }
        }
        favoritesList = altFavoriteList
        $(".goods-div .add-favorite").removeClass("fa-solid")
        $(".goods-div .gds").each(function () {
            if (favoritesList.includes(Number($(this).attr("goodsId")))) {
                $(this).children().find(".add-favorite").addClass("fa-solid")
            }
        })
        $(".favorites .alt").html("")
        $(".favorite-quantity").attr("value", `${favoritesList.length}`)
    })

})
// add/remove to favorites
var favoritesList = []
$(".goods-div").on("click", ".add-favorite", function () {
    index = Number($(this).parents(".gds").attr("goodsId"))
    $(this).toggleClass("fa-solid")
    if ($(this).hasClass("fa-solid")) {
        favoritesList.push(index)
    } else {
        favoritesList.forEach(function (item, i) {
            if (item == index) {
                favoritesList.splice(i, 1);
            }
        });
    }
    $(".favorite-quantity").attr("value", `${favoritesList.length}`)
})
$(".favorites").on("click", ".add-favorite", function () {
    $(this).toggleClass("fa-solid")
})

// cart
$(".open-cart").click(function () {
    // show
    $(".cart").css("display", "block")
    $("body").css("overflow", "hidden")
    cartList.forEach((index, x) => {
        $(".cart .alt").append(`
<div class="gds col-lg-2 p-2 bg-white border my-2 rounded">
    <div class="gds-click" onclick="showInfoIn(${x})">
        <div class="img">
            <img src="${goods[x].photo}" width="100%" alt="">
        </div>
        <div class="txt p-2 mt-2">
            <div class = "gds-info">
                <h4 class="fs-7 m-0 fw-normal"><b>${goods[x].brand}</b> ${goods[x].name}</h4>
            </div>
            <div class="review d-flex align-items-center mb-2">
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <p class="text-muted ms-2 fs-7">(0)</p>
            </div>
            <span class="text-primary"><span cartId = "${x}" class="price text-danger fw-bold">${goods[x].price}₼ /</span>1 ${goods[x].packaging}</span>
        </div>
    </div>
    <button class="rounded-circle fv me-2"><i cartId = "${x}" class="fa-regular add-favorite fa-heart cl-orange"></i></button>
    <div class="d-flex justify-content-center quantity-arena">
        <button class="quantity-button border quantity-cart-down fa fa-minus bg-muted"></button>
        <input type="button" value="${index}" class="product-quantity d-flex justify-content-center align-items-center border-0 bg-white border-top border-bottom">
        <button class="quantity-button border quantity-cart-up fa fa-plus bg-muted"></button>
        <button cartId = "${x}" class="remove-cart btn bg-orange text-white" ><i class="fa-solid fa-trash"></i></button>
    </div>
</div>`)
    });
    $(".cart .add-favorite").each(function () {
        if (favoritesList.includes(Number($(this).attr("cartId")))) {
            $(this).addClass("fa-solid")
        }
    });
    price()
})
$(".cart").on("click", ".remove-cart", function () {
    $(this).parents(".gds").remove()
    cartList.delete(Number($(this).attr("cartId")))
    price()
})
$(".cart").on("click", ".add-favorite", function () {
    $(this).toggleClass("fa-solid")
    var id = $(this).attr("cartId")
    if ($(this).hasClass("fa-solid")) {
        favoritesList.push(Number($(this).attr("cartId")))
    } else {
        favoritesList.forEach(function (item, i) {
            if (item == id) {
                favoritesList.splice(i, 1);
            }
        });
    }
    $(".favorite-quantity").attr("value", `${favoritesList.length}`)
})
$(".cart").on("click", ".fa-circle-xmark", function () {
    $(".cart").css("display", "none")
    $("body").css("overflow", "auto")
    var id = 0
    cartList.forEach((index, x) => {
        cartList.set(x, Number($(".gds .product-quantity").attr("value")))
        id++
    })
    $(".goods-div .add-favorite").removeClass("fa-solid")
    $(".goods-div .gds").each(function () {
        if (favoritesList.includes(Number($(this).attr("goodsId")))) {
            $(this).children().find(".add-favorite").addClass("fa-solid")
        }
    })
    $(".cart-quantity").attr("value", `${cartList.size}`)
    $(".cart .alt").html("")
})

function showBrands(id) {
    $(".brands-info").css("z-index", "101")
    $(".brands-info").show()
    for (let i = 0; i < brandsList.length; i++) {
        if (id.toUpperCase() == brandsList[i].name) {
            $(".brands-info .item1").html(`
            <div class="ust d-flex justify-content-between align-items-center">
                <h4 class="h2 cl-dorange">${brandsList[i].name}</h4>
                <i class="fa-regular fa-circle-xmark cl-dorange fs-2"></i>
            </div>
            <div class="alt pt-0 d-block">
                <div class="brand-info m-auto">
                    <div class="brand-img">
                        <img src="${brandsList[i].photo}" alt=""
                            width="200px" height="200px">
                    </div>
                    <div class="brand-txt text-muted">
                        <p><b>${brandsList[i].name} </b>${brandsList[i].info}</p>
                    </div>
                </div>
                <div class="brand-goods-div">
                    <div class="d-flex justify-content-center px-5 pb-2 border-bottom">
                        <h2 class="title fs-5">Товары</h2>
                    </div>
                    <div class="brand-goods">
                    </div>
                </div>
            </div>`)
        }
    }
    for (let i = 0; i < goods.length; i++) {
        if (id.toUpperCase() == goods[i].brand.toUpperCase()) {
            $(".brand-goods").append(`
        <div goodsId = "${i}"  class="gds col-lg-2 p-2 bg-white border my-2 rounded">
            <div class="gds-click" onclick="showInfoIn(${i})">
                <div class="img">
                    <img src="${goods[i].photo}" width="100%" alt="">
                </div>
                <div class="txt p-2 mt-2">
                    <div class = "gds-info">
                    <h4 class="fs-7 m-0 fw-normal"><b>${goods[i].brand}</b> ${goods[i].name}</h4>
                    </div>
                    <div class="review d-flex align-items-center mb-2">
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <p class="text-muted ms-2 fs-7">(0)</p>
                    </div>
                    <span class="text-primary"><span class="price text-danger fw-bold">${goods[i].price}₼ /</span>1 ${goods[i].packaging}</span>
                </div>
            </div>
            <button class="rounded-circle fv me-2"><i class="fa-regular add-favorite fa-heart cl-orange"></i></button>
        </div>`)
        }
    }
    $(".brand-goods .add-favorite").each(function () {
        if (favoritesList.includes(Number($(this).parents(".gds").attr("goodsId")))) {
            $(this).addClass("fa-solid")
        }
    });
    $(".brand-goods .add-favorite").click(function () {
        $(this).toggleClass("fa-solid")
        var id = Number($(this).parents(".gds").attr("goodsId"))
        if ($(this).hasClass("fa-solid")) {
            favoritesList.push(id)
        } else {
            favoritesList.forEach(function (item, i) {
                if (item == id) {
                    favoritesList.splice(i, 1);
                }
            });
        }
        $(".favorite-quantity").attr("value", favoritesList.length)
    })
}
$(".brands-info").on("click", ".fa-circle-xmark", function () {
    $(".brands-info").hide()
    $(".popular .add-favorite").removeClass("fa-solid")
    $(".popular .gds").each(function () {
        if (favoritesList.includes(Number($(this).attr("goodsId")))) {
            $(this).children().find(".add-favorite").addClass("fa-solid")
        }
    })
})

// header-fiw
$(window).scroll(function () {
    if (window.scrollY >= 100) {
        $(".header-fix").css("display", "flex")
    } else {
        $(".header-fix").css("display", "none")
    }
})