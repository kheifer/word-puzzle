$(document).ready(function(){
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var vowels = ['a','e','i','o','u','A','E','I','O','U']
    var input = $("#words").val();
    var result=[];

    for(i=0;i<=input.length;i++){
      if (vowels.includes(input.charAt(i))) {
        result += "-";
      }else {
        result += input.charAt(i);
      }
    };

    alert(result);
    $("#results").append(result);
    $(".output").show();
    $("#formOne").hide();
  });

});

  //   $(document).ready(function(){
  // $("#formOne").submit(function (event) {
  //   event.preventDefault();
  //   var vowels = ['a','e','i','o','u','A','E','I','O','U']
  //   var input = $("#words").val();
  //   var bank = input.split('');
  //
  //   for(i=0;i<=bank.length;i++){
  //     if (vowels.includes(input.charAt(i))) {
  //       bank[i] = "-";
  //     }
  //   }
  //
  //
  //   var result = bank.join('');
  //   $(".output").show();
  //   $("#result").text(result);


      //  var userInput = $("#user-input").val();
      //  var vowelIndex = [];
      //  var result = "";
      //  for (i=0; i<=userInput.length-1; i++){
       //
      //    if (vowels.includes(userInput.charAt(i))) {
      //      vowelIndex.push(i)
      //      result += "-"
      //    } else {
      //      result += userInput.charAt(i);
      //    }
      //    };
      //    $('#user-form').trigger('reset');
      //    alert(result);



  //   for (i=0;i<=vowels.length;i++){
  //
  //
  //
  //     for (j=0;j<=bank.length;j++){
  //       if (bank[j] === vowels[i]) {
  //         final.pop("-");
  //       } else {
  //         final.pop(bank[j]);
  //       }
  //   }
  // }
