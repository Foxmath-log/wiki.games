// Dados dos jogos. Para trocar um trailer, altere apenas o ID em videoId.
const games = [
  {
    id: "minecraft", name: "Minecraft", genre: ["Aventura", "Sandbox"], year: "2011",
    studio: "Mojang Studios", videoId: "MmB9b5njVbA",
    description: "Minecraft é um jogo de aventura e construção em blocos, onde os jogadores podem explorar, criar construções e sobreviver usando a criatividade.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwTBxN53cACjAS2nJcMBvLC0XUFyIaNBMw8ShqIfnjAA&s=10",
    history: "A história de Minecraft se passa em um mundo aberto onde o jogador precisa explorar, coletar recursos, construir e sobreviver. Durante a aventura, é possível enfrentar monstros, descobrir cavernas e viajar para outras dimensões, como o Nether e o End, onde fica o Dragão do End.",
    creation: "Minecraft foi criado por Markus Persson, conhecido como Notch, em 2009. O jogo começou como um projeto independente inspirado em jogos de construção e exploração. Em 2011, foi lançado oficialmente pela Mojang Studios. Com sua liberdade de criação e mundo aberto, conquistou milhões de jogadores e se tornou um dos jogos mais famosos do mundo.",
    characters: [["Steve", "O Steve é o personagem mais conhecido do jogo Minecraft. Ele é um dos personagens jogáveis padrão e representa a criatividade e a exploração dentro do jogo. Com sua aparência de cabelo castanho, camisa azul e calça roxa, Steve pode construir casas, explorar cavernas, enfrentar monstros e sobreviver em diferentes ambientes. Ele também pode utilizar ferramentas, fabricar itens e derrotar o Dragão do End. Sua história não possui uma narrativa fixa, pois cada jogador cria sua própria aventura."],
                 ["Alex", "A Alex é uma das personagens padrão de Minecraft. Ela tem cabelos ruivos, olhos verdes, camisa verde e calça marrom. Assim como Steve, Alex pode explorar o mundo, construir estruturas, fabricar ferramentas, enfrentar monstros e sobreviver em diferentes ambientes. Ela foi adicionada ao jogo em 2014 e se tornou uma das personagens mais populares entre os jogadores. Alex não possui uma história própria definida, permitindo que cada jogador crie suas próprias aventuras."],
                 ["Creeper", "O Creeper é um dos monstros mais famosos de Minecraft. Ele é uma criatura verde, com quatro patas e uma aparência assustadora. Sua principal característica é se aproximar silenciosamente dos jogadores e explodir, causando danos às construções e aos personagens. O Creeper foi criado acidentalmente durante o desenvolvimento do jogo, a partir de um erro no modelo de um porco. Hoje, ele é um dos símbolos mais conhecidos de Minecraft."]],
    updates: [{
        name: "Wilderness Bound",
        date: "15 de setembro de 2026",
        intro: "Wilderness Bound já está disponível no Minecraft! Prepare seus suprimentos e parta para uma expedição na floresta sombreada, onde as trilhas terminam e a aventura começa. Procure acampamentos abandonados, estabeleça postos avançados entre os álamos, durma sob as estrelas em camas de palha e compartilhe histórias ao redor da fogueira, sentado em almofadas. Lembre-se de que a natureza recompensa quem está preparado — e carregar um mapa é mais leve do que os arrependimentos!",
        title: "Destaques do conteúdo:",
        items: [
          "Bioma de floresta sombreada e acampamento abandonado.",
          "Conjuntos de blocos de madeira e álamos.",
          "Blocos de fungos de prateleira e arbustos vermelhos.",
          "Lajes e escadas de lã.",
          "Conjunto expandido de blocos de concreto.",
          "Almofadas, camas de palha e muito mais."
        ],
        note: "O conteúdo pode variar conforme a edição e a versão instalada."
      },
      {
        name: "Chaos Cubed",
        date: "16 de junho de 2026",
        intro: "Chegou o Chaos Cubed no Minecraft! Explore um impressionante bioma de cavernas repleto de poças borbulhantes de enxofre, construa com enxofre e cinábrio, e descubra o curioso apetite do cubo de enxofre por blocos! Desde saltos e deslizamentos até surpresas explosivas, essa criatura imprevisível baseada em física desbloqueia novas e empolgantes formas de construir, competir e sobreviver. ",
        title: "Principais novidades:",
        items: [
          "Criatura cubo de enxofre baseada em física",
          "Bioma de cavernas de enxofre sob fontes sulfurosas",
          "Conjuntos de blocos de cinábrio e enxofre",
          "Festas multijogador e muito mais.",
        ],
        note: "Disponível para todas as plataformas na versão mais recente."
      }],
    link: "https://www.minecraft.net/"
  },
  {
    id: "fortnite", name: "Fortnite", genre: ["Ação", "Battle Royale"], year: "2017",
    studio: "Epic Games", videoId: "5lddZVFmxaw",
    description: "Fortnite é um jogo de ação e sobrevivência em que os jogadores coletam armas, enfrentam inimigos e lutam para ser os últimos sobreviventes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqq_4YNxj3j2aXoGti8jHdKfx14rp8H99BJwXWeL_x31pEEeo3mjI86mN&s=10",
    history: "A história de Fortnite se passa em uma ilha onde vários jogadores lutam para sobreviver. Durante as partidas, eles precisam encontrar armas, coletar recursos, construir estruturas e enfrentar inimigos. Uma tempestade vai diminuindo a área segura do mapa, obrigando os jogadores a se aproximarem. O objetivo é sobreviver até o final e conquistar a vitória, sendo o último jogador ou equipe restante.",
    creation: "Fortnite foi criado pela Epic Games e lançado em 2017. Inicialmente, o jogo era focado na sobrevivência contra zumbis, no modo Salve o Mundo. No mesmo ano, foi lançado o modo Battle Royale, em que os jogadores competem para ser os últimos sobreviventes. Esse modo fez muito sucesso e transformou Fortnite em um dos jogos mais populares do mundo.",
    characters: [["Personagens e skins", "O jogo apresenta muitas aparências e personagens que mudam conforme as temporadas."],
                 ["Heróis do Salve o Mundo", "No modo Salve o Mundo, os jogadores enfrentam criaturas e defendem objetivos."]],
    updates: [{
        name: "Kasane Teto é o destaque do próximo Passe Musical do Fortnite",
        date: "11 de nov. de 2026",
        intro: "Kasane Teto se junta à festa na Ilha Ossos Cruzados como destaque do Minipasse Musical DIVA TWINDRILL em 12 de novembro! O Minipasse Musical custa 1.000 V-Bucks, ou, se você for membro do Clube Fortnite, estará incluso na sua assinatura ativa. Ao adquirir o Passe, o Traje Kasane Teto é desbloqueado imediatamente. Progrida no Passe para desbloquear mais recompensas temáticas de Teto, incluindo a Picareta Cassetete Baguete de Teto, o Acessório para as Costas Kasane Pera, o Instrumento Tecnologia Tonal e os Calçados Pantufas Miku e Teto. ",
        title: "O Passe também desbloqueia quatro Músicas, incluindo uma de Teto:",
        items: [
          "BIRDBRAIN por Jamie Paige, OK Glass feat. Kasane Teto",
          "Shut Up and Dance por Walk the Moon",
          "Chronicles of Destiny por The Home of Happy, James Corbin",
          "Lajes e escadas de lã.",
          "Sa-Sen! por MONT, Risa, Musashi",
        ],
        note: "E a última categoria desbloqueia o estilo Kasane Teto que reage à música."
      },
      {
        name: "A Corrupção se Espalha em Fortnite: Pesadelos 2026",
        date: "01 de out. de 2026",
        intro: "Em outubro, o Fortnite: Pesadelos espalha corrupção pelo Battle Royale, pelo Trocação e pela horda no Salve o Mundo com um elenco amaldiçoado e novos personagens de Five Nights at Freddy's, Hazbin Hotel, A Hora do Pesadelo, Os Fantasmas Se Divertem, Obsessão e muito mais que vão chegar ao longo do mês.",
        title: "Principais novidades:",
        items: [
          "Entre na Granja Temerária ou no novo PI Bairro Bruxesco, onde Freddy Krueger está esperando. Derrote-o para obter as Garras do Pesadelo de Freddy, que permitem teletransportar até a distância ideal e golpear oponentes.Revele inimigos com a nova SMG Quebra-ossos e use armas de retorno como a Espingarda Estacadora e o Lançador de Abóboras.",
          "Ative os Sobrecódigos de cartuchos amaldiçoados que concedem invisibilidade enquanto corre, aumentam o dano com pouca vida ou ocultam seu esquadrão como Adereços de Halloween. Encare os chefes animatrônicos de Five Nights at Freddy's para possuir um e aterrorizar o mapa.",
          "O MTL da Horda Impetuosa está de volta e, em 8 de outubro, chega ao Reload a Ilha do Pesadelo atualizada, junto dos mapas de Stranger Things e de Round 6.",
          "Os Trajes de Five Nights at Freddy’s mostram marcas de combate e já estão disponíveis na Loja. Os Trajes e acessórios de A Hora do Pesadelo, Black Clover, Hollow Knight, 99 Nights in the Forest, Hazbin Hotel, Uma Noite de Crime, Obsessão, Slender Man, Os Fantasmas se Divertem, Predador: Terras Selvagens e as Halloween Horror Nights da Universal Studios terão lançamentos ao longo de outubro. ",
        ],
        note: ""
      }],
  },
  {
    id: "elden-ring", name: "Elden Ring", genre: "RPG", year: "2022",
    studio: "FromSoftware", videoId: "E3Huy2cdih0",
    description: "Elden Ring é um RPG de ação em mundo aberto, com exploração, combates e desafios.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR7uu5XG3drgSjisvG65URY9dA2JgACnyh4qHaOFJag&s",
    history: "A aventura acontece nas Terras Intermédias, um mundo cheio de mistérios, criaturas perigosas e chefes poderosos. O jogador controla um Maculado que precisa enfrentar inimigos e reunir os fragmentos do Anel Prístino para tentar se tornar o Lorde Prístino.",
    creation: "Elden Ring foi desenvolvido pela FromSoftware, com colaboração de George R. R. Martin na criação do universo do jogo, e lançado em 2022.",
    characters: [["Maculado", "É o personagem controlado pelo jogador. Ele explora as Terras Intermédias, enfrenta inimigos poderosos e busca se tornar o Lorde Prístino."], 
                 ["Melina", "É uma jovem misteriosa que ajuda o Maculado em sua jornada, oferecendo orientação e permitindo que ele transforme runas em força."], 
                 ["Ranni", "É uma poderosa bruxa de pele azul que possui um papel importante na história. Ela busca seguir seu próprio caminho e desafiar a ordem estabelecida nas Terras Intermédias."]],
    updates: [{
        name: "ELDEN RING – Notas do Patch 1.17.2",
        date: "October 20, 2026",
        intro: "O patch 1.17.2 de ELDEN RING foi lançado. Este patch traz correções de erros para ELDEN RING. Nenhum conteúdo adicional está incluído.",
        title: "Correções de erros",
        items: [
          "Corrigido um erro em que o personagem não era exibido corretamente ao usar a armadura Peitoral da Tatuagem de Ouro com a opção Esconder o Elmo ativada.",
          "Corrigido um problema em que os gráficos da mão esquerda não eram exibidos corretamente ao usar a Habilidade da Besta de Repetição empunhada na mão esquerda com a Espada Grande de Leontiel na mão direita.",
          "Corrigidos alguns textos dos créditos.",
          "Corrigido um problema em que disparar Flecha Admiróssea e Flecha Admiróssea com Penas de determinada maneira causava acúmulo de condição.",
        ],
        note: "PlayStation 4 / PlayStation 5 / Xbox One / Xbox Series X|S / Steam"
      },
      {
        name: "Elden Ring - Notas da Atualização Versão 1.17",
        date: "27/08/2026",
        intro: "A atualização 1.17 foi lançada para ELDEN RING . Esta atualização visa adicionar suporte ao DLC Tarnished Pack , com lançamento previsto para sexta-feira, 28 de agosto de 2026 , e implementar ajustes de balanceamento na jogabilidade .",
        sections: [
          {
            title: "Conteúdo adicional: Pacote Tarnished",
            items: [
              "O DLC desbloqueia as classes iniciais Cavaleiro de Idus e Cavaleiro Pesado. Os equipamentos também podem ser comprados de mercadores ou encontrados nas Terras Intermédias.",
              "Novas armas podem ser compradas de mercadores ou encontradas explorando as Terras Intermédias.",
              "Novos trajes para Torrent: Sentinela da Árvore (Castelo do Véu da Tempestade), Corcel Espectral Prateado de Caria (Liurnia dos Lagos) e Espectral da Noite Fúnebre (Planalto de Altus). Após obter um traje, a aparência de Torrent pode ser personalizada nos Locais de Graça.",
              "Novas invasões de NPCs em Caelid e em Leyndell, a Capital Real. A invasão de Leyndell não ocorre se a área já tiver se transformado em Leyndell, Capital Cinzenta.",
              "O Pacote Tarnished é desbloqueado após a compra do DLC e já vem incluído na ELDEN RING Tarnished Edition para Nintendo Switch 2.",
              "Lançamento: PlayStation e Xbox na sexta-feira, 28 de agosto, à 0h no horário local; Steam para PC às 7h JST, 00h CEST ou 15h PDT."
            ]
          },
          {
            title: "Ajustes gerais de balanceamento",
            items: [
              "No Reino das Sombras, certos itens encontrados no cenário ou obtidos ao derrotar inimigos poderosos foram substituídos por itens de nível superior ou outros tesouros. Itens já coletados não serão alterados.",
              "Adaga Smithscript e Lâminas Gêmeas de Rellana: maior poder de acerto crítico.",
              "Machado Smithscript, Lança Smithscript e Lança do Empalador: menor consumo de vigor e maior poder nos ataques de arremesso.",
              "Smithscript Greathammer: maior poder nos ataques de arremesso.",
              "Espada de Feitiçaria Cária: o escalonamento em Inteligência agora aumenta o poder de ataque de todos os tipos de dano.",
              "Punho de Golem: maior alcance do ataque pesado.",
              "Frascos de Perfume Firespark, Lightning, Chilling, Frenzyflame e Deadly Poison: maior poder de ataque geral.",
              "Grande Katana do Rakshasa: maior tempo de espera para atacar com a mão direita após golpear com a arma equipada na mão esquerda.",
              "Haligtree Crest Greatshield: peso reduzido.",
              "Escudos médios e grandes do Grupo A (Escudo do Lorde Jurado, Grande Escudo de Espinhos, Escudo de Paliçada com Espinhos, Escudo do Ícone, Escudo da Crista da Besta Dourada, Escudo da Torre da Mansão, Escudo da Torre da Árvore Cruzada, Escudo da Torre do Falcão Invertido, Escudo da Torre do Dragão, Grande Escudo Distinto, Grande Escudo Dourado, Grande Escudo de Aço Negro, Placa de Crânio de Formiga e Grande Escudo de Erdtree): maior reforço de guarda e peso reduzido.",
              "Escudos grandes do Grupo B (Grande Escudo de Madeira, Grande Escudo Cuco, Grande Escudo Crina Vermelha, Grande Escudo Dourado, Escudo de Chifre do Crisol, Escudo Garra de Dragão, Grande Escudo Crista do Eclipse, Escudo Água-viva e Escudo de Um Olho): maior reforço de guarda.",
              "Parry: defesa aprimorada e menor tempo de recuperação antes de outras ações ao usar adagas, espadas curvas ou escudos pequenos.",
              "Parede de Tempestade: não consome mais FP e teve o desempenho de defesa aprimorado.",
              "Barreira de Thops: desempenho de defesa aprimorado.",
              "Chuva Fundadora de Estrelas e Retaliação Cária: potência aumentada.",
              "Meteorito e Meteorito de Astel: tempo de lançamento reduzido.",
              "Míssil Gravitacional: o projétil não explode mais imediatamente ao atingir superfícies como o chão ou paredes.",
              "Pena do Pássaro Divino e Chuva de Fogo: potência aumentada.",
              "Ó, Chama!: alcance de ataque expandido."
            ]
          },
          {
            title: "Balanceamento exclusivo para PvP",
            items: [
              "Grande Katana do Rakshasa: o jogador recebe mais dano de ataques adversários enquanto executa golpes com a arma.",
              "Rugido de Rugalea: poder reduzido contra outros jogadores.",
              "Hálito Podre e Decadência de Ekzykes: duração do atordoamento causado em outros jogadores reduzida."
            ]
          },
          {
            title: "Correções de bugs — Geral",
            items: [
              "Corrigido um problema em que golpes críticos com a Katana Grande causavam menos dano que o esperado em inimigos de grande porte.",
              "Corrigido um bug que permitia aparar ataques em salto utilizando armas da categoria Grande Katana."
            ]
          },
          {
            title: "Correções de bugs — PC",
            items: [
              "Corrigido um erro que bloqueava o controle da câmera pelo mouse durante diálogos com NPCs ao jogar com teclado e mouse.",
              "Corrigido um problema na aba Configurações de teclado/mouse em que a redefinição não restaurava várias teclas aos valores padrão."
            ]
          },
          {
            title: "Dados técnicos da atualização",
            items: [
              "Versão do Aplicativo: 1.17.",
              "Versão do Regulamento: 1.17. Os dados aparecem no canto inferior direito da tela de título."
            ]
          }
        ],
        note: "PlayStation 4 / PlayStation 5 / Xbox One / Xbox Series X|S / Steam"
      }],
    link: "https://en.bandainamcoent.eu/elden-ring/elden-ring"
  },
  {
    id: "free-fire", name: "Free Fire", genre: ["Ação", "Battle Royale"], year: "2017",
    studio: "Garena", videoId: "oq2Rz2I11l0",
    description: "Free Fire é um jogo de Battle Royale para dispositivos móveis, com partidas rápidas e disputas entre jogadores.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqy2DlMyM_yK1cRI3eKjRCK-DfLpcQJqDsbq-l4BIVuA&s=10",
    history: "Free Fire se passa em uma ilha onde vários jogadores precisam lutar pela sobrevivência. Durante as partidas, eles procuram armas, equipamentos e recursos para enfrentar os adversários. Com o passar do tempo, a área segura diminui, obrigando os jogadores a se aproximarem e aumentando a disputa. Cada personagem possui habilidades próprias que ajudam durante os combates. O objetivo é sobreviver até o final e ser o último jogador ou equipe restante, conquistando a vitória.",
    creation: "Free Fire foi desenvolvido pela 111dots Studio e publicado pela Garena, sendo lançado em 2017. O jogo foi criado para oferecer partidas rápidas de sobrevivência em dispositivos móveis. Com seu tamanho acessível e diferentes personagens com habilidades especiais, conquistou milhões de jogadores e se tornou um dos jogos de Battle Royale para celulares mais populares do mundo.",
    characters: [["Kelly", "É uma personagem conhecida por sua velocidade de corrida, ajudando os jogadores a se movimentarem rapidamente pelo mapa."],
                 ["Hayato", "É um guerreiro japonês de uma família tradicional de samurais, conhecido por sua habilidade de aumentar a penetração de armadura ao perder vida."],
                 ["Moco", "É uma hacker habilidosa que consegue marcar inimigos atingidos, facilitando a localização dos adversários pela equipe."]],
    updates: ["Novos personagens, eventos e modos são adicionados regularmente.", "Atualizações também podem trazer ajustes de equilíbrio e melhorias."],
    link: "https://ff.garena.com/"
  },
  // --- NOVOS JOGOS ADICIONADOS ABAIXO ---
  {
    id: "gta-v", name: "Grand Theft Auto V", genre: "Ação", year: "2013",
    studio: "Rockstar Games", videoId: "QkkoHAzjnUs",
    description: "GTA V é um jogo de ação e mundo aberto em que os jogadores podem explorar a cidade de Los Santos, realizar missões e participar de diversas atividades.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdq_zIUlHD0tYAQjhqT9t2MPTTKwfqnbP0k9LaLO4Gw&s",
    history: "A história acompanha três protagonistas: Michael, Franklin e Trevor. Eles vivem em Los Santos e se envolvem em assaltos, perseguições e atividades criminosas. Ao longo da aventura, os três enfrentam problemas com criminosos, policiais e outros inimigos.",
    creation: "GTA V foi desenvolvido pela Rockstar North e publicado pela Rockstar Games em 2013. O jogo foi criado para oferecer um mundo aberto detalhado, com liberdade de exploração, histórias envolventes e muitas possibilidades.",
    characters: [["Michael De Santa", "É um ex-assaltante de bancos que tenta viver uma vida tranquila com sua família, mas acaba voltando ao crime."],
                 ["Franklin Clinton", "JÉ um jovem que busca melhorar de vida e conquistar dinheiro e respeito, entrando no mundo dos grandes assaltos."],
                 ["Trevor Philips", "É um criminoso imprevisível e violento, conhecido por seu comportamento explosivo e sua ligação com o passado de Michael."]],
    updates: [{
        name: "",
        date: "",
        intro: "",
        title: "",
        items: [
          "",
          "",
          "",
          "",
          "",
        ],
        note: ""
      },
      {
        name: "",
        date: "",
        intro: "",
        title: "",
        items: [
          "",
          "",
          "",
          "",
        ],
        note: ""
      }],
    link: "https://www.rockstargames.com/gta-v"
  },
  {
    id: "the-witcher-3", name: "The Witcher 3: Wild Hunt", genre: "RPG", year: "2015",
    studio: "CD Projekt Red", videoId: "qt6JoMA6Hus",
    description: "The Witcher 3 é um RPG de mundo aberto em que os jogadores exploram reinos, enfrentam monstros e realizam missões com o caçador Geralt de Rívia.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwmhvqnldGAtu1-QCTng_rZBG1xlE_Acdi25IL8ED7g&s=10",
    history: "A história acompanha Geralt de Rívia, um bruxo que procura sua filha adotiva, Ciri, enquanto tenta protegê-la da Caçada Selvagem, um grupo misterioso de cavaleiros. Durante a jornada, Geralt enfrenta monstros, participa de conflitos e toma decisões que podem mudar o destino dos personagens.",
    creation: "The Witcher 3 foi desenvolvido pela CD Projekt Red e lançado em 2015. O jogo foi inspirado nos livros do escritor polonês Andrzej Sapkowski e criado para oferecer um mundo aberto cheio de histórias, escolhas e aventuras.",
    characters: [["Geralt de Rívia", "É o protagonista, um bruxo habilidoso que caça monstros usando espadas, poções e magia."], 
                 ["Ciri", "É a filha adotiva de Geralt e possui poderes especiais que a tornam alvo da Caçada Selvagem."],
                 ["Yennefer de Vengerberg", "É uma poderosa feiticeira que tem uma relação importante com Geralt e ajuda na busca por Ciri."]],
    updates: ["Recebeu duas expansões aclamadas: Hearts of Stone e Blood and Wine.", "Ganhou melhorias gráficas recentes para a nova geração."],
    link: "https://thewitcher.com/"
  },
  {
    id: "roblox", name: "Roblox", genre: "Aventura", year: "2006",
    studio: "Roblox Corporation", videoId: "sme76WoJ_-U",
    description: "Roblox é uma plataforma de jogos online onde os jogadores podem explorar mundos, participar de aventuras e criar suas próprias experiências.",
    image: "https://bdjogos.com.br/capas/17782-roblox-xbox-one-capa-1.jpg",
    history: "Roblox não possui uma história única, pois reúne diversos jogos criados pelos próprios usuários. Neles, os jogadores podem enfrentar desafios, explorar mapas, construir casas, competir em corridas e viver diferentes aventuras. Cada experiência possui suas próprias regras, objetivos e personagens.",
    creation: "Roblox foi criado por David Baszucki e Erik Cassel, sendo lançado oficialmente em 2006. A plataforma foi desenvolvida para permitir que os usuários criassem seus próprios jogos e compartilhassem suas criações com outras pessoas. Com o tempo, ganhou popularidade mundial e passou a oferecer milhares de experiências diferentes.",
    characters: [["Noob", "Termo popular usado para descrever avatares padrão iniciais."],
                 ["Avatares Personalizados", "Milhares de opções de roupas, acessórios e corpos criados pela comunidade."]],
    updates: ["Atualizações constantes de ferramentas de desenvolvimento para os criadores de conteúdo.", "Expansão para diferentes plataformas (PCs, consoles e celulares)."],
    link: "https://www.roblox.com/"
  },
  {
    id: "valorant", name: "Valorant", genre: "Ação", year: "2020",
    studio: "Riot Games", videoId: "lWr6dhTcu-E",
    description: "VALORANT é um jogo de tiro tático em primeira pessoa, no qual duas equipes competem usando armas e habilidades especiais para vencer as rodadas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOf-hBYS42VVffsVV3EiCNbEiCcqZ8yMeWqdbJHEEnjynzVXJx4_dPoEiR&s=10",
    history: "A história de VALORANT acontece em um futuro em que um evento chamado Primeira Luz provoca mudanças no mundo e dá origem a pessoas com poderes especiais. Os agentes fazem parte de uma organização que enfrenta ameaças e combate uma equipe de outra Terra, disputando objetivos em diferentes locais.",
    creation: "VALORANT foi desenvolvido pela Riot Games e lançado em 2020. O jogo foi criado para combinar estratégia, precisão nos tiros e habilidades únicas dos personagens, conquistando muitos jogadores ao redor do mundo.",
    characters: [["Jett", "É uma agente ágil da Coreia do Sul, conhecida por sua velocidade e habilidade de se movimentar rapidamente durante os combates."],
                 ["Sage", "É uma agente chinesa que possui habilidades de cura e proteção, ajudando a manter seus aliados vivos durante as partidas."],
                 ["Phoenix", "É um agente britânico que controla o fogo e utiliza suas habilidades para atacar inimigos e se recuperar durante as batalhas."]],
    updates: ["Atualizações frequentes trazem novos agentes, mapas e passes de batalha.", "O jogo também recebeu versões para consoles de nova geração."],
    link: "https://playvalorant.com/"
  },
  {
    id: "zelda-totk", name: "The Legend of Zelda: Tears of the Kingdom", genre: "Aventura", year: "2023",
    studio: "Nintendo", videoId: "uHGShqcAHlQ",
    description: "The Legend of Zelda: Tears of the Kingdom é um jogo de aventura e exploração em mundo aberto, onde os jogadores controlam Link e exploram terras, céus e cavernas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW4rRPAMpLZlZhBOVohZYQT9E8YGLxn2zKunONYKCyA&s",
    history: "A história começa quando Link e a princesa Zelda exploram uma região subterrânea abaixo do castelo de Hyrule e encontram uma antiga criatura misteriosa. Durante a exploração, eles descobrem Ganondorf, um poderoso inimigo que desperta e provoca uma grande destruição. Link perde parte de seus poderes e Zelda desaparece misteriosamente. Para salvar o reino, Link precisa explorar Hyrule, investigar ilhas no céu, cavernas e regiões subterrâneas, encontrar aliados e descobrir o que aconteceu com Zelda. Durante sua jornada, ele enfrenta diversos monstros e tenta impedir que Ganondorf domine o mundo.",
    creation: "The Legend of Zelda: Tears of the Kingdom foi desenvolvido pela Nintendo e lançado em 2023 para Nintendo Switch. Sua criação começou como uma expansão de Breath of the Wild, mas a equipe teve tantas ideias novas que decidiu transformá-lo em um jogo completo. Foram adicionadas novas habilidades, construções, ilhas flutuantes e áreas subterrâneas, ampliando as possibilidades de exploração e aventura.",
    characters: [["Link", "É o protagonista do jogo, um guerreiro corajoso que precisa proteger o reino de Hyrule."], 
                 ["Princesa Zelda", "É a princesa de Hyrule, que possui uma ligação especial com a história antiga do reino."], 
                 ["Ganondorf", "É o principal vilão, um poderoso inimigo que deseja dominar Hyrule e espalhar a destruição pelo reino."]],
    updates: ["O jogo expandiu as possibilidades criativas do motor gráfico de Breath of the Wild com novas habilidades para o Link."],
    link: "https://www.nintendo.com/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/"
  },
  {
    id: "league-of-legends", name: "League of Legends", genre: "RPG", year: "2009",
    studio: "Riot Games", videoId: "TFzkbos0oeo",
    description: "League of Legends (LoL) é um jogo de estratégia e batalha em equipe, no qual dois times de cinco jogadores competem para destruir a base inimiga usando personagens com habilidades únicas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgLZmtRktz2zdSM1OE9nfqFr00kUhklgaVhhaxvPz_yIuIv4VTgTx0V_L&s=10",
    history: "A história de League of Legends acontece em Runeterra, um mundo de fantasia dividido em diferentes regiões, cada uma com sua própria cultura, conflitos e personagens. Nesse universo, existem guerreiros, magos, criaturas mágicas e seres poderosos. Os campeões possuem histórias próprias, alianças e rivalidades que se conectam em diferentes acontecimentos. O universo apresenta conflitos entre regiões, disputas por poder e batalhas que podem mudar o destino de Runeterra.",
    creation: "League of Legends foi desenvolvido pela Riot Games e lançado em 2009. O jogo foi inspirado em um mapa personalizado de Warcraft III chamado Defense of the Ancients (DotA). Foi criado para oferecer partidas estratégicas e competitivas, conquistando milhões de jogadores ao redor do mundo.",
    characters: [["Ahri", "É uma raposa de nove caudas que possui poderes mágicos e consegue absorver a essência vital de outras criaturas."], 
                 ["Yasuo", "É um espadachim habilidoso de Ionia que luta para limpar seu nome e superar os acontecimentos de seu passado."], 
                 ["Jinx", "É uma criminosa de Zaun conhecida por seu comportamento imprevisível e por utilizar armas explosivas."]],
    updates: ["Recebe patches de balanceamento quinzenais, novos campeões anuais e grandes eventos temáticos.", "O universo se expandiu para séries de TV (Arcane) e outros jogos."],
    link: "https://www.leagueoflegends.com/"
  },
  {
    id: "counter-strike-2", name: "Counter-Strike 2", genre: "Ação", year: "2023",
    studio: "Valve", videoId: "edYCtaNueQY",
    description: "Counter-Strike 2 (CS2) é um jogo de tiro em primeira pessoa, no qual duas equipes, terroristas e contra-terroristas, disputam partidas usando armas e estratégias.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijpiqT-YLd0lE50UpGOD-w5IvCUX1z92gnh9LiWHVnA&s=10",
    history: "Counter-Strike 2 não possui uma história principal como outros jogos. Seu foco está nas partidas entre duas equipes: os terroristas precisam plantar uma bomba ou eliminar os adversários, enquanto os contra-terroristas devem impedir a explosão, desarmar a bomba ou eliminar a equipe inimiga. As partidas exigem trabalho em equipe, estratégia, precisão e comunicação.",
    creation: "CS2 foi desenvolvido pela Valve e lançado em 2023. O jogo é uma evolução do Counter-Strike: Global Offensive (CS:GO), trazendo melhorias nos gráficos, na jogabilidade e nos efeitos visuais. Foi criado para oferecer uma experiência mais moderna e competitiva aos jogadores.",
    characters: [["Contra-Terroristas", "São os agentes responsáveis por impedir os ataques, proteger os locais e desarmar a bomba."], 
                 ["Terroristas", "São os integrantes da equipe responsável por plantar a bomba e cumprir os objetivos da partida."]],
    updates: ["Traz melhorias gráficas massivas, fumaças reativas a granadas e disparos, além de servidores com sub-tick."],
    link: "https://www.counter-strike.net/"
  },
  {
    id: "cyberpunk-2077", name: "Cyberpunk 2077", genre: "RPG", year: "2020",
    studio: "CD Projekt Red", videoId: "liuFhVXAlZw",
    description: "Cyberpunk 2077 é um RPG de ação em mundo aberto que se passa em um futuro tecnológico. Os jogadores controlam um personagem chamado V, que explora a cidade de Night City, enfrenta inimigos e realiza missões.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUmO8JvO-xxcnknZUhGCGgT0ri4SC0DJecfMHpdLauuLsIoYIHD0nzyGe&s=10",
    history: "A história acompanha V, um mercenário que vive em Night City, uma cidade dominada por grandes empresas, criminosos e tecnologias avançadas. Durante uma missão, V acaba envolvido em um acontecimento que coloca um chip experimental em sua cabeça, contendo a consciência de Johnny Silverhand. A partir disso, V precisa encontrar uma maneira de sobreviver enquanto enfrenta perigos, descobre segredos e tenta controlar a influência de Johnny em sua mente.",
    creation: "Cyberpunk 2077 foi desenvolvido pela CD Projekt Red e lançado em 2020. O jogo foi inspirado no universo de RPG de mesa Cyberpunk 2020, criado por Mike Pondsmith. Sua produção envolveu a criação de uma cidade futurista cheia de tecnologias avançadas, implantes cibernéticos e diferentes histórias.",
    characters: [["V", "É o protagonista do jogo, um mercenário que busca reconhecimento e tenta sobreviver em Night City."], 
                 ["Johnny Silverhand", "É um roqueiro rebelde interpretado por Keanu Reeves, cuja consciência fica armazenada no chip implantado na cabeça de V."], 
                 ["Judy Alvarez", "É uma especialista em tecnologia e edição de braindances, que ajuda V durante parte de sua jornada."]],
    updates: ["A atualização 2.0 reformulou completamente os sistemas de combate, polícia e habilidades, revitalizando a experiência."],
    link: "https://www.cyberpunk.net/"
  },
  {
    id: "horizon-zero-dawn", name: "Horizon Zero Dawn", genre: "Aventura", year: "2017",
    studio: "Guerrilla Games", videoId: "8UNkoOt2kvo",
    description: "Horizon Zero Dawn é um jogo de ação e aventura em mundo aberto, onde os jogadores controlam Aloy, uma jovem caçadora que enfrenta máquinas gigantes em um mundo dominado pela natureza.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiyVRnkxWJNgUrJiUjwaGiyVy37TIJ4-FLU2gymJ19A&s=10",
    history: "A história acompanha Aloy, uma jovem que foi criada longe das outras pessoas e busca descobrir suas origens. Durante sua jornada, ela explora um mundo cheio de máquinas perigosas, tribos e ruínas antigas. Aos poucos, descobre que a humanidade foi destruída por uma antiga catástrofe tecnológica e precisa entender o passado para descobrir a verdade sobre sua origem e salvar o futuro da humanidade.",
    creation: "Horizon Zero Dawn foi desenvolvido pela Guerrilla Games e lançado em 2017. O jogo foi criado para apresentar um mundo futurista em que máquinas semelhantes a animais dominam a natureza. Sua produção envolveu a criação de cenários detalhados, criaturas robóticas e uma história cheia de mistérios.",
    characters: [["Aloy", "É a protagonista do jogo, uma caçadora habilidosa e curiosa que busca descobrir os segredos de seu passado."], 
                 ["Rost", "É o homem que criou Aloy desde pequena e ensinou a ela técnicas de sobrevivência, caça e combate."], 
                 ["Sylens", "É um personagem misterioso e muito inteligente que possui conhecimentos sobre as antigas tecnologias e ajuda Aloy em sua jornada."]],
    updates: ["O jogo ganhou a expansão 'The Frozen Wilds' e versões remasterizadas para plataformas modernas."],
    link: "https://www.playstation.com/games/horizon-zero-dawn/"
  },
  {
    id: "god-of-war-ragnarok", name: "God of War Ragnarök", genre: "Aventura", year: "2022",
    studio: "Santa Monica Studio", videoId: "hfJ4Km46A-0",
    description: "God of War Ragnarök é um jogo de ação e aventura que acompanha Kratos e seu filho Atreus em uma jornada pela mitologia nórdica, enfrentando deuses, monstros e grandes desafios.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgku4SxrbkSNKW_HscO1gIXRToGruEiZvOt00G1dbLzw&s=10",
    history: "A história acontece alguns anos após os acontecimentos do jogo anterior. Kratos e Atreus vivem em Midgard enquanto se preparam para o Ragnarök, uma profecia que anuncia o fim do mundo dos deuses nórdicos. Durante a aventura, eles viajam pelos Nove Reinos, enfrentam criaturas perigosas e encontram importantes figuras da mitologia. Atreus também busca descobrir mais sobre sua verdadeira identidade e seu destino, enquanto Kratos tenta protegê-lo e ensiná-lo a tomar suas próprias decisões.",
    creation: "God of War Ragnarök foi desenvolvido pela Santa Monica Studio e lançado em 2022. O jogo foi criado como continuação de God of War (2018), trazendo novos cenários, personagens, combates e histórias inspiradas na mitologia nórdica.",
    characters: [["Kratos", "É o protagonista, um antigo deus da guerra que tenta controlar sua raiva e proteger seu filho Atreus."], 
                 ["Atreus", "É o filho de Kratos, também conhecido como Loki. É curioso, habilidoso com arco e flechas e deseja descobrir seu papel nas profecias."], 
                 ["Freya", "É uma poderosa deusa Vanir que inicialmente busca vingança contra Kratos, mas possui um papel importante na luta contra as ameaças de Asgard."]],
    updates: ["Recebeu o modo gratuito 'Valhalla' com elementos de roguelite e novas expansões de história."],
    link: "https://www.playstation.com/games/god-of-war-ragnarok/"
  },
  {
    id: "hollow-knight", name: "Hollow Knight", genre: "Aventura", year: "2017",
    studio: "Team Cherry", videoId: "UAO2urG23S4",
    description: "Hollow Knight é um jogo de ação e aventura em estilo metroidvania, no qual os jogadores exploram um reino subterrâneo cheio de criaturas, mistérios e desafios.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmuDR_pswTVkF75nsRWAhG6FhC4n1FwdzCS3VfFKgnHC7njjCUmDCi-r5&s=10",
    history: "A história acontece em Hallownest, um antigo reino subterrâneo que foi tomado por uma misteriosa infecção. O jogador controla um pequeno cavaleiro que explora diferentes regiões, enfrenta criaturas perigosas e descobre os segredos daquele lugar. Durante a jornada, ele encontra personagens misteriosos e precisa enfrentar grandes desafios para descobrir a origem da infecção e o destino do reino.",
    creation: "Hollow Knight foi desenvolvido pela Team Cherry, um pequeno estúdio independente australiano, e lançado em 2017. O jogo foi criado com desenhos feitos à mão, cenários detalhados e uma trilha sonora marcante. Sua combinação de exploração, combates e mistérios conquistou jogadores do mundo inteiro.",
    characters: [["O Cavaleiro", "É o protagonista do jogo, uma pequena criatura silenciosa que explora Hallownest usando uma espada chamada Ferrão."], 
                 ["Hornet", "É uma guerreira habilidosa que utiliza uma agulha e linha para lutar. Ela aparece em momentos importantes da aventura e testa as habilidades do Cavaleiro."], 
                 ["Rei Pálido", "Foi o antigo governante de Hallownest e responsável por grande parte da história do reino, incluindo os acontecimentos relacionados à infecção."]],
    updates: ["O jogo recebeu diversos pacotes de conteúdo gratuitos adicionais expandindo chefes e missões.", "Os fãs aguardam ansiosamente pela sequência Hollow Knight: Silksong."],
    link: "https://hollowknight.com/"
  },
  {
    id: "red-dead-redemption-2", name: "Red Dead Redemption 2", genre: "Aventura", year: "2018",
    studio: "Rockstar Games", videoId: "gmA6MrX81z4",
    description: "Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto que se passa no Velho Oeste. Os jogadores controlam Arthur Morgan, um fora da lei que vive entre assaltos, perseguições e conflitos.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEMtBJYOKeuFxpFxD846h9sm-Imbb8ByWulSO3eLwXUZFB_K088aNjHjk&s=10",
    history: "A história acontece em 1899, durante o declínio do Velho Oeste americano. O jogador acompanha Arthur Morgan e a gangue de Van der Linde, que precisa fugir após um assalto dar errado. Enquanto tentam escapar das autoridades, o grupo enfrenta conflitos internos, traições e dificuldades para sobreviver. Ao longo da jornada, Arthur começa a questionar suas escolhas e seu passado, precisando decidir entre continuar vivendo como criminoso ou buscar uma vida diferente.",
    creation: "Red Dead Redemption 2 foi desenvolvido pela Rockstar Games e lançado em 2018. O jogo levou vários anos para ser produzido e contou com uma equipe de centenas de profissionais. Foi criado para oferecer um mundo aberto realista, com paisagens detalhadas, animais, cidades e personagens com histórias próprias.",
    characters: [["Arthur Morgan", "É o protagonista do jogo, um membro importante da gangue de Van der Linde. É habilidoso com armas, cavalos e sobrevivência, mas começa a questionar sua vida de criminoso."], 
                 ["Dutch van der Linde", "É o líder da gangue e acredita que todos podem conquistar a liberdade. Porém, suas decisões e sua obsessão por dinheiro começam a colocar o grupo em perigo."], 
                 ["John Marston", "É um dos integrantes da gangue e possui uma relação complicada com Arthur. Seu maior desejo é abandonar o mundo do crime e construir uma família."]],
    updates: ["O jogo conta com a expansão online Red Dead Online e melhorias gráficas contínuas para diversas plataformas."],
    link: "https://www.rockstargames.com/reddeadredemption2"
  },
  {
    id: "resident-evil-4", name: "Resident Evil 4 (Remake)", genre: "Ação", year: "2023",
    studio: "Capcom", videoId: "E69tKrfEQag",
    description: "Resident Evil 4 é um jogo de ação e terror de sobrevivência em que os jogadores controlam Leon S. Kennedy, um agente que precisa enfrentar criaturas infectadas e sobreviver a situações perigosas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsYqUzWnB6miNnnEUKLPZisWVZsJfPDFBtBIEHCW6HUiEZjG50Cl_-TZ1&s=10",
    history: "A história acompanha Leon S. Kennedy, um agente do governo enviado para uma região rural da Espanha com a missão de resgatar Ashley Graham, filha do presidente dos Estados Unidos. Ao chegar ao local, Leon descobre que os moradores estão infectados por um parasita chamado Las Plagas, que controla suas ações e os torna extremamente perigosos. Durante a missão, ele enfrenta criaturas assustadoras, descobre os planos de uma organização misteriosa e precisa proteger Ashley enquanto tenta escapar daquele lugar.",
    creation: "DResident Evil 4 foi desenvolvido pela Capcom e lançado originalmente em 2005. O jogo foi criado para renovar a série, trazendo uma câmera sobre o ombro, novos combates e mais ação. Em 2023, recebeu um remake com gráficos melhorados, novas mecânicas e mudanças na história.",
    characters: [["Leon S. Kennedy", "É o protagonista do jogo, um agente habilidoso que utiliza armas, técnicas de combate e inteligência para enfrentar os inimigos."], 
                 ["Ashley Graham", "É a filha do presidente dos Estados Unidos e o principal objetivo da missão de Leon. Ela precisa de proteção para conseguir escapar dos infectados."], 
                 ["Ada Wong", "É uma espiã misteriosa que possui seus próprios objetivos. Ela aparece durante a aventura e mantém uma relação complicada com Leon."]],
    updates: ["Inclui o modo extra gratuito 'The Mercenaries' e a expansão de história 'Separate Ways'.", "Compatível com tecnologias modernas de desempenho."],
    link: "https://www.residentevil.com/re4/pt-br/"
  },
  {
    id: "spiderman-2", name: "Marvel's Spider-Man 2", genre: "Aventura", year: "2023",
    studio: "Insomniac Games", videoId: "qIQ3xNqkVC4",
    description: "Marvel's Spider-Man 2 é um jogo de ação e aventura em mundo aberto, no qual os jogadores controlam Peter Parker e Miles Morales para proteger Nova York de grandes ameaças.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UAYAdRSnJmOS6uB6YtH7ITEasWHOfzSrlAJtD93m570WwqvmBl2QVfGp&s=10",
    history: "A história acompanha Peter Parker e Miles Morales enquanto tentam equilibrar suas vidas pessoais com a responsabilidade de proteger Nova York. A cidade passa a enfrentar novas ameaças com a chegada de Kraven, um caçador que procura adversários poderosos. Ao mesmo tempo, Peter entra em contato com o simbionte, uma criatura alienígena que aumenta suas habilidades, mas também começa a influenciar seu comportamento. Os dois heróis precisam enfrentar grandes perigos e impedir que a cidade seja dominada por seus inimigos.",
    creation: "Marvel's Spider-Man 2 foi desenvolvido pela Insomniac Games e lançado em 2023 para PlayStation 5. O jogo foi criado como continuação das aventuras anteriores, trazendo novos poderes, inimigos, movimentos e melhorias nos gráficos. Também permite alternar entre Peter Parker e Miles Morales durante a exploração.",
    characters: [["Peter Parker", "É o Homem-Aranha original, um herói experiente que utiliza seus poderes e inteligência para proteger Nova York. Durante a história, recebe o simbionte, que aumenta sua força e agressividade."], 
                 ["Miles Morales", "É um jovem Homem-Aranha que possui poderes elétricos e habilidades de invisibilidade. Ele luta ao lado de Peter para proteger a cidade e encontrar seu próprio caminho como herói."], 
                 ["Venom", "É um poderoso inimigo criado pela união entre o simbionte e um hospedeiro. Possui força extraordinária e deseja transformar o mundo usando o poder do simbionte."]],
    updates: ["Recebeu atualizações de qualidade de vida, incluindo Novo Jogo+ e trajes adicionais."],
    link: "https://www.playstation.com/games/marvels-spider-man-2/"
  },
  {
    id: "Baldurs-Gate-3", name: "Baldur's Gate 3", genre: "RPG", year: "2023",
    studio: "Larian Studios", videoId: "UgTFtD2sHdE",
    description: "Baldur's Gate 3 é um RPG de fantasia em que os jogadores exploram um mundo cheio de magia, criaturas, batalhas e mistérios. O jogo permite criar personagens, escolher caminhos e tomar decisões que influenciam a história.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWMNSiUTbd9RK5aWzLsrVEoyOqOdyrIhZSGHCTAUJIBfEytUkRxgyljnt&s=10",
    history: "A história acompanha um personagem que é capturado por criaturas chamadas devoradores de mentes, que implantam um parasita em seu cérebro. Esse parasita ameaça transformá-lo em uma dessas criaturas. Durante a jornada, o protagonista encontra outros sobreviventes que também foram infectados. Juntos, eles procuram uma maneira de remover o parasita enquanto enfrentam inimigos poderosos, descobrem segredos e precisam impedir uma grande ameaça que pode dominar o mundo.",
    creation: "Baldur's Gate 3 foi desenvolvido pela Larian Studios e lançado em 2023. O jogo foi inspirado no universo de Dungeons & Dragons, um famoso RPG de mesa. Sua criação levou vários anos e trouxe um sistema de escolhas, batalhas estratégicas e histórias que mudam de acordo com as decisões dos jogadores.",
    characters: [["Astarion", "É um elfo vampiro que possui habilidades de combate e furtividade. Ele tenta se libertar do controle de seu antigo mestre e conquistar sua própria liberdade."], 
                 ["Shadowheart", "É uma clériga misteriosa que perdeu parte de suas memórias. Durante a aventura, busca descobrir a verdade sobre seu passado e sua ligação com a deusa Shar."], 
                 ["Gale", "É um poderoso mago que carrega uma perigosa energia mágica dentro de si. Ele procura uma maneira de controlar seu poder e evitar uma grande catástrofe."]],
    updates: ["Recebeu inúmeros grandes patches adicionando finais expandidos, suporte oficial a mods e correções profundas."],
    link: "https://baldursgate3.game/"
  },
  {
    id: "grand-theft-auto-san-andreas", name: "Grand Theft Auto: San Andreas", genre: "Ação", year: "2004",
    studio: "Rockstar Games", videoId: "H65PMhBGaLg",
    description: "Grand Theft Auto: San Andreas é um jogo de ação e mundo aberto em que os jogadores controlam Carl Johnson, conhecido como CJ. O jogo permite explorar cidades, realizar missões, dirigir veículos e participar de diversas atividades.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64R7wiyjY_ziS78u5DJiPfk2Pe-C-4WxacJenibWtCg&s=10",
    history: "A história acompanha Carl Johnson (CJ), que retorna à cidade de Los Santos após descobrir a morte de sua mãe. Ao voltar, ele reencontra seus antigos amigos e familiares e percebe que seu bairro está dominado por gangues, violência e corrupção. CJ decide ajudar sua família e recuperar o respeito de sua gangue, enfrentando inimigos, policiais corruptos e diversos desafios. Durante sua jornada, ele passa por três grandes regiões: Los Santos, San Fierro e Las Venturas.",
    creation: "GTA: San Andreas foi desenvolvido pela Rockstar North e lançado em 2004 pela Rockstar Games. O jogo foi criado utilizando melhorias em relação aos títulos anteriores, trazendo um mapa muito maior, novas atividades, personalização de personagens e uma história inspirada na cultura urbana dos anos 1990.",
    characters: [["Carl Johnson (CJ)", "É o protagonista do jogo, que retorna para Los Santos após passar alguns anos longe. Ele tenta reconstruir sua família e recuperar o controle de sua antiga gangue."], 
                 ["Big Smoke", "É um antigo amigo de CJ e integrante da Grove Street Families. Apesar de sua amizade com o grupo, acaba se envolvendo em traições e alianças perigosas."], 
                 ["Officer Tenpenny", "É um policial corrupto do departamento de Los Santos que usa seu cargo para ameaçar e manipular CJ. Ele está envolvido com gangues, tráfico de drogas e diversos crimes, sendo um dos principais inimigos do protagonista."]],
    updates: ["Remasterizado recentemente dentro da trilogia 'The Definitive Edition' para plataformas modernas."],
    link: "https://www.rockstargames.com/"
  }
];

