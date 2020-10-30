$(document).ready(function () {
  const playGame = () => {
    let scores = [];
    let totalScore = 0;
    count = 0;
    $(".btn-roll").click(function () {
      count++;

      const dice = Math.floor(Math.random() * 6) + 1;
      scores.push(dice);
      $(".dice-value").text(dice);
      $(".dice-image").attr("src", "img/dice/dice-" + dice + ".png");

      if (count == 5) {
        $(".btn-roll").attr("class", "disabled");
        console.log(scores);
        for (i = 0; i < scores.length; i++) {
          totalScore += scores[i];
        }
        $(".total-score").text(totalScore);
        $(".btn-reset").attr("class", "btn btn-reset");
      }

      if (totalScore == 25) {
        $(".result").text("Winner!");
      }
    });
  };

  playGame();

  $(".btn-reset").click(function () {
    $(".result").text("");
    $(".total-score").text(0);
    $(".disabled").attr("class", "btn btn-roll");
    $(".btn-roll").click(function () {
      playGame();
    });
  });
});
