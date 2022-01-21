<template>
  <v-container fluid>

    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          SEND REQUEST !
        </h2>

        <v-row justify="center">
          <v-btn
            v-for="(link, i) in importantLinks"
            :key="i"
            @click="getData(link)"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row >
          <v-progress-linear
      v-if="loader"
      :indeterminate="true"
      color="blue darken-2"
    ></v-progress-linear>
        <v-col cols="12">
        <json-viewer
            :value="dummy"
            copyable
            sort></json-viewer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import request from '../Service/main'
  export default {
    name: 'HelloWorld',

    methods: {
      getData(link) {
        console.log(link)
        this.loader = true
        request[link.type]().then(res => {
          console.log(res)
          this.dummy = res
        }).
        catch(err => console.log(err)).
        finally(() => {
          this.loader = false
        })
      },
    },
    data: () => ({
      dummy: null,
      loader: false,
      importantLinks: [
        {
          text: 'Get project',
          href: '/getProject',
          type: 'getProject'
        },
        {
          text: 'Get practice',
          href: '/practice',
          type: 'getPractice'
        },
        {
          text: 'Get backend',
          href: '/backend',
          type: 'getBackend'
        }
      ],
    }),
  }
</script>
