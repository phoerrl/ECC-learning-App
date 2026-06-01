const cards = [
  {
    topic: "Clearing",
    title: "Was ist Clearing?",
    text: "Clearing ist die organisierte Abwicklung nach einem Handel: Positionen werden bestätigt, Risiken bewertet, Sicherheiten berechnet und Zahlungen oder Lieferungen vorbereitet. In einem zentralen Clearing steht nicht mehr nur Käufer gegen Verkäufer, sondern eine Clearingstelle in der Mitte.",
    memory: "Clearing macht aus einem Handel einen abgesicherten Abwicklungsprozess."
  },
  {
    topic: "CCP",
    title: "Was bedeutet zentrale Gegenpartei?",
    text: "Eine Central Counterparty (CCP) tritt zwischen Käufer und Verkäufer. Für den Käufer wirkt sie wie Verkäufer, für den Verkäufer wie Käufer. So wird das Gegenparteirisiko gebündelt, gemessen und durch Regeln, Sicherheiten und Default-Prozesse kontrolliert.",
    memory: "CCP = die Mitte, die beide Seiten absichert."
  },
  {
    topic: "ECC",
    title: "Rolle der ECC",
    text: "European Commodity Clearing (ECC) ist eine Clearingstelle für Energie- und Commodity-Produkte. Sie übernimmt Gegenparteirisiken und garantiert die physische und finanzielle Abwicklung von Transaktionen, die zum Clearing an ECC übertragen werden.",
    memory: "ECC ist der Sicherheits- und Abwicklungsapparat hinter vielen Commodity-Geschäften."
  },
  {
    topic: "EEX",
    title: "Wie hängt ECC mit EEX zusammen?",
    text: "EEX organisiert Märkte und Handel. ECC übernimmt für EEX und weitere Partnerbörsen Clearing und Settlement. Vereinfacht: EEX ist der Marktplatz, ECC ist die zentrale Abwicklung und Risikosteuerung danach.",
    memory: "EEX bringt Handel zustande, ECC macht ihn abwickelbar."
  },
  {
    topic: "Historie",
    title: "Wie ist Clearing gewachsen?",
    text: "Clearing ist historisch aus dem Bedarf entstanden, viele einzelne Handelsbeziehungen zu standardisieren, Zahlungen zu verrechnen und Ausfallrisiken zu begrenzen. ECC selbst entstand 2006 als Spin-off der EEX AG und baute danach Produkte, Kundenbasis und Partnernetzwerk aus.",
    memory: "Je größer der Markt, desto wichtiger werden Netting, Sicherheiten und gemeinsame Regeln."
  },
  {
    topic: "TP-Forms",
    title: "Wofür braucht man TP-Forms?",
    text: "TP-Forms sind Trading-Participant-Formulare. Sie werden für bestimmte Produkte und insbesondere bei physischer Lieferung benötigt. Sie weisen gegenüber ECC nach, dass ein Teilnehmer die Voraussetzungen für die jeweilige Produktabwicklung und Lieferung erfüllt.",
    memory: "TP-Forms sind kein Papierkram um des Papierkrams willen: Sie prüfen Produkt- und Lieferfähigkeit."
  },
  {
    topic: "Admission",
    title: "Was sind Admission Forms?",
    text: "Admission Forms sind die Aufnahme- und Einrichtungsunterlagen für den Zugang zu ECC. Sie klären, wer teilnehmen darf, welche Rolle ein Unternehmen einnimmt, welche Verträge gelten, welche Ansprechpartner zuständig sind und welche technischen oder operativen Setups gebraucht werden.",
    memory: "Admission Forms machen Marktzugang prüfbar und operativ anschlussfähig."
  },
  {
    topic: "NCM Forms",
    title: "Non-Clearing Member Forms",
    text: "Für Non-Clearing Members nennt ECC ein Starter Kit mit KYC Questionnaire, NCM01, NCM02 und TP07 VAT details. Zusätzlich können weitere NCM-Formulare relevant sein, etwa für Clearer Change, Exposure Netting Spot oder Segregation.",
    memory: "NCM Forms regeln Teilnahme ohne eigene volle Clearing-Lizenz."
  },
  {
    topic: "CM Forms",
    title: "Clearing Member Forms",
    text: "Für Clearing Members gibt es ein eigenes Starter Kit. Es enthält unter anderem CM Questionnaire, CM01, CM02, CM04 sowie T01, T06 und T10. Clearing Members übernehmen eine stärkere Rolle im Clearing und brauchen deshalb umfangreichere Setup- und Vertragsunterlagen.",
    memory: "CM Forms bilden die Clearing-Lizenz, Verträge, Kontakte und technische Grundstruktur ab."
  },
  {
    topic: "DCP Forms",
    title: "DCP Member Forms",
    text: "DCP Members haben ebenfalls eigene Aufnahmeunterlagen. Das Starter Kit enthält laut ECC unter anderem KYC Questionnaire, DCP01, TP07 VAT details sowie operative Formulare wie O09, O10 und O11 für Limit Adjustment sowie Cash Deposit and Release.",
    memory: "DCP Forms verbinden Mitgliedschaft mit Zahlungs-, Limit- und Sicherheitenprozessen."
  },
  {
    topic: "TP-Forms",
    title: "Wer reicht TP-Forms ein?",
    text: "Laut ECC müssen sowohl Non-Clearing Members als auch Clearing Members relevante TP-Forms einreichen, wenn sie an einer ECC-Partnerbörse mit bestimmten Produkten starten wollen. Die Formulare ergänzen die allgemeinen Aufnahmeunterlagen.",
    memory: "Mitgliedschaft klärt den Zugang, TP-Forms klären konkrete Märkte und Produkte."
  },
  {
    topic: "Technical Forms",
    title: "Technical Forms",
    text: "Technical Forms dienen dem Zugang zu ECCs Clearing- und Settlement-Systemen. Sie regeln technische Nutzer, Schnittstellen, Backoffice-Auslagerung oder Zugänge wie den ECC Public FTP Server.",
    memory: "Technical Forms sorgen dafür, dass Systeme und Nutzer sauber angeschlossen sind."
  },
  {
    topic: "Operational Forms",
    title: "Operational Forms",
    text: "Operational Forms betreffen tägliche Prozesse und autorisierte Vertreter gegenüber ECC. Dazu gehören zum Beispiel Cash Deposit and Release, Emission-Rights-Anwendungen, Garantien für Spot Margin Credit und Signature Schedules.",
    memory: "Operational Forms machen den laufenden Betrieb handlungsfähig."
  },
  {
    topic: "Märkte",
    title: "In welchen Märkten ist ECC aktiv?",
    text: "ECC bietet Clearing für Energie- und Commodity-Märkte an, unter anderem Strom, Erdgas, Emissionsrechte, Herkunftsnachweise und weitere Commodity-Produkte. Über Partnerbörsen deckt ECC mehrere europäische Spot- und Terminmarktumfelder ab.",
    memory: "ECC ist nicht nur Strom: Clearing reicht über mehrere Commodity-Segmente."
  },
  {
    topic: "Partner",
    title: "Partnerbörsen",
    text: "ECC nennt als Partnerbörsen unter anderem EEX, EPEX SPOT, BSP, HUPX, NOREXECO, SEEPEX und SEMOpx. Damit verbindet ECC mehrere Märkte über integrierte und automatisierte Clearingprozesse.",
    memory: "Ein ECC-Zugang kann mehrere Partnerbörsen berühren."
  },
  {
    topic: "Settlement",
    title: "Financial Settlement",
    text: "Financial Settlement umfasst Geldflüsse: Cash Settlement, Margins, Optionsprämien und weitere Zahlungen. Für EUR-Zahlungen zwischen ECC und Clearing Members nutzt ECC vor allem Zentralbankgeld; für andere Währungen arbeitet ECC mit Correspondent Banks.",
    memory: "Financial Settlement bewegt Geld, Sicherheiten und Zahlungsansprüche."
  },
  {
    topic: "Settlement",
    title: "Physical Settlement",
    text: "Physical Settlement betrifft Lieferprozesse. ECC beschreibt physische Abwicklung für netzgebundene Produkte wie Strom und Gas sowie für Registerprodukte wie Emissionsrechte und Herkunftsnachweise.",
    memory: "Physical Settlement verbindet Handelsgeschäft, Lieferung und Infrastruktur."
  },
  {
    topic: "TSO",
    title: "Warum tauchen TSOs bei ECC auf?",
    text: "Bei physischer Lieferung netzgebundener Produkte braucht Clearing Anschluss an die reale Infrastruktur. ECC nennt Nominierungen innerhalb der Netze von 31 europäischen Übertragungsnetzbetreibern aus 19 Ländern.",
    memory: "TSOs sind nicht die Börse, aber bei physischer Lieferung Teil der Realität."
  },
  {
    topic: "Risk",
    title: "Margining",
    text: "Margining bedeutet, dass Teilnehmer Sicherheiten stellen müssen. Die Höhe hängt von Positionen und Marktrisiken ab. So soll ECC Verluste auffangen können, falls ein Teilnehmer ausfällt.",
    memory: "Margin ist der Sicherheitsgurt des Clearings."
  },
  {
    topic: "Risk",
    title: "Default Fund",
    text: "Neben individuellen Margins gibt es Beiträge zu einem gemeinsamen Default Fund. Er ist Teil der Verteidigungslinien im Risikomanagement, falls ein Ausfall größer wird als die Sicherheiten des betroffenen Teilnehmers.",
    memory: "Erst individuelle Sicherheiten, dann gemeinsame Schutzmechanismen."
  },
  {
    topic: "Netting",
    title: "Warum ist Netting wichtig?",
    text: "Netting verrechnet gegenläufige Verpflichtungen. Dadurch sinken Zahlungsströme, offene Risiken und benötigte Sicherheiten. ECC betont auch Cross-Margining und Cross-Commodity-Effekte als Nutzen integrierter Clearingprozesse.",
    memory: "Netting macht viele Brutto-Verpflichtungen zu weniger Netto-Risiko."
  },
  {
    topic: "Mitglieder",
    title: "Clearing Member, NCM und DCP",
    text: "ECC unterscheidet mehrere Zugangsrollen: Clearing Members, Non-Clearing Members und DCP Members. Sie stehen für unterschiedliche Zugangs- und Verantwortungsniveaus im Clearing.",
    memory: "Nicht jeder Handelsteilnehmer hat dieselbe Clearingrolle."
  },
  {
    topic: "Rollen",
    title: "Der einfachste Rollenvergleich",
    text: "NCM bedeutet: Das Unternehmen handelt an einer Partnerbörse, nutzt aber eine Clearing Bank beziehungsweise einen General Clearing Member für die Clearing-Infrastruktur. DCP bedeutet: direkter Zugang zu Handel und Clearing in bestimmten Spotmärkten, ohne Clearing Bank. CM bedeutet: Finanzinstitut mit Clearing-Lizenz, das Clearingverantwortung übernimmt.",
    memory: "NCM nutzt CM, DCP geht direkt in Spot, CM trägt Clearing-Verantwortung."
  },
  {
    topic: "NCM",
    title: "NCM: Trading Participant mit Clearing Bank",
    text: "Ein Non-Clearing Member ist laut ECC ein Unternehmen ohne eigene Clearing-Lizenz. Es nimmt als Kunde eines Clearing Members am Clearing teil. Der Clearing Member übernimmt dabei die finanzielle Abwicklung über eine zentrale Schnittstelle.",
    memory: "NCM handelt, aber cleart nicht selbst."
  },
  {
    topic: "NCM",
    title: "NCM: Zwei Schritte zur Zulassung",
    text: "Für NCMs beschreibt ECC zwei Teile: erst die Zulassung als Non-Clearing Member mit NCM-Forms, dann die Zulassung für konkrete Produkte über TP-Forms. Für Systemzugang kommen technische Formulare hinzu.",
    memory: "NCM-Zugang = Mitgliedschaft plus Produktfreischaltung."
  },
  {
    topic: "DCP",
    title: "DCP: Direkter Spotmarktzugang",
    text: "Ein Direct Clearing Participant ist laut ECC ein Trading Participant mit direktem Zugang zu Handel und Clearing bestimmter Spotmärkte, zum Beispiel Day-Ahead- und Intraday-Strommärkte. Ein DCP benötigt keine Clearing Bank, aber eine geeignete Settlement Bank.",
    memory: "DCP = direkt in ausgewählten Spotmärkten, aber mit Settlement Bank."
  },
  {
    topic: "CM",
    title: "CM: Clearing Bank und Risikoträger",
    text: "Ein Institution Clearing Member, auch Clearing Bank, ist direktes Mitglied der Clearingstelle. Es agiert als Garant und Payment Agent für Spotmarktgeschäfte und kann bei Derivaten zwischen ECC und Non-Clearing Members als Vertragspartei treten.",
    memory: "CM ist die Bank-/Clearingrolle mit Lizenz, Sicherheiten und Zahlungspflichten."
  },
  {
    topic: "CM",
    title: "Was cleart ein Clearing Member?",
    text: "Ein Clearing Member cleart Transaktionen und OTC-registrierte Geschäfte, die an ECC-Partnerbörsen in ECC-zugelassenen Produkten abgeschlossen werden. Die Clearing-Lizenz kann grundsätzlich alle von ECC geclearten Produkte erfassen, solange produktspezifische Voraussetzungen erfüllt sind.",
    memory: "CMs sind die direkten Clearingteilnehmer für Partnerbörsen- und OTC-registrierte Geschäfte."
  },
  {
    topic: "CM",
    title: "Rechtsgrundlage der CM-Rolle",
    text: "Die vertragliche Grundlage zwischen ECC und Clearing Member bilden laut ECC die ECC Clearing Conditions, Technical Regulations und die Price List. Damit ist die CM-Rolle nicht nur operativ, sondern vertraglich und regelbasiert definiert.",
    memory: "CM-Verantwortung steht auf Regeln, Technikvorgaben und Preis-/Gebührenstruktur."
  },
  {
    topic: "CM Voraussetzungen",
    title: "Was muss ein Clearing Member mitbringen?",
    text: "ECC nennt unter anderem regulatorische Zulassung, ausreichendes haftendes Eigenkapital, T2-Konto, Sicherheitenkonto bei Clearstream Banking Frankfurt, technischen Zugang zum Settlement-System und qualifiziertes Personal.",
    memory: "CM werden ist anspruchsvoll: Lizenz, Kapital, Konten, Technik und Personal."
  },
  {
    topic: "CM Voraussetzungen",
    title: "Eigenmittel und Clearing Fund",
    text: "ECC nennt als Grundbedingungen haftendes Eigenkapital von 30 Mio. EUR für GCMs und 7,5 Mio. EUR für DCMs. Außerdem sind Beiträge zum Clearing Fund vorgesehen: 3,0 Mio. EUR für GCMs und 0,5 Mio. EUR für DCMs.",
    memory: "GCM ist breiter und hat deutlich höhere Kapital- und Fund-Anforderungen."
  },
  {
    topic: "CM Voraussetzungen",
    title: "Konten und Sicherheiten",
    text: "Für Clearing Members nennt ECC unter anderem ein T2-Konto, ein Pledge-Securities Account bei Clearstream Banking Frankfurt und bei Multi-Currency-Settlement ein Settlement Account für USD oder GBP bei einer Correspondent Bank.",
    memory: "CM brauchen Zahlungs- und Sicherheiten-Infrastruktur, nicht nur einen Vertrag."
  },
  {
    topic: "GCM/DCM",
    title: "GCM und DCM",
    text: "ECC unterscheidet General Clearing Member und Direct Clearing Member. Ein DCM kann eigene, verbundene NCM- und bestimmte Kundentransaktionen clearen. Ein GCM kann zusätzlich für beliebige Non-Clearing Members clearen.",
    memory: "GCM ist breiter: nicht nur eigene oder verbundene NCMs."
  },
  {
    topic: "Indirect Access",
    title: "Indirect Access",
    text: "Neben NCM und DCP beschreibt ECC auch indirekten Zugang über Access Providers. Damit kann ein Unternehmen an Börsenprodukten teilnehmen, ohne selbst Börsenmitglied zu werden.",
    memory: "Indirect Access ist Marktzugang über einen Anbieter statt eigene Mitgliedschaft."
  },
  {
    topic: "Rollen",
    title: "Entscheidungsfrage: NCM oder DCP?",
    text: "Die Kernfrage lautet: Will oder kann ein Unternehmen direkt in bestimmten Spotmärkten clearen und mit einer Settlement Bank arbeiten? Dann ist DCP relevant. Braucht es die Clearing-Infrastruktur einer Clearing Bank und will auch Derivate abdecken, spricht vieles für NCM.",
    memory: "DCP ist direkter und enger; NCM ist breiter über Clearing Bank."
  },
  {
    topic: "Formulare",
    title: "Warum so viele Formulare?",
    text: "Die Formulare strukturieren Zulassung, Know-your-Customer-Prüfung, Verträge, Ansprechpartner, Steuerdaten, technische Zugänge, Sicherheiten, operative Vollmachten und produktbezogene Lieferfähigkeit.",
    memory: "Forms übersetzen Marktteilnahme in prüfbare Verantwortlichkeiten."
  },
  {
    topic: "KYC",
    title: "Warum KYC?",
    text: "KYC steht für Know Your Customer. Im Clearingumfeld hilft es, Teilnehmer, Eigentümerstrukturen und Risiken zu identifizieren, bevor Zugang zu Markt-, Clearing- und Settlementprozessen eingerichtet wird.",
    memory: "KYC ist die Identitäts- und Risikoprüfung am Anfang der Teilnahme."
  },
  {
    topic: "Post-Trading",
    title: "Was kommt nach dem Handschlag?",
    text: "Die Workshop-Folien beschreiben Clearing und Settlement als das, was nach dem Handelsabschluss passiert. Zur Trading Value Chain gehören Trading, Clearing, Settlement und bei lagerfähigen Gütern auch Custody.",
    memory: "Trading schließt den Deal, Post-Trading macht ihn erfüllbar."
  },
  {
    topic: "Post-Trading",
    title: "Clearing vs. Settlement",
    text: "Clearing bereitet eine Transaktion für Settlement vor: Matching, Recording und Verarbeitung von Instruktionen. Settlement ist die rechtlich bindende Erfüllung: Cash oder Assets werden gegen Cash oder Assets übertragen.",
    memory: "Clearing bereitet vor, Settlement erfüllt."
  },
  {
    topic: "OTC vs Exchange",
    title: "OTC, Börse und zentrales Clearing",
    text: "Die Folien stellen OTC-Handel als weniger standardisiert und mit vielen bilateralen Schnittstellen dar. Börsenhandel und zentrales Clearing erhöhen Standardisierung, Transparenz, Anonymität und gesicherte Zahlung sowie Lieferung.",
    memory: "Clearing reduziert bilaterale Komplexität und macht aus vielen Beziehungen eine zentrale Schnittstelle."
  },
  {
    topic: "Network Effect",
    title: "Warum hilft zentrales Clearing beim Netzwerk?",
    text: "Ohne zentrale Stelle braucht jeder Teilnehmer Beziehungen zu vielen Gegenparteien. Die Folien zeigen mit Metcalfe's Law, dass Verbindungen stark wachsen. Zentrales Clearing reduziert die Schnittstellen aus Sicht des Teilnehmers auf eine zentrale Clearingbeziehung.",
    memory: "Mehr Marktteilnehmer bedeuten viele bilaterale Kanten; Clearing bündelt sie."
  },
  {
    topic: "Trade Registration",
    title: "OTC-Geschäfte ins Clearing bringen",
    text: "Trade Registration bedeutet, dass OTC-Transaktionen an einer Börse beziehungsweise Plattform für das Clearing registriert werden. So können bilaterale Deals in eine gesicherte Clearingumgebung übertragen werden.",
    memory: "Trade Registration macht OTC-Deals clearingfähig."
  },
  {
    topic: "DCP",
    title: "DCP als Prepaid-Modell",
    text: "Die Workshop-Folien beschreiben das DCP-Modell als Prepaid-Clearingmodell für Spotmärkte. DCPs können nur bis zu einem Limit handeln, das vorher besichert sein muss; Zahlungen laufen über eine Settlement Bank.",
    memory: "DCP: erst Limit besichern, dann bis zu diesem Limit handeln."
  },
  {
    topic: "Risk",
    title: "Lines of Defence",
    text: "ECCs Risikomanagement arbeitet mit mehreren Verteidigungslinien: Admission Criteria, Exposure Management, Initial Margins, Default Fund, Assessments/Replenishment und ECCs Skin-in-the-game.",
    memory: "Risk Management ist ein Schutzsystem mit mehreren Schichten."
  },
  {
    topic: "Margin Types",
    title: "Spot- und Derivatemargins",
    text: "Für Spotmärkte nennen die Folien IMSM für potenzielle künftige Exposure und CESM für aktuelle Zahlungsbeträge seit dem letzten Settlement. Bei Derivaten werden SPAN Initial Margin, Variation Margin und bei Optionen Premium Margin genutzt.",
    memory: "Spot: IMSM/CESM. Derivate: SPAN, Variation, Premium."
  },
  {
    topic: "Default Waterfall",
    title: "Default Waterfall",
    text: "Bei einem Ausfall werden zuerst Margins des defaultenden Clearing Members verwendet, dann dessen Default-Fund-Beitrag, danach ECCs Dedicated Own Resources, die verbleibenden Default-Fund-Beiträge, mögliche Replenishments und schließlich weiteres ECC-Kapital.",
    memory: "Default Waterfall ordnet, wessen Ressourcen wann Verluste tragen."
  },
  {
    topic: "Physical Settlement",
    title: "Power und Gas: Nominierung",
    text: "Für physische Lieferung von Power oder Gas sammelt ECC Handelsinformationen, aggregiert Nominierungen pro Marktteilnehmer, Lieferstunde und TSO und sendet Schedule-Informationen. Der TSO bestätigt Matching oder meldet Mismatches.",
    memory: "Bei Power/Gas übersetzt Settlement Trades in nominierte Lieferfahrpläne."
  },
  {
    topic: "Physical Settlement",
    title: "EUAs und GoOs: Register statt Netz",
    text: "Bei Emissionsrechten und Herkunftsnachweisen läuft Delivery über Registerbuchungen. Für EUAs zeigen die Folien eine Lieferung innerhalb des Union Registry Accounts von ECC, mit schneller Lieferung an Käufer.",
    memory: "Nicht alles fließt durchs Netz: Zertifikate werden in Registern übertragen."
  },
  {
    topic: "Financial Settlement",
    title: "Automatisch, schnell, sicher",
    text: "Financial Settlement umfasst Contract Value, Margins, Optionsprämien und Gebühren. Die Folien betonen automatische Zahlungen über Clearing Members oder Settlement Banks und Netting zu einem Zahlbetrag pro Bank.",
    memory: "Financial Settlement netzt viele Zahlungsbestandteile zu einem Zahlbetrag."
  },
  {
    topic: "Financial Settlement",
    title: "TARGET2 und Fremdwährungen",
    text: "Die Folien nennen TARGET2 als robuste EUR-Infrastruktur. Zusätzlich kann ECC Financial Settlement in USD, GBP und JPY über Correspondent Banks durchführen.",
    memory: "EUR läuft über Zentralbankinfrastruktur; Fremdwährungen über Correspondent Banks."
  },
  {
    topic: "Regulierung",
    title: "Warum ist das streng reguliert?",
    text: "Eine Clearingstelle bündelt Risiken vieler Marktteilnehmer. Deshalb sind klare Regeln, Risikomanagement, Sicherheiten, Standardprozesse und regulatorische Anforderungen entscheidend für Vertrauen und Systemstabilität.",
    memory: "Je zentraler die Rolle, desto wichtiger die Regeln."
  }
];

