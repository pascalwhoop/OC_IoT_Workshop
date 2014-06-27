# Workshop OC IoT Prototyp

##Konzept

### 1) Was soll vermittelt werden?

- Was ist IoT (vorrausgesetzt?)
- Spezielle Gegebenheiten im IoT Umfeld
	- Was wird benötigt?
		- z.B. Bridge bei Kommunikationstechnologiewechsel
		- Device Mgmt
		- API's für Systeme wie BI / BigData
		- ...
- Warum Thematik für Prototyp 
	- Warum Lichtautomatisierung: [Harbor Research Infographic](http://harborresearch.com/tag/infographic/)
	- Warum 433 (Hue->Zigbee)

	
### 2) Anforderungen für erfolgreichen Workshop

####Technisch

Umgebung / vom Workshop haltenden mitzubringen:

- Eine **WLAN** Infrasturktur welche es erlaubt, dass **Clients einander sehen können (IP Ping, Ports offen)** sowie Internetanbindung haben.
- Prototyp
	- 2 Pi's mit OCEP & Spring Modulen
	- 433mhz Sendermodul für Spring Pi
	- 2 Hue Lampen & Bridge
	- 2 x 433mhz Lampen
- x Raspberry Pi's mit SD Karten, 433mhz ... für jeweils 2 Teilnehmer 1 Set 
	

Von den einzelnen Teilnehmern vorzubereiten und ggf. bei Start nachzubessern

- Eine Funktionstüchtige **IntelliJ** Installation auf den Computern
- **Java 8 JDK** installiert & in IntelliJ verfügbar
- **Maven**
- Bei Frontend Development / Ausführung: 
	- Node.JS (npm)
	- Yo (Yeoman, Grunt, Bower) -> brauchen Compass -> braucht Ruby

####Skill-Level
Die **Anforderungen an die Teilnehmer** sollen recht flexibel gehalten werden. Es soll möglich sein auf die Fähigkeiten der einzelnen Teilnehmer zu reagieren und zu entscheiden ob im Workshop viel entwickelt wird oder ob eher Konzepte vorgestellt & diskutiert werden.

- Wie gut kennen sie: IoT, Spring, Java, Hibernate, Camunda, BPM, Raspberry Pi, Oracle CEP (BigData, BI)
- Wie technisch soll Workshop werden? (Skala 1-10)
	- Deep Dive in Code vs.
	- Konzepte vorstellen & ausführlich diskutieren, kaum Code


Siehe dazu auch "Dynamischer Workshopablauf"	

Die **Anforderungen an den Workshopleiter** sind durch dieses flexible System dadurch entsprechend größer. Wollen die Teilnehmer mehr Coden, muss dies vom Leiter wahrgenommen und beachtet werden. Hier hilft das weiter unten beschriebene System des dynamischen Ablaufs. In jedem fall soll der Leiter den Workshop flexibel gestalten können. Dazu werden einige Module bereitgestellt, welche ausgetauscht werden könnnen.
	
### 3) Ablauf des Workshops

Der Workshop soll alternierend Theorie- und Praxisphasen enthalten. 

Die Theoriephasen bestehen dabei aus einer Präsentation, welche grundlegende Kenntnisse für die nächste Praxisphase beeinhalten  die Aufgaben/Anforderungen nennen & einer kleinen Diskussionsphase, wo vorgestelltes besprochen wird. Alternative Umsetzungsvorschläge werden dabei aufgenommen und separat notiert. Letztlich gibt es viele Wege. Sollte ein Teilnehmer eine alternative Idee vorschlagen, welche ebenfalls ins Gesamtkonzept passt, kann auch diese Umsetzungsvariante durchgeführt werden. 

Die Praxisphasen sollen den Großteil der Zeit in Anspruch nehmen, da hier einfach mehr ausprobiert werden muss und so auch viel vermitteltes Wissen gefestigt wird. Anteile vmtl 1:4 bis 1:6.

#### Ziel
Als finales Ziel ist eine selbst erstellte Version des Prototypen. Die dazu benötigten Konzepte werden dabei in den Theorieblöcken vorgestellt und der Code in den Praxisteilen entwickelt. Zum Schluss soll mittels des selbst erstellten Prototypen die Steuerung der im Netz vorhandenen Lampen möglich sein. 

#### Mögliche Konzepte für Ablauf:

- Fertige Codebausteine: Sollten wenige Teilnehmer / nur wenig Zeit zur Verfügung stehen, können fertige Codestücke bereitgestellt werden, welche dann von den Teilnehmern zum Gesamtprodukt zusammengestellt werden.
- Teilnehmer können in Teams an Modulen des Prototypen arbeiten und diese werden später zusammengefügt. Hierbei müssen klare Schnittstellendefinitionen vorliegen, sodass man sich auf die "andere Seite" verlassen kann.
	- Mögliche Module wären: Maven Module (Rest&Camunda, Spring Services, native+JNI, persistence, common-domain)
- Einzelne Schritte / Phasen werden in Github als Tags auf ein Repository vorgehalten. 
	- Nach jedem Theorieblock führen alle Benutzer ein Checkout durch und holen sich so einen aktuellen Stand von dem aus die zum nächsten "Meilenstein" aus hinarbeiten. Jeder macht das gleiche (vllt in kleinen Teams)

##### Dynamischer Workshopablauf mit Hue Lampen
Es soll ein Prototyp und eine Live Workshop-Control Page genutzt werden. 

- Der fertige Prototyp läuft im lokalen Netzwerk auf den Pi's und kontrolliert 2 Hue Lampen. Diese leuchten zu Anfang grün
- Die Teilnehmer bekommen zu Anfang eine Website auf welcher sie den Workshop steuern können. 
	- Stärken der einzelnen Themengebiete (Spring, Camunda, BigData,...) zu Anfang angeben & Username wählen (im LocalStorage abgelegt fuer später)
	- Zu viel Coding ? Rückmeldung wird an Prototyp weitergegeben (mittels Farbänderungsanfrage für Hue Lampen) => Lampe ändern Farben (rot= zu viel; grün = gut; blau = zu wenig)
	- Zu viel Architektur/Theorie? ...
	- Der Client schickt dabei REST requests direkt an den Prototyp und zusätzlich an einen kleinen Server der vom Workshop-Leiter gestartet wird und öffentlich Statistiken über den Workshopverlauf anzeigt.
	
Die Statistiken über den Workshop sollen z.B. anzeigen: Aktuelle Phase, Verteilung vom Themenverständnis unter den Teilnehmern, aktuelle "Workshopstimmung"(auch angezeigt durch Lampen) in Form von Verteilungswerten (wie viele haben was geklickt)

Die Einflussnahme eines jeden einzelnen auf die Gesamtstimmung soll dabei beschränkt sein. Bei 10 Teilnehmern soll jeder so z.B. 10% des Farbspektrums beeinflussen können. Klicken also alle auf + (also zu wenig) so ist die Lampe zu 100% blau. klicken 5 auf + und 5 auf OK, so ist die Farbe zu 50% grün & zu 50% blau (also eine Mischfarbe) usw...

##### Mehr Coding vs. mehr Theorie
Sollte mehr Coding gefragt sein, so können einfach zusätzliche Aufgaben genutzt werden. Für jedes Theorie&Praxis paar soll in der Grundannahme etwa 30% Code vorgegeben sein und 70% selber entwickelt werden. Soll mehr gecoded werden, wird die nächste Theoriephase zügiger durchlaufen und die darauf folgende Codingsession ohne vorgegebenem Code gestartet. So wird der Codingblock länger dauern und hierdurch die gesparte Zeit in der Theorie (durch schnelleres durchlaufen) wieder kompensiert.

Im Fall, dass mehr Theorie gewünscht wird, können die Praxisteile gekürzt werden (mehr vorgegebener Code) und die Theorie ausführlicher besprochen werden. Hierzu sollte zu jedem Theorieteil ein gewisser Puffer/Backup vorhanden sein, sodass die weggelassenen Praxisteile mit mehr Theorie ausgeglichen werden könnnen.



	
	
	
	
	
	
	
	
	
	