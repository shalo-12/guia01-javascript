const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
function ejecutar(nombre, variables) {
  const ruta = path.join(__dirname, '..', 'ejercicios', nombre);
  const codigo = fs.readFileSync(ruta, 'utf8');
  const salida = [];
  const entorno = { console: {log: (...args) => salida.push(args.join(' '))} };
  const resultado = vm.runInNewContext(`${codigo}\n;[${variables.map(v=>`typeof ${v} === 'undefined' ? undefined : ${v}`).join(',')}]`, entorno, {timeout:1000});
  return {valores:Object.fromEntries(variables.map((v,i)=>[v,resultado[i]])), salida};
}
function ejercicio(nombre,vars,verificar){test(nombre,()=>{const r=ejecutar(nombre,vars);verificar(r.valores,r.salida);});}
ejercicio('01-perfil.js',['nombre','edad','instituto','matriculado'],(v,s)=>{assert.equal(typeof v.nombre,'string');assert.equal(typeof v.edad,'number');assert.equal(typeof v.instituto,'string');assert.equal(typeof v.matriculado,'boolean');assert.ok(s.length>0);});
ejercicio('02-reasignacion.js',['saldoInicial','deposito','saldoFinal'],(v,s)=>{assert.equal(v.saldoInicial,100);assert.equal(v.deposito,50);assert.equal(v.saldoFinal,150);assert.ok(s.length>0);});
ejercicio('03-tipos.js',['precio','titulo','disponible','pendiente','tipoPrecio','tipoTitulo','tipoDisponible'],(v)=>{assert.equal(v.precio,29.9);assert.equal(v.titulo,'JavaScript');assert.equal(v.disponible,true);assert.equal(v.pendiente,null);assert.equal(v.tipoPrecio,'number');assert.equal(v.tipoTitulo,'string');assert.equal(v.tipoDisponible,'boolean');});
ejercicio('04-conversion.js',['cantidadTexto','extraTexto','totalNumero'],(v)=>{assert.equal(v.cantidadTexto,'10');assert.equal(v.extraTexto,'5');assert.equal(v.totalNumero,15);assert.equal(typeof v.totalNumero,'number');});
ejercicio('05-boleta.js',['producto','precioUnitario','cantidad','subtotal','mensajeBoleta'],(v)=>{assert.equal(v.producto,'Cuaderno');assert.equal(v.precioUnitario,12.5);assert.equal(v.cantidad,3);assert.equal(v.subtotal,37.5);assert.ok(String(v.mensajeBoleta).includes('Cuaderno'));assert.ok(String(v.mensajeBoleta).includes('37.5'));});
ejercicio('06-igv.js',['subtotal','TASA_IGV','igv','totalPagar'],(v,s)=>{assert.equal(v.subtotal,100);assert.equal(v.TASA_IGV,0.18);assert.ok(Math.abs(v.igv-18)<1e-8);assert.ok(Math.abs(v.totalPagar-118)<1e-8);assert.ok(s.length>0);});
ejercicio('07-propina.js',['montoTexto','porcentajeTexto','propina','totalConPropina'],(v)=>{assert.equal(v.montoTexto,'80.50');assert.equal(v.porcentajeTexto,'10');assert.ok(Math.abs(v.propina-8.05)<1e-8);assert.ok(Math.abs(v.totalConPropina-88.55)<1e-8);});
ejercicio('08-presupuesto.js',['presupuestoTexto','transporteTexto','alimentacionTexto','saldoDisponible'],(v)=>{assert.equal(v.presupuestoTexto,'150');assert.equal(v.transporteTexto,'25.50');assert.equal(v.alimentacionTexto,'40');assert.ok(Math.abs(v.saldoDisponible-84.5)<1e-8);});
