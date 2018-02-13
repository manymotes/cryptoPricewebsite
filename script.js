$(document).ready(function() {
  $("#eth").click(function(e) {
  		e.preventDefault();
  		var value = $("#weatherInput").val();
  	    console.log("ether Clicked");


        var myurl2= "https://api.coinmarketcap.com/v1/ticker/ethereum/";

				$.ajax({
					url : myurl2,
					dataType2 : "json",
					success : function(JSON2) {
						console.log(JSON2);
					//	JSON2 = JSON2.parse(JSON2);
						var result2 = "<p>";
						result2 += "Ethereum: $" + JSON2[0].price_usd

						$("#stackResults").appendTo('div');
						document.getElementById("output").innerHTML = "";
	          $("div").append(result2);
					}
				});
      });




    $("#bit").click(function(e) {
        e.preventDefault();
        var value = $("#weatherInput").val();
          console.log("bit  Clicked");

          var myurl= "https://api.coinmarketcap.com/v1/ticker/bitcoin/";
				//var myurl2= "https://api.coindesk.com/v1/bpi/currentprice.json";
				$.ajax({
					url : myurl,
					dataType2 : "json",
					success : function(JSON) {
						console.log(JSON);
						//JSON = JSON.parse(JSON);
						var result2 = "<p>";
						result2 += "Bitcoin: $" + JSON[0].price_usd

						$("#stackResults").appendTo('div');
						document.getElementById("output").innerHTML = "";
	          $("div").append(result2);
					}
				});

        });
});
