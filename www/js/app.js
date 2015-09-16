// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform,$rootScope,$timeout) {
      $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs) 
      if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }

      if(window.StatusBar) {
            StatusBar.styleDefault();
      }
//      Plugin notification locale
      window.plugin.notification.local.onadd = function (id, state, json) {
          var notification = {
              id: id,
              state: state,
              json: json
          };
          $timeout(function () {
              $rootScope.$broadcast("$cordovaLocalNotification:added", notification);
          });
      }
//      Plugin Admob
      if(window.plugins && window.plugins.AdMob) {
            var admob_key = device.platform == "Android" ? "ca-app-pub-2769877976946371/4861442042" : "ca-app-pub-2769877976946371/6198574444";
            var admob = window.plugins.AdMob;
            admob.createBannerView( 
                {
                    'publisherId': admob_key,
                    'adSize': admob.AD_SIZE.BANNER,
                    'bannerAtTop': false
                }, 
                function() {
                    admob.requestAd(
                        { 'isTesting': false }, 
                        function() {
                            admob.showAd(true);
                        }, 
                        function() { console.log('failed to request ad'); }
                    );
                }, 
                function() { console.log('failed to create banner view'); }
            );
      }
    
  });
})

//Factory JuronsFactory pour les injures
.factory('juronsFactory', function(){
      var factory = {
            injures : [
                  "﻿Accapareur ",
                  "Aérolithe ",
                  "Amiral de bateau-lavoir ",
                  "Amphitryon ",
                  "Anacoluthe ",
                  "Analphabète ",
                  "Analphabète diplômé ",
                  "Animal ",
                  "Anthracite ",
                  "Anthropophage ",
                  "Anthropopithèque ",
                  "Apache ",
                  "Apophtegme ",
                  "Apprenti-dictateur à la noix de coco ",
                  "Arlequin ",
                  "Ascenseur ",
                  "Astronaute d'eau douce ",
                  "Athlète complet ",
                  "Au large ! ",
                  "Autocrate ",
                  "Autodidacte ",
                  "Aztèques ",
                  "Babouin ",
                  "Bachi-bouzouk ",
                  "Bachi-bouzouk de tonnerre de brest ",
                  "Bachi-bouzouk des carpathes ",
                  "Bande d'ectoplasmes de tonnerre de brest ",
                  "Bande d'emplâtres ",
                  "Bande d'enragés ",
                  "Bande d'escrocs ",
                  "Bande d'hurluberlus ",
                  "Bande de bachi-bouzouks ",
                  "Bande de brutes ",
                  "Bande de canaques ",
                  "Bande de jeunes effrontés ",
                  "Bande de joyeux drilles ",
                  "Bande de ku-klux-klans ",
                  "Bande de pirates ",
                  "Bande de sauvages ",
                  "Bande de voleurs ",
                  "Bande de zapotèques de tonnerre de brest ",
                  "Bandit ",
                  "Bayadère de carnaval ",
                  "Bibelot ",
                  "Bibendum ",
                  "Bidule ",
                  "Blague, fumisterie et compagnie ",
                  "Boit-sans-soif ",
                  "Bombe atomique ",
                  "Bon sang ",
                  "Bonhomme ",
                  "Bougre ",
                  "Bougre d'amiral de bateau-lavoir ",
                  "Bougre d'ectoplasme à roulettes ",
                  "Bougre d'ectoplasme de moule à gaufres ",
                  "Bougre d'extrait d'hydrocarbure ",
                  "Bougre d'extrait de cornichon ",
                  "Bougre d'extrait de crétin des alpes ",
                  "Bougre d'olibrius ",
                  "Bougre d'ostrogoth ",
                  "Bougre de crème d'emplâtre à la graisse de hérisson ",
                  "Bougre de faux jeton à la sauce tartare ",
                  "Bougre de méchant blanc ",
                  "Bougre de mouchard ",
                  "Bougre de papou des carpathes ",
                  "Bougre de petit cornichon ",
                  "Bougre de phénomène de moule à gaufres de tonnerre de brest ",
                  "Bougre de phénomène de tonnerre de brest ",
                  "Bougre de sauvage d'aérolithe de tonnerre de brest ",
                  "Bougre de zouave ",
                  "Brigand ",
                  "Brontosaure ",
                  "Brute ",
                  "Bulldozer à réaction ",
                  "Cachalot ",
                  "Cake-walk ",
                  "Calembredaine ",
                  "Canaille ",
                  "Canaque ",
                  "Cannibale ",
                  "Cannibale emplumé ",
                  "Capitaine de bateau lavoir ",
                  "Casse-pieds ",
                  "Catachrèse ",
                  "Cataplasme ",
                  "Cercopithèque ",
                  "Cercueil volant ",
                  "Chauffard ",
                  "Chenapan ",
                  "Cher petit ami ",
                  "Choléra ",
                  "Chouette mal empaillée ",
                  "Chrysanthème ",
                  "Cigare volant ",
                  "Cloche à fromage ",
                  "Cloporte ",
                  "Clown ",
                  "Clysopompe ",
                  "Coléoptère ",
                  "Coloquinte ",
                  "Coloquinte à la graisse de hérisson ",
                  "Commerce noir ",
                  "Concentré de moule à gaufres ",
                  "Coquin ",
                  "Cornemuse ",
                  "Cornichon ",
                  "Cornichon de zouave de tonnerre de brest ",
                  "Cornichon diplômé ",
                  "Corsaire ",
                  "Coup de trafalgar ",
                  "Coupe-jarret ",
                  "Cow-boy de la route ",
                  "Crème d'emplâtre à la graisse de hérisson ",
                  "Crétin de l'himalaya ",
                  "Crétin des alpes ",
                  "Crétin des balkans ",
                  "Cromagnon ",
                  "Cuistre ",
                  "Cyanure ",
                  "Cyclone ",
                  "Cyclone ambulant ",
                  "Cyclotron ",
                  "Cyrano à quatre pattes ",
                  "Diable ",
                  "Diable de zouave ",
                  "Diablesse ",
                  "Dieu soit loué ",
                  "Diplodocus ",
                  "Doryphore ",
                  "Doux agneaux ",
                  "Dynamiteur ",
                  "Écornifleur ",
                  "Écraseur ",
                  "Ectoplasme ",
                  "Ectoplasme à roulettes ",
                  "égoïste ",
                  "Emplâtre ",
                  "Emplâtré à la graisse de hérisson ",
                  "Empoisonneur ",
                  "Encordé vous-même ",
                  "Énergumène ",
                  "Enfer et damnation ",
                  "Enfonceur de porte ouverte ",
                  "Enragé ",
                  "Entêté ",
                  "Épouvantail ",
                  "Équilibriste ",
                  "Esclavagiste ",
                  "Escogriffe ",
                  "Escroc ",
                  "Espèce de loup-garou à la graisse de renoncule de mille sabords ",
                  "Espèce de mitrailleur à bavette ",
                  "Espèce de porc-épic mal embouché ",
                  "Extrait d'emplâtre ",
                  "Extrait d'hydrocarbure ",
                  "Extrait de cornichon ",
                  "Face de brute ",
                  "Farceur ",
                  "Fatma de prisunic ",
                  "Faux frère ",
                  "Faux jeton ",
                  "Faux jeton à la sauce tartare ",
                  "Fichu gredin ",
                  "Fieffé menteur ",
                  "Fiston ",
                  "Flibustier ",
                  "Flibustier de carnaval ",
                  "Flûte ",
                  "Forban ",
                  "Fourbe ",
                  "Frère de la côte ",
                  "Froussard ",
                  "Gaillard ",
                  "Galopin ",
                  "Gamin ",
                  "Gangster ",
                  "Garde-côtes à la mie de pain ",
                  "Gargarisme ",
                  "Garnement ",
                  "Gibier de potence ",
                  "Goujat ",
                  "Graine de vaurien ",
                  "Graisse de hérisson ",
                  "Graisse de trombone à coulisse ",
                  "Grand escogriffe ",
                  "Grand lâche ",
                  "Gredin ",
                  "Grenouille ",
                  "Gros-plein-de-soupe ",
                  "Grotesque polichinelle ",
                  "Gyroscope ",
                  "Hérétique ",
                  "Hors-la-loi ",
                  "Hurluberlu ",
                  "Hydrocarbure ",
                  "Iconoclaste ",
                  "Inca de carnaval ",
                  "Individou de général de tonnerre de brest ",
                  "Invertébré ",
                  "Isotope ",
                  "Ivrogne ",
                  "Jet d'eau ambulant ",
                  "Jeune chenapan ",
                  "Jeune impertinent ",
                  "Jocrisse ",
                  "Judas ",
                  "Jus de réglisse ",
                  "Kanak ",
                  "Khroumir ",
                  "Krrtchmvrtz ",
                  "Ku klux klan ",
                  "Lâche ",
                  "Lascar ",
                  "Le diable les emporte ",
                  "Lépidoptère ",
                  "Logarithme ",
                  "Loup-garou à la graisse de renoncule de mille tonnerres de brest ",
                  "Macaque ",
                  "Macrocéphale ",
                  "Malappris ",
                  "Malheur de malheur ",
                  "Malheureuse ",
                  "Malheureux ",
                  "Malotru ",
                  "Mamelouk ",
                  "Maraud ",
                  "Marchand de guano ",
                  "Marchand de tapis ",
                  "Marin d'eau douce ",
                  "Marmotte mal réveillée ",
                  "Maudit ",
                  "Maudite ",
                  "Mazette ",
                  "Mégacycle ",
                  "Mégalomane ",
                  "Mercanti ",
                  "Mercenaire ",
                  "Mérinos ",
                  "Mérinos mal peigné ",
                  "Mes agneaux ",
                  "Migou de malheur ",
                  "Mille milliards de mille millions de mille sabords ",
                  "Mille milliards de mille sabords ",
                  "Mille milliards de mille sabords de tonnerre de brest ",
                  "Mille milliards de tonnerre de brest ",
                  "Mille milliards de... ",
                  "Mille millions de mille milliards de mille sabords ",
                  "Mille millions de mille milliards de mille sabords de tonnerre de brest ",
                  "Mille millions de mille sabords ",
                  "Mille millions de mille sabords de tonnerre de brest ",
                  "Mille millions de sabords ",
                  "Mille millions de tonnerres de brest ",
                  "Mille sabords ",
                  "Mille tonnerres ",
                  "Mille tonnerres de brest ",
                  "Milliards de... ",
                  "Misérable ",
                  "Misérable ectoplasme ",
                  "Misérable ver de terre ",
                  "Mitrailleur à bavette ",
                  "Moratorium ",
                  "Moricaud ",
                  "Morues dans un carton à chapeau ",
                  "Mouchard ",
                  "Moujik ",
                  "Moule à gaufres ",
                  "Moussaillon ",
                  "Moussaillon de malheur ",
                  "Moussaillon du diable ",
                  "Mrkrpxzkrmtfrz ",
                  "Mufle ",
                  "Mussolini de carnaval ",
                  "Naufrageur ",
                  "Négrier ",
                  "Noix de coco ",
                  "Nom d'une pipe ",
                  "Nyctalope ",
                  "Olibrius ",
                  "Ophicléide ",
                  "Ornithorynque ",
                  "Oryctérope ",
                  "Ostrogoth ",
                  "Ours mal léché ",
                  "Pacte à quatre ",
                  "Paltoquet ",
                  "Pantoufle ",
                  "Papou ",
                  "Papou des carpathes ",
                  "Paranoïaque ",
                  "Parasites ",
                  "Particulier ",
                  "Patagon ",
                  "Patagon de zoulou ",
                  "Patapouf ",
                  "Patate ",
                  "Pauvre bougre ",
                  "Pauvre type ",
                  "Peau-rouge ",
                  "Pénultième ",
                  "Père volant ",
                  "Péronnelle ",
                  "Perroquet bavard ",
                  "Perroquet déplumé ",
                  "Petit choléra ",
                  "Petit délicat ",
                  "Petit ornithorynque ",
                  "Petit vaurien ",
                  "Petite tigresse ",
                  "Phénomène ",
                  "Phlébotome ",
                  "Phylactère ",
                  "Phylloxéra ",
                  "Pignouf ",
                  "Pirate ",
                  "Pirate d'eau douce ",
                  "Pirate du ciel ",
                  "Plein le dos ",
                  "Pleurnichard ",
                  "Polichinelle ",
                  "Polygraphe ",
                  "Porc-épic mal embouché ",
                  "Potentat ",
                  "Poussière ",
                  "Profiteur ",
                  "Projectile guidé ",
                  "Protozoaire ",
                  "Pyromane ",
                  "Pyrophore ",
                  "Que diable ",
                  "Que le diable vous étripatouille ",
                  "Que le grand cric me croque ",
                  "Que le grand cric me croque et me fasse avaler ma barbe ",
                  "Que le grrrand crrric me crrroque ",
                  "Rapace ",
                  "Rat ",
                  "Ravachol ",
                  "Renégat ",
                  "Rhizopode ",
                  "Rocaille de tonnerre de brest ",
                  "Rocambole ",
                  "Sacré mitrailleur à bavette ",
                  "Sacripant ",
                  "Sajou ",
                  "Sale bête ",
                  "Sale vilaine bête de tonnerre de brest ",
                  "Saleté d'appareil à sous ",
                  "Saltimbanque ",
                  "Sapajou ",
                  "Sapristi ",
                  "Satané @$%#{ç£] ",
                  "Satrape ",
                  "Sauvage ",
                  "Sauvage d'aérolithe ",
                  "Scélérat ",
                  "Schizophrène ",
                  "Scolopendre ",
                  "Scorpion ",
                  "Serpent ",
                  "Simili-martien à la graisse de cabestan ",
                  "Sinapisme ",
                  "Sinistre farceur ",
                  "Sombre brute ",
                  "Sombre oryctérope ",
                  "Soulographe ",
                  "Sous-produit d'ectoplasme ",
                  "Tas de cornichons ",
                  "Tas de sauvages ",
                  "Tchouk-tchouk-nougat ",
                  "Technocrate ",
                  "Terroriste ",
                  "Tête de lard ",
                  "Tête de mule ",
                  "Têtu comme une mule ",
                  "Tigresse ",
                  "Tonnerre ",
                  "Tonnerre de brest ",
                  "Tonnerre de tonnerre de brest ",
                  "Topinambour ",
                  "Tortionnaire ",
                  "Trafiquant de chair humaine ",
                  "Traîne-potence ",
                  "Traître ",
                  "Tricheur ",
                  "Troglodyte ",
                  "Trompe-la-mort ",
                  "Troufignol ",
                  "Va-nu-pieds ",
                  "Vampire ",
                  "Vandale ",
                  "Vaurien ",
                  "Végétarien ",
                  "Ver de terre ",
                  "Vercingétorix de carnaval ",
                  "Vermicelles ",
                  "Vermine ",
                  "Vieille baderne ",
                  "Vieille branche ",
                  "Vieille coque rouillée ",
                  "Vieille marmotte ",
                  "Vieille perruche bavarde ",
                  "Vieux cachalot ",
                  "Vieux cornichon ",
                  "Vieux farceur ",
                  "Vieux frère ",
                  "Vieux rafiot que je suis ",
                  "Vipère ",
                  "Vivisectionniste ",
                  "Volatile de malheur ",
                  "Voleur ",
                  "Voleur d'enfants ",
                  "Vous travaillez de l'électron ",
                  "Wisigoths ",
                  "Zapotèques ",
                  "Zèbre ",
                  "Zigomar ",
                  "Zouave ",
                  "Zouave à la noix de coco ",
                  "Zouave interplanétaire ",
                  "Zoulou"
            ]
      }

      return factory;
})

