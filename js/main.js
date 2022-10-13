  function toReset() {
        let min = document.getElementById("num1");
        let max = document.getElementById("num2");
		max = Number.parseInt(max.value)
        min = Number.parseInt(min.value)
		console.log(min)
		if((max == undefined || max == null || isNaN(max) == true || typeof(max) == "String") || (min == undefined || min == null || isNaN(min) == true || typeof(min) == "String")) {
		window.alert("Insira um valor numeral para os valores máximos e mínimos!")
		}
		else {
		if (max < min) {
			window.alert("O valor máximo não deve ser menor que o mínimo!")
		}
		else {
		if (max > 999 || max < -999) {
			window.alert("O valor máximo não deve ser menor que -999 ou maior que 999")
		}
		else if(min > 999 || min < -999) {
			window.alert("O valor mínimo não deve ser menor que -999 ou maior que 999")
		}
		else {
		function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function test() {
	let img = document.getElementById("img-1");
	img.style.opacity = "100%";
	await delay(100);
	let sort = Math.floor(Math.random() * ((max + 1) - min) + min);
    let resultado1 = document.getElementById("resultado-1");
	resultado1.innerHTML = sort;
	resultado1.style.display = "inline-block";  await delay(1000);
	await delay(100);
	sort = Math.floor(Math.random() * ((max + 1) - min) + min);
	let resultado2 = document.getElementById("resultado-2");
	resultado2.innerHTML = sort;
	resultado2.style.display = "inline-block";
	await delay(700);
	sort = Math.floor(Math.random() * ((max + 1) - min) + min);
	let resultado3 = document.getElementById("resultado-3");
	resultado3.innerHTML = sort;
	resultado3.style.display = "inline-block";
	await delay(800);
	sort = Math.floor(Math.random() * ((max + 1) - min) + min);
	let resultado4 = document.getElementById("resultado-4");
	resultado4.innerHTML = sort;
	resultado4.style.display = "inline-block";
	await delay(900);
	sort = Math.floor(Math.random() * ((max + 1) - min) + min);
	let resultado5 = document.getElementById("resultado-5");
	resultado5.innerHTML = sort;
	resultado5.style.display = "inline-block";
	await delay(1000);
	sort = Math.floor(Math.random() * ((max + 1) - min) + min);
	let resultado6 = document.getElementById("resultado-6");
	resultado6.innerHTML = sort;
	resultado6.style.display = "inline-block";
	await delay(500);
	img.style.opacity = "0%";
}

test();
		/*let sort = Math.floor(Math.random() * ((max + 1) - min) + min);
        let resultado1 = document.getElementById("resultado-1");
		resultado1.innerHTML = sort;
		resultado1.style.display = "inline-block";
		sort = Math.floor(Math.random() * ((max + 1) - min) + min);
		let resultado2 = document.getElementById("resultado-2");
		resultado2.innerHTML = sort;
		resultado2.style.display = "inline-block";
		sort = Math.floor(Math.random() * ((max + 1) - min) + min);
		let resultado3 = document.getElementById("resultado-3");
		resultado3.innerHTML = sort;
		resultado3.style.display = "inline-block";
		sort = Math.floor(Math.random() * ((max + 1) - min) + min);
		let resultado4 = document.getElementById("resultado-4");
		resultado4.innerHTML = sort;
		resultado4.style.display = "inline-block";
		sort = Math.floor(Math.random() * ((max + 1) - min) + min);
		let resultado5 = document.getElementById("resultado-5");
		resultado5.innerHTML = sort;
		resultado5.style.display = "inline-block";
		sort = Math.floor(Math.random() * ((max + 1) - min) + min);
		let resultado6 = document.getElementById("resultado-6");
		resultado6.innerHTML = sort;
		resultado6.style.display = "inline-block";*/
      }
	  }
	  }
	  }
	