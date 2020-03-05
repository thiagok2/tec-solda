# TecSolda
UM APLICATIVO PARA PLATAFORMAS MÓVEIS DE INSPEÇÃO VISUAL E CÁLCULO DE PARÂMETROS DE SOLDAGEM


Este projeto tem como objetivo aprimorar o aplicativo para plataformas móveis, o app TecSolda. Este foi criado no projeto PIBIT de mesmo nome no ciclo 2017/2018. A finalidade da aplicação é contribuir na melhoria dos processos de soldagem e também na formação dos técnicos da área de metalmecânica, em especial, da área de soldagem. 
A soldagem é um processo usado para unir materiais de forma permanente. Sua aplicação varia de acordo com os diversos métodos existentes e características: juntas apresentadas, forma, espessura, geometria das peças, tipo de material usado e etc. Grande parte dessa complexidade está consolidada em procedimentos, fórmulas e equações matemáticas presentes na literatura da área. A execução adequada, precisa e confiável dos processos de soldagem requer bastante conhecimento teórico e experiência no processo. 

Essa nova submissão visa a continuidade do projeto já desenvolvido. A solução criada já facilita e guia o procedimento correto do processo de soldagem mediante a execução correta de cálculos e parâmetros de soldagem. Outra funcionalidade já presente é a inspeção de soldas, essa que contribui para melhor um melhor monitoramento e avaliação sobre os trabalhos já realizados. O propósito da renovação desse projeto é o aprimoramento das funcionalidades inicialmente implementadas, a extensão dos cálculos para mais métodos de soldagem e a realização de testes mais amplos já no setor produtivo. Atualmente, o único módulo de cálculo implementado é o do Eletrodo Revestido. A perspectiva é ampliar para os processos MIG/MAG e TIG. Na inspeção, a persistência das imagens capturadas e das avaliações realizadas está local.

## Table of Contents

1. [Instalação](#instalacao)
2. [Emulação](#Emulação)
3. [Distribuição](#Distribuição)
## <a name="instalacao"></a>Instalação

1. npm install -g ionic@4.2 cordova@7

2. cordova platform add android@7.1.1

ionic serve

## Configuração de Ambiente do Projeto - Ionic v3

   Para configurar o ambiente do projeto, será necessário ter o [nodejs](https://nodejs.org/pt-br/docs/) na versão 8.x , instalado na máquina. Após o nodejs está disponível, use o <strong>npm</strong> para instalar o [ionic](https://ionicframework.com/docs/v3/) na versão 3, e o [cordova](https://cordova.apache.org/docs/en/7.x/) na versão 7.
  
    $ npm install -g ionic@4.2
    $ npm install -g cordova@7
    
   Também é necessário baixar e instalar o [Android Studio](https://developer.android.com/studio). Após a instalação do Android Studio, localize o SDK do android no seu sistema operacional, e faça a criação das variáveis de ambiente(segue o exemplo abaixo) e as adicione ao PATH do seu sistema operacional. Se, seu sistema operacional for <strong>linux</strong>, dependendo da distribuição poderá adicionar as variaveis de ambiente aos documentos <strong>.bashrc</strong> ou <strong>.profile</strong>.
   
   ![alt path](https://github.com/thiagok2/tec-solda/blob/master/src/assets/config/variaveis_ambiente.png)
   
   
## Build aplicação para android

1. Adicione a plataforma android ao projeto.

       $ ionic cordova platform add android
  
2. Em seguida execute o comando para gerar o apk(ao final da execução do comando será exibido o local do apk).

       $ ionic cordova build android

## Emulação


1. Instalar Android Studio, definir as variáveis de ambiente do android(ANDROID_HOME) e gradle.
2. Criar AVDs na mesma versão da plataforma adicionada na instalação.

3. ionic cordova emulate android



## Distribuição
1. ionic cordova build --release android --prod

Ir até o local 
cd platforms/android/app/build/outputs/apk

Gerar chave privada usando keytool,
$keytool -genkey -v -keystore tecsolda_v0x.keystore -alias tecsolda_v0x -keyalg RSA -keysize 2048 -validity 10000

Instalar jarsigner

Executar
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore tecsolda_v0x.keystore app-release-unsigned.apk tecsolda_v0x

Caso zipalign não esteja no path, copiar de /path/to/Android/sdk/build-tools/VERSION/zipalign para platforms/android/build/outputs/apk.


zipalign -v 4 app-release-unsigned.apk tecsolda_v0x.apk

OK, Apk gerado e assinado.

