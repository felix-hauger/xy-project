// Creation compte a rebours

"use strict"

let counter = 30;
let intervalId = null;
let action = function(){
  clearInterval(intervalId);
  document.getElementById("tictac").innerHTML = "TERMINE!";
  document.getElementById("start").style.visibility="visible";
  document.getElementById("xmas").style.visibility="hidden";
  document.getElementById("start").disabled=false;
}

let bip = function(){
  document.getElementById("tictac").innerHTML = counter + " <br/>secondes restantes";
  counter--;
}
let start = function(){
  document.getElementById("start").style.visibility="hidden";
  document.getElementById("xmas").style.visibility="visible";
  intervalId = setInterval(bip, 1000);
  setTimeout(action, counter * 1000);
}

// Creation du Timeur

const countdownController = {
    // Configuration
    targetTime: new Date('2017-12-25 00:00:00'), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        day:  0,
        hour: 0,
        min:  0,
        sec:  0
    },

    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        let timeNow  = new Date();

        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        if( timeNow > this.targetTime ){
            timeNow = this.targetTime;
        }

        // Calcul du temps restant
        let diff = this.dateDiff(timeNow, this.targetTime);
        this.modifDom(diff);
        this.displayElement.day.text = diff.day;
        this.displayElement.hour.text = diff.hour;
        this.displayElement.min.text = diff.min;
        this.displayElement.sec.text = diff.sec;

        return this;

    },

    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        this.displayElement.day  = document.getElementById('countdown_day');
        this.displayElement.hour = document.getElementById('countdown_hour');
        this.displayElement.min  = document.getElementById('countdown_min');
        this.displayElement.sec  = document.getElementById('countdown_sec');
        console.log(this.displayElement);
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownController.tick();", 1000);
        // Ticks suivant, répété toutes les secondes (1000 ms)
        console.log(this.tick());
    },


    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
        let diff = {};                         // Initialisation du retour
        let tmp = date2 - date1;

        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
        //console.log(diff);
        return diff;

    },
    modifDom: function(diff) {
      document.getElementById('countdown_day').innerText = diff.day;
      document.getElementById('countdown_hour').innerText = diff.hour;
      document.getElementById('countdown_min').innerText = diff.min;
      document.getElementById('countdown_sec').innerText = diff.sec;
    }

};

    // Lancement du compte à rebours au chargement de la page
     document.addEventListener("DOMContentLoaded", countdownController.init());
