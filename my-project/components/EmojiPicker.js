App = {};
App.emojiPicker = (function (value) {
  const emojis = [
    "🔥", "⚡️", "✨", "❤️", "🏆", "🎉", "💰", "💵", "💸", "⏱", "⏰", "🚚", "💪", "🔑", "🗝", "🥇",
    "👀", "🎯", "💣", "🎁", "🎈", "⏳", "👏", "📣", "⭐️", "💡", "🔦", "🛒", "🛍", "🎟",
    "🥳", "😍", "🥰", "😎", "😂", "🤗",
  ];

  return {
    open: false,
    value: value,
    emojis() {
      return emojis;
    },
    displayValue(v) {
      if (v != null && v != "") {
        return `<span class="inline-block w-5 h-5">${v}</span>`;
      } else {
        return `<span class="w-full text-center m-auto">- Select -</span>`;
      }
    },
    setValue(e) {
      this.value = e;
      this.open = false;
      this.$el.dispatchEvent(new CustomEvent('emoji-update', {
        detail: { value: this.value },
        bubbles: true,
      }));
    },
  }
});