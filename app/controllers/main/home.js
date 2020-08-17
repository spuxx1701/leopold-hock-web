import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
var that;

var textArray = ["Developing Software.", "Enhancing SAP.", "Making Games.", "Educating People."];
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 2000; // Delay between current and next text
var textArrayIndex = 0;
var charIndex = 0;

export default class HomeController extends Controller {
    @service manager;

    init() {
        super.init();
        that = this;
        that.manager.set("homeController", this);
        that.initializeAnimatedHeader();
    }

    initializeAnimatedHeader() {
        console.log("initializing...");
        if (textArray.length) setTimeout(that.type, newTextDelay + 250);
    }

    type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!document.getElementById("cursor").classList.contains("typing")) document.getElementById("cursor").classList.add("typing");
            document.getElementById("typed-text").textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(that.type, typingDelay);
        }
        else {
            document.getElementById("cursor").classList.remove("typing");
            setTimeout(that.erase, newTextDelay);
        }
    }

    erase() {
        if (charIndex > 0) {
            if (!document.getElementById("cursor").classList.contains("typing")) document.getElementById("cursor").classList.add("typing");
            document.getElementById("typed-text").textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(that.erase, erasingDelay);
        }
        else {
            document.getElementById("cursor").classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(that.type, typingDelay + 1100);
        }
    }

    onBigButtonClick(url) {
        if (url.startsWith("mailto:")) {
            window.location.href(url);
        } else {
            window.open(url);
        }
    }
}