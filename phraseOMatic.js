// JaveScript Array Practice
    function phraseOMatic() {
      var words1 = ["World's Best", "World's Worst", "30,000 foot", "light-speed", "win-win", "constipated", "hugemongous"];
      var words2 = ["400lb", "melted", "grubby", "woke", "aligned", "cheesy", "dilapodated", "nefarious"];
      var words3 = ["process", "solution", "tipping-point", "strategy", "vision", "disaster", "baby", "E-girl", "OnlyFan"];

      // calculates a random integer from 0-length of the array
      // good for scaling!
      var rand1 = Math.floor(Math.random() * words1.length);
      var rand2 = Math.floor(Math.random() * words2.length);
      var rand3 = Math.floor(Math.random() * words3.length);

      // concatenates the selected word from each array
      var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
      console.log(phrase);
    }  