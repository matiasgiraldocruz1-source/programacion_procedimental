    function guardarDatos(){

      let ventas = document.getElementById('ventas').value;
      let fecha = document.getElementById('fecha').value;
      let ingresos = document.getElementById('ingresos').value;
      let egresos = document.getElementById('egresos').value;
      let concepto = document.getElementById('concepto').value;
      let valor = document.getElementById('valor').value;

      document.getElementById('resultado').innerHTML = `
        <div class="resultado">
          ✅ Registro guardado correctamente <br><br>
          📅 ${fecha} <br>
          💰 Ingresos: ${ingresos} <br>
          📉 Egresos: ${egresos} <br>
          📝 ${concepto} <br>
          💵 Valor: ${valor}
        </div>
      `;
    }