const questions = [
  {
    topic: "Clearing",
    question: "Was beschreibt Clearing am besten?",
    answers: [
      "Die organisierte Abwicklung und Risikoprüfung nach einem Handel.",
      "Die physische Produktion von Strom in Kraftwerken.",
      "Die politische Festlegung von Energiepreisen."
    ],
    correct: 0,
    explain: "Clearing setzt nach dem Handel an: Bestätigung, Risikoberechnung, Sicherheiten und Settlement."
  },
  {
    topic: "CCP",
    question: "Was ist die Kernidee einer Central Counterparty?",
    answers: [
      "Sie tritt zwischen Käufer und Verkäufer und wird zur Gegenpartei beider Seiten.",
      "Sie ersetzt die Börsenaufsicht.",
      "Sie betreibt alle Stromnetze in Europa."
    ],
    correct: 0,
    explain: "Als CCP übernimmt die Clearingstelle die zentrale Gegenparteifunktion."
  },
  {
    topic: "ECC",
    question: "Welche Rolle beschreibt ECC laut eigener Darstellung?",
    answers: [
      "Zentrale Clearingstelle für Energie- und Commodity-Produkte.",
      "Reiner Stromlieferant für Haushalte.",
      "Regulierungsbehörde für Netzentgelte."
    ],
    correct: 0,
    explain: "ECC spezialisiert sich auf Clearing und Settlement von Energie- und Commodity-Produkten."
  },
  {
    topic: "ECC",
    question: "Was garantiert ECC im Rahmen ihrer Clearing Services?",
    answers: [
      "Die physische und finanzielle Abwicklung geclearter Transaktionen.",
      "Dass Marktpreise nie schwanken.",
      "Dass jede Handelsposition automatisch profitabel ist."
    ],
    correct: 0,
    explain: "ECC übernimmt Gegenparteirisiko und garantiert Settlement für geclearte Geschäfte."
  },
  {
    topic: "EEX",
    question: "Wie kann man die Beziehung von EEX und ECC stark vereinfacht beschreiben?",
    answers: [
      "EEX organisiert Handel, ECC übernimmt Clearing und Settlement.",
      "ECC organisiert den Handel, EEX betreibt ausschließlich das Clearing.",
      "Beide betreiben ausschließlich Übertragungsnetze."
    ],
    correct: 0,
    explain: "Die EEX ist Marktplatz; ECC ist die Clearing- und Abwicklungsinfrastruktur."
  },
  {
    topic: "Historie",
    question: "Wann wurde ECC als Spin-off der EEX AG gegründet?",
    answers: [
      "2006",
      "1990",
      "2024"
    ],
    correct: 0,
    explain: "ECC beschreibt sich als 2006 gegründetes Spin-off der EEX AG."
  },
  {
    topic: "Historie",
    question: "Warum sind Clearingstellen historisch wichtiger geworden?",
    answers: [
      "Weil größere Märkte Netting, Sicherheiten und standardisierte Abwicklung brauchen.",
      "Weil Strom dadurch physikalisch schneller fließt.",
      "Weil Börsenpreise dadurch abgeschafft werden."
    ],
    correct: 0,
    explain: "Mit wachsendem Handel steigen Komplexität und Gegenparteirisiken; Clearing reduziert diese Risiken."
  },
  {
    topic: "TP-Forms",
    question: "Wofür stehen TP-Forms?",
    answers: [
      "Trading-Participant-Forms.",
      "Transmission-Price-Forms.",
      "Tax-Portfolio-Forms."
    ],
    correct: 0,
    explain: "ECC bezeichnet sie als separate Trading Participant Forms."
  },
  {
    topic: "TP-Forms",
    question: "Wofür werden TP-Forms besonders gebraucht?",
    answers: [
      "Für bestimmte Produkte und wenn physische Lieferung gewählt wird.",
      "Nur für Marketingmaterial.",
      "Nur für private Haushaltskunden."
    ],
    correct: 0,
    explain: "Die ECC-Seite nennt spezifische Produkte und physische Lieferung als Auslöser."
  },
  {
    topic: "TP-Forms",
    question: "Was sollen TP-Forms gegenüber ECC nachweisen?",
    answers: [
      "Die Fähigkeit zur physischen Lieferung oder produktbezogenen Abwicklung.",
      "Dass ein Unternehmen keine Bilanz erstellen muss.",
      "Dass ein Marktteilnehmer nie Margin zahlen muss."
    ],
    correct: 0,
    explain: "TP-Forms belegen die Fähigkeit für die jeweilige Produkt- und Lieferabwicklung."
  },
  {
    topic: "Admission",
    question: "Was ist der Zweck der Admission Forms bei ECC?",
    answers: [
      "Sie strukturieren Zulassung, Rollen, Verträge und operative Einrichtung für den Zugang zu ECC.",
      "Sie ersetzen das Clearing selbst.",
      "Sie legen die Börsenpreise für Strom fest."
    ],
    correct: 0,
    explain: "Admission Forms machen aus einem Zugangswunsch einen prüfbaren und eingerichteten Teilnahmeprozess."
  },
  {
    topic: "Admission",
    question: "Welche Logik steckt hinter den Starter Kits?",
    answers: [
      "Sie bündeln grundlegende Aufnahmeformulare für eine bestimmte Mitgliedsrolle.",
      "Sie sind ausschließlich Schulungsfolien.",
      "Sie enthalten nur Preislisten."
    ],
    correct: 0,
    explain: "ECC stellt Starter Kits für NCMs, CMs und DCP Members bereit, damit die Basiseinreichung vollständig ist."
  },
  {
    topic: "KYC",
    question: "Wofür steht KYC im Admission-Kontext?",
    answers: [
      "Know Your Customer.",
      "Keep Your Commodity.",
      "Kilowatt Yearly Clearing."
    ],
    correct: 0,
    explain: "KYC dient der Identitäts- und Risikoprüfung von Teilnehmern."
  },
  {
    topic: "NCM Forms",
    question: "Welche Unterlage gehört laut ECC zum NCM Starter Kit?",
    answers: [
      "KYC Questionnaire.",
      "Ein TSO-Netzausbauplan.",
      "Eine Stromrechnung für Haushalte."
    ],
    correct: 0,
    explain: "Das NCM Starter Kit enthält unter anderem den KYC Questionnaire."
  },
  {
    topic: "NCM Forms",
    question: "Wofür steht NCM?",
    answers: [
      "Non-Clearing Member.",
      "National Commodity Meter.",
      "Netting Control Market."
    ],
    correct: 0,
    explain: "NCMs handeln nicht mit derselben Clearingrolle wie Clearing Members."
  },
  {
    topic: "NCM Forms",
    question: "Welche zusätzliche Dokumente nennt ECC neben den NCM Forms?",
    answers: [
      "Annual report und certificate from company registry.",
      "Nur ein Passfoto.",
      "Eine Wetterprognose."
    ],
    correct: 0,
    explain: "ECC nennt zusätzlich Jahresbericht und Handelsregister- beziehungsweise Unternehmensregister-Nachweis."
  },
  {
    topic: "CM Forms",
    question: "Wofür dient CM01 laut Bezeichnung auf der ECC-Seite?",
    answers: [
      "Application for Granting of a Clearing License.",
      "Antrag auf private Stromlieferung.",
      "Meldung einer Wetterstation."
    ],
    correct: 0,
    explain: "CM01 ist der Antrag auf Erteilung einer Clearing-Lizenz."
  },
  {
    topic: "CM Forms",
    question: "Welche Unterlagen enthält das CM Starter Kit unter anderem?",
    answers: [
      "CM Questionnaire, CM01, CM02, CM04, T01, T06 und T10.",
      "Nur TP07.",
      "Nur operative Cash-Release-Formulare."
    ],
    correct: 0,
    explain: "Das CM Starter Kit ist breiter, weil Clearing Members eine stärkere Rolle und Verantwortung haben."
  },
  {
    topic: "CM Forms",
    question: "Was ist CM04 laut Admission-Forms-Liste?",
    answers: [
      "Setup, Modification oder Deletion von Contacts and Functions.",
      "Ein Strom-Future.",
      "Ein Herkunftsnachweis."
    ],
    correct: 0,
    explain: "CM04 verwaltet Kontakte und Funktionen im ECC-Setup."
  },
  {
    topic: "DCP Forms",
    question: "Welche Formulare nennt ECC im DCP Starter Kit unter anderem?",
    answers: [
      "DCP01, TP07, O09, O10 und O11.",
      "Nur NCM01 und NCM02.",
      "Nur technische FTP-User-Anträge."
    ],
    correct: 0,
    explain: "Das DCP Starter Kit verbindet Aufnahme, Steuerdaten und operative Zahlungs- beziehungsweise Limitprozesse."
  },
  {
    topic: "DCP Forms",
    question: "Was beschreibt O09 im DCP-Kontext?",
    answers: [
      "DCPCM Limit Adjustment.",
      "Ein Gasliefervertrag.",
      "Eine EEX-Preisauktion."
    ],
    correct: 0,
    explain: "O09 wird auf der ECC-Seite als DCPCM Limit Adjustment geführt."
  },
  {
    topic: "DCP Forms",
    question: "Welche weiteren Dokumente nennt ECC zusätzlich zu den DCP Member Forms?",
    answers: [
      "Annual report, company-registry certificate und Settlement-Bank-Vereinbarung oder Kopie einer bilateralen Vereinbarung.",
      "Nur eine Marketingbroschüre.",
      "Keine weiteren Dokumente."
    ],
    correct: 0,
    explain: "DCP Members brauchen zusätzlich auch bankbezogene Settlement-Nachweise."
  },
  {
    topic: "Technical Forms",
    question: "Wofür braucht ein Member Technical Forms?",
    answers: [
      "Für Zugang zu ECCs Clearing- und Settlement-Systemen.",
      "Für die Festlegung politischer Stromziele.",
      "Für die Messung privater Steckdosen."
    ],
    correct: 0,
    explain: "Technical Forms richten technische Zugänge und Nutzungen der ECC-Systeme ein."
  },
  {
    topic: "Technical Forms",
    question: "Was ist T10p laut ECC-Liste sinngemäß?",
    answers: [
      "Ein Antrag für Setup, Änderung oder Löschung von User-IDs für den ECC Public FTP Server.",
      "Ein Margin-Modell.",
      "Ein Spotmarktprodukt."
    ],
    correct: 0,
    explain: "T10p betrifft Nutzer-IDs für den ECC Public FTP Server."
  },
  {
    topic: "Operational Forms",
    question: "Wofür sind Operational Forms gedacht?",
    answers: [
      "Für tägliche operative Prozesse und autorisierte Vertreter gegenüber ECC.",
      "Für reine Pressearbeit.",
      "Für die Festlegung von Netzfrequenzgrenzen."
    ],
    correct: 0,
    explain: "ECC beschreibt Operational Forms als relevant für tägliche Prozesse und Bevollmächtigungen."
  },
  {
    topic: "Operational Forms",
    question: "Was gehört zu den Operational Forms auf der ECC-Seite?",
    answers: [
      "Cash Deposit and Release sowie Signature Schedule.",
      "Nur der KYC Questionnaire.",
      "Ausschließlich CM01."
    ],
    correct: 0,
    explain: "Operational Forms umfassen unter anderem Cash Deposit and Release und Signature Schedule."
  },
  {
    topic: "Admission",
    question: "Wie unterscheiden sich TP-Forms von den allgemeinen Admission Forms?",
    answers: [
      "TP-Forms beziehen sich auf bestimmte Produkte und Lieferfähigkeit; Admission Forms regeln den generellen Zugang und das Setup.",
      "TP-Forms sind die einzigen Formulare auf der Seite.",
      "Admission Forms sind nur für Privatkunden gedacht."
    ],
    correct: 0,
    explain: "TP-Forms sind ein Teilbereich innerhalb der größeren Admission-Forms-Landschaft."
  },
  {
    topic: "Admission",
    question: "Warum ist die Formlandschaft bei ECC so granular?",
    answers: [
      "Weil Mitgliedsrolle, Produkt, Lieferung, Technik, Steuerdaten und operative Vollmachten unterschiedliche Risiken und Setups betreffen.",
      "Weil ECC damit Börsenpreise veröffentlicht.",
      "Weil alle Teilnehmer exakt dieselbe Rolle haben."
    ],
    correct: 0,
    explain: "Die Formulargruppen trennen fachlich unterschiedliche Verantwortlichkeiten."
  },
  {
    topic: "TP-Forms",
    question: "Wer muss relevante TP-Forms einreichen, wenn an Partnerbörsen bestimmte Produkte gehandelt werden sollen?",
    answers: [
      "Sowohl Non-Clearing Members als auch Clearing Members.",
      "Nur Verbraucher ohne Marktzugang.",
      "Nur nationale Regulierungsbehörden."
    ],
    correct: 0,
    explain: "ECC nennt NCMs und CMs als Einreicher relevanter TP-Forms."
  },
  {
    topic: "Admission",
    question: "Was gehört im NCM Starter Kit laut ECC unter anderem dazu?",
    answers: [
      "KYC Questionnaire, NCM01, NCM02 und TP07 VAT details.",
      "Nur ein Werbeflyer.",
      "Ausschließlich technische Netzpläne."
    ],
    correct: 0,
    explain: "Das Starter Kit bündelt grundlegende Aufnahmeunterlagen für Non-Clearing Members."
  },
  {
    topic: "Admission",
    question: "Was ist TP07 auf der Admission-Forms-Seite?",
    answers: [
      "VAT details.",
      "Ein Regelenergieprodukt.",
      "Eine Börsenauktion."
    ],
    correct: 0,
    explain: "TP07 wird auf der ECC-Seite als VAT details geführt."
  },
  {
    topic: "Mitglieder",
    question: "Welche drei Zugangstypen nennt ECC für den Zugang zu ECC?",
    answers: [
      "Clearing Members, Non-Clearing Members und DCP Members.",
      "TSO, DSO und Prosumer.",
      "Spot, Future und Forward."
    ],
    correct: 0,
    explain: "ECC nennt diese drei Mitgliedschafts- bzw. Zugangstypen."
  },
  {
    topic: "Rollen",
    question: "Welche Aussage trifft den Unterschied zwischen NCM, DCP und CM am besten?",
    answers: [
      "NCM nutzt eine Clearing Bank, DCP cleart direkt in bestimmten Spotmärkten, CM ist Clearing Bank mit Lizenz.",
      "NCM, DCP und CM sind nur drei Namen für dieselbe Rolle.",
      "DCP ist immer für Derivatemärkte, CM nur für Haushaltskunden."
    ],
    correct: 0,
    explain: "Das ist die Grundlogik: NCM über CM, DCP direkt für geeignete Spotmärkte, CM als lizenzierte Clearingrolle."
  },
  {
    topic: "NCM",
    question: "Was ist ein Non-Clearing Member laut ECC im Kern?",
    answers: [
      "Ein Unternehmen ohne Clearing-Lizenz, das als Kunde eines Clearing Members am Clearing teilnimmt.",
      "Eine Bank mit vollständiger Clearing-Lizenz.",
      "Ein TSO für physische Stromlieferung."
    ],
    correct: 0,
    explain: "NCMs nehmen am Clearing teil, aber über einen Clearing Member."
  },
  {
    topic: "NCM",
    question: "Was muss ein Unternehmen für NCM-Zugang laut ECC grundsätzlich finden?",
    answers: [
      "Eine als General Clearing Member zugelassene Clearing Bank.",
      "Einen privaten Stromkunden.",
      "Eine Wetterdatenagentur."
    ],
    correct: 0,
    explain: "Die Clearing Bank stellt die notwendige Clearing-Infrastruktur."
  },
  {
    topic: "NCM",
    question: "Welche Aussage passt zur NCM-Zulassung?",
    answers: [
      "Erst NCM-Forms für Mitgliedschaft, dann TP-Forms für konkrete Produkte.",
      "Nur ein einziges Formular für alle Märkte und Produkte.",
      "Keine KYC-Prüfung möglich."
    ],
    correct: 0,
    explain: "ECC beschreibt Admission als NCM und danach produktbezogene Zulassung über TP-Forms."
  },
  {
    topic: "DCP",
    question: "Was ist ein Direct Clearing Participant?",
    answers: [
      "Ein Trading Participant mit direktem Zugang zu Handel und Clearing bestimmter Spotmärkte.",
      "Ein Unternehmen, das nur über eine Clearing Bank teilnehmen darf.",
      "Ein General Clearing Member für alle NCMs."
    ],
    correct: 0,
    explain: "DCP ist der direkte Zugang für DCP-geeignete Spotmärkte."
  },
  {
    topic: "DCP",
    question: "Was braucht ein DCP laut ECC statt einer Clearing Bank?",
    answers: [
      "Eine geeignete Settlement Bank.",
      "Einen TSO als Clearing Bank.",
      "Keinerlei Zahlungsinfrastruktur."
    ],
    correct: 0,
    explain: "ECC beschreibt, dass DCPs keine Clearing Bank benötigen, aber eine Settlement Bank passend zum Modell."
  },
  {
    topic: "DCP",
    question: "Für welche Märkte ist DCP laut ECC besonders gedacht?",
    answers: [
      "Bestimmte Spotmärkte, etwa Day-Ahead- und Intraday-Strommärkte.",
      "Alle Derivatemärkte ohne Einschränkung.",
      "Ausschließlich OTC-Kreditmärkte."
    ],
    correct: 0,
    explain: "ECC nennt DCP als direkte Option für bestimmte Spotmärkte."
  },
  {
    topic: "CM",
    question: "Was ist ein Institution Clearing Member bei ECC?",
    answers: [
      "Ein direktes Mitglied der Clearingstelle, auch Clearing Bank genannt.",
      "Ein Unternehmen ohne Clearing-Lizenz.",
      "Ein reiner Access Provider ohne Clearingfunktion."
    ],
    correct: 0,
    explain: "Institution Clearing Members sind Clearing Banks mit direkter Rolle im Clearing."
  },
  {
    topic: "CM",
    question: "Welche Rolle hat ein Clearing Member im Spotmarkt laut ECC sinngemäß?",
    answers: [
      "Es ist Garant und Payment Agent für Trades.",
      "Es entscheidet allein über physische Netzfrequenz.",
      "Es ersetzt die Partnerbörse."
    ],
    correct: 0,
    explain: "ECC beschreibt den CM als guarantor and payment agent für Spotmarktgeschäfte."
  },
  {
    topic: "CM",
    question: "Welche Geschäfte kann ein Clearing Member bei ECC grundsätzlich clearen?",
    answers: [
      "Transaktionen und OTC-registrierte Geschäfte in von ECC zugelassenen Produkten an ECC-Partnerbörsen.",
      "Nur private Haushaltsrechnungen.",
      "Ausschließlich Netzausbauprojekte."
    ],
    correct: 0,
    explain: "ECC beschreibt Clearing Members als direkt berechtigt für Partnerbörsen- und OTC-registrierte Geschäfte in geclearten Produkten."
  },
  {
    topic: "CM",
    question: "Welche Dokumente bilden laut ECC die vertragliche Grundlage zwischen ECC und Clearing Member?",
    answers: [
      "ECC Clearing Conditions, Technical Regulations und Price List.",
      "Nur ein informeller E-Mail-Austausch.",
      "Ausschließlich die Website der Partnerbörse."
    ],
    correct: 0,
    explain: "Diese Dokumente definieren Rechte, Pflichten, technische Regeln und Kostenstruktur."
  },
  {
    topic: "CM",
    question: "Welche Voraussetzung passt zu einem Clearing Member?",
    answers: [
      "Clearing-Lizenz, Eigenmittelanforderungen, Konten und technische Anbindung.",
      "Nur eine E-Mail-Adresse.",
      "Keine regulatorische Zulassung."
    ],
    correct: 0,
    explain: "CMs haben deutlich höhere Anforderungen als NCMs oder DCPs."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Welche regulatorische Grundvoraussetzung nennt ECC für Institution Clearing Members?",
    answers: [
      "Zulassung als CRR Credit Institution oder Investment Firm beziehungsweise gleichwertige Zulassung.",
      "Zulassung als privater Stromverbraucher.",
      "Registrierung als Wetterdienst."
    ],
    correct: 0,
    explain: "ECC verlangt eine passende regulatorische Zulassung als Finanzinstitut oder äquivalent."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Wie viel haftendes Eigenkapital nennt ECC als Grundanforderung für ein GCM?",
    answers: [
      "30 Mio. EUR.",
      "3.000 EUR.",
      "0 EUR."
    ],
    correct: 0,
    explain: "ECC nennt 30 Mio. EUR liable equity capital für General Clearing Members."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Wie viel haftendes Eigenkapital nennt ECC als Grundanforderung für ein DCM?",
    answers: [
      "7,5 Mio. EUR.",
      "750 EUR.",
      "75 Mrd. EUR."
    ],
    correct: 0,
    explain: "ECC nennt 7,5 Mio. EUR liable equity capital für Direct Clearing Members."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Welche Clearing-Fund-Beiträge nennt ECC als Grundwerte?",
    answers: [
      "3,0 Mio. EUR für GCMs und 0,5 Mio. EUR für DCMs.",
      "0 EUR für beide Rollen.",
      "Jeweils exakt 10 EUR."
    ],
    correct: 0,
    explain: "Der Clearing Fund ist eine Verteidigungslinie im Ausfallmanagement; GCMs leisten einen höheren Grundbeitrag."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Welche Konten beziehungsweise Infrastruktur nennt ECC für Clearing Members?",
    answers: [
      "T2-Konto, Pledge-Securities Account bei Clearstream Banking Frankfurt und technischer Zugang zum Settlement-System.",
      "Nur ein privates Girokonto.",
      "Nur ein Social-Media-Konto."
    ],
    correct: 0,
    explain: "CMs brauchen Zahlungs-, Sicherheiten- und technische Settlement-Infrastruktur."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Was ist bei Multi-Currency-Settlement zusätzlich relevant?",
    answers: [
      "Ein Settlement Account für USD oder GBP bei einer Correspondent Bank.",
      "Ein zusätzlicher Haushaltsstromvertrag.",
      "Ein TSO als Bürge."
    ],
    correct: 0,
    explain: "Für USD/GBP verweist ECC auf Settlement Accounts bei Correspondent Banks."
  },
  {
    topic: "CM Voraussetzungen",
    question: "Warum verlangt ECC qualifiziertes Personal von Clearing Members?",
    answers: [
      "Weil Clearingbetrieb, Risiko, Settlement und technische Prozesse professionell bedient werden müssen.",
      "Weil jede App einen Designer braucht.",
      "Weil physische Elektronen manuell sortiert werden."
    ],
    correct: 0,
    explain: "Clearing Members tragen operative und finanzielle Verantwortung; dafür braucht es passende Fachkompetenz."
  },
  {
    topic: "GCM/DCM",
    question: "Was unterscheidet GCM und DCM vereinfacht?",
    answers: [
      "GCM kann für beliebige NCMs clearen; DCM ist enger auf eigene, verbundene oder bestimmte Kundentransaktionen begrenzt.",
      "DCM darf alles, GCM darf nichts.",
      "GCM und DCM sind Produktnamen für Strom-Futures."
    ],
    correct: 0,
    explain: "ECC beschreibt GCM als breiter autorisiert als DCM."
  },
  {
    topic: "Indirect Access",
    question: "Was bedeutet indirekter Zugang über Access Providers?",
    answers: [
      "Teilnahme an Börsenprodukten ohne eigene Börsenmitgliedschaft über einen Anbieter.",
      "Direkte Clearing-Lizenz als Bank.",
      "Physische Lieferung ohne Abwicklung."
    ],
    correct: 0,
    explain: "Access Providers ermöglichen Marktzugang für Nichtmitglieder."
  },
  {
    topic: "Rollen",
    question: "Welche Rolle passt zu: „Ich will handeln, aber keine eigene Clearing-Lizenz halten“?",
    answers: [
      "NCM.",
      "GCM.",
      "TSO."
    ],
    correct: 0,
    explain: "NCMs sind Unternehmen ohne Clearing-Lizenz, die über einen CM teilnehmen."
  },
  {
    topic: "Rollen",
    question: "Welche Rolle passt zu: „Ich will direkt in bestimmten Spotmärkten clearen, ohne Clearing Bank“?",
    answers: [
      "DCP.",
      "NCM.",
      "Indirect Access Provider als alleinige Rolle."
    ],
    correct: 0,
    explain: "DCP ist die direkte Spotmarktoption ohne Clearing Bank, aber mit Settlement Bank."
  },
  {
    topic: "Rollen",
    question: "Welche Rolle passt zu: „Ich bin Finanzinstitut und übernehme Clearingverantwortung für eigene und fremde Transaktionen“?",
    answers: [
      "Clearing Member, je nach Umfang DCM oder GCM.",
      "Non-Clearing Member.",
      "DCP für Haushaltskunden."
    ],
    correct: 0,
    explain: "Clearing Members sind direkte Clearingstellenmitglieder mit Lizenz und Verantwortung."
  },
  {
    topic: "Märkte",
    question: "Welche Partnerbörse gehört laut ECC zu ihrem Clearingnetzwerk?",
    answers: [
      "EPEX SPOT.",
      "NASDAQ als Aktienbörse für US-Tech-Aktien.",
      "Eine lokale Stadtwerke-Abrechnung."
    ],
    correct: 0,
    explain: "ECC nennt EPEX SPOT neben EEX und weiteren Partnerbörsen."
  },
  {
    topic: "Märkte",
    question: "Welche Gruppe enthält nur von ECC genannte Partnerbörsen?",
    answers: [
      "BSP, EEX, EPEX SPOT, HUPX, NOREXECO, SEEPEX und SEMOpx.",
      "EEX, Spotify, Deutsche Bahn und Apple.",
      "TSO, DSO, BNetzA und Haushaltskunde."
    ],
    correct: 0,
    explain: "Diese Partnerbörsen stehen auf der ECC-Seite zu Partner Exchanges."
  },
  {
    topic: "Märkte",
    question: "Welche Produkte tauchen auf der TP-Forms-Seite als Beispiele auf?",
    answers: [
      "Power, Natural Gas, Emission Rights und Guarantees of Origin.",
      "Kaffeemaschinen, Smartphones und Möbel.",
      "Nur private Stromtarife."
    ],
    correct: 0,
    explain: "Die TP-Form-Liste enthält unter anderem Strom-, Gas-, Emissionsrechte- und Herkunftsnachweisprodukte."
  },
  {
    topic: "Settlement",
    question: "Was gehört zum Financial Settlement bei ECC?",
    answers: [
      "Zahlungen für Cash Settlement, Margins und Optionsprämien.",
      "Der Bau neuer Stromleitungen.",
      "Die Wetterprognose für Windparks."
    ],
    correct: 0,
    explain: "Financial Settlement dreht sich um Geldflüsse und Sicherheiten."
  },
  {
    topic: "Settlement",
    question: "Worauf basiert ECCs EUR-Zahlungsabwicklung zwischen ECC und Clearing Members laut ECC hauptsächlich?",
    answers: [
      "Auf Zentralbankgeld.",
      "Auf Bargeldtransporten.",
      "Auf privaten Haushaltsrechnungen."
    ],
    correct: 0,
    explain: "ECC verweist für EUR-Zahlungen vor allem auf Central Bank Funds."
  },
  {
    topic: "Settlement",
    question: "Was gehört zu Physical Settlement?",
    answers: [
      "Lieferprozesse, etwa für Strom, Gas oder Registerprodukte.",
      "Nur das Layout von Vertragsformularen.",
      "Die Auswahl von App-Farben."
    ],
    correct: 0,
    explain: "Physical Settlement betrifft tatsächliche Liefer- und Registrierungsprozesse."
  },
  {
    topic: "TSO",
    question: "Warum sind TSOs im ECC-Kontext relevant?",
    answers: [
      "Bei netzgebundenen Produkten braucht physische Lieferung Nominierungen in Übertragungsnetzen.",
      "TSOs legen die Margin von Futures fest.",
      "TSOs ersetzen die Clearingstelle."
    ],
    correct: 0,
    explain: "ECC nennt Nominierungen für grid-bound products innerhalb europäischer TSO-Netze."
  },
  {
    topic: "Risk",
    question: "Was ist Margin im Clearing?",
    answers: [
      "Eine Sicherheit, die Risiken aus Positionen und Marktbewegungen abdecken soll.",
      "Ein Rabatt auf Strompreise.",
      "Eine technische Netzfrequenz."
    ],
    correct: 0,
    explain: "Margins dienen der Absicherung offener Risiken."
  },
  {
    topic: "Risk",
    question: "Welche Faktoren nennt ECC für ihre Marginberechnung sinngemäß?",
    answers: [
      "Positionsgröße und Volatilität des Underlyings.",
      "Logo-Farbe und Sitzungsdauer.",
      "Nur die Anzahl der Mitarbeitenden."
    ],
    correct: 0,
    explain: "ECC verweist auf Margins anhand von Position Size und Volatility of the underlying."
  },
  {
    topic: "Risk",
    question: "Wofür steht ein Default Fund im Clearing?",
    answers: [
      "Für einen gemeinsamen Schutzmechanismus bei Ausfällen.",
      "Für einen Fonds zur Senkung von Haushaltsstrompreisen.",
      "Für ein Verzeichnis aller Handelstage."
    ],
    correct: 0,
    explain: "Der Default Fund ist Teil der Risikoverteidigung, wenn Sicherheiten eines Ausfallenden nicht reichen."
  },
  {
    topic: "Risk",
    question: "Was ist Gegenparteirisiko?",
    answers: [
      "Das Risiko, dass die andere Vertragspartei nicht erfüllt.",
      "Das Risiko, dass eine App zu langsam lädt.",
      "Das Risiko, dass Strom immer gleich viel kostet."
    ],
    correct: 0,
    explain: "Clearing reduziert genau dieses Risiko durch CCP-Struktur, Sicherheiten und Regeln."
  },
  {
    topic: "Netting",
    question: "Was bedeutet Netting im Clearing?",
    answers: [
      "Gegenläufige Verpflichtungen werden verrechnet.",
      "Alle Handelsdaten werden gelöscht.",
      "Strom wird in einem Batteriespeicher gesammelt."
    ],
    correct: 0,
    explain: "Netting reduziert Bruttozahlungen und offene Exposures."
  },
  {
    topic: "Netting",
    question: "Warum ist Cross-Margining nützlich?",
    answers: [
      "Risiken über Produkte oder Märkte können zusammen betrachtet werden.",
      "Es macht physische Lieferung überflüssig.",
      "Es erlaubt Handel ohne Verträge."
    ],
    correct: 0,
    explain: "ECC nennt Cross-Margining Benefits und Cross-Commodity-Effekte als Nutzen."
  },
  {
    topic: "Post-Trading",
    question: "Was meint der Workshop mit „nach dem Handschlag“?",
    answers: [
      "Clearing und Settlement sorgen nach dem Trade für Risikoabsicherung und Erfüllung.",
      "Nach dem Handschlag ist der Marktprozess vollständig beendet.",
      "Nur Marketing und Reporting beginnen danach."
    ],
    correct: 0,
    explain: "Der Workshop beschreibt Clearing und Settlement als Post-Trade-Services nach dem Geschäftsabschluss."
  },
  {
    topic: "Post-Trading",
    question: "Was ist der Unterschied zwischen Clearing und Settlement?",
    answers: [
      "Clearing bereitet Transaktionen für Settlement vor; Settlement erfüllt Cash- oder Asset-Übertragungen.",
      "Clearing ist physischer Netzbetrieb, Settlement ist Preisbildung.",
      "Beide Begriffe bedeuten exakt dasselbe."
    ],
    correct: 0,
    explain: "Die Folien definieren Clearing als Vorbereitung durch Matching, Recording und Processing; Settlement als Erfüllung."
  },
  {
    topic: "OTC vs Exchange",
    question: "Welches Problem des reinen OTC-Handels hebt der Workshop hervor?",
    answers: [
      "Viele bilaterale Schnittstellen, geringere Standardisierung und Gegenparteirisiko.",
      "Zu viel automatische Anonymität.",
      "Keine Möglichkeit, individuelle Preise zu vereinbaren."
    ],
    correct: 0,
    explain: "Der Workshop kontrastiert OTC mit Börse/Clearing: Standardisierung, Transparenz, Anonymität und gesicherte Erfüllung nehmen zu."
  },
  {
    topic: "Network Effect",
    question: "Warum verwendet der Workshop Metcalfe's Law?",
    answers: [
      "Um zu zeigen, wie schnell bilaterale Verbindungen zwischen Marktteilnehmern wachsen.",
      "Um Wetterrisiken von Windparks zu berechnen.",
      "Um die Höhe von Stromsteuern festzulegen."
    ],
    correct: 0,
    explain: "Je mehr Teilnehmer bilateral verbunden werden müssen, desto stärker wächst der Verbindungsaufwand."
  },
  {
    topic: "Trade Registration",
    question: "Was ist Trade Registration im Workshop-Kontext?",
    answers: [
      "OTC-Transaktionen werden zur Nutzung des Clearings registriert.",
      "Ein TSO meldet physische Netzverluste.",
      "Ein Kunde registriert seinen Haushaltszähler."
    ],
    correct: 0,
    explain: "Trade Registration bringt bilaterale OTC-Deals in eine gesicherte Clearingumgebung."
  },
  {
    topic: "DCP",
    question: "Warum nennt der Workshop das DCP-Modell ein Prepaid-Clearingmodell?",
    answers: [
      "DCPs können nur bis zu einem vorher besicherten Limit handeln.",
      "DCPs zahlen niemals Sicherheiten.",
      "DCPs handeln nur Derivate mit täglicher Variation Margin."
    ],
    correct: 0,
    explain: "Im DCP-Modell wird das Handelslimit vorab durch Collateral abgesichert."
  },
  {
    topic: "Risk",
    question: "Welche Reihenfolge passt zu ECCs Lines of Defence im Workshop?",
    answers: [
      "Admission Criteria, Exposure Management, Initial Margins, Default Fund, Assessment/Replenishment.",
      "Logo, Folientitel, Seitenzahl, Fußnote.",
      "Nur Default Fund, ohne Margins oder Admission Criteria."
    ],
    correct: 0,
    explain: "Die Folien zeigen ein mehrschichtiges Schutzmodell, nicht nur eine einzelne Sicherheit."
  },
  {
    topic: "Margin Types",
    question: "Welche Margin-Typen gehören laut Workshop zu Spotmärkten?",
    answers: [
      "IMSM und CESM.",
      "Variation Margin und Premium Margin ausschließlich.",
      "Nur Default Fund."
    ],
    correct: 0,
    explain: "IMSM deckt potenzielle künftige Exposure; CESM aktuelle Zahlungsbeträge seit dem letzten Settlement."
  },
  {
    topic: "Margin Types",
    question: "Welche Margin wird bei Derivaten genutzt, um tägliche Gewinne und Verluste auszugleichen?",
    answers: [
      "Variation Margin.",
      "TP07 Margin.",
      "Admission Margin."
    ],
    correct: 0,
    explain: "Variation Margin setzt tägliche Gewinne und Verluste um."
  },
  {
    topic: "Default Waterfall",
    question: "Was ist der erste Schritt im Default Waterfall laut Workshop?",
    answers: [
      "Margin Collateral des defaultenden Clearing Members.",
      "Sofort alle nicht-defaultenden Kunden belasten.",
      "Zuerst ECC Remaining Own Capital."
    ],
    correct: 0,
    explain: "Die Folie startet mit dem Margin Collateral des defaultenden Clearing Members."
  },
  {
    topic: "Default Waterfall",
    question: "Was bedeutet „Skin in the game“ bei ECC?",
    answers: [
      "ECCs eigene zweckgebundene Ressourcen im Default Waterfall.",
      "Eine Marketingkampagne.",
      "Das Eigenkapital des Käufers."
    ],
    correct: 0,
    explain: "ECC Dedicated Own Resources stehen im Waterfall nach dem Beitrag des defaultenden Clearing Members."
  },
  {
    topic: "Physical Settlement",
    question: "Was passiert im Physical Settlement von Power oder Gas?",
    answers: [
      "ECC aggregiert Nominierungen und sendet Schedule-Informationen an relevante TSOs.",
      "ECC liefert Zertifikate ausschließlich per E-Mail.",
      "Settlement findet nur als Preisveröffentlichung statt."
    ],
    correct: 0,
    explain: "Bei netzgebundenen Produkten werden Trades in Nominierungen und Fahrpläne übersetzt."
  },
  {
    topic: "Physical Settlement",
    question: "Wie werden EUAs laut Workshop physisch geliefert?",
    answers: [
      "Über Buchungen im Union Registry beziehungsweise ECCs Registry-Struktur.",
      "Über Gasleitungen.",
      "Durch Lieferung in Papierform an den TSO."
    ],
    correct: 0,
    explain: "EUAs sind Registerprodukte; Lieferung erfolgt über Konten und Buchungen, nicht über Netze."
  },
  {
    topic: "Market Coupling",
    question: "Was soll Market Coupling im Strommarkt optimieren?",
    answers: [
      "Die Nutzung grenzüberschreitender Kapazitäten durch koordinierte Preise und Flüsse.",
      "Die Anzahl der Admission Forms.",
      "Die Schriftgröße in Börsenreports."
    ],
    correct: 0,
    explain: "Die Folien beschreiben Market Coupling als koordinierte, marktbasierte Berechnung von Preisen und Flows zwischen Ländern."
  },
  {
    topic: "Financial Settlement",
    question: "Was wird laut Workshop im Financial Settlement genettet?",
    answers: [
      "Zahlungsbeträge aus Trades, Gebühren, Margins und Contract Values zu einem Betrag pro Bank.",
      "Nur Folientitel.",
      "Ausschließlich physische Lieferfahrpläne."
    ],
    correct: 0,
    explain: "Die Folien betonen einen netted payment amount per Clearing Member beziehungsweise Bank."
  },
  {
    topic: "Financial Settlement",
    question: "Welche Infrastruktur nennt der Workshop für EUR-Financial-Settlement in Europa?",
    answers: [
      "TARGET2.",
      "Amazon Marketplace.",
      "Union Registry."
    ],
    correct: 0,
    explain: "TARGET2 wird als robuste und zuverlässige ECB-Infrastruktur genannt."
  },
  {
    topic: "Financial Settlement",
    question: "Welche Fremdwährungen nennt der Workshop zusätzlich zu EUR?",
    answers: [
      "USD, GBP und JPY.",
      "TRY, CHF und AUD.",
      "Nur GBP."
    ],
    correct: 0,
    explain: "Der Workshop nennt EUR, USD, GBP und JPY als Settlement-Währungen."
  },
  {
    topic: "Regulierung",
    question: "Warum ist eine Clearingstelle systemisch sensibel?",
    answers: [
      "Weil sie Risiken vieler Teilnehmer bündelt und deshalb robuste Regeln braucht.",
      "Weil sie einzelne Haushaltszähler abliest.",
      "Weil sie Wetterdaten veröffentlicht."
    ],
    correct: 0,
    explain: "Eine CCP ist zentral; Ausfallmanagement und stabile Prozesse sind daher entscheidend."
  },
  {
    topic: "Formulare",
    question: "Warum gibt es neben Mitgliedschaftsformularen auch technische und operative Formulare?",
    answers: [
      "Weil Zugang, Systeme, Vertreter, Konten und tägliche Prozesse klar eingerichtet werden müssen.",
      "Weil Clearing sonst automatisch zu Börsenhandel wird.",
      "Weil alle Formulare denselben Zweck haben."
    ],
    correct: 0,
    explain: "Die Admission-Forms-Seite trennt Aufnahme-, TP-, technische und operative Formulare."
  },
  {
    topic: "Operations",
    question: "Welche Teams nennt ECC als Support-Anlaufstellen?",
    answers: [
      "Clearing & Settlement, Physical Settlement und Member Readiness.",
      "Nur Social Media und Design.",
      "Ausschließlich Netzplanung."
    ],
    correct: 0,
    explain: "ECC nennt diese Teams für operative, physische und admissionbezogene Fragen."
  },
  {
    topic: "EEX",
    question: "Welche Aussage ist am präzisesten?",
    answers: [
      "EEX-Preise entstehen im Markt; ECC sichert die Abwicklung geclearter Geschäfte.",
      "ECC setzt die Marktpreise frei nach Ermessen fest.",
      "EEX und ECC sind beide Übertragungsnetzbetreiber."
    ],
    correct: 0,
    explain: "ECC ist Clearingstelle, nicht Preisfestsetzungsbehörde."
  },
  {
    topic: "TP-Forms",
    question: "Warum gibt es unterschiedliche TP-Forms je Börse oder Produkt?",
    answers: [
      "Weil Produkte, Märkte und Lieferwege unterschiedliche Anforderungen haben.",
      "Weil jedes Formular denselben Inhalt in anderer Farbe enthält.",
      "Weil TP-Forms nur Archivzwecken dienen."
    ],
    correct: 0,
    explain: "Die ECC-Liste zeigt produkt- und börsenspezifische TP-Forms, etwa für Power, Gas, Emissionsrechte oder GoO."
  },
  {
    topic: "Settlement",
    question: "Welche Aussage trennt Markt und Abwicklung sauber?",
    answers: [
      "Der Handel erzeugt Verpflichtungen; Clearing und Settlement machen sie kontrolliert erfüllbar.",
      "Nach dem Handel ist keine Abwicklung mehr nötig.",
      "Settlement ist nur ein anderes Wort für Marketing."
    ],
    correct: 0,
    explain: "Clearing und Settlement übersetzen Handelsabschlüsse in abgesicherte Zahlungs- und Lieferprozesse."
  },
  {
    topic: "Märkte",
    question: "Was meint ECC mit integrierten und automatisierten Clearingprozessen?",
    answers: [
      "Ein einheitlicher Zugang kann Teilnehmer mit mehreren Partnerbörsen und Prozessen verbinden.",
      "Alle Märkte werden auf einen einzigen Preis gezwungen.",
      "Clearing findet nur manuell per E-Mail statt."
    ],
    correct: 0,
    explain: "ECC betont das Netzwerk aus Partnerbörsen und Cross-Commodity-Effekte."
  }
];