const gameplayInfo = {
  minecraft: "Explore um mundo gerado por blocos, colete materiais e fabrique ferramentas para construir abrigo e sobreviver. No modo Sobrevivência, é preciso cuidar da saúde e enfrentar criaturas; no Criativo, os recursos ficam disponíveis para construir com liberdade. A exploração pode levar a cavernas, ao Nether e ao End.",
  fortnite: "No Battle Royale, jogadores saltam em uma ilha, procuram equipamentos e tentam permanecer na área segura enquanto a tempestade avança. É possível jogar individualmente ou em equipe. Em algumas experiências, construir estruturas faz parte da estratégia; outras priorizam combate e movimentação.",
  "elden-ring": "Crie um personagem e escolha atributos, armas e habilidades para enfrentar inimigos em combates que exigem atenção ao tempo dos ataques e esquivas. As Terras Intermédias permitem explorar regiões em diferentes ordens, encontrar masmorras e chefes e desenvolver estilos de luta corpo a corpo, à distância ou com magia.",
  "free-fire": "As partidas colocam participantes em uma ilha para buscar armas e equipamentos enquanto a zona segura diminui. A escolha do local de pouso, o gerenciamento de recursos e o posicionamento ajudam a sobreviver. Personagens com habilidades diferentes permitem adaptar a estratégia em partidas solo ou em equipe.",
  "gta-v": "Alterne entre Michael, Franklin e Trevor para explorar Los Santos e Blaine County, cumprir missões e participar de atividades pela cidade. As missões combinam direção, combate e planejamento, incluindo assaltos que podem exigir preparação e escolhas de abordagem. O modo GTA Online oferece atividades multijogador separadas da campanha.",
  "the-witcher-3": "Controle Geralt em uma aventura de RPG com exploração, missões e combates contra humanos e monstros. Investigue pistas, prepare equipamentos e use espadas, poções e sinais mágicos. Decisões tomadas durante as missões podem mudar relações entre personagens e consequências da história.",
  roblox: "Roblox reúne experiências criadas pela comunidade, então as regras e os objetivos mudam de um jogo para outro. É possível explorar mundos, competir, resolver desafios ou criar experiências usando o Roblox Studio. Avatares e itens podem ser personalizados para diferentes atividades.",
  valorant: "Duas equipes alternam entre ataque e defesa em rodadas táticas. No ataque, o objetivo principal é instalar a Spike e protegê-la até a detonação; na defesa, é impedir a instalação ou desarmá-la. Créditos entre rodadas servem para comprar armas e equipamentos, enquanto cada agente oferece habilidades próprias.",
  "zelda-totk": "Explore Hyrule, as ilhas celestes e regiões subterrâneas, resolvendo santuários e enfrentando inimigos. As habilidades de Link permitem combinar objetos, mover estruturas e criar veículos e ferramentas. Experimentar diferentes combinações é parte central da exploração e da resolução de desafios.",
  "league-of-legends": "Em partidas clássicas, duas equipes de cinco jogadores escolhem campeões com funções e habilidades distintas. As equipes avançam pelas rotas, derrotam tropas e objetivos do mapa e tentam destruir o Nexus adversário. Comunicação, trabalho em equipe e decisões sobre quando lutar ou avançar são importantes.",
  "counter-strike-2": "Terroristas e Contra-Terroristas disputam rodadas com objetivos opostos, como plantar ou desarmar a bomba. Comprar armas e equipamentos com o dinheiro recebido entre rodadas faz parte da estratégia. Mira precisa, controle de posições e coordenação da equipe ajudam a vencer confrontos.",
  "cyberpunk-2077": "Explore Night City como V, escolhendo atributos, armas e melhorias cibernéticas para montar seu estilo de jogo. Missões podem ser abordadas com combate direto, furtividade, armas de longo alcance ou invasão de sistemas. Diálogos e decisões também influenciam relações e desdobramentos da narrativa.",
  "horizon-zero-dawn": "Aloy percorre um mundo aberto, investiga ruínas antigas e enfrenta máquinas usando arco, armadilhas e equipamentos variados. O Foco ajuda a identificar pontos fracos e rastros. Preparar munição adequada para cada máquina e aproveitar o ambiente torna os confrontos mais estratégicos.",
  "god-of-war-ragnarok": "Acompanhe Kratos e Atreus pelos reinos nórdicos, combinando combates com exploração e resolução de enigmas. Kratos usa armas como o machado Leviatã e as Lâminas do Caos, que podem receber melhorias. Explorar caminhos opcionais revela recursos, desafios e histórias adicionais.",
  "hollow-knight": "Explore Hallownest em um jogo de ação e aventura com áreas interligadas. Novas habilidades abrem caminhos antes inacessíveis, enquanto confrontos com criaturas e chefes exigem aprender padrões de ataque. Amuletos permitem ajustar as habilidades do Cavaleiro ao estilo de cada jogador.",
  "red-dead-redemption-2": "Acompanhe Arthur Morgan em uma campanha de mundo aberto com missões, exploração e atividades como caça e pesca. A relação com a gangue, os encontros pelo caminho e as escolhas do jogador ajudam a moldar a jornada. Cuidados com equipamento, cavalo e recursos fazem parte da vida no acampamento.",
  "resident-evil-4": "Leon precisa atravessar áreas perigosas enquanto protege Ashley e administra munição, cura e espaço limitado no inventário. Combinar tiros precisos, esquivas e ataques corpo a corpo ajuda a lidar com grupos de inimigos. Explorar cenários também revela recursos, tesouros e melhorias para as armas.",
  "spiderman-2": "Alterne entre Peter Parker e Miles Morales para se deslocar pela cidade com teias e enfrentar inimigos em combates ágeis. Cada herói tem habilidades próprias, e a combinação de golpes, esquivas e poderes permite criar sequências de ataque. Missões principais e atividades opcionais expandem a aventura por Nova York.",
  "Baldurs-Gate-3": "Monte um grupo de aventureiros e explore os Reinos Esquecidos em uma campanha de RPG baseada em escolhas. Combates por turnos valorizam posicionamento, habilidades e interação com o cenário. Diálogos, testes de dados e decisões podem abrir caminhos diferentes para as missões e para a história.",
  "grand-theft-auto-san-andreas": "Acompanhe Carl Johnson em uma aventura de mundo aberto por cidades e áreas rurais inspiradas na Califórnia. Missões envolvem direção, perseguições, combate e atividades variadas; também é possível explorar livremente e personalizar veículos e aparência. O progresso da história leva CJ a conhecer novos aliados e conflitos."
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

function card(game) {
  const genres = Array.isArray(game.genre)
    ? game.genre
    : [game.genre];

  return `
    <div class="col-sm-6 col-lg-3">
      <article class="game-card">
        <div class="game-cover">
          <img
            src="${escapeHtml(game.image)}"
            alt="Capa de ${escapeHtml(game.name)}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/600x800/211333/FAF5FF?text=${encodeURIComponent(game.name)}'"
          >
        </div>
        <div class="game-body">
          <h3>${escapeHtml(game.name)}</h3>

          ${genres.map(genre =>
            `<span class="tag">${escapeHtml(genre)}</span>`
          ).join(" ")}

          <span class="tag">${escapeHtml(game.year)}</span>

          <p class="mt-3">${escapeHtml(game.description)}</p>

          <a class="btn btn-neon w-100"
             href="detalhes.html?id=${encodeURIComponent(game.id)}">
            Ver informações
          </a>
        </div>
      </article>
    </div>`;
}

function renderGames(list, target) {
  const element = document.querySelector(target);
  if (!element) return;
  element.innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="col-12"><div class="info-card text-center"><h3>Nenhum jogo encontrado</h3><p class="mb-0">Tente outro nome ou gênero.</p></div></div>`;
}

function initHome() {
  const track = document.querySelector("#featuredGames");
  const controls = document.querySelector("#featuredControls");
  const previous = document.querySelector("#featuredPrev");
  const next = document.querySelector("#featuredNext");
  const pageLabel = document.querySelector("#featuredPage");
  if (track) renderGames(games.slice(0, 8), "#featuredGames");

  function updateControls() {
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pageCount = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
    const page = Math.min(pageCount, Math.floor(track.scrollLeft / track.clientWidth) + 1);
    if (controls) controls.hidden = maxScroll <= 1;
    if (previous) previous.disabled = track.scrollLeft <= 1;
    if (next) next.disabled = track.scrollLeft >= maxScroll - 1;
    if (pageLabel) pageLabel.textContent = `${page} / ${pageCount}`;
  }
  function scrollPage(direction) {
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pageWidth = track.clientWidth;
    const target = Math.max(0, Math.min(maxScroll, track.scrollLeft + direction * pageWidth));
    track.scrollTo({ left: target, behavior: "smooth" });
  }
  previous?.addEventListener("click", () => scrollPage(-1));
  next?.addEventListener("click", () => scrollPage(1));
  track?.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  requestAnimationFrame(updateControls);

  const form = document.querySelector("#homeSearchForm");
  const input = document.querySelector("#searchInput");
  if (form && input) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();
      window.location.href = query ? `jogos.html?busca=${encodeURIComponent(query)}` : "jogos.html";
    });
  }
}

function initCatalog() {
  const input = document.querySelector("#catalogSearch");
  const filter = document.querySelector("#genreFilter");
  const count = document.querySelector("#resultsCount");
  if (!input || !filter) return;
  const params = new URLSearchParams(window.location.search);
  input.value = params.get("busca") || "";

  function update() {
    const query = input.value.trim().toLocaleLowerCase("pt-BR");
    const genre = filter.value;
    const filtered = games.filter((game) => {
      const genres = Array.isArray(game.genre) ? game.genre : [game.genre];
      const searchable = `${game.name} ${genres.join(" ")} ${game.studio}`.toLocaleLowerCase("pt-BR");
      return searchable.includes(query) && (genre === "todos" || genres.includes(genre));
    });
    renderGames(filtered, "#gamesGrid");
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "jogo encontrado" : "jogos encontrados"}`;
  }
  input.addEventListener("input", update);
  filter.addEventListener("change", update);
  update();
}

