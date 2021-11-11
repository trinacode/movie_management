<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="movie-card" v-for="movie in movies.slice(0, 5)" :key="movie">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">{{ movie.title }}</div>
          <div class="text-subtitle2" v-for="actor in movie.actors" :key="actor">{{ actor }}</div>
        </div>
      </q-img>
      <q-card-section>
        {{ movie.description }}
      </q-card-section>
      <q-card-section>
        <q-rating readonly v-model="movie.notation" :max="5" size="32px" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat no-caps @click="openMovieDetails(movie)">{{ details }}</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <q-dialog
    v-model="movieDetails"
  >
    <q-card style="width: 700px; max-width: 80vw;">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom">
            <div class="text-h6">{{ currentMovie.title }}</div>
            <div class="text-subtitle2" v-for="actor in currentMovie.actors" :key="actor">{{ actor }}</div>
          </div>
        </q-img>
        <q-card-section>
          <q-input v-model="currentMovie.description" />
        </q-card-section>
        <q-card-section>
          <q-rating v-model="currentMovie.notation" :max="5" size="32px" />
        </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div class="row full-width justify-center">
    <q-pagination
      v-model="paginationModel"
      :max="3"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';


export default defineComponent({
  name: 'Movies',
  setup() {
    const stars = ref(4)
    const movies = [
      {
        id: '1',
        title: 'Movie 1',
        description: 'Description movie 1',
        actors: [
          'Actor_1 Movie_1',
          'Actor_2 Movie_1'
        ],
        notation: 3
      },
      {
        id: '2',
        title: 'Movie 2',
        description: 'Description movie 2',
        actors: [
          'Actor_1 Movie_2',
          'Actor_2 Movie_2'
        ],
        notation: 2
      },
      {
        id: '3',
        title: 'Movie 3',
        description: 'Description movie 3',
        actors: [
          'Actor_1 Movie_3',
          'Actor_2 Movie_3'
        ],
        notation: 1
      },
      {
        id: '4',
        title: 'Movie 4',
        description: 'Description movie 4',
        actors: [
          'Actor_1 Movie_4',
          'Actor_2 Movie_4'
        ],
        notation: 3
      },
      {
        id: '5',
        title: 'Movie 5',
        description: 'Description movie 5',
        actors: [
          'Actor_1 Movie_5',
          'Actor_2 Movie_5'
        ],
        notation: 3
      },
      {
        id: '6',
        title: 'Movie 6',
        description: 'Description movie 6',
        actors: [
          'Actor_1 Movie_6',
          'Actor_2 Movie_6'
        ],
        notation: 4
      },
      {
        id: '7',
        title: 'Movie 7',
        description: 'Description movie 7',
        actors: [
          'Actor_1 Movie_7',
          'Actor_2 Movie_7'
        ],
        notation: 5
      },
      {
        id: '8',
        title: 'Movie 9',
        description: 'Description movie 9',
        actors: [
          'Actor_1 Movie_9',
          'Actor_2 Movie_9'
        ],
        notation: 5
      },
      {
        id: '9',
        title: 'Movie 9',
        description: 'Description movie 9',
        actors: [
          'Actor_1 Movie_9',
          'Actor_2 Movie_9'
        ],
        notation: 3
      },
      {
        id: '10',
        title: 'Movie 10',
        description: 'Description movie 10',
        actors: [
          'Actor_1 Movie_10',
          'Actor_2 Movie_10'
        ],
        notation: 0
      },
      {
        id: '11',
        title: 'Movie 11',
        description: 'Description movie 11',
        actors: [
          'Actor_1 Movie_11',
          'Actor_2 Movie_11'
        ],
        notation: 3
      },
      {
        id: '12',
        title: 'Movie 12',
        description: 'Description movie 12',
        actors: [
          'Actor_1 Movie_12',
          'Actor_2 Movie_12'
        ],
        notation: 2
      }
    ];
    const details = 'Détails'
    const movieDetails = ref(false)
    const currentMovie = ref(() => {
      return {
        id: '',
        title: '',
        descritpion: '',
        actors: [],
        notation: 0
      }
    })
    const openMovieDetails = (movie: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      currentMovie.value = movie
      movieDetails.value = true;
    }
    const paginationModel = ref(1)
    return {
      movies,
      stars,
      movieDetails,
      details,
      currentMovie,
      openMovieDetails,
      paginationModel
    };
  },
});
</script>

<style scoped>
  .movie-card {
    width: 100%;
    max-width: 300px;
  }
</style>
