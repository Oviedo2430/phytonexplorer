export const MISSIONS = [
  { id: 1, emoji: '🚀', title: 'Despegue', subtitle: 'Tus primeros comandos', weeks: 'Semanas 1–2',
    description: 'Aprendes a hablar con el ordenador. Le das órdenes y él obedece.',
    tools: ['Python (Thonny)', 'Sin instalaciones raras'],
    lessons: [
      { title: 'print() — Hacer que Python hable', detail: 'Escribe print("Hola") y mira qué pasa.', starterCode: '# Cambia el mensaje y ejecuta\nprint("Hola, soy una IA")\nprint("Me llamo Python Explorer")' },
      { title: 'Variables — Guardar información', detail: 'nombre = "Mateo" — Python recuerda lo que le dices.', starterCode: 'nombre = "Explorador"\nedad = 12\nprint("Hola,", nombre)\nprint("Tienes", edad, "años")' },
      { title: 'input() — Hacer preguntas', detail: 'Python puede preguntarte cosas y usar tu respuesta.', starterCode: 'nombre = input("¿Cómo te llamas? ")\nprint("Bienvenido,", nombre)' },
      { title: 'Números y operaciones', detail: 'Suma, resta, multiplicación. Python es mejor que una calculadora.', starterCode: 'print(10 + 5)\nprint(10 - 3)\nprint(4 * 8)\nprint(15 / 2)\nprint(2 ** 10)' },
    ],
    project: { name: '🤖 Bot presentador', desc: 'Un programa que te pide tu nombre y te presenta como un agente espacial.',
      code: 'nombre = input("¿Cómo te llamas, agente? ")\nedad = input("¿Cuántos años tienes? ")\nprint()\nprint("══════════════════════════")\nprint("   SISTEMA INICIADO...    ")\nprint("══════════════════════════")\nprint("Nombre de agente:", nombre)\nprint("Años en servicio:", edad)\nprint("Estado: ACTIVO 🟢")\nprint("Bienvenido a la base espacial.")' }
  },
  { id: 2, emoji: '🧱', title: 'Bloques de construcción', subtitle: 'Decisiones y repetición', weeks: 'Semanas 3–4',
    description: 'Como en Minecraft: si hay piedra, rompes. Si no, buscas. Python piensa igual.',
    tools: ['Thonny', 'Cuaderno para ideas'],
    lessons: [
      { title: 'if / else — Tomar decisiones', detail: 'Si llueve → paraguas. Si no → gafas de sol.', starterCode: 'vida = 10\nif vida > 0:\n    print("🟢 Jugador vivo")\nelse:\n    print("💀 Game over")\n# Cambia el valor de vida y prueba' },
      { title: 'for — Repetir cosas', detail: 'Craft ×64 bloques sin hacer clic 64 veces.', starterCode: 'for i in range(5):\n    print("Fabricando bloque", i + 1, "de 5...")\nprint("✅ ¡Bloques listos!")' },
      { title: 'while — Repetir hasta que pase algo', detail: 'Mientras no tengas diamantes, sigue cavando.', starterCode: 'import random\nprofundidad = 0\nencontrado = False\nwhile not encontrado:\n    profundidad += 1\n    if random.randint(1, 10) == 1:\n        encontrado = True\nprint(f"💎 Diamante a {profundidad} bloques de profundidad")' },
      { title: 'Listas — Tu inventario', detail: 'Como tu inventario de Minecraft.', starterCode: 'inventario = ["espada", "antorcha", "manzana", "pico"]\nprint("📦 Inventario:")\nfor objeto in inventario:\n    print(" →", objeto)\ninventario.append("diamante")\nprint(f"Total: {len(inventario)} objetos")' },
    ],
    project: { name: '⛏️ Simulador de inventario Minecraft', desc: 'Gestiona tu inventario: añade objetos, busca, cuenta.',
      code: 'inventario = ["espada", "antorcha", "manzana", "pico"]\nprint("╔═══════════════════╗")\nprint("║    INVENTARIO     ║")\nprint("╠═══════════════════╣")\nfor i, objeto in enumerate(inventario, 1):\n    print(f"║  {i}. {objeto:<15} ║")\nprint("╚═══════════════════╝")\nprint(f"\\nObjetos totales: {len(inventario)}")\nbuscar = input("\\n¿Qué objeto buscas? ")\nif buscar in inventario:\n    print(f"✅ Tienes {buscar}")\nelse:\n    print(f"❌ No tienes {buscar}")' }
  },
  { id: 3, emoji: '⚙️', title: 'Funciones', subtitle: 'Tu propio kit de herramientas', weeks: 'Semanas 5–6',
    description: 'En Lego, una pieza especial construida una vez puede usarse mil veces.',
    tools: ['VS Code (opcional)', 'Thonny sigue funcionando'],
    lessons: [
      { title: 'def — Crear tu propia función', detail: 'Construyes una herramienta una vez y la usas siempre.', starterCode: 'def saludar():\n    print("¡Hola, explorador!")\n    print("Bienvenido a la misión.")\n\nsaludar()\nsaludar()' },
      { title: 'Parámetros — Personalizar la función', detail: 'Como piezas de Lego que encajan de formas distintas.', starterCode: 'def saludar(nombre):\n    print(f"¡Hola, {nombre}!")\n\nsaludar("Mateo")\nsaludar("Comandante")' },
      { title: 'return — La función te devuelve algo', detail: 'Le preguntas cuánto es 5×8 y te responde 40.', starterCode: 'def multiplicar(a, b):\n    return a * b\n\nprint("5 × 8 =", multiplicar(5, 8))\nprint("7 × 7 =", multiplicar(7, 7))' },
      { title: 'Funciones dentro de funciones', detail: 'Combinar herramientas para cosas más complejas.', starterCode: 'def area(largo, ancho):\n    return largo * ancho\n\ndef describir(nombre, largo, ancho):\n    print(f"{nombre}: {largo}m × {ancho}m = {area(largo, ancho)} m²")\n\ndescribir("Base Espacial", 10, 8)' },
    ],
    project: { name: '🌍 Calculadora de peso en planetas', desc: 'Calcula cuánto pesarías en cada planeta del sistema solar.',
      code: 'def peso_en_planeta(peso_tierra, gravedad):\n    return round(peso_tierra * gravedad, 1)\n\nplanetas = {\n    "Mercurio": 0.38, "Venus": 0.91, "Marte": 0.38,\n    "Júpiter": 2.34, "Saturno": 1.06, "Luna": 0.17,\n}\n\nmi_peso = float(input("¿Cuánto pesas en la Tierra (kg)? "))\nprint("\\n🚀 TU PESO EN EL SISTEMA SOLAR:")\nprint("─" * 30)\nfor planeta, gravedad in planetas.items():\n    peso = peso_en_planeta(mi_peso, gravedad)\n    print(f"  {planeta:<10} {peso:>5} kg")' }
  },
  { id: 4, emoji: '📁', title: 'Datos y archivos', subtitle: 'Guardar cosas para siempre', weeks: 'Semanas 7–8',
    description: 'Tu partida de Minecraft se guarda. Aprenderás a hacer lo mismo.',
    tools: ['VS Code', 'Archivos .txt y .json'],
    lessons: [
      { title: 'Diccionarios — Datos con nombre', detail: 'Accedes por nombre, no por número.', starterCode: 'planeta = {"nombre": "Marte", "lunas": 2, "distancia_sol": 228}\nprint("Planeta:", planeta["nombre"])\nprint("Lunas:", planeta["lunas"])' },
      { title: 'Leer y escribir archivos .txt', detail: 'Guardar texto en un archivo y leerlo después.', starterCode: 'with open("notas.txt", "w") as f:\n    f.write("Mi primera nota espacial\\n")\n\nwith open("notas.txt", "r") as f:\n    print(f.read())' },
      { title: 'JSON — Datos estructurados', detail: 'Como el archivo de guardado de Minecraft.', starterCode: 'import json\ndatos = {"nombre": "Marte", "lunas": 2}\nwith open("planeta.json", "w") as f:\n    json.dump(datos, f)\nwith open("planeta.json", "r") as f:\n    p = json.load(f)\nprint(p["nombre"], "tiene", p["lunas"], "lunas")' },
      { title: 'try / except — Manejar errores', detail: 'Si algo falla, el programa no se rompe.', starterCode: 'try:\n    numero = int(input("Escribe un número: "))\n    print("100 ÷", numero, "=", 100 / numero)\nexcept ValueError:\n    print("❌ Eso no es un número")\nexcept ZeroDivisionError:\n    print("❌ No se puede dividir entre cero")' },
    ],
    project: { name: '🛸 Base de datos espacial', desc: 'Guarda y consulta información sobre planetas.',
      code: 'planetas = {\n    "Mercurio": {"distancia": 57.9,  "lunas": 0},\n    "Venus":    {"distancia": 108.2, "lunas": 0},\n    "Tierra":   {"distancia": 149.6, "lunas": 1},\n    "Marte":    {"distancia": 227.9, "lunas": 2},\n    "Júpiter":  {"distancia": 778.5, "lunas": 95},\n    "Saturno":  {"distancia": 1432,  "lunas": 146},\n}\nprint("🌌 BASE DE DATOS ESPACIAL")\nprint("═" * 40)\nfor nombre, datos in planetas.items():\n    print(f"\\n🪐 {nombre}")\n    print(f"   Distancia al Sol: {datos[\'distancia\']} millones km")\n    print(f"   Lunas: {datos[\'lunas\']}")' }
  },
  { id: 5, emoji: '🎮', title: 'Proyecto Final', subtitle: 'Tu primer juego real', weeks: 'Semanas 9–10',
    description: 'Todo lo que aprendiste junto. Creas un juego de texto en el espacio.',
    tools: ['VS Code', 'Python 3', 'Todo lo aprendido'],
    lessons: [
      { title: 'Diseñar el juego en papel primero', detail: 'Qué pasa, qué decide el jugador, cómo termina.', starterCode: '# Escribe tus ideas como comentarios:\n# Historia: ...\n# Decisión 1: ...\n# Final bueno: ...\n# Final malo: ...\nprint("¡Diseño listo! Ahora a programar.")' },
      { title: 'Escribir el código por partes', detail: 'Una función a la vez. Probar antes de seguir.', starterCode: 'def inicio():\n    print("=== MI AVENTURA ESPACIAL ===")\n    decision = input("¿Explorar (e) o esperar (w)? ")\n    if decision == "e":\n        print("Saliste a explorar...")\n    else:\n        print("Esperaste en la nave...")\n\ninicio()' },
      { title: 'Añadir detalles y secretos', detail: 'Easter eggs, mensajes ocultos, rutas alternativas.', starterCode: 'import random\n\ndef evento_aleatorio():\n    eventos = [\n        "Ves una estrella fugaz 🌠",\n        "La gravedad cambia 🌀",\n        "Detectas una señal de radio 📡",\n    ]\n    print("⚡ EVENTO:", random.choice(eventos))\n\nevento_aleatorio()' },
      { title: 'Compartir con alguien', detail: 'El mejor test es que otra persona lo juegue sola.', starterCode: 'print("¡Comparte tu juego!")\nprint("Si alguien lo entiende sin ayuda,")\nprint("significa que lo hiciste bien.")' },
    ],
    project: { name: '🌌 Aventura espacial de texto', desc: 'Un juego donde el jugador toma decisiones que cambian la historia.',
      code: 'import random\n\ndef inicio():\n    print("╔══════════════════════════╗")\n    print("║   MISIÓN: PLANETA X-7   ║")\n    print("╚══════════════════════════╝")\n    print("\\nTu nave aterriza en un planeta desconocido.")\n    decision = input("\\n¿Explorar (e) o escanear (s)? ")\n    if decision == "e":\n        explorar()\n    elif decision == "s":\n        escanear()\n    else:\n        print("Comando no válido.")\n\ndef explorar():\n    print("\\nBajas de la nave...")\n    if random.random() > 0.4:\n        print("✨ Encuentras cristales de energía.")\n        print("🏆 ¡MISIÓN COMPLETADA!")\n    else:\n        print("⚠️ La tormenta daña tu traje.")\n        print("💀 FIN DE LA MISIÓN")\n\ndef escanear():\n    print("\\nDetectas una cueva a 200 metros.")\n    decision = input("¿Investigar (i) o alejarte (a)? ")\n    if decision == "i":\n        explorar()\n    else:\n        print("🚀 Decides despegar. La misión continúa.")\n\ninicio()' }
  },
]

export const RESOURCES = [
  { emoji: '🐢', name: 'Turtle — Dibujar con código', type: 'Módulo Python', desc: 'Dibuja formas con comandos. Viene instalado con Python.', url: null },
  { emoji: '🎮', name: 'Pygame — Juegos con gráficos', type: 'Librería Python', desc: 'Cuando termines el plan, puedes hacer juegos con imágenes y sonido.', url: 'https://www.pygame.org' },
  { emoji: '🌍', name: 'Minecraft + Python', type: 'Proyecto especial', desc: 'Con Minecraft Education Edition puedes programar dentro del juego. Busca "Minecraft Education Python" en Google.', url: 'https://education.minecraft.net/en-us/resources/python-tutorial' },
  { emoji: '📺', name: 'CS Dojo — Python para principiantes', type: 'YouTube', desc: 'Videos cortos y claros (subtítulos en español).', url: 'https://youtube.com/@csdojo' },
]