const mapDetails = {
  ccp: {
    title: "CCP: Die Mitte des Risikos",
    text: "Als zentrale Gegenpartei tritt ECC zwischen Käufer und Verkäufer. Damit wird aus vielen bilateralen Risiken ein geregeltes, gemessenes und besichertes Clearingrisiko.",
    bullets: ["Gegenparteirisiko übernehmen", "Netting ermöglichen", "Default-Prozesse bereitstellen"]
  },
  roles: {
    title: "Rollen: NCM, DCP, CM",
    text: "Die Rollen unterscheiden sich vor allem danach, wer die Clearing-Infrastruktur stellt und in welchen Märkten der Zugang genutzt wird. NCM handelt über eine Clearing Bank, DCP cleart direkt in geeigneten Spotmärkten, CM ist die lizenzierte Clearing Bank mit Kapital-, Konto-, Sicherheiten- und Personalpflichten.",
    bullets: ["NCM: Trading Participant ohne Clearing-Lizenz", "DCP: direkter Spotmarktzugang mit Settlement Bank", "CM: Garant, Payment Agent und direkter Risikoträger"]
  },
  admission: {
    title: "Admission Forms: Zugang einrichten",
    text: "Admission Forms decken den gesamten Eintritt in die ECC-Welt ab: Aufnahme als NCM, CM oder DCP Member, KYC, Verträge, Steuerdaten, technische Zugänge, operative Vollmachten und produktbezogene TP-Forms.",
    bullets: ["NCM, CM und DCP Starter Kits", "Technical und Operational Forms", "TP-Forms für konkrete Produkte"]
  },
  settlement: {
    title: "Settlement: Geld und Lieferung",
    text: "Financial Settlement betrifft Zahlungen, Margins, Contract Values, Gebühren und Optionsprämien. Physical Settlement betrifft Lieferungen oder Registerprozesse, etwa bei Strom, Gas, Emissionsrechten und Herkunftsnachweisen.",
    bullets: ["TARGET2 für EUR-Zahlungen", "Correspondent Banks für USD, GBP und JPY", "Nominierungen bei Power und Gas"]
  },
  risk: {
    title: "Risk: Margins und Verteidigungslinien",
    text: "ECCs Risikomanagement nutzt Admission Criteria, Exposure Management, Margins, Default Fund, Replenishment und eigene Ressourcen im Default Waterfall. Ziel ist, Ausfälle einzelner Teilnehmer kontrollierbar zu halten.",
    bullets: ["IMSM/CESM im Spotmarkt", "SPAN und Variation Margin bei Derivaten", "Default Waterfall mit Skin-in-the-game"]
  },
  markets: {
    title: "Märkte: Mehr als EEX",
    text: "ECC nennt unter anderem BSP, EEX, EPEX SPOT, HUPX, NOREXECO, SEEPEX und SEMOpx als Partnerbörsen. Die Produkte reichen von Power und Gas bis Emissionsrechte und Herkunftsnachweise.",
    bullets: ["Power Spot und Futures", "Natural Gas", "Emission Rights und GoO"]
  }
};

