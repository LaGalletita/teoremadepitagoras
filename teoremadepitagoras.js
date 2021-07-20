function teorpit(h, a, b,) {
	switch (prompt("Elegir opción: \n 1. Calcular hipotenusa \n 2. Calcular cateto a \n 3. Calcular cateto b")) {
		case "1": {
			a = Number(prompt("Valor del cateto a"));
			b = Number(prompt("Valor del cateto b"));
			resultado = Math.sqrt(a**2 + b**2).toFixed(2);
			h = alert("Tú resultado es " + resultado);
			break;
		}

		case "2": {
			b = Number(prompt("Valor del cateto b"));
			h = Number(prompt("Valor de la hipotenusa"));
			if (b > h) {
				alert("La hipotenusa siempre es mayor que los catetos");
				break;
			}
			resultado = Math.sqrt(h**2 - b**2).toFixed(2);
			a = alert(resultado);
			break;
		}

		case "3": {
			a = Number(prompt("Valor del cateto a"));
			h = Number(prompt("Valor de la hipotenusa"));
			if (a > h) {
				alert("La hipotenusa siempre es mayor que los catetos");
				break;
			}

			resultado= Math.sqrt(h**2 - a**2).toFixed(2);
			b = alert(resultado);
			break;
		}
	}
}

