import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Questions from './Questions';

function QuestionsPage() {
    const questions = [
        { question: "Qui sont les réalisateurs d'Avengers: Endgame ?", answer: "Les frères Russo (Anthony et Joe Russo)", difficulty: "Facile" },
        { question: "Qui est le principal antagoniste du film ?", answer: "Thanos", difficulty: "Facile" },
        { question: "Quel personnage utilise le gantelet de l'infini pour annuler le claquement de doigts de Thanos ?", answer: "Bruce Banner / Hulk", difficulty: "Moyen" },
        { question: "Quel personnage se sacrifie sur Vormir pour obtenir la pierre de l'âme ?", answer: "Natasha Romanoff / Black Widow", difficulty: "Moyen" },
        { question: "Quelle est l'année de sortie du film ?", answer: "2019", difficulty: "Facile" },
        { question: "Comment s'appelle l'opération qui consiste à récupérer les pierres de l'infini dans le passé ?", answer: "Le Time Heist", difficulty: "Difficile" },
        { question: "Qui est le dernier personnage à voir Tony Stark avant qu'il ne meurt ?", answer: "Pepper Potts", difficulty: "Difficile" },
        { question: "À qui est-ce que Steve Rogers donne son bouclier à la fin du film ?", answer: "Sam Wilson / Le Faucon", difficulty: "Moyen" },
        { question: "Quelle est la dernière phrase prononcée par Tony Stark dans le film ?", answer: "Je suis Iron Man", difficulty: "Facile" },
        { question: "Qui joue le rôle de Scott Lang / Ant-Man ?", answer: "Paul Rudd", difficulty: "Facile" },
    ];

    return (
        <>
            <Header />
            <Questions questions={questions} />
            <Footer />
        </>
    );
}

export default QuestionsPage;
