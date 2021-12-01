const app = new Vue({
  el: '#root',
  data: {
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent',
          read: true,
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Ricordati di dargli da mangiare',
          status: 'sent',
          read: true,
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Tutto fatto!',
          status: 'received',
          read: true,
        },
        {
          date: '10/01/2020 16:15:22',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat necessitatibus dolore sit inventore velit. Repellat dolorum ut perspiciatis rerum beatae fuga minus, assumenda ab itaque laudantium, eius impedit dolores.',
          status: 'received',
          read: true,
        },
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          message: 'Ciao come stai?',
          status: 'sent',
          read: true,
        },
        {
          date: '20/03/2020 16:30:55',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received',
          read: true,
        },
        {
          date: '20/03/2020 16:35:00',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received',
          read: true,
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          message: 'La Marianna va in campagna',
          status: 'received',
          read: true,
        },
        {
          date: '28/03/2020 10:20:10',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent',
          read: false,
        },
        {
          date: '28/03/2020 16:15:22',
          message: 'Ah scusa!',
          status: 'received',
          read: false,
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_6',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent',
          read: true,
        },
        {
          date: '10/01/2020 15:50:00',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received',
          read: true,
        }
        ],
      },
    ],
    activeIndex: 0,
    inputText: '',
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
    sendMessage: function () {
      this.contacts[this.activeIndex].messages.push({
        date: '10/01/2020 15:50:00',
        message: this.inputText,
        status: 'sent',
        read: true,
      });
      this.inputText = '';
    },
  },
});