//Controller Principal
.controller('mainwindowController', ['$scope','juronsFactory', function($scope,juronsFactory){
//    Fonction de déplacement du capitaine
    $scope.captainInsult = function(){
        $('#captainspeaking').addClass('animated bounce');
        setTimeout(function(){$('#captainspeaking').removeClass('animated bounce')},1000);
    };
//    Fonction affichaage bordée d'injures
    $scope.bordeeinjures=function(){
        $scope.jurons = juronsFactory.injures;
        $scope.bordee="";
        var taille=$scope.jurons.length;
        var minNbinjures=3;
        var maxNbinjures=7;
        var Nbinjures=Math.floor(Math.random()*(maxNbinjures-minNbinjures))+minNbinjures;
        
        for(i=0; i<Nbinjures; i++){
            var cle=Math.floor(Math.random()*taille);
            var injureselected=$scope.jurons[cle];
            $scope.bordee += injureselected+' ! ';  
        }
        
        while ($scope.bordee.length > 130) {
            $scope.bordee.pop();
        }
        
        $scope.bordeeresult=$scope.bordee;
        
        //alert(bordee);
    };
//    Au chargement de l'application, on affiche la première bordée
    angular.element(document).ready(function () {
        $scope.bordeeinjures();
    });
}])

//Action retour Arrière
.controller('backController', ['$scope','$ionicHistory', function($scope,$ionicHistory){
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
}])

