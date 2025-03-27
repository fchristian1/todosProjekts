import { commandsProjects, commandsTasks } from "../services/data/commands";

export function generateTestData() {
    // Projekt 1: Website Relaunch
    let idtask1_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_1, "Design-Konzept erstellen");
    commandsTasks.descriptionTask(idtask1_1, "Wireframes und Mockups für das neue Webdesign entwerfen.");
    commandsTasks.setStatusOnGoingTask(idtask1_1);

    let idtask1_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_2, "Inhalt überarbeiten");
    commandsTasks.descriptionTask(idtask1_2, "Bestehende Inhalte anpassen und neue Inhalte erstellen.");
    commandsTasks.setStatusInProcessTask(idtask1_2);

    let idtask1_3 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_3, "SEO-Optimierung");
    commandsTasks.descriptionTask(idtask1_3, "Suchmaschinenoptimierung für bessere Sichtbarkeit in den Suchergebnissen.");
    commandsTasks.setStatusCompletedTask(idtask1_3);

    let idtask1_4 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_4, "Responsive Design");
    commandsTasks.descriptionTask(idtask1_4, "Anpassung der Website für mobile Geräte.");
    commandsTasks.setStatusOnGoingTask(idtask1_4);

    let idtask1_5 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_5, "Launch-Planung");
    commandsTasks.descriptionTask(idtask1_5, "Zeitplan für den Relaunch und Kommunikationsstrategie festlegen.");
    commandsTasks.setStatusInProcessTask(idtask1_5);

    let idtask1_6 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_6, "Feedback einholen");
    commandsTasks.descriptionTask(idtask1_6, "Rückmeldungen von Nutzern und Stakeholdern sammeln.");
    commandsTasks.setStatusCanceledTask(idtask1_6);

    let idtask1_7 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask1_7, "Performance-Optimierung");
    commandsTasks.descriptionTask(idtask1_7, "Ladezeiten und Performance der Website verbessern.");
    commandsTasks.setStatusCompletedTask(idtask1_7);

    let idproject1 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject1, "Website Relaunch");
    commandsProjects.descriptionProject(idproject1, "Überarbeitung der Firmenwebsite für ein moderneres Design und bessere UX.");
    commandsProjects.addATaskToProject(idproject1, idtask1_1);
    commandsProjects.addATaskToProject(idproject1, idtask1_2);
    commandsProjects.addATaskToProject(idproject1, idtask1_3);
    commandsProjects.addATaskToProject(idproject1, idtask1_4);
    commandsProjects.addATaskToProject(idproject1, idtask1_5);
    commandsProjects.addATaskToProject(idproject1, idtask1_6);
    commandsProjects.addATaskToProject(idproject1, idtask1_7);

    // Projekt 2: Software-Update für CRM-System
    let idtask2_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask2_1, "Bugfixing");
    commandsTasks.descriptionTask(idtask2_1, "Fehlermeldungen analysieren und beheben.");
    commandsTasks.setStatusOnGoingTask(idtask2_1);

    let idtask2_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask2_2, "Neues Feature implementieren");
    commandsTasks.descriptionTask(idtask2_2, "Erweiterung um ein automatisches Reporting.");
    commandsTasks.setStatusInProcessTask(idtask2_2);

    let idtask2_3 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask2_3, "Tests durchführen");
    commandsTasks.descriptionTask(idtask2_3, "Unit-Tests und UI-Tests für das neue Feature durchführen.");
    commandsTasks.setStatusCompletedTask(idtask2_3);

    let idproject2 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject2, "CRM-System Update");
    commandsProjects.descriptionProject(idproject2, "Erweiterung und Wartung des internen CRM-Systems für eine bessere Benutzererfahrung.");
    commandsProjects.addATaskToProject(idproject2, idtask2_1);
    commandsProjects.addATaskToProject(idproject2, idtask2_2);
    commandsProjects.addATaskToProject(idproject2, idtask2_3);

    // Projekt 3: Marketingkampagne für Produktlaunch
    let idtask3_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask3_1, "Social Media Planung");
    commandsTasks.descriptionTask(idtask3_1, "Beiträge für LinkedIn, Twitter und Instagram erstellen.");
    commandsTasks.setStatusOnGoingTask(idtask3_1);

    let idtask3_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask3_2, "Pressemitteilung schreiben");
    commandsTasks.descriptionTask(idtask3_2, "Offizielle Mitteilung für Medien vorbereiten.");
    commandsTasks.setStatusInProcessTask(idtask3_2);

    let idtask3_3 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask3_3, "Influencer-Kooperationen koordinieren");
    commandsTasks.descriptionTask(idtask3_3, "Zusammenarbeit mit relevanten Influencern abstimmen.");
    commandsTasks.setStatusCanceledTask(idtask3_3);

    let idtask3_4 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask3_4, "Launch-Event planen");
    commandsTasks.descriptionTask(idtask3_4, "Organisation einer Veranstaltung zur Produktpräsentation.");
    commandsTasks.setStatusCompletedTask(idtask3_4);

    let idtask3_5 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask3_5, "Kampagnen-Erfolg messen");
    commandsTasks.descriptionTask(idtask3_5, "Analyse der Marketingmaßnahmen und Erfolgskontrolle.");
    commandsTasks.setStatusOnGoingTask(idtask3_5);

    let idproject3 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject3, "Marketingkampagne für Produktlaunch");
    commandsProjects.descriptionProject(idproject3, "Gezielte Werbemaßnahmen zur Markteinführung eines neuen Produkts.");
    commandsProjects.addATaskToProject(idproject3, idtask3_1);
    commandsProjects.addATaskToProject(idproject3, idtask3_2);
    commandsProjects.addATaskToProject(idproject3, idtask3_3);
    commandsProjects.addATaskToProject(idproject3, idtask3_4);
    commandsProjects.addATaskToProject(idproject3, idtask3_5);

    // Projekt 4: Einführung eines neuen ERP-Systems
    let idtask4_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask4_1, "Anbieter evaluieren");
    commandsTasks.descriptionTask(idtask4_1, "Vergleich verschiedener ERP-Lösungen und Anbieter.");
    commandsTasks.setStatusCompletedTask(idtask4_1);

    let idtask4_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask4_2, "Schulung für Mitarbeiter");
    commandsTasks.descriptionTask(idtask4_2, "Mitarbeitertraining für das neue ERP-System.");
    commandsTasks.setStatusOnGoingTask(idtask4_2);

    let idtask4_3 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask4_3, "Datenmigration");
    commandsTasks.descriptionTask(idtask4_3, "Bestehende Daten ins neue System übertragen.");
    commandsTasks.setStatusInProcessTask(idtask4_3);

    let idproject4 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject4, "Einführung ERP-System");
    commandsProjects.descriptionProject(idproject4, "Implementierung eines neuen ERP-Systems zur Prozessoptimierung.");
    commandsProjects.addATaskToProject(idproject4, idtask4_1);
    commandsProjects.addATaskToProject(idproject4, idtask4_2);
    commandsProjects.addATaskToProject(idproject4, idtask4_3);

    // Projekt 5: IT-Sicherheitsaudit
    let idtask5_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask5_1, "Penetrationstests durchführen");
    commandsTasks.descriptionTask(idtask5_1, "Sicherheitslücken im System identifizieren.");
    commandsTasks.setStatusOnGoingTask(idtask5_1);

    let idtask5_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask5_2, "Mitarbeiterschulungen");
    commandsTasks.descriptionTask(idtask5_2, "Schulung zum sicheren Umgang mit sensiblen Daten.");
    commandsTasks.setStatusCompletedTask(idtask5_2);

    let idproject5 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject5, "IT-Sicherheitsaudit");
    commandsProjects.descriptionProject(idproject5, "Überprüfung und Optimierung der IT-Sicherheitsmaßnahmen.");
    commandsProjects.addATaskToProject(idproject5, idtask5_1);
    commandsProjects.addATaskToProject(idproject5, idtask5_2);


    // Projekt 6: Einführung eines Homeoffice-Konzepts
    let idtask6_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask6_1, "Hardware-Bedarf analysieren");
    commandsTasks.descriptionTask(idtask6_1, "Notwendige Laptops, Monitore und VPN-Zugänge evaluieren.");
    commandsTasks.setStatusOnGoingTask(idtask6_1);

    let idtask6_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask6_2, "Richtlinien erstellen");
    commandsTasks.descriptionTask(idtask6_2, "Regelungen für das Arbeiten im Homeoffice definieren.");
    commandsTasks.setStatusCompletedTask(idtask6_2);

    let idtask6_3 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask6_3, "Mitarbeiterumfrage");
    commandsTasks.descriptionTask(idtask6_3, "Feedback zur Einführung des Homeoffice-Konzepts einholen.");
    commandsTasks.setStatusInProcessTask(idtask6_3);

    let idproject6 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject6, "Homeoffice-Konzept");
    commandsProjects.descriptionProject(idproject6, "Entwicklung und Implementierung eines Homeoffice-Modells für das Unternehmen.");
    commandsProjects.addATaskToProject(idproject6, idtask6_1);
    commandsProjects.addATaskToProject(idproject6, idtask6_2);
    commandsProjects.addATaskToProject(idproject6, idtask6_3);


    // Projekt 7: Einführung einer E-Learning-Plattform
    let idtask7_1 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask7_1, "Plattform auswählen");
    commandsTasks.descriptionTask(idtask7_1, "Vergleich von verschiedenen E-Learning-Lösungen.");
    commandsTasks.setStatusCompletedTask(idtask7_1);

    let idtask7_2 = commandsTasks.createTask();
    commandsTasks.titleTask(idtask7_2, "Schulungsinhalte erstellen");
    commandsTasks.descriptionTask(idtask7_2, "Erstellung von Kursmaterialien für verschiedene Abteilungen.");
    commandsTasks.setStatusOnGoingTask(idtask7_2);

    let idproject7 = commandsProjects.createProject();
    commandsProjects.titleProject(idproject7, "E-Learning-Plattform");
    commandsProjects.descriptionProject(idproject7, "Einführung einer digitalen Lernplattform für interne Schulungen.");
    commandsProjects.addATaskToProject(idproject7, idtask7_1);
    commandsProjects.addATaskToProject(idproject7, idtask7_2);


    // Weitere Projekte (8-10) könnten ähnliche realistische Aufgaben enthalten, wie beispielsweise:
    // - Einführung eines Nachhaltigkeitsprogramms
    // - Migration auf Cloud-Dienste
    // - Entwicklung einer internen Mitarbeiter-App


}