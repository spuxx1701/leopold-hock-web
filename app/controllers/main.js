import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MainController extends Controller {
    @service manager;

    init() {
        super.init();
    }

    @action
    onHeaderButtonClick(routeName) {
        this.manager.goToRoute("main." + routeName);
        window.scrollTo(0, 0);
    }
}