function initDetail() {
  const element = document.querySelector("#gameDetail");
  if (!element) return;
  const id = new URLSearchParams(window.location.search).get("id") || "minecraft";
  const game = games.find((item) => item.id === id);

  if (!game) {
    element.innerHTML = `<section class="info-card"><h1>Jogo não encontrado</h1><p>Esse jogo não está no catálogo.</p><a class="btn btn-neon" href="jogos.html">Voltar aos jogos</a></section>`;
    return;
  }

  const characters = game.characters.map(([name, description]) => `
    <div class="col-md-4"><article class="character-card"><h3 class="h5">${escapeHtml(name)}</h3><p class="mb-0">${escapeHtml(description)}</p></article></div>
  `).join("");
 // Renderiza cada item do array 'updates' como um card individual
  const updates = Array.isArray(game.updates)
    ? game.updates.map(up => {
        if (typeof up === 'string') {
          return `<div class="update mb-3"><p class="mb-0">${escapeHtml(up)}</p></div>`;
        }
        return `
          <div class="update mb-3">
            ${up.name ? `<h3 class="update-name">${escapeHtml(up.name)}</h3>` : ''}
            ${up.date ? `<p class="update-date">${escapeHtml(up.date)}</p>` : ''}
            ${up.intro ? `<p class="mb-2">${escapeHtml(up.intro)}</p>` : ''}
            ${up.title ? `<p class="fw-bold mb-1">${escapeHtml(up.title)}</p>` : ''}
            ${up.items && up.items.length ? `
              <ul class="mb-2 ps-3">
                ${up.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            ` : ''}
            ${up.sections ? up.sections.map(section => `
              <p class="fw-bold mb-1">${escapeHtml(section.title)}</p>
              <ul class="mb-2 ps-3">
                ${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            `).join("") : ''}
            ${up.note ? `<p class="text-muted small mb-0">${escapeHtml(up.note)}</p>` : ''}
          </div>
        `;
      }).join("")
    : '';

  // YouTube precisa do formato /embed/ID, não do link comum /watch?v=ID.
  const videoUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(game.videoId)}?rel=0`;

  element.innerHTML = `
    <section class="detail-hero" aria-labelledby="gameTitle">
      <div class="detail-cover">
        <img src="${escapeHtml(game.image)}" alt="Capa de ${escapeHtml(game.name)}"
             onerror="this.onerror=null;this.src='https://placehold.co/600x800/211333/FAF5FF?text=${encodeURIComponent(game.name)}'">
      </div>
      <div>
        ${Array.isArray(game.genre)
          ? game.genre.map(genre => `<span class="tag">${escapeHtml(genre)}</span>`).join(" ")
          : `<span class="tag">${escapeHtml(game.genre)}</span>`
        }
        <span class="tag">${escapeHtml(game.year)}</span>
        <h1 id="gameTitle" class="display-4 fw-bold mt-3">${escapeHtml(game.name)}</h1>
        <p class="detail-summary">${escapeHtml(game.description)}</p>
        <p class="muted"><strong>Desenvolvedora/publicadora:</strong> ${escapeHtml(game.studio)}</p>
        <a class="btn btn-neon btn-lg" href="${escapeHtml(game.link)}" target="_blank" rel="noopener noreferrer">🎮 Site oficial</a>
      </div>
    </section>

    <nav class="anchor-nav" aria-label="Navegação nesta página">
      <a href="#sobre-jogo">Sobre</a><a href="#jogabilidade">Jogabilidade</a><a href="#criacao">Criação</a><a href="#historia">História</a><a href="#trailer">Trailer</a><a href="#personagens">Personagens</a><a href="#atualizacoes">Atualizações</a>
    </nav>

    <section class="detail-section" id="sobre-jogo"><h2>Sobre o jogo</h2><p>${escapeHtml(game.description)}</p></section>
    <section class="detail-section" id="jogabilidade"><h2>Jogabilidade e objetivos</h2><p>${escapeHtml(gameplayInfo[game.id] || "Explore o universo do jogo, conheça seus personagens e complete os desafios apresentados ao longo da aventura.")}</p></section>
    <section class="detail-section" id="criacao"><h2>Como foi criado</h2><p>${escapeHtml(game.creation)}</p></section>
    <section class="detail-section" id="historia"><h2>História do jogo</h2><p>${escapeHtml(game.history)}</p></section>
    <section class="detail-section" id="trailer"><h2>Trailer do jogo</h2><p>Assista ao vídeo associado a ${escapeHtml(game.name)}.</p><div class="video-box"><iframe src="${videoUrl}" title="Trailer de ${escapeHtml(game.name)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></section>
    <section class="detail-section" id="personagens"><h2>Personagens</h2><div class="row g-3">${characters}</div></section>
    <section class="detail-section" id="atualizacoes"><h2>Atualizações e novidades</h2>${updates}</section>
    <p class="text-end mt-4"><a class="text-link" href="#top">Voltar ao início ↑</a></p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initHome();
  initCatalog();
  initDetail();
  initQuiz();
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}); 

