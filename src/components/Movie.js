import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import Header from "./Header";
import Footer from "./Footer";
import Actors from "./Actors";
import Poster from "./Poster";
import MovieDetails from "./MovieDetails";
import Reviews from "./Reviews";
import poster from '../assets/avengers.jpg';

function Movie() {
    const movieData = {
        title: "Avengers: Endgame",
        synopsis: "Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé.",
        director: "Joss Whedon",
        actors: [
            { name: "Robert Downey Jr.", character: "Tony Stark / Iron Man" },
            { name: "Chris Evans", character: "Steve Rogers / Captain America" },
            { name: "Mark Ruffalo", character: "Bruce Banner / Hulk" },
            { name: "Chris Hemsworth", character: "Thor" },
            { name: "Scarlett Johansson", character: "Natasha Romanoff / Black Widow" },
            { name: "Jeremy Renner", character: "Clint Barton / Hawkeye" },
            { name: "Tom Hiddleston", character: "Loki" },
        ],
        reviews: [
            { reviewer: "Jean", content: "Bon film", rating: 4 },
            { reviewer: "Marie", content: "Excellent", rating: 5 },
            { reviewer: "Pierre", content: "J'ai adoré", rating: 5 },
            { reviewer: "Sophie", content: "Très divertissant", rating: 4 },
            { reviewer: "Nicolas", content: "Un des meilleurs films de l'année", rating: 5 },
            { reviewer: "Caroline", content: "Impressionnant", rating: 5 },
            { reviewer: "Vincent", content: "Une grande réussite", rating: 5 },
            { reviewer: "Chloé", content: "Superbe", rating: 5 },
            { reviewer: "Hugo", content: "Fascinant", rating: 5 },
            { reviewer: "Amandine", content: "Je me suis ennuyé", rating: 2 },
            { reviewer: "Kevin", content: "Pas mal", rating: 3 },
            { reviewer: "Justine", content: "J'ai trouvé ça moyen", rating: 3 },
            { reviewer: "Quentin", content: "Bof", rating: 2 },
            { reviewer: "Laura", content: "J'ai failli m'endormir", rating: 2 },
        ]
    };

    return (
        <>
            <Header />
            <Grid container spacing={2} style={{ padding: "24px" }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Poster image={poster} />
                    <MovieDetails
                        title={movieData.title}
                        director={movieData.director}
                        synopsis={movieData.synopsis}
                        rating={movieData.reviews.reduce((acc, review) => acc + review.rating, 0) / movieData.reviews.length}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Actors actors={movieData.actors} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Reviews reviews={movieData.reviews} />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default Movie;