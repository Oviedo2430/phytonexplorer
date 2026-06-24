export const MISSIONS = [
  {
    id: 1, emoji: '🚀', title: 'Despegue', subtitle: 'Tus primeros comandos',
    weeks: 'Semanas 1–2',
    description: 'Aprendes a hablar con el ordenador. Le das órdenes y él obedece.',
    tools: ['Python instalado', 'Editor de código aquí abajo'],
    lessons: [
      {
        title: 'print() — Hacer que Python hable',
        objetivo: 'Hacer que Python muestre texto en pantalla.',
        concepto: `print() es la forma de decirle a Python que escriba algo.\nLo que pongas entre las comillas ("...") aparecerá en pantalla.\nPuedes usar print() tantas veces como quieras.`,
        ejemplo: `# Este código ya funciona. Ejecútalo y observa.\nprint("Hola, soy Python")\nprint("Estoy aprendiendo a programar")\nprint("Esto es una línea nueva")`,
        tarea: `# TU TURNO: Cambia los textos entre comillas\n# Línea 1: Escribe tu nombre\nprint("Hola, me llamo ___")\n\n# Línea 2: Escribe tu planeta favorito\nprint("Mi planeta favorito es ___")\n\n# Línea 3: Escribe cualquier cosa\nprint("___")`,
        reto: `# RETO: Dibuja una nave con caracteres\nprint("    /\\\\")\nprint("   /  \\\\")\nprint("  / 🚀 \\\\")\nprint(" /______\\\\")\nprint("   |  |")\n# Modifica el dibujo o crea el tuyo`,
      },
      {
        title: 'Variables — Guardar información',
        objetivo: 'Guardar un valor en memoria para usarlo después.',
        concepto: `Una variable es como una caja con nombre.\nPuedes guardar algo dentro y abrirla cuando la necesites.\n\n  nombre = "Mateo"   → guarda el texto "Mateo"\n  edad = 12          → guarda el número 12\n\nPara ver qué hay dentro: print(nombre)`,
        ejemplo: `# Observa cómo se crean y usan las variables\nplaneta = "Marte"\ndistancia = 225\n\nprint("Planeta:", planeta)\nprint("Distancia:", distancia, "millones de km")`,
        tarea: `# TU TURNO: Crea tus propias variables\n\n# 1. Tu nombre\nnombre = "___"\n\n# 2. Tu edad\nedad = ___\n\n# 3. Tu planeta favorito\nplaneta_favorito = "___"\n\n# 4. Muéstralas con print()\nprint("Me llamo", nombre)\nprint("Tengo", edad, "años")\nprint("Mi planeta favorito es", planeta_favorito)`,
        reto: `# RETO: Las variables se pueden cambiar\npuntos = 0\nprint("Puntos al inicio:", puntos)\n\npuntos = puntos + 10\nprint("Después de recoger estrella:", puntos)\n\npuntos = puntos + 25\nprint("Después de completar misión:", puntos)\n\n# Añade una línea que sume 50 puntos más`,
      },
      {
        title: 'input() — Hacer preguntas',
        objetivo: 'Hacer que Python le pregunte algo al usuario y use la respuesta.',
        concepto: `input() hace una pausa y espera que el usuario escriba.\nLo que escriba queda guardado en una variable.\n\n  nombre = input("¿Cómo te llamas? ")\n\n1. Aparece el mensaje entre comillas\n2. El usuario escribe y pulsa Enter\n3. Python guarda la respuesta en "nombre"`,
        ejemplo: `# Ejecuta esto y escribe tu nombre cuando te lo pida\nnombre = input("¿Cómo te llamas? ")\nprint("¡Hola,", nombre, "!")\nprint("Bienvenido a la base espacial.")`,
        tarea: `# TU TURNO: Programa que hace 2 preguntas\n\n# 1. Pregunta el nombre\nnombre = input("¿Cuál es tu nombre de agente? ")\n\n# 2. Pregunta su planeta favorito\nplaneta = input("¿Cuál es tu planeta favorito? ")\n\n# 3. Muestra un mensaje con las dos respuestas\nprint("Agente", nombre, "— destino:", planeta)\nprint("¡Misión iniciada!")`,
        reto: `# RETO: input() devuelve texto, int() lo convierte a número\nedad_texto = input("¿Cuántos años tienes? ")\nedad = int(edad_texto)\naño_nacimiento = 2026 - edad\n\nprint("Naciste aproximadamente en", año_nacimiento)\nprint("A los 18 años será el", año_nacimiento + 18)`,
      },
      {
        title: 'Números y operaciones',
        objetivo: 'Usar Python como calculadora con los operadores básicos.',
        concepto: `Operadores en Python:\n  +   suma          5 + 3   → 8\n  -   resta         10 - 4  → 6\n  *   multiplicar   6 * 7   → 42\n  /   dividir       15 / 2  → 7.5\n  **  potencia      2 ** 8  → 256\n  //  división entera  7 // 2  → 3\n  %   resto         7 % 2   → 1`,
        ejemplo: `# Observa los resultados\nprint("5 + 3 =",  5 + 3)\nprint("10 - 4 =", 10 - 4)\nprint("6 * 7 =",  6 * 7)\nprint("15 / 2 =", 15 / 2)\nprint("2 ** 8 =", 2 ** 8)\nprint("7 // 2 =", 7 // 2)\nprint("7 % 2 =",  7 % 2)`,
        tarea: `# TU TURNO: Cálculos espaciales\n\n# Un año tiene 365 días. ¿Cuántas horas?\nhoras = 365 * ___\nprint("Un año tiene", horas, "horas")\n\n# Marte tarda 687 días. ¿Cuántos años terrestres?\naños_marte = 687 / ___\nprint("Año en Marte:", años_marte, "años terrestres")\n\n# Luz: 300,000 km/s. ¿Km en un minuto?\nkm_minuto = 300000 * ___\nprint("Luz en 1 minuto:", km_minuto, "km")`,
        reto: `# RETO: Calculadora de viaje espacial\n# La ISS viaja a 28,000 km/h\n\nvelocidad = 28000\ndistancia_luna = 384400\n\nhoras = distancia_luna / velocidad\nprint("Horas hasta la Luna:", round(horas, 1))\n\ndias = horas / 24\nprint("Días hasta la Luna:", round(dias, 1))\n\n# ¿Cuánto hasta Marte? (225,000,000 km)\n# Escribe el código aquí:`,
      },
    ],
    project: {
      name: '🤖 Bot presentador espacial',
      desc: '✏️ Cambia las variables en las líneas 3, 4 y 5 con tus datos. Luego ejecuta.',
      code: `# ✏️ CAMBIA ESTOS VALORES POR LOS TUYOS:
nombre  = "Explorador"    # ← escribe tu nombre aquí
edad    = "12"            # ← escribe tu edad aquí
planeta = "Marte"         # ← escribe tu planeta favorito

# No cambies nada de aquí abajo
print()
print("╔══════════════════════════════╗")
print("║    BASE ESPACIAL ALFA-7      ║")
print("╠══════════════════════════════╣")
print("║  Nombre  :", nombre)
print("║  Edad    :", edad, "años")
print("║  Destino :", planeta)
print("║  Estado  : ACTIVO 🟢")
print("╚══════════════════════════════╝")
print()
print("Bienvenido a la misión, agente", nombre)`,
    },
  },
    {
    id: 2, emoji: '🧱', title: 'Bloques de construcción', subtitle: 'Decisiones y repetición',
    weeks: 'Semanas 3–4',
    description: 'Python puede tomar decisiones y repetir cosas. Como los bloques de Minecraft.',
    tools: ['Lo mismo de antes'],
    lessons: [
      {
        title: 'if / else — Tomar decisiones',
        objetivo: 'Hacer que Python tome decisiones según una condición.',
        concepto: `if significa "si". else significa "si no".\n\n  if condición:\n      # pasa si es verdadera\n  else:\n      # pasa si es falsa\n\nOperadores:\n  >   mayor que\n  <   menor que\n  ==  igual (dos signos)\n  !=  diferente\n\n⚠️ Los espacios al inicio son obligatorios.`,
        ejemplo: `vida = 10\n\nif vida > 0:\n    print("🟢 Jugador vivo")\n    print("Vida restante:", vida)\nelse:\n    print("💀 Game over")\n\n# Cambia vida = 0 y ejecuta de nuevo`,
        tarea: `# TU TURNO: Sistema de acceso a la nave\ncontrasena = input("Introduce la contraseña: ")\n\nif contrasena == "cosmos":\n    print("✅ Acceso concedido. Bienvenido, comandante.")\nelse:\n    print("❌ Contraseña incorrecta.")`,
        reto: `# RETO: elif permite más de dos opciones\npuntos = int(input("¿Cuántos puntos tienes? "))\n\nif puntos >= 100:\n    print("🏆 Rango: Comandante Estelar")\nelif puntos >= 50:\n    print("🥈 Rango: Piloto Espacial")\nelif puntos >= 20:\n    print("🥉 Rango: Cadete")\nelse:\n    print("🔰 Rango: Novato")\n\n# Prueba con diferentes números`,
      },
      {
        title: 'for — Repetir un número de veces',
        objetivo: 'Repetir una acción un número exacto de veces.',
        concepto: `for repite para cada elemento de una secuencia.\n\n  for i in range(5):\n      print(i)\n\nImprime: 0, 1, 2, 3, 4\n\nrange(1, 6)      → del 1 al 5\nrange(10, 0, -1) → del 10 al 1`,
        ejemplo: `for i in range(5):\n    print("Repetición número", i)\n\nprint("---")\n\nfor numero in range(1, 6):\n    print("Bloque", numero, "colocado ✓")\n\nprint("¡Construcción completada!")`,
        tarea: `# TU TURNO: Cuenta regresiva de lanzamiento\n# range puede ir hacia atrás: range(10, 0, -1)\n\nfor i in range(10, 0, -1):\n    print(i, "...")\n\nprint("🚀 ¡DESPEGUE!")`,
        reto: `# RETO: Tabla de multiplicar\nnumero = int(input("¿De qué número? "))\n\nprint(f"\\n📊 Tabla del {numero}:")\nprint("─" * 20)\n\nfor i in range(1, 11):\n    resultado = numero * i\n    print(f"  {numero} × {i:2} = {resultado}")`,
      },
      {
        title: 'while — Repetir hasta que algo cambie',
        objetivo: 'Repetir mientras una condición sea verdadera.',
        concepto: `while repite mientras la condición sea True.\n\n  while condición:\n      # se repite\n\n⚠️ Si la condición nunca cambia → bucle infinito.\nSiempre cambia algo dentro del while.\n\nDiferencia:\n  for   → sabes cuántas veces\n  while → hasta que algo cambie`,
        ejemplo: `puntos = 0\n\nwhile puntos < 50:\n    puntos = puntos + 10\n    print("Puntos:", puntos)\n\nprint("🏆 ¡Llegaste a 50 puntos!")`,
        tarea: `# TU TURNO: Adivina el número secreto\nimport random\n\nsecreto = random.randint(1, 10)\nintentos = 0\n\nwhile True:\n    intento = int(input("Adivina (1-10): "))\n    intentos += 1\n\n    if intento == secreto:\n        print(f"✅ ¡Correcto! Era el {secreto}")\n        print(f"Intentos: {intentos}")\n        break\n    elif intento < secreto:\n        print("📈 Es mayor")\n    else:\n        print("📉 Es menor")`,
        reto: `# RETO: Simulador de oxígeno\nimport random\n\noxigeno = 100\nturno = 0\n\nwhile oxigeno > 0:\n    turno += 1\n    consumo = random.randint(5, 15)\n    oxigeno = max(0, oxigeno - consumo)\n    print(f"Turno {turno}: Oxígeno = {oxigeno}%")\n    if oxigeno <= 20 and oxigeno > 0:\n        print("⚠️ ¡Alerta crítica!")\n\nprint(f"\\n💀 Agotado en turno {turno}")`,
      },
      {
        title: 'Listas — Guardar varios valores',
        objetivo: 'Guardar varios elementos en una sola variable.',
        concepto: `Una lista guarda varios elementos en orden.\n\n  inventario = ["espada", "antorcha", "manzana"]\n\nAcceder por posición (empieza en 0):\n  inventario[0]  → "espada"\n  inventario[-1] → el último\n\nOperaciones:\n  len(lista)         → cuántos hay\n  lista.append(cosa) → añadir\n  lista.remove(cosa) → eliminar\n  cosa in lista      → True/False`,
        ejemplo: `planetas = ["Mercurio", "Venus", "Tierra", "Marte"]\n\nprint("Primero:", planetas[0])\nprint("Último:", planetas[-1])\nprint("Total:", len(planetas))\n\nprint("\\nTodos:")\nfor planeta in planetas:\n    print(" →", planeta)`,
        tarea: `# TU TURNO: Inventario de nave\ninventario = ["casco", "traje", "oxígeno"]\n\nprint("📦 Inventario:")\nfor objeto in inventario:\n    print(" -", objeto)\n\n# Añade "mapa estelar"\ninventario.append("mapa estelar")\n\nprint("\\nTotal:", len(inventario), "objetos")\n\nif "oxígeno" in inventario:\n    print("✅ Tienes oxígeno")`,
        reto: `# RETO: Búsqueda en inventario\nnave = ["reactor", "combustible", "mapa", "radio", "comida"]\n\nprint("A bordo:", len(nave), "objetos")\nbuscar = input("¿Qué necesitas? ")\n\nif buscar in nave:\n    pos = nave.index(buscar)\n    print(f"✅ '{buscar}' en posición {pos}")\nelse:\n    print(f"❌ '{buscar}' no está")\n    nave.append(buscar)\n    print(f"📥 Añadido. Total: {len(nave)}")`,
      },
    ],
    project: {
      name: '⛏️ Simulador de inventario Minecraft',
      desc: 'Gestiona tu inventario: ver, buscar, añadir y eliminar objetos.',
      code: `inventario = ["espada de diamante", "pico de hierro", "antorcha", "manzana"]\n\nwhile True:\n    print("\\n╔══════════════════════╗")\n    print("║  INVENTARIO MINECRAFT ║")\n    print("╠══════════════════════╣")\n    for i, objeto in enumerate(inventario, 1):\n        print(f"║  {i}. {objeto}")\n    print(f"║  Total: {len(inventario)} objetos")\n    print("╚══════════════════════╝")\n    print("\\n1. Buscar  2. Añadir  3. Eliminar  4. Salir")\n    opcion = input("Elige (1-4): ")\n    if opcion == "1":\n        buscar = input("¿Qué buscas? ")\n        print("✅ Tienes" if buscar in inventario else "❌ No tienes", f"'{buscar}'")\n    elif opcion == "2":\n        nuevo = input("¿Qué añades? ")\n        inventario.append(nuevo)\n        print(f"✅ '{nuevo}' añadido")\n    elif opcion == "3":\n        quitar = input("¿Qué eliminas? ")\n        if quitar in inventario:\n            inventario.remove(quitar)\n            print(f"✅ '{quitar}' eliminado")\n        else:\n            print(f"❌ '{quitar}' no está")\n    elif opcion == "4":\n        print("👋 Cerrando...")\n        break\n    else:\n        print("⚠️ Opción no válida")`,
    },
  },
  {
    id: 3, emoji: '⚙️', title: 'Funciones', subtitle: 'Tu propio kit de herramientas',
    weeks: 'Semanas 5–6',
    description: 'Una función es código reutilizable con nombre. Como guardar una receta.',
    tools: ['Lo mismo de antes'],
    lessons: [
      {
        title: 'def — Crear tu propia función',
        objetivo: 'Crear un bloque de código reutilizable con nombre propio.',
        concepto: `def crea una función.\n\n  def nombre_funcion():\n      # código aquí\n\nPara ejecutarla escribes:\n  nombre_funcion()\n\nSin paréntesis Python no la ejecuta, solo la recuerda.\nPuedes llamarla cuantas veces quieras.`,
        ejemplo: `def mensaje_bienvenida():\n    print("══════════════════════")\n    print("  BIENVENIDO AL CURSO  ")\n    print("══════════════════════")\n\nmensaje_bienvenida()\nprint("---")\nmensaje_bienvenida()`,
        tarea: `# TU TURNO: Función de estado de nave\ndef estado_nave():\n    print("🚀 NAVE: Apolo-X")\n    print("⚡ Energía: 100%")\n    print("💨 Oxígeno: 95%")\n\n# Llama a la función 2 veces\nestado_nave()\nprint("--- actualización ---")\nestado_nave()`,
        reto: `# RETO: Funciones que llaman a otras\ndef separador():\n    print("─" * 30)\n\ndef titulo(texto):\n    separador()\n    print("     " + texto)\n    separador()\n\ndef reporte():\n    titulo("REPORTE DE MISIÓN")\n    print("Día: 47 | Destino: Marte")\n    separador()\n\nreporte()`,
      },
      {
        title: 'Parámetros — Personalizar la función',
        objetivo: 'Pasar información a una función para que actúe diferente cada vez.',
        concepto: `Los parámetros son variables que le pasas a la función.\n\n  def saludar(nombre):\n      print("Hola,", nombre)\n\n  saludar("Mati")       → Hola, Mati\n  saludar("Comandante") → Hola, Comandante\n\nVarios parámetros:\n  def suma(a, b):\n      print(a + b)\n  suma(3, 5)  → 8`,
        ejemplo: `def presentar_planeta(nombre, lunas):\n    print(f"🪐 Planeta: {nombre}")\n    print(f"   Lunas: {lunas}")\n    print()\n\npresentar_planeta("Marte", 2)\npresentar_planeta("Júpiter", 95)\npresentar_planeta("Saturno", 146)`,
        tarea: `# TU TURNO: Tarjetas de agente\ndef tarjeta_agente(nombre, rango, mision):\n    print("┌─────────────────────┐")\n    print(f"│ Agente : {nombre}")\n    print(f"│ Rango  : {rango}")\n    print(f"│ Misión : {mision}")\n    print("└─────────────────────┘")\n\n# Llama con tus datos\ntarjeta_agente("___", "___", "___")\ntarjeta_agente("___", "___", "___")`,
        reto: `# RETO: Parámetro con valor por defecto\ndef alerta(mensaje, nivel="INFO"):\n    iconos = {"INFO": "ℹ️", "AVISO": "⚠️", "ERROR": "🚨"}\n    icono = iconos.get(nivel, "📢")\n    print(f"{icono} [{nivel}] {mensaje}")\n\nalerta("Sistemas iniciados")\nalerta("Oxígeno al 20%", "AVISO")\nalerta("Fallo en motor", "ERROR")`,
      },
      {
        title: 'return — La función devuelve un resultado',
        objetivo: 'Hacer que una función calcule algo y devuelva el resultado.',
        concepto: `return hace que la función devuelva un valor.\n\n  def doblar(numero):\n      return numero * 2\n\n  resultado = doblar(5)   → 10\n\nSin return → la función hace cosas pero no devuelve nada.\nCon return → puedes guardar el resultado o usarlo en print().\nreturn termina la función inmediatamente.`,
        ejemplo: `def calcular_area(largo, ancho):\n    area = largo * ancho\n    return area\n\nsala = calcular_area(10, 5)\nprint("Área sala:", sala, "m²")\nprint("Área hangar:", calcular_area(30, 20), "m²")`,
        tarea: `# TU TURNO: Convertir temperatura\ndef celsius_a_fahrenheit(celsius):\n    # Fórmula: (celsius * 9/5) + 32\n    fahrenheit = (celsius * ___) + ___\n    return fahrenheit\n\ntemp_marte = celsius_a_fahrenheit(-60)\nprint("Marte:", temp_marte, "°F")\n\ntemp_venus = celsius_a_fahrenheit(465)\nprint("Venus:", temp_venus, "°F")`,
        reto: `# RETO: Devolver varios valores\ndef analizar_planeta(nombre, distancia, lunas):\n    zona = "interior" if distancia < 400 else "exterior"\n    hab = "posible" if lunas >= 1 and distancia < 300 else "difícil"\n    return zona, hab\n\nzona, hab = analizar_planeta("Marte", 228, 2)\nprint(f"Marte → {zona}, habitabilidad: {hab}")\n\nzona, hab = analizar_planeta("Júpiter", 778, 95)\nprint(f"Júpiter → {zona}, habitabilidad: {hab}")`,
      },
      {
        title: 'Funciones dentro de funciones',
        objetivo: 'Combinar funciones para construir programas organizados.',
        concepto: `Un programa grande se divide en funciones pequeñas.\nCada función hace una sola cosa.\n\n  def paso1():  # prepara datos\n  def paso2():  # procesa\n  def paso3():  # muestra resultados\n\n  def main():\n      paso1()\n      paso2()\n      paso3()\n\n  main()\n\nEsto se llama separación de responsabilidades.`,
        ejemplo: `def obtener_nombre():\n    return input("¿Nombre del planeta? ")\n\ndef calcular_gravedad(masa):\n    return round(masa * 9.8, 2)\n\ndef mostrar_info(nombre, gravedad):\n    print(f"\\n🪐 {nombre}: {gravedad} m/s²")\n\ndef analizar():\n    nombre = obtener_nombre()\n    masa = float(input("¿Masa relativa? "))\n    gravedad = calcular_gravedad(masa)\n    mostrar_info(nombre, gravedad)\n\nanalizar()`,
        tarea: `# TU TURNO: Calculadora de viaje espacial\ndef pedir_datos():\n    destino = input("¿Destino? ")\n    distancia = float(input("¿Distancia (millones km)? "))\n    return destino, distancia\n\ndef calcular_tiempo(distancia, velocidad=28000):\n    km = distancia * 1_000_000\n    dias = (km / velocidad) / 24\n    return round(dias, 1)\n\ndef mostrar_resultado(destino, dias):\n    print(f"\\n🚀 Viaje a {destino}: {dias} días")\n\n# Escribe la función main que llame a las tres\ndef planear_viaje():\n    destino, distancia = ___()\n    dias = ___(distancia)\n    ___(destino, dias)\n\nplanear_viaje()`,
        reto: null,
      },
    ],
    project: {
      name: '🌍 Calculadora de peso en planetas',
      desc: 'Usando funciones, calcula cuánto pesarías en cualquier planeta.',
      code: `def obtener_peso():\n    return float(input("¿Cuánto pesas en la Tierra (kg)? "))\n\ndef calcular_peso(peso_tierra, gravedad):\n    return round(peso_tierra * gravedad, 1)\n\ndef mostrar_resultado(planeta, peso, emoji):\n    barra = "█" * int(peso / 5)\n    print(f"  {emoji} {planeta:<12} {peso:>6} kg  {barra}")\n\ndef mostrar_todos(peso_tierra):\n    planetas = [\n        ("Mercurio", 0.38, "☿"), ("Venus", 0.91, "♀"),\n        ("Marte", 0.38, "♂"),   ("Júpiter", 2.34, "♃"),\n        ("Saturno", 1.06, "♄"), ("Luna", 0.17, "🌙"),\n    ]\n    print(f"\\n🚀 Tu peso en el sistema solar:")\n    print("─" * 40)\n    for nombre, gravedad, emoji in planetas:\n        peso = calcular_peso(peso_tierra, gravedad)\n        mostrar_resultado(nombre, peso, emoji)\n\ndef main():\n    print("═" * 40)\n    print("  CALCULADORA ESPACIAL DE PESO")\n    print("═" * 40)\n    peso = obtener_peso()\n    mostrar_todos(peso)\n\nmain()`,
    },
  },
  {
    id: 4, emoji: '📁', title: 'Datos y archivos', subtitle: 'Guardar cosas para siempre',
    weeks: 'Semanas 7–8',
    description: 'Organiza datos complejos y guárdalos para que no se pierdan.',
    tools: ['Lo mismo de antes'],
    lessons: [
      {
        title: 'Diccionarios — Datos con nombre',
        objetivo: 'Guardar información organizada por etiquetas.',
        concepto: `Un diccionario guarda pares clave:valor.\n\n  planeta = {\n      "nombre": "Marte",\n      "lunas": 2\n  }\n\nAcceder: planeta["nombre"] → "Marte"\nAñadir:  planeta["color"] = "rojo"\nCambiar: planeta["lunas"] = 3\nEliminar: del planeta["color"]`,
        ejemplo: `marte = {\n    "nombre": "Marte",\n    "lunas": 2,\n    "distancia_sol": 228,\n    "temperatura_media": -60,\n}\n\nprint("Planeta:", marte["nombre"])\nprint("Lunas:", marte["lunas"])\nprint("Temperatura:", marte["temperatura_media"], "°C")`,
        tarea: `# TU TURNO: Diccionario de tu nave\nnave = {\n    "nombre": "___",\n    "tripulacion": ___,\n    "combustible": 100,\n    "destino": "___"\n}\n\nprint("🚀 DATOS DE LA NAVE")\nprint("Nombre:", nave["nombre"])\nprint("Tripulación:", nave["tripulacion"])\nprint("Combustible:", nave["combustible"], "%")\nprint("Destino:", nave["destino"])\n\nnave["combustible"] = 75\nprint("\\nCombustible actualizado:", nave["combustible"], "%")`,
        reto: `# RETO: Lista de diccionarios\nsistema_solar = [\n    {"nombre": "Mercurio", "lunas": 0,  "distancia": 57.9},\n    {"nombre": "Venus",    "lunas": 0,  "distancia": 108.2},\n    {"nombre": "Tierra",   "lunas": 1,  "distancia": 149.6},\n    {"nombre": "Marte",    "lunas": 2,  "distancia": 227.9},\n    {"nombre": "Júpiter",  "lunas": 95, "distancia": 778.5},\n]\n\nprint("Planetas con lunas:")\nfor planeta in sistema_solar:\n    if planeta["lunas"] > 0:\n        print(f"  {planeta['nombre']}: {planeta['lunas']} luna(s)")`,
      },
      {
        title: 'Leer y escribir archivos',
        objetivo: 'Guardar información en un archivo que persiste después de cerrar el programa.',
        concepto: `with open() abre un archivo de forma segura.\n\nModos:\n  "w"  → escribir (borra lo anterior)\n  "r"  → leer\n  "a"  → añadir al final\n\n  with open("notas.txt", "w") as f:\n      f.write("Hola\\n")\n\nEl archivo se cierra automáticamente.`,
        ejemplo: `# Escribir\nwith open("bitacora.txt", "w") as f:\n    f.write("DÍA 1: Despegue\\n")\n    f.write("DÍA 2: Luna cruzada\\n")\n    f.write("DÍA 3: Rumbo a Marte\\n")\n\nprint("Guardado ✓")\n\n# Leer\nwith open("bitacora.txt", "r") as f:\n    contenido = f.read()\n\nprint("\\nBitácora:")\nprint(contenido)`,
        tarea: `# TU TURNO: Diario de misión\nentrada = input("Escribe la entrada de hoy: ")\n\n# Usa "a" para añadir sin borrar\nwith open("diario.txt", "a") as f:\n    f.write(entrada + "\\n")\n\nprint("✅ Guardado")\n\n# Leer todo el diario\nprint("\\n📖 DIARIO:")\nwith open("diario.txt", "r") as f:\n    print(f.read())`,
        reto: `# RETO: Contador de visitas\nimport os\n\narchivo = "visitas.txt"\n\nif os.path.exists(archivo):\n    with open(archivo, "r") as f:\n        visitas = int(f.read())\nelse:\n    visitas = 0\n\nvisitas += 1\n\nwith open(archivo, "w") as f:\n    f.write(str(visitas))\n\nprint(f"🚀 Visita número {visitas}")`,
      },
      {
        title: 'JSON — Guardar datos estructurados',
        objetivo: 'Guardar y cargar datos complejos como diccionarios y listas.',
        concepto: `JSON guarda datos estructurados en un archivo.\n\n  import json\n\n  # Guardar\n  with open("datos.json", "w") as f:\n      json.dump(datos, f)\n\n  # Cargar\n  with open("datos.json", "r") as f:\n      datos = json.load(f)\n\nJSON es el formato más usado en la web.`,
        ejemplo: `import json\n\nmision = {\n    "nombre": "Apolo-X",\n    "tripulacion": ["Carlos", "María", "Ahmed"],\n    "combustible": 87\n}\n\nwith open("mision.json", "w") as f:\n    json.dump(mision, f, indent=2)\n\nprint("Guardado ✓")\n\nwith open("mision.json", "r") as f:\n    datos = json.load(f)\n\nprint("Misión:", datos["nombre"])\nprint("Tripulación:", datos["tripulacion"])`,
        tarea: `import json\n\n# TU TURNO: Sistema de guardado\nnave = {\n    "nombre": "Explorer-1",\n    "nivel": 1,\n    "puntos": 0,\n    "planetas_visitados": []\n}\n\n# Guardar\nwith open("partida.json", "w") as f:\n    json.dump(nave, f, indent=2)\nprint("💾 Partida guardada")\n\n# Cargar\nwith open("partida.json", "r") as f:\n    partida = json.load(f)\n\nprint("\\n📂 Partida cargada:")\nprint("Nave:", partida["nombre"])\nprint("Nivel:", partida["nivel"])`,
        reto: `import json, os\n\nARCHIVO = "base.json"\n\ndef cargar():\n    if os.path.exists(ARCHIVO):\n        with open(ARCHIVO, "r") as f:\n            return json.load(f)\n    return {"planetas": [], "recursos": 100}\n\ndef guardar(datos):\n    with open(ARCHIVO, "w") as f:\n        json.dump(datos, f, indent=2)\n\ndef explorar(datos):\n    planeta = input("Planeta explorado: ")\n    datos["planetas"].append(planeta)\n    datos["recursos"] -= 10\n    guardar(datos)\n    print(f"✅ {planeta} registrado. Recursos: {datos['recursos']}")\n\nbase = cargar()\nprint(f"Planetas explorados: {len(base['planetas'])}")\nexplorar(base)`,
      },
      {
        title: 'try / except — Manejar errores',
        objetivo: 'Evitar que el programa se rompa cuando algo sale mal.',
        concepto: `try / except captura errores.\n\n  try:\n      # código que podría fallar\n  except TipoDeError:\n      # qué hacer si falla\n\nErrores comunes:\n  ValueError       → int("abc")\n  ZeroDivisionError → 5/0\n  FileNotFoundError → archivo no existe\n  KeyError         → clave no existe en diccionario`,
        ejemplo: `def dividir(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print("❌ No se puede dividir entre cero")\n        return None\n\nprint(dividir(10, 2))\nprint(dividir(10, 0))\nprint(dividir(8, 4))`,
        tarea: `# TU TURNO: Entrada segura de números\ndef pedir_numero(mensaje):\n    try:\n        valor = int(input(mensaje))\n        return valor\n    except ValueError:\n        print("⚠️ Escribe solo números")\n        return None\n\nedad = pedir_numero("¿Cuántos años tienes? ")\n\nif edad is not None:\n    print(f"En 10 años tendrás {edad + 10} años")`,
        reto: `import json\n\ndef cargar_archivo(nombre):\n    try:\n        with open(nombre, "r") as f:\n            return json.load(f)\n    except FileNotFoundError:\n        print(f"⚠️ '{nombre}' no existe. Creando nuevo...")\n        return {}\n    except json.JSONDecodeError:\n        print(f"❌ '{nombre}' está corrupto.")\n        return {}\n\ndef guardar_archivo(nombre, datos):\n    try:\n        with open(nombre, "w") as f:\n            json.dump(datos, f, indent=2)\n        print("💾 Guardado")\n    except Exception as e:\n        print(f"❌ Error: {e}")\n\ndatos = cargar_archivo("config.json")\ndatos["sesion"] = "2026-06-23"\nguardar_archivo("config.json", datos)`,
      },
    ],
    project: {
      name: '🛸 Base de datos espacial',
      desc: 'Base de datos de planetas guardada en JSON. Consulta, añade y explora.',
      code: `import json, os\n\nARCHIVO = "planetas.json"\nDEFAULT = {\n    "Mercurio": {"distancia": 57.9,  "lunas": 0,   "tipo": "rocoso"},\n    "Venus":    {"distancia": 108.2, "lunas": 0,   "tipo": "rocoso"},\n    "Tierra":   {"distancia": 149.6, "lunas": 1,   "tipo": "rocoso"},\n    "Marte":    {"distancia": 227.9, "lunas": 2,   "tipo": "rocoso"},\n    "Júpiter":  {"distancia": 778.5, "lunas": 95,  "tipo": "gaseoso"},\n    "Saturno":  {"distancia": 1432,  "lunas": 146, "tipo": "gaseoso"},\n}\n\ndef cargar():\n    if os.path.exists(ARCHIVO):\n        with open(ARCHIVO, "r") as f: return json.load(f)\n    return DEFAULT.copy()\n\ndef guardar(d):\n    with open(ARCHIVO, "w") as f: json.dump(d, f, indent=2, ensure_ascii=False)\n\ndef listar(p):\n    print("\\n🌌 BASE ESPACIAL")\n    print("═" * 45)\n    for n, d in p.items():\n        print(f"🪐 {n:<12} | {d['distancia']:>6} M km | {d['lunas']:>3} lunas")\n\ndef buscar(p):\n    n = input("Planeta: ").capitalize()\n    if n in p:\n        d = p[n]\n        print(f"\\n🪐 {n} — {d['distancia']} M km — {d['lunas']} lunas — {d['tipo']}")\n    else: print("❌ No encontrado")\n\ndef añadir(p):\n    n = input("Nombre: ").capitalize()\n    dist = float(input("Distancia (M km): "))\n    lunas = int(input("Lunas: "))\n    tipo = input("Tipo: ")\n    p[n] = {"distancia": dist, "lunas": lunas, "tipo": tipo}\n    guardar(p)\n    print(f"✅ {n} guardado")\n\ndef main():\n    p = cargar()\n    while True:\n        print("\\n1.Ver  2.Buscar  3.Añadir  4.Salir")\n        op = input("Elige: ")\n        if op=="1": listar(p)\n        elif op=="2": buscar(p)\n        elif op=="3": añadir(p)\n        elif op=="4": break\n        else: print("⚠️ Inválido")\n\nmain()`,
    },
  },
  {
    id: 5, emoji: '🎮', title: 'Proyecto Final', subtitle: 'Tu primer juego real',
    weeks: 'Semanas 9–10',
    description: 'Combinas todo lo aprendido para crear un juego de aventura espacial.',
    tools: ['Todo lo de antes'],
    lessons: [
      {
        title: 'Planear el juego antes de programar',
        objetivo: 'Diseñar el programa en papel antes de escribir código.',
        concepto: `Los programadores no empiezan con código.\nPrimero diseñan:\n\n1. ¿Qué hace el programa?\n2. ¿Qué decide el usuario?\n3. ¿Qué pasa en cada decisión?\n4. ¿Cómo termina?\n\nEsto se llama pseudocódigo.`,
        ejemplo: `def introduccion():\n    print("Llegas a un planeta desconocido.")\n    print("Los motores fallaron.")\n\ndef decision_inicial():\n    print("\\n¿Qué haces?")\n    print("  1. Explorar")\n    print("  2. Revisar nave")\n    return input("Elige (1/2): ")\n\ndef explorar():\n    print("\\nSales con tu traje...")\n\ndef revisar_nave():\n    print("\\nAbres el panel...")\n\ndef jugar():\n    introduccion()\n    op = decision_inicial()\n    if op == "1": explorar()\n    elif op == "2": revisar_nave()\n\njugar()`,
        tarea: `# TU TURNO: Diseña en pseudocódigo (solo comentarios)\n\n# TÍTULO: ___\n# HISTORIA: El jugador es...\n# ESCENA 1: El jugador llega a...\n# OPCIÓN A: Si elige ___, pasa...\n# OPCIÓN B: Si elige ___, pasa...\n# FINAL BUENO: Gana cuando...\n# FINAL MALO: Pierde cuando...\n\nprint("¡Diseño listo!")`,
        reto: `# RETO: Dibuja tu juego como árbol\nprint("""\n            INICIO\n              |\n        ¿Explorar?\n        /         \\\\\n      SÍ           NO\n      |             |\n   Cueva          Nave\n   /   \\\\          /  \\\\\nTesoro Trampa  Reparo Fallo\n""")\n# Dibuja el tuyo aquí`,
      },
      {
        title: 'Construir el juego por partes',
        objetivo: 'Programar en etapas: una función a la vez.',
        concepto: `Regla más importante:\n"Escribe un poco, prueba, escribe un poco más."\n\nNO escribas todo de golpe.\n\n1. Escribe una función\n2. Ejecútala y comprueba\n3. Escribe la siguiente\n4. Repite`,
        ejemplo: `import random\n\ndef inicio():\n    print("╔═══════════════════════════╗")\n    print("║   PLANETA DESCONOCIDO     ║")\n    print("╚═══════════════════════════╝")\n    print("Aterrizaste de emergencia.")\n\ndef primera_decision():\n    print("\\n¿Qué haces?")\n    print("  a) Explorar")\n    print("  b) Reparar nave")\n    return input("Elige (a/b): ").lower()\n\ninicio()\nopcion = primera_decision()\nprint(f"Elegiste: {opcion}")`,
        tarea: `import random\n\n# TU TURNO: Primeras 2 escenas de tu juego\ndef inicio():\n    print("___")\n    print("___")\n\ndef escena_1():\n    print("\\n¿Qué decides?")\n    print("  a) ___")\n    print("  b) ___")\n    opcion = input("Elige (a/b): ").lower()\n    if opcion == "a":\n        print("\\n___")\n    elif opcion == "b":\n        print("\\n___")\n    else:\n        print("No entiendo.")\n\ninicio()\nescena_1()`,
        reto: `import random\n\ndef crear_jugador():\n    nombre = input("Nombre de tu astronauta: ")\n    return {"nombre": nombre, "vida": 100, "oxigeno": 100, "objetos": []}\n\ndef mostrar_estado(j):\n    print(f"\\n❤️ {j['vida']}% | 💨 {j['oxigeno']}% | 🎒 {j['objetos'] or 'vacío'}")\n\ndef evento(j):\n    eventos = [\n        ("Encuentras comida", "vida", +20),\n        ("Tormenta daña traje", "oxigeno", -15),\n        ("Encuentras O2", "oxigeno", +30),\n        ("Caes en hoyo", "vida", -10),\n    ]\n    desc, stat, val = random.choice(eventos)\n    j[stat] = max(0, min(100, j[stat] + val))\n    signo = "+" if val > 0 else ""\n    print(f"⚡ {desc} ({signo}{val})")\n\nj = crear_jugador()\nmostrar_estado(j)\nevento(j)\nmostrar_estado(j)`,
      },
      {
        title: 'Pulir y añadir detalles',
        objetivo: 'Mejorar la experiencia del jugador con detalles visuales.',
        concepto: `Un juego que funciona es bueno.\nUno con detalles es memorable.\n\nDetalles que mejoran:\n  • time.sleep() → pausas dramáticas\n  • random       → eventos variados\n  • Emojis y caracteres especiales\n  • Mensajes diferentes cada vez`,
        ejemplo: `import time, random\n\ndef efecto_carga(mensaje):\n    print(mensaje, end="", flush=True)\n    for _ in range(3):\n        time.sleep(0.4)\n        print(".", end="", flush=True)\n    print()\n\ndef texto_lento(texto):\n    for char in texto:\n        print(char, end="", flush=True)\n        time.sleep(0.05)\n    print()\n\nefecto_carga("Iniciando sistemas")\nefecto_carga("Escaneando planeta")\ntexto_lento("\\n🚀 ¡MISIÓN INICIADA!")`,
        tarea: `import random\n\n# TU TURNO: Mensajes variados\nmensajes_victoria = [\n    "¡Increíble! Lo lograste.",\n    "¡Misión completada!",\n    "¡Eres un héroe espacial!"\n]\n\nmensajes_derrota = [\n    "La misión terminó pronto.",\n    "El espacio es implacable."\n]\n\n# Añade 2 mensajes más a cada lista\nmensajes_victoria.append("___")\nmensajes_derrota.append("___")\n\nprint(random.choice(mensajes_victoria))\nprint(random.choice(mensajes_derrota))`,
        reto: `import time\n\ndef barra_progreso(titulo, total=20, delay=0.1):\n    print(f"\\n{titulo}")\n    print("[", end="", flush=True)\n    for i in range(total):\n        time.sleep(delay)\n        print("█", end="", flush=True)\n    print("] ✓")\n\nbarra_progreso("Analizando atmósfera")\nbarra_progreso("Cargando mapa", 15, 0.08)\nprint("\\n🚀 Todo listo")`,
      },
      {
        title: 'Probar y compartir',
        objetivo: 'Verificar que el juego funciona y que otra persona puede usarlo solo.',
        concepto: `Checklist antes de compartir:\n\n1. ¿Funciona sin errores?\n2. ¿Qué pasa con respuestas inesperadas?\n3. ¿Lo puede usar alguien sin ayuda?\n4. ¿Hay decisiones que no llevan a nada?\n\nEsto se llama testing.`,
        ejemplo: `# Función que maneja entradas inválidas\ndef preguntar_opcion(validas):\n    while True:\n        op = input("Elige: ").lower().strip()\n        if op in validas:\n            return op\n        print(f"⚠️ Escribe una de: {validas}")\n\nprint("¿Hacia dónde?")\nprint("  norte / sur / este / oeste")\ndir = preguntar_opcion(["norte","sur","este","oeste"])\nprint(f"\\nFuiste al {dir}.")`,
        tarea: `# TU TURNO: Checklist de tu juego\nprint("CHECKLIST")\nprint("═" * 30)\n\npreguntas = [\n    "¿Arranca sin errores?",\n    "¿Todas las opciones funcionan?",\n    "¿Hay final bueno y malo?",\n    "¿Los mensajes son claros?",\n    "¿Probaste respuestas incorrectas?",\n]\n\naprobadas = 0\nfor p in preguntas:\n    r = input(f"{p} (s/n): ").lower()\n    if r == "s":\n        print("  ✅")\n        aprobadas += 1\n    else:\n        print("  ⬜ Pendiente")\n\nprint(f"\\nResultado: {aprobadas}/{len(preguntas)}")\nif aprobadas == len(preguntas):\n    print("🏆 ¡Listo para compartir!")`,
        reto: null,
      },
    ],
    project: {
      name: '🌌 Aventura espacial completa',
      desc: 'Juego final con estadísticas, decisiones, random y múltiples finales.',
      code: `import random, time\n\ndef crear_jugador():\n    nombre = input("Nombre de tu astronauta: ")\n    return {"nombre": nombre, "vida": 100, "oxigeno": 100, "objetos": [], "puntos": 0}\n\ndef estado(j):\n    print(f"\\n[ ❤️ {j['vida']}% | 💨 {j['oxigeno']}% | ⭐ {j['puntos']} pts ]")\n\ndef es_vivo(j):\n    return j["vida"] > 0 and j["oxigeno"] > 0\n\ndef intro(j):\n    print("\\n╔══════════════════════════════╗")\n    print("║   PLANETA DESCONOCIDO: X-7   ║")\n    print("╚══════════════════════════════╝")\n    print(f"Astronauta {j['nombre']}, emergencia de aterrizaje.")\n    time.sleep(0.5)\n\ndef escena_cueva(j):\n    print("\\n🕳️ Entras en la cueva...")\n    time.sleep(0.5)\n    if random.random() > 0.4:\n        print("✨ Encuentras cristales de energía.")\n        j["objetos"].append("cristal")\n        j["puntos"] += 30\n    else:\n        print("⚠️ El suelo cede. -20 vida")\n        j["vida"] -= 20\n\ndef escena_bosque(j):\n    print("\\n🌿 Exploras el bosque alienígena...")\n    time.sleep(0.5)\n    ev = random.choice(["fruta","trampa","oxigeno"])\n    if ev=="fruta":\n        print("🍎 Fruta espacial. +15 vida")\n        j["vida"] = min(100, j["vida"]+15)\n        j["puntos"] += 10\n    elif ev=="trampa":\n        print("🕷️ Criatura ataca. -25 vida")\n        j["vida"] -= 25\n    else:\n        print("💨 Depósito O2. +20 oxígeno")\n        j["oxigeno"] = min(100, j["oxigeno"]+20)\n        j["puntos"] += 15\n\ndef escena_nave(j):\n    print("\\n🚀 Vuelves a la nave...")\n    if "cristal" in j["objetos"]:\n        print("⚡ Reparas los motores con el cristal.")\n        print("🏆 ¡MISIÓN COMPLETADA!")\n        j["puntos"] += 50\n        return True\n    else:\n        print("❌ Necesitas el cristal para reparar.")\n        j["oxigeno"] -= 10\n        return False\n\ndef jugar():\n    j = crear_jugador()\n    intro(j)\n    fin = False\n    while es_vivo(j) and not fin:\n        estado(j)\n        j["oxigeno"] -= 5\n        print("\\n1.Cueva  2.Bosque  3.Nave")\n        op = input("Elige: ")\n        if op=="1": escena_cueva(j)\n        elif op=="2": escena_bosque(j)\n        elif op=="3": fin = escena_nave(j)\n        else: print("⚠️ Inválido")\n    print("\\n" + "═"*35)\n    if fin: print(f"🏆 ¡Victoria, {j['nombre']}!")\n    else: print(f"💀 Fin, {j['nombre']}.")\n    print(f"Puntuación: {j['puntos']} puntos")\n\njugar()`,
    },
  },
]

export const RESOURCES = [
  { emoji: '🐢', name: 'Turtle — Dibujar con código', type: 'Módulo Python', desc: 'Dibuja formas con comandos. Viene instalado con Python.', url: null },
  { emoji: '🎮', name: 'Pygame — Juegos con gráficos', type: 'Librería Python', desc: 'Cuando termines el plan, haz juegos con imágenes y sonido.', url: 'https://www.pygame.org' },
  { emoji: '📺', name: 'CS Dojo — Python para principiantes', type: 'YouTube', desc: 'Videos cortos y claros (subtítulos en español).', url: 'https://youtube.com/@csdojo' },
]
