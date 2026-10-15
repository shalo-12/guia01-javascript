# Guía 01 — Fundamentos de JavaScript | Desarrollo de Interfaces 1
**Docente:** Mg. Enrique A. Stolar Sirlupú · **IDAT**

## Objetivo
Aplicar `let`, `const`, tipos de datos, `typeof`, conversiones con `Number()` y operaciones básicas, trabajando en archivos JavaScript independientes. La práctica sigue los contenidos de la sesión 3.

## Cómo empezar
1. Abre el enlace del repositorio plantilla compartido por el docente.
2. Selecciona **Use this template → Create a new repository** (configura visibilidad público si está disponible).
3. Abre tu repositorio en **Code → Codespaces → Create codespace on main** o clónalo en VS Code con Node.js instalado.
4. En la carpeta `ejercicios`, completa cada archivo reemplazando `TODO` por tus instrucciones JavaScript; **no cambies nombres de archivos ni nombres de variables pedidos**.
5. En la terminal ejecuta `npm test`. La primera ejecución, sin respuestas, debe mostrar pruebas fallidas: es normal.
6. Guarda y realiza **Commit** y **Push**. Revisa la pestaña **Actions** de tu repositorio para ver el estado de las pruebas.
7. Comparte el enlace a tu repositorio con el docente por el aula virtual.

## Ejercicios (de menor a mayor dificultad)

### 1. Perfil del estudiante
Archivo: `ejercicios/01-perfil.js`. Declara const nombre (texto), let edad (número), const instituto (texto) y let matriculado (booleano). Muestra una oración con console.log.

### 2. Variables que cambian
Archivo: `ejercicios/02-reasignacion.js`. Declara let saldoInicial = 100, let deposito = 50 y let saldoFinal. Calcula saldoFinal y muestra el resultado. No cambies los valores iniciales.

### 3. Identifica tipos
Archivo: `ejercicios/03-tipos.js`. Declara const precio=29.90, const titulo="JavaScript", const disponible=true y const pendiente=null. Declara tipoPrecio, tipoTitulo y tipoDisponible utilizando typeof.

### 4. Cuando sumar no es concatenar
Archivo: `ejercicios/04-conversion.js`. Declara const cantidadTexto="10", const extraTexto="5". Obtén let totalNumero convirtiendo ambos textos a números. Debe ser el número 15.

### 5. Boleta de compra
Archivo: `ejercicios/05-boleta.js`. Declara const producto="Cuaderno", const precioUnitario=12.5, const cantidad=3. Calcula subtotal y crea mensajeBoleta que incluya producto y total.

### 6. Cálculo de IGV
Archivo: `ejercicios/06-igv.js`. Declara const subtotal=100, const TASA_IGV=0.18. Calcula igv y totalPagar, muestra el total.

### 7. Calculadora de propina
Archivo: `ejercicios/07-propina.js`. Declara const montoTexto="80.50", const porcentajeTexto="10". Convierte ambos a Number; calcula propina y totalConPropina (monto + propina).

### 8. Presupuesto estudiantil
Archivo: `ejercicios/08-presupuesto.js`. Declara const presupuestoTexto="150", const transporteTexto="25.50", const alimentacionTexto="40". Convierte cada valor y calcula saldoDisponible después de ambos gastos.

## Reglas de la práctica
- Resuelve individualmente; puedes consultar los apuntes y el material de clase.
- Utiliza `let`, `const`, `typeof`, `Number()`, cálculos y `console.log()`.
- No se necesitan condicionales, bucles, funciones, clases, HTML ni CSS en esta guía.
- **No modifiques `tests/`, `.github/workflows/` ni `package.json`.**
- No copies soluciones de otros compañeros. Comenta brevemente qué hace tu código.

## Resultados de referencia
- Ej. 2: saldo final 150.
- Ej. 4: resultado numérico 15, no la cadena «105».
- Ej. 5: subtotal S/ 37.50.
- Ej. 6: IGV S/ 18 y total S/ 118.
- Ej. 7: propina S/ 8.05 y total S/ 88.55.
- Ej. 8: saldo restante S/ 84.50.

## Sobre la evaluación
Las pruebas ayudan a verificar resultados, pero **no sustituyen la revisión docente** de legibilidad, autoría y explicación. El estado verde de Actions solo indica que las pruebas automatizadas pasaron.