const state = {
  cardIndex: 0,
  questionIndex: 0,
  selected: false,
  currentAnswers: [],
  progress: JSON.parse(localStorage.getItem("energyQuizProgress") || "{}")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function saveProgress() {
  localStorage.setItem("energyQuizProgress", JSON.stringify(state.progress));
}

function renderCard() {
  const card = cards[state.cardIndex];
  $("#cardTopic").textContent = card.topic;
  $("#cardTitle").textContent = card.title;
  $("#cardText").textContent = card.text;
  $("#memoryLine").textContent = card.memory;
  $("#memoryLine").hidden = true;
  $("#cardCounter").textContent = `${state.cardIndex + 1} / ${cards.length}`;
}

function renderQuestion() {
  const item = questions[state.questionIndex];
  state.selected = false;
  $("#questionTopic").textContent = item.topic;
  $("#questionText").textContent = item.question;
  $("#questionCounter").textContent = `Frage ${state.questionIndex + 1} / ${questions.length}`;
  $("#quizMeter").style.width = `${(state.questionIndex / questions.length) * 100}%`;
  $("#feedback").textContent = "";
  $("#nextQuestion").disabled = true;
  state.currentAnswers = item.answers
    .map((answer, index) => ({ answer, correct: index === item.correct }))
    .sort(() => Math.random() - 0.5);
  $("#answers").innerHTML = state.currentAnswers.map((item, index) => (
    `<button class="answer" type="button" data-answer="${index}">${item.answer}</button>`
  )).join("");
}

function answerQuestion(index) {
  if (state.selected) return;
  state.selected = true;
  const item = questions[state.questionIndex];
  const correct = state.currentAnswers[index]?.correct;
  const topic = item.topic;
  state.progress[topic] ||= { right: 0, total: 0 };
  state.progress[topic].total += 1;
  if (correct) state.progress[topic].right += 1;
  saveProgress();

  $$(".answer").forEach((button) => {
    const buttonIndex = Number(button.dataset.answer);
    button.disabled = true;
    if (state.currentAnswers[buttonIndex]?.correct) button.classList.add("correct");
    if (buttonIndex === index && !correct) button.classList.add("wrong");
  });

  $("#feedback").textContent = `${correct ? "Richtig." : "Fast."} ${item.explain}`;
  $("#nextQuestion").disabled = false;
  updateProgressView();
}

function nextQuestion() {
  state.questionIndex = (state.questionIndex + 1) % questions.length;
  if (state.questionIndex === 0) $("#quizMeter").style.width = "100%";
  renderQuestion();
}

function renderMap(key = "ccp") {
  const detail = mapDetails[key];
  $$(".map-node").forEach((node) => node.classList.toggle("selected", node.dataset.map === key));
  $("#mapDetail").innerHTML = `
    <h3>${detail.title}</h3>
    <p>${detail.text}</p>
    <ul>${detail.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function updateProgressView() {
  const totals = Object.values(state.progress).reduce((acc, item) => ({
    right: acc.right + item.right,
    total: acc.total + item.total
  }), { right: 0, total: 0 });
  const percent = totals.total ? Math.round((totals.right / totals.total) * 100) : 0;
  $("#scoreLabel").textContent = `${percent}%`;
  $("#progressNumber").textContent = totals.right;
  $(".progress-ring").style.setProperty("--scoreAngle", `${percent * 3.6}deg`);
  $("#streakLabel").textContent = `${totals.right} richtig`;

  const topics = [...new Set(questions.map((item) => item.topic))];
  $("#topicStats").innerHTML = topics.map((topic) => {
    const item = state.progress[topic] || { right: 0, total: 0 };
    const label = item.total ? `${item.right}/${item.total}` : "noch offen";
    return `<div class="topic-row"><strong>${topic}</strong><span>${label}</span></div>`;
  }).join("");
}

function switchView(viewName) {
  $$(".tab").forEach((button) => {
    const active = button.dataset.view === viewName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $$(".view").forEach((view) => {
    const active = view.id === viewName;
    view.classList.toggle("active-view", active);
    view.toggleAttribute("inert", !active);
  });
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  const answer = event.target.closest(".answer");
  const mapNode = event.target.closest(".map-node");

  if (tab) switchView(tab.dataset.view);
  if (answer) answerQuestion(Number(answer.dataset.answer));
  if (mapNode) renderMap(mapNode.dataset.map);
});

$("#flipCard").addEventListener("click", () => {
  $("#memoryLine").hidden = !$("#memoryLine").hidden;
});

$("#prevCard").addEventListener("click", () => {
  state.cardIndex = (state.cardIndex - 1 + cards.length) % cards.length;
  renderCard();
});

$("#nextCard").addEventListener("click", () => {
  state.cardIndex = (state.cardIndex + 1) % cards.length;
  renderCard();
});

$("#nextQuestion").addEventListener("click", nextQuestion);
$("#restartQuiz").addEventListener("click", () => {
  state.questionIndex = 0;
  renderQuestion();
});

$("#resetProgress").addEventListener("click", () => {
  state.progress = {};
  saveProgress();
  updateProgressView();
});

renderCard();
renderQuestion();
renderMap();
updateProgressView();
