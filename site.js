/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title:"IMDB + Hardav's Top 8 Movies",
            owner: "Hardav",
            github:"https://github.com/hpandya837/Njit-2nd-project",
         
      }
    },
    methods: {
      /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      getMonthText: function (dateArray) {
        const year = dateArray[0]
        const day = dateArray[2]
        let monthText = " ";
        switch (dateArray[1]) {
          case 1:
            monthText = "January";
            break;
          case 2:
            monthText = "February";
            break;
          case 3:
            monthText = "March";
            break;
          case 4:
            monthText = "April";
            break;
          case 5:
            monthText = "May";
            break;
          case 6:
            monthText = "June";
            break;
          case 7:
            monthText = "July";
            break;
          case 8:
            monthText = "August";
            break;
          case 9:
            monthText = "September";
            break;
          case 10:
            monthText = "October";
            break;
          case 11:
            monthText = "November";
            break;
            case 12:
            monthText = "December";
            break;
          default:
            monthText = "Invalid";
        }
        return `${monthText} ${day}, ${year}`;
      },

      getPosterIndex: function(currentIndex,posters){
        return (currentIndex % posters.lenght) +1;
      }
      
  
    },
  });
  

vue_app.mount("#vue_app")
