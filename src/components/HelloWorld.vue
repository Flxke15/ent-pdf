<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-tabs v-model="tab">
        <v-tab value="1">Form</v-tab>
        <v-tab value="2">PDF</v-tab>
        <v-tab value="3">v-data-table</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item value="1">
          <Form />
        </v-window-item>
        <v-window-item value="2">
          <h1>สบ.3</h1>
            <v-btn
              rounded
              size="large"
              color="primary"
              variant="outlined"
              @click="printPDF"
            >
              Sb2
            </v-btn>
            
            <v-btn
              rounded
              size="large"
              color="primary"
              variant="tonal"
              @click="printEnt"
            >
              Ent
            </v-btn>
        </v-window-item>
        <v-window-item value="3">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :sort-by="[{ key: 'calories', order: 'asc' }]"
          >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

  <v-data-table
    :headers="memberHeaders"
    :items="memberList"
    class="mt-10"
  >
   <template v-slot:item.actions={item}>
    <v-btn
      variant="tonal"
      @click="memCheckin"
    >
      Check In
    </v-btn>
   </template>
  </v-data-table>

  <v-dialog v-model="memberDialog" width="500">
    <v-card>
      <v-card-title>
        This is Title.
      </v-card-title>
      <v-card-text>
        <p>test dialog</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          variant="tonal"
          @click="memberDialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
        </v-window-item>
      </v-window>
      <v-btn
              rounded
              size="large"
              color="primary"
              variant="outlined"
              @click="printSb3"
            >
              Sb3
            </v-btn>

            <v-btn
              rounded
              size="large"
              color="primary"
              variant="outlined"
              @click="printSb5"
            >
              Sb5
            </v-btn>
    </v-responsive>

   
  </v-container>
</template>

<script>
import print from '@/print/sb2'
import Sb3 from '@/print/sb3'
import Sb5 from '@/print/sb5'
import entertainment from '@/print/entertainment'
import Form from '@/components/Form.vue'

export default {
  components:{
    Form
  },

  data: () => ({
      tab: null,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Calories', key: 'calories' },
        { title: 'Fat (g)', key: 'fat' },
        { title: 'Carbs (g)', key: 'carbs' },
        { title: 'Protein (g)', key: 'protein' },
        { title: 'testing', key: 'fullname' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },

      memberDialog: false,
      memberList: [],
      memberHeaders: [
        {
          title: 'UserID',
          align: 'start',
          sortable: false,
          key: 'username',
        },
        { title: 'Name', key: 'name' },
        { title: 'Team', key: 'team' },
        { title: 'Section', key: 'section' },
        { title: 'Type', key: 'type' },
        { title: 'Status', key: 'status' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.createMember()
    },

    
  methods: {
    printPDF(){
      print.exportSb2();
    },

    printEnt(){
      entertainment.exportReqEn();
    },

    printSb3(){
      Sb3.exportSb3();
    },

    printSb5(){
      Sb5.exportSb5();
    },
    
    createMember(){
      this.memberList = [
        {
          username: 'EX1',
          name: 'prame',
          team: 'CW',
          section: 'Dev',
          type: 'ONSITE',
          status: 'Check-in'
        },
        {
          username: 'EX2',
          name: 'bam',
          team: 'CDT',
          section: 'Dev',
          type: 'ONSITE',
          status: 'Check-in'
        },
        {
          username: 'EX3',
          name: 'fluke',
          team: 'CW',
          section: 'Dev',
          type: 'ONSITE',
          status: 'Check-in'
        },
      ]
    },

    memCheckin(){
      this.memberDialog = true
    },

    initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },

      sum(){
        this.desserts.map((item) => {
          item.fullname = item.name + " " + item.name
          // console.log(item);
        })
      }
  },

  mounted(){
    this.sum()
  }
}
</script>