const minecraftQuizQuestions = {
  facil: [
    { question: "Qual é uma das atividades centrais de Minecraft?", options: ["Explorar, construir e sobreviver", "Pilotar carros de corrida", "Resolver casos policiais", "Administrar uma fazenda realista"], answer: 0, explanation: "Minecraft combina exploração, construção e sobrevivência em um mundo de blocos." },
    { question: "Qual personagem é um dos avatares padrão mais conhecidos?", options: ["Steve", "Kratos", "Geralt", "Link"], answer: 0, explanation: "Steve é um dos personagens jogáveis padrão de Minecraft." },
    { question: "O que o Creeper faz ao se aproximar do jogador?", options: ["Explode", "Constrói uma casa", "Abre um portal", "Entrega ferramentas"], answer: 0, explanation: "O Creeper se aproxima silenciosamente e explode, podendo causar danos." },
    { question: "Em qual dimensão fica o Dragão do End?", options: ["No End", "No Nether", "Na superfície da Lua", "No mundo real"], answer: 0, explanation: "O Dragão do End fica na dimensão End." },
    { question: "Em que tipo de mundo Minecraft se passa?", options: ["Um mundo aberto feito de blocos", "Uma pista de corrida", "Uma cidade sem exploração", "Um tabuleiro fechado"], answer: 0, explanation: "O jogo apresenta um mundo aberto de blocos para explorar e transformar." }
  ],
  medio: [
    { question: "Qual é o nome de Markus Persson, criador de Minecraft, pelo qual ele é conhecido?", options: ["Notch", "Jeb", "Dinnerbone", "Herobrine"], answer: 0, explanation: "Markus Persson é conhecido como Notch." },
    { question: "Em que ano Minecraft foi lançado oficialmente pela Mojang Studios?", options: ["2011", "2001", "2014", "2020"], answer: 0, explanation: "O lançamento oficial ocorreu em 2011." },
    { question: "Qual dimensão pode ser explorada além do mundo principal e do End?", options: ["Nether", "Aether", "Hollow Earth", "The Voidlands"], answer: 0, explanation: "Nether é uma das dimensões de Minecraft." },
    { question: "Em que ano Alex foi adicionada ao jogo, segundo o conteúdo do site?", options: ["2014", "2009", "2011", "2018"], answer: 0, explanation: "Alex foi adicionada em 2014." },
    { question: "Qual afirmação descreve a narrativa de Steve no conteúdo do site?", options: ["Não há uma história fixa; cada jogador cria sua aventura", "Steve segue sempre o mesmo roteiro", "Steve é um personagem de uma campanha policial", "A história termina antes de começar"], answer: 0, explanation: "A aventura de Steve não tem narrativa fixa; cada jogador cria a sua." }
  ],
  dificil: [
    { question: "Como o Creeper teria surgido durante o desenvolvimento do jogo?", options: ["De um erro no modelo de um porco", "De um erro no modelo de um cavalo", "De uma armadura descartada", "De uma planta que ganhou vida"], answer: 0, explanation: "O texto do site conta que o Creeper surgiu de um erro no modelo de um porco." },
    { question: "Minecraft começou como um projeto independente em 2009 e teve lançamento oficial em 2011. Qual foi o intervalo entre esses anos?", options: ["2 anos", "1 ano", "4 anos", "10 anos"], answer: 0, explanation: "De 2009 a 2011 são dois anos." },
    { question: "Qual combinação corresponde ao personagem Alex descrito no site?", options: ["Cabelos ruivos e olhos verdes", "Cabelos azuis e olhos amarelos", "Cabelos pretos e olhos vermelhos", "Cabelos loiros e olhos roxos"], answer: 0, explanation: "Alex é descrita com cabelos ruivos e olhos verdes." },
    { question: "No modo Sobrevivência, qual desafio é citado no conteúdo de jogabilidade?", options: ["Cuidar da saúde e enfrentar criaturas", "Gerenciar uma equipe de corrida", "Completar contratos de espionagem", "Defender uma base militar moderna"], answer: 0, explanation: "No modo Sobrevivência, é preciso cuidar da saúde e enfrentar criaturas." },
    { question: "Qual alternativa descreve melhor a relação entre criação e objetivo em Minecraft?", options: ["O jogador pode criar sua própria aventura em um mundo aberto", "Todos os jogadores seguem uma única campanha linear", "O objetivo é vencer uma corrida contra o tempo", "Só é possível jogar em arenas fechadas"], answer: 0, explanation: "O mundo aberto e a liberdade de criação permitem que cada jogador construa sua própria experiência." }
  ]
};

function shuffleQuizItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[other]] = [shuffled[other], shuffled[index]];
  }
  return shuffled;
}

function initQuiz() {
  const form = document.querySelector("#quizSetupForm");
  if (!form) return;
  const setup = document.querySelector("#quizSetup");
  const play = document.querySelector("#quizPlay");
  const result = document.querySelector("#quizResult");
  const levelSelect = document.querySelector("#quizLevel");
  const questionLabel = document.querySelector("#quizQuestionNumber");
  const progress = document.querySelector("#quizProgress");
  const questionText = document.querySelector("#quizQuestion");
  const answers = document.querySelector("#quizAnswers");
  const feedback = document.querySelector("#quizFeedback");
  const continueButton = document.querySelector("#quizContinue");
  const resultScore = document.querySelector("#quizScore");
  const resultMessage = document.querySelector("#quizMessage");
  const resultReview = document.querySelector("#quizReview");
  const restartButton = document.querySelector("#quizRestart");
  const changeLevelButton = document.querySelector("#quizChangeLevel");
  const levelLabel = form.querySelector('label[for="quizLevel"]');
  const levelCards = document.createElement("div");
  levelCards.className = "quiz-level-grid";
  levelCards.setAttribute("role", "group");
  levelCards.setAttribute("aria-label", "Escolha o nível de dificuldade");
  const levelDescriptions = {
    facil: "Perguntas para aquecer e começar a jornada.",
    medio: "Detalhes do jogo e do seu desenvolvimento.",
    dificil: "Curiosidades e informações mais específicas."
  };
  Array.from(levelSelect.options).forEach((option, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "quiz-level-card";
    card.setAttribute("aria-pressed", option.value === levelSelect.value ? "true" : "false");
    const number = document.createElement("span");
    number.className = "quiz-level-number";
    number.textContent = "0" + (index + 1);
    const title = document.createElement("strong");
    title.textContent = option.textContent;
    const description = document.createElement("small");
    description.textContent = levelDescriptions[option.value];
    const count = document.createElement("span");
    count.className = "quiz-level-count";
    count.textContent = "5 perguntas";
    card.append(number, title, description, count);
    card.addEventListener("click", () => {
      levelSelect.value = option.value;
      levelCards.querySelectorAll(".quiz-level-card").forEach((levelCard) => {
        levelCard.setAttribute("aria-pressed", levelCard === card ? "true" : "false");
      });
    });
    levelCards.append(card);
  });
  levelSelect.hidden = true;
  if (levelLabel) levelLabel.classList.add("visually-hidden");
  form.insertBefore(levelCards, form.querySelector('button[type="submit"]'));
  let level = "facil";
  let questions = [];
  let questionIndex = 0;
  let score = 0;
  let answered = false;
  let responses = [];

  function showQuestion() {
    const current = questions[questionIndex];
    answered = false;
    questionLabel.textContent = "Pergunta " + (questionIndex + 1) + " de " + questions.length;
    progress.style.width = (((questionIndex + 1) / questions.length) * 100) + "%";
    progress.setAttribute("aria-valuenow", String(questionIndex + 1));
    progress.parentElement.setAttribute("aria-valuemax", String(questions.length));
    questionText.textContent = current.question;
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
    answers.replaceChildren();
    const options = shuffleQuizItems(current.options.map((label, index) => ({ label, correct: index === current.answer })));
    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-answer";
      button.textContent = option.label;
      button.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        if (option.correct) score++;
        responses.push({ question: current.question, chosen: option.label, correct: current.options[current.answer], isCorrect: option.correct, explanation: current.explanation });
        answers.querySelectorAll("button").forEach((answerButton) => { answerButton.disabled = true; });
        button.classList.add(option.correct ? "is-correct" : "is-wrong");
        if (!option.correct) {
          answers.querySelectorAll("button").forEach((answerButton) => {
            if (answerButton.textContent === current.options[current.answer]) answerButton.classList.add("is-correct");
          });
        }
        feedback.textContent = (option.correct ? "Resposta correta! " : "Resposta incorreta. ") + current.explanation;
        feedback.classList.add(option.correct ? "is-correct" : "is-wrong");
        continueButton.hidden = false;
        continueButton.focus();
      });
      answers.append(button);
    });
    continueButton.hidden = true;
  }

  function startQuiz() {
    level = levelSelect.value;
    questions = shuffleQuizItems(minecraftQuizQuestions[level]);
    questionIndex = 0;
    score = 0;
    responses = [];
    setup.hidden = true;
    result.hidden = true;
    play.hidden = false;
    showQuestion();
  }

  function finishQuiz() {
    play.hidden = true;
    result.hidden = false;
    resultScore.textContent = score + " de " + questions.length;
    const percentage = Math.round((score / questions.length) * 100);
    resultMessage.textContent = percentage === 100
      ? "Perfeito! Você acertou todas as perguntas."
      : percentage >= 60
        ? "Bom resultado! Revise os itens abaixo e tente novamente."
        : "Continue explorando Minecraft no site e tente mais uma vez.";
    resultReview.replaceChildren();
    responses.forEach((response) => {
      const item = document.createElement("li");
      item.className = response.isCorrect ? "review-correct" : "review-wrong";
      const question = document.createElement("strong");
      question.textContent = response.question;
      const answer = document.createElement("span");
      answer.textContent = response.isCorrect ? "Correta" : "Sua resposta: " + response.chosen + " · Correta: " + response.correct;
      const explanation = document.createElement("small");
      explanation.textContent = response.explanation;
      item.append(question, answer, explanation);
      resultReview.append(item);
    });
    restartButton.focus();
  }

  form.addEventListener("submit", (event) => { event.preventDefault(); startQuiz(); });
  continueButton.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < questions.length) showQuestion();
    else finishQuiz();
  });
  restartButton.addEventListener("click", startQuiz);
  changeLevelButton.addEventListener("click", () => {
    result.hidden = true;
    setup.hidden = false;
    levelCards.querySelector('[aria-pressed="true"]')?.focus();
  });
}

