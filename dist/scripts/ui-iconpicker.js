/**
 * ui-iconpicker
 *
 * @version   v0.1.5
 * @author    Justin Lau <justin@tclau.com>
 * @copyright Copyright (c) 2014 Justin Lau <justin@tclau.com>
 * @license   The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("values/icon-groups-map", ["angular"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/values/icon-groups-map", []);
    return module.value("iconGroupsMap", {
      "bootstrap": {
        prefix: "glyphicon glyphicon-",
        classes: ["asterisk", "plus", "euro", "minus", "cloud", "envelope", "pencil", "glass", "music", "search", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "hdd", "bullhorn", "bell", "certificate", "thumbs-up", "thumbs-down", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-right", "circle-arrow-left", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "dashboard", "paperclip", "heart-empty", "link", "phone", "pushpin", "usd", "gbp", "sort", "sort-by-alphabet", "sort-by-alphabet-alt", "sort-by-order", "sort-by-order-alt", "sort-by-attributes", "sort-by-attributes-alt", "unchecked", "expand", "collapse-down", "collapse-up", "log-in", "flash", "log-out", "new-window", "record", "save", "open", "saved", "import", "export", "send", "floppy-disk", "floppy-saved", "floppy-remove", "floppy-save", "floppy-open", "credit-card", "transfer", "cutlery", "header", "compressed", "earphone", "phone-alt", "tower", "stats", "sd-video", "hd-video", "subtitles", "sound-stereo", "sound-dolby", "sound-5-1", "sound-6-1", "sound-7-1", "copyright-mark", "registration-mark", "cloud-download", "cloud-upload", "tree-conifer", "tree-deciduous"]
      },
      "font-awesome": {
        prefix: "fa fa-lg fa-",
        classes: ["glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-asc", "sort-up", "sort-desc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "reply-all", "mail-reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o"]
      },
      "ionicons": {
        prefix: "icon ion-",
        classes: ["alert-circled", "alert", "android-add-circle", "android-add", "android-alarm-clock", "android-alert", "android-apps", "android-archive", "android-arrow-back", "android-arrow-down", "android-arrow-dropdown-circle", "android-arrow-dropdown", "android-arrow-dropleft-circle", "android-arrow-dropleft", "android-arrow-dropright-circle", "android-arrow-dropright", "android-arrow-dropup-circle", "android-arrow-dropup", "android-arrow-forward", "android-arrow-up", "android-attach", "android-bar", "android-bicycle", "android-boat", "android-bookmark", "android-bulb", "android-bus", "android-calendar", "android-call", "android-camera", "android-cancel", "android-car", "android-cart", "android-chat", "android-checkbox-blank", "android-checkbox-outline-blank", "android-checkbox-outline", "android-checkbox", "android-checkmark-circle", "android-clipboard", "android-close", "android-cloud-circle", "android-cloud-done", "android-cloud-outline", "android-cloud", "android-color-palette", "android-compass", "android-contact", "android-contacts", "android-contract", "android-create", "android-delete", "android-desktop", "android-document", "android-done-all", "android-done", "android-download", "android-drafts", "android-exit", "android-expand", "android-favorite-outline", "android-favorite", "android-film", "android-folder-open", "android-folder", "android-funnel", "android-globe", "android-hand", "android-hangout", "android-happy", "android-home", "android-image", "android-laptop", "android-list", "android-locate", "android-lock", "android-mail", "android-map", "android-menu", "android-microphone-off", "android-microphone", "android-more-horizontal", "android-more-vertical", "android-navigate", "android-notifications-none", "android-notifications-off", "android-notifications", "android-open", "android-options", "android-people", "android-person-add", "android-person", "android-phone-landscape", "android-phone-portrait", "android-pin", "android-plane", "android-playstore", "android-print", "android-radio-button-off", "android-radio-button-on", "android-refresh", "android-remove-circle", "android-remove", "android-restaurant", "android-sad", "android-search", "android-send", "android-settings", "android-share-alt", "android-share", "android-star-half", "android-star-outline", "android-star", "android-stopwatch", "android-subway", "android-sunny", "android-sync", "android-textsms", "android-time", "android-train", "android-unlock", "android-upload", "android-volume-down", "android-volume-mute", "android-volume-off", "android-volume-up", "android-walk", "android-warning", "android-watch", "android-wifi", "aperture", "archive", "arrow-down-a", "arrow-down-b", "arrow-down-c", "arrow-expand", "arrow-graph-down-left", "arrow-graph-down-right", "arrow-graph-up-left", "arrow-graph-up-right", "arrow-left-a", "arrow-left-b", "arrow-left-c", "arrow-move", "arrow-resize", "arrow-return-left", "arrow-return-right", "arrow-right-a", "arrow-right-b", "arrow-right-c", "arrow-shrink", "arrow-swap", "arrow-up-a", "arrow-up-b", "arrow-up-c", "asterisk", "at", "backspace-outline", "backspace", "bag", "battery-charging", "battery-empty", "battery-full", "battery-half", "battery-low", "beaker", "beer", "bluetooth", "bonfire", "bookmark", "bowtie", "briefcase", "bug", "calculator", "calendar", "camera", "card", "cash", "chatbox-working", "chatbox", "chatboxes", "chatbubble-working", "chatbubble", "chatbubbles", "checkmark-circled", "checkmark-round", "checkmark", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "clipboard", "clock", "close-circled", "close-round", "close", "closed-captioning", "cloud", "code-download", "code-working", "code", "coffee", "compass", "compose", "connection-bars", "contrast", "crop", "cube", "disc", "document-text", "document", "drag", "earth", "easel", "edit", "egg", "eject", "email-unread", "email", "erlenmeyer-flask-bubbles", "erlenmeyer-flask", "eye-disabled", "eye", "female", "filing", "film-marker", "fireball", "flag", "flame", "flash-off", "flash", "folder", "fork-repo", "fork", "forward", "funnel", "gear-a", "gear-b", "grid", "hammer", "happy-outline", "happy", "headphone", "heart-broken", "heart", "help-buoy", "help-circled", "help", "home", "icecream", "image", "images", "information-circled", "information", "ionic", "ios-alarm-outline", "ios-alarm", "ios-albums-outline", "ios-albums", "ios-americanfootball-outline", "ios-americanfootball", "ios-analytics-outline", "ios-analytics", "ios-arrow-back", "ios-arrow-down", "ios-arrow-forward", "ios-arrow-left", "ios-arrow-right", "ios-arrow-thin-down", "ios-arrow-thin-left", "ios-arrow-thin-right", "ios-arrow-thin-up", "ios-arrow-up", "ios-at-outline", "ios-at", "ios-barcode-outline", "ios-barcode", "ios-baseball-outline", "ios-baseball", "ios-basketball-outline", "ios-basketball", "ios-bell-outline", "ios-bell", "ios-body-outline", "ios-body", "ios-bolt-outline", "ios-bolt", "ios-book-outline", "ios-book", "ios-bookmarks-outline", "ios-bookmarks", "ios-box-outline", "ios-box", "ios-briefcase-outline", "ios-briefcase", "ios-browsers-outline", "ios-browsers", "ios-calculator-outline", "ios-calculator", "ios-calendar-outline", "ios-calendar", "ios-camera-outline", "ios-camera", "ios-cart-outline", "ios-cart", "ios-chatboxes-outline", "ios-chatboxes", "ios-chatbubble-outline", "ios-chatbubble", "ios-checkmark-empty", "ios-checkmark-outline", "ios-checkmark", "ios-circle-filled", "ios-circle-outline", "ios-clock-outline", "ios-clock", "ios-close-empty", "ios-close-outline", "ios-close", "ios-cloud-download-outline", "ios-cloud-download", "ios-cloud-outline", "ios-cloud-upload-outline", "ios-cloud-upload", "ios-cloud", "ios-cloudy-night-outline", "ios-cloudy-night", "ios-cloudy-outline", "ios-cloudy", "ios-cog-outline", "ios-cog", "ios-color-filter-outline", "ios-color-filter", "ios-color-wand-outline", "ios-color-wand", "ios-compose-outline", "ios-compose", "ios-contact-outline", "ios-contact", "ios-copy-outline", "ios-copy", "ios-crop-strong", "ios-crop", "ios-download-outline", "ios-download", "ios-drag", "ios-email-outline", "ios-email", "ios-eye-outline", "ios-eye", "ios-fastforward-outline", "ios-fastforward", "ios-filing-outline", "ios-filing", "ios-film-outline", "ios-film", "ios-flag-outline", "ios-flag", "ios-flame-outline", "ios-flame", "ios-flask-outline", "ios-flask", "ios-flower-outline", "ios-flower", "ios-folder-outline", "ios-folder", "ios-football-outline", "ios-football", "ios-game-controller-a-outline", "ios-game-controller-a", "ios-game-controller-b-outline", "ios-game-controller-b", "ios-gear-outline", "ios-gear", "ios-glasses-outline", "ios-glasses", "ios-grid-view-outline", "ios-grid-view", "ios-heart-outline", "ios-heart", "ios-help-empty", "ios-help-outline", "ios-help", "ios-home-outline", "ios-home", "ios-infinite-outline", "ios-infinite", "ios-information-empty", "ios-information-outline", "ios-information", "ios-ionic-outline", "ios-keypad-outline", "ios-keypad", "ios-lightbulb-outline", "ios-lightbulb", "ios-list-outline", "ios-list", "ios-location-outline", "ios-location", "ios-locked-outline", "ios-locked", "ios-loop-strong", "ios-loop", "ios-medical-outline", "ios-medical", "ios-medkit-outline", "ios-medkit", "ios-mic-off", "ios-mic-outline", "ios-mic", "ios-minus-empty", "ios-minus-outline", "ios-minus", "ios-monitor-outline", "ios-monitor", "ios-moon-outline", "ios-moon", "ios-more-outline", "ios-more", "ios-musical-note", "ios-musical-notes", "ios-navigate-outline", "ios-navigate", "ios-nutrition-outline", "ios-nutrition", "ios-paper-outline", "ios-paper", "ios-paperplane-outline", "ios-paperplane", "ios-partlysunny-outline", "ios-partlysunny", "ios-pause-outline", "ios-pause", "ios-paw-outline", "ios-paw", "ios-people-outline", "ios-people", "ios-person-outline", "ios-person", "ios-personadd-outline", "ios-personadd", "ios-photos-outline", "ios-photos", "ios-pie-outline", "ios-pie", "ios-pint-outline", "ios-pint", "ios-play-outline", "ios-play", "ios-plus-empty", "ios-plus-outline", "ios-plus", "ios-pricetag-outline", "ios-pricetag", "ios-pricetags-outline", "ios-pricetags", "ios-printer-outline", "ios-printer", "ios-pulse-strong", "ios-pulse", "ios-rainy-outline", "ios-rainy", "ios-recording-outline", "ios-recording", "ios-redo-outline", "ios-redo", "ios-refresh-empty", "ios-refresh-outline", "ios-refresh", "ios-reload", "ios-reverse-camera-outline", "ios-reverse-camera", "ios-rewind-outline", "ios-rewind", "ios-rose-outline", "ios-rose", "ios-search-strong", "ios-search", "ios-settings-strong", "ios-settings", "ios-shuffle-strong", "ios-shuffle", "ios-skipbackward-outline", "ios-skipbackward", "ios-skipforward-outline", "ios-skipforward", "ios-snowy", "ios-speedometer-outline", "ios-speedometer", "ios-star-half", "ios-star-outline", "ios-star", "ios-stopwatch-outline", "ios-stopwatch", "ios-sunny-outline", "ios-sunny", "ios-telephone-outline", "ios-telephone", "ios-tennisball-outline", "ios-tennisball", "ios-thunderstorm-outline", "ios-thunderstorm", "ios-time-outline", "ios-time", "ios-timer-outline", "ios-timer", "ios-toggle-outline", "ios-toggle", "ios-trash-outline", "ios-trash", "ios-undo-outline", "ios-undo", "ios-unlocked-outline", "ios-unlocked", "ios-upload-outline", "ios-upload", "ios-videocam-outline", "ios-videocam", "ios-volume-high", "ios-volume-low", "ios-wineglass-outline", "ios-wineglass", "ios-world-outline", "ios-world", "ipad", "iphone", "ipod", "jet", "key", "knife", "laptop", "leaf", "levels", "lightbulb", "link", "load-a", "load-b", "load-c", "load-d", "location", "lock-combination", "locked", "log-in", "log-out", "loop", "magnet", "male", "man", "map", "medkit", "merge", "mic-a", "mic-b", "mic-c", "minus-circled", "minus-round", "minus", "model-s", "monitor", "more", "mouse", "music-note", "navicon-round", "navicon", "navigate", "network", "no-smoking", "nuclear", "outlet", "paintbrush", "paintbucket", "paper-airplane", "paperclip", "pause", "person-add", "person-stalker", "person", "pie-graph", "pin", "pinpoint", "pizza", "plane", "planet", "play", "playstation", "plus-circled", "plus-round", "plus", "podium", "pound", "power", "pricetag", "pricetags", "printer", "pull-request", "qr-scanner", "quote", "radio-waves", "record", "refresh", "reply-all", "reply", "ribbon-a", "ribbon-b", "sad-outline", "sad", "scissors", "search", "settings", "share", "shuffle", "skip-backward", "skip-forward", "social-android-outline", "social-android", "social-angular-outline", "social-angular", "social-apple-outline", "social-apple", "social-bitcoin-outline", "social-bitcoin", "social-buffer-outline", "social-buffer", "social-chrome-outline", "social-chrome", "social-codepen-outline", "social-codepen", "social-css3-outline", "social-css3", "social-designernews-outline", "social-designernews", "social-dribbble-outline", "social-dribbble", "social-dropbox-outline", "social-dropbox", "social-euro-outline", "social-euro", "social-facebook-outline", "social-facebook", "social-foursquare-outline", "social-foursquare", "social-freebsd-devil", "social-github-outline", "social-github", "social-google-outline", "social-google", "social-googleplus-outline", "social-googleplus", "social-hackernews-outline", "social-hackernews", "social-html5-outline", "social-html5", "social-instagram-outline", "social-instagram", "social-javascript-outline", "social-javascript", "social-linkedin-outline", "social-linkedin", "social-markdown", "social-nodejs", "social-octocat", "social-pinterest-outline", "social-pinterest", "social-python", "social-reddit-outline", "social-reddit", "social-rss-outline", "social-rss", "social-sass", "social-skype-outline", "social-skype", "social-snapchat-outline", "social-snapchat", "social-tumblr-outline", "social-tumblr", "social-tux", "social-twitch-outline", "social-twitch", "social-twitter-outline", "social-twitter", "social-usd-outline", "social-usd", "social-vimeo-outline", "social-vimeo", "social-whatsapp-outline", "social-whatsapp", "social-windows-outline", "social-windows", "social-wordpress-outline", "social-wordpress", "social-yahoo-outline", "social-yahoo", "social-yen-outline", "social-yen", "social-youtube-outline", "social-youtube", "soup-can-outline", "soup-can", "speakerphone", "speedometer", "spoon", "star", "stats-bars", "steam", "stop", "thermometer", "thumbsdown", "thumbsup", "toggle-filled", "toggle", "transgender", "trash-a", "trash-b", "trophy", "tshirt-outline", "tshirt", "umbrella", "university", "unlocked", "upload", "usb", "videocamera", "volume-high", "volume-low", "volume-medium", "volume-mute", "wand", "waterdrop", "wifi", "wineglass", "woman", "wrench", "xbox"]
      }
    });
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("services/IconGroupCollection", ["angular", "values/icon-groups-map"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/services/IconGroupCollection", ["ui-iconpicker/values/icon-groups-map"]);
    return module.factory("IconGroupCollection", [
      "iconGroupsMap", function(iconGroupsMap) {
        var IconGroupCollection;
        return IconGroupCollection = (function() {
          function IconGroupCollection(groupIdLiteral) {
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            this.iconGroupsMap = {};
            this.includeGroups(groupIdLiteral);
          }

          IconGroupCollection.prototype.filterByGroups = function(groupIdLiteral) {
            var group, groupId, groupIds, _ref;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            if (groupIdLiteral !== "all") {
              groupIds = groupIdLiteral.split(" ");
              _ref = this.iconGroupsMap;
              for (groupId in _ref) {
                group = _ref[groupId];
                if (groupIds.indexOf(groupId) !== -1) {
                  delete this.iconGroupsMap[groupId];
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.includeGroups = function(groupIdLiteral) {
            var group, groupId, groupIds;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            groupIds = groupIdLiteral.split(" ");
            for (groupId in iconGroupsMap) {
              group = iconGroupsMap[groupId];
              if (this.iconGroupsMap[groupId] == null) {
                if (groupIdLiteral === "all" || groupIds.indexOf(groupId) !== -1) {
                  this.iconGroupsMap[groupId] = group;
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.getClassArray = function() {
            var classes, group, iconClass, id, _i, _len, _ref, _ref1;
            classes = [];
            _ref = this.iconGroupsMap;
            for (id in _ref) {
              group = _ref[id];
              _ref1 = group.classes;
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                iconClass = _ref1[_i];
                classes.push(group.prefix + iconClass);
              }
            }
            return classes;
          };

          return IconGroupCollection;

        })();
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("templates/iconpicker", ["angular", "angular-bootstrap"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/templates/iconpicker", ["ui.bootstrap"]);
    return module.run([
      "$templateCache", function($templateCache) {
        return $templateCache.put("templates/iconpicker.html", "<span class=\"btn-group ui-iconpicker\" ng-class=\"{ disabled: disabled }\" uib-dropdown>\n	<button type=\"button\" class=\"btn btn-default\"><i class=\"{{ iconClass }}\" uib-dropdown-toggle></i><span class=\"caret\"></span>\n	</button>\n	<ul role=\"menu\" uib-dropdown-menu>\n		<li ng-repeat=\"class in availableIconClasses\">\n			<button class=\"btn btn-default\" type=\"button\" ng-click=\"$parent.iconClass = class\"><span class=\"{{ class }}\"></span></button>\n		</li>\n	</ul>\n	<input name=\"{{ name }}\" type=\"hidden\" value=\"{{ iconClass }}\" ng-if=\"name\" />\n</span>");
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("directives/ui-iconpicker", ["angular", "services/IconGroupCollection", "templates/iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/directives/ui-iconpicker", ["ui-iconpicker/services/IconGroupCollection", "ui-iconpicker/templates/iconpicker"]);
    return module.directive("uiIconpicker", [
      "IconGroupCollection", function(IconGroupCollection) {
        return {
          replace: true,
          restrict: "E",
          scope: {
            name: "@",
            model: "=?ngModel"
          },
          templateUrl: "templates/iconpicker.html",
          link: function($scope, $element, attrs) {
            var _ref;
            $scope.availableIconClasses = (new IconGroupCollection(attrs.groups)).getClassArray();
            $scope.iconClass = (_ref = attrs.value) != null ? _ref : $scope.availableIconClasses[0];
            if (attrs.ngModel) {
              $scope.model = $scope[attrs.ngModel];
              $scope.$watch("iconClass", function() {
                return $scope.model = $scope.iconClass;
              });
              $scope.$watch("model", function() {
                return $scope.iconClass = $scope.model;
              });
            }
            $scope.$dropdownButton = $element.find("button").eq(0);
            return $scope.disabled = attrs.disabled != null;
          }
        };
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("ui-iconpicker", ["angular", "directives/ui-iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    return angular.module("ui-iconpicker", ["ui-iconpicker/directives/ui-iconpicker"]);
  });

}).call(this);