//Controller Recherche
.controller('rechercheController',['$scope','juronsFactory', function($scope,juronsFactory){
    $scope.recherche="";
    $scope.jurons="";
//    Fonction de recherche du mot entré
    $scope.keywordsearched=function(){
        key=$scope.recherche;
        if(key === ""){
            $scope.jurons=""
        }else{
            $scope.jurons=juronsFactory.injures;
        }
    }
}])

//Controller Notification locale
.controller("NotificationController", function($scope, $cordovaLocalNotification) {
 
      $scope.$on("$cordovaLocalNotification:schedule", function(id, state, json) {
          console.log('Vous recevrez une alerte tous les jours à 13h');
      });
    
      /*$scope.$on("$cordovaLocalNotification:trigger", function(id, state, json) {
          var nextreize = new Date().setHours(09,25,00);
          treizeam = new Date(nextreize + 24*60*60*1000 +10000);
          $cordovaLocalNotification.schedule({
                  id: 2,
                  message: $scope.bordee(),
                  title: "Capitaine Haddock",
                  at: nextreize
                }).then(function () {
                      console.log("The notification has been set");
                      $scope.activation=true;
                });
      });*/
      
      $scope.$on("$cordovaLocalNotification:canceled", function(id, state, json) {
            console.log('Vous venez de désactiver les notifications journalières');
      });
    
    
      $scope.activation="";
    
      $scope.bordee= function(){
          var newjurons = [
                  "Accapareur ",
                  "Aérolithe ",
                  "Amiral de bateau-lavoir ",
                  "Amphitryon ",
                  "Anacoluthe ",
                  "Analphabète ",
                  "Analphabète diplômé ",
                  "Animal ",
                  "Anthracite ",
                  "Anthropophage ",
                  "Anthropopithèque ",
                  "Apache ",
                  "Apophtegme ",
                  "Apprenti-dictateur à la noix de coco ",
                  "Arlequin ",
                  "Ascenseur ",
                  "Astronaute d'eau douce ",
                  "Athlète complet ",
                  "Au large ! ",
                  "Autocrate ",
                  "Autodidacte ",
                  "Aztèques ",
                  "Babouin ",
                  "Bachi-bouzouk ",
                  "Bachi-bouzouk de tonnerre de brest ",
                  "Bachi-bouzouk des carpathes ",
                  "Bande d'ectoplasmes de tonnerre de brest ",
                  "Bande d'emplâtres ",
                  "Bande d'enragés ",
                  "Bande d'escrocs ",
                  "Bande d'hurluberlus ",
                  "Bande de bachi-bouzouks ",
                  "Bande de brutes ",
                  "Bande de canaques ",
                  "Bande de jeunes effrontés ",
                  "Bande de joyeux drilles ",
                  "Bande de ku-klux-klans ",
                  "Bande de pirates ",
                  "Bande de sauvages ",
                  "Bande de voleurs ",
                  "Bande de zapotèques de tonnerre de brest ",
                  "Bandit ",
                  "Bayadère de carnaval ",
                  "Bibelot ",
                  "Bibendum ",
                  "Bidule ",
                  "Blague, fumisterie et compagnie ",
                  "Boit-sans-soif ",
                  "Bombe atomique ",
                  "Bon sang ",
                  "Bonhomme ",
                  "Bougre ",
                  "Bougre d'amiral de bateau-lavoir ",
                  "Bougre d'ectoplasme à roulettes ",
                  "Bougre d'ectoplasme de moule à gaufres ",
                  "Bougre d'extrait d'hydrocarbure ",
                  "Bougre d'extrait de cornichon ",
                  "Bougre d'extrait de crétin des alpes ",
                  "Bougre d'olibrius ",
                  "Bougre d'ostrogoth ",
                  "Bougre de crème d'emplâtre à la graisse de hérisson ",
                  "Bougre de faux jeton à la sauce tartare ",
                  "Bougre de méchant blanc ",
                  "Bougre de mouchard ",
                  "Bougre de papou des carpathes ",
                  "Bougre de petit cornichon ",
                  "Bougre de phénomène de moule à gaufres de tonnerre de brest ",
                  "Bougre de phénomène de tonnerre de brest ",
                  "Bougre de sauvage d'aérolithe de tonnerre de brest ",
                  "Bougre de zouave ",
                  "Brigand ",
                  "Brontosaure ",
                  "Brute ",
                  "Bulldozer à réaction ",
                  "Cachalot ",
                  "Cake-walk ",
                  "Calembredaine ",
                  "Canaille ",
                  "Canaque ",
                  "Cannibale ",
                  "Cannibale emplumé ",
                  "Capitaine de bateau lavoir ",
                  "Casse-pieds ",
                  "Catachrèse ",
                  "Cataplasme ",
                  "Cercopithèque ",
                  "Cercueil volant ",
                  "Chauffard ",
                  "Chenapan ",
                  "Cher petit ami ",
                  "Choléra ",
                  "Chouette mal empaillée ",
                  "Chrysanthème ",
                  "Cigare volant ",
                  "Cloche à fromage ",
                  "Cloporte ",
                  "Clown ",
                  "Clysopompe ",
                  "Coléoptère ",
                  "Coloquinte ",
                  "Coloquinte à la graisse de hérisson ",
                  "Commerce noir ",
                  "Concentré de moule à gaufres ",
                  "Coquin ",
                  "Cornemuse ",
                  "Cornichon ",
                  "Cornichon de zouave de tonnerre de brest ",
                  "Cornichon diplômé ",
                  "Corsaire ",
                  "Coup de trafalgar ",
                  "Coupe-jarret ",
                  "Cow-boy de la route ",
                  "Crème d'emplâtre à la graisse de hérisson ",
                  "Crétin de l'himalaya ",
                  "Crétin des alpes ",
                  "Crétin des balkans ",
                  "Cromagnon ",
                  "Cuistre ",
                  "Cyanure ",
                  "Cyclone ",
                  "Cyclone ambulant ",
                  "Cyclotron ",
                  "Cyrano à quatre pattes ",
                  "Diable ",
                  "Diable de zouave ",
                  "Diablesse ",
                  "Dieu soit loué ",
                  "Diplodocus ",
                  "Doryphore ",
                  "Doux agneaux ",
                  "Dynamiteur ",
                  "Écornifleur ",
                  "Écraseur ",
                  "Ectoplasme ",
                  "Ectoplasme à roulettes ",
                  "égoïste ",
                  "Emplâtre ",
                  "Emplâtré à la graisse de hérisson ",
                  "Empoisonneur ",
                  "Encordé vous-même ",
                  "Énergumène ",
                  "Enfer et damnation ",
                  "Enfonceur de porte ouverte ",
                  "Enragé ",
                  "Entêté ",
                  "Épouvantail ",
                  "Équilibriste ",
                  "Esclavagiste ",
                  "Escogriffe ",
                  "Escroc ",
                  "Espèce de loup-garou à la graisse de renoncule de mille sabords ",
                  "Espèce de mitrailleur à bavette ",
                  "Espèce de porc-épic mal embouché ",
                  "Extrait d'emplâtre ",
                  "Extrait d'hydrocarbure ",
                  "Extrait de cornichon ",
                  "Face de brute ",
                  "Farceur ",
                  "Fatma de prisunic ",
                  "Faux frère ",
                  "Faux jeton ",
                  "Faux jeton à la sauce tartare ",
                  "Fichu gredin ",
                  "Fieffé menteur ",
                  "Fiston ",
                  "Flibustier ",
                  "Flibustier de carnaval ",
                  "Flûte ",
                  "Forban ",
                  "Fourbe ",
                  "Frère de la côte ",
                  "Froussard ",
                  "Gaillard ",
                  "Galopin ",
                  "Gamin ",
                  "Gangster ",
                  "Garde-côtes à la mie de pain ",
                  "Gargarisme ",
                  "Garnement ",
                  "Gibier de potence ",
                  "Goujat ",
                  "Graine de vaurien ",
                  "Graisse de hérisson ",
                  "Graisse de trombone à coulisse ",
                  "Grand escogriffe ",
                  "Grand lâche ",
                  "Gredin ",
                  "Grenouille ",
                  "Gros-plein-de-soupe ",
                  "Grotesque polichinelle ",
                  "Gyroscope ",
                  "Hérétique ",
                  "Hors-la-loi ",
                  "Hurluberlu ",
                  "Hydrocarbure ",
                  "Iconoclaste ",
                  "Inca de carnaval ",
                  "Individou de général de tonnerre de brest ",
                  "Invertébré ",
                  "Isotope ",
                  "Ivrogne ",
                  "Jet d'eau ambulant ",
                  "Jeune chenapan ",
                  "Jeune impertinent ",
                  "Jocrisse ",
                  "Judas ",
                  "Jus de réglisse ",
                  "Kanak ",
                  "Khroumir ",
                  "Krrtchmvrtz ",
                  "Ku klux klan ",
                  "Lâche ",
                  "Lascar ",
                  "Le diable les emporte ",
                  "Lépidoptère ",
                  "Logarithme ",
                  "Loup-garou à la graisse de renoncule de mille tonnerres de brest ",
                  "Macaque ",
                  "Macrocéphale ",
                  "Malappris ",
                  "Malheur de malheur ",
                  "Malheureuse ",
                  "Malheureux ",
                  "Malotru ",
                  "Mamelouk ",
                  "Maraud ",
                  "Marchand de guano ",
                  "Marchand de tapis ",
                  "Marin d'eau douce ",
                  "Marmotte mal réveillée ",
                  "Maudit ",
                  "Maudite ",
                  "Mazette ",
                  "Mégacycle ",
                  "Mégalomane ",
                  "Mercanti ",
                  "Mercenaire ",
                  "Mérinos ",
                  "Mérinos mal peigné ",
                  "Mes agneaux ",
                  "Migou de malheur ",
                  "Mille milliards de mille millions de mille sabords ",
                  "Mille milliards de mille sabords ",
                  "Mille milliards de mille sabords de tonnerre de brest ",
                  "Mille milliards de tonnerre de brest ",
                  "Mille milliards de... ",
                  "Mille millions de mille milliards de mille sabords ",
                  "Mille millions de mille milliards de mille sabords de tonnerre de brest ",
                  "Mille millions de mille sabords ",
                  "Mille millions de mille sabords de tonnerre de brest ",
                  "Mille millions de sabords ",
                  "Mille millions de tonnerres de brest ",
                  "Mille sabords ",
                  "Mille tonnerres ",
                  "Mille tonnerres de brest ",
                  "Milliards de... ",
                  "Misérable ",
                  "Misérable ectoplasme ",
                  "Misérable ver de terre ",
                  "Mitrailleur à bavette ",
                  "Moratorium ",
                  "Moricaud ",
                  "Morues dans un carton à chapeau ",
                  "Mouchard ",
                  "Moujik ",
                  "Moule à gaufres ",
                  "Moussaillon ",
                  "Moussaillon de malheur ",
                  "Moussaillon du diable ",
                  "Mrkrpxzkrmtfrz ",
                  "Mufle ",
                  "Mussolini de carnaval ",
                  "Naufrageur ",
                  "Négrier ",
                  "Noix de coco ",
                  "Nom d'une pipe ",
                  "Nyctalope ",
                  "Olibrius ",
                  "Ophicléide ",
                  "Ornithorynque ",
                  "Oryctérope ",
                  "Ostrogoth ",
                  "Ours mal léché ",
                  "Pacte à quatre ",
                  "Paltoquet ",
                  "Pantoufle ",
                  "Papou ",
                  "Papou des carpathes ",
                  "Paranoïaque ",
                  "Parasites ",
                  "Particulier ",
                  "Patagon ",
                  "Patagon de zoulou ",
                  "Patapouf ",
                  "Patate ",
                  "Pauvre bougre ",
                  "Pauvre type ",
                  "Peau-rouge ",
                  "Pénultième ",
                  "Père volant ",
                  "Péronnelle ",
                  "Perroquet bavard ",
                  "Perroquet déplumé ",
                  "Petit choléra ",
                  "Petit délicat ",
                  "Petit ornithorynque ",
                  "Petit vaurien ",
                  "Petite tigresse ",
                  "Phénomène ",
                  "Phlébotome ",
                  "Phylactère ",
                  "Phylloxéra ",
                  "Pignouf ",
                  "Pirate ",
                  "Pirate d'eau douce ",
                  "Pirate du ciel ",
                  "Plein le dos ",
                  "Pleurnichard ",
                  "Polichinelle ",
                  "Polygraphe ",
                  "Porc-épic mal embouché ",
                  "Potentat ",
                  "Poussière ",
                  "Profiteur ",
                  "Projectile guidé ",
                  "Protozoaire ",
                  "Pyromane ",
                  "Pyrophore ",
                  "Que diable ",
                  "Que le diable vous étripatouille ",
                  "Que le grand cric me croque ",
                  "Que le grand cric me croque et me fasse avaler ma barbe ",
                  "Que le grrrand crrric me crrroque ",
                  "Rapace ",
                  "Rat ",
                  "Ravachol ",
                  "Renégat ",
                  "Rhizopode ",
                  "Rocaille de tonnerre de brest ",
                  "Rocambole ",
                  "Sacré mitrailleur à bavette ",
                  "Sacripant ",
                  "Sajou ",
                  "Sale bête ",
                  "Sale vilaine bête de tonnerre de brest ",
                  "Saleté d'appareil à sous ",
                  "Saltimbanque ",
                  "Sapajou ",
                  "Sapristi ",
                  "Satané @$%#{ç£] ",
                  "Satrape ",
                  "Sauvage ",
                  "Sauvage d'aérolithe ",
                  "Scélérat ",
                  "Schizophrène ",
                  "Scolopendre ",
                  "Scorpion ",
                  "Serpent ",
                  "Simili-martien à la graisse de cabestan ",
                  "Sinapisme ",
                  "Sinistre farceur ",
                  "Sombre brute ",
                  "Sombre oryctérope ",
                  "Soulographe ",
                  "Sous-produit d'ectoplasme ",
                  "Tas de cornichons ",
                  "Tas de sauvages ",
                  "Tchouk-tchouk-nougat ",
                  "Technocrate ",
                  "Terroriste ",
                  "Tête de lard ",
                  "Tête de mule ",
                  "Têtu comme une mule ",
                  "Tigresse ",
                  "Tonnerre ",
                  "Tonnerre de brest ",
                  "Tonnerre de tonnerre de brest ",
                  "Topinambour ",
                  "Tortionnaire ",
                  "Trafiquant de chair humaine ",
                  "Traîne-potence ",
                  "Traître ",
                  "Tricheur ",
                  "Troglodyte ",
                  "Trompe-la-mort ",
                  "Troufignol ",
                  "Va-nu-pieds ",
                  "Vampire ",
                  "Vandale ",
                  "Vaurien ",
                  "Végétarien ",
                  "Ver de terre ",
                  "Vercingétorix de carnaval ",
                  "Vermicelles ",
                  "Vermine ",
                  "Vieille baderne ",
                  "Vieille branche ",
                  "Vieille coque rouillée ",
                  "Vieille marmotte ",
                  "Vieille perruche bavarde ",
                  "Vieux cachalot ",
                  "Vieux cornichon ",
                  "Vieux farceur ",
                  "Vieux frère ",
                  "Vieux rafiot que je suis ",
                  "Vipère ",
                  "Vivisectionniste ",
                  "Volatile de malheur ",
                  "Voleur ",
                  "Voleur d'enfants ",
                  "Vous travaillez de l'électron ",
                  "Wisigoths ",
                  "Zapotèques ",
                  "Zèbre ",
                  "Zigomar ",
                  "Zouave ",
                  "Zouave à la noix de coco ",
                  "Zouave interplanétaire ",
                  "Zoulou"
            ];
            var newbordee = "";
            var newtaille = newjurons.length;
            var newminNbinjures = 3;
            var newmaxNbinjures = 7;
            var newNbinjures = Math.floor(Math.random()*(newmaxNbinjures-newminNbinjures))+newminNbinjures;

            for(i=0; i<newNbinjures; i++){
                  var newcle=Math.floor(Math.random()*newtaille);
                  var newinjureselected=newjurons[newcle];
                  newbordee += newinjureselected+' ! ';  
            }
            var newbordeeresult = newbordee;
          return newbordeeresult;
      };

      $scope.add = function() {
            var nextreize = new Date().setHours(12,35,00);
            treizeam = new Date(nextreize);
          
            var now = new Date();
            
            if(now <= treizeam){
                $cordovaLocalNotification.schedule({
                  message: $scope.bordee(),
                  title: "Capitaine Haddock",
                  firstAt: treizeam,
                  every: 'minute'
                }).then(function () {
                      console.log("The notification has been set");
                      alert('Vous recevrez une alerte tous les jours à 13h');
                      $scope.activation=true;
                });
            }else{
                treizeam = new Date(nextreize + 24*60*60*1000);
                $cordovaLocalNotification.schedule({
                  message: $scope.bordee(),
                  title: "Capitaine Haddock",
                  firstAt: treizeam,
                  every: 'minute'
                }).then(function () {
                      console.log("The notification has been set");
                      alert('Vous recevrez une alerte tous les jours à 13h');
                      $scope.activation=true;
                });
            }
      };
    
    $scope.isScheduled = function() {
          $cordovaLocalNotification.isScheduled().then(function(isScheduled) {
              $scope.activation=isScheduled;
          });
        
            /*if($cordovaLocalNotification.every =="day"){
                $scope.activation=true;
            }*/
      };
    
    $scope.desactiver = function(){
      $cordovaLocalNotification.cancelAll().then(function(cancelAll){
          alert('Vous venez de désactiver les notifications journalières');
          $scope.activation = false;
      }); 
    };
    // Au chargement de l'application, on vérifie la programmation des notifications
    angular.element(document).ready(function () {
        $scope.isScheduled();
    });
})

//Routage de l'application
.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      $stateProvider.state('main', {
      url: '/',
      templateUrl: 'main.html'
      });

      $stateProvider.state('savoir', {
      url: '/savoir',
      templateUrl: 'savoir.html'
      });
    
      $stateProvider.state('liens', {
        url: '/liens',
        templateUrl: 'liens.html'
      });

      $stateProvider.state('recherche', {
        url: '/recherche',
        templateUrl: 'recherche.html'
      });

      $stateProvider.state('disclaimer', {
        url: '/disclaimer',
        templateUrl: 'disclaimer.html'
      });

      $stateProvider.state('menuinfos', {
        url: '/menuinfos',
        templateUrl: 'menuinfos.html'
      });

      $stateProvider.state('contacts', {
        url: '/contacts',
        templateUrl: 'contacts.html'
      });

      $stateProvider.state('credits', {
        url: '/credits',
        templateUrl: 'credits.html'
      });
    
      $stateProvider.state('uneparjour', {
        url: '/uneparjour',
        templateUrl: 'uneparjour.html'
      });
});