const app = new Vue({
  el: '#root',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        inputText: '', //dentro all'object per mantenere le bozze
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat necessitatibus dolore sit inventore velit. Repellat dolorum ut perspiciatis rerum beatae fuga minus, assumenda ab itaque laudantium, eius impedit dolores.',
          status: 'received',
          read: true,
          focused: false,
          deleted: false,
        },
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        inputText: '',
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Ok',
          status: 'received',
          read: false,
          focused: false,
          deleted: false,
        },
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        inputText: '',
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received',
          read: false,
          focused: false,
          deleted: false,
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true,
        inputText: '',
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent',
          read: true,
          focused: false,
          deleted: false,
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received',
          read: false,
          focused: false,
          deleted: false,
        }
        ],
      },
    ],
    activeIndex: 0,
    searchText: '',
    focusing: -1,
    banner: true,
  },
  methods: {
    getUserAvatar: function (i) {
      return `img/avatar${this.contacts[i].avatar}.jpg`
    },

    getLastMessage: function (i) {
      const msgsArray = this.contacts[i].messages;
      return msgsArray[msgsArray.length - 1]
    },

    isRead: function (bool) {
      return bool ? `<i class="fas fa-check-double"></i>` : `<i class="fas fa-check"></i>`
    },

    getTime: function (date) {
      return `${dayjs(date, 'DD/MM/YYYY HH:mm:ss').hour()}:${dayjs(date, 'DD/MM/YYYY HH:mm:ss').minute()}`
    },

    sendMessage: function () {
      // const now = `${dayjs().hour()}:${dayjs().minute()}`;
      this.contacts[this.activeIndex].messages.push({
        date: dayjs(),
        message: this.contacts[this.activeIndex].inputText,
        status: 'sent',
        read: true,
      });
      this.contacts[this.activeIndex].inputText = '';
      const that = this;
      setTimeout(function () {//Risposta della CPU
        that.contacts[that.activeIndex].messages.push({
          date: dayjs(),
          message: 'ok',
          status: 'received',
          read: true,
        });
      }, 1000);
    },

    searchUser: function () {
      const that = this;
      for (let i = 0; i < this.contacts.length; i++) {
        if (!(that.contacts[i].name.toLowerCase().includes(that.searchText.toLowerCase()))) {
          that.contacts[i].visible = false;
        }
        if (that.searchText == '') {
          for (let j = 0; j < that.contacts.length; j++) {
            that.contacts[j].visible = true;
          }
        }
      }
    },

    showDropdown: function (i) { //APRE IL DROPDOWN DEI MESSAGGI (problema: evitare la riapertura se clicco sulla freccia per chiudere)
      const that = this;
      const msg = this.contacts[this.activeIndex].messages[i];
      setTimeout(function () {
        if (!msg.focused) {
          msg.focused = true;
          that.focusing = i;
        }
      }, 0);
    },

    closeDropdown: function () { //CHIUDE IL DROPDOWN MESSAGGI CLICCANDO OVUNQUE
      if (this.focusing != -1) {
        this.contacts[this.activeIndex].messages[this.focusing].focused = false;
        this.focusing = -1;
      }
    },

    deleteMsg: function (i) {
      this.contacts[this.activeIndex].messages[i].message ='Questo messaggio è stato eliminato';
      this.contacts[this.activeIndex].messages[i].deleted = true;
    },

    viewMsgs: function (i) {
      this.contacts[i].messages.forEach(el => {
        el.read = true;
      });
    },
  },
});