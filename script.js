document.addEventListener("DOMContentLoaded", () => {
    const estoqueDiv = document.getElementById("estoque");
    const downloadBtn = document.createElement("button");
    downloadBtn.id = "download-btn";
    downloadBtn.textContent = "Baixar Arquivo";
    document.body.insertBefore(downloadBtn, estoqueDiv);

    // Criar um container para o input de busca
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

// Criar o input de busca
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.id = "search-input";
searchInput.placeholder = "Buscar por nome...";

// Criar um ícone de busca
const searchIcon = document.createElement("i");
searchIcon.classList.add("fas", "fa-search"); // Usa FontAwesome, se disponível

// Adicionar os elementos ao container
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon);

// Inserir na página antes da tabela
document.body.insertBefore(searchContainer, estoqueDiv);


    const categorias = [
        { id: 328, nome: "Contagem", itens: [
            { codigo: 126078, nome: "BOLO BB DE CHOCOLATE - PRODUCAO", unidade: "KG" },
            { codigo: 125910, nome: "BOLO CACAROLA COM GOIABADA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126085, nome: "BOLO CACAROLA P - PRODUCAO", unidade: "KG" },
            { codigo: 125926, nome: "BOLO CACAROLA - PRODUCAO", unidade: "KG" },
            { codigo: 126197, nome: "BOLO DE CENOURA C/CHOC P - PRODUCAO", unidade: "KG" },
            { codigo: 125966, nome: "BOLO DE CENOURA C/CHOC - PRODUCAO", unidade: "KG" },
            { codigo: 126198, nome: "BOLO DE CENOURA P - PRODUCAO", unidade: "KG" },
            { codigo: 125925, nome: "BOLO DE CENOURA - PRODUCAO", unidade: "KG" },
            { codigo: 125895, nome: "BOLO DE CHOCOLATE - KG - PRODUCAO", unidade: "KG" },
            { codigo: 126086, nome: "BOLO DE CHOCOLATE P KG - PRODUCAO", unidade: "KG" },
            { codigo: 125985, nome: "BOLO DE COCO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126196, nome: "BOLO DE COCO P - PRODUCAO", unidade: "KG" },
            { codigo: 126082, nome: "BOLO DE LARANJA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125830, nome: "BOLO DE LARANJA P - PRODUCAO", unidade: "KG" },
            { codigo: 125785, nome: "BOLO DE LEITE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125792, nome: "BOLO DE LIMAO JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 126087, nome: "BOLO DE LIMAO JARDINS P KG - PRODUCAO", unidade: "KG" },
            { codigo: 125908, nome: "BOLO DE MACAXEIRA - PRODUCAO", unidade: "KG" },
            { codigo: 125879, nome: "BOLO DE MARACUJA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126088, nome: "BOLO DE MARACUJA P KG - PRODUCAO", unidade: "KG" },
            { codigo: 125827, nome: "BOLO DE MILHO - PRODUCAO", unidade: "KG" },
            { codigo: 126079, nome: "BOLO DE OVOS BB KG - PRODUCAO", unidade: "KG" },
            { codigo: 126081, nome: "BOLO DE OVOS C/AMEIXA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126084, nome: "BOLO DE OVOS C/ AMEIXA P - PRODUCAO", unidade: "KG" },
            { codigo: 125924, nome: "BOLO DE OVOS C/ CHOCOLATE KG - PRODUCAO", unidade: "KG" },
            { codigo: 126089, nome: "BOLO DE OVOS C/ CHOCOLATE - P KG - PRODUCAO", unidade: "KG" },
            { codigo: 125995, nome: "BOLO DE OVOS C/FRUTAS CRISTALIZADAS KG - PRODUCAO", unidade: "KG" },
            { codigo: 126224, nome: "BOLO DE OVOS C/FRUTAS CRISTALIZADAS P - PRODUCAO", unidade: "KG" },
            { codigo: 125996, nome: "BOLO DE OVOS C/ UVA PASSAS KG - PRODUCAO", unidade: "KG" },
            { codigo: 125998, nome: "BOLO DE OVOS C/ UVA PASSAS - M - KG PRODUCAO", unidade: "KG" },
            { codigo: 125944, nome: "BOLO DE OVOS P - PRODUCAO", unidade: "KG" },
            { codigo: 126154, nome: "BOLO DE OVOS - PRODUCAO", unidade: "KG" },
            { codigo: 125909, nome: "BOLO DE PUBA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125997, nome: "BOLO DE ROLO/GOIABA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126080, nome: "BOLO FORMIGUEIRO BB KG - PRODUCAO", unidade: "KG" },
            { codigo: 125894, nome: "BOLO FORMIGUEIRO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126090, nome: "BOLO FORMIGUEIRO P KG - PRODUCAO", unidade: "KG" },
            { codigo: 126259, nome: "BOLO GOIABADA P KG - PRODUCAO", unidade: "KG" },
            { codigo: 126225, nome: "BOLO P DE BANANA - PRODUCAO", unidade: "KG" },
            { codigo: 126153, nome: "BOLO P DE OVOS C/ UVA PASSAS P - PRODUCAO", unidade: "KG" },
            { codigo: 126201, nome: "BOLO PISCINA - PRODUCAO - PJ", unidade: "KG" },
            { codigo: 125777, nome: "BOLO - TORTA DE BANANA - PRODUCAO", unidade: "KG" },
            { codigo: 125796, nome: "BOLO VULCAO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125776, nome: "BOLO TORTA DE ABACAXI - PRODUCAO", unidade: "KG" },
            { codigo: 125828, nome: "EMPADA DE CAMARAO PRODUCAO", unidade: "UN" },
            { codigo: 125818, nome: "EMPADA DE CARNE JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125829, nome: "EMPADA DE CHARQUE JARDIM - PRODUCAO", unidade: "UN" },
            { codigo: 125822, nome: "EMPADA DE FRANGO JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125943, nome: "ESCONDIDINHO DE CALABRESA KG PRODUCAO", unidade: "KG" },
            { codigo: 125942, nome: "ESCONDIDINHO DE CARNE JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 126002, nome: "ESCONDIDINHO DE CHARQUE KG - PRODUCAO", unidade: "KG" },
            { codigo: 125941, nome: "ESCONDIDINHO DE FRANGO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126003, nome: "LASANHA DE CAMARAO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125940, nome: "LASANHA DE CARNE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126119, nome: "MINI QUICHE CAMARAO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126120, nome: "MINI QUICHE CHARQUE KG - PRODUCAO", unidade: "KG" },
            { codigo: 126121, nome: "MINI QUICHE DE CHARQUE KG - PRODUCAO", unidade: "KG" },
            { codigo: 126122, nome: "MINI QUICHE TOMATE SECO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125805, nome: "PASTEL DE FORNO CAMARAO JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126012, nome: "PASTEL DE FORNO CHARQ JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125826, nome: "PASTEL DE FORNO C/QUEIJO JARDINS PRODUCAO", unidade: "UN" },
            { codigo: 125863, nome: "PASTEL DE FORNO DE CARNE UN PRODUCAO", unidade: "UN" },
            { codigo: 125817, nome: "PASTEL DE FORNO DE FRANGO JARDINS UN PRODUCAO", unidade: "UN" },
            { codigo: 125849, nome: "QUICHE CHARQUE JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 126015, nome: "QUICHE DE CAMARAO- PRODUCAO", unidade: "KG" },
            { codigo: 126308, nome: "TORTA DE CHARQUE P UNID JARDINS", unidade: "UN" },
            { codigo: 125869, nome: "TORTA DE FRANGO KG PRODUCAO", unidade: "KG" },
            { codigo: 126021, nome: "TORTA SALG CAMARAO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125835, nome: "ARROZ DOCE JARDINS- PRODUCAO", unidade: "KG" },
            { codigo: 125929, nome: "BOBO DE CAMARAO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125834, nome: "CANJICA JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 126357, nome: "CREME DE ABOBORA C/CAMARAO - PRODUCAO", unidade: "KG" },
            { codigo: 125904, nome: "MINGAU DE AVEIA COM AMEIXA PRODUCAO", unidade: "KG" },
            { codigo: 125903, nome: "MINGAU DE MILHO KG PRODUCAO", unidade: "KG" },
            { codigo: 125905, nome: "MINGAU DE PUBA- PRODUCAO", unidade: "KG" },
            { codigo: 125833, nome: "MUNGUNZA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125896, nome: "SOPA CALDO VERDE JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 125897, nome: "SOPA CANJA DE GALINHA PRODUCAO", unidade: "KG" },
            { codigo: 125900, nome: "SOPA - CREME DE ABOBORA C/CHARQUE - PRODUCAO", unidade: "KG" },
            { codigo: 125836, nome: "SOPA - CREME DE ABOBORA C/ FRANGO - PRODUCAO", unidade: "KG" },
            { codigo: 125991, nome: "SOPA DE BACALHAU KG PRODUCAO", unidade: "KG" },
            { codigo: 125899, nome: "SOPA DE FEIJAO C/CARNE PRODUCAO", unidade: "KG" },
            { codigo: 125898, nome: "SOPA DE LEGUMES C/CARNE - PRODUCAO", unidade: "KG" },
            { codigo: 125837, nome: "SOPA NORDESTINA COM CHARQUE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126355, nome: "BOLO DE POTE JARDINS - CHOC BRANCO/PRETO -  PRODUCAO", unidade: "UN" },
            { codigo: 126200, nome: "BOLO DE POTE - PRODUCAO - PJ", unidade: "UN" },
            { codigo: 125808, nome: "BOMBA DE CHOCOLATE JARDINS PRODUCAO", unidade: "UN" },
            { codigo: 126203, nome: "CUP CAKE - UNID - PRODUCAO", unidade: "UN" },
            { codigo: 125876, nome: "DOCINHO FINOS JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126283, nome: "DOCINHO JARDINS - BEIJINHO - PRODUCAO", unidade: "UN" },
            { codigo: 126284, nome: "DOCINHO JARDINS - BRIGADEIRO - PRODUCAO", unidade: "UN" },
            { codigo: 126288, nome: "DOCINHO JARDINS - CAJUZINHO - PRODUCAO", unidade: "UN" },
            { codigo: 126287, nome: "DOCINHO JARDINS - CASADINHO - PRODUCAO", unidade: "UN" },
            { codigo: 126285, nome: "DOCINHO JARDINS - SUPRESA DE UVA - PRODUCAO", unidade: "UN" },
            { codigo: 126211, nome: "FATIA DE BOLO DE CENOURA C/CHOCOLATE", unidade: "KG" },
            { codigo: 125987, nome: "MINI PUDIM DE LEITE - PRODUCAO", unidade: "UN" },
            { codigo: 126227, nome: "MINI SONHO RECHEADO CHOCOLATE - PRODUCAO", unidade: "KG" },
            { codigo: 126228, nome: "MINI SONHO RECHEADO DOCE DE LEITE - PRODUCAO", unidade: "KG" },
            { codigo: 126229, nome: "MINI SONHO RECHEADO GOIABADA - PRODUCAO", unidade: "KG" },
            { codigo: 125803, nome: "MORANGUINHO JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125772, nome: "MOUSSE DE CHOCOLATE JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125847, nome: "MOUSSE DE LIMAO JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125848, nome: "MOUSSE DE MARACUJA JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125825, nome: "MOUSSE DE MORANGO JARDINS -  PRODUCAO", unidade: "UN" },
            { codigo: 126752, nome: "OVOS DA PASCOA - PRODUCAO PJ", unidade: "UN" },
            { codigo: 126185, nome: "PAO DE MEL - COBERTURA - PRODUCAO", unidade: "KG" },
            { codigo: 125930, nome: "PUDIM DE LEITE  KG - PRODUCAO", unidade: "KG" },
            { codigo: 125770, nome: "QUEIJADINHA - PRODUCAO", unidade: "KG" },
            { codigo: 125773, nome: "ROCAMBOLE CHOCOLATE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126204, nome: "ROCAMBOLE DE DOCE DELEITE - PRODUCAO", unidade: "KG" },
            { codigo: 125775, nome: "ROCAMBOLE GOIABADA JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 125756, nome: "SONHO DIVERSOS JARDINS -  PRODUCAO", unidade: "KG" },
            { codigo: 126131, nome: "SONHO RECHEADO CHOCOLATE - PRODUCAO", unidade: "KG" },
            { codigo: 126132, nome: "SONHO RECHEADO DOCE DE LEITE - PRODUCAO", unidade: "KG" },
            { codigo: 126133, nome: "SONHO RECHEADO GOIABADA - PRODUCAO", unidade: "KG" },
            { codigo: 126134, nome: "SONHO S/ RECHEIO - PRODUCAO", unidade: "KG" },
            { codigo: 126019, nome: "TARTELETE TRUFADA JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 125912, nome: "TARTELETE UN - PRODUCAO", unidade: "UN" },
            { codigo: 126020, nome: "TORTA DOCE GELADA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126600, nome: "TORTA ITALIANA  UNID  - PRODUCAO", unidade: "UN" },
            { codigo: 126492, nome: "BISCOITO CASEIRO POTE M - PRODUCAO", unidade: "UN" },
            { codigo: 126491, nome: "BISCOITO CASEIRO POTE P - PRODUCAO", unidade: "UN" },
            { codigo: 125786, nome: "BISCOITO COPA DOCE - PRODUCAO", unidade: "KG" },
            { codigo: 125819, nome: "BISCOITO COPA SALGADA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125957, nome: "BOLACHAO FOFO KG PRODUCAO", unidade: "KG" },
            { codigo: 125890, nome: "BOLACHAO SECO COCO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126360, nome: "BROA DE MILHO G - C GOIABADA - PRODUCAO", unidade: "KG" },
            { codigo: 126359, nome: "BROA G DE MILHO S RECHEIO - PRODUCAO", unidade: "KG" },
            { codigo: 125781, nome: "BROA P DE MILHO C GOIABA - PRODUCAO", unidade: "KG" },
            { codigo: 125813, nome: "BROA P DE MILHO S RECHEIO - PRODUCAO", unidade: "KG" },
            { codigo: 125784, nome: "CASQUINHA CROCANTE JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 125809, nome: "FARINHA DE ROSCA JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 125892, nome: "GRISSIN -  PRODUCAO", unidade: "KG" },
            { codigo: 125824, nome: "PANETONE CHOCOLATE M - PRODUCAO", unidade: "UN" },
            { codigo: 125842, nome: "PANETONE DE CHOC 100GR - PRODUCAO", unidade: "UN" },
            { codigo: 125814, nome: "PANETONE DE FRUTAS 100G - PRODUCAO", unidade: "UN" },
            { codigo: 125768, nome: "PANETONE DE FRUTAS 400G - PRODUCAO", unidade: "UN" },
            { codigo: 125887, nome: "PAO AMANTEIGADO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125779, nome: "PAO ARABE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125795, nome: "PAO AUSTRALIANO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125810, nome: "PAO BAGUETE JARDINS -  PRODUCAO", unidade: "KG" },
            { codigo: 125787, nome: "PAO BRIOCHE G -  PRODUCAO", unidade: "KG" },
            { codigo: 126047, nome: "PAO BRIOCHE TRANCADO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126055, nome: "PAO CHOCOLATE G - PRODUCAO", unidade: "KG" },
            { codigo: 126056, nome: "PAO CHOCOLATE P - PRODUCAO", unidade: "KG" },
            { codigo: 126329, nome: "PAO CILINDRO G - PRODUCAO PJ", unidade: "KG" },
            { codigo: 125886, nome: "PAO CILINDRO P KG - PRODUCAO", unidade: "KG" },
            { codigo: 125761, nome: "PAO CROQUETE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125765, nome: "PAO DE BATATA G - JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 125766, nome: "PAO DE CENOURA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125763, nome: "PAO DE FORMA INTEGRAL S/C -  PRODUCAO", unidade: "KG" },
            { codigo: 125758, nome: "PAO DE FORMA S/CASCA - PRODUCAO", unidade: "KG" },
            { codigo: 126007, nome: "PAO DE FORMA TRADICIONAL - PRODUCAO", unidade: "KG" },
            { codigo: 125769, nome: "PAO DE HAMBURGUER C/GERGELIM JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125764, nome: "PAO DE HAMBURGUER JARDINS KG PRODUCAO", unidade: "KG" },
            { codigo: 125938, nome: "PAO DELICIA RECHEADO G - PRODUCAO", unidade: "KG" },
            { codigo: 126362, nome: "PAO DELICIA RECHEADO P - PRODUCAO", unidade: "KG" },
            { codigo: 126361, nome: "PAO DELICIA S/ RECHEIO G - PRODUCAO", unidade: "KG" },
            { codigo: 125872, nome: "PAO DELICIA S/ RECHEIO P - PRODUCAO", unidade: "KG" },
            { codigo: 125841, nome: "PAO DE MEL - JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126008, nome: "PAO DE METRO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125927, nome: "PAO DE MILHO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126053, nome: "PAO DOCE ACUCAR - PRODUCAO", unidade: "KG" },
            { codigo: 126054, nome: "PAO DOCE CARRAPICHO - PRODUCAO", unidade: "KG" },
            { codigo: 126184, nome: "PAO DOCE COCADA -  PRODUCAO", unidade: "KG" },
            { codigo: 126180, nome: "PAO DOCE COCADA - TARDE - PRODUCAO", unidade: "KG" },
            { codigo: 125906, nome: "PAO DOCE DIVERSOS - PRODUCAO", unidade: "KG" },
            { codigo: 126057, nome: "PAO DOCE GOIABADA - PRODUCAO", unidade: "KG" },
            { codigo: 126058, nome: "PAO FATIA G COM FAROFA - PRODUCAO", unidade: "KG" },
            { codigo: 126059, nome: "PAO FATIA G COM GERGELIM - PRODUCAO", unidade: "KG" },
            { codigo: 126060, nome: "PAO FATIA G - PRODUCAO", unidade: "KG" },
            { codigo: 126061, nome: "PAO FATIA P KG - PRODUCAO", unidade: "KG" },
            { codigo: 126009, nome: "PAO FORMA INTEGRAL KG -  PRODUCAO", unidade: "KG" },
            { codigo: 116137, nome: "PAO FRANCES CONGELADO - PRODUCAO", unidade: "KG" },
            { codigo: 125884, nome: "PAO FRANCES INTEGRAL PRODUCAO", unidade: "KG" },
            { codigo: 125883, nome: "PAO FRANCES KG PRODUCAO", unidade: "KG" },
            { codigo: 125760, nome: "PAO HOT DOG KG - PRODUCAO", unidade: "KG" },
            { codigo: 126126, nome: "PAO MINI BATATA JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 126062, nome: "PAO MINI BRIOCHE JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 126127, nome: "PAO MINI CENOURA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126302, nome: "PAO MULTI GRAOS - PRODUCAO PJ", unidade: "KG" },
            { codigo: 125780, nome: "PAO RECIFE JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125913, nome: "PAO SIRIO - PRODUCAO", unidade: "KG" },
            { codigo: 125790, nome: "ROSCA JARDINS KG PRODUCAO", unidade: "KG" },
            { codigo: 125767, nome: "TORRADA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125771, nome: "BALMECK DE FRANGO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125874, nome: "BALMECK QUEIJO E PRESUNTO PRODUCAO", unidade: "KG" },
            { codigo: 125838, nome: "BANANA REAL JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126017, nome: "BAURU JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125870, nome: "CROISSANT FOLHADO FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125922, nome: "CROISSANT FOLHADO ROMEU E JULIETA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125864, nome: "CROISSANT FOLHADO S/RECHEIO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125867, nome: "CROISSANT QUEIJO E PRESUNTO UNID PRODUCAO", unidade: "UN" },
            { codigo: 125934, nome: "ENROLADINHO DE QUEIJO E PRESUNTO PRODUCAO", unidade: "UN" },
            { codigo: 125935, nome: "ENROLADINHO DE SALSICHA - PRODUCAO", unidade: "UN" },
            { codigo: 126093, nome: "ESFIRRA ABERTA CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125873, nome: "ESFIRRA ABERTA CARNE KG - PRODUCAO", unidade: "KG" },
            { codigo: 126094, nome: "ESFIRRA ABERTA FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126095, nome: "ESFIRRA ABERTA QUEIJO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125937, nome: "ESFIRRA DE CARNE UNID - PRODUCAO", unidade: "UN" },
            { codigo: 125936, nome: "ESFIRRA DE FRANGO UNID - PRODUCAO", unidade: "UN" },
            { codigo: 125823, nome: "HAMBURGUER DE FORNO CARNE JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126486, nome: "PAO CAIPIRA CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125931, nome: "PAO CAIPIRA FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125762, nome: "PAO CIABATA - PRODUCAO", unidade: "KG" },
            { codigo: 125794, nome: "PAO CIABATA QUEIJO E PRESUNTO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126205, nome: "PAO CIABATA RECHEADA CALABRESA COM CATUPIRY - PRODUCAO", unidade: "KG" },
            { codigo: 126206, nome: "PAO CIABATA RECHEADA FRANGO C/ CATUPIRY", unidade: "KG" },
            { codigo: 126048, nome: "PAO DE BATATA RECHEADO CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126050, nome: "PAO DE BATATA RECHEADO FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126051, nome: "PAO DE BATATA RECHEADO QUEIJO E PRESUNTO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126052, nome: "PAO DE BATATA RECHEADO QUEIJO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125759, nome: "PASTEL FRITO CAMARAO - PRODUCAO", unidade: "UN" },
            { codigo: 126128, nome: "PASTEL FRITO CARNE UN - PRODUCAO", unidade: "UN" },
            { codigo: 126129, nome: "PASTEL FRITO DE QUEIJO UN - PRODUCAO", unidade: "UN" },
            { codigo: 125757, nome: "PASTEL FRITO FRANGO JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126130, nome: "ROSCA CHOCOLATE - PRODUCAO", unidade: "KG" },
            { codigo: 126212, nome: "ROSCA DE CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126207, nome: "ROSCA FRUTAS CRISTALIZADAS - PRODUCAO", unidade: "KG" },
            { codigo: 125956, nome: "CALZONE DE CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125953, nome: "CALZONE DE FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 125955, nome: "CALZONE DE MARGUERITA KG PRODUCAO", unidade: "KG" },
            { codigo: 125954, nome: "CALZONE DE PORTUGUESA KG PRODUCAO", unidade: "KG" },
            { codigo: 125932, nome: "EMPANADA ARGENTINA UNID PRODUCAO", unidade: "UN" },
            { codigo: 126101, nome: "FOCACIA RECH CALABRESA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125793, nome: "FOCACIA RECH CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126102, nome: "FOCACIA RECH FRANGO JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126103, nome: "FOCACIA RECH PORTUGUESA - PRODUCAO", unidade: "KG" },
            { codigo: 126096, nome: "MINI CALZONE DE CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126097, nome: "MINI CALZONE DE FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126098, nome: "MINI CALZONE DE MARGUERITA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126099, nome: "MINI CALZONE DE PORTUGUESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126104, nome: "MINI PIZZA CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126105, nome: "MINI PIZZA FRANGO - PRODUCAO", unidade: "KG" },
            { codigo: 126106, nome: "MINI PIZZA MARGUERITA - PRODUCAO", unidade: "KG" },
            { codigo: 126107, nome: "MINI PIZZA MISTA - PRODUCAO", unidade: "KG" },
            { codigo: 126108, nome: "MINI PIZZA PORTUGUESA - PRODUCAO", unidade: "KG" },
            { codigo: 126109, nome: "PIZZA BROTINHO CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126110, nome: "PIZZA BROTINHO FRANGO - PRODUCAO", unidade: "KG" },
            { codigo: 126111, nome: "PIZZA BROTINHO MARGUERITA - PRODUCAO", unidade: "KG" },
            { codigo: 126112, nome: "PIZZA BROTINHO MISTA - PRODUCAO", unidade: "KG" },
            { codigo: 126113, nome: "PIZZA BROTINHO PORTUGUESA - PRODUCAO", unidade: "KG" },
            { codigo: 126570, nome: "PIZZA FESTIVAL CALABRESA P - PRODUCAO", unidade: "KG" },
            { codigo: 126571, nome: "PIZZA FESTIVAL FRANGO P - PRODUCAO", unidade: "KG" },
            { codigo: 126232, nome: "PIZZA FESTIVAL G - CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126234, nome: "PIZZA FESTIVAL G - FRANGO - PRODUCAO", unidade: "KG" },
            { codigo: 126233, nome: "PIZZA FESTIVAL M - CALABRESA - PRODUCAO", unidade: "KG" },
            { codigo: 126235, nome: "PIZZA FESTIVAL M - FRANGO - PRODUCAO", unidade: "KG" },
            { codigo: 126236, nome: "PIZZA FESTIVAL PORTUGUESA G - PRODUCAO", unidade: "KG" },
            { codigo: 126237, nome: "PIZZA FESTIVAL PORTUGUESA M - PRODUCAO", unidade: "KG" },
            { codigo: 125949, nome: "PIZZA JARDINS CALABRESA KG PRODUCAO", unidade: "KG" },
            { codigo: 125950, nome: "PIZZA JARDINS FRANGO KG PRODUCAO", unidade: "KG" },
            { codigo: 125951, nome: "PIZZA JARDINS MARGUERITA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125811, nome: "PIZZA JARDINS MISTA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125952, nome: "PIZZA JARDINS PORTUGUESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126114, nome: "PIZZA MEDIA CALABRESA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126366, nome: "PIZZA MEDIA DE PORTUGUESA - PRODUCAO", unidade: "KG" },
            { codigo: 126115, nome: "PIZZA MEDIA FRANGO KG - PRODUCAO", unidade: "KG" },
            { codigo: 126116, nome: "PIZZA MEDIA MARGUERITA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126117, nome: "PIZZA MEDIA MISTA KG - PRODUCAO", unidade: "KG" },
            { codigo: 125862, nome: "ALMOCO JARDINS KG - PRODUCAO", unidade: "KG" },
            { codigo: 126065, nome: "ARROZ COZIDO - PRODUCAO", unidade: "KG" },
            { codigo: 126071, nome: "BANANA CARAMELIZADA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126077, nome: "BATATA DOCE - PRODUCAO", unidade: "KG" },
            { codigo: 126281, nome: "BIFE ACEBOLADO - PRODUCAO", unidade: "KG" },
            { codigo: 126282, nome: "BISTECA DE PORCO COZIDA - PRODUCAO", unidade: "KG" },
            { codigo: 125844, nome: "BRUSCHETTA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125920, nome: "CAFE DA MANHA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126501, nome: "CALABRESA FEIJOADA - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126202, nome: "CALABRESA FRITA - PRODUCAO", unidade: "KG" },
            { codigo: 126066, nome: "CARNE CHARQUE COZIDA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126526, nome: "CARNE COZIDA - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126067, nome: "CARNE DO SOL COZIDA- KG - PRODUCAO", unidade: "KG" },
            { codigo: 126068, nome: "CARNE MOIDA COZIDA - KG - PRODUCAO", unidade: "KG" },
            { codigo: 126069, nome: "CARNES - FEIJOADA - KG - PRODUCAO", unidade: "KG" },
            { codigo: 126279, nome: "COUVE FOLHA REFOGADO - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126072, nome: "FAROFA KG - PRODUCAO", unidade: "KG" },
            { codigo: 126334, nome: "FEIJAO ALMOCO - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126335, nome: "FEIJAO TROPEIRO ALMOCO - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126076, nome: "FEIJOADA - PRODUCAO", unidade: "KG" },
            { codigo: 126487, nome: "FIGADO KG - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126073, nome: "FRANGO COZIDO - KG - PRODUCAO", unidade: "KG" },
            { codigo: 126074, nome: "INHAME COZIDO - PRODUCAO", unidade: "KG" },
            { codigo: 125857, nome: "JANTAR JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 125939, nome: "LASANHA DE FRANGO JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 126537, nome: "MACARRAO ALMOCO - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126075, nome: "MACAXEIRA COZIDA - PRODUCAO", unidade: "KG" },
            { codigo: 125901, nome: "MOLHO DE CACHORRO QUENTE KG - PRODUCAO", unidade: "KG" },
            { codigo: 125791, nome: "PAO RABANADA JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 126609, nome: "PEIXE ALMOCO - PRODUCAO PJ", unidade: "KG" },
            { codigo: 126244, nome: "PLACA DE OVO BRANCO C/30 - PRODUCAO - PJ", unidade: "UN" },
            { codigo: 125946, nome: "RAIZES CAFE MANHA LOJAS - PRODUCAO", unidade: "KG" },
            { codigo: 125783, nome: "ROSBIFE JARDINS PRODUCAO", unidade: "KG" },
            { codigo: 125788, nome: "SALADA DE FRUTAS DELICIA JARDINS - PRODUCAO", unidade: "KG" },
            { codigo: 126018, nome: "STROGONOFF JARDINS UND - PRODUCAO", unidade: "UN" },
            { codigo: 126213, nome: "STROGONOFF KG - PRODUCAO - PJ", unidade: "KG" },
            { codigo: 126272, nome: "VERDURAS FEIJOADA - PRODUCAO", unidade: "KG" },
            { codigo: 126070, nome: "VINAGRETE - PRODUCAO", unidade: "KG" },
            { codigo: 126473, nome: "BARQUETE - PRODUCAO", unidade: "UN" },
            { codigo: 126091, nome: "CANUDINHO UN - PRODUCAO", unidade: "UN" },
            { codigo: 125812, nome: "COXINHA C/CATUPIRY JARDINS PRODUCAO", unidade: "UN" },
            { codigo: 125964, nome: "COXINHA DE CAMARAO - PRODUCAO", unidade: "UN" },
            { codigo: 125881, nome: "COXINHA DE CHARQUE PRODUCAO", unidade: "UN" },
            { codigo: 125933, nome: "COXINHA GRANDE UNID - PRODUCAO", unidade: "UN" },
            { codigo: 126000, nome: "CROQUETE DE QUEIJO/PRESUNTO - PRODUCAO", unidade: "UN" },
            { codigo: 126001, nome: "EMPANADO DE CAMARAO - PRODUCAO", unidade: "UN" },
            { codigo: 125816, nome: "KIBE JARDINS - PRODUCAO", unidade: "UN" },
            { codigo: 126210, nome: "MINI BOLINHAS DE QUEIJO - PRODUCAO", unidade: "UN" },
            { codigo: 126209, nome: "MINI BOLIVIANO - PRODUCAO", unidade: "UN" },         
            { codigo: 125889, nome: "MINI COXINHA - PRODUCAO", unidade: "UN" },
            { codigo: 126006, nome: "MINI KIBE - PRODUCAO", unidade: "UN" },
            { codigo: 126124, nome: "MINI RISOLE - PRODUCAO", unidade: "UN" },
            { codigo: 125907, nome: "PAO DE ALHO - PRODUCAO", unidade: "KG" },
            { codigo: 126448, nome: "PROMOCAO FESTIVAL - CONFEITARIA SALGADOS - PRODUCAO", unidade: "UN" },
            { codigo: 126208, nome: "SANDUICHE NATURAL JARDINS UNID - PRODUCAO", unidade: "UN" }
                        
        ]},
    ];

    function renderizarCategorias() {
        estoqueDiv.innerHTML = "";

        categorias.forEach((categoria, catIndex) => {
            const categoriaDiv = document.createElement("div");
            categoriaDiv.classList.add("category");
            categoriaDiv.innerHTML = `<h2>${categoria.nome}</h2>`;

            const listContainer = document.createElement("div");
            listContainer.classList.add("list-container");

            // Criando um container para a rolagem
            const tableContainer = document.createElement("div");
            tableContainer.classList.add("table-container");
            tableContainer.style.maxHeight = "80vh"; 
            tableContainer.style.overflowY = "auto"; 

            const table = document.createElement("table");
            table.classList.add("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th id="Código">Código</th>
                        <th>Nome</th>
                        <th id="Unidade">Unidade</th>
                        <th>Contagem</th>
                    </tr>
                </thead>
                <tbody id="tbody-${catIndex}"></tbody>
            `;

            categoria.itens.forEach(item => {
                const row = document.createElement("tr");
                row.classList.add("table-row");
                row.innerHTML = `
                    <td class="cod">${item.codigo}</td>
                    <td class="item-nome">${item.nome}</td>
                    <td class="und">${item.unidade}</td>
                    <td><input type="number" min="0" data-codigo="${item.codigo}" placeholder=""></td>
                `;
                table.querySelector("tbody").appendChild(row);
            });

            tableContainer.appendChild(table); // Adiciona a tabela dentro do container
            listContainer.appendChild(tableContainer); // Adiciona o container ao listContainer

            // Criando botão para adicionar item
            const addItemBtn = document.createElement("button");
            addItemBtn.textContent = "Adicionar Item";
            addItemBtn.classList.add("add-item-btn");

            // Criando formulário para adicionar item
            const formContainer = document.createElement("div");
            formContainer.classList.add("form-container");
            formContainer.style.display = "none";  // Começa oculto

            formContainer.innerHTML = `
             <div class="form-row">
        <input type="number" id="codigo-${catIndex}" placeholder="Código">
        <input type="text" id="nome-${catIndex}" placeholder="Nome">
        <input type="text" id="unidade-${catIndex}" placeholder="Unidade">
        <input type="number" id="quantidade-${catIndex}" placeholder="Quantidade" min="0">
        <button onclick="adicionarItem(${catIndex})">Adicionar</button>
    </div>
            `;

            addItemBtn.addEventListener("click", () => {
                formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
            });

            categoriaDiv.appendChild(listContainer);
            categoriaDiv.appendChild(addItemBtn);
            categoriaDiv.appendChild(formContainer);
            estoqueDiv.appendChild(categoriaDiv);
        });
    }

    // Função para adicionar novos itens à tabela
    window.adicionarItem = function(catIndex) {
        const codigo = document.getElementById(`codigo-${catIndex}`).value;
        const nome = document.getElementById(`nome-${catIndex}`).value;
        const unidade = document.getElementById(`unidade-${catIndex}`).value;

        if (!codigo || !nome || !unidade) {
            alert("Preencha todos os campos!");
            return;
        }

        categorias[catIndex].itens.push({
            codigo: parseInt(codigo),
            nome: nome.toUpperCase(),
            unidade: unidade.toUpperCase()
        });

        renderizarCategorias();
    };

    searchInput.addEventListener("input", () => {
        const filtro = searchInput.value.toUpperCase();
        document.querySelectorAll(".table-row").forEach(row => {
            const nomeItem = row.querySelector(".item-nome").textContent.toUpperCase();
            row.style.display = nomeItem.includes(filtro) ? "" : "none";
        });
    });
            
    function baixarCSV() {
        let csvContent = "Código;Nome;Unidade;Quantidade";

        document.querySelectorAll("table tbody tr").forEach(row => {
            const codigo = row.querySelector("td:nth-child(1)").textContent.trim();
            const nome = row.querySelector("td:nth-child(2)").textContent.trim();
            const unidade = row.querySelector("td:nth-child(3)").textContent.trim();
            const input = row.querySelector("td:nth-child(4) input");
            const quantidade = input ? input.value.trim() || "0" : "0";

            csvContent += `\n${codigo};${nome};${unidade};${quantidade}`;
        });

        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "estoque.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadBtn.addEventListener("click", baixarCSV);
    renderizarCategorias();
});

function verificarResolucao() {
    const larguraTela = window.innerWidth;

    if (larguraTela < 720) {
        console.log("A resolução da tela é menor que 720px!");

        // Selecionando corretamente os elementos da tabela
        document.querySelectorAll("th:nth-child(1), th:nth-child(3)").forEach(th => th.classList.add("mobile"));
        document.querySelectorAll(".cod, .und").forEach(td => td.classList.add("mobile"));
    } else {
        console.log("A resolução é maior ou igual a 720px!");

        // Remover a classe caso a resolução aumente novamente
        document.querySelectorAll("th:nth-child(1), th:nth-child(3)").forEach(th => th.classList.remove("mobile"));
        document.querySelectorAll(".cod, .und").forEach(td => td.classList.remove("mobile"));
    }
}

// Garante que a função seja executada no momento correto
document.addEventListener("DOMContentLoaded", verificarResolucao);
window.addEventListener("resize", verificarResolucao);
