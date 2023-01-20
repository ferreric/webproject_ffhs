let testJson = [
    {
        "title": "HTML 1",
        "type": "structure",
        "question": "Was genau geschieht bei der Verwendung des defer Attributes im script tag",
        "answer": "?"
    },
    {
        "title": "CSS 1",
        "type": "style",
        "question": "Ordne die Selektoren gemäss ihrer Spezifität (aufsteigend)",
        "answers": [
            "Universal-Selektor",
            "ID-Selektoren",
            "Class-Selektoren",
            "Element-Selektoren"
        ]
    },
    {
        "title": "JavaScript 1",
        "type": "code",
        "question": "Weswegen kann ich in einer mit const definierten Variable den Wert eines Objekt-Attributes ändern, aber nicht den Wert eines Integers?",
        "answer": "?"
    },
    {
        "title": "JavaScript 2",
        "type": "code",
        "question": "Kann ich eine Arrow-Function auch mit Namen deklarieren (Antwort: Ja) oder nur anonym (Antwort: Nein)?",
        "answer": "?"
    },
    {
        "title": "JavaScript 3",
        "type": "code",
        "question": "Wie oft wird der Inhalt der Schleife mit folgender Signatur ausgeführt: for(let i = -1; i <= 24; i += 5)?",
        "answer": "?"
    },
    {
        "title": "JSON 1",
        "type": "structure",
        "question": "Welche Arten von Apostrophen kann ich bei JSON verwenden, um einen String zu definieren?",
        "answer": "?"
    },
    {
        "title": "XML 1",
        "type": "structure",
        "question": "Beschreibe, welche Vor- und welche Nachteile XML gegenüber JSON hat (mind. je 1).",
        "answers": [
            "Con: ?",
            "Pro: ?"
        ]
    }
]

const parsed = [...JSON.parse(testJson)]
parsed[0].answer = "Der Browser führt den JS-Code erst nach Laden des HTML aus"
parsed[1].answers = [
    "Universal-Selektor",
    "Element-Selektoren",
    "Class-Selektoren",
    "ID-Selektoren"
]
parsed[2].answer = "Ein Integer ist ein primitiver Datentyp, der direkt im Speicher abgelegt wird. Objekt-Variablen sind verweise auf eine Speicher-Adresse (sind ein alias). Konstant definierte Objekt-Variablen unterbinden das Überschreiben der Alias, also dass die Variable auf einen anderen Speicher-Bereich zeigt."
parsed[3].answer = ""
parsed[4].answer = "sechsmal"
parsed[5].answer = "In JSON werden alle Values ausschließlich mit doppelten Hochkommas ausgezeichnet. In JS hingegen gibt es drei Varianten."
parsed[6].answers = [
    "Con: Parser bricht bei Fehler ab",
    "Pro: Schema erlaubt umfangreiche Validierung"
]
testJson = parsed.toJSON()