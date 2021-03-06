/** @format */

interface Translations {
  "view.title.chat-list": string;
  "view.title.call-list": string;
  "view.title.settings": string;
  "view.title.user-status": string;
  "view.title.new-room": string;
  "view.title.new-group": string;
  "view.user.is-typing": string;
}

interface View {
  it: Translations;
  en: Translations;
  fr: Translations;
  de: Translations;
  es: Translations;
}

export const translationsView: View = {
  it: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Chiamate",
    "view.title.settings": "Impostazioni",
    "view.title.user-status": "Status",
    "view.title.new-room": "Nuova chat",
    "view.title.new-group": "Crea gruppo",
    "view.user.is-typing": "sta scrivendo...",
  },
  en: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-group": "Create group",
    "view.user.is-typing": "is typing...",
  },
  fr: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-group": "Create group",
    "view.user.is-typing": "is typing...",
  },
  de: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-group": "Create group",
    "view.user.is-typing": "is typing...",
  },
  es: {
    "view.title.chat-list": "Chat",
    "view.title.call-list": "Calls",
    "view.title.settings": "Settings",
    "view.title.user-status": "Status",
    "view.title.new-room": "New chat",
    "view.title.new-group": "Create group",
    "view.user.is-typing": "is typing...",
  },
};

export type TTranslationsView = keyof Translations;
