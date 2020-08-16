import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class ManagerService extends Service {
    @service router;

    goToRoute(id) {
        this.router.transitionTo(id);
    }